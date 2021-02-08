webpackHotUpdate_N_E("pages/admin/crud/divers/partenaire/create",{

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
var listePartenaireById = function listePartenaireById(id) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/divers/partenaire/").concat(id), {
    method: 'GET'
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
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/divers/partenaire/").concat(id, "/cards"), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
_c2 = ListAllPartenaireCards;
var listePartenaireCardById = function listePartenaireCardById(id, idCard) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/divers/partenaire/").concat(id, "/card/").concat(idCard), {
    method: 'GET'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9wYXJ0ZW5haXJlc0FjdGlvbnMuanMiXSwibmFtZXMiOlsiTGlzdEFsbFBhcnRlbmFpcmVzIiwiZmV0Y2giLCJBUEkiLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImxpc3RlUGFydGVuYWlyZUJ5SWQiLCJpZCIsImNyZWF0ZVBhcnRlbmFpcmUiLCJwYXJ0ZW5haXJlIiwidG9rZW4iLCJoZWFkZXJzIiwiQWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidXBkYXRlUGFydGVuYWlyZSIsInJlbW92ZVBhcnRlbmFpcmUiLCJMaXN0QWxsUGFydGVuYWlyZUNhcmRzIiwibGlzdGVQYXJ0ZW5haXJlQ2FyZEJ5SWQiLCJpZENhcmQiLCJjcmVhdGVQYXJ0ZW5haXJlQ2FyZCIsInBhcnRlbmFpcmVDYXJkIiwidXBkYXRlUGFydGVuYWlyZUNhcmQiLCJyZW1vdmVQYXJ0ZW5haXJlQ2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBQ3ZDLFNBQU9DLHVEQUFLLFdBQUlDLDJDQUFKLDBCQUE4QjtBQUN6Q0MsVUFBTSxFQUFFO0FBRGlDLEdBQTlCLENBQUwsQ0FHTEMsSUFISyxDQUdBLFVBQUNDLFFBQUQsRUFBYztBQUNuQixXQUFPQSxRQUFRLENBQUNDLElBQVQsRUFBUDtBQUNBLEdBTEssV0FNQyxVQUFDQyxHQUFEO0FBQUEsV0FBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FBVDtBQUFBLEdBTkQsQ0FBUDtBQU9BLENBUk07S0FBTVAsa0I7QUFVTixJQUFNVSxtQkFBbUIsR0FBRyxTQUF0QkEs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QUFELEVBQWlCaEIsRUFBakIsRUFBcUJjLE1BQXJCLEVBQTZCWCxLQUE3QixFQUF1QztBQUMxRSxTQUFPYix1REFBSyxXQUFJQywyQ0FBSixnQ0FBNkJTLEVBQTdCLG1CQUF3Q2MsTUFBeEMsR0FBa0Q7QUFDN0R0QixVQUFNLEVBQUUsS0FEcUQ7QUFFN0RZLFdBQU8sRUFBRTtBQUNSLHNCQUFnQixrQkFEUjtBQUVSRSxtQkFBYSxtQkFBWUgsS0FBWjtBQUZMLEtBRm9EO0FBTTdESSxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTyxjQUFmO0FBTnVELEdBQWxELENBQUwsQ0FRTHZCLElBUkssQ0FRQSxVQUFDQyxRQUFELEVBQWM7QUFDbkIsV0FBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDQSxHQVZLLFdBV0MsVUFBQ0MsR0FBRDtBQUFBLFdBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQVQ7QUFBQSxHQVhELENBQVA7QUFZQSxDQWJNO0FBZUEsSUFBTXNCLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ2xCLEVBQUQsRUFBS2MsTUFBTCxFQUFhWCxLQUFiLEVBQXVCO0FBQzFELFNBQU9iLHVEQUFLLFdBQUlDLDJDQUFKLGdDQUE2QlMsRUFBN0IsbUJBQXdDYyxNQUF4QyxHQUFrRDtBQUM3RHRCLFVBQU0sRUFBRSxRQURxRDtBQUU3RFksV0FBTyxFQUFFO0FBQ1JFLG1CQUFhLG1CQUFZSCxLQUFaO0FBREw7QUFGb0QsR0FBbEQsQ0FBTCxDQU1MVixJQU5LLENBTUEsVUFBQ0MsUUFBRCxFQUFjO0FBQ25CLFdBQU9BLFFBQVEsQ0FBQ0MsSUFBVCxFQUFQO0FBQ0EsR0FSSyxXQVNDLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUFUO0FBQUEsR0FURCxDQUFQO0FBVUEsQ0FYTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL2RpdmVycy9wYXJ0ZW5haXJlL2NyZWF0ZS5mYzViNDRkMTQyZDBmNTZmMWI1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RBbGxQYXJ0ZW5haXJlcyA9ICgpID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9kaXZlcnMvcGFydGVuYWlyZXNgLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdGVQYXJ0ZW5haXJlQnlJZCA9IChpZCkgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2RpdmVycy9wYXJ0ZW5haXJlLyR7aWR9YCwge1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBhcnRlbmFpcmUgPSAocGFydGVuYWlyZSwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9kaXZlcnMvcGFydGVuYWlyZWAsIHtcclxuXHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0aGVhZGVyczoge1xyXG5cdFx0XHRBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocGFydGVuYWlyZSksXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBsaXN0UmV2aWV3c0J5U2x1ZyA9IGFzeW5jIChzbHVnKSA9PiB7XHJcbi8vIFx0dHJ5IHtcclxuLy8gXHRcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke0FQSX0vcmV2aWV3cy8ke3NsdWd9YCk7XHJcbi8vIFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuLy8gXHRcdHJldHVybiBkYXRhO1xyXG4vLyBcdH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vIFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuLy8gXHR9XHJcbi8vIH07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlUGFydGVuYWlyZSA9IChwYXJ0ZW5haXJlLCBpZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9kaXZlcnMvcGFydGVuYWlyZS8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ1BVVCcsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcnRlbmFpcmUpLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUGFydGVuYWlyZSA9IChpZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9kaXZlcnMvcGFydGVuYWlyZS8ke2lkfWAsIHtcclxuXHRcdG1ldGhvZDogJ0RFTEVURScsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RBbGxQYXJ0ZW5haXJlQ2FyZHMgPSAoaWQpID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9kaXZlcnMvcGFydGVuYWlyZS8ke2lkfS9jYXJkc2AsIHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0fSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0ZVBhcnRlbmFpcmVDYXJkQnlJZCA9IChpZCwgaWRDYXJkKSA9PiB7XHJcblx0cmV0dXJuIGZldGNoKGAke0FQSX0vZGl2ZXJzL3BhcnRlbmFpcmUvJHtpZH0vY2FyZC8ke2lkQ2FyZH1gLCB7XHJcblx0XHRtZXRob2Q6ICdHRVQnLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUGFydGVuYWlyZUNhcmQgPSAocGFydGVuYWlyZUNhcmQsIGlkLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2RpdmVycy9wYXJ0ZW5haXJlLyR7aWR9L2NhcmRgLCB7XHJcblx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcnRlbmFpcmVDYXJkKSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVBhcnRlbmFpcmVDYXJkID0gKHBhcnRlbmFpcmVDYXJkLCBpZCwgaWRDYXJkLCB0b2tlbikgPT4ge1xyXG5cdHJldHVybiBmZXRjaChgJHtBUEl9L2RpdmVycy9wYXJ0ZW5haXJlLyR7aWR9L2NhcmQvJHtpZENhcmR9YCwge1xyXG5cdFx0bWV0aG9kOiAnUFVUJyxcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcblx0XHR9LFxyXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocGFydGVuYWlyZUNhcmQpLFxyXG5cdH0pXHJcblx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUGFydGVuYWlyZUNhcmQgPSAoaWQsIGlkQ2FyZCwgdG9rZW4pID0+IHtcclxuXHRyZXR1cm4gZmV0Y2goYCR7QVBJfS9kaXZlcnMvcGFydGVuYWlyZS8ke2lkfS9jYXJkLyR7aWRDYXJkfWAsIHtcclxuXHRcdG1ldGhvZDogJ0RFTEVURScsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG5cdFx0fSxcclxuXHR9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9