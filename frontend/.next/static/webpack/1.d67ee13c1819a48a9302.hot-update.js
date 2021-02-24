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
    toolbar: ['heading', '|', 'fontfamily', 'fontsize', '|', 'alignment', '|', 'fontColor', 'fontBackgroundColor', '|', 'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|', 'link', '|', 'outdent', 'indent', '|', 'bulletedList', 'numberedList', 'todoList', '|', 'code', 'codeBlock', '|', 'insertTable', '|', 'imageUpload', 'blockQuote', '|', 'undo', 'redo'],
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
      lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9FZGl0b3IuanMiXSwibmFtZXMiOlsiRWRpdG9yIiwicHJvcHMiLCJDS0NvbmZpZyIsInRvb2xiYXIiLCJzaG91bGROb3RHcm91cFdoZW5GdWxsIiwiaGVhZGluZyIsIm9wdGlvbnMiLCJtb2RlbCIsInRpdGxlIiwidmlldyIsIkNsYXNzaWNFZGl0b3IiLCJ2YWx1ZSIsImV2ZW50IiwiZWRpdG9yIiwiZGF0YSIsImdldERhdGEiLCJvbkNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCLE1BQU1DLFFBQVEsR0FBRztBQUNoQkMsV0FBTyxFQUFFLENBQ1IsU0FEUSxFQUVSLEdBRlEsRUFHUixZQUhRLEVBSVIsVUFKUSxFQUtSLEdBTFEsRUFNUixXQU5RLEVBT1IsR0FQUSxFQVFSLFdBUlEsRUFTUixxQkFUUSxFQVVSLEdBVlEsRUFXUixNQVhRLEVBWVIsUUFaUSxFQWFSLGVBYlEsRUFjUixXQWRRLEVBZVIsV0FmUSxFQWdCUixhQWhCUSxFQWlCUixHQWpCUSxFQWtCUixNQWxCUSxFQW1CUixHQW5CUSxFQW9CUixTQXBCUSxFQXFCUixRQXJCUSxFQXNCUixHQXRCUSxFQXVCUixjQXZCUSxFQXdCUixjQXhCUSxFQXlCUixVQXpCUSxFQTBCUixHQTFCUSxFQTJCUixNQTNCUSxFQTRCUixXQTVCUSxFQTZCUixHQTdCUSxFQThCUixhQTlCUSxFQStCUixHQS9CUSxFQWdDUixhQWhDUSxFQWlDUixZQWpDUSxFQWtDUixHQWxDUSxFQW1DUixNQW5DUSxFQW9DUixNQXBDUSxDQURPO0FBdUNoQkMsMEJBQXNCLEVBQUUsSUF2Q1I7QUF5Q2hCQyxXQUFPLEVBQUU7QUFDUkMsYUFBTyxFQUFFLENBQ1I7QUFDQ0MsYUFBSyxFQUFFLFdBRFI7QUFFQ0MsYUFBSyxFQUFFLFdBRlI7QUFHQyxpQkFBTztBQUhSLE9BRFEsRUFNUjtBQUNDRCxhQUFLLEVBQUUsVUFEUjtBQUVDRSxZQUFJLEVBQUUsSUFGUDtBQUdDRCxhQUFLLEVBQUUsV0FIUjtBQUlDLGlCQUFPO0FBSlIsT0FOUSxFQVlSO0FBQ0NELGFBQUssRUFBRSxVQURSO0FBRUNFLFlBQUksRUFBRSxJQUZQO0FBR0NELGFBQUssRUFBRSxXQUhSO0FBSUMsaUJBQU87QUFKUixPQVpRO0FBREQ7QUF6Q08sR0FBakI7QUFnRUEsU0FDQyxNQUFDLGdFQUFEO0FBQ0MsVUFBTSxFQUFFRSx3RUFEVDtBQUVDLFFBQUksRUFBRVQsS0FBSyxDQUFDVSxLQUZiO0FBR0MsVUFBTSxFQUFFVCxRQUhUO0FBSUMsWUFBUSxFQUFFLGtCQUFDVSxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDNUIsVUFBTUMsSUFBSSxHQUFHRCxNQUFNLENBQUNFLE9BQVAsRUFBYjtBQUNBZCxXQUFLLENBQUNlLFFBQU4sQ0FBZUYsSUFBZjtBQUNBLEtBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUREO0FBV0EsQ0E1RUQ7O0tBQU1kLE07QUE4RVNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzEuZDY3ZWUxM2MxODE5YTQ4YTkzMDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbGFzc2ljRWRpdG9yIGZyb20gJ0Bja2VkaXRvci9ja2VkaXRvcjUtYnVpbGQtY2xhc3NpYyc7XHJcbmltcG9ydCBDS0VkaXRvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LXJlYWN0JztcclxuXHJcbmNvbnN0IEVkaXRvciA9IChwcm9wcykgPT4ge1xyXG5cdGNvbnN0IENLQ29uZmlnID0ge1xyXG5cdFx0dG9vbGJhcjogW1xyXG5cdFx0XHQnaGVhZGluZycsXHJcblx0XHRcdCd8JyxcclxuXHRcdFx0J2ZvbnRmYW1pbHknLFxyXG5cdFx0XHQnZm9udHNpemUnLFxyXG5cdFx0XHQnfCcsXHJcblx0XHRcdCdhbGlnbm1lbnQnLFxyXG5cdFx0XHQnfCcsXHJcblx0XHRcdCdmb250Q29sb3InLFxyXG5cdFx0XHQnZm9udEJhY2tncm91bmRDb2xvcicsXHJcblx0XHRcdCd8JyxcclxuXHRcdFx0J2JvbGQnLFxyXG5cdFx0XHQnaXRhbGljJyxcclxuXHRcdFx0J3N0cmlrZXRocm91Z2gnLFxyXG5cdFx0XHQndW5kZXJsaW5lJyxcclxuXHRcdFx0J3N1YnNjcmlwdCcsXHJcblx0XHRcdCdzdXBlcnNjcmlwdCcsXHJcblx0XHRcdCd8JyxcclxuXHRcdFx0J2xpbmsnLFxyXG5cdFx0XHQnfCcsXHJcblx0XHRcdCdvdXRkZW50JyxcclxuXHRcdFx0J2luZGVudCcsXHJcblx0XHRcdCd8JyxcclxuXHRcdFx0J2J1bGxldGVkTGlzdCcsXHJcblx0XHRcdCdudW1iZXJlZExpc3QnLFxyXG5cdFx0XHQndG9kb0xpc3QnLFxyXG5cdFx0XHQnfCcsXHJcblx0XHRcdCdjb2RlJyxcclxuXHRcdFx0J2NvZGVCbG9jaycsXHJcblx0XHRcdCd8JyxcclxuXHRcdFx0J2luc2VydFRhYmxlJyxcclxuXHRcdFx0J3wnLFxyXG5cdFx0XHQnaW1hZ2VVcGxvYWQnLFxyXG5cdFx0XHQnYmxvY2tRdW90ZScsXHJcblx0XHRcdCd8JyxcclxuXHRcdFx0J3VuZG8nLFxyXG5cdFx0XHQncmVkbycsXHJcblx0XHRdLFxyXG5cdFx0c2hvdWxkTm90R3JvdXBXaGVuRnVsbDogdHJ1ZSxcclxuXHJcblx0XHRoZWFkaW5nOiB7XHJcblx0XHRcdG9wdGlvbnM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRtb2RlbDogJ3BhcmFncmFwaCcsXHJcblx0XHRcdFx0XHR0aXRsZTogJ1BhcmFncmFwaCcsXHJcblx0XHRcdFx0XHRjbGFzczogJ2NrLWhlYWRpbmdfcGFyYWdyYXBoJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG1vZGVsOiAnaGVhZGluZzEnLFxyXG5cdFx0XHRcdFx0dmlldzogJ2gxJyxcclxuXHRcdFx0XHRcdHRpdGxlOiAnSGVhZGluZyAxJyxcclxuXHRcdFx0XHRcdGNsYXNzOiAnY2staGVhZGluZ19oZWFkaW5nMScsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRtb2RlbDogJ2hlYWRpbmcyJyxcclxuXHRcdFx0XHRcdHZpZXc6ICdoMicsXHJcblx0XHRcdFx0XHR0aXRsZTogJ0hlYWRpbmcgMicsXHJcblx0XHRcdFx0XHRjbGFzczogJ2NrLWhlYWRpbmdfaGVhZGluZzInLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Q0tFZGl0b3JcclxuXHRcdFx0ZWRpdG9yPXtDbGFzc2ljRWRpdG9yfVxyXG5cdFx0XHRkYXRhPXtwcm9wcy52YWx1ZX1cclxuXHRcdFx0Y29uZmlnPXtDS0NvbmZpZ31cclxuXHRcdFx0b25DaGFuZ2U9eyhldmVudCwgZWRpdG9yKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgZGF0YSA9IGVkaXRvci5nZXREYXRhKCk7XHJcblx0XHRcdFx0cHJvcHMub25DaGFuZ2UoZGF0YSk7XHJcblx0XHRcdH19XHJcblx0XHQvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3I7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=