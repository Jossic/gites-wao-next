webpackHotUpdate_N_E(1,{

/***/ "./components/admin/Editor.js":
/*!************************************!*\
  !*** ./components/admin/Editor.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-react */ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\Editor.js",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Editor = function Editor(props) {
  var CKConfig = {
    toolbar: [_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default.a.builtinPlugins.map(function (plugin) {
      return plugin.pluginName;
    })],
    shouldNotGroupWhenFull: true,
    heading: {
      options: [{
        model: 'paragraph',
        title: 'Paragraph',
        "class": 'ck-heading_paragraph'
      }, {
        model: 'heading1',
        view: 'h1',
        title: 'Heading 1',
        "class": 'ck-heading_heading1'
      }, {
        model: 'heading2',
        view: 'h2',
        title: 'Heading 2',
        "class": 'ck-heading_heading2'
      }]
    }
  };
  return __jsx(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
    editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default.a,
    data: props.value,
    config: CKConfig,
    onChange: function onChange(event, editor) {
      var data = editor.getData();
      props.onChange(data);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }
  });
};

_c = Editor;
/* harmony default export */ __webpack_exports__["default"] = (Editor);

var _c;

$RefreshReg$(_c, "Editor");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9FZGl0b3IuanMiXSwibmFtZXMiOlsiRWRpdG9yIiwicHJvcHMiLCJDS0NvbmZpZyIsInRvb2xiYXIiLCJDbGFzc2ljRWRpdG9yIiwiYnVpbHRpblBsdWdpbnMiLCJtYXAiLCJwbHVnaW4iLCJwbHVnaW5OYW1lIiwic2hvdWxkTm90R3JvdXBXaGVuRnVsbCIsImhlYWRpbmciLCJvcHRpb25zIiwibW9kZWwiLCJ0aXRsZSIsInZpZXciLCJ2YWx1ZSIsImV2ZW50IiwiZWRpdG9yIiwiZGF0YSIsImdldERhdGEiLCJvbkNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCLE1BQU1DLFFBQVEsR0FBRztBQUNoQkMsV0FBTyxFQUFFLENBQ1JDLHdFQUFhLENBQUNDLGNBQWQsQ0FBNkJDLEdBQTdCLENBQWlDLFVBQUNDLE1BQUQ7QUFBQSxhQUFZQSxNQUFNLENBQUNDLFVBQW5CO0FBQUEsS0FBakMsQ0FEUSxDQURPO0FBSWhCQywwQkFBc0IsRUFBRSxJQUpSO0FBTWhCQyxXQUFPLEVBQUU7QUFDUkMsYUFBTyxFQUFFLENBQ1I7QUFDQ0MsYUFBSyxFQUFFLFdBRFI7QUFFQ0MsYUFBSyxFQUFFLFdBRlI7QUFHQyxpQkFBTztBQUhSLE9BRFEsRUFNUjtBQUNDRCxhQUFLLEVBQUUsVUFEUjtBQUVDRSxZQUFJLEVBQUUsSUFGUDtBQUdDRCxhQUFLLEVBQUUsV0FIUjtBQUlDLGlCQUFPO0FBSlIsT0FOUSxFQVlSO0FBQ0NELGFBQUssRUFBRSxVQURSO0FBRUNFLFlBQUksRUFBRSxJQUZQO0FBR0NELGFBQUssRUFBRSxXQUhSO0FBSUMsaUJBQU87QUFKUixPQVpRO0FBREQ7QUFOTyxHQUFqQjtBQTZCQSxTQUNDLE1BQUMsZ0VBQUQ7QUFDQyxVQUFNLEVBQUVULHdFQURUO0FBRUMsUUFBSSxFQUFFSCxLQUFLLENBQUNjLEtBRmI7QUFHQyxVQUFNLEVBQUViLFFBSFQ7QUFJQyxZQUFRLEVBQUUsa0JBQUNjLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUM1QixVQUFNQyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0UsT0FBUCxFQUFiO0FBQ0FsQixXQUFLLENBQUNtQixRQUFOLENBQWVGLElBQWY7QUFDQSxLQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERDtBQVdBLENBekNEOztLQUFNbEIsTTtBQTJDU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMS5iZmFhMDRiZWEwMWFlZjEwYzZlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsYXNzaWNFZGl0b3IgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1idWlsZC1jbGFzc2ljJztcclxuaW1wb3J0IENLRWRpdG9yIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtcmVhY3QnO1xyXG5cclxuY29uc3QgRWRpdG9yID0gKHByb3BzKSA9PiB7XHJcblx0Y29uc3QgQ0tDb25maWcgPSB7XHJcblx0XHR0b29sYmFyOiBbXHJcblx0XHRcdENsYXNzaWNFZGl0b3IuYnVpbHRpblBsdWdpbnMubWFwKChwbHVnaW4pID0+IHBsdWdpbi5wbHVnaW5OYW1lKSxcclxuXHRcdF0sXHJcblx0XHRzaG91bGROb3RHcm91cFdoZW5GdWxsOiB0cnVlLFxyXG5cclxuXHRcdGhlYWRpbmc6IHtcclxuXHRcdFx0b3B0aW9uczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG1vZGVsOiAncGFyYWdyYXBoJyxcclxuXHRcdFx0XHRcdHRpdGxlOiAnUGFyYWdyYXBoJyxcclxuXHRcdFx0XHRcdGNsYXNzOiAnY2staGVhZGluZ19wYXJhZ3JhcGgnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bW9kZWw6ICdoZWFkaW5nMScsXHJcblx0XHRcdFx0XHR2aWV3OiAnaDEnLFxyXG5cdFx0XHRcdFx0dGl0bGU6ICdIZWFkaW5nIDEnLFxyXG5cdFx0XHRcdFx0Y2xhc3M6ICdjay1oZWFkaW5nX2hlYWRpbmcxJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG1vZGVsOiAnaGVhZGluZzInLFxyXG5cdFx0XHRcdFx0dmlldzogJ2gyJyxcclxuXHRcdFx0XHRcdHRpdGxlOiAnSGVhZGluZyAyJyxcclxuXHRcdFx0XHRcdGNsYXNzOiAnY2staGVhZGluZ19oZWFkaW5nMicsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XSxcclxuXHRcdH0sXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxDS0VkaXRvclxyXG5cdFx0XHRlZGl0b3I9e0NsYXNzaWNFZGl0b3J9XHJcblx0XHRcdGRhdGE9e3Byb3BzLnZhbHVlfVxyXG5cdFx0XHRjb25maWc9e0NLQ29uZmlnfVxyXG5cdFx0XHRvbkNoYW5nZT17KGV2ZW50LCBlZGl0b3IpID0+IHtcclxuXHRcdFx0XHRjb25zdCBkYXRhID0gZWRpdG9yLmdldERhdGEoKTtcclxuXHRcdFx0XHRwcm9wcy5vbkNoYW5nZShkYXRhKTtcclxuXHRcdFx0fX1cclxuXHRcdC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRvcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==