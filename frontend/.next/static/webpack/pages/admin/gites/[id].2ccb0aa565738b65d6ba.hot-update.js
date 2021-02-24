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
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-quill */ "./node_modules/react-quill/lib/index.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-quill */ "./node_modules/react-quill/lib/index.js")];
    },
    modules: ['react-quill']
  }
});
_c2 = ReactQuill;
var Inline = ReactQuill["import"]('blots/inline');

var BoldBlot = /*#__PURE__*/function (_Inline) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(BoldBlot, _Inline);

  var _super = _createSuper(BoldBlot);

  function BoldBlot() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BoldBlot);

    return _super.apply(this, arguments);
  }

  return BoldBlot;
}(Inline);

BoldBlot.blotName = 'bold';
BoldBlot.tagName = 'strong';
ReactQuill.register('formats/bold', BoldBlot);
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

var _c, _c2;

$RefreshReg$(_c, "ReactQuill$dynamic");
$RefreshReg$(_c2, "ReactQuill");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9xdWlsbC5qcyJdLCJuYW1lcyI6WyJSZWFjdFF1aWxsIiwiZHluYW1pYyIsInNzciIsIklubGluZSIsIkJvbGRCbG90IiwiYmxvdE5hbWUiLCJ0YWdOYW1lIiwicmVnaXN0ZXIiLCJRdWlsbE1vZHVsZXMiLCJ0b29sYmFyIiwiaGVhZGVyIiwiZm9udCIsInNpemUiLCJsaXN0IiwiUXVpbGxGb3JtYXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLGdKQUFOO0FBQUEsQ0FBRCxFQUE4QjtBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FBaEIsNERBQWdCO0FBQUE7QUFBQSxjQUFoQixhQUFnQjtBQUFBO0FBQUEsQ0FBOUIsQ0FBMUI7TUFBTUYsVTtBQUNOLElBQUlHLE1BQU0sR0FBR0gsVUFBVSxVQUFWLENBQWtCLGNBQWxCLENBQWI7O0lBQ01JLFE7Ozs7Ozs7Ozs7OztFQUFpQkQsTTs7QUFDdkJDLFFBQVEsQ0FBQ0MsUUFBVCxHQUFvQixNQUFwQjtBQUNBRCxRQUFRLENBQUNFLE9BQVQsR0FBbUIsUUFBbkI7QUFDQU4sVUFBVSxDQUFDTyxRQUFYLENBQW9CLGNBQXBCLEVBQW9DSCxRQUFwQztBQUVPLElBQU1JLFlBQVksR0FBRztBQUMzQkMsU0FBTyxFQUFFLENBQ1IsQ0FDQztBQUNBO0FBQ0E7QUFBRUMsVUFBTSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEI7QUFBVixHQUhELEVBSUM7QUFBRUMsUUFBSSxFQUFFO0FBQVIsR0FKRCxDQURRLEVBT1IsQ0FBQztBQUFFQyxRQUFJLEVBQUUsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLEVBQTRCLEVBQTVCLEVBQWdDLEVBQWhDLEVBQW9DLEVBQXBDLEVBQXdDLEVBQXhDLEVBQTRDLEVBQTVDO0FBQVIsR0FBRCxDQVBRLEVBUVIsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixXQUFuQixFQUFnQyxRQUFoQyxFQUEwQyxZQUExQyxDQVJRLEVBU1IsQ0FBQztBQUFFQyxRQUFJLEVBQUU7QUFBUixHQUFELEVBQXNCO0FBQUVBLFFBQUksRUFBRTtBQUFSLEdBQXRCLENBVFEsRUFVUixDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLE9BQWxCLENBVlEsRUFXUjtBQUNBLEdBQUMsWUFBRCxDQVpRLEVBYVIsQ0FBQyxNQUFELENBYlEsQ0FjUjtBQWRRO0FBRGtCLENBQXJCO0FBbUJBLElBQU1DLFlBQVksR0FBRyxDQUMzQixRQUQyQixFQUUzQixNQUYyQixFQUczQixNQUgyQixFQUkzQixNQUoyQixFQUszQixRQUwyQixFQU0zQixXQU4yQixFQU8zQixRQVAyQixFQVEzQixZQVIyQixFQVMzQixNQVQyQixFQVUzQixRQVYyQixFQVczQixNQVgyQixFQVkzQixPQVoyQixFQWEzQixPQWIyQixFQWMzQixZQWQyQixFQWUzQixNQWYyQixDQWdCM0I7QUFoQjJCLENBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL2dpdGVzL1tpZF0uMmNjYjBhYTU2NTczOGI2NWQ2YmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmNvbnN0IFJlYWN0UXVpbGwgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtcXVpbGwnKSwgeyBzc3I6IGZhbHNlIH0pO1xyXG5sZXQgSW5saW5lID0gUmVhY3RRdWlsbC5pbXBvcnQoJ2Jsb3RzL2lubGluZScpO1xyXG5jbGFzcyBCb2xkQmxvdCBleHRlbmRzIElubGluZSB7fVxyXG5Cb2xkQmxvdC5ibG90TmFtZSA9ICdib2xkJztcclxuQm9sZEJsb3QudGFnTmFtZSA9ICdzdHJvbmcnO1xyXG5SZWFjdFF1aWxsLnJlZ2lzdGVyKCdmb3JtYXRzL2JvbGQnLCBCb2xkQmxvdCk7XHJcblxyXG5leHBvcnQgY29uc3QgUXVpbGxNb2R1bGVzID0ge1xyXG5cdHRvb2xiYXI6IFtcclxuXHRcdFtcclxuXHRcdFx0Ly8geyBoZWFkZXI6ICcxJyB9LFxyXG5cdFx0XHQvLyB7IGhlYWRlcjogJzInIH0sXHJcblx0XHRcdHsgaGVhZGVyOiBbMSwgMiwgMywgNCwgNSwgNl0gfSxcclxuXHRcdFx0eyBmb250OiBbXSB9LFxyXG5cdFx0XSxcclxuXHRcdFt7IHNpemU6IFs4LCAxMCwgMTIsIDE0LCAxNiwgMTgsIDIwLCAyMiwgMjQsIDI2LCAyOCwgMzBdIH1dLFxyXG5cdFx0Wydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJywgJ2Jsb2NrcXVvdGUnXSxcclxuXHRcdFt7IGxpc3Q6ICdvcmRlcmVkJyB9LCB7IGxpc3Q6ICdidWxsZXQnIH1dLFxyXG5cdFx0WydsaW5rJywgJ2ltYWdlJywgJ3ZpZGVvJ10sXHJcblx0XHQvLyBbJ2NsZWFuJ10sXHJcblx0XHRbJ2NvZGUtYmxvY2snXSxcclxuXHRcdFsnY29kZSddLFxyXG5cdFx0Ly8gWyfinJQnXSxcclxuXHRdLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFF1aWxsRm9ybWF0cyA9IFtcclxuXHQnaGVhZGVyJyxcclxuXHQnZm9udCcsXHJcblx0J3NpemUnLFxyXG5cdCdib2xkJyxcclxuXHQnaXRhbGljJyxcclxuXHQndW5kZXJsaW5lJyxcclxuXHQnc3RyaWtlJyxcclxuXHQnYmxvY2txdW90ZScsXHJcblx0J2xpc3QnLFxyXG5cdCdidWxsZXQnLFxyXG5cdCdsaW5rJyxcclxuXHQnaW1hZ2UnLFxyXG5cdCd2aWRlbycsXHJcblx0J2NvZGUtYmxvY2snLFxyXG5cdCdjb2RlJyxcclxuXHQvLyAn4pyUJyxcclxuXTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==