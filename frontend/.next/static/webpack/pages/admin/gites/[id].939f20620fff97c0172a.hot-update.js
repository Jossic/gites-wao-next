webpackHotUpdate_N_E("pages/admin/gites/[id]",{

/***/ "./util/quill.js":
/*!***********************!*\
  !*** ./util/quill.js ***!
  \***********************/
/*! exports provided: QuillModules, QuillFormats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuillModules", function() { return QuillModules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuillFormats", function() { return QuillFormats; });
var QuillModules = {
  clipboard: {
    matchVisual: false
  },
  toolbar: [[// { header: '1' },
  // { header: '2' },
  {
    header: [1, 2, 3, 4, 5, 6]
  }, {
    font: []
  }], [{
    size: ['small', false, 'large', 'huge']
  }], [{
    color: ['black', 'white', 'red', 'blue', 'green', 'yellow']
  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{
    list: 'ordered'
  }, {
    list: 'bullet'
  }], ['link', 'image', 'video'], // ['clean'],
  ['code-block'], ['code'] // ['✔'],
  ]
};
var QuillFormats = ['header', 'font', 'size', 'color', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'link', 'image', 'video', 'code-block', 'code' // '✔',
];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9xdWlsbC5qcyJdLCJuYW1lcyI6WyJRdWlsbE1vZHVsZXMiLCJjbGlwYm9hcmQiLCJtYXRjaFZpc3VhbCIsInRvb2xiYXIiLCJoZWFkZXIiLCJmb250Iiwic2l6ZSIsImNvbG9yIiwibGlzdCIsIlF1aWxsRm9ybWF0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1BLFlBQVksR0FBRztBQUMzQkMsV0FBUyxFQUFFO0FBQ1ZDLGVBQVcsRUFBRTtBQURILEdBRGdCO0FBSTNCQyxTQUFPLEVBQUUsQ0FDUixDQUNDO0FBQ0E7QUFDQTtBQUFFQyxVQUFNLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQjtBQUFWLEdBSEQsRUFJQztBQUFFQyxRQUFJLEVBQUU7QUFBUixHQUpELENBRFEsRUFPUixDQUFDO0FBQUVDLFFBQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxLQUFWLEVBQWlCLE9BQWpCLEVBQTBCLE1BQTFCO0FBQVIsR0FBRCxDQVBRLEVBUVIsQ0FBQztBQUFFQyxTQUFLLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixLQUFuQixFQUEwQixNQUExQixFQUFrQyxPQUFsQyxFQUEyQyxRQUEzQztBQUFULEdBQUQsQ0FSUSxFQVNSLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsV0FBbkIsRUFBZ0MsUUFBaEMsRUFBMEMsWUFBMUMsQ0FUUSxFQVVSLENBQUM7QUFBRUMsUUFBSSxFQUFFO0FBQVIsR0FBRCxFQUFzQjtBQUFFQSxRQUFJLEVBQUU7QUFBUixHQUF0QixDQVZRLEVBV1IsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixPQUFsQixDQVhRLEVBWVI7QUFDQSxHQUFDLFlBQUQsQ0FiUSxFQWNSLENBQUMsTUFBRCxDQWRRLENBZVI7QUFmUTtBQUprQixDQUFyQjtBQXVCQSxJQUFNQyxZQUFZLEdBQUcsQ0FDM0IsUUFEMkIsRUFFM0IsTUFGMkIsRUFHM0IsTUFIMkIsRUFJM0IsT0FKMkIsRUFLM0IsTUFMMkIsRUFNM0IsUUFOMkIsRUFPM0IsV0FQMkIsRUFRM0IsUUFSMkIsRUFTM0IsWUFUMkIsRUFVM0IsTUFWMkIsRUFXM0IsUUFYMkIsRUFZM0IsTUFaMkIsRUFhM0IsT0FiMkIsRUFjM0IsT0FkMkIsRUFlM0IsWUFmMkIsRUFnQjNCLE1BaEIyQixDQWlCM0I7QUFqQjJCLENBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2dpdGVzL1tpZF0uOTM5ZjIwNjIwZmZmOTdjMDE3MmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBRdWlsbE1vZHVsZXMgPSB7XHJcblx0Y2xpcGJvYXJkOiB7XHJcblx0XHRtYXRjaFZpc3VhbDogZmFsc2UsXHJcblx0fSxcclxuXHR0b29sYmFyOiBbXHJcblx0XHRbXHJcblx0XHRcdC8vIHsgaGVhZGVyOiAnMScgfSxcclxuXHRcdFx0Ly8geyBoZWFkZXI6ICcyJyB9LFxyXG5cdFx0XHR7IGhlYWRlcjogWzEsIDIsIDMsIDQsIDUsIDZdIH0sXHJcblx0XHRcdHsgZm9udDogW10gfSxcclxuXHRcdF0sXHJcblx0XHRbeyBzaXplOiBbJ3NtYWxsJywgZmFsc2UsICdsYXJnZScsICdodWdlJ10gfV0sXHJcblx0XHRbeyBjb2xvcjogWydibGFjaycsICd3aGl0ZScsICdyZWQnLCAnYmx1ZScsICdncmVlbicsICd5ZWxsb3cnXSB9XSxcclxuXHRcdFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZScsICdibG9ja3F1b3RlJ10sXHJcblx0XHRbeyBsaXN0OiAnb3JkZXJlZCcgfSwgeyBsaXN0OiAnYnVsbGV0JyB9XSxcclxuXHRcdFsnbGluaycsICdpbWFnZScsICd2aWRlbyddLFxyXG5cdFx0Ly8gWydjbGVhbiddLFxyXG5cdFx0Wydjb2RlLWJsb2NrJ10sXHJcblx0XHRbJ2NvZGUnXSxcclxuXHRcdC8vIFsn4pyUJ10sXHJcblx0XSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBRdWlsbEZvcm1hdHMgPSBbXHJcblx0J2hlYWRlcicsXHJcblx0J2ZvbnQnLFxyXG5cdCdzaXplJyxcclxuXHQnY29sb3InLFxyXG5cdCdib2xkJyxcclxuXHQnaXRhbGljJyxcclxuXHQndW5kZXJsaW5lJyxcclxuXHQnc3RyaWtlJyxcclxuXHQnYmxvY2txdW90ZScsXHJcblx0J2xpc3QnLFxyXG5cdCdidWxsZXQnLFxyXG5cdCdsaW5rJyxcclxuXHQnaW1hZ2UnLFxyXG5cdCd2aWRlbycsXHJcblx0J2NvZGUtYmxvY2snLFxyXG5cdCdjb2RlJyxcclxuXHQvLyAn4pyUJyxcclxuXTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==