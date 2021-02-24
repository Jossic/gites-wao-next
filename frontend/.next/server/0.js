exports.ids = [0];
exports.modules = {

/***/ "./components/admin/Editor.js":
/*!************************************!*\
  !*** ./components/admin/Editor.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "@ckeditor/ckeditor5-build-classic");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-react */ "@ckeditor/ckeditor5-react");
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\Editor.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Editor = props => {
  const CKConfig = {
    toolbar: [_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default.a.builtinPlugins.map(plugin => plugin.pluginName)],
    shouldNotGroupWhenFull: true,
    heading: {
      options: [{
        model: 'paragraph',
        title: 'Paragraph',
        class: 'ck-heading_paragraph'
      }, {
        model: 'heading1',
        view: 'h1',
        title: 'Heading 1',
        class: 'ck-heading_heading1'
      }, {
        model: 'heading2',
        view: 'h2',
        title: 'Heading 2',
        class: 'ck-heading_heading2'
      }]
    }
  };
  return __jsx(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
    editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default.a,
    data: props.value,
    config: CKConfig,
    onChange: (event, editor) => {
      const data = editor.getData();
      props.onChange(data);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FkbWluL0VkaXRvci5qcyJdLCJuYW1lcyI6WyJFZGl0b3IiLCJwcm9wcyIsIkNLQ29uZmlnIiwidG9vbGJhciIsIkNsYXNzaWNFZGl0b3IiLCJidWlsdGluUGx1Z2lucyIsIm1hcCIsInBsdWdpbiIsInBsdWdpbk5hbWUiLCJzaG91bGROb3RHcm91cFdoZW5GdWxsIiwiaGVhZGluZyIsIm9wdGlvbnMiLCJtb2RlbCIsInRpdGxlIiwiY2xhc3MiLCJ2aWV3IiwidmFsdWUiLCJldmVudCIsImVkaXRvciIsImRhdGEiLCJnZXREYXRhIiwib25DaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFJQyxLQUFELElBQVc7QUFDekIsUUFBTUMsUUFBUSxHQUFHO0FBQ2hCQyxXQUFPLEVBQUUsQ0FDUkMsd0VBQWEsQ0FBQ0MsY0FBZCxDQUE2QkMsR0FBN0IsQ0FBa0NDLE1BQUQsSUFBWUEsTUFBTSxDQUFDQyxVQUFwRCxDQURRLENBRE87QUFJaEJDLDBCQUFzQixFQUFFLElBSlI7QUFNaEJDLFdBQU8sRUFBRTtBQUNSQyxhQUFPLEVBQUUsQ0FDUjtBQUNDQyxhQUFLLEVBQUUsV0FEUjtBQUVDQyxhQUFLLEVBQUUsV0FGUjtBQUdDQyxhQUFLLEVBQUU7QUFIUixPQURRLEVBTVI7QUFDQ0YsYUFBSyxFQUFFLFVBRFI7QUFFQ0csWUFBSSxFQUFFLElBRlA7QUFHQ0YsYUFBSyxFQUFFLFdBSFI7QUFJQ0MsYUFBSyxFQUFFO0FBSlIsT0FOUSxFQVlSO0FBQ0NGLGFBQUssRUFBRSxVQURSO0FBRUNHLFlBQUksRUFBRSxJQUZQO0FBR0NGLGFBQUssRUFBRSxXQUhSO0FBSUNDLGFBQUssRUFBRTtBQUpSLE9BWlE7QUFERDtBQU5PLEdBQWpCO0FBNkJBLFNBQ0MsTUFBQyxnRUFBRDtBQUNDLFVBQU0sRUFBRVYsd0VBRFQ7QUFFQyxRQUFJLEVBQUVILEtBQUssQ0FBQ2UsS0FGYjtBQUdDLFVBQU0sRUFBRWQsUUFIVDtBQUlDLFlBQVEsRUFBRSxDQUFDZSxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDNUIsWUFBTUMsSUFBSSxHQUFHRCxNQUFNLENBQUNFLE9BQVAsRUFBYjtBQUNBbkIsV0FBSyxDQUFDb0IsUUFBTixDQUFlRixJQUFmO0FBQ0EsS0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQ7QUFXQSxDQXpDRDs7QUEyQ2VuQixxRUFBZixFIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xhc3NpY0VkaXRvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMnO1xyXG5pbXBvcnQgQ0tFZGl0b3IgZnJvbSAnQGNrZWRpdG9yL2NrZWRpdG9yNS1yZWFjdCc7XHJcblxyXG5jb25zdCBFZGl0b3IgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCBDS0NvbmZpZyA9IHtcclxuXHRcdHRvb2xiYXI6IFtcclxuXHRcdFx0Q2xhc3NpY0VkaXRvci5idWlsdGluUGx1Z2lucy5tYXAoKHBsdWdpbikgPT4gcGx1Z2luLnBsdWdpbk5hbWUpLFxyXG5cdFx0XSxcclxuXHRcdHNob3VsZE5vdEdyb3VwV2hlbkZ1bGw6IHRydWUsXHJcblxyXG5cdFx0aGVhZGluZzoge1xyXG5cdFx0XHRvcHRpb25zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bW9kZWw6ICdwYXJhZ3JhcGgnLFxyXG5cdFx0XHRcdFx0dGl0bGU6ICdQYXJhZ3JhcGgnLFxyXG5cdFx0XHRcdFx0Y2xhc3M6ICdjay1oZWFkaW5nX3BhcmFncmFwaCcsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRtb2RlbDogJ2hlYWRpbmcxJyxcclxuXHRcdFx0XHRcdHZpZXc6ICdoMScsXHJcblx0XHRcdFx0XHR0aXRsZTogJ0hlYWRpbmcgMScsXHJcblx0XHRcdFx0XHRjbGFzczogJ2NrLWhlYWRpbmdfaGVhZGluZzEnLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bW9kZWw6ICdoZWFkaW5nMicsXHJcblx0XHRcdFx0XHR2aWV3OiAnaDInLFxyXG5cdFx0XHRcdFx0dGl0bGU6ICdIZWFkaW5nIDInLFxyXG5cdFx0XHRcdFx0Y2xhc3M6ICdjay1oZWFkaW5nX2hlYWRpbmcyJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PENLRWRpdG9yXHJcblx0XHRcdGVkaXRvcj17Q2xhc3NpY0VkaXRvcn1cclxuXHRcdFx0ZGF0YT17cHJvcHMudmFsdWV9XHJcblx0XHRcdGNvbmZpZz17Q0tDb25maWd9XHJcblx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQsIGVkaXRvcikgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGRhdGEgPSBlZGl0b3IuZ2V0RGF0YSgpO1xyXG5cdFx0XHRcdHByb3BzLm9uQ2hhbmdlKGRhdGEpO1xyXG5cdFx0XHR9fVxyXG5cdFx0Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9