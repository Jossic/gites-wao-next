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
  toolbar: [[// { header: '1' },
  // { header: '2' },
  {
    header: [1, 2, 3, 4, 5, 6]
  }, {
    font: []
  }], [{
    size: [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]
  }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{
    list: 'ordered'
  }, {
    list: 'bullet'
  }], ['link', 'image', 'video'], // ['clean'],
  ['code-block'], ['code'] // ['✔'],
  ]
};
var QuillFormats = ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'link', 'image', 'video', 'code-block', 'code' // '✔',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9xdWlsbC5qcyJdLCJuYW1lcyI6WyJRdWlsbE1vZHVsZXMiLCJ0b29sYmFyIiwiaGVhZGVyIiwiZm9udCIsInNpemUiLCJsaXN0IiwiUXVpbGxGb3JtYXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQzNCQyxTQUFPLEVBQUUsQ0FDUixDQUNDO0FBQ0E7QUFDQTtBQUFFQyxVQUFNLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQjtBQUFWLEdBSEQsRUFJQztBQUFFQyxRQUFJLEVBQUU7QUFBUixHQUpELENBRFEsRUFPUixDQUFDO0FBQUVDLFFBQUksRUFBRSxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsRUFBcEIsRUFBd0IsRUFBeEIsRUFBNEIsRUFBNUIsRUFBZ0MsRUFBaEMsRUFBb0MsRUFBcEMsRUFBd0MsRUFBeEMsRUFBNEMsRUFBNUM7QUFBUixHQUFELENBUFEsRUFRUixDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFdBQW5CLEVBQWdDLFFBQWhDLEVBQTBDLFlBQTFDLENBUlEsRUFTUixDQUFDO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBQUQsRUFBc0I7QUFBRUEsUUFBSSxFQUFFO0FBQVIsR0FBdEIsQ0FUUSxFQVVSLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsT0FBbEIsQ0FWUSxFQVdSO0FBQ0EsR0FBQyxZQUFELENBWlEsRUFhUixDQUFDLE1BQUQsQ0FiUSxDQWNSO0FBZFE7QUFEa0IsQ0FBckI7QUFtQkEsSUFBTUMsWUFBWSxHQUFHLENBQzNCLFFBRDJCLEVBRTNCLE1BRjJCLEVBRzNCLE1BSDJCLEVBSTNCLE1BSjJCLEVBSzNCLFFBTDJCLEVBTTNCLFdBTjJCLEVBTzNCLFFBUDJCLEVBUTNCLFlBUjJCLEVBUzNCLE1BVDJCLEVBVTNCLFFBVjJCLEVBVzNCLE1BWDJCLEVBWTNCLE9BWjJCLEVBYTNCLE9BYjJCLEVBYzNCLFlBZDJCLEVBZTNCLE1BZjJCLENBZ0IzQjtBQWhCMkIsQ0FBckIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vZ2l0ZXMvW2lkXS5kYWY5YjU3OWExOTFhNDVlMTdlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFF1aWxsTW9kdWxlcyA9IHtcclxuXHR0b29sYmFyOiBbXHJcblx0XHRbXHJcblx0XHRcdC8vIHsgaGVhZGVyOiAnMScgfSxcclxuXHRcdFx0Ly8geyBoZWFkZXI6ICcyJyB9LFxyXG5cdFx0XHR7IGhlYWRlcjogWzEsIDIsIDMsIDQsIDUsIDZdIH0sXHJcblx0XHRcdHsgZm9udDogW10gfSxcclxuXHRcdF0sXHJcblx0XHRbeyBzaXplOiBbOCwgMTAsIDEyLCAxNCwgMTYsIDE4LCAyMCwgMjIsIDI0LCAyNiwgMjgsIDMwXSB9XSxcclxuXHRcdFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ3N0cmlrZScsICdibG9ja3F1b3RlJ10sXHJcblx0XHRbeyBsaXN0OiAnb3JkZXJlZCcgfSwgeyBsaXN0OiAnYnVsbGV0JyB9XSxcclxuXHRcdFsnbGluaycsICdpbWFnZScsICd2aWRlbyddLFxyXG5cdFx0Ly8gWydjbGVhbiddLFxyXG5cdFx0Wydjb2RlLWJsb2NrJ10sXHJcblx0XHRbJ2NvZGUnXSxcclxuXHRcdC8vIFsn4pyUJ10sXHJcblx0XSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBRdWlsbEZvcm1hdHMgPSBbXHJcblx0J2hlYWRlcicsXHJcblx0J2ZvbnQnLFxyXG5cdCdzaXplJyxcclxuXHQnYm9sZCcsXHJcblx0J2l0YWxpYycsXHJcblx0J3VuZGVybGluZScsXHJcblx0J3N0cmlrZScsXHJcblx0J2Jsb2NrcXVvdGUnLFxyXG5cdCdsaXN0JyxcclxuXHQnYnVsbGV0JyxcclxuXHQnbGluaycsXHJcblx0J2ltYWdlJyxcclxuXHQndmlkZW8nLFxyXG5cdCdjb2RlLWJsb2NrJyxcclxuXHQnY29kZScsXHJcblx0Ly8gJ+KclCcsXHJcbl07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=