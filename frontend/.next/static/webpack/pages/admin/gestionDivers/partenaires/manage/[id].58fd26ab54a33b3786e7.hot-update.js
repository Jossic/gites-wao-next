webpackHotUpdate_N_E("pages/admin/gestionDivers/partenaires/manage/[id]",{

/***/ "./actions/partenairesActions.js":
/*!***************************************!*\
  !*** ./actions/partenairesActions.js ***!
  \***************************************/
/*! exports provided: ListAllPartenaires, listePartenaireById, createPartenaire, updatePartenaire, removePartenaire, ListAllPartenaireCards, listePartenaireCardById, createPartenaireCard, updatePartenaireCard, removePartenaireCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAllPartenaires", function() { return ListAllPartenaires; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listePartenaireById", function() { return listePartenaireById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPartenaire", function() { return createPartenaire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePartenaire", function() { return updatePartenaire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePartenaire", function() { return removePartenaire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAllPartenaireCards", function() { return ListAllPartenaireCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listePartenaireCardById", function() { return listePartenaireCardById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPartenaireCard", function() { return createPartenaireCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePartenaireCard", function() { return updatePartenaireCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePartenaireCard", function() { return removePartenaireCard; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");


var ListAllPartenaires = function ListAllPartenaires() {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/divers/partenaires"), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
_c = ListAllPartenaires;
var listePartenaireById = function listePartenaireById(id, token) {
  console.log('Call listePartenaireById Action');
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/divers/partenaire/").concat(id), {
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
var createPartenaire = function createPartenaire(partenaire, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/divers/partenaire"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: JSON.stringify(partenaire)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
}; // export const listReviewsBySlug = async (slug) => {
// 	try {
// 		const { data } = await axios.get(`${API}/reviews/${slug}`);
// 		// console.log(data);
// 		return data;
// 	} catch (error) {
// 		console.error(error);
// 	}
// };

var updatePartenaire = function updatePartenaire(partenaire, id, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/divers/partenaire/").concat(id), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: JSON.stringify(partenaire)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var removePartenaire = function removePartenaire(id, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/divers/partenaire/").concat(id), {
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
var ListAllPartenaireCards = function ListAllPartenaireCards(id) {
  console.log('call ListAllPartenaireCards action');
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/divers/partenaire/").concat(id, "/cards"), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
_c2 = ListAllPartenaireCards;
var listePartenaireCardById = function listePartenaireCardById(id, idCard, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/divers/partenaire/").concat(id, "/card/").concat(idCard), {
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
var createPartenaireCard = function createPartenaireCard(partenaireCard, id, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/divers/partenaire/").concat(id, "/card"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: JSON.stringify(partenaireCard)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var updatePartenaireCard = function updatePartenaireCard(partenaireCard, id, idCard, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/divers/partenaire/").concat(id, "/card/").concat(idCard), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: JSON.stringify(partenaireCard)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var removePartenaireCard = function removePartenaireCard(id, idCard, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/divers/partenaire/").concat(id, "/card/").concat(idCard), {
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

var _c, _c2;

$RefreshReg$(_c, "ListAllPartenaires");
$RefreshReg$(_c2, "ListAllPartenaireCards");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9wYXJ0ZW5haXJlc0FjdGlvbnMuanMiXSwibmFtZXMiOlsiTGlzdEFsbFBhcnRlbmFpcmVzIiwiZmV0Y2giLCJBUEkiLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImxpc3RlUGFydGVuYWlyZUJ5SWQiLCJpZCIsInRva2VuIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjcmVhdGVQYXJ0ZW5haXJlIiwicGFydGVuYWlyZSIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidXBkYXRlUGFydGVuYWlyZSIsInJlbW92ZVBhcnRlbmFpcmUiLCJMaXN0QWxsUGFydGVuYWlyZUNhcmRzIiwibGlzdGVQYXJ0ZW5haXJlQ2FyZEJ5SWQiLCJpZENhcmQiLCJjcmVhdGVQYXJ0ZW5haXJlQ2FyZCIsInBhcnRlbmFpcmVDYXJkIiwidXBkYXRlUGFydGVuYWlyZUNhcmQiLCJyZW1vdmVQYXJ0ZW5haXJlQ2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQ3ZDLFNBQU9DLHVEQUFLLFdBQUlDLDJDQUFKLDBCQUE4QjtBQUN6Q0MsVUFBTSxFQUFFO0FBRGlDLEdBQTlCLENBQUwsQ0FHTEMsSUFISyxDQUdBLFVBQUNDLFFBQUQsRUFBYztBQUNuQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNBLEdBTEssV0FNQyxVQUFDQyxHQUFEO0FBQUEsV0FBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBVDtBQUFBLEdBTkQsQ0FBUDtBQU9BLENBUk07S0FBTVAsa0I7QUFVTixJQUFNVSxtQkFBbUIsR0FBRyxTQUF0QkEs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QUFDQyxJQUFULEVBQVA7QUFDQSxHQVJLLFdBU0MsVUFBQ0MsR0FBRDtBQUFBLFdBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQVQ7QUFBQSxHQVRELENBQVA7QUFVQSxDQVhNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2dlc3Rpb25EaXZlcnMvcGFydGVuYWlyZXMvbWFuYWdlL1tpZF0uNThmZDI2YWI1NGEzM2IzNzg2ZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0QWxsUGFydGVuYWlyZXMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vZGl2ZXJzL3BhcnRlbmFpcmVzYCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RlUGFydGVuYWlyZUJ5SWQgPSAoaWQsIHRva2VuKSA9PiB7XHJcblx0Y29uc29sZS5sb2coJ0NhbGwgbGlzdGVQYXJ0ZW5haXJlQnlJZCBBY3Rpb24nKTtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9kaXZlcnMvcGFydGVuYWlyZS8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBhcnRlbmFpcmUgPSAocGFydGVuYWlyZSwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9kaXZlcnMvcGFydGVuYWlyZWAsIHtcclxuXHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocGFydGVuYWlyZSksXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBsaXN0UmV2aWV3c0J5U2x1ZyA9IGFzeW5jIChzbHVnKSA9PiB7XHJcbi8vIFx0dHJ5IHtcclxuLy8gXHRcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSX0vcmV2aWV3cy8ke3NsdWd9YCk7XHJcbi8vIFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuLy8gXHRcdHJldHVybiBkYXRhO1xyXG4vLyBcdH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vIFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuLy8gXHR9XHJcbi8vIH07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUGFydGVuYWlyZSA9IChwYXJ0ZW5haXJlLCBpZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9kaXZlcnMvcGFydGVuYWlyZS8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ1BVVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcnRlbmFpcmUpLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUGFydGVuYWlyZSA9IChpZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9kaXZlcnMvcGFydGVuYWlyZS8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ0RFTEVURScsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RBbGxQYXJ0ZW5haXJlQ2FyZHMgPSAoaWQpID0+IHtcclxuXHRjb25zb2xlLmxvZygnY2FsbCBMaXN0QWxsUGFydGVuYWlyZUNhcmRzIGFjdGlvbicpO1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2RpdmVycy9wYXJ0ZW5haXJlLyR7aWR9L2NhcmRzYCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RlUGFydGVuYWlyZUNhcmRCeUlkID0gKGlkLCBpZENhcmQsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vZGl2ZXJzL3BhcnRlbmFpcmUvJHtpZH0vY2FyZC8ke2lkQ2FyZH1gLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVQYXJ0ZW5haXJlQ2FyZCA9IChwYXJ0ZW5haXJlQ2FyZCwgaWQsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vZGl2ZXJzL3BhcnRlbmFpcmUvJHtpZH0vY2FyZGAsIHtcclxuXHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocGFydGVuYWlyZUNhcmQpLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUGFydGVuYWlyZUNhcmQgPSAocGFydGVuYWlyZUNhcmQsIGlkLCBpZENhcmQsIHRva2VuKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vZGl2ZXJzL3BhcnRlbmFpcmUvJHtpZH0vY2FyZC8ke2lkQ2FyZH1gLCB7XHJcblx0XHRtZXRob2Q6ICdQVVQnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuXHRcdH0sXHJcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShwYXJ0ZW5haXJlQ2FyZCksXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVQYXJ0ZW5haXJlQ2FyZCA9IChpZCwgaWRDYXJkLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2RpdmVycy9wYXJ0ZW5haXJlLyR7aWR9L2NhcmQvJHtpZENhcmR9YCwge1xyXG5cdFx0bWV0aG9kOiAnREVMRVRFJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=