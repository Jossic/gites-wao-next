webpackHotUpdate_N_E("pages/gite/[slug]",{

/***/ "./actions/giteActions.js":
/*!********************************!*\
  !*** ./actions/giteActions.js ***!
  \********************************/
/*! exports provided: listGiteDetails, listeDesGites, listeDesImages, saveImageData, listGitesNoms, createGite, deleteGite, updateGite, createQR, listeOneQR, listeDesQR, removeQR, updateQR, listPhotosByNom */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listPhotosByNom", function() { return listPhotosByNom; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.js");





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
var listeDesImages = function listeDesImages() {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/photos"), {
    method: 'GET'
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
  });
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
};
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
};
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
var listPhotosByNom = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(nom) {
    var _yield$axios$get2, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/photo/").concat(nom));

          case 3:
            _yield$axios$get2 = _context2.sent;
            data = _yield$axios$get2.data;
            return _context2.abrupt("return", data);

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function listPhotosByNom(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9naXRlQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJsaXN0R2l0ZURldGFpbHMiLCJzbHVnIiwiYXhpb3MiLCJnZXQiLCJBUEkiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwibGlzdGVEZXNHaXRlcyIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImVyciIsImxvZyIsImxpc3RlRGVzSW1hZ2VzIiwic2F2ZUltYWdlRGF0YSIsInBob3RvcyIsInRva2VuIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImxpc3RHaXRlc05vbXMiLCJjcmVhdGVHaXRlIiwiZ2l0ZSIsImRlbGV0ZUdpdGUiLCJBY2NlcHQiLCJ1cGRhdGVHaXRlIiwiY3JlYXRlUVIiLCJxciIsImxpc3RlT25lUVIiLCJpZCIsImxpc3RlRGVzUVIiLCJyZW1vdmVRUiIsInVwZGF0ZVFSIiwibGlzdFBob3Rvc0J5Tm9tIiwibm9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGVBQWU7QUFBQSw4TEFBRyxpQkFBT0MsSUFBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVOQyw0Q0FBSyxDQUFDQyxHQUFOLFdBQWFDLDJDQUFiLG1CQUF5QkgsSUFBekIsRUFGTTs7QUFBQTtBQUFBO0FBRXJCSSxnQkFGcUIsb0JBRXJCQSxJQUZxQjtBQUFBLDZDQUl0QkEsSUFKc0I7O0FBQUE7QUFBQTtBQUFBO0FBTTdCQyxtQkFBTyxDQUFDQyxLQUFSOztBQU42QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFmUCxlQUFlO0FBQUE7QUFBQTtBQUFBLEdBQXJCO0FBVUEsSUFBTVEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FB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QUFhQywyQ0FBYixvQkFBMEJtQyxHQUExQixFQUZNOztBQUFBO0FBQUE7QUFFckJsQyxnQkFGcUIscUJBRXJCQSxJQUZxQjtBQUFBLDhDQUl0QkEsSUFKc0I7O0FBQUE7QUFBQTtBQUFBO0FBTTdCQyxtQkFBTyxDQUFDQyxLQUFSOztBQU42QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFmK0IsZUFBZTtBQUFBO0FBQUE7QUFBQSxHQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9naXRlL1tzbHVnXS44NWU4ODAyNjU1OTM3NGMwNGQ2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RHaXRlRGV0YWlscyA9IGFzeW5jIChzbHVnKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSX0vZ2l0ZS8ke3NsdWd9YCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdHJldHVybiBkYXRhO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdGVEZXNHaXRlcyA9ICgpID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9naXRlc2AsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0ZURlc0ltYWdlcyA9ICgpID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9waG90b3NgLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZUltYWdlRGF0YSA9IChwaG90b3MsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vdXBsb2FkLWltYWdlc2AsIHtcclxuXHRcdG1ldGhvZDogJ1BVVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHBob3RvcyksXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHQvLyBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RHaXRlc05vbXMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vZ2l0ZXMvbm9tc2AsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVHaXRlID0gKGdpdGUsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vZ2l0ZWAsIHtcclxuXHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShnaXRlKSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdC8vIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlR2l0ZSA9IChzbHVnLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2dpdGUvJHtzbHVnfWAsIHtcclxuXHRcdG1ldGhvZDogJ0RFTEVURScsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHQvLyBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUdpdGUgPSAoZ2l0ZSwgc2x1ZywgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9naXRlLyR7c2x1Z31gLCB7XHJcblx0XHRtZXRob2Q6ICdQVVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShnaXRlKSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdC8vIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUVIgPSAocXIsIHRva2VuKSA9PiB7XHJcblx0Y29uc29sZS5sb2coJ2RhbiBhY3Rpb24nLCBxcik7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcXJgLCB7XHJcblx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHFyKSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdC8vIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdGVPbmVRUiA9IChpZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9xci8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RlRGVzUVIgPSAoKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcXJgLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUVIgPSAoaWQsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vcXIvJHtpZH1gLCB7XHJcblx0XHRtZXRob2Q6ICdERUxFVEUnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUVIgPSAocXIsIGlkLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L3FyLyR7aWR9YCwge1xyXG5cdFx0bWV0aG9kOiAnUFVUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocXIpLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0Ly8gaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0UGhvdG9zQnlOb20gPSBhc3luYyAobm9tKSA9PiB7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSX0vcGhvdG8vJHtub219YCk7XHJcblx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdHJldHVybiBkYXRhO1xyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHR9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=