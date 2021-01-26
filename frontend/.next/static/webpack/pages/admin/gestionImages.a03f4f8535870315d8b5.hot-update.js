webpackHotUpdate_N_E("pages/admin/gestionImages",{

/***/ "./components/admin/ListImages.js":
/*!****************************************!*\
  !*** ./components/admin/ListImages.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_giteActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/giteActions */ "./actions/giteActions.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/authActions */ "./actions/authActions.js");




var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\ListImages.js",
    _this = undefined,
    _s = $RefreshSig$();









var ListImages = function ListImages() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      photos = _useState[0],
      setPhotos = _useState[1];

  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_8__["getCookie"])('token');

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      watch = _useForm.watch,
      errors = _useForm.errors;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      gites = _useState2[0],
      setGites = _useState2[1];

  var listDesGites = function listDesGites() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_3__["listGitesNoms"])().then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        setGites.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(gites).concat([data]));
      }
    });
  };

  var listerLesImages = function listerLesImages() {
    Object(_actions_giteActions__WEBPACK_IMPORTED_MODULE_3__["listeDesImages"])(token).then(function (data) {
      if (data.error) {
        console.log(error);
      } else {
        console.log('on est ok');
        setPhotos.apply(void 0, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(photos).concat([data]));
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    listDesGites();
    listerLesImages();
  }, []);

  var deleteConfirm = function deleteConfirm(slug) {
    var answer = window.confirm('Cette opération est irréversible, Etes-vous sur de vouloir supprimer cet article ?');

    if (answer) {
      // deleteGite(slug);
      console.log('Suppression');
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Nom"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Photo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Alt"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Page concern\xE9e"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            children: "Section concern\xE9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
            colSpan: "2",
            children: "Actions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
        children: photos.map(function (photo) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            className: "mt-5",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: photo.nom
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: photo.location,
                style: {
                  maxHeight: 'auto',
                  width: '80px'
                },
                className: "img img-fluid",
                alt: photo.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "form-control",
                onChange: function onChange(e) {
                  return setAlt(e.target.value);
                },
                type: "text",
                name: "alt",
                value: alt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                name: "page",
                className: "custom-select mr-sm-2",
                onChange: function onChange(e) {
                  return setPage(e.target.value);
                },
                id: "inlineFormCustomSelect",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  defaultValue: true,
                  children: "Selection..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 10
                }, _this), gites.map(function (gite, i) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: gite.slug,
                    children: gite.nom
                  }, i, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 11
                  }, _this);
                }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Autre",
                  children: "Autres pages"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                name: "section",
                onChange: function onChange(e) {
                  return setSection(e.target.value);
                },
                className: "custom-select mr-sm-2",
                id: "inlineFormCustomSelect",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  defaultValue: true,
                  children: "Selection..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "Autre",
                  children: "Autres sections"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "presentation",
                  children: "Pr\xE9sentation"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "piscine",
                  children: "Piscine"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                  value: "interieur",
                  children: "Int\xE9rieur"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                href: "/admin/crud/gite/".concat(photo),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                    "class": "fas fa-pencil-ruler",
                    style: {
                      color: 'orange'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 11
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 10
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                onClick: function onClick() {
                  return deleteConfirm(photo);
                },
                "class": "fas fa-trash-alt",
                style: {
                  color: 'red',
                  cursor: 'pointer'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 4
    }, _this)
  }, void 0, false);
};

_s(ListImages, "4mIQZg6S88yQuZwMgSTWd2C+8jk=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"]];
});

_c = ListImages;
/* harmony default export */ __webpack_exports__["default"] = (ListImages);

var _c;

$RefreshReg$(_c, "ListImages");

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

/***/ }),

/***/ "./node_modules/react-hook-form/dist/index.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/react-hook-form/dist/index.esm.js ***!
  \********************************************************/
/*! exports provided: Controller, FormProvider, appendErrors, get, transformToNestObject, useController, useFieldArray, useForm, useFormContext, useWatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProvider", function() { return FormProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendErrors", function() { return appendErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformToNestObject", function() { return transformToNestObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useController", function() { return useController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFieldArray", function() { return useFieldArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForm", function() { return useForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormContext", function() { return useFormContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useWatch", function() { return useWatch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var isHTMLElement = (value) => value instanceof HTMLElement;

const EVENTS = {
    BLUR: 'blur',
    CHANGE: 'change',
    INPUT: 'input',
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
};
const SELECT = 'select';
const UNDEFINED = 'undefined';
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};

function attachEventListeners({ ref }, shouldAttachChangeEvent, handleChange) {
    if (isHTMLElement(ref) && handleChange) {
        ref.addEventListener(shouldAttachChangeEvent ? EVENTS.CHANGE : EVENTS.INPUT, handleChange);
        ref.addEventListener(EVENTS.BLUR, handleChange);
    }
}

var isNullOrUndefined = (value) => value == null;

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) &&
    !Array.isArray(value) &&
    isObjectType(value) &&
    !(value instanceof Date);

var isKey = (value) => /^\w*$/.test(value);

var compact = (value) => value.filter(Boolean);

var stringToPath = (input) => compact(input
    .replace(/["|']/g, '')
    .replace(/\[/g, '.')
    .replace(/\]/g, '')
    .split('.'));

function set(object, path, value) {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || Array.isArray(objValue)
                    ? objValue
                    : !isNaN(+tempPath[index + 1])
                        ? []
                        : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}

var transformToNestObject = (data, value = {}) => {
    for (const key in data) {
        !isKey(key) ? set(value, key, data[key]) : (value[key] = data[key]);
    }
    return value;
};

var isUndefined = (val) => val === undefined;

var get = (obj = {}, path, defaultValue) => {
    const result = compact(path.split(/[,[\].]+?/)).reduce((result, key) => (isNullOrUndefined(result) ? result : result[key]), obj);
    return isUndefined(result) || result === obj
        ? isUndefined(obj[path])
            ? defaultValue
            : obj[path]
        : result;
};

var focusOnErrorField = (fields, fieldErrors) => {
    for (const key in fields) {
        if (get(fieldErrors, key)) {
            const field = fields[key];
            if (field) {
                if (field.ref.focus && isUndefined(field.ref.focus())) {
                    break;
                }
                else if (field.options) {
                    field.options[0].ref.focus();
                    break;
                }
            }
        }
    }
};

var removeAllEventListeners = (ref, validateWithStateUpdate) => {
    if (isHTMLElement(ref) && ref.removeEventListener) {
        ref.removeEventListener(EVENTS.INPUT, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.CHANGE, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.BLUR, validateWithStateUpdate);
    }
};

const defaultReturn = {
    isValid: false,
    value: '',
};
var getRadioValue = (options) => Array.isArray(options)
    ? options.reduce((previous, option) => option && option.ref.checked
        ? {
            isValid: true,
            value: option.ref.value,
        }
        : previous, defaultReturn)
    : defaultReturn;

var getMultipleSelectValue = (options) => [...options]
    .filter(({ selected }) => selected)
    .map(({ value }) => value);

var isRadioInput = (element) => element.type === 'radio';

var isFileInput = (element) => element.type === 'file';

var isCheckBoxInput = (element) => element.type === 'checkbox';

var isMultipleSelect = (element) => element.type === `${SELECT}-multiple`;

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter((option) => option && option.ref.checked)
                .map(({ ref: { value } }) => value);
            return { value: values, isValid: !!values.length };
        }
        const { checked, value, attributes } = options[0].ref;
        return checked
            ? attributes && !isUndefined(attributes.value)
                ? isUndefined(value) || value === ''
                    ? validResult
                    : { value: value, isValid: true }
                : validResult
            : defaultResult;
    }
    return defaultResult;
};

function getFieldValue(fieldsRef, name, shallowFieldsStateRef, excludeDisabled) {
    const field = fieldsRef.current[name];
    if (field) {
        const { ref: { value, disabled }, ref, valueAsNumber, valueAsDate, setValueAs, } = field;
        if (disabled && excludeDisabled) {
            return;
        }
        if (isFileInput(ref)) {
            return ref.files;
        }
        if (isRadioInput(ref)) {
            return getRadioValue(field.options).value;
        }
        if (isMultipleSelect(ref)) {
            return getMultipleSelectValue(ref.options);
        }
        if (isCheckBoxInput(ref)) {
            return getCheckboxValue(field.options).value;
        }
        return valueAsNumber
            ? +value
            : valueAsDate
                ? ref.valueAsDate
                : setValueAs
                    ? setValueAs(value)
                    : value;
    }
    if (shallowFieldsStateRef) {
        return get(shallowFieldsStateRef.current, name);
    }
}

function isDetached(element) {
    if (!element) {
        return true;
    }
    if (!(element instanceof HTMLElement) ||
        element.nodeType === Node.DOCUMENT_NODE) {
        return false;
    }
    return isDetached(element.parentNode);
}

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

var isBoolean = (value) => typeof value === 'boolean';

function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function unset(object, path) {
    const updatePath = isKey(path) ? [path] : stringToPath(path);
    const childObject = updatePath.length == 1 ? object : baseGet(object, updatePath);
    const key = updatePath[updatePath.length - 1];
    let previousObjRef;
    if (childObject) {
        delete childObject[key];
    }
    for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
        let index = -1;
        let objectRef;
        const currentPaths = updatePath.slice(0, -(k + 1));
        const currentPathsLength = currentPaths.length - 1;
        if (k > 0) {
            previousObjRef = object;
        }
        while (++index < currentPaths.length) {
            const item = currentPaths[index];
            objectRef = objectRef ? objectRef[item] : object[item];
            if (currentPathsLength === index &&
                ((isObject(objectRef) && isEmptyObject(objectRef)) ||
                    (Array.isArray(objectRef) &&
                        !objectRef.filter((data) => (isObject(data) && !isEmptyObject(data)) || isBoolean(data)).length))) {
                previousObjRef ? delete previousObjRef[item] : delete object[item];
            }
            previousObjRef = objectRef;
        }
    }
    return object;
}

const isSameRef = (fieldValue, ref) => fieldValue && fieldValue.ref === ref;
function findRemovedFieldAndRemoveListener(fieldsRef, handleChange, field, shallowFieldsStateRef, shouldUnregister, forceDelete) {
    const { ref, ref: { name }, } = field;
    const fieldRef = fieldsRef.current[name];
    if (!shouldUnregister) {
        const value = getFieldValue(fieldsRef, name, shallowFieldsStateRef);
        !isUndefined(value) && set(shallowFieldsStateRef.current, name, value);
    }
    if (!ref.type || !fieldRef) {
        delete fieldsRef.current[name];
        return;
    }
    if (isRadioInput(ref) || isCheckBoxInput(ref)) {
        if (Array.isArray(fieldRef.options) && fieldRef.options.length) {
            compact(fieldRef.options).forEach((option = {}, index) => {
                if ((isDetached(option.ref) && isSameRef(option, option.ref)) ||
                    forceDelete) {
                    removeAllEventListeners(option.ref, handleChange);
                    unset(fieldRef.options, `[${index}]`);
                }
            });
            if (fieldRef.options && !compact(fieldRef.options).length) {
                delete fieldsRef.current[name];
            }
        }
        else {
            delete fieldsRef.current[name];
        }
    }
    else if ((isDetached(ref) && isSameRef(fieldRef, ref)) || forceDelete) {
        removeAllEventListeners(ref, handleChange);
        delete fieldsRef.current[name];
    }
}

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

function deepMerge(target, source) {
    if (isPrimitive(target) || isPrimitive(source)) {
        return source;
    }
    for (const key in source) {
        const targetValue = target[key];
        const sourceValue = source[key];
        try {
            target[key] =
                (isObject(targetValue) && isObject(sourceValue)) ||
                    (Array.isArray(targetValue) && Array.isArray(sourceValue))
                    ? deepMerge(targetValue, sourceValue)
                    : sourceValue;
        }
        catch (_a) { }
    }
    return target;
}

function deepEqual(object1, object2, isErrorObject) {
    if (isPrimitive(object1) ||
        isPrimitive(object2) ||
        object1 instanceof Date ||
        object2 instanceof Date) {
        return object1 === object2;
    }
    if (!Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(object1)) {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (const key of keys1) {
            const val1 = object1[key];
            if (!(isErrorObject && key === 'ref')) {
                const val2 = object2[key];
                if ((isObject(val1) || Array.isArray(val1)) &&
                    (isObject(val2) || Array.isArray(val2))
                    ? !deepEqual(val1, val2, isErrorObject)
                    : val1 !== val2) {
                    return false;
                }
            }
        }
    }
    return true;
}

function setDirtyFields(values, defaultValues, dirtyFields, parentNode, parentName) {
    let index = -1;
    while (++index < values.length) {
        for (const key in values[index]) {
            if (Array.isArray(values[index][key])) {
                !dirtyFields[index] && (dirtyFields[index] = {});
                dirtyFields[index][key] = [];
                setDirtyFields(values[index][key], get(defaultValues[index] || {}, key, []), dirtyFields[index][key], dirtyFields[index], key);
            }
            else {
                deepEqual(get(defaultValues[index] || {}, key), values[index][key])
                    ? set(dirtyFields[index] || {}, key)
                    : (dirtyFields[index] = Object.assign(Object.assign({}, dirtyFields[index]), { [key]: true }));
            }
        }
        parentNode &&
            !dirtyFields.length &&
            delete parentNode[parentName];
    }
    return dirtyFields;
}
var setFieldArrayDirtyFields = (values, defaultValues, dirtyFields) => deepMerge(setDirtyFields(values, defaultValues, dirtyFields.slice(0, values.length)), setDirtyFields(defaultValues, values, dirtyFields.slice(0, values.length)));

var isString = (value) => typeof value === 'string';

var getFieldsValues = (fieldsRef, shallowFieldsState, shouldUnregister, excludeDisabled, search) => {
    const output = {};
    for (const name in fieldsRef.current) {
        if (isUndefined(search) ||
            (isString(search)
                ? name.startsWith(search)
                : Array.isArray(search) && search.find((data) => name.startsWith(data)))) {
            output[name] = getFieldValue(fieldsRef, name, undefined, excludeDisabled);
        }
    }
    return shouldUnregister
        ? transformToNestObject(output)
        : deepMerge(shallowFieldsState, transformToNestObject(output));
};

var isErrorStateChanged = ({ errors, name, error, validFields, fieldsWithValidation, }) => {
    const isValid = isUndefined(error);
    const previousError = get(errors, name);
    return ((isValid && !!previousError) ||
        (!isValid && !deepEqual(previousError, error, true)) ||
        (isValid && get(fieldsWithValidation, name) && !get(validFields, name)));
};

var isRegex = (value) => value instanceof RegExp;

var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData)
    ? validationData
    : {
        value: validationData,
        message: '',
    };

var isFunction = (value) => typeof value === 'function';

var isMessage = (value) => isString(value) || Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(value);

function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) || (isBoolean(result) && !result)) {
        return {
            type,
            message: isMessage(result) ? result : '',
            ref,
        };
    }
}

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria
    ? Object.assign(Object.assign({}, errors[name]), { types: Object.assign(Object.assign({}, (errors[name] && errors[name].types ? errors[name].types : {})), { [type]: message || true }) }) : {};

var validateField = async (fieldsRef, validateAllFieldCriteria, { ref, ref: { value }, options, required, maxLength, minLength, min, max, pattern, validate, }, shallowFieldsStateRef) => {
    const name = ref.name;
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = value === '';
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = Object.assign({ type: exceedMax ? maxType : minType, message,
            ref }, (exceedMax
            ? appendErrorsCurry(maxType, message)
            : appendErrorsCurry(minType, message)));
    };
    if (required &&
        ((!isRadio && !isCheckBox && (isEmpty || isNullOrUndefined(value))) ||
            (isBoolean(value) && !value) ||
            (isCheckBox && !getCheckboxValue(options).isValid) ||
            (isRadio && !getRadioValue(options).isValid))) {
        const { value, message } = isMessage(required)
            ? { value: !!required, message: required }
            : getValueAndMessage(required);
        if (value) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.required, message, ref: isRadioOrCheckbox
                    ? ((fieldsRef.current[name].options || [])[0] || {}).ref
                    : ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, message));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if ((!isNullOrUndefined(min) || !isNullOrUndefined(max)) && value !== '') {
        let exceedMax;
        let exceedMin;
        const maxOutput = getValueAndMessage(max);
        const minOutput = getValueAndMessage(min);
        if (!isNaN(value)) {
            const valueNumber = ref.valueAsNumber || parseFloat(value);
            if (!isNullOrUndefined(maxOutput.value)) {
                exceedMax = valueNumber > maxOutput.value;
            }
            if (!isNullOrUndefined(minOutput.value)) {
                exceedMin = valueNumber < minOutput.value;
            }
        }
        else {
            const valueDate = ref.valueAsDate || new Date(value);
            if (isString(maxOutput.value)) {
                exceedMax = valueDate > new Date(maxOutput.value);
            }
            if (isString(minOutput.value)) {
                exceedMin = valueDate < new Date(minOutput.value);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (isString(value) && !isEmpty && (maxLength || minLength)) {
        const maxLengthOutput = getValueAndMessage(maxLength);
        const minLengthOutput = getValueAndMessage(minLength);
        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) &&
            value.length > maxLengthOutput.value;
        const exceedMin = !isNullOrUndefined(minLengthOutput.value) &&
            value.length < minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (isString(value) && pattern && !isEmpty) {
        const { value: patternValue, message } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !patternValue.test(value)) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.pattern, message,
                ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (validate) {
        const fieldValue = getFieldValue(fieldsRef, name, shallowFieldsStateRef);
        const validateRef = isRadioOrCheckbox && options ? options[0].ref : ref;
        if (isFunction(validate)) {
            const result = await validate(fieldValue);
            const validateError = getValidateError(result, validateRef);
            if (validateError) {
                error[name] = Object.assign(Object.assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            let validationResult = {};
            for (const [key, validateFunction] of Object.entries(validate)) {
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateResult = await validateFunction(fieldValue);
                const validateError = getValidateError(validateResult, validateRef, key);
                if (validateError) {
                    validationResult = Object.assign(Object.assign({}, validateError), appendErrorsCurry(key, validateError.message));
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = Object.assign({ ref: validateRef }, validationResult);
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    return error;
};

const getPath = (rootPath, values, paths = []) => {
    for (const property in values) {
        const rootName = (rootPath +
            (isObject(values)
                ? `.${property}`
                : `[${property}]`));
        isPrimitive(values[property])
            ? paths.push(rootName)
            : getPath(rootName, values[property], paths);
    }
    return paths;
};

var assignWatchFields = (fieldValues, fieldName, watchFields, inputValue, isSingleField) => {
    let value = undefined;
    watchFields.add(fieldName);
    if (!isEmptyObject(fieldValues)) {
        value = get(fieldValues, fieldName);
        if (isObject(value) || Array.isArray(value)) {
            getPath(fieldName, value).forEach((name) => watchFields.add(name));
        }
    }
    return isUndefined(value)
        ? isSingleField
            ? inputValue
            : get(inputValue, fieldName)
        : value;
};

var skipValidation = ({ isOnBlur, isOnChange, isOnTouch, isTouched, isReValidateOnBlur, isReValidateOnChange, isBlurEvent, isSubmitted, isOnAll, }) => {
    if (isOnAll) {
        return false;
    }
    else if (!isSubmitted && isOnTouch) {
        return !(isTouched || isBlurEvent);
    }
    else if (isSubmitted ? isReValidateOnBlur : isOnBlur) {
        return !isBlurEvent;
    }
    else if (isSubmitted ? isReValidateOnChange : isOnChange) {
        return isBlurEvent;
    }
    return true;
};

var getFieldArrayParentName = (name) => name.substring(0, name.indexOf('['));

const isMatchFieldArrayName = (name, searchName) => RegExp(`^${searchName}([|.)\\d+`.replace(/\[/g, '\\[').replace(/\]/g, '\\]')).test(name);
var isNameInFieldArray = (names, name) => [...names].some((current) => isMatchFieldArrayName(name, current));

var isSelectInput = (element) => element.type === `${SELECT}-one`;

function onDomRemove(fieldsRef, removeFieldEventListenerAndRef) {
    const observer = new MutationObserver(() => {
        for (const field of Object.values(fieldsRef.current)) {
            if (field && field.options) {
                for (const option of field.options) {
                    if (option && option.ref && isDetached(option.ref)) {
                        removeFieldEventListenerAndRef(field);
                    }
                }
            }
            else if (field && isDetached(field.ref)) {
                removeFieldEventListenerAndRef(field);
            }
        }
    });
    observer.observe(window.document, {
        childList: true,
        subtree: true,
    });
    return observer;
}

var isWeb = typeof window !== UNDEFINED && typeof document !== UNDEFINED;

function cloneObject(data) {
    let copy;
    if (isPrimitive(data) ||
        (isWeb && (data instanceof File || isHTMLElement(data)))) {
        return data;
    }
    if (data instanceof Date) {
        copy = new Date(data.getTime());
        return copy;
    }
    if (data instanceof Set) {
        copy = new Set();
        for (const item of data) {
            copy.add(item);
        }
        return copy;
    }
    if (data instanceof Map) {
        copy = new Map();
        for (const key of data.keys()) {
            copy.set(key, cloneObject(data.get(key)));
        }
        return copy;
    }
    copy = Array.isArray(data) ? [] : {};
    for (const key in data) {
        copy[key] = cloneObject(data[key]);
    }
    return copy;
}

var modeChecker = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
    isOnAll: mode === VALIDATION_MODE.all,
    isOnTouch: mode === VALIDATION_MODE.onTouched,
});

var isRadioOrCheckboxFunction = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

const isWindowUndefined = typeof window === UNDEFINED;
const isProxyEnabled = isWeb ? 'Proxy' in window : typeof Proxy !== UNDEFINED;
function useForm({ mode = VALIDATION_MODE.onSubmit, reValidateMode = VALIDATION_MODE.onChange, resolver, context, defaultValues = {}, shouldFocusError = true, shouldUnregister = true, criteriaMode, } = {}) {
    const fieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const fieldArrayDefaultValuesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const fieldArrayValuesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const watchFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Set());
    const useWatchFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const useWatchRenderFunctionsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const fieldsWithValidationRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const validFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const defaultValuesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(defaultValues);
    const isUnMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const isWatchAllRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const handleChangeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const shallowFieldsStateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const resetFieldArrayFunctionRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const contextRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(context);
    const resolverRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(resolver);
    const fieldArrayNamesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Set());
    const modeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(modeChecker(mode));
    const { isOnSubmit, isOnTouch } = modeRef.current;
    const isValidateAllFieldCriteria = criteriaMode === VALIDATION_MODE.all;
    const [formState, setFormState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
        isDirty: false,
        isValidating: false,
        dirtyFields: {},
        isSubmitted: false,
        submitCount: 0,
        touched: {},
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: !isOnSubmit,
        errors: {},
    });
    const readFormStateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        isDirty: !isProxyEnabled,
        dirtyFields: !isProxyEnabled,
        touched: !isProxyEnabled || isOnTouch,
        isValidating: !isProxyEnabled,
        isSubmitting: !isProxyEnabled,
        isValid: !isProxyEnabled,
    });
    const formStateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(formState);
    const observerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const { isOnBlur: isReValidateOnBlur, isOnChange: isReValidateOnChange, } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(modeChecker(reValidateMode)).current;
    contextRef.current = context;
    resolverRef.current = resolver;
    formStateRef.current = formState;
    shallowFieldsStateRef.current = shouldUnregister
        ? {}
        : isEmptyObject(shallowFieldsStateRef.current)
            ? cloneObject(defaultValues)
            : shallowFieldsStateRef.current;
    const updateFormState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((state = {}) => {
        if (!isUnMount.current) {
            formStateRef.current = Object.assign(Object.assign({}, formStateRef.current), state);
            setFormState(formStateRef.current);
        }
    }, []);
    const updateIsValidating = () => readFormStateRef.current.isValidating &&
        updateFormState({
            isValidating: true,
        });
    const shouldRenderBaseOnError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, error, shouldRender = false, state = {}, isValid) => {
        let shouldReRender = shouldRender ||
            isErrorStateChanged({
                errors: formStateRef.current.errors,
                error,
                name,
                validFields: validFieldsRef.current,
                fieldsWithValidation: fieldsWithValidationRef.current,
            });
        const previousError = get(formStateRef.current.errors, name);
        if (error) {
            unset(validFieldsRef.current, name);
            shouldReRender =
                shouldReRender ||
                    !previousError ||
                    !deepEqual(previousError, error, true);
            set(formStateRef.current.errors, name, error);
        }
        else {
            if (get(fieldsWithValidationRef.current, name) || resolverRef.current) {
                set(validFieldsRef.current, name, true);
                shouldReRender = shouldReRender || previousError;
            }
            unset(formStateRef.current.errors, name);
        }
        if ((shouldReRender && !isNullOrUndefined(shouldRender)) ||
            !isEmptyObject(state) ||
            readFormStateRef.current.isValidating) {
            updateFormState(Object.assign(Object.assign(Object.assign({}, state), (resolverRef.current ? { isValid: !!isValid } : {})), { isValidating: false }));
        }
    }, []);
    const setFieldValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, rawValue) => {
        const { ref, options } = fieldsRef.current[name];
        const value = isWeb && isHTMLElement(ref) && isNullOrUndefined(rawValue)
            ? ''
            : rawValue;
        if (isRadioInput(ref)) {
            (options || []).forEach(({ ref: radioRef }) => (radioRef.checked = radioRef.value === value));
        }
        else if (isFileInput(ref) && !isString(value)) {
            ref.files = value;
        }
        else if (isMultipleSelect(ref)) {
            [...ref.options].forEach((selectRef) => (selectRef.selected = value.includes(selectRef.value)));
        }
        else if (isCheckBoxInput(ref) && options) {
            options.length > 1
                ? options.forEach(({ ref: checkboxRef }) => (checkboxRef.checked = Array.isArray(value)
                    ? !!value.find((data) => data === checkboxRef.value)
                    : value === checkboxRef.value))
                : (options[0].ref.checked = !!value);
        }
        else {
            ref.value = value;
        }
    }, []);
    const isFormDirty = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, data) => {
        if (readFormStateRef.current.isDirty) {
            const formValues = getValues();
            name && data && set(formValues, name, data);
            return !deepEqual(formValues, defaultValuesRef.current);
        }
        return false;
    }, []);
    const updateAndGetDirtyState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, shouldRender = true) => {
        if (readFormStateRef.current.isDirty ||
            readFormStateRef.current.dirtyFields) {
            const isFieldDirty = !deepEqual(get(defaultValuesRef.current, name), getFieldValue(fieldsRef, name, shallowFieldsStateRef));
            const isDirtyFieldExist = get(formStateRef.current.dirtyFields, name);
            const previousIsDirty = formStateRef.current.isDirty;
            isFieldDirty
                ? set(formStateRef.current.dirtyFields, name, true)
                : unset(formStateRef.current.dirtyFields, name);
            const state = {
                isDirty: isFormDirty(),
                dirtyFields: formStateRef.current.dirtyFields,
            };
            const isChanged = (readFormStateRef.current.isDirty &&
                previousIsDirty !== state.isDirty) ||
                (readFormStateRef.current.dirtyFields &&
                    isDirtyFieldExist !== get(formStateRef.current.dirtyFields, name));
            isChanged && shouldRender && updateFormState(state);
            return isChanged ? state : {};
        }
        return {};
    }, []);
    const executeValidation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (name, skipReRender) => {
        if (true) {
            if (!fieldsRef.current[name]) {
                console.warn('📋 Field is missing with `name` attribute: ', name);
                return false;
            }
        }
        const error = (await validateField(fieldsRef, isValidateAllFieldCriteria, fieldsRef.current[name], shallowFieldsStateRef))[name];
        shouldRenderBaseOnError(name, error, skipReRender);
        return isUndefined(error);
    }, [shouldRenderBaseOnError, isValidateAllFieldCriteria]);
    const executeSchemaOrResolverValidation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (names) => {
        const { errors } = await resolverRef.current(getValues(), contextRef.current, isValidateAllFieldCriteria);
        const previousFormIsValid = formStateRef.current.isValid;
        if (Array.isArray(names)) {
            const isInputsValid = names
                .map((name) => {
                const error = get(errors, name);
                error
                    ? set(formStateRef.current.errors, name, error)
                    : unset(formStateRef.current.errors, name);
                return !error;
            })
                .every(Boolean);
            updateFormState({
                isValid: isEmptyObject(errors),
                isValidating: false,
            });
            return isInputsValid;
        }
        else {
            const error = get(errors, names);
            shouldRenderBaseOnError(names, error, previousFormIsValid !== isEmptyObject(errors), {}, isEmptyObject(errors));
            return !error;
        }
    }, [shouldRenderBaseOnError, isValidateAllFieldCriteria]);
    const trigger = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (name) => {
        const fields = name || Object.keys(fieldsRef.current);
        updateIsValidating();
        if (resolverRef.current) {
            return executeSchemaOrResolverValidation(fields);
        }
        if (Array.isArray(fields)) {
            !name && (formStateRef.current.errors = {});
            const result = await Promise.all(fields.map(async (data) => await executeValidation(data, null)));
            updateFormState({
                isValidating: false,
            });
            return result.every(Boolean);
        }
        return await executeValidation(fields);
    }, [executeSchemaOrResolverValidation, executeValidation]);
    const setInternalValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, value, { shouldDirty, shouldValidate }) => {
        const data = {};
        set(data, name, value);
        for (const fieldName of getPath(name, value)) {
            if (fieldsRef.current[fieldName]) {
                setFieldValue(fieldName, get(data, fieldName));
                shouldDirty && updateAndGetDirtyState(fieldName);
                shouldValidate && trigger(fieldName);
            }
        }
    }, [trigger, setFieldValue, updateAndGetDirtyState]);
    const setInternalValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, value, config) => {
        !shouldUnregister &&
            !isPrimitive(value) &&
            set(shallowFieldsStateRef.current, name, Object.assign({}, value));
        if (fieldsRef.current[name]) {
            setFieldValue(name, value);
            config.shouldDirty && updateAndGetDirtyState(name);
            config.shouldValidate && trigger(name);
        }
        else if (!isPrimitive(value)) {
            setInternalValues(name, value, config);
            if (fieldArrayNamesRef.current.has(name)) {
                const parentName = getFieldArrayParentName(name) || name;
                set(fieldArrayDefaultValuesRef.current, name, value);
                resetFieldArrayFunctionRef.current[parentName]({
                    [parentName]: get(fieldArrayDefaultValuesRef.current, parentName),
                });
                if ((readFormStateRef.current.isDirty ||
                    readFormStateRef.current.dirtyFields) &&
                    config.shouldDirty) {
                    set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(value, get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
                    updateFormState({
                        isDirty: !deepEqual(Object.assign(Object.assign({}, getValues()), { [name]: value }), defaultValuesRef.current),
                    });
                }
            }
        }
        !shouldUnregister && set(shallowFieldsStateRef.current, name, value);
    }, [updateAndGetDirtyState, setFieldValue, setInternalValues]);
    const isFieldWatched = (name) => isWatchAllRef.current ||
        watchFieldsRef.current.has(name) ||
        watchFieldsRef.current.has((name.match(/\w+/) || [])[0]);
    const renderWatchedInputs = (name) => {
        let found = true;
        if (!isEmptyObject(useWatchFieldsRef.current)) {
            for (const key in useWatchFieldsRef.current) {
                if (!name ||
                    !useWatchFieldsRef.current[key].size ||
                    useWatchFieldsRef.current[key].has(name) ||
                    useWatchFieldsRef.current[key].has(getFieldArrayParentName(name))) {
                    useWatchRenderFunctionsRef.current[key]();
                    found = false;
                }
            }
        }
        return found;
    };
    function setValue(name, value, config) {
        setInternalValue(name, value, config || {});
        isFieldWatched(name) && updateFormState();
        renderWatchedInputs(name);
    }
    handleChangeRef.current = handleChangeRef.current
        ? handleChangeRef.current
        : async ({ type, target }) => {
            let name = target.name;
            const field = fieldsRef.current[name];
            let error;
            let isValid;
            if (field) {
                const isBlurEvent = type === EVENTS.BLUR;
                const shouldSkipValidation = skipValidation(Object.assign({ isBlurEvent,
                    isReValidateOnChange,
                    isReValidateOnBlur, isTouched: !!get(formStateRef.current.touched, name), isSubmitted: formStateRef.current.isSubmitted }, modeRef.current));
                let state = updateAndGetDirtyState(name, false);
                let shouldRender = !isEmptyObject(state) ||
                    (!isBlurEvent && isFieldWatched(name));
                if (isBlurEvent &&
                    !get(formStateRef.current.touched, name) &&
                    readFormStateRef.current.touched) {
                    set(formStateRef.current.touched, name, true);
                    state = Object.assign(Object.assign({}, state), { touched: formStateRef.current.touched });
                }
                if (!shouldUnregister && isCheckBoxInput(target)) {
                    set(shallowFieldsStateRef.current, name, getFieldValue(fieldsRef, name));
                }
                if (shouldSkipValidation) {
                    !isBlurEvent && renderWatchedInputs(name);
                    return ((!isEmptyObject(state) ||
                        (shouldRender && isEmptyObject(state))) &&
                        updateFormState(state));
                }
                updateIsValidating();
                if (resolverRef.current) {
                    const { errors } = await resolverRef.current(getValues(), contextRef.current, isValidateAllFieldCriteria);
                    const previousFormIsValid = formStateRef.current.isValid;
                    error = get(errors, name);
                    if (isCheckBoxInput(target) &&
                        !error &&
                        resolverRef.current) {
                        const parentNodeName = getFieldArrayParentName(name);
                        const currentError = get(errors, parentNodeName, {});
                        currentError.type &&
                            currentError.message &&
                            (error = currentError);
                        if (parentNodeName &&
                            (currentError ||
                                get(formStateRef.current.errors, parentNodeName))) {
                            name = parentNodeName;
                        }
                    }
                    isValid = isEmptyObject(errors);
                    previousFormIsValid !== isValid && (shouldRender = true);
                }
                else {
                    error = (await validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef))[name];
                }
                !isBlurEvent && renderWatchedInputs(name);
                shouldRenderBaseOnError(name, error, shouldRender, state, isValid);
            }
        };
    function setFieldArrayDefaultValues(data) {
        if (!shouldUnregister) {
            let copy = cloneObject(data);
            for (const value of fieldArrayNamesRef.current) {
                if (isKey(value) && !copy[value]) {
                    copy = Object.assign(Object.assign({}, copy), { [value]: [] });
                }
            }
            return copy;
        }
        return data;
    }
    function getValues(payload) {
        if (isString(payload)) {
            return getFieldValue(fieldsRef, payload, shallowFieldsStateRef);
        }
        if (Array.isArray(payload)) {
            const data = {};
            for (const name of payload) {
                set(data, name, getFieldValue(fieldsRef, name, shallowFieldsStateRef));
            }
            return data;
        }
        return setFieldArrayDefaultValues(getFieldsValues(fieldsRef, cloneObject(shallowFieldsStateRef.current), shouldUnregister));
    }
    const validateResolver = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (values = {}) => {
        const { errors } = await resolverRef.current(Object.assign(Object.assign({}, getValues()), values), contextRef.current, isValidateAllFieldCriteria);
        const isValid = isEmptyObject(errors);
        formStateRef.current.isValid !== isValid &&
            updateFormState({
                isValid,
            });
    }, [isValidateAllFieldCriteria]);
    const removeFieldEventListener = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((field, forceDelete) => findRemovedFieldAndRemoveListener(fieldsRef, handleChangeRef.current, field, shallowFieldsStateRef, shouldUnregister, forceDelete), [shouldUnregister]);
    const updateWatchedValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name) => {
        if (isWatchAllRef.current) {
            updateFormState();
        }
        else {
            for (const watchField of watchFieldsRef.current) {
                if (watchField.startsWith(name)) {
                    updateFormState();
                    break;
                }
            }
            renderWatchedInputs(name);
        }
    }, []);
    const removeFieldEventListenerAndRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((field, forceDelete) => {
        if (field) {
            removeFieldEventListener(field, forceDelete);
            if (shouldUnregister && !compact(field.options || []).length) {
                unset(validFieldsRef.current, field.ref.name);
                unset(fieldsWithValidationRef.current, field.ref.name);
                unset(formStateRef.current.errors, field.ref.name);
                set(formStateRef.current.dirtyFields, field.ref.name, true);
                updateFormState({
                    isDirty: isFormDirty(),
                });
                readFormStateRef.current.isValid &&
                    resolverRef.current &&
                    validateResolver();
                updateWatchedValue(field.ref.name);
            }
        }
    }, [validateResolver, removeFieldEventListener]);
    function clearErrors(name) {
        name &&
            (Array.isArray(name) ? name : [name]).forEach((inputName) => fieldsRef.current[inputName] && isKey(inputName)
                ? delete formStateRef.current.errors[inputName]
                : unset(formStateRef.current.errors, inputName));
        updateFormState({
            errors: name ? formStateRef.current.errors : {},
        });
    }
    function setError(name, error) {
        const ref = (fieldsRef.current[name] || {}).ref;
        set(formStateRef.current.errors, name, Object.assign(Object.assign({}, error), { ref }));
        updateFormState({
            isValid: false,
        });
        error.shouldFocus && ref && ref.focus && ref.focus();
    }
    const watchInternal = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((fieldNames, defaultValue, watchId) => {
        const watchFields = watchId
            ? useWatchFieldsRef.current[watchId]
            : watchFieldsRef.current;
        let fieldValues = getFieldsValues(fieldsRef, cloneObject(shallowFieldsStateRef.current), shouldUnregister, false, fieldNames);
        if (isString(fieldNames)) {
            if (fieldArrayNamesRef.current.has(fieldNames)) {
                const fieldArrayValue = get(fieldArrayValuesRef.current, fieldNames, []);
                fieldValues =
                    !fieldArrayValue.length ||
                        fieldArrayValue.length !==
                            compact(get(fieldValues, fieldNames, [])).length
                        ? fieldArrayValuesRef.current
                        : fieldValues;
            }
            return assignWatchFields(fieldValues, fieldNames, watchFields, isUndefined(get(defaultValuesRef.current, fieldNames))
                ? defaultValue
                : get(defaultValuesRef.current, fieldNames), true);
        }
        const combinedDefaultValues = isUndefined(defaultValue)
            ? defaultValuesRef.current
            : defaultValue;
        if (Array.isArray(fieldNames)) {
            return fieldNames.reduce((previous, name) => (Object.assign(Object.assign({}, previous), { [name]: assignWatchFields(fieldValues, name, watchFields, combinedDefaultValues) })), {});
        }
        isWatchAllRef.current = isUndefined(watchId);
        return transformToNestObject((!isEmptyObject(fieldValues) && fieldValues) ||
            combinedDefaultValues);
    }, []);
    function watch(fieldNames, defaultValue) {
        return watchInternal(fieldNames, defaultValue);
    }
    function unregister(name) {
        for (const fieldName of Array.isArray(name) ? name : [name]) {
            removeFieldEventListenerAndRef(fieldsRef.current[fieldName], true);
        }
    }
    function registerFieldRef(ref, options = {}) {
        if (true) {
            if (!ref.name) {
                return console.warn('📋 Field is missing `name` attribute', ref, `https://react-hook-form.com/api#useForm`);
            }
            if (fieldArrayNamesRef.current.has(ref.name.split(/\[\d+\]$/)[0]) &&
                !RegExp(`^${ref.name.split(/\[\d+\]$/)[0]}[\\d+].\\w+`
                    .replace(/\[/g, '\\[')
                    .replace(/\]/g, '\\]')).test(ref.name)) {
                return console.warn('📋 `name` prop should be in object shape: name="test[index].name"', ref, 'https://react-hook-form.com/api#useFieldArray');
            }
        }
        const { name, type, value } = ref;
        const fieldRefAndValidationOptions = Object.assign({ ref }, options);
        const fields = fieldsRef.current;
        const isRadioOrCheckbox = isRadioOrCheckboxFunction(ref);
        const isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
        const compareRef = (currentRef) => isWeb && (!isHTMLElement(ref) || currentRef === ref);
        let field = fields[name];
        let isEmptyDefaultValue = true;
        let defaultValue;
        if (field &&
            (isRadioOrCheckbox
                ? Array.isArray(field.options) &&
                    compact(field.options).find((option) => {
                        return value === option.ref.value && compareRef(option.ref);
                    })
                : compareRef(field.ref))) {
            fields[name] = Object.assign(Object.assign({}, field), options);
            return;
        }
        if (type) {
            field = isRadioOrCheckbox
                ? Object.assign({ options: [
                        ...compact((field && field.options) || []),
                        {
                            ref,
                        },
                    ], ref: { type, name } }, options) : Object.assign({}, fieldRefAndValidationOptions);
        }
        else {
            field = fieldRefAndValidationOptions;
        }
        fields[name] = field;
        const isEmptyUnmountFields = isUndefined(get(shallowFieldsStateRef.current, name));
        if (!isEmptyObject(defaultValuesRef.current) || !isEmptyUnmountFields) {
            defaultValue = get(isEmptyUnmountFields
                ? defaultValuesRef.current
                : shallowFieldsStateRef.current, name);
            isEmptyDefaultValue = isUndefined(defaultValue);
            if (!isEmptyDefaultValue && !isFieldArray) {
                setFieldValue(name, defaultValue);
            }
        }
        if (!isEmptyObject(options)) {
            set(fieldsWithValidationRef.current, name, true);
            if (!isOnSubmit && readFormStateRef.current.isValid) {
                validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef).then((error) => {
                    const previousFormIsValid = formStateRef.current.isValid;
                    isEmptyObject(error)
                        ? set(validFieldsRef.current, name, true)
                        : unset(validFieldsRef.current, name);
                    previousFormIsValid !== isEmptyObject(error) && updateFormState();
                });
            }
        }
        if (shouldUnregister && !(isFieldArray && isEmptyDefaultValue)) {
            !isFieldArray && unset(formStateRef.current.dirtyFields, name);
        }
        if (type) {
            attachEventListeners(isRadioOrCheckbox && field.options
                ? field.options[field.options.length - 1]
                : field, isRadioOrCheckbox || isSelectInput(ref), handleChangeRef.current);
        }
    }
    function register(refOrRegisterOptions, options) {
        if (!isWindowUndefined) {
            if (isString(refOrRegisterOptions)) {
                registerFieldRef({ name: refOrRegisterOptions }, options);
            }
            else if (isObject(refOrRegisterOptions) &&
                'name' in refOrRegisterOptions) {
                registerFieldRef(refOrRegisterOptions, options);
            }
            else {
                return (ref) => ref && registerFieldRef(ref, refOrRegisterOptions);
            }
        }
    }
    const handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((onValid, onInvalid) => async (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
            e.persist();
        }
        let fieldErrors = {};
        let fieldValues = setFieldArrayDefaultValues(getFieldsValues(fieldsRef, cloneObject(shallowFieldsStateRef.current), shouldUnregister, true));
        readFormStateRef.current.isSubmitting &&
            updateFormState({
                isSubmitting: true,
            });
        try {
            if (resolverRef.current) {
                const { errors, values } = await resolverRef.current(fieldValues, contextRef.current, isValidateAllFieldCriteria);
                formStateRef.current.errors = fieldErrors = errors;
                fieldValues = values;
            }
            else {
                for (const field of Object.values(fieldsRef.current)) {
                    if (field) {
                        const { name } = field.ref;
                        const fieldError = await validateField(fieldsRef, isValidateAllFieldCriteria, field, shallowFieldsStateRef);
                        if (fieldError[name]) {
                            set(fieldErrors, name, fieldError[name]);
                            unset(validFieldsRef.current, name);
                        }
                        else if (get(fieldsWithValidationRef.current, name)) {
                            unset(formStateRef.current.errors, name);
                            set(validFieldsRef.current, name, true);
                        }
                    }
                }
            }
            if (isEmptyObject(fieldErrors) &&
                Object.keys(formStateRef.current.errors).every((name) => name in fieldsRef.current)) {
                updateFormState({
                    errors: {},
                    isSubmitting: true,
                });
                await onValid(fieldValues, e);
            }
            else {
                formStateRef.current.errors = Object.assign(Object.assign({}, formStateRef.current.errors), fieldErrors);
                onInvalid && (await onInvalid(formStateRef.current.errors, e));
                shouldFocusError &&
                    focusOnErrorField(fieldsRef.current, formStateRef.current.errors);
            }
        }
        finally {
            formStateRef.current.isSubmitting = false;
            updateFormState({
                isSubmitted: true,
                isSubmitting: false,
                isSubmitSuccessful: isEmptyObject(formStateRef.current.errors),
                submitCount: formStateRef.current.submitCount + 1,
            });
        }
    }, [shouldFocusError, isValidateAllFieldCriteria]);
    const resetRefs = ({ errors, isDirty, isSubmitted, touched, isValid, submitCount, dirtyFields, }) => {
        if (!isValid) {
            validFieldsRef.current = {};
            fieldsWithValidationRef.current = {};
        }
        fieldArrayDefaultValuesRef.current = {};
        watchFieldsRef.current = new Set();
        isWatchAllRef.current = false;
        updateFormState({
            submitCount: submitCount ? formStateRef.current.submitCount : 0,
            isDirty: isDirty ? formStateRef.current.isDirty : false,
            isSubmitted: isSubmitted ? formStateRef.current.isSubmitted : false,
            isValid: isValid ? formStateRef.current.isValid : false,
            dirtyFields: dirtyFields ? formStateRef.current.dirtyFields : {},
            touched: touched ? formStateRef.current.touched : {},
            errors: errors ? formStateRef.current.errors : {},
            isSubmitting: false,
            isSubmitSuccessful: false,
        });
    };
    const reset = (values, omitResetState = {}) => {
        if (isWeb) {
            for (const field of Object.values(fieldsRef.current)) {
                if (field) {
                    const { ref, options } = field;
                    const inputRef = isRadioOrCheckboxFunction(ref) && Array.isArray(options)
                        ? options[0].ref
                        : ref;
                    if (isHTMLElement(inputRef)) {
                        try {
                            inputRef.closest('form').reset();
                            break;
                        }
                        catch (_a) { }
                    }
                }
            }
        }
        fieldsRef.current = {};
        defaultValuesRef.current = Object.assign({}, (values || defaultValuesRef.current));
        values && renderWatchedInputs('');
        Object.values(resetFieldArrayFunctionRef.current).forEach((resetFieldArray) => isFunction(resetFieldArray) && resetFieldArray());
        shallowFieldsStateRef.current = shouldUnregister
            ? {}
            : cloneObject(values || defaultValuesRef.current);
        resetRefs(omitResetState);
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        resolver && readFormStateRef.current.isValid && validateResolver();
        observerRef.current =
            observerRef.current || !isWeb
                ? observerRef.current
                : onDomRemove(fieldsRef, removeFieldEventListenerAndRef);
    }, [removeFieldEventListenerAndRef, defaultValuesRef.current]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => () => {
        observerRef.current && observerRef.current.disconnect();
        isUnMount.current = true;
        if (true) {
            return;
        }
        Object.values(fieldsRef.current).forEach((field) => removeFieldEventListenerAndRef(field, true));
    }, []);
    if (!resolver && readFormStateRef.current.isValid) {
        formState.isValid =
            deepEqual(validFieldsRef.current, fieldsWithValidationRef.current) &&
                isEmptyObject(formStateRef.current.errors);
    }
    const commonProps = {
        trigger,
        setValue: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(setValue, [setInternalValue, trigger]),
        getValues: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(getValues, []),
        register: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(register, [defaultValuesRef.current]),
        unregister: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(unregister, []),
        formState: isProxyEnabled
            ? new Proxy(formState, {
                get: (obj, prop) => {
                    if (true) {
                        if (prop === 'isValid' && isOnSubmit) {
                            console.warn('📋 `formState.isValid` is applicable with `onTouched`, `onChange` or `onBlur` mode. https://react-hook-form.com/api#formState');
                        }
                    }
                    if (prop in obj) {
                        readFormStateRef.current[prop] = true;
                        return obj[prop];
                    }
                    return undefined;
                },
            })
            : formState,
    };
    const control = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => (Object.assign({ isFormDirty,
        updateWatchedValue,
        shouldUnregister,
        updateFormState,
        removeFieldEventListener,
        watchInternal, mode: modeRef.current, reValidateMode: {
            isReValidateOnBlur,
            isReValidateOnChange,
        }, validateResolver: resolver ? validateResolver : undefined, fieldsRef,
        resetFieldArrayFunctionRef,
        useWatchFieldsRef,
        useWatchRenderFunctionsRef,
        fieldArrayDefaultValuesRef,
        validFieldsRef,
        fieldsWithValidationRef,
        fieldArrayNamesRef,
        readFormStateRef,
        formStateRef,
        defaultValuesRef,
        shallowFieldsStateRef,
        fieldArrayValuesRef }, commonProps)), [
        defaultValuesRef.current,
        updateWatchedValue,
        shouldUnregister,
        removeFieldEventListener,
        watchInternal,
    ]);
    return Object.assign({ watch,
        control,
        handleSubmit, reset: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(reset, []), clearErrors: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(clearErrors, []), setError: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(setError, []), errors: formState.errors }, commonProps);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const FormContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
FormContext.displayName = 'RHFContext';
const useFormContext = () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(FormContext);
const FormProvider = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormContext.Provider, { value: Object.assign({}, props) }, children));
};

var generateId = () => {
    const d = typeof performance === UNDEFINED ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};

function removeAtIndexes(data, indexes) {
    let i = 0;
    const temp = [...data];
    for (const index of indexes) {
        temp.splice(index - i, 1);
        i++;
    }
    return compact(temp).length ? temp : [];
}
var removeArrayAt = (data, index) => isUndefined(index)
    ? []
    : removeAtIndexes(data, (Array.isArray(index) ? index : [index]).sort());

var moveArrayAt = (data, from, to) => {
    if (Array.isArray(data)) {
        if (isUndefined(data[to])) {
            data[to] = undefined;
        }
        data.splice(to, 0, data.splice(from, 1)[0]);
        return data;
    }
    return [];
};

var swapArrayAt = (data, indexA, indexB) => {
    const temp = [data[indexB], data[indexA]];
    data[indexA] = temp[0];
    data[indexB] = temp[1];
};

function prepend(data, value) {
    return [...(Array.isArray(value) ? value : [value || undefined]), ...data];
}

function insert(data, index, value) {
    return [
        ...data.slice(0, index),
        ...(Array.isArray(value) ? value : [value || undefined]),
        ...data.slice(index),
    ];
}

var fillEmptyArray = (value) => Array.isArray(value) ? Array(value.length).fill(undefined) : undefined;

var fillBooleanArray = (value) => (Array.isArray(value) ? value : [value]).map((data) => {
    if (isObject(data)) {
        const object = {};
        for (const key in data) {
            object[key] = true;
        }
        return object;
    }
    return true;
});

const mapIds = (values = [], keyName, skipWarn) => {
    if (true) {
        if (!skipWarn) {
            for (const value of values) {
                if (typeof value === 'object') {
                    if (keyName in value) {
                        console.warn(`📋 useFieldArray fieldValues contain the keyName \`${keyName}\` which is reserved for use by useFieldArray. https://react-hook-form.com/api#useFieldArray`);
                        break;
                    }
                }
                else {
                    console.warn(`📋 useFieldArray input's name should be in object shape instead of flat array. https://react-hook-form.com/api#useFieldArray`);
                    break;
                }
            }
        }
    }
    return values.map((value) => (Object.assign({ [keyName]: value[keyName] || generateId() }, value)));
};
const useFieldArray = ({ control, name, keyName = 'id', }) => {
    const methods = useFormContext();
    if (true) {
        if (!control && !methods) {
            throw new Error('📋 useFieldArray is missing `control` prop. https://react-hook-form.com/api#useFieldArray');
        }
    }
    const focusIndexRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(-1);
    const { isFormDirty, updateWatchedValue, resetFieldArrayFunctionRef, fieldArrayNamesRef, fieldsRef, defaultValuesRef, removeFieldEventListener, formStateRef, shallowFieldsStateRef, updateFormState, readFormStateRef, validFieldsRef, fieldsWithValidationRef, fieldArrayDefaultValuesRef, validateResolver, getValues, shouldUnregister, fieldArrayValuesRef, } = control || methods.control;
    const getDefaultValues = (values) => get(shouldUnregister ? values : shallowFieldsStateRef.current, name, []);
    const fieldArrayParentName = getFieldArrayParentName(name);
    const memoizedDefaultValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([
        ...(get(fieldArrayDefaultValuesRef.current, fieldArrayParentName)
            ? getDefaultValues(fieldArrayDefaultValuesRef.current)
            : getDefaultValues(defaultValuesRef.current)),
    ]);
    const [fields, setFields] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(mapIds(memoizedDefaultValues.current, keyName));
    set(fieldArrayValuesRef.current, name, fields);
    const omitKey = (fields) => fields.map((_a = {}) => {
        var _b = keyName, omitted = _a[_b], rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
        return rest;
    });
    fieldArrayNamesRef.current.add(name);
    const getFieldArrayValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => get(fieldArrayValuesRef.current, name, []), [name]);
    const getCurrentFieldsValues = () => mapIds(get(getValues(), name, getFieldArrayValue()).map((item, index) => (Object.assign(Object.assign({}, getFieldArrayValue()[index]), item))), keyName, true);
    fieldArrayNamesRef.current.add(name);
    if (fieldArrayParentName &&
        !get(fieldArrayDefaultValuesRef.current, fieldArrayParentName)) {
        set(fieldArrayDefaultValuesRef.current, fieldArrayParentName, cloneObject(get(defaultValuesRef.current, fieldArrayParentName)));
    }
    const setFieldAndValidState = (fieldsValues) => {
        setFields(fieldsValues);
        set(fieldArrayValuesRef.current, name, fieldsValues);
        if (readFormStateRef.current.isValid && validateResolver) {
            const values = getValues();
            set(values, name, fieldsValues);
            validateResolver(values);
        }
    };
    const resetFields = () => {
        for (const key in fieldsRef.current) {
            if (isMatchFieldArrayName(key, name)) {
                removeFieldEventListener(fieldsRef.current[key], true);
                delete fieldsRef.current[key];
            }
        }
    };
    const cleanup = (ref) => !compact(get(ref, name, [])).length && unset(ref, name);
    const updateDirtyFieldsWithDefaultValues = (updatedFieldArrayValues) => {
        if (updatedFieldArrayValues) {
            set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(omitKey(updatedFieldArrayValues), get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
        }
    };
    const batchStateUpdate = (method, args, updatedFieldValues, updatedFormValues = [], shouldSet = true, shouldUpdateValid = false) => {
        if (get(shallowFieldsStateRef.current, name)) {
            const output = method(get(shallowFieldsStateRef.current, name), args.argA, args.argB);
            shouldSet && set(shallowFieldsStateRef.current, name, output);
        }
        if (get(fieldArrayDefaultValuesRef.current, name)) {
            const output = method(get(fieldArrayDefaultValuesRef.current, name), args.argA, args.argB);
            shouldSet && set(fieldArrayDefaultValuesRef.current, name, output);
        }
        if (Array.isArray(get(formStateRef.current.errors, name))) {
            const output = method(get(formStateRef.current.errors, name), args.argA, args.argB);
            shouldSet && set(formStateRef.current.errors, name, output);
            cleanup(formStateRef.current.errors);
        }
        if (readFormStateRef.current.touched &&
            get(formStateRef.current.touched, name)) {
            const output = method(get(formStateRef.current.touched, name), args.argA, args.argB);
            shouldSet && set(formStateRef.current.touched, name, output);
            cleanup(formStateRef.current.touched);
        }
        if (readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) {
            set(formStateRef.current.dirtyFields, name, setFieldArrayDirtyFields(omitKey(updatedFormValues), get(defaultValuesRef.current, name, []), get(formStateRef.current.dirtyFields, name, [])));
            updateDirtyFieldsWithDefaultValues(updatedFieldValues);
            cleanup(formStateRef.current.dirtyFields);
        }
        if (shouldUpdateValid &&
            readFormStateRef.current.isValid &&
            !validateResolver) {
            set(validFieldsRef.current, name, method(get(validFieldsRef.current, name, []), args.argA));
            cleanup(validFieldsRef.current);
            set(fieldsWithValidationRef.current, name, method(get(fieldsWithValidationRef.current, name, []), args.argA));
            cleanup(fieldsWithValidationRef.current);
        }
        updateFormState({
            isDirty: isFormDirty(name, omitKey(updatedFormValues)),
        });
    };
    const append = (value, shouldFocus = true) => {
        const appendValue = Array.isArray(value) ? value : [value];
        const updateFormValues = [
            ...getCurrentFieldsValues(),
            ...mapIds(appendValue, keyName),
        ];
        setFieldAndValidState(updateFormValues);
        if (readFormStateRef.current.dirtyFields ||
            readFormStateRef.current.isDirty) {
            updateDirtyFieldsWithDefaultValues(updateFormValues);
            updateFormState({
                isDirty: true,
                dirtyFields: formStateRef.current.dirtyFields,
            });
        }
        !shouldUnregister &&
            set(shallowFieldsStateRef.current, name, [
                ...(get(shallowFieldsStateRef.current, name) || []),
                ...cloneObject(appendValue),
            ]);
        focusIndexRef.current = shouldFocus
            ? get(fieldArrayValuesRef.current, name).length - 1
            : -1;
    };
    const prepend$1 = (value, shouldFocus = true) => {
        const emptyArray = fillEmptyArray(value);
        const updatedFieldArrayValues = prepend(getCurrentFieldsValues(), mapIds(Array.isArray(value) ? value : [value], keyName));
        setFieldAndValidState(updatedFieldArrayValues);
        resetFields();
        batchStateUpdate(prepend, {
            argA: emptyArray,
            argC: fillBooleanArray(value),
        }, updatedFieldArrayValues);
        focusIndexRef.current = shouldFocus ? 0 : -1;
    };
    const remove = (index) => {
        const fieldValues = getCurrentFieldsValues();
        const updatedFieldValues = removeArrayAt(fieldValues, index);
        setFieldAndValidState(updatedFieldValues);
        resetFields();
        batchStateUpdate(removeArrayAt, {
            argA: index,
            argC: index,
        }, updatedFieldValues, removeArrayAt(fieldValues, index), true, true);
    };
    const insert$1 = (index, value, shouldFocus = true) => {
        const emptyArray = fillEmptyArray(value);
        const fieldValues = getCurrentFieldsValues();
        const updatedFieldArrayValues = insert(fieldValues, index, mapIds(Array.isArray(value) ? value : [value], keyName));
        setFieldAndValidState(updatedFieldArrayValues);
        resetFields();
        batchStateUpdate(insert, {
            argA: index,
            argB: emptyArray,
            argC: index,
            argD: fillBooleanArray(value),
        }, updatedFieldArrayValues, insert(fieldValues, index));
        focusIndexRef.current = shouldFocus ? index : -1;
    };
    const swap = (indexA, indexB) => {
        const fieldValues = getCurrentFieldsValues();
        swapArrayAt(fieldValues, indexA, indexB);
        resetFields();
        setFieldAndValidState([...fieldValues]);
        batchStateUpdate(swapArrayAt, {
            argA: indexA,
            argB: indexB,
            argC: indexA,
            argD: indexB,
        }, undefined, fieldValues, false);
    };
    const move = (from, to) => {
        const fieldValues = getCurrentFieldsValues();
        moveArrayAt(fieldValues, from, to);
        resetFields();
        setFieldAndValidState([...fieldValues]);
        batchStateUpdate(moveArrayAt, {
            argA: from,
            argB: to,
            argC: from,
            argD: to,
        }, undefined, fieldValues, false);
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (true) {
            if (!name) {
                console.warn('📋 useFieldArray is missing `name` attribute. https://react-hook-form.com/api#useFieldArray');
            }
        }
        const defaultValues = get(fieldArrayDefaultValuesRef.current, name);
        if (defaultValues && fields.length < defaultValues.length) {
            set(fieldArrayDefaultValuesRef.current, name, defaultValues.slice(1));
        }
        updateWatchedValue(name);
        if (focusIndexRef.current > -1) {
            for (const key in fieldsRef.current) {
                const field = fieldsRef.current[key];
                if (key.startsWith(`${name}[${focusIndexRef.current}]`) &&
                    field.ref.focus) {
                    field.ref.focus();
                    break;
                }
            }
        }
        focusIndexRef.current = -1;
    }, [fields, name]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        const resetFunctions = resetFieldArrayFunctionRef.current;
        const fieldArrayNames = fieldArrayNamesRef.current;
        if (!getFieldArrayParentName(name)) {
            resetFunctions[name] = (data) => {
                resetFields();
                !data && unset(fieldArrayDefaultValuesRef.current, name);
                unset(shallowFieldsStateRef.current, name);
                memoizedDefaultValues.current = get(data || defaultValuesRef.current, name);
                setFields(mapIds(memoizedDefaultValues.current, keyName));
            };
        }
        return () => {
            if (true) {
                return;
            }
            resetFields();
            delete resetFunctions[name];
            unset(fieldArrayValuesRef, name);
            fieldArrayNames.delete(name);
        };
    }, []);
    return {
        swap: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(swap, [name]),
        move: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(move, [name]),
        prepend: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(prepend$1, [name]),
        append: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(append, [name]),
        remove: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(remove, [name]),
        insert: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(insert$1, [name]),
        fields,
    };
};

var getInputValue = (event) => isPrimitive(event) ||
    !isObject(event.target) ||
    (isObject(event.target) && !event.type)
    ? event
    : isUndefined(event.target.value)
        ? event.target.checked
        : event.target.value;

function useController({ name, rules, defaultValue, control, onFocus, }) {
    const methods = useFormContext();
    if (true) {
        if (!control && !methods) {
            throw new Error('📋 Controller is missing `control` prop. https://react-hook-form.com/api#Controller');
        }
    }
    const { defaultValuesRef, setValue, register, unregister, trigger, mode, reValidateMode: { isReValidateOnBlur, isReValidateOnChange }, formState, formStateRef: { current: { isSubmitted, touched, errors }, }, updateFormState, readFormStateRef, fieldsRef, fieldArrayNamesRef, shallowFieldsStateRef, } = control || methods.control;
    const isNotFieldArray = !isNameInFieldArray(fieldArrayNamesRef.current, name);
    const getInitialValue = () => !isUndefined(get(shallowFieldsStateRef.current, name)) && isNotFieldArray
        ? get(shallowFieldsStateRef.current, name)
        : isUndefined(defaultValue)
            ? get(defaultValuesRef.current, name)
            : defaultValue;
    const [value, setInputStateValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getInitialValue());
    const valueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
    const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        focus: () => null,
    });
    const onFocusRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(onFocus ||
        (() => {
            if (isFunction(ref.current.focus)) {
                ref.current.focus();
            }
            if (true) {
                if (!isFunction(ref.current.focus)) {
                    console.warn(`📋 'ref' from Controller render prop must be attached to a React component or a DOM Element whose ref provides a 'focus()' method`);
                }
            }
        }));
    const shouldValidate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((isBlurEvent) => !skipValidation(Object.assign({ isBlurEvent,
        isReValidateOnBlur,
        isReValidateOnChange,
        isSubmitted, isTouched: !!get(touched, name) }, mode)), [
        isReValidateOnBlur,
        isReValidateOnChange,
        isSubmitted,
        touched,
        name,
        mode,
    ]);
    const commonTask = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(([event]) => {
        const data = getInputValue(event);
        setInputStateValue(data);
        valueRef.current = data;
        return data;
    }, []);
    const registerField = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((shouldUpdateValue) => {
        if (true) {
            if (!name) {
                return console.warn('📋 Field is missing `name` prop. https://react-hook-form.com/api#Controller');
            }
        }
        if (fieldsRef.current[name]) {
            fieldsRef.current[name] = Object.assign({ ref: fieldsRef.current[name].ref }, rules);
        }
        else {
            register(Object.defineProperties({
                name,
                focus: onFocusRef.current,
            }, {
                value: {
                    set(data) {
                        setInputStateValue(data);
                        valueRef.current = data;
                    },
                    get() {
                        return valueRef.current;
                    },
                },
            }), rules);
            shouldUpdateValue = isUndefined(get(defaultValuesRef.current, name));
        }
        shouldUpdateValue &&
            isNotFieldArray &&
            setInputStateValue(getInitialValue());
    }, [rules, name, register]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => () => unregister(name), [name]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (true) {
            if (isUndefined(value)) {
                console.warn(`📋 ${name} is missing in the 'defaultValue' prop of either its Controller (https://react-hook-form.com/api#Controller) or useForm (https://react-hook-form.com/api#useForm)`);
            }
            if (!isNotFieldArray && isUndefined(defaultValue)) {
                console.warn('📋 Controller is missing `defaultValue` prop when using `useFieldArray`. https://react-hook-form.com/api#Controller');
            }
        }
        registerField();
    }, [registerField]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        !fieldsRef.current[name] && registerField(true);
    });
    const onBlur = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
        if (readFormStateRef.current.touched && !get(touched, name)) {
            set(touched, name, true);
            updateFormState({
                touched,
            });
        }
        shouldValidate(true) && trigger(name);
    }, [name, updateFormState, shouldValidate, trigger, readFormStateRef]);
    const onChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((...event) => setValue(name, commonTask(event), {
        shouldValidate: shouldValidate(),
        shouldDirty: true,
    }), [setValue, name, shouldValidate]);
    return {
        field: {
            onChange,
            onBlur,
            name,
            value,
            ref,
        },
        meta: Object.defineProperties({
            invalid: !!get(errors, name),
        }, {
            isDirty: {
                get() {
                    return !!get(formState.dirtyFields, name);
                },
            },
            isTouched: {
                get() {
                    return !!get(formState.touched, name);
                },
            },
        }),
    };
}

function useWatch({ control, name, defaultValue, }) {
    const methods = useFormContext();
    if (true) {
        if (!control && !methods) {
            throw new Error('📋 useWatch is missing `control` prop. https://react-hook-form.com/api#useWatch');
        }
    }
    const { useWatchFieldsRef, useWatchRenderFunctionsRef, watchInternal, defaultValuesRef, } = control || methods.control;
    const updateValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])()[1];
    const idRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const defaultValueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(defaultValue);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (true) {
            if (name === '') {
                console.warn('📋 useWatch is missing `name` attribute. https://react-hook-form.com/api#useWatch');
            }
        }
        const id = (idRef.current = generateId());
        const watchFieldsHookRender = useWatchRenderFunctionsRef.current;
        const watchFieldsHook = useWatchFieldsRef.current;
        watchFieldsHook[id] = new Set();
        watchFieldsHookRender[id] = () => updateValue({});
        watchInternal(name, defaultValueRef.current, id);
        return () => {
            delete watchFieldsHook[id];
            delete watchFieldsHookRender[id];
        };
    }, [
        name,
        useWatchRenderFunctionsRef,
        useWatchFieldsRef,
        watchInternal,
        defaultValueRef,
    ]);
    return idRef.current
        ? watchInternal(name, defaultValueRef.current, idRef.current)
        : isUndefined(defaultValue)
            ? isString(name)
                ? get(defaultValuesRef.current, name)
                : Array.isArray(name)
                    ? name.reduce((previous, inputName) => (Object.assign(Object.assign({}, previous), { [inputName]: get(defaultValuesRef.current, inputName) })), {})
                    : defaultValuesRef.current
            : defaultValue;
}

const Controller = (props) => {
    const { rules, as, render, defaultValue, control, onFocus } = props, rest = __rest(props, ["rules", "as", "render", "defaultValue", "control", "onFocus"]);
    const { field, meta } = useController(props);
    const componentProps = Object.assign(Object.assign({}, rest), field);
    return as
        ? Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(as)
            ? Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(as, componentProps)
            : Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(as, componentProps)
        : render
            ? render(field, meta)
            : null;
};


//# sourceMappingURL=index.esm.js.map


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9MaXN0SW1hZ2VzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtaG9vay1mb3JtL2Rpc3QvaW5kZXguZXNtLmpzIl0sIm5hbWVzIjpbIkxpc3RJbWFnZXMiLCJ1c2VTdGF0ZSIsInBob3RvcyIsInNldFBob3RvcyIsInRva2VuIiwiZ2V0Q29va2llIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2F0Y2giLCJlcnJvcnMiLCJnaXRlcyIsInNldEdpdGVzIiwibGlzdERlc0dpdGVzIiwibGlzdEdpdGVzTm9tcyIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibGlzdGVyTGVzSW1hZ2VzIiwibGlzdGVEZXNJbWFnZXMiLCJ1c2VFZmZlY3QiLCJkZWxldGVDb25maXJtIiwic2x1ZyIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJtYXAiLCJwaG90byIsIm5vbSIsImxvY2F0aW9uIiwibWF4SGVpZ2h0Iiwid2lkdGgiLCJuYW1lIiwiZSIsInNldEFsdCIsInRhcmdldCIsInZhbHVlIiwiYWx0Iiwic2V0UGFnZSIsImdpdGUiLCJpIiwic2V0U2VjdGlvbiIsImNvbG9yIiwiY3Vyc29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxDQUFDLEVBQUQsQ0FEWjtBQUFBLE1BQ2pCQyxNQURpQjtBQUFBLE1BQ1RDLFNBRFM7O0FBRXhCLE1BQU1DLEtBQUssR0FBR0Msc0VBQVMsQ0FBQyxPQUFELENBQXZCOztBQUZ3QixpQkFHMEJDLCtEQUFPLEVBSGpDO0FBQUEsTUFHaEJDLFFBSGdCLFlBR2hCQSxRQUhnQjtBQUFBLE1B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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLGNBQWMsd0RBQXdELE1BQU07QUFDdEs7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxvREFBb0Q7QUFDL0QsV0FBVyxjQUFjO0FBQ3pCLHlEQUF5RDtBQUN6RDtBQUNBLFVBQVUsNERBQWM7QUFDeEIsY0FBYywwREFBWTtBQUMxQixjQUFjLDJEQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUUrSTtBQUMvSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9nZXN0aW9uSW1hZ2VzLmEwM2Y0Zjg1MzU4NzAzMTVkOGI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWJsZSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyBsaXN0ZURlc0ltYWdlcywgbGlzdEdpdGVzTm9tcyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvZ2l0ZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcblxyXG5jb25zdCBMaXN0SW1hZ2VzID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtwaG90b3MsIHNldFBob3Rvc10gPSB1c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0Y29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCB3YXRjaCwgZXJyb3JzIH0gPSB1c2VGb3JtKCk7XHJcblxyXG5cdGNvbnN0IFtnaXRlcywgc2V0R2l0ZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHRjb25zdCBsaXN0RGVzR2l0ZXMgPSAoKSA9PiB7XHJcblx0XHRsaXN0R2l0ZXNOb21zKCkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRHaXRlcyguLi5naXRlcywgZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGxpc3Rlckxlc0ltYWdlcyA9ICgpID0+IHtcclxuXHRcdGxpc3RlRGVzSW1hZ2VzKHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdvbiBlc3Qgb2snKTtcclxuXHRcdFx0XHRzZXRQaG90b3MoLi4ucGhvdG9zLCBkYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGxpc3REZXNHaXRlcygpO1xyXG5cdFx0bGlzdGVyTGVzSW1hZ2VzKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBkZWxldGVDb25maXJtID0gKHNsdWcpID0+IHtcclxuXHRcdGxldCBhbnN3ZXIgPSB3aW5kb3cuY29uZmlybShcclxuXHRcdFx0J0NldHRlIG9ww6lyYXRpb24gZXN0IGlycsOpdmVyc2libGUsIEV0ZXMtdm91cyBzdXIgZGUgdm91bG9pciBzdXBwcmltZXIgY2V0IGFydGljbGUgPydcclxuXHRcdCk7XHJcblx0XHRpZiAoYW5zd2VyKSB7XHJcblx0XHRcdC8vIGRlbGV0ZUdpdGUoc2x1Zyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdTdXBwcmVzc2lvbicpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8VGFibGU+XHJcblx0XHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdFx0PHRyPlxyXG5cdFx0XHRcdFx0XHQ8dGg+Tm9tPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPlBob3RvPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPkFsdDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD5QYWdlIGNvbmNlcm7DqWU8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGg+U2VjdGlvbiBjb25jZXJuw6k8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGggY29sU3Bhbj0nMic+QWN0aW9uczwvdGg+XHJcblx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0e3Bob3Rvcy5tYXAoKHBob3RvKSA9PiAoXHJcblx0XHRcdFx0XHRcdDx0ciBjbGFzc05hbWU9J210LTUnPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD57cGhvdG8ubm9tfTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9e3Bob3RvLmxvY2F0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBtYXhIZWlnaHQ6ICdhdXRvJywgd2lkdGg6ICc4MHB4JyB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ltZyBpbWctZmx1aWQnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD17cGhvdG8ubmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWx0KGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nYWx0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17YWx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdDxzZWxlY3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0ncGFnZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjdXN0b20tc2VsZWN0IG1yLXNtLTInXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFnZShlLnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdpbmxpbmVGb3JtQ3VzdG9tU2VsZWN0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBkZWZhdWx0VmFsdWU+U2VsZWN0aW9uLi4uPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtnaXRlcy5tYXAoKGdpdGUsIGkpID0+IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGtleT17aX0gdmFsdWU9e2dpdGUuc2x1Z30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Z2l0ZS5ub219XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSdBdXRyZSc+QXV0cmVzIHBhZ2VzPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5cclxuXHRcdFx0XHRcdFx0XHRcdDxzZWxlY3RcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nc2VjdGlvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRTZWN0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjdXN0b20tc2VsZWN0IG1yLXNtLTInXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdpbmxpbmVGb3JtQ3VzdG9tU2VsZWN0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBkZWZhdWx0VmFsdWU+U2VsZWN0aW9uLi4uPC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9J0F1dHJlJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRBdXRyZXMgc2VjdGlvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9J3ByZXNlbnRhdGlvbic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0UHLDqXNlbnRhdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT0ncGlzY2luZSc+UGlzY2luZTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPSdpbnRlcmlldXInPkludMOpcmlldXI8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9hZG1pbi9jcnVkL2dpdGUvJHtwaG90b31gfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmYXMgZmEtcGVuY2lsLXJ1bGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgY29sb3I6ICdvcmFuZ2UnIH19PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGVsZXRlQ29uZmlybShwaG90byl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPSdmYXMgZmEtdHJhc2gtYWx0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdXJzb3I6ICdwb2ludGVyJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHQ8L1RhYmxlPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RJbWFnZXM7XHJcbiIsImltcG9ydCB7IGlzVmFsaWRFbGVtZW50LCB1c2VSZWYsIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCBjcmVhdGVFbGVtZW50LCBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5cbnZhciBpc0hUTUxFbGVtZW50ID0gKHZhbHVlKSA9PiB2YWx1ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuXG5jb25zdCBFVkVOVFMgPSB7XHJcbiAgICBCTFVSOiAnYmx1cicsXHJcbiAgICBDSEFOR0U6ICdjaGFuZ2UnLFxyXG4gICAgSU5QVVQ6ICdpbnB1dCcsXHJcbn07XHJcbmNvbnN0IFZBTElEQVRJT05fTU9ERSA9IHtcclxuICAgIG9uQmx1cjogJ29uQmx1cicsXHJcbiAgICBvbkNoYW5nZTogJ29uQ2hhbmdlJyxcclxuICAgIG9uU3VibWl0OiAnb25TdWJtaXQnLFxyXG4gICAgb25Ub3VjaGVkOiAnb25Ub3VjaGVkJyxcclxuICAgIGFsbDogJ2FsbCcsXHJcbn07XHJcbmNvbnN0IFNFTEVDVCA9ICdzZWxlY3QnO1xyXG5jb25zdCBVTkRFRklORUQgPSAndW5kZWZpbmVkJztcclxuY29uc3QgSU5QVVRfVkFMSURBVElPTl9SVUxFUyA9IHtcclxuICAgIG1heDogJ21heCcsXHJcbiAgICBtaW46ICdtaW4nLFxyXG4gICAgbWF4TGVuZ3RoOiAnbWF4TGVuZ3RoJyxcclxuICAgIG1pbkxlbmd0aDogJ21pbkxlbmd0aCcsXHJcbiAgICBwYXR0ZXJuOiAncGF0dGVybicsXHJcbiAgICByZXF1aXJlZDogJ3JlcXVpcmVkJyxcclxuICAgIHZhbGlkYXRlOiAndmFsaWRhdGUnLFxyXG59O1xuXG5mdW5jdGlvbiBhdHRhY2hFdmVudExpc3RlbmVycyh7IHJlZiB9LCBzaG91bGRBdHRhY2hDaGFuZ2VFdmVudCwgaGFuZGxlQ2hhbmdlKSB7XHJcbiAgICBpZiAoaXNIVE1MRWxlbWVudChyZWYpICYmIGhhbmRsZUNoYW5nZSkge1xyXG4gICAgICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKHNob3VsZEF0dGFjaENoYW5nZUV2ZW50ID8gRVZFTlRTLkNIQU5HRSA6IEVWRU5UUy5JTlBVVCwgaGFuZGxlQ2hhbmdlKTtcclxuICAgICAgICByZWYuYWRkRXZlbnRMaXN0ZW5lcihFVkVOVFMuQkxVUiwgaGFuZGxlQ2hhbmdlKTtcclxuICAgIH1cclxufVxuXG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSAodmFsdWUpID0+IHZhbHVlID09IG51bGw7XG5cbmNvbnN0IGlzT2JqZWN0VHlwZSA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JztcclxudmFyIGlzT2JqZWN0ID0gKHZhbHVlKSA9PiAhaXNOdWxsT3JVbmRlZmluZWQodmFsdWUpICYmXHJcbiAgICAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiZcclxuICAgIGlzT2JqZWN0VHlwZSh2YWx1ZSkgJiZcclxuICAgICEodmFsdWUgaW5zdGFuY2VvZiBEYXRlKTtcblxudmFyIGlzS2V5ID0gKHZhbHVlKSA9PiAvXlxcdyokLy50ZXN0KHZhbHVlKTtcblxudmFyIGNvbXBhY3QgPSAodmFsdWUpID0+IHZhbHVlLmZpbHRlcihCb29sZWFuKTtcblxudmFyIHN0cmluZ1RvUGF0aCA9IChpbnB1dCkgPT4gY29tcGFjdChpbnB1dFxyXG4gICAgLnJlcGxhY2UoL1tcInwnXS9nLCAnJylcclxuICAgIC5yZXBsYWNlKC9cXFsvZywgJy4nKVxyXG4gICAgLnJlcGxhY2UoL1xcXS9nLCAnJylcclxuICAgIC5zcGxpdCgnLicpKTtcblxuZnVuY3Rpb24gc2V0KG9iamVjdCwgcGF0aCwgdmFsdWUpIHtcclxuICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgY29uc3QgdGVtcFBhdGggPSBpc0tleShwYXRoKSA/IFtwYXRoXSA6IHN0cmluZ1RvUGF0aChwYXRoKTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHRlbXBQYXRoLmxlbmd0aDtcclxuICAgIGNvbnN0IGxhc3RJbmRleCA9IGxlbmd0aCAtIDE7XHJcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHRlbXBQYXRoW2luZGV4XTtcclxuICAgICAgICBsZXQgbmV3VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IGxhc3RJbmRleCkge1xyXG4gICAgICAgICAgICBjb25zdCBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9XHJcbiAgICAgICAgICAgICAgICBpc09iamVjdChvYmpWYWx1ZSkgfHwgQXJyYXkuaXNBcnJheShvYmpWYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICA/IG9ialZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiAhaXNOYU4oK3RlbXBQYXRoW2luZGV4ICsgMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JqZWN0W2tleV0gPSBuZXdWYWx1ZTtcclxuICAgICAgICBvYmplY3QgPSBvYmplY3Rba2V5XTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3Q7XHJcbn1cblxudmFyIHRyYW5zZm9ybVRvTmVzdE9iamVjdCA9IChkYXRhLCB2YWx1ZSA9IHt9KSA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgIWlzS2V5KGtleSkgPyBzZXQodmFsdWUsIGtleSwgZGF0YVtrZXldKSA6ICh2YWx1ZVtrZXldID0gZGF0YVtrZXldKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxufTtcblxudmFyIGlzVW5kZWZpbmVkID0gKHZhbCkgPT4gdmFsID09PSB1bmRlZmluZWQ7XG5cbnZhciBnZXQgPSAob2JqID0ge30sIHBhdGgsIGRlZmF1bHRWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gY29tcGFjdChwYXRoLnNwbGl0KC9bLFtcXF0uXSs/LykpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IChpc051bGxPclVuZGVmaW5lZChyZXN1bHQpID8gcmVzdWx0IDogcmVzdWx0W2tleV0pLCBvYmopO1xyXG4gICAgcmV0dXJuIGlzVW5kZWZpbmVkKHJlc3VsdCkgfHwgcmVzdWx0ID09PSBvYmpcclxuICAgICAgICA/IGlzVW5kZWZpbmVkKG9ialtwYXRoXSlcclxuICAgICAgICAgICAgPyBkZWZhdWx0VmFsdWVcclxuICAgICAgICAgICAgOiBvYmpbcGF0aF1cclxuICAgICAgICA6IHJlc3VsdDtcclxufTtcblxudmFyIGZvY3VzT25FcnJvckZpZWxkID0gKGZpZWxkcywgZmllbGRFcnJvcnMpID0+IHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGZpZWxkcykge1xyXG4gICAgICAgIGlmIChnZXQoZmllbGRFcnJvcnMsIGtleSkpIHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNba2V5XTtcclxuICAgICAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQucmVmLmZvY3VzICYmIGlzVW5kZWZpbmVkKGZpZWxkLnJlZi5mb2N1cygpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZmllbGQub3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLm9wdGlvbnNbMF0ucmVmLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XG5cbnZhciByZW1vdmVBbGxFdmVudExpc3RlbmVycyA9IChyZWYsIHZhbGlkYXRlV2l0aFN0YXRlVXBkYXRlKSA9PiB7XHJcbiAgICBpZiAoaXNIVE1MRWxlbWVudChyZWYpICYmIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoRVZFTlRTLklOUFVULCB2YWxpZGF0ZVdpdGhTdGF0ZVVwZGF0ZSk7XHJcbiAgICAgICAgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoRVZFTlRTLkNIQU5HRSwgdmFsaWRhdGVXaXRoU3RhdGVVcGRhdGUpO1xyXG4gICAgICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKEVWRU5UUy5CTFVSLCB2YWxpZGF0ZVdpdGhTdGF0ZVVwZGF0ZSk7XHJcbiAgICB9XHJcbn07XG5cbmNvbnN0IGRlZmF1bHRSZXR1cm4gPSB7XHJcbiAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgIHZhbHVlOiAnJyxcclxufTtcclxudmFyIGdldFJhZGlvVmFsdWUgPSAob3B0aW9ucykgPT4gQXJyYXkuaXNBcnJheShvcHRpb25zKVxyXG4gICAgPyBvcHRpb25zLnJlZHVjZSgocHJldmlvdXMsIG9wdGlvbikgPT4gb3B0aW9uICYmIG9wdGlvbi5yZWYuY2hlY2tlZFxyXG4gICAgICAgID8ge1xyXG4gICAgICAgICAgICBpc1ZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnJlZi52YWx1ZSxcclxuICAgICAgICB9XHJcbiAgICAgICAgOiBwcmV2aW91cywgZGVmYXVsdFJldHVybilcclxuICAgIDogZGVmYXVsdFJldHVybjtcblxudmFyIGdldE11bHRpcGxlU2VsZWN0VmFsdWUgPSAob3B0aW9ucykgPT4gWy4uLm9wdGlvbnNdXHJcbiAgICAuZmlsdGVyKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKVxyXG4gICAgLm1hcCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSk7XG5cbnZhciBpc1JhZGlvSW5wdXQgPSAoZWxlbWVudCkgPT4gZWxlbWVudC50eXBlID09PSAncmFkaW8nO1xuXG52YXIgaXNGaWxlSW5wdXQgPSAoZWxlbWVudCkgPT4gZWxlbWVudC50eXBlID09PSAnZmlsZSc7XG5cbnZhciBpc0NoZWNrQm94SW5wdXQgPSAoZWxlbWVudCkgPT4gZWxlbWVudC50eXBlID09PSAnY2hlY2tib3gnO1xuXG52YXIgaXNNdWx0aXBsZVNlbGVjdCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09IGAke1NFTEVDVH0tbXVsdGlwbGVgO1xuXG5jb25zdCBkZWZhdWx0UmVzdWx0ID0ge1xyXG4gICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgaXNWYWxpZDogZmFsc2UsXHJcbn07XHJcbmNvbnN0IHZhbGlkUmVzdWx0ID0geyB2YWx1ZTogdHJ1ZSwgaXNWYWxpZDogdHJ1ZSB9O1xyXG52YXIgZ2V0Q2hlY2tib3hWYWx1ZSA9IChvcHRpb25zKSA9PiB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xyXG4gICAgICAgIGlmIChvcHRpb25zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gb3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24gJiYgb3B0aW9uLnJlZi5jaGVja2VkKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoeyByZWY6IHsgdmFsdWUgfSB9KSA9PiB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZXMsIGlzVmFsaWQ6ICEhdmFsdWVzLmxlbmd0aCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IGNoZWNrZWQsIHZhbHVlLCBhdHRyaWJ1dGVzIH0gPSBvcHRpb25zWzBdLnJlZjtcclxuICAgICAgICByZXR1cm4gY2hlY2tlZFxyXG4gICAgICAgICAgICA/IGF0dHJpYnV0ZXMgJiYgIWlzVW5kZWZpbmVkKGF0dHJpYnV0ZXMudmFsdWUpXHJcbiAgICAgICAgICAgICAgICA/IGlzVW5kZWZpbmVkKHZhbHVlKSB8fCB2YWx1ZSA9PT0gJydcclxuICAgICAgICAgICAgICAgICAgICA/IHZhbGlkUmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgOiB7IHZhbHVlOiB2YWx1ZSwgaXNWYWxpZDogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICA6IHZhbGlkUmVzdWx0XHJcbiAgICAgICAgICAgIDogZGVmYXVsdFJlc3VsdDtcclxuICAgIH1cclxuICAgIHJldHVybiBkZWZhdWx0UmVzdWx0O1xyXG59O1xuXG5mdW5jdGlvbiBnZXRGaWVsZFZhbHVlKGZpZWxkc1JlZiwgbmFtZSwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLCBleGNsdWRlRGlzYWJsZWQpIHtcclxuICAgIGNvbnN0IGZpZWxkID0gZmllbGRzUmVmLmN1cnJlbnRbbmFtZV07XHJcbiAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICBjb25zdCB7IHJlZjogeyB2YWx1ZSwgZGlzYWJsZWQgfSwgcmVmLCB2YWx1ZUFzTnVtYmVyLCB2YWx1ZUFzRGF0ZSwgc2V0VmFsdWVBcywgfSA9IGZpZWxkO1xyXG4gICAgICAgIGlmIChkaXNhYmxlZCAmJiBleGNsdWRlRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNGaWxlSW5wdXQocmVmKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVmLmZpbGVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNSYWRpb0lucHV0KHJlZikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldFJhZGlvVmFsdWUoZmllbGQub3B0aW9ucykudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc011bHRpcGxlU2VsZWN0KHJlZikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldE11bHRpcGxlU2VsZWN0VmFsdWUocmVmLm9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNDaGVja0JveElucHV0KHJlZikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldENoZWNrYm94VmFsdWUoZmllbGQub3B0aW9ucykudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZUFzTnVtYmVyXHJcbiAgICAgICAgICAgID8gK3ZhbHVlXHJcbiAgICAgICAgICAgIDogdmFsdWVBc0RhdGVcclxuICAgICAgICAgICAgICAgID8gcmVmLnZhbHVlQXNEYXRlXHJcbiAgICAgICAgICAgICAgICA6IHNldFZhbHVlQXNcclxuICAgICAgICAgICAgICAgICAgICA/IHNldFZhbHVlQXModmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZTtcclxuICAgIH1cclxuICAgIGlmIChzaGFsbG93RmllbGRzU3RhdGVSZWYpIHtcclxuICAgICAgICByZXR1cm4gZ2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiBpc0RldGFjaGVkKGVsZW1lbnQpIHtcclxuICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB8fFxyXG4gICAgICAgIGVsZW1lbnQubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc0RldGFjaGVkKGVsZW1lbnQucGFyZW50Tm9kZSk7XHJcbn1cblxudmFyIGlzRW1wdHlPYmplY3QgPSAodmFsdWUpID0+IGlzT2JqZWN0KHZhbHVlKSAmJiAhT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aDtcblxudmFyIGlzQm9vbGVhbiA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XG5cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCB1cGRhdGVQYXRoKSB7XHJcbiAgICBjb25zdCBsZW5ndGggPSB1cGRhdGVQYXRoLnNsaWNlKDAsIC0xKS5sZW5ndGg7XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgb2JqZWN0ID0gaXNVbmRlZmluZWQob2JqZWN0KSA/IGluZGV4KysgOiBvYmplY3RbdXBkYXRlUGF0aFtpbmRleCsrXV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqZWN0O1xyXG59XHJcbmZ1bmN0aW9uIHVuc2V0KG9iamVjdCwgcGF0aCkge1xyXG4gICAgY29uc3QgdXBkYXRlUGF0aCA9IGlzS2V5KHBhdGgpID8gW3BhdGhdIDogc3RyaW5nVG9QYXRoKHBhdGgpO1xyXG4gICAgY29uc3QgY2hpbGRPYmplY3QgPSB1cGRhdGVQYXRoLmxlbmd0aCA9PSAxID8gb2JqZWN0IDogYmFzZUdldChvYmplY3QsIHVwZGF0ZVBhdGgpO1xyXG4gICAgY29uc3Qga2V5ID0gdXBkYXRlUGF0aFt1cGRhdGVQYXRoLmxlbmd0aCAtIDFdO1xyXG4gICAgbGV0IHByZXZpb3VzT2JqUmVmO1xyXG4gICAgaWYgKGNoaWxkT2JqZWN0KSB7XHJcbiAgICAgICAgZGVsZXRlIGNoaWxkT2JqZWN0W2tleV07XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IHVwZGF0ZVBhdGguc2xpY2UoMCwgLTEpLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gLTE7XHJcbiAgICAgICAgbGV0IG9iamVjdFJlZjtcclxuICAgICAgICBjb25zdCBjdXJyZW50UGF0aHMgPSB1cGRhdGVQYXRoLnNsaWNlKDAsIC0oayArIDEpKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50UGF0aHNMZW5ndGggPSBjdXJyZW50UGF0aHMubGVuZ3RoIC0gMTtcclxuICAgICAgICBpZiAoayA+IDApIHtcclxuICAgICAgICAgICAgcHJldmlvdXNPYmpSZWYgPSBvYmplY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlICgrK2luZGV4IDwgY3VycmVudFBhdGhzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gY3VycmVudFBhdGhzW2luZGV4XTtcclxuICAgICAgICAgICAgb2JqZWN0UmVmID0gb2JqZWN0UmVmID8gb2JqZWN0UmVmW2l0ZW1dIDogb2JqZWN0W2l0ZW1dO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFBhdGhzTGVuZ3RoID09PSBpbmRleCAmJlxyXG4gICAgICAgICAgICAgICAgKChpc09iamVjdChvYmplY3RSZWYpICYmIGlzRW1wdHlPYmplY3Qob2JqZWN0UmVmKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoQXJyYXkuaXNBcnJheShvYmplY3RSZWYpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFvYmplY3RSZWYuZmlsdGVyKChkYXRhKSA9PiAoaXNPYmplY3QoZGF0YSkgJiYgIWlzRW1wdHlPYmplY3QoZGF0YSkpIHx8IGlzQm9vbGVhbihkYXRhKSkubGVuZ3RoKSkpIHtcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzT2JqUmVmID8gZGVsZXRlIHByZXZpb3VzT2JqUmVmW2l0ZW1dIDogZGVsZXRlIG9iamVjdFtpdGVtXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmV2aW91c09ialJlZiA9IG9iamVjdFJlZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqZWN0O1xyXG59XG5cbmNvbnN0IGlzU2FtZVJlZiA9IChmaWVsZFZhbHVlLCByZWYpID0+IGZpZWxkVmFsdWUgJiYgZmllbGRWYWx1ZS5yZWYgPT09IHJlZjtcclxuZnVuY3Rpb24gZmluZFJlbW92ZWRGaWVsZEFuZFJlbW92ZUxpc3RlbmVyKGZpZWxkc1JlZiwgaGFuZGxlQ2hhbmdlLCBmaWVsZCwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLCBzaG91bGRVbnJlZ2lzdGVyLCBmb3JjZURlbGV0ZSkge1xyXG4gICAgY29uc3QgeyByZWYsIHJlZjogeyBuYW1lIH0sIH0gPSBmaWVsZDtcclxuICAgIGNvbnN0IGZpZWxkUmVmID0gZmllbGRzUmVmLmN1cnJlbnRbbmFtZV07XHJcbiAgICBpZiAoIXNob3VsZFVucmVnaXN0ZXIpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGdldEZpZWxkVmFsdWUoZmllbGRzUmVmLCBuYW1lLCBzaGFsbG93RmllbGRzU3RhdGVSZWYpO1xyXG4gICAgICAgICFpc1VuZGVmaW5lZCh2YWx1ZSkgJiYgc2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlZi50eXBlIHx8ICFmaWVsZFJlZikge1xyXG4gICAgICAgIGRlbGV0ZSBmaWVsZHNSZWYuY3VycmVudFtuYW1lXTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoaXNSYWRpb0lucHV0KHJlZikgfHwgaXNDaGVja0JveElucHV0KHJlZikpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWVsZFJlZi5vcHRpb25zKSAmJiBmaWVsZFJlZi5vcHRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb21wYWN0KGZpZWxkUmVmLm9wdGlvbnMpLmZvckVhY2goKG9wdGlvbiA9IHt9LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKChpc0RldGFjaGVkKG9wdGlvbi5yZWYpICYmIGlzU2FtZVJlZihvcHRpb24sIG9wdGlvbi5yZWYpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcmNlRGVsZXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMob3B0aW9uLnJlZiwgaGFuZGxlQ2hhbmdlKTtcclxuICAgICAgICAgICAgICAgICAgICB1bnNldChmaWVsZFJlZi5vcHRpb25zLCBgWyR7aW5kZXh9XWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGZpZWxkUmVmLm9wdGlvbnMgJiYgIWNvbXBhY3QoZmllbGRSZWYub3B0aW9ucykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgZmllbGRzUmVmLmN1cnJlbnRbbmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBmaWVsZHNSZWYuY3VycmVudFtuYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgoaXNEZXRhY2hlZChyZWYpICYmIGlzU2FtZVJlZihmaWVsZFJlZiwgcmVmKSkgfHwgZm9yY2VEZWxldGUpIHtcclxuICAgICAgICByZW1vdmVBbGxFdmVudExpc3RlbmVycyhyZWYsIGhhbmRsZUNoYW5nZSk7XHJcbiAgICAgICAgZGVsZXRlIGZpZWxkc1JlZi5jdXJyZW50W25hbWVdO1xyXG4gICAgfVxyXG59XG5cbnZhciBpc1ByaW1pdGl2ZSA9ICh2YWx1ZSkgPT4gaXNOdWxsT3JVbmRlZmluZWQodmFsdWUpIHx8ICFpc09iamVjdFR5cGUodmFsdWUpO1xuXG5mdW5jdGlvbiBkZWVwTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcclxuICAgIGlmIChpc1ByaW1pdGl2ZSh0YXJnZXQpIHx8IGlzUHJpbWl0aXZlKHNvdXJjZSkpIHtcclxuICAgICAgICByZXR1cm4gc291cmNlO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0VmFsdWUgPSB0YXJnZXRba2V5XTtcclxuICAgICAgICBjb25zdCBzb3VyY2VWYWx1ZSA9IHNvdXJjZVtrZXldO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtrZXldID1cclxuICAgICAgICAgICAgICAgIChpc09iamVjdCh0YXJnZXRWYWx1ZSkgJiYgaXNPYmplY3Qoc291cmNlVmFsdWUpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChBcnJheS5pc0FycmF5KHRhcmdldFZhbHVlKSAmJiBBcnJheS5pc0FycmF5KHNvdXJjZVZhbHVlKSlcclxuICAgICAgICAgICAgICAgICAgICA/IGRlZXBNZXJnZSh0YXJnZXRWYWx1ZSwgc291cmNlVmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzb3VyY2VWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKF9hKSB7IH1cclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cblxuZnVuY3Rpb24gZGVlcEVxdWFsKG9iamVjdDEsIG9iamVjdDIsIGlzRXJyb3JPYmplY3QpIHtcclxuICAgIGlmIChpc1ByaW1pdGl2ZShvYmplY3QxKSB8fFxyXG4gICAgICAgIGlzUHJpbWl0aXZlKG9iamVjdDIpIHx8XHJcbiAgICAgICAgb2JqZWN0MSBpbnN0YW5jZW9mIERhdGUgfHxcclxuICAgICAgICBvYmplY3QyIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBvYmplY3QxID09PSBvYmplY3QyO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudChvYmplY3QxKSkge1xyXG4gICAgICAgIGNvbnN0IGtleXMxID0gT2JqZWN0LmtleXMob2JqZWN0MSk7XHJcbiAgICAgICAgY29uc3Qga2V5czIgPSBPYmplY3Qua2V5cyhvYmplY3QyKTtcclxuICAgICAgICBpZiAoa2V5czEubGVuZ3RoICE9PSBrZXlzMi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzMSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWwxID0gb2JqZWN0MVtrZXldO1xyXG4gICAgICAgICAgICBpZiAoIShpc0Vycm9yT2JqZWN0ICYmIGtleSA9PT0gJ3JlZicpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwyID0gb2JqZWN0MltrZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKChpc09iamVjdCh2YWwxKSB8fCBBcnJheS5pc0FycmF5KHZhbDEpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChpc09iamVjdCh2YWwyKSB8fCBBcnJheS5pc0FycmF5KHZhbDIpKVxyXG4gICAgICAgICAgICAgICAgICAgID8gIWRlZXBFcXVhbCh2YWwxLCB2YWwyLCBpc0Vycm9yT2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgIDogdmFsMSAhPT0gdmFsMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XG5cbmZ1bmN0aW9uIHNldERpcnR5RmllbGRzKHZhbHVlcywgZGVmYXVsdFZhbHVlcywgZGlydHlGaWVsZHMsIHBhcmVudE5vZGUsIHBhcmVudE5hbWUpIHtcclxuICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgd2hpbGUgKCsraW5kZXggPCB2YWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWVzW2luZGV4XSkge1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZXNbaW5kZXhdW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICAhZGlydHlGaWVsZHNbaW5kZXhdICYmIChkaXJ0eUZpZWxkc1tpbmRleF0gPSB7fSk7XHJcbiAgICAgICAgICAgICAgICBkaXJ0eUZpZWxkc1tpbmRleF1ba2V5XSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgc2V0RGlydHlGaWVsZHModmFsdWVzW2luZGV4XVtrZXldLCBnZXQoZGVmYXVsdFZhbHVlc1tpbmRleF0gfHwge30sIGtleSwgW10pLCBkaXJ0eUZpZWxkc1tpbmRleF1ba2V5XSwgZGlydHlGaWVsZHNbaW5kZXhdLCBrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVlcEVxdWFsKGdldChkZWZhdWx0VmFsdWVzW2luZGV4XSB8fCB7fSwga2V5KSwgdmFsdWVzW2luZGV4XVtrZXldKVxyXG4gICAgICAgICAgICAgICAgICAgID8gc2V0KGRpcnR5RmllbGRzW2luZGV4XSB8fCB7fSwga2V5KVxyXG4gICAgICAgICAgICAgICAgICAgIDogKGRpcnR5RmllbGRzW2luZGV4XSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGlydHlGaWVsZHNbaW5kZXhdKSwgeyBba2V5XTogdHJ1ZSB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50Tm9kZSAmJlxyXG4gICAgICAgICAgICAhZGlydHlGaWVsZHMubGVuZ3RoICYmXHJcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJlbnROb2RlW3BhcmVudE5hbWVdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpcnR5RmllbGRzO1xyXG59XHJcbnZhciBzZXRGaWVsZEFycmF5RGlydHlGaWVsZHMgPSAodmFsdWVzLCBkZWZhdWx0VmFsdWVzLCBkaXJ0eUZpZWxkcykgPT4gZGVlcE1lcmdlKHNldERpcnR5RmllbGRzKHZhbHVlcywgZGVmYXVsdFZhbHVlcywgZGlydHlGaWVsZHMuc2xpY2UoMCwgdmFsdWVzLmxlbmd0aCkpLCBzZXREaXJ0eUZpZWxkcyhkZWZhdWx0VmFsdWVzLCB2YWx1ZXMsIGRpcnR5RmllbGRzLnNsaWNlKDAsIHZhbHVlcy5sZW5ndGgpKSk7XG5cbnZhciBpc1N0cmluZyA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcblxudmFyIGdldEZpZWxkc1ZhbHVlcyA9IChmaWVsZHNSZWYsIHNoYWxsb3dGaWVsZHNTdGF0ZSwgc2hvdWxkVW5yZWdpc3RlciwgZXhjbHVkZURpc2FibGVkLCBzZWFyY2gpID0+IHtcclxuICAgIGNvbnN0IG91dHB1dCA9IHt9O1xyXG4gICAgZm9yIChjb25zdCBuYW1lIGluIGZpZWxkc1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHNlYXJjaCkgfHxcclxuICAgICAgICAgICAgKGlzU3RyaW5nKHNlYXJjaClcclxuICAgICAgICAgICAgICAgID8gbmFtZS5zdGFydHNXaXRoKHNlYXJjaClcclxuICAgICAgICAgICAgICAgIDogQXJyYXkuaXNBcnJheShzZWFyY2gpICYmIHNlYXJjaC5maW5kKChkYXRhKSA9PiBuYW1lLnN0YXJ0c1dpdGgoZGF0YSkpKSkge1xyXG4gICAgICAgICAgICBvdXRwdXRbbmFtZV0gPSBnZXRGaWVsZFZhbHVlKGZpZWxkc1JlZiwgbmFtZSwgdW5kZWZpbmVkLCBleGNsdWRlRGlzYWJsZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzaG91bGRVbnJlZ2lzdGVyXHJcbiAgICAgICAgPyB0cmFuc2Zvcm1Ub05lc3RPYmplY3Qob3V0cHV0KVxyXG4gICAgICAgIDogZGVlcE1lcmdlKHNoYWxsb3dGaWVsZHNTdGF0ZSwgdHJhbnNmb3JtVG9OZXN0T2JqZWN0KG91dHB1dCkpO1xyXG59O1xuXG52YXIgaXNFcnJvclN0YXRlQ2hhbmdlZCA9ICh7IGVycm9ycywgbmFtZSwgZXJyb3IsIHZhbGlkRmllbGRzLCBmaWVsZHNXaXRoVmFsaWRhdGlvbiwgfSkgPT4ge1xyXG4gICAgY29uc3QgaXNWYWxpZCA9IGlzVW5kZWZpbmVkKGVycm9yKTtcclxuICAgIGNvbnN0IHByZXZpb3VzRXJyb3IgPSBnZXQoZXJyb3JzLCBuYW1lKTtcclxuICAgIHJldHVybiAoKGlzVmFsaWQgJiYgISFwcmV2aW91c0Vycm9yKSB8fFxyXG4gICAgICAgICghaXNWYWxpZCAmJiAhZGVlcEVxdWFsKHByZXZpb3VzRXJyb3IsIGVycm9yLCB0cnVlKSkgfHxcclxuICAgICAgICAoaXNWYWxpZCAmJiBnZXQoZmllbGRzV2l0aFZhbGlkYXRpb24sIG5hbWUpICYmICFnZXQodmFsaWRGaWVsZHMsIG5hbWUpKSk7XHJcbn07XG5cbnZhciBpc1JlZ2V4ID0gKHZhbHVlKSA9PiB2YWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cDtcblxudmFyIGdldFZhbHVlQW5kTWVzc2FnZSA9ICh2YWxpZGF0aW9uRGF0YSkgPT4gaXNPYmplY3QodmFsaWRhdGlvbkRhdGEpICYmICFpc1JlZ2V4KHZhbGlkYXRpb25EYXRhKVxyXG4gICAgPyB2YWxpZGF0aW9uRGF0YVxyXG4gICAgOiB7XHJcbiAgICAgICAgdmFsdWU6IHZhbGlkYXRpb25EYXRhLFxyXG4gICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgfTtcblxudmFyIGlzRnVuY3Rpb24gPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcblxudmFyIGlzTWVzc2FnZSA9ICh2YWx1ZSkgPT4gaXNTdHJpbmcodmFsdWUpIHx8IGlzVmFsaWRFbGVtZW50KHZhbHVlKTtcblxuZnVuY3Rpb24gZ2V0VmFsaWRhdGVFcnJvcihyZXN1bHQsIHJlZiwgdHlwZSA9ICd2YWxpZGF0ZScpIHtcclxuICAgIGlmIChpc01lc3NhZ2UocmVzdWx0KSB8fCAoaXNCb29sZWFuKHJlc3VsdCkgJiYgIXJlc3VsdCkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBpc01lc3NhZ2UocmVzdWx0KSA/IHJlc3VsdCA6ICcnLFxyXG4gICAgICAgICAgICByZWYsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxuXG52YXIgYXBwZW5kRXJyb3JzID0gKG5hbWUsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZXJyb3JzLCB0eXBlLCBtZXNzYWdlKSA9PiB2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWFcclxuICAgID8gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBlcnJvcnNbbmFtZV0pLCB7IHR5cGVzOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIChlcnJvcnNbbmFtZV0gJiYgZXJyb3JzW25hbWVdLnR5cGVzID8gZXJyb3JzW25hbWVdLnR5cGVzIDoge30pKSwgeyBbdHlwZV06IG1lc3NhZ2UgfHwgdHJ1ZSB9KSB9KSA6IHt9O1xuXG52YXIgdmFsaWRhdGVGaWVsZCA9IGFzeW5jIChmaWVsZHNSZWYsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgeyByZWYsIHJlZjogeyB2YWx1ZSB9LCBvcHRpb25zLCByZXF1aXJlZCwgbWF4TGVuZ3RoLCBtaW5MZW5ndGgsIG1pbiwgbWF4LCBwYXR0ZXJuLCB2YWxpZGF0ZSwgfSwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lID0gcmVmLm5hbWU7XHJcbiAgICBjb25zdCBlcnJvciA9IHt9O1xyXG4gICAgY29uc3QgaXNSYWRpbyA9IGlzUmFkaW9JbnB1dChyZWYpO1xyXG4gICAgY29uc3QgaXNDaGVja0JveCA9IGlzQ2hlY2tCb3hJbnB1dChyZWYpO1xyXG4gICAgY29uc3QgaXNSYWRpb09yQ2hlY2tib3ggPSBpc1JhZGlvIHx8IGlzQ2hlY2tCb3g7XHJcbiAgICBjb25zdCBpc0VtcHR5ID0gdmFsdWUgPT09ICcnO1xyXG4gICAgY29uc3QgYXBwZW5kRXJyb3JzQ3VycnkgPSBhcHBlbmRFcnJvcnMuYmluZChudWxsLCBuYW1lLCB2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEsIGVycm9yKTtcclxuICAgIGNvbnN0IGdldE1pbk1heE1lc3NhZ2UgPSAoZXhjZWVkTWF4LCBtYXhMZW5ndGhNZXNzYWdlLCBtaW5MZW5ndGhNZXNzYWdlLCBtYXhUeXBlID0gSU5QVVRfVkFMSURBVElPTl9SVUxFUy5tYXhMZW5ndGgsIG1pblR5cGUgPSBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLm1pbkxlbmd0aCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBleGNlZWRNYXggPyBtYXhMZW5ndGhNZXNzYWdlIDogbWluTGVuZ3RoTWVzc2FnZTtcclxuICAgICAgICBlcnJvcltuYW1lXSA9IE9iamVjdC5hc3NpZ24oeyB0eXBlOiBleGNlZWRNYXggPyBtYXhUeXBlIDogbWluVHlwZSwgbWVzc2FnZSxcclxuICAgICAgICAgICAgcmVmIH0sIChleGNlZWRNYXhcclxuICAgICAgICAgICAgPyBhcHBlbmRFcnJvcnNDdXJyeShtYXhUeXBlLCBtZXNzYWdlKVxyXG4gICAgICAgICAgICA6IGFwcGVuZEVycm9yc0N1cnJ5KG1pblR5cGUsIG1lc3NhZ2UpKSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHJlcXVpcmVkICYmXHJcbiAgICAgICAgKCghaXNSYWRpbyAmJiAhaXNDaGVja0JveCAmJiAoaXNFbXB0eSB8fCBpc051bGxPclVuZGVmaW5lZCh2YWx1ZSkpKSB8fFxyXG4gICAgICAgICAgICAoaXNCb29sZWFuKHZhbHVlKSAmJiAhdmFsdWUpIHx8XHJcbiAgICAgICAgICAgIChpc0NoZWNrQm94ICYmICFnZXRDaGVja2JveFZhbHVlKG9wdGlvbnMpLmlzVmFsaWQpIHx8XHJcbiAgICAgICAgICAgIChpc1JhZGlvICYmICFnZXRSYWRpb1ZhbHVlKG9wdGlvbnMpLmlzVmFsaWQpKSkge1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIG1lc3NhZ2UgfSA9IGlzTWVzc2FnZShyZXF1aXJlZClcclxuICAgICAgICAgICAgPyB7IHZhbHVlOiAhIXJlcXVpcmVkLCBtZXNzYWdlOiByZXF1aXJlZCB9XHJcbiAgICAgICAgICAgIDogZ2V0VmFsdWVBbmRNZXNzYWdlKHJlcXVpcmVkKTtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgZXJyb3JbbmFtZV0gPSBPYmplY3QuYXNzaWduKHsgdHlwZTogSU5QVVRfVkFMSURBVElPTl9SVUxFUy5yZXF1aXJlZCwgbWVzc2FnZSwgcmVmOiBpc1JhZGlvT3JDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgID8gKChmaWVsZHNSZWYuY3VycmVudFtuYW1lXS5vcHRpb25zIHx8IFtdKVswXSB8fCB7fSkucmVmXHJcbiAgICAgICAgICAgICAgICAgICAgOiByZWYgfSwgYXBwZW5kRXJyb3JzQ3VycnkoSU5QVVRfVkFMSURBVElPTl9SVUxFUy5yZXF1aXJlZCwgbWVzc2FnZSkpO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCghaXNOdWxsT3JVbmRlZmluZWQobWluKSB8fCAhaXNOdWxsT3JVbmRlZmluZWQobWF4KSkgJiYgdmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgbGV0IGV4Y2VlZE1heDtcclxuICAgICAgICBsZXQgZXhjZWVkTWluO1xyXG4gICAgICAgIGNvbnN0IG1heE91dHB1dCA9IGdldFZhbHVlQW5kTWVzc2FnZShtYXgpO1xyXG4gICAgICAgIGNvbnN0IG1pbk91dHB1dCA9IGdldFZhbHVlQW5kTWVzc2FnZShtaW4pO1xyXG4gICAgICAgIGlmICghaXNOYU4odmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlTnVtYmVyID0gcmVmLnZhbHVlQXNOdW1iZXIgfHwgcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQobWF4T3V0cHV0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZXhjZWVkTWF4ID0gdmFsdWVOdW1iZXIgPiBtYXhPdXRwdXQudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFpc051bGxPclVuZGVmaW5lZChtaW5PdXRwdXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBleGNlZWRNaW4gPSB2YWx1ZU51bWJlciA8IG1pbk91dHB1dC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVEYXRlID0gcmVmLnZhbHVlQXNEYXRlIHx8IG5ldyBEYXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKG1heE91dHB1dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGV4Y2VlZE1heCA9IHZhbHVlRGF0ZSA+IG5ldyBEYXRlKG1heE91dHB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKG1pbk91dHB1dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGV4Y2VlZE1pbiA9IHZhbHVlRGF0ZSA8IG5ldyBEYXRlKG1pbk91dHB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV4Y2VlZE1heCB8fCBleGNlZWRNaW4pIHtcclxuICAgICAgICAgICAgZ2V0TWluTWF4TWVzc2FnZSghIWV4Y2VlZE1heCwgbWF4T3V0cHV0Lm1lc3NhZ2UsIG1pbk91dHB1dC5tZXNzYWdlLCBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLm1heCwgSU5QVVRfVkFMSURBVElPTl9SVUxFUy5taW4pO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiAhaXNFbXB0eSAmJiAobWF4TGVuZ3RoIHx8IG1pbkxlbmd0aCkpIHtcclxuICAgICAgICBjb25zdCBtYXhMZW5ndGhPdXRwdXQgPSBnZXRWYWx1ZUFuZE1lc3NhZ2UobWF4TGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBtaW5MZW5ndGhPdXRwdXQgPSBnZXRWYWx1ZUFuZE1lc3NhZ2UobWluTGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBleGNlZWRNYXggPSAhaXNOdWxsT3JVbmRlZmluZWQobWF4TGVuZ3RoT3V0cHV0LnZhbHVlKSAmJlxyXG4gICAgICAgICAgICB2YWx1ZS5sZW5ndGggPiBtYXhMZW5ndGhPdXRwdXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZXhjZWVkTWluID0gIWlzTnVsbE9yVW5kZWZpbmVkKG1pbkxlbmd0aE91dHB1dC52YWx1ZSkgJiZcclxuICAgICAgICAgICAgdmFsdWUubGVuZ3RoIDwgbWluTGVuZ3RoT3V0cHV0LnZhbHVlO1xyXG4gICAgICAgIGlmIChleGNlZWRNYXggfHwgZXhjZWVkTWluKSB7XHJcbiAgICAgICAgICAgIGdldE1pbk1heE1lc3NhZ2UoZXhjZWVkTWF4LCBtYXhMZW5ndGhPdXRwdXQubWVzc2FnZSwgbWluTGVuZ3RoT3V0cHV0Lm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiBwYXR0ZXJuICYmICFpc0VtcHR5KSB7XHJcbiAgICAgICAgY29uc3QgeyB2YWx1ZTogcGF0dGVyblZhbHVlLCBtZXNzYWdlIH0gPSBnZXRWYWx1ZUFuZE1lc3NhZ2UocGF0dGVybik7XHJcbiAgICAgICAgaWYgKGlzUmVnZXgocGF0dGVyblZhbHVlKSAmJiAhcGF0dGVyblZhbHVlLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGVycm9yW25hbWVdID0gT2JqZWN0LmFzc2lnbih7IHR5cGU6IElOUFVUX1ZBTElEQVRJT05fUlVMRVMucGF0dGVybiwgbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIHJlZiB9LCBhcHBlbmRFcnJvcnNDdXJyeShJTlBVVF9WQUxJREFUSU9OX1JVTEVTLnBhdHRlcm4sIG1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh2YWxpZGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkVmFsdWUgPSBnZXRGaWVsZFZhbHVlKGZpZWxkc1JlZiwgbmFtZSwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmKTtcclxuICAgICAgICBjb25zdCB2YWxpZGF0ZVJlZiA9IGlzUmFkaW9PckNoZWNrYm94ICYmIG9wdGlvbnMgPyBvcHRpb25zWzBdLnJlZiA6IHJlZjtcclxuICAgICAgICBpZiAoaXNGdW5jdGlvbih2YWxpZGF0ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdmFsaWRhdGUoZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlRXJyb3IgPSBnZXRWYWxpZGF0ZUVycm9yKHJlc3VsdCwgdmFsaWRhdGVSZWYpO1xyXG4gICAgICAgICAgICBpZiAodmFsaWRhdGVFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JbbmFtZV0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHZhbGlkYXRlRXJyb3IpLCBhcHBlbmRFcnJvcnNDdXJyeShJTlBVVF9WQUxJREFUSU9OX1JVTEVTLnZhbGlkYXRlLCB2YWxpZGF0ZUVycm9yLm1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KHZhbGlkYXRlKSkge1xyXG4gICAgICAgICAgICBsZXQgdmFsaWRhdGlvblJlc3VsdCA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbGlkYXRlRnVuY3Rpb25dIG9mIE9iamVjdC5lbnRyaWVzKHZhbGlkYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0VtcHR5T2JqZWN0KHZhbGlkYXRpb25SZXN1bHQpICYmICF2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlUmVzdWx0ID0gYXdhaXQgdmFsaWRhdGVGdW5jdGlvbihmaWVsZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlRXJyb3IgPSBnZXRWYWxpZGF0ZUVycm9yKHZhbGlkYXRlUmVzdWx0LCB2YWxpZGF0ZVJlZiwga2V5KTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdmFsaWRhdGVFcnJvciksIGFwcGVuZEVycm9yc0N1cnJ5KGtleSwgdmFsaWRhdGVFcnJvci5tZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcltuYW1lXSA9IHZhbGlkYXRpb25SZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXNFbXB0eU9iamVjdCh2YWxpZGF0aW9uUmVzdWx0KSkge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JbbmFtZV0gPSBPYmplY3QuYXNzaWduKHsgcmVmOiB2YWxpZGF0ZVJlZiB9LCB2YWxpZGF0aW9uUmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9yO1xyXG59O1xuXG5jb25zdCBnZXRQYXRoID0gKHJvb3RQYXRoLCB2YWx1ZXMsIHBhdGhzID0gW10pID0+IHtcclxuICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdmFsdWVzKSB7XHJcbiAgICAgICAgY29uc3Qgcm9vdE5hbWUgPSAocm9vdFBhdGggK1xyXG4gICAgICAgICAgICAoaXNPYmplY3QodmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgPyBgLiR7cHJvcGVydHl9YFxyXG4gICAgICAgICAgICAgICAgOiBgWyR7cHJvcGVydHl9XWApKTtcclxuICAgICAgICBpc1ByaW1pdGl2ZSh2YWx1ZXNbcHJvcGVydHldKVxyXG4gICAgICAgICAgICA/IHBhdGhzLnB1c2gocm9vdE5hbWUpXHJcbiAgICAgICAgICAgIDogZ2V0UGF0aChyb290TmFtZSwgdmFsdWVzW3Byb3BlcnR5XSwgcGF0aHMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhdGhzO1xyXG59O1xuXG52YXIgYXNzaWduV2F0Y2hGaWVsZHMgPSAoZmllbGRWYWx1ZXMsIGZpZWxkTmFtZSwgd2F0Y2hGaWVsZHMsIGlucHV0VmFsdWUsIGlzU2luZ2xlRmllbGQpID0+IHtcclxuICAgIGxldCB2YWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgIHdhdGNoRmllbGRzLmFkZChmaWVsZE5hbWUpO1xyXG4gICAgaWYgKCFpc0VtcHR5T2JqZWN0KGZpZWxkVmFsdWVzKSkge1xyXG4gICAgICAgIHZhbHVlID0gZ2V0KGZpZWxkVmFsdWVzLCBmaWVsZE5hbWUpO1xyXG4gICAgICAgIGlmIChpc09iamVjdCh2YWx1ZSkgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgZ2V0UGF0aChmaWVsZE5hbWUsIHZhbHVlKS5mb3JFYWNoKChuYW1lKSA9PiB3YXRjaEZpZWxkcy5hZGQobmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBpc1VuZGVmaW5lZCh2YWx1ZSlcclxuICAgICAgICA/IGlzU2luZ2xlRmllbGRcclxuICAgICAgICAgICAgPyBpbnB1dFZhbHVlXHJcbiAgICAgICAgICAgIDogZ2V0KGlucHV0VmFsdWUsIGZpZWxkTmFtZSlcclxuICAgICAgICA6IHZhbHVlO1xyXG59O1xuXG52YXIgc2tpcFZhbGlkYXRpb24gPSAoeyBpc09uQmx1ciwgaXNPbkNoYW5nZSwgaXNPblRvdWNoLCBpc1RvdWNoZWQsIGlzUmVWYWxpZGF0ZU9uQmx1ciwgaXNSZVZhbGlkYXRlT25DaGFuZ2UsIGlzQmx1ckV2ZW50LCBpc1N1Ym1pdHRlZCwgaXNPbkFsbCwgfSkgPT4ge1xyXG4gICAgaWYgKGlzT25BbGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghaXNTdWJtaXR0ZWQgJiYgaXNPblRvdWNoKSB7XHJcbiAgICAgICAgcmV0dXJuICEoaXNUb3VjaGVkIHx8IGlzQmx1ckV2ZW50KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzU3VibWl0dGVkID8gaXNSZVZhbGlkYXRlT25CbHVyIDogaXNPbkJsdXIpIHtcclxuICAgICAgICByZXR1cm4gIWlzQmx1ckV2ZW50O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNTdWJtaXR0ZWQgPyBpc1JlVmFsaWRhdGVPbkNoYW5nZSA6IGlzT25DaGFuZ2UpIHtcclxuICAgICAgICByZXR1cm4gaXNCbHVyRXZlbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufTtcblxudmFyIGdldEZpZWxkQXJyYXlQYXJlbnROYW1lID0gKG5hbWUpID0+IG5hbWUuc3Vic3RyaW5nKDAsIG5hbWUuaW5kZXhPZignWycpKTtcblxuY29uc3QgaXNNYXRjaEZpZWxkQXJyYXlOYW1lID0gKG5hbWUsIHNlYXJjaE5hbWUpID0+IFJlZ0V4cChgXiR7c2VhcmNoTmFtZX0oW3wuKVxcXFxkK2AucmVwbGFjZSgvXFxbL2csICdcXFxcWycpLnJlcGxhY2UoL1xcXS9nLCAnXFxcXF0nKSkudGVzdChuYW1lKTtcclxudmFyIGlzTmFtZUluRmllbGRBcnJheSA9IChuYW1lcywgbmFtZSkgPT4gWy4uLm5hbWVzXS5zb21lKChjdXJyZW50KSA9PiBpc01hdGNoRmllbGRBcnJheU5hbWUobmFtZSwgY3VycmVudCkpO1xuXG52YXIgaXNTZWxlY3RJbnB1dCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09IGAke1NFTEVDVH0tb25lYDtcblxuZnVuY3Rpb24gb25Eb21SZW1vdmUoZmllbGRzUmVmLCByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXJBbmRSZWYpIHtcclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgT2JqZWN0LnZhbHVlcyhmaWVsZHNSZWYuY3VycmVudCkpIHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkICYmIGZpZWxkLm9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIGZpZWxkLm9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5yZWYgJiYgaXNEZXRhY2hlZChvcHRpb24ucmVmKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXJBbmRSZWYoZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChmaWVsZCAmJiBpc0RldGFjaGVkKGZpZWxkLnJlZikpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lckFuZFJlZihmaWVsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIG9ic2VydmVyLm9ic2VydmUod2luZG93LmRvY3VtZW50LCB7XHJcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvYnNlcnZlcjtcclxufVxuXG52YXIgaXNXZWIgPSB0eXBlb2Ygd2luZG93ICE9PSBVTkRFRklORUQgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSBVTkRFRklORUQ7XG5cbmZ1bmN0aW9uIGNsb25lT2JqZWN0KGRhdGEpIHtcclxuICAgIGxldCBjb3B5O1xyXG4gICAgaWYgKGlzUHJpbWl0aXZlKGRhdGEpIHx8XHJcbiAgICAgICAgKGlzV2ViICYmIChkYXRhIGluc3RhbmNlb2YgRmlsZSB8fCBpc0hUTUxFbGVtZW50KGRhdGEpKSkpIHtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgIGNvcHkgPSBuZXcgRGF0ZShkYXRhLmdldFRpbWUoKSk7XHJcbiAgICAgICAgcmV0dXJuIGNvcHk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIFNldCkge1xyXG4gICAgICAgIGNvcHkgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgY29weS5hZGQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb3B5O1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBNYXApIHtcclxuICAgICAgICBjb3B5ID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGRhdGEua2V5cygpKSB7XHJcbiAgICAgICAgICAgIGNvcHkuc2V0KGtleSwgY2xvbmVPYmplY3QoZGF0YS5nZXQoa2V5KSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29weTtcclxuICAgIH1cclxuICAgIGNvcHkgPSBBcnJheS5pc0FycmF5KGRhdGEpID8gW10gOiB7fTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgICAgICBjb3B5W2tleV0gPSBjbG9uZU9iamVjdChkYXRhW2tleV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvcHk7XHJcbn1cblxudmFyIG1vZGVDaGVja2VyID0gKG1vZGUpID0+ICh7XHJcbiAgICBpc09uU3VibWl0OiAhbW9kZSB8fCBtb2RlID09PSBWQUxJREFUSU9OX01PREUub25TdWJtaXQsXHJcbiAgICBpc09uQmx1cjogbW9kZSA9PT0gVkFMSURBVElPTl9NT0RFLm9uQmx1cixcclxuICAgIGlzT25DaGFuZ2U6IG1vZGUgPT09IFZBTElEQVRJT05fTU9ERS5vbkNoYW5nZSxcclxuICAgIGlzT25BbGw6IG1vZGUgPT09IFZBTElEQVRJT05fTU9ERS5hbGwsXHJcbiAgICBpc09uVG91Y2g6IG1vZGUgPT09IFZBTElEQVRJT05fTU9ERS5vblRvdWNoZWQsXHJcbn0pO1xuXG52YXIgaXNSYWRpb09yQ2hlY2tib3hGdW5jdGlvbiA9IChyZWYpID0+IGlzUmFkaW9JbnB1dChyZWYpIHx8IGlzQ2hlY2tCb3hJbnB1dChyZWYpO1xuXG5jb25zdCBpc1dpbmRvd1VuZGVmaW5lZCA9IHR5cGVvZiB3aW5kb3cgPT09IFVOREVGSU5FRDtcclxuY29uc3QgaXNQcm94eUVuYWJsZWQgPSBpc1dlYiA/ICdQcm94eScgaW4gd2luZG93IDogdHlwZW9mIFByb3h5ICE9PSBVTkRFRklORUQ7XHJcbmZ1bmN0aW9uIHVzZUZvcm0oeyBtb2RlID0gVkFMSURBVElPTl9NT0RFLm9uU3VibWl0LCByZVZhbGlkYXRlTW9kZSA9IFZBTElEQVRJT05fTU9ERS5vbkNoYW5nZSwgcmVzb2x2ZXIsIGNvbnRleHQsIGRlZmF1bHRWYWx1ZXMgPSB7fSwgc2hvdWxkRm9jdXNFcnJvciA9IHRydWUsIHNob3VsZFVucmVnaXN0ZXIgPSB0cnVlLCBjcml0ZXJpYU1vZGUsIH0gPSB7fSkge1xyXG4gICAgY29uc3QgZmllbGRzUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IGZpZWxkQXJyYXlWYWx1ZXNSZWYgPSB1c2VSZWYoe30pO1xyXG4gICAgY29uc3Qgd2F0Y2hGaWVsZHNSZWYgPSB1c2VSZWYobmV3IFNldCgpKTtcclxuICAgIGNvbnN0IHVzZVdhdGNoRmllbGRzUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IHVzZVdhdGNoUmVuZGVyRnVuY3Rpb25zUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IHZhbGlkRmllbGRzUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IGRlZmF1bHRWYWx1ZXNSZWYgPSB1c2VSZWYoZGVmYXVsdFZhbHVlcyk7XHJcbiAgICBjb25zdCBpc1VuTW91bnQgPSB1c2VSZWYoZmFsc2UpO1xyXG4gICAgY29uc3QgaXNXYXRjaEFsbFJlZiA9IHVzZVJlZihmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IHNoYWxsb3dGaWVsZHNTdGF0ZVJlZiA9IHVzZVJlZih7fSk7XHJcbiAgICBjb25zdCByZXNldEZpZWxkQXJyYXlGdW5jdGlvblJlZiA9IHVzZVJlZih7fSk7XHJcbiAgICBjb25zdCBjb250ZXh0UmVmID0gdXNlUmVmKGNvbnRleHQpO1xyXG4gICAgY29uc3QgcmVzb2x2ZXJSZWYgPSB1c2VSZWYocmVzb2x2ZXIpO1xyXG4gICAgY29uc3QgZmllbGRBcnJheU5hbWVzUmVmID0gdXNlUmVmKG5ldyBTZXQoKSk7XHJcbiAgICBjb25zdCBtb2RlUmVmID0gdXNlUmVmKG1vZGVDaGVja2VyKG1vZGUpKTtcclxuICAgIGNvbnN0IHsgaXNPblN1Ym1pdCwgaXNPblRvdWNoIH0gPSBtb2RlUmVmLmN1cnJlbnQ7XHJcbiAgICBjb25zdCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSA9IGNyaXRlcmlhTW9kZSA9PT0gVkFMSURBVElPTl9NT0RFLmFsbDtcclxuICAgIGNvbnN0IFtmb3JtU3RhdGUsIHNldEZvcm1TdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgaXNEaXJ0eTogZmFsc2UsXHJcbiAgICAgICAgaXNWYWxpZGF0aW5nOiBmYWxzZSxcclxuICAgICAgICBkaXJ0eUZpZWxkczoge30sXHJcbiAgICAgICAgaXNTdWJtaXR0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHN1Ym1pdENvdW50OiAwLFxyXG4gICAgICAgIHRvdWNoZWQ6IHt9LFxyXG4gICAgICAgIGlzU3VibWl0dGluZzogZmFsc2UsXHJcbiAgICAgICAgaXNTdWJtaXRTdWNjZXNzZnVsOiBmYWxzZSxcclxuICAgICAgICBpc1ZhbGlkOiAhaXNPblN1Ym1pdCxcclxuICAgICAgICBlcnJvcnM6IHt9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZWFkRm9ybVN0YXRlUmVmID0gdXNlUmVmKHtcclxuICAgICAgICBpc0RpcnR5OiAhaXNQcm94eUVuYWJsZWQsXHJcbiAgICAgICAgZGlydHlGaWVsZHM6ICFpc1Byb3h5RW5hYmxlZCxcclxuICAgICAgICB0b3VjaGVkOiAhaXNQcm94eUVuYWJsZWQgfHwgaXNPblRvdWNoLFxyXG4gICAgICAgIGlzVmFsaWRhdGluZzogIWlzUHJveHlFbmFibGVkLFxyXG4gICAgICAgIGlzU3VibWl0dGluZzogIWlzUHJveHlFbmFibGVkLFxyXG4gICAgICAgIGlzVmFsaWQ6ICFpc1Byb3h5RW5hYmxlZCxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZm9ybVN0YXRlUmVmID0gdXNlUmVmKGZvcm1TdGF0ZSk7XHJcbiAgICBjb25zdCBvYnNlcnZlclJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgeyBpc09uQmx1cjogaXNSZVZhbGlkYXRlT25CbHVyLCBpc09uQ2hhbmdlOiBpc1JlVmFsaWRhdGVPbkNoYW5nZSwgfSA9IHVzZVJlZihtb2RlQ2hlY2tlcihyZVZhbGlkYXRlTW9kZSkpLmN1cnJlbnQ7XHJcbiAgICBjb250ZXh0UmVmLmN1cnJlbnQgPSBjb250ZXh0O1xyXG4gICAgcmVzb2x2ZXJSZWYuY3VycmVudCA9IHJlc29sdmVyO1xyXG4gICAgZm9ybVN0YXRlUmVmLmN1cnJlbnQgPSBmb3JtU3RhdGU7XHJcbiAgICBzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCA9IHNob3VsZFVucmVnaXN0ZXJcclxuICAgICAgICA/IHt9XHJcbiAgICAgICAgOiBpc0VtcHR5T2JqZWN0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50KVxyXG4gICAgICAgICAgICA/IGNsb25lT2JqZWN0KGRlZmF1bHRWYWx1ZXMpXHJcbiAgICAgICAgICAgIDogc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQ7XHJcbiAgICBjb25zdCB1cGRhdGVGb3JtU3RhdGUgPSB1c2VDYWxsYmFjaygoc3RhdGUgPSB7fSkgPT4ge1xyXG4gICAgICAgIGlmICghaXNVbk1vdW50LmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgZm9ybVN0YXRlUmVmLmN1cnJlbnQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZvcm1TdGF0ZVJlZi5jdXJyZW50KSwgc3RhdGUpO1xyXG4gICAgICAgICAgICBzZXRGb3JtU3RhdGUoZm9ybVN0YXRlUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHVwZGF0ZUlzVmFsaWRhdGluZyA9ICgpID0+IHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkYXRpbmcgJiZcclxuICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICBjb25zdCBzaG91bGRSZW5kZXJCYXNlT25FcnJvciA9IHVzZUNhbGxiYWNrKChuYW1lLCBlcnJvciwgc2hvdWxkUmVuZGVyID0gZmFsc2UsIHN0YXRlID0ge30sIGlzVmFsaWQpID0+IHtcclxuICAgICAgICBsZXQgc2hvdWxkUmVSZW5kZXIgPSBzaG91bGRSZW5kZXIgfHxcclxuICAgICAgICAgICAgaXNFcnJvclN0YXRlQ2hhbmdlZCh7XHJcbiAgICAgICAgICAgICAgICBlcnJvcnM6IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycyxcclxuICAgICAgICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIHZhbGlkRmllbGRzOiB2YWxpZEZpZWxkc1JlZi5jdXJyZW50LFxyXG4gICAgICAgICAgICAgICAgZmllbGRzV2l0aFZhbGlkYXRpb246IGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzRXJyb3IgPSBnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lKTtcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdW5zZXQodmFsaWRGaWVsZHNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgICAgIHNob3VsZFJlUmVuZGVyID1cclxuICAgICAgICAgICAgICAgIHNob3VsZFJlUmVuZGVyIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgIXByZXZpb3VzRXJyb3IgfHxcclxuICAgICAgICAgICAgICAgICAgICAhZGVlcEVxdWFsKHByZXZpb3VzRXJyb3IsIGVycm9yLCB0cnVlKTtcclxuICAgICAgICAgICAgc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgbmFtZSwgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGdldChmaWVsZHNXaXRoVmFsaWRhdGlvblJlZi5jdXJyZW50LCBuYW1lKSB8fCByZXNvbHZlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzZXQodmFsaWRGaWVsZHNSZWYuY3VycmVudCwgbmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBzaG91bGRSZVJlbmRlciA9IHNob3VsZFJlUmVuZGVyIHx8IHByZXZpb3VzRXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdW5zZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChzaG91bGRSZVJlbmRlciAmJiAhaXNOdWxsT3JVbmRlZmluZWQoc2hvdWxkUmVuZGVyKSkgfHxcclxuICAgICAgICAgICAgIWlzRW1wdHlPYmplY3Qoc3RhdGUpIHx8XHJcbiAgICAgICAgICAgIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkYXRpbmcpIHtcclxuICAgICAgICAgICAgdXBkYXRlRm9ybVN0YXRlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSksIChyZXNvbHZlclJlZi5jdXJyZW50ID8geyBpc1ZhbGlkOiAhIWlzVmFsaWQgfSA6IHt9KSksIHsgaXNWYWxpZGF0aW5nOiBmYWxzZSB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3Qgc2V0RmllbGRWYWx1ZSA9IHVzZUNhbGxiYWNrKChuYW1lLCByYXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgcmVmLCBvcHRpb25zIH0gPSBmaWVsZHNSZWYuY3VycmVudFtuYW1lXTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGlzV2ViICYmIGlzSFRNTEVsZW1lbnQocmVmKSAmJiBpc051bGxPclVuZGVmaW5lZChyYXdWYWx1ZSlcclxuICAgICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgICA6IHJhd1ZhbHVlO1xyXG4gICAgICAgIGlmIChpc1JhZGlvSW5wdXQocmVmKSkge1xyXG4gICAgICAgICAgICAob3B0aW9ucyB8fCBbXSkuZm9yRWFjaCgoeyByZWY6IHJhZGlvUmVmIH0pID0+IChyYWRpb1JlZi5jaGVja2VkID0gcmFkaW9SZWYudmFsdWUgPT09IHZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzRmlsZUlucHV0KHJlZikgJiYgIWlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZWYuZmlsZXMgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNNdWx0aXBsZVNlbGVjdChyZWYpKSB7XHJcbiAgICAgICAgICAgIFsuLi5yZWYub3B0aW9uc10uZm9yRWFjaCgoc2VsZWN0UmVmKSA9PiAoc2VsZWN0UmVmLnNlbGVjdGVkID0gdmFsdWUuaW5jbHVkZXMoc2VsZWN0UmVmLnZhbHVlKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc0NoZWNrQm94SW5wdXQocmVmKSAmJiBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMubGVuZ3RoID4gMVxyXG4gICAgICAgICAgICAgICAgPyBvcHRpb25zLmZvckVhY2goKHsgcmVmOiBjaGVja2JveFJlZiB9KSA9PiAoY2hlY2tib3hSZWYuY2hlY2tlZCA9IEFycmF5LmlzQXJyYXkodmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgPyAhIXZhbHVlLmZpbmQoKGRhdGEpID0+IGRhdGEgPT09IGNoZWNrYm94UmVmLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIDogdmFsdWUgPT09IGNoZWNrYm94UmVmLnZhbHVlKSlcclxuICAgICAgICAgICAgICAgIDogKG9wdGlvbnNbMF0ucmVmLmNoZWNrZWQgPSAhIXZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlZi52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGlzRm9ybURpcnR5ID0gdXNlQ2FsbGJhY2soKG5hbWUsIGRhdGEpID0+IHtcclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzRGlydHkpIHtcclxuICAgICAgICAgICAgY29uc3QgZm9ybVZhbHVlcyA9IGdldFZhbHVlcygpO1xyXG4gICAgICAgICAgICBuYW1lICYmIGRhdGEgJiYgc2V0KGZvcm1WYWx1ZXMsIG5hbWUsIGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gIWRlZXBFcXVhbChmb3JtVmFsdWVzLCBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCB1cGRhdGVBbmRHZXREaXJ0eVN0YXRlID0gdXNlQ2FsbGJhY2soKG5hbWUsIHNob3VsZFJlbmRlciA9IHRydWUpID0+IHtcclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzRGlydHkgfHxcclxuICAgICAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzRmllbGREaXJ0eSA9ICFkZWVwRXF1YWwoZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSksIGdldEZpZWxkVmFsdWUoZmllbGRzUmVmLCBuYW1lLCBzaGFsbG93RmllbGRzU3RhdGVSZWYpKTtcclxuICAgICAgICAgICAgY29uc3QgaXNEaXJ0eUZpZWxkRXhpc3QgPSBnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0lzRGlydHkgPSBmb3JtU3RhdGVSZWYuY3VycmVudC5pc0RpcnR5O1xyXG4gICAgICAgICAgICBpc0ZpZWxkRGlydHlcclxuICAgICAgICAgICAgICAgID8gc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLCBuYW1lLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgOiB1bnNldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgaXNEaXJ0eTogaXNGb3JtRGlydHkoKSxcclxuICAgICAgICAgICAgICAgIGRpcnR5RmllbGRzOiBmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgaXNDaGFuZ2VkID0gKHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc0RpcnR5ICYmXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c0lzRGlydHkgIT09IHN0YXRlLmlzRGlydHkpIHx8XHJcbiAgICAgICAgICAgICAgICAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgaXNEaXJ0eUZpZWxkRXhpc3QgIT09IGdldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSkpO1xyXG4gICAgICAgICAgICBpc0NoYW5nZWQgJiYgc2hvdWxkUmVuZGVyICYmIHVwZGF0ZUZvcm1TdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBpc0NoYW5nZWQgPyBzdGF0ZSA6IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBleGVjdXRlVmFsaWRhdGlvbiA9IHVzZUNhbGxiYWNrKGFzeW5jIChuYW1lLCBza2lwUmVSZW5kZXIpID0+IHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICBpZiAoIWZpZWxkc1JlZi5jdXJyZW50W25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ/Cfk4sgRmllbGQgaXMgbWlzc2luZyB3aXRoIGBuYW1lYCBhdHRyaWJ1dGU6ICcsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGVycm9yID0gKGF3YWl0IHZhbGlkYXRlRmllbGQoZmllbGRzUmVmLCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZmllbGRzUmVmLmN1cnJlbnRbbmFtZV0sIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZikpW25hbWVdO1xyXG4gICAgICAgIHNob3VsZFJlbmRlckJhc2VPbkVycm9yKG5hbWUsIGVycm9yLCBza2lwUmVSZW5kZXIpO1xyXG4gICAgICAgIHJldHVybiBpc1VuZGVmaW5lZChlcnJvcik7XHJcbiAgICB9LCBbc2hvdWxkUmVuZGVyQmFzZU9uRXJyb3IsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhXSk7XHJcbiAgICBjb25zdCBleGVjdXRlU2NoZW1hT3JSZXNvbHZlclZhbGlkYXRpb24gPSB1c2VDYWxsYmFjayhhc3luYyAobmFtZXMpID0+IHtcclxuICAgICAgICBjb25zdCB7IGVycm9ycyB9ID0gYXdhaXQgcmVzb2x2ZXJSZWYuY3VycmVudChnZXRWYWx1ZXMoKSwgY29udGV4dFJlZi5jdXJyZW50LCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSk7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNGb3JtSXNWYWxpZCA9IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQ7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmFtZXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzSW5wdXRzVmFsaWQgPSBuYW1lc1xyXG4gICAgICAgICAgICAgICAgLm1hcCgobmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBnZXQoZXJyb3JzLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgPyBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lLCBlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICA6IHVuc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIWVycm9yO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmV2ZXJ5KEJvb2xlYW4pO1xyXG4gICAgICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNWYWxpZDogaXNFbXB0eU9iamVjdChlcnJvcnMpLFxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZGF0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBpc0lucHV0c1ZhbGlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBnZXQoZXJyb3JzLCBuYW1lcyk7XHJcbiAgICAgICAgICAgIHNob3VsZFJlbmRlckJhc2VPbkVycm9yKG5hbWVzLCBlcnJvciwgcHJldmlvdXNGb3JtSXNWYWxpZCAhPT0gaXNFbXB0eU9iamVjdChlcnJvcnMpLCB7fSwgaXNFbXB0eU9iamVjdChlcnJvcnMpKTtcclxuICAgICAgICAgICAgcmV0dXJuICFlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICB9LCBbc2hvdWxkUmVuZGVyQmFzZU9uRXJyb3IsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhXSk7XHJcbiAgICBjb25zdCB0cmlnZ2VyID0gdXNlQ2FsbGJhY2soYXN5bmMgKG5hbWUpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZHMgPSBuYW1lIHx8IE9iamVjdC5rZXlzKGZpZWxkc1JlZi5jdXJyZW50KTtcclxuICAgICAgICB1cGRhdGVJc1ZhbGlkYXRpbmcoKTtcclxuICAgICAgICBpZiAocmVzb2x2ZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXhlY3V0ZVNjaGVtYU9yUmVzb2x2ZXJWYWxpZGF0aW9uKGZpZWxkcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpZWxkcykpIHtcclxuICAgICAgICAgICAgIW5hbWUgJiYgKGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycyA9IHt9KTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5hbGwoZmllbGRzLm1hcChhc3luYyAoZGF0YSkgPT4gYXdhaXQgZXhlY3V0ZVZhbGlkYXRpb24oZGF0YSwgbnVsbCkpKTtcclxuICAgICAgICAgICAgdXBkYXRlRm9ybVN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzVmFsaWRhdGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmV2ZXJ5KEJvb2xlYW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXdhaXQgZXhlY3V0ZVZhbGlkYXRpb24oZmllbGRzKTtcclxuICAgIH0sIFtleGVjdXRlU2NoZW1hT3JSZXNvbHZlclZhbGlkYXRpb24sIGV4ZWN1dGVWYWxpZGF0aW9uXSk7XHJcbiAgICBjb25zdCBzZXRJbnRlcm5hbFZhbHVlcyA9IHVzZUNhbGxiYWNrKChuYW1lLCB2YWx1ZSwgeyBzaG91bGREaXJ0eSwgc2hvdWxkVmFsaWRhdGUgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7fTtcclxuICAgICAgICBzZXQoZGF0YSwgbmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIGZvciAoY29uc3QgZmllbGROYW1lIG9mIGdldFBhdGgobmFtZSwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZHNSZWYuY3VycmVudFtmaWVsZE5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlKGZpZWxkTmFtZSwgZ2V0KGRhdGEsIGZpZWxkTmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgc2hvdWxkRGlydHkgJiYgdXBkYXRlQW5kR2V0RGlydHlTdGF0ZShmaWVsZE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgc2hvdWxkVmFsaWRhdGUgJiYgdHJpZ2dlcihmaWVsZE5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RyaWdnZXIsIHNldEZpZWxkVmFsdWUsIHVwZGF0ZUFuZEdldERpcnR5U3RhdGVdKTtcclxuICAgIGNvbnN0IHNldEludGVybmFsVmFsdWUgPSB1c2VDYWxsYmFjaygobmFtZSwgdmFsdWUsIGNvbmZpZykgPT4ge1xyXG4gICAgICAgICFzaG91bGRVbnJlZ2lzdGVyICYmXHJcbiAgICAgICAgICAgICFpc1ByaW1pdGl2ZSh2YWx1ZSkgJiZcclxuICAgICAgICAgICAgc2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lLCBPYmplY3QuYXNzaWduKHt9LCB2YWx1ZSkpO1xyXG4gICAgICAgIGlmIChmaWVsZHNSZWYuY3VycmVudFtuYW1lXSkge1xyXG4gICAgICAgICAgICBzZXRGaWVsZFZhbHVlKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgY29uZmlnLnNob3VsZERpcnR5ICYmIHVwZGF0ZUFuZEdldERpcnR5U3RhdGUobmFtZSk7XHJcbiAgICAgICAgICAgIGNvbmZpZy5zaG91bGRWYWxpZGF0ZSAmJiB0cmlnZ2VyKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghaXNQcmltaXRpdmUodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHNldEludGVybmFsVmFsdWVzKG5hbWUsIHZhbHVlLCBjb25maWcpO1xyXG4gICAgICAgICAgICBpZiAoZmllbGRBcnJheU5hbWVzUmVmLmN1cnJlbnQuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnROYW1lID0gZ2V0RmllbGRBcnJheVBhcmVudE5hbWUobmFtZSkgfHwgbmFtZTtcclxuICAgICAgICAgICAgICAgIHNldChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXNldEZpZWxkQXJyYXlGdW5jdGlvblJlZi5jdXJyZW50W3BhcmVudE5hbWVdKHtcclxuICAgICAgICAgICAgICAgICAgICBbcGFyZW50TmFtZV06IGdldChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBwYXJlbnROYW1lKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNEaXJ0eSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcykgJiZcclxuICAgICAgICAgICAgICAgICAgICBjb25maWcuc2hvdWxkRGlydHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsIG5hbWUsIHNldEZpZWxkQXJyYXlEaXJ0eUZpZWxkcyh2YWx1ZSwgZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSwgW10pLCBnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsIG5hbWUsIFtdKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlydHk6ICFkZWVwRXF1YWwoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBnZXRWYWx1ZXMoKSksIHsgW25hbWVdOiB2YWx1ZSB9KSwgZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50KSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAhc2hvdWxkVW5yZWdpc3RlciAmJiBzZXQoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUsIHZhbHVlKTtcclxuICAgIH0sIFt1cGRhdGVBbmRHZXREaXJ0eVN0YXRlLCBzZXRGaWVsZFZhbHVlLCBzZXRJbnRlcm5hbFZhbHVlc10pO1xyXG4gICAgY29uc3QgaXNGaWVsZFdhdGNoZWQgPSAobmFtZSkgPT4gaXNXYXRjaEFsbFJlZi5jdXJyZW50IHx8XHJcbiAgICAgICAgd2F0Y2hGaWVsZHNSZWYuY3VycmVudC5oYXMobmFtZSkgfHxcclxuICAgICAgICB3YXRjaEZpZWxkc1JlZi5jdXJyZW50LmhhcygobmFtZS5tYXRjaCgvXFx3Ky8pIHx8IFtdKVswXSk7XHJcbiAgICBjb25zdCByZW5kZXJXYXRjaGVkSW5wdXRzID0gKG5hbWUpID0+IHtcclxuICAgICAgICBsZXQgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgIGlmICghaXNFbXB0eU9iamVjdCh1c2VXYXRjaEZpZWxkc1JlZi5jdXJyZW50KSkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB1c2VXYXRjaEZpZWxkc1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW5hbWUgfHxcclxuICAgICAgICAgICAgICAgICAgICAhdXNlV2F0Y2hGaWVsZHNSZWYuY3VycmVudFtrZXldLnNpemUgfHxcclxuICAgICAgICAgICAgICAgICAgICB1c2VXYXRjaEZpZWxkc1JlZi5jdXJyZW50W2tleV0uaGFzKG5hbWUpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlV2F0Y2hGaWVsZHNSZWYuY3VycmVudFtrZXldLmhhcyhnZXRGaWVsZEFycmF5UGFyZW50TmFtZShuYW1lKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VXYXRjaFJlbmRlckZ1bmN0aW9uc1JlZi5jdXJyZW50W2tleV0oKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb3VuZDtcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBzZXRWYWx1ZShuYW1lLCB2YWx1ZSwgY29uZmlnKSB7XHJcbiAgICAgICAgc2V0SW50ZXJuYWxWYWx1ZShuYW1lLCB2YWx1ZSwgY29uZmlnIHx8IHt9KTtcclxuICAgICAgICBpc0ZpZWxkV2F0Y2hlZChuYW1lKSAmJiB1cGRhdGVGb3JtU3RhdGUoKTtcclxuICAgICAgICByZW5kZXJXYXRjaGVkSW5wdXRzKG5hbWUpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlQ2hhbmdlUmVmLmN1cnJlbnQgPSBoYW5kbGVDaGFuZ2VSZWYuY3VycmVudFxyXG4gICAgICAgID8gaGFuZGxlQ2hhbmdlUmVmLmN1cnJlbnRcclxuICAgICAgICA6IGFzeW5jICh7IHR5cGUsIHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gdGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzUmVmLmN1cnJlbnRbbmFtZV07XHJcbiAgICAgICAgICAgIGxldCBlcnJvcjtcclxuICAgICAgICAgICAgbGV0IGlzVmFsaWQ7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNCbHVyRXZlbnQgPSB0eXBlID09PSBFVkVOVFMuQkxVUjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNob3VsZFNraXBWYWxpZGF0aW9uID0gc2tpcFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7IGlzQmx1ckV2ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVWYWxpZGF0ZU9uQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVWYWxpZGF0ZU9uQmx1ciwgaXNUb3VjaGVkOiAhIWdldChmb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkLCBuYW1lKSwgaXNTdWJtaXR0ZWQ6IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzU3VibWl0dGVkIH0sIG1vZGVSZWYuY3VycmVudCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXRlID0gdXBkYXRlQW5kR2V0RGlydHlTdGF0ZShuYW1lLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2hvdWxkUmVuZGVyID0gIWlzRW1wdHlPYmplY3Qoc3RhdGUpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKCFpc0JsdXJFdmVudCAmJiBpc0ZpZWxkV2F0Y2hlZChuYW1lKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNCbHVyRXZlbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAhZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQsIG5hbWUpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCwgbmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgeyB0b3VjaGVkOiBmb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFzaG91bGRVbnJlZ2lzdGVyICYmIGlzQ2hlY2tCb3hJbnB1dCh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lLCBnZXRGaWVsZFZhbHVlKGZpZWxkc1JlZiwgbmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFNraXBWYWxpZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIWlzQmx1ckV2ZW50ICYmIHJlbmRlcldhdGNoZWRJbnB1dHMobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgoIWlzRW1wdHlPYmplY3Qoc3RhdGUpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzaG91bGRSZW5kZXIgJiYgaXNFbXB0eU9iamVjdChzdGF0ZSkpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtU3RhdGUoc3RhdGUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVwZGF0ZUlzVmFsaWRhdGluZygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc29sdmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9ycyB9ID0gYXdhaXQgcmVzb2x2ZXJSZWYuY3VycmVudChnZXRWYWx1ZXMoKSwgY29udGV4dFJlZi5jdXJyZW50LCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNGb3JtSXNWYWxpZCA9IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBnZXQoZXJyb3JzLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDaGVja0JveElucHV0KHRhcmdldCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWVycm9yICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Tm9kZU5hbWUgPSBnZXRGaWVsZEFycmF5UGFyZW50TmFtZShuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEVycm9yID0gZ2V0KGVycm9ycywgcGFyZW50Tm9kZU5hbWUsIHt9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVycm9yLnR5cGUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFcnJvci5tZXNzYWdlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IgPSBjdXJyZW50RXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50Tm9kZU5hbWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjdXJyZW50RXJyb3IgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBwYXJlbnROb2RlTmFtZSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gcGFyZW50Tm9kZU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzRW1wdHlPYmplY3QoZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0Zvcm1Jc1ZhbGlkICE9PSBpc1ZhbGlkICYmIChzaG91bGRSZW5kZXIgPSB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gKGF3YWl0IHZhbGlkYXRlRmllbGQoZmllbGRzUmVmLCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZmllbGQsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZikpW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIWlzQmx1ckV2ZW50ICYmIHJlbmRlcldhdGNoZWRJbnB1dHMobmFtZSk7XHJcbiAgICAgICAgICAgICAgICBzaG91bGRSZW5kZXJCYXNlT25FcnJvcihuYW1lLCBlcnJvciwgc2hvdWxkUmVuZGVyLCBzdGF0ZSwgaXNWYWxpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgZnVuY3Rpb24gc2V0RmllbGRBcnJheURlZmF1bHRWYWx1ZXMoZGF0YSkge1xyXG4gICAgICAgIGlmICghc2hvdWxkVW5yZWdpc3Rlcikge1xyXG4gICAgICAgICAgICBsZXQgY29weSA9IGNsb25lT2JqZWN0KGRhdGEpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGZpZWxkQXJyYXlOYW1lc1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNLZXkodmFsdWUpICYmICFjb3B5W3ZhbHVlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvcHkgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvcHkpLCB7IFt2YWx1ZV06IFtdIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb3B5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFZhbHVlcyhwYXlsb2FkKSB7XHJcbiAgICAgICAgaWYgKGlzU3RyaW5nKHBheWxvYWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRGaWVsZFZhbHVlKGZpZWxkc1JlZiwgcGF5bG9hZCwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGF5bG9hZCkpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgcGF5bG9hZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0KGRhdGEsIG5hbWUsIGdldEZpZWxkVmFsdWUoZmllbGRzUmVmLCBuYW1lLCBzaGFsbG93RmllbGRzU3RhdGVSZWYpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNldEZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzKGdldEZpZWxkc1ZhbHVlcyhmaWVsZHNSZWYsIGNsb25lT2JqZWN0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50KSwgc2hvdWxkVW5yZWdpc3RlcikpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdmFsaWRhdGVSZXNvbHZlciA9IHVzZUNhbGxiYWNrKGFzeW5jICh2YWx1ZXMgPSB7fSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZXJyb3JzIH0gPSBhd2FpdCByZXNvbHZlclJlZi5jdXJyZW50KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZ2V0VmFsdWVzKCkpLCB2YWx1ZXMpLCBjb250ZXh0UmVmLmN1cnJlbnQsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKTtcclxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gaXNFbXB0eU9iamVjdChlcnJvcnMpO1xyXG4gICAgICAgIGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQgIT09IGlzVmFsaWQgJiZcclxuICAgICAgICAgICAgdXBkYXRlRm9ybVN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzVmFsaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW2lzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhXSk7XHJcbiAgICBjb25zdCByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXIgPSB1c2VDYWxsYmFjaygoZmllbGQsIGZvcmNlRGVsZXRlKSA9PiBmaW5kUmVtb3ZlZEZpZWxkQW5kUmVtb3ZlTGlzdGVuZXIoZmllbGRzUmVmLCBoYW5kbGVDaGFuZ2VSZWYuY3VycmVudCwgZmllbGQsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZiwgc2hvdWxkVW5yZWdpc3RlciwgZm9yY2VEZWxldGUpLCBbc2hvdWxkVW5yZWdpc3Rlcl0pO1xyXG4gICAgY29uc3QgdXBkYXRlV2F0Y2hlZFZhbHVlID0gdXNlQ2FsbGJhY2soKG5hbWUpID0+IHtcclxuICAgICAgICBpZiAoaXNXYXRjaEFsbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB3YXRjaEZpZWxkIG9mIHdhdGNoRmllbGRzUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh3YXRjaEZpZWxkLnN0YXJ0c1dpdGgobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZW5kZXJXYXRjaGVkSW5wdXRzKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lckFuZFJlZiA9IHVzZUNhbGxiYWNrKChmaWVsZCwgZm9yY2VEZWxldGUpID0+IHtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyKGZpZWxkLCBmb3JjZURlbGV0ZSk7XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRVbnJlZ2lzdGVyICYmICFjb21wYWN0KGZpZWxkLm9wdGlvbnMgfHwgW10pLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdW5zZXQodmFsaWRGaWVsZHNSZWYuY3VycmVudCwgZmllbGQucmVmLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdW5zZXQoZmllbGRzV2l0aFZhbGlkYXRpb25SZWYuY3VycmVudCwgZmllbGQucmVmLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdW5zZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBmaWVsZC5yZWYubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsIGZpZWxkLnJlZi5uYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNEaXJ0eTogaXNGb3JtRGlydHkoKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQgJiZcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlclJlZi5jdXJyZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVSZXNvbHZlcigpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlV2F0Y2hlZFZhbHVlKGZpZWxkLnJlZi5uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFt2YWxpZGF0ZVJlc29sdmVyLCByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXJdKTtcclxuICAgIGZ1bmN0aW9uIGNsZWFyRXJyb3JzKG5hbWUpIHtcclxuICAgICAgICBuYW1lICYmXHJcbiAgICAgICAgICAgIChBcnJheS5pc0FycmF5KG5hbWUpID8gbmFtZSA6IFtuYW1lXSkuZm9yRWFjaCgoaW5wdXROYW1lKSA9PiBmaWVsZHNSZWYuY3VycmVudFtpbnB1dE5hbWVdICYmIGlzS2V5KGlucHV0TmFtZSlcclxuICAgICAgICAgICAgICAgID8gZGVsZXRlIGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9yc1tpbnB1dE5hbWVdXHJcbiAgICAgICAgICAgICAgICA6IHVuc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgaW5wdXROYW1lKSk7XHJcbiAgICAgICAgdXBkYXRlRm9ybVN0YXRlKHtcclxuICAgICAgICAgICAgZXJyb3JzOiBuYW1lID8gZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzIDoge30sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRFcnJvcihuYW1lLCBlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHJlZiA9IChmaWVsZHNSZWYuY3VycmVudFtuYW1lXSB8fCB7fSkucmVmO1xyXG4gICAgICAgIHNldChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIG5hbWUsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZXJyb3IpLCB7IHJlZiB9KSk7XHJcbiAgICAgICAgdXBkYXRlRm9ybVN0YXRlKHtcclxuICAgICAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXJyb3Iuc2hvdWxkRm9jdXMgJiYgcmVmICYmIHJlZi5mb2N1cyAmJiByZWYuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHdhdGNoSW50ZXJuYWwgPSB1c2VDYWxsYmFjaygoZmllbGROYW1lcywgZGVmYXVsdFZhbHVlLCB3YXRjaElkKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2F0Y2hGaWVsZHMgPSB3YXRjaElkXHJcbiAgICAgICAgICAgID8gdXNlV2F0Y2hGaWVsZHNSZWYuY3VycmVudFt3YXRjaElkXVxyXG4gICAgICAgICAgICA6IHdhdGNoRmllbGRzUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgbGV0IGZpZWxkVmFsdWVzID0gZ2V0RmllbGRzVmFsdWVzKGZpZWxkc1JlZiwgY2xvbmVPYmplY3Qoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQpLCBzaG91bGRVbnJlZ2lzdGVyLCBmYWxzZSwgZmllbGROYW1lcyk7XHJcbiAgICAgICAgaWYgKGlzU3RyaW5nKGZpZWxkTmFtZXMpKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZEFycmF5TmFtZXNSZWYuY3VycmVudC5oYXMoZmllbGROYW1lcykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkQXJyYXlWYWx1ZSA9IGdldChmaWVsZEFycmF5VmFsdWVzUmVmLmN1cnJlbnQsIGZpZWxkTmFtZXMsIFtdKTtcclxuICAgICAgICAgICAgICAgIGZpZWxkVmFsdWVzID1cclxuICAgICAgICAgICAgICAgICAgICAhZmllbGRBcnJheVZhbHVlLmxlbmd0aCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZEFycmF5VmFsdWUubGVuZ3RoICE9PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFjdChnZXQoZmllbGRWYWx1ZXMsIGZpZWxkTmFtZXMsIFtdKSkubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZmllbGRBcnJheVZhbHVlc1JlZi5jdXJyZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGRWYWx1ZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFzc2lnbldhdGNoRmllbGRzKGZpZWxkVmFsdWVzLCBmaWVsZE5hbWVzLCB3YXRjaEZpZWxkcywgaXNVbmRlZmluZWQoZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgZmllbGROYW1lcykpXHJcbiAgICAgICAgICAgICAgICA/IGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgOiBnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBmaWVsZE5hbWVzKSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNvbWJpbmVkRGVmYXVsdFZhbHVlcyA9IGlzVW5kZWZpbmVkKGRlZmF1bHRWYWx1ZSlcclxuICAgICAgICAgICAgPyBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnRcclxuICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGROYW1lcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpZWxkTmFtZXMucmVkdWNlKChwcmV2aW91cywgbmFtZSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXMpLCB7IFtuYW1lXTogYXNzaWduV2F0Y2hGaWVsZHMoZmllbGRWYWx1ZXMsIG5hbWUsIHdhdGNoRmllbGRzLCBjb21iaW5lZERlZmF1bHRWYWx1ZXMpIH0pKSwge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc1dhdGNoQWxsUmVmLmN1cnJlbnQgPSBpc1VuZGVmaW5lZCh3YXRjaElkKTtcclxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtVG9OZXN0T2JqZWN0KCghaXNFbXB0eU9iamVjdChmaWVsZFZhbHVlcykgJiYgZmllbGRWYWx1ZXMpIHx8XHJcbiAgICAgICAgICAgIGNvbWJpbmVkRGVmYXVsdFZhbHVlcyk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBmdW5jdGlvbiB3YXRjaChmaWVsZE5hbWVzLCBkZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gd2F0Y2hJbnRlcm5hbChmaWVsZE5hbWVzLCBkZWZhdWx0VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdW5yZWdpc3RlcihuYW1lKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZE5hbWUgb2YgQXJyYXkuaXNBcnJheShuYW1lKSA/IG5hbWUgOiBbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyQW5kUmVmKGZpZWxkc1JlZi5jdXJyZW50W2ZpZWxkTmFtZV0sIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyRmllbGRSZWYocmVmLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICBpZiAoIXJlZi5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKCfwn5OLIEZpZWxkIGlzIG1pc3NpbmcgYG5hbWVgIGF0dHJpYnV0ZScsIHJlZiwgYGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjdXNlRm9ybWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaWVsZEFycmF5TmFtZXNSZWYuY3VycmVudC5oYXMocmVmLm5hbWUuc3BsaXQoL1xcW1xcZCtcXF0kLylbMF0pICYmXHJcbiAgICAgICAgICAgICAgICAhUmVnRXhwKGBeJHtyZWYubmFtZS5zcGxpdCgvXFxbXFxkK1xcXSQvKVswXX1bXFxcXGQrXS5cXFxcdytgXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcWy9nLCAnXFxcXFsnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXF0vZywgJ1xcXFxdJykpLnRlc3QocmVmLm5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKCfwn5OLIGBuYW1lYCBwcm9wIHNob3VsZCBiZSBpbiBvYmplY3Qgc2hhcGU6IG5hbWU9XCJ0ZXN0W2luZGV4XS5uYW1lXCInLCByZWYsICdodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpI3VzZUZpZWxkQXJyYXknKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IG5hbWUsIHR5cGUsIHZhbHVlIH0gPSByZWY7XHJcbiAgICAgICAgY29uc3QgZmllbGRSZWZBbmRWYWxpZGF0aW9uT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oeyByZWYgfSwgb3B0aW9ucyk7XHJcbiAgICAgICAgY29uc3QgZmllbGRzID0gZmllbGRzUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgY29uc3QgaXNSYWRpb09yQ2hlY2tib3ggPSBpc1JhZGlvT3JDaGVja2JveEZ1bmN0aW9uKHJlZik7XHJcbiAgICAgICAgY29uc3QgaXNGaWVsZEFycmF5ID0gaXNOYW1lSW5GaWVsZEFycmF5KGZpZWxkQXJyYXlOYW1lc1JlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgICAgICBjb25zdCBjb21wYXJlUmVmID0gKGN1cnJlbnRSZWYpID0+IGlzV2ViICYmICghaXNIVE1MRWxlbWVudChyZWYpIHx8IGN1cnJlbnRSZWYgPT09IHJlZik7XHJcbiAgICAgICAgbGV0IGZpZWxkID0gZmllbGRzW25hbWVdO1xyXG4gICAgICAgIGxldCBpc0VtcHR5RGVmYXVsdFZhbHVlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIGlmIChmaWVsZCAmJlxyXG4gICAgICAgICAgICAoaXNSYWRpb09yQ2hlY2tib3hcclxuICAgICAgICAgICAgICAgID8gQXJyYXkuaXNBcnJheShmaWVsZC5vcHRpb25zKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhY3QoZmllbGQub3B0aW9ucykuZmluZCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gb3B0aW9uLnJlZi52YWx1ZSAmJiBjb21wYXJlUmVmKG9wdGlvbi5yZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICA6IGNvbXBhcmVSZWYoZmllbGQucmVmKSkpIHtcclxuICAgICAgICAgICAgZmllbGRzW25hbWVdID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmaWVsZCksIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGZpZWxkID0gaXNSYWRpb09yQ2hlY2tib3hcclxuICAgICAgICAgICAgICAgID8gT2JqZWN0LmFzc2lnbih7IG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY29tcGFjdCgoZmllbGQgJiYgZmllbGQub3B0aW9ucykgfHwgW10pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSwgcmVmOiB7IHR5cGUsIG5hbWUgfSB9LCBvcHRpb25zKSA6IE9iamVjdC5hc3NpZ24oe30sIGZpZWxkUmVmQW5kVmFsaWRhdGlvbk9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZmllbGQgPSBmaWVsZFJlZkFuZFZhbGlkYXRpb25PcHRpb25zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaWVsZHNbbmFtZV0gPSBmaWVsZDtcclxuICAgICAgICBjb25zdCBpc0VtcHR5VW5tb3VudEZpZWxkcyA9IGlzVW5kZWZpbmVkKGdldChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCwgbmFtZSkpO1xyXG4gICAgICAgIGlmICghaXNFbXB0eU9iamVjdChkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQpIHx8ICFpc0VtcHR5VW5tb3VudEZpZWxkcykge1xyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSBnZXQoaXNFbXB0eVVubW91bnRGaWVsZHNcclxuICAgICAgICAgICAgICAgID8gZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50XHJcbiAgICAgICAgICAgICAgICA6IHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgICAgICAgICAgaXNFbXB0eURlZmF1bHRWYWx1ZSA9IGlzVW5kZWZpbmVkKGRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGlmICghaXNFbXB0eURlZmF1bHRWYWx1ZSAmJiAhaXNGaWVsZEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlKG5hbWUsIGRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc0VtcHR5T2JqZWN0KG9wdGlvbnMpKSB7XHJcbiAgICAgICAgICAgIHNldChmaWVsZHNXaXRoVmFsaWRhdGlvblJlZi5jdXJyZW50LCBuYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKCFpc09uU3VibWl0ICYmIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUZpZWxkKGZpZWxkc1JlZiwgaXNWYWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEsIGZpZWxkLCBzaGFsbG93RmllbGRzU3RhdGVSZWYpLnRoZW4oKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNGb3JtSXNWYWxpZCA9IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNFbXB0eU9iamVjdChlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZXQodmFsaWRGaWVsZHNSZWYuY3VycmVudCwgbmFtZSwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnNldCh2YWxpZEZpZWxkc1JlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0Zvcm1Jc1ZhbGlkICE9PSBpc0VtcHR5T2JqZWN0KGVycm9yKSAmJiB1cGRhdGVGb3JtU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaG91bGRVbnJlZ2lzdGVyICYmICEoaXNGaWVsZEFycmF5ICYmIGlzRW1wdHlEZWZhdWx0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICFpc0ZpZWxkQXJyYXkgJiYgdW5zZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsIG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZSkge1xyXG4gICAgICAgICAgICBhdHRhY2hFdmVudExpc3RlbmVycyhpc1JhZGlvT3JDaGVja2JveCAmJiBmaWVsZC5vcHRpb25zXHJcbiAgICAgICAgICAgICAgICA/IGZpZWxkLm9wdGlvbnNbZmllbGQub3B0aW9ucy5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICAgICAgOiBmaWVsZCwgaXNSYWRpb09yQ2hlY2tib3ggfHwgaXNTZWxlY3RJbnB1dChyZWYpLCBoYW5kbGVDaGFuZ2VSZWYuY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXIocmVmT3JSZWdpc3Rlck9wdGlvbnMsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoIWlzV2luZG93VW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyhyZWZPclJlZ2lzdGVyT3B0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyRmllbGRSZWYoeyBuYW1lOiByZWZPclJlZ2lzdGVyT3B0aW9ucyB9LCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpc09iamVjdChyZWZPclJlZ2lzdGVyT3B0aW9ucykgJiZcclxuICAgICAgICAgICAgICAgICduYW1lJyBpbiByZWZPclJlZ2lzdGVyT3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJGaWVsZFJlZihyZWZPclJlZ2lzdGVyT3B0aW9ucywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHJlZikgPT4gcmVmICYmIHJlZ2lzdGVyRmllbGRSZWYocmVmLCByZWZPclJlZ2lzdGVyT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSB1c2VDYWxsYmFjaygob25WYWxpZCwgb25JbnZhbGlkKSA9PiBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlICYmIGUucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnBlcnNpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZpZWxkRXJyb3JzID0ge307XHJcbiAgICAgICAgbGV0IGZpZWxkVmFsdWVzID0gc2V0RmllbGRBcnJheURlZmF1bHRWYWx1ZXMoZ2V0RmllbGRzVmFsdWVzKGZpZWxkc1JlZiwgY2xvbmVPYmplY3Qoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQpLCBzaG91bGRVbnJlZ2lzdGVyLCB0cnVlKSk7XHJcbiAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzU3VibWl0dGluZyAmJlxyXG4gICAgICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNTdWJtaXR0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAocmVzb2x2ZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBlcnJvcnMsIHZhbHVlcyB9ID0gYXdhaXQgcmVzb2x2ZXJSZWYuY3VycmVudChmaWVsZFZhbHVlcywgY29udGV4dFJlZi5jdXJyZW50LCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMgPSBmaWVsZEVycm9ycyA9IGVycm9ycztcclxuICAgICAgICAgICAgICAgIGZpZWxkVmFsdWVzID0gdmFsdWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBPYmplY3QudmFsdWVzKGZpZWxkc1JlZi5jdXJyZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG5hbWUgfSA9IGZpZWxkLnJlZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRFcnJvciA9IGF3YWl0IHZhbGlkYXRlRmllbGQoZmllbGRzUmVmLCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZmllbGQsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZEVycm9yW25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQoZmllbGRFcnJvcnMsIG5hbWUsIGZpZWxkRXJyb3JbbmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5zZXQodmFsaWRGaWVsZHNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZ2V0KGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQsIG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnNldChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0KHZhbGlkRmllbGRzUmVmLmN1cnJlbnQsIG5hbWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc0VtcHR5T2JqZWN0KGZpZWxkRXJyb3JzKSAmJlxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzKS5ldmVyeSgobmFtZSkgPT4gbmFtZSBpbiBmaWVsZHNSZWYuY3VycmVudCkpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IG9uVmFsaWQoZmllbGRWYWx1ZXMsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMpLCBmaWVsZEVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICBvbkludmFsaWQgJiYgKGF3YWl0IG9uSW52YWxpZChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIGUpKTtcclxuICAgICAgICAgICAgICAgIHNob3VsZEZvY3VzRXJyb3IgJiZcclxuICAgICAgICAgICAgICAgICAgICBmb2N1c09uRXJyb3JGaWVsZChmaWVsZHNSZWYuY3VycmVudCwgZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNTdWJtaXR0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc1N1Ym1pdHRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlzU3VibWl0dGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc1N1Ym1pdFN1Y2Nlc3NmdWw6IGlzRW1wdHlPYmplY3QoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzKSxcclxuICAgICAgICAgICAgICAgIHN1Ym1pdENvdW50OiBmb3JtU3RhdGVSZWYuY3VycmVudC5zdWJtaXRDb3VudCArIDEsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtzaG91bGRGb2N1c0Vycm9yLCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYV0pO1xyXG4gICAgY29uc3QgcmVzZXRSZWZzID0gKHsgZXJyb3JzLCBpc0RpcnR5LCBpc1N1Ym1pdHRlZCwgdG91Y2hlZCwgaXNWYWxpZCwgc3VibWl0Q291bnQsIGRpcnR5RmllbGRzLCB9KSA9PiB7XHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHZhbGlkRmllbGRzUmVmLmN1cnJlbnQgPSB7fTtcclxuICAgICAgICAgICAgZmllbGRzV2l0aFZhbGlkYXRpb25SZWYuY3VycmVudCA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50ID0ge307XHJcbiAgICAgICAgd2F0Y2hGaWVsZHNSZWYuY3VycmVudCA9IG5ldyBTZXQoKTtcclxuICAgICAgICBpc1dhdGNoQWxsUmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICBzdWJtaXRDb3VudDogc3VibWl0Q291bnQgPyBmb3JtU3RhdGVSZWYuY3VycmVudC5zdWJtaXRDb3VudCA6IDAsXHJcbiAgICAgICAgICAgIGlzRGlydHk6IGlzRGlydHkgPyBmb3JtU3RhdGVSZWYuY3VycmVudC5pc0RpcnR5IDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzU3VibWl0dGVkOiBpc1N1Ym1pdHRlZCA/IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzU3VibWl0dGVkIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzVmFsaWQ6IGlzVmFsaWQgPyBmb3JtU3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpcnR5RmllbGRzOiBkaXJ0eUZpZWxkcyA/IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzIDoge30sXHJcbiAgICAgICAgICAgIHRvdWNoZWQ6IHRvdWNoZWQgPyBmb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkIDoge30sXHJcbiAgICAgICAgICAgIGVycm9yczogZXJyb3JzID8gZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzIDoge30sXHJcbiAgICAgICAgICAgIGlzU3VibWl0dGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzU3VibWl0U3VjY2Vzc2Z1bDogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzZXQgPSAodmFsdWVzLCBvbWl0UmVzZXRTdGF0ZSA9IHt9KSA9PiB7XHJcbiAgICAgICAgaWYgKGlzV2ViKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgT2JqZWN0LnZhbHVlcyhmaWVsZHNSZWYuY3VycmVudCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVmLCBvcHRpb25zIH0gPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFJlZiA9IGlzUmFkaW9PckNoZWNrYm94RnVuY3Rpb24ocmVmKSAmJiBBcnJheS5pc0FycmF5KG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gb3B0aW9uc1swXS5yZWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiByZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSFRNTEVsZW1lbnQoaW5wdXRSZWYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFJlZi5jbG9zZXN0KCdmb3JtJykucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChfYSkgeyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZWxkc1JlZi5jdXJyZW50ID0ge307XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50ID0gT2JqZWN0LmFzc2lnbih7fSwgKHZhbHVlcyB8fCBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQpKTtcclxuICAgICAgICB2YWx1ZXMgJiYgcmVuZGVyV2F0Y2hlZElucHV0cygnJyk7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhyZXNldEZpZWxkQXJyYXlGdW5jdGlvblJlZi5jdXJyZW50KS5mb3JFYWNoKChyZXNldEZpZWxkQXJyYXkpID0+IGlzRnVuY3Rpb24ocmVzZXRGaWVsZEFycmF5KSAmJiByZXNldEZpZWxkQXJyYXkoKSk7XHJcbiAgICAgICAgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQgPSBzaG91bGRVbnJlZ2lzdGVyXHJcbiAgICAgICAgICAgID8ge31cclxuICAgICAgICAgICAgOiBjbG9uZU9iamVjdCh2YWx1ZXMgfHwgZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50KTtcclxuICAgICAgICByZXNldFJlZnMob21pdFJlc2V0U3RhdGUpO1xyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZXIgJiYgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQgJiYgdmFsaWRhdGVSZXNvbHZlcigpO1xyXG4gICAgICAgIG9ic2VydmVyUmVmLmN1cnJlbnQgPVxyXG4gICAgICAgICAgICBvYnNlcnZlclJlZi5jdXJyZW50IHx8ICFpc1dlYlxyXG4gICAgICAgICAgICAgICAgPyBvYnNlcnZlclJlZi5jdXJyZW50XHJcbiAgICAgICAgICAgICAgICA6IG9uRG9tUmVtb3ZlKGZpZWxkc1JlZiwgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyQW5kUmVmKTtcclxuICAgIH0sIFtyZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXJBbmRSZWYsIGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudF0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+ICgpID0+IHtcclxuICAgICAgICBvYnNlcnZlclJlZi5jdXJyZW50ICYmIG9ic2VydmVyUmVmLmN1cnJlbnQuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIGlzVW5Nb3VudC5jdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoZmllbGRzUmVmLmN1cnJlbnQpLmZvckVhY2goKGZpZWxkKSA9PiByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXJBbmRSZWYoZmllbGQsIHRydWUpKTtcclxuICAgIH0sIFtdKTtcclxuICAgIGlmICghcmVzb2x2ZXIgJiYgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQpIHtcclxuICAgICAgICBmb3JtU3RhdGUuaXNWYWxpZCA9XHJcbiAgICAgICAgICAgIGRlZXBFcXVhbCh2YWxpZEZpZWxkc1JlZi5jdXJyZW50LCBmaWVsZHNXaXRoVmFsaWRhdGlvblJlZi5jdXJyZW50KSAmJlxyXG4gICAgICAgICAgICAgICAgaXNFbXB0eU9iamVjdChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY29tbW9uUHJvcHMgPSB7XHJcbiAgICAgICAgdHJpZ2dlcixcclxuICAgICAgICBzZXRWYWx1ZTogdXNlQ2FsbGJhY2soc2V0VmFsdWUsIFtzZXRJbnRlcm5hbFZhbHVlLCB0cmlnZ2VyXSksXHJcbiAgICAgICAgZ2V0VmFsdWVzOiB1c2VDYWxsYmFjayhnZXRWYWx1ZXMsIFtdKSxcclxuICAgICAgICByZWdpc3RlcjogdXNlQ2FsbGJhY2socmVnaXN0ZXIsIFtkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnRdKSxcclxuICAgICAgICB1bnJlZ2lzdGVyOiB1c2VDYWxsYmFjayh1bnJlZ2lzdGVyLCBbXSksXHJcbiAgICAgICAgZm9ybVN0YXRlOiBpc1Byb3h5RW5hYmxlZFxyXG4gICAgICAgICAgICA/IG5ldyBQcm94eShmb3JtU3RhdGUsIHtcclxuICAgICAgICAgICAgICAgIGdldDogKG9iaiwgcHJvcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSAnaXNWYWxpZCcgJiYgaXNPblN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCfwn5OLIGBmb3JtU3RhdGUuaXNWYWxpZGAgaXMgYXBwbGljYWJsZSB3aXRoIGBvblRvdWNoZWRgLCBgb25DaGFuZ2VgIG9yIGBvbkJsdXJgIG1vZGUuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjZm9ybVN0YXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudFtwcm9wXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmpbcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICA6IGZvcm1TdGF0ZSxcclxuICAgIH07XHJcbiAgICBjb25zdCBjb250cm9sID0gdXNlTWVtbygoKSA9PiAoT2JqZWN0LmFzc2lnbih7IGlzRm9ybURpcnR5LFxyXG4gICAgICAgIHVwZGF0ZVdhdGNoZWRWYWx1ZSxcclxuICAgICAgICBzaG91bGRVbnJlZ2lzdGVyLFxyXG4gICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSxcclxuICAgICAgICByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXIsXHJcbiAgICAgICAgd2F0Y2hJbnRlcm5hbCwgbW9kZTogbW9kZVJlZi5jdXJyZW50LCByZVZhbGlkYXRlTW9kZToge1xyXG4gICAgICAgICAgICBpc1JlVmFsaWRhdGVPbkJsdXIsXHJcbiAgICAgICAgICAgIGlzUmVWYWxpZGF0ZU9uQ2hhbmdlLFxyXG4gICAgICAgIH0sIHZhbGlkYXRlUmVzb2x2ZXI6IHJlc29sdmVyID8gdmFsaWRhdGVSZXNvbHZlciA6IHVuZGVmaW5lZCwgZmllbGRzUmVmLFxyXG4gICAgICAgIHJlc2V0RmllbGRBcnJheUZ1bmN0aW9uUmVmLFxyXG4gICAgICAgIHVzZVdhdGNoRmllbGRzUmVmLFxyXG4gICAgICAgIHVzZVdhdGNoUmVuZGVyRnVuY3Rpb25zUmVmLFxyXG4gICAgICAgIGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLFxyXG4gICAgICAgIHZhbGlkRmllbGRzUmVmLFxyXG4gICAgICAgIGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLFxyXG4gICAgICAgIGZpZWxkQXJyYXlOYW1lc1JlZixcclxuICAgICAgICByZWFkRm9ybVN0YXRlUmVmLFxyXG4gICAgICAgIGZvcm1TdGF0ZVJlZixcclxuICAgICAgICBkZWZhdWx0VmFsdWVzUmVmLFxyXG4gICAgICAgIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZixcclxuICAgICAgICBmaWVsZEFycmF5VmFsdWVzUmVmIH0sIGNvbW1vblByb3BzKSksIFtcclxuICAgICAgICBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgdXBkYXRlV2F0Y2hlZFZhbHVlLFxyXG4gICAgICAgIHNob3VsZFVucmVnaXN0ZXIsXHJcbiAgICAgICAgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyLFxyXG4gICAgICAgIHdhdGNoSW50ZXJuYWwsXHJcbiAgICBdKTtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgd2F0Y2gsXHJcbiAgICAgICAgY29udHJvbCxcclxuICAgICAgICBoYW5kbGVTdWJtaXQsIHJlc2V0OiB1c2VDYWxsYmFjayhyZXNldCwgW10pLCBjbGVhckVycm9yczogdXNlQ2FsbGJhY2soY2xlYXJFcnJvcnMsIFtdKSwgc2V0RXJyb3I6IHVzZUNhbGxiYWNrKHNldEVycm9yLCBbXSksIGVycm9yczogZm9ybVN0YXRlLmVycm9ycyB9LCBjb21tb25Qcm9wcyk7XHJcbn1cblxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbmZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxuXG5jb25zdCBGb3JtQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XHJcbkZvcm1Db250ZXh0LmRpc3BsYXlOYW1lID0gJ1JIRkNvbnRleHQnO1xyXG5jb25zdCB1c2VGb3JtQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoRm9ybUNvbnRleHQpO1xyXG5jb25zdCBGb3JtUHJvdmlkZXIgPSAoX2EpID0+IHtcclxuICAgIHZhciB7IGNoaWxkcmVuIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCJdKTtcclxuICAgIHJldHVybiAoY3JlYXRlRWxlbWVudChGb3JtQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpIH0sIGNoaWxkcmVuKSk7XHJcbn07XG5cbnZhciBnZW5lcmF0ZUlkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZCA9IHR5cGVvZiBwZXJmb3JtYW5jZSA9PT0gVU5ERUZJTkVEID8gRGF0ZS5ub3coKSA6IHBlcmZvcm1hbmNlLm5vdygpICogMTAwMDtcclxuICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIChjKSA9PiB7XHJcbiAgICAgICAgY29uc3QgciA9IChNYXRoLnJhbmRvbSgpICogMTYgKyBkKSAlIDE2IHwgMDtcclxuICAgICAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4OCkudG9TdHJpbmcoMTYpO1xyXG4gICAgfSk7XHJcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZUF0SW5kZXhlcyhkYXRhLCBpbmRleGVzKSB7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBjb25zdCB0ZW1wID0gWy4uLmRhdGFdO1xyXG4gICAgZm9yIChjb25zdCBpbmRleCBvZiBpbmRleGVzKSB7XHJcbiAgICAgICAgdGVtcC5zcGxpY2UoaW5kZXggLSBpLCAxKTtcclxuICAgICAgICBpKys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29tcGFjdCh0ZW1wKS5sZW5ndGggPyB0ZW1wIDogW107XHJcbn1cclxudmFyIHJlbW92ZUFycmF5QXQgPSAoZGF0YSwgaW5kZXgpID0+IGlzVW5kZWZpbmVkKGluZGV4KVxyXG4gICAgPyBbXVxyXG4gICAgOiByZW1vdmVBdEluZGV4ZXMoZGF0YSwgKEFycmF5LmlzQXJyYXkoaW5kZXgpID8gaW5kZXggOiBbaW5kZXhdKS5zb3J0KCkpO1xuXG52YXIgbW92ZUFycmF5QXQgPSAoZGF0YSwgZnJvbSwgdG8pID0+IHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKGRhdGFbdG9dKSkge1xyXG4gICAgICAgICAgICBkYXRhW3RvXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YS5zcGxpY2UodG8sIDAsIGRhdGEuc3BsaWNlKGZyb20sIDEpWzBdKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufTtcblxudmFyIHN3YXBBcnJheUF0ID0gKGRhdGEsIGluZGV4QSwgaW5kZXhCKSA9PiB7XHJcbiAgICBjb25zdCB0ZW1wID0gW2RhdGFbaW5kZXhCXSwgZGF0YVtpbmRleEFdXTtcclxuICAgIGRhdGFbaW5kZXhBXSA9IHRlbXBbMF07XHJcbiAgICBkYXRhW2luZGV4Ql0gPSB0ZW1wWzFdO1xyXG59O1xuXG5mdW5jdGlvbiBwcmVwZW5kKGRhdGEsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gWy4uLihBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlIHx8IHVuZGVmaW5lZF0pLCAuLi5kYXRhXTtcclxufVxuXG5mdW5jdGlvbiBpbnNlcnQoZGF0YSwgaW5kZXgsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIC4uLmRhdGEuc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgICAgIC4uLihBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlIHx8IHVuZGVmaW5lZF0pLFxyXG4gICAgICAgIC4uLmRhdGEuc2xpY2UoaW5kZXgpLFxyXG4gICAgXTtcclxufVxuXG52YXIgZmlsbEVtcHR5QXJyYXkgPSAodmFsdWUpID0+IEFycmF5LmlzQXJyYXkodmFsdWUpID8gQXJyYXkodmFsdWUubGVuZ3RoKS5maWxsKHVuZGVmaW5lZCkgOiB1bmRlZmluZWQ7XG5cbnZhciBmaWxsQm9vbGVhbkFycmF5ID0gKHZhbHVlKSA9PiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV0pLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgaWYgKGlzT2JqZWN0KGRhdGEpKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICBvYmplY3Rba2V5XSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XG5cbmNvbnN0IG1hcElkcyA9ICh2YWx1ZXMgPSBbXSwga2V5TmFtZSwgc2tpcFdhcm4pID0+IHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgaWYgKCFza2lwV2Fybikge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5TmFtZSBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYPCfk4sgdXNlRmllbGRBcnJheSBmaWVsZFZhbHVlcyBjb250YWluIHRoZSBrZXlOYW1lIFxcYCR7a2V5TmFtZX1cXGAgd2hpY2ggaXMgcmVzZXJ2ZWQgZm9yIHVzZSBieSB1c2VGaWVsZEFycmF5LiBodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpI3VzZUZpZWxkQXJyYXlgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGDwn5OLIHVzZUZpZWxkQXJyYXkgaW5wdXQncyBuYW1lIHNob3VsZCBiZSBpbiBvYmplY3Qgc2hhcGUgaW5zdGVhZCBvZiBmbGF0IGFycmF5LiBodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpI3VzZUZpZWxkQXJyYXlgKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZXMubWFwKCh2YWx1ZSkgPT4gKE9iamVjdC5hc3NpZ24oeyBba2V5TmFtZV06IHZhbHVlW2tleU5hbWVdIHx8IGdlbmVyYXRlSWQoKSB9LCB2YWx1ZSkpKTtcclxufTtcclxuY29uc3QgdXNlRmllbGRBcnJheSA9ICh7IGNvbnRyb2wsIG5hbWUsIGtleU5hbWUgPSAnaWQnLCB9KSA9PiB7XHJcbiAgICBjb25zdCBtZXRob2RzID0gdXNlRm9ybUNvbnRleHQoKTtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgaWYgKCFjb250cm9sICYmICFtZXRob2RzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign8J+TiyB1c2VGaWVsZEFycmF5IGlzIG1pc3NpbmcgYGNvbnRyb2xgIHByb3AuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjdXNlRmllbGRBcnJheScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGZvY3VzSW5kZXhSZWYgPSB1c2VSZWYoLTEpO1xyXG4gICAgY29uc3QgeyBpc0Zvcm1EaXJ0eSwgdXBkYXRlV2F0Y2hlZFZhbHVlLCByZXNldEZpZWxkQXJyYXlGdW5jdGlvblJlZiwgZmllbGRBcnJheU5hbWVzUmVmLCBmaWVsZHNSZWYsIGRlZmF1bHRWYWx1ZXNSZWYsIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lciwgZm9ybVN0YXRlUmVmLCBzaGFsbG93RmllbGRzU3RhdGVSZWYsIHVwZGF0ZUZvcm1TdGF0ZSwgcmVhZEZvcm1TdGF0ZVJlZiwgdmFsaWRGaWVsZHNSZWYsIGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLCBmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZiwgdmFsaWRhdGVSZXNvbHZlciwgZ2V0VmFsdWVzLCBzaG91bGRVbnJlZ2lzdGVyLCBmaWVsZEFycmF5VmFsdWVzUmVmLCB9ID0gY29udHJvbCB8fCBtZXRob2RzLmNvbnRyb2w7XHJcbiAgICBjb25zdCBnZXREZWZhdWx0VmFsdWVzID0gKHZhbHVlcykgPT4gZ2V0KHNob3VsZFVucmVnaXN0ZXIgPyB2YWx1ZXMgOiBzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCwgbmFtZSwgW10pO1xyXG4gICAgY29uc3QgZmllbGRBcnJheVBhcmVudE5hbWUgPSBnZXRGaWVsZEFycmF5UGFyZW50TmFtZShuYW1lKTtcclxuICAgIGNvbnN0IG1lbW9pemVkRGVmYXVsdFZhbHVlcyA9IHVzZVJlZihbXHJcbiAgICAgICAgLi4uKGdldChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBmaWVsZEFycmF5UGFyZW50TmFtZSlcclxuICAgICAgICAgICAgPyBnZXREZWZhdWx0VmFsdWVzKGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQpXHJcbiAgICAgICAgICAgIDogZ2V0RGVmYXVsdFZhbHVlcyhkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQpKSxcclxuICAgIF0pO1xyXG4gICAgY29uc3QgW2ZpZWxkcywgc2V0RmllbGRzXSA9IHVzZVN0YXRlKG1hcElkcyhtZW1vaXplZERlZmF1bHRWYWx1ZXMuY3VycmVudCwga2V5TmFtZSkpO1xyXG4gICAgc2V0KGZpZWxkQXJyYXlWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSwgZmllbGRzKTtcclxuICAgIGNvbnN0IG9taXRLZXkgPSAoZmllbGRzKSA9PiBmaWVsZHMubWFwKChfYSA9IHt9KSA9PiB7XHJcbiAgICAgICAgdmFyIF9iID0ga2V5TmFtZSwgb21pdHRlZCA9IF9hW19iXSwgcmVzdCA9IF9fcmVzdChfYSwgW3R5cGVvZiBfYiA9PT0gXCJzeW1ib2xcIiA/IF9iIDogX2IgKyBcIlwiXSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3Q7XHJcbiAgICB9KTtcclxuICAgIGZpZWxkQXJyYXlOYW1lc1JlZi5jdXJyZW50LmFkZChuYW1lKTtcclxuICAgIGNvbnN0IGdldEZpZWxkQXJyYXlWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IGdldChmaWVsZEFycmF5VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUsIFtdKSwgW25hbWVdKTtcclxuICAgIGNvbnN0IGdldEN1cnJlbnRGaWVsZHNWYWx1ZXMgPSAoKSA9PiBtYXBJZHMoZ2V0KGdldFZhbHVlcygpLCBuYW1lLCBnZXRGaWVsZEFycmF5VmFsdWUoKSkubWFwKChpdGVtLCBpbmRleCkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZ2V0RmllbGRBcnJheVZhbHVlKClbaW5kZXhdKSwgaXRlbSkpKSwga2V5TmFtZSwgdHJ1ZSk7XHJcbiAgICBmaWVsZEFycmF5TmFtZXNSZWYuY3VycmVudC5hZGQobmFtZSk7XHJcbiAgICBpZiAoZmllbGRBcnJheVBhcmVudE5hbWUgJiZcclxuICAgICAgICAhZ2V0KGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIGZpZWxkQXJyYXlQYXJlbnROYW1lKSkge1xyXG4gICAgICAgIHNldChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBmaWVsZEFycmF5UGFyZW50TmFtZSwgY2xvbmVPYmplY3QoZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgZmllbGRBcnJheVBhcmVudE5hbWUpKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXRGaWVsZEFuZFZhbGlkU3RhdGUgPSAoZmllbGRzVmFsdWVzKSA9PiB7XHJcbiAgICAgICAgc2V0RmllbGRzKGZpZWxkc1ZhbHVlcyk7XHJcbiAgICAgICAgc2V0KGZpZWxkQXJyYXlWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSwgZmllbGRzVmFsdWVzKTtcclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQgJiYgdmFsaWRhdGVSZXNvbHZlcikge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBnZXRWYWx1ZXMoKTtcclxuICAgICAgICAgICAgc2V0KHZhbHVlcywgbmFtZSwgZmllbGRzVmFsdWVzKTtcclxuICAgICAgICAgICAgdmFsaWRhdGVSZXNvbHZlcih2YWx1ZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCByZXNldEZpZWxkcyA9ICgpID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBmaWVsZHNSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBpZiAoaXNNYXRjaEZpZWxkQXJyYXlOYW1lKGtleSwgbmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lcihmaWVsZHNSZWYuY3VycmVudFtrZXldLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBmaWVsZHNSZWYuY3VycmVudFtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGNsZWFudXAgPSAocmVmKSA9PiAhY29tcGFjdChnZXQocmVmLCBuYW1lLCBbXSkpLmxlbmd0aCAmJiB1bnNldChyZWYsIG5hbWUpO1xyXG4gICAgY29uc3QgdXBkYXRlRGlydHlGaWVsZHNXaXRoRGVmYXVsdFZhbHVlcyA9ICh1cGRhdGVkRmllbGRBcnJheVZhbHVlcykgPT4ge1xyXG4gICAgICAgIGlmICh1cGRhdGVkRmllbGRBcnJheVZhbHVlcykge1xyXG4gICAgICAgICAgICBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsIG5hbWUsIHNldEZpZWxkQXJyYXlEaXJ0eUZpZWxkcyhvbWl0S2V5KHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKSwgZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSwgW10pLCBnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsIG5hbWUsIFtdKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBiYXRjaFN0YXRlVXBkYXRlID0gKG1ldGhvZCwgYXJncywgdXBkYXRlZEZpZWxkVmFsdWVzLCB1cGRhdGVkRm9ybVZhbHVlcyA9IFtdLCBzaG91bGRTZXQgPSB0cnVlLCBzaG91bGRVcGRhdGVWYWxpZCA9IGZhbHNlKSA9PiB7XHJcbiAgICAgICAgaWYgKGdldChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCwgbmFtZSkpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gbWV0aG9kKGdldChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCwgbmFtZSksIGFyZ3MuYXJnQSwgYXJncy5hcmdCKTtcclxuICAgICAgICAgICAgc2hvdWxkU2V0ICYmIHNldChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCwgbmFtZSwgb3V0cHV0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdldChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXQgPSBtZXRob2QoZ2V0KGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUpLCBhcmdzLmFyZ0EsIGFyZ3MuYXJnQik7XHJcbiAgICAgICAgICAgIHNob3VsZFNldCAmJiBzZXQoZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSwgb3V0cHV0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgbmFtZSkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dCA9IG1ldGhvZChnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lKSwgYXJncy5hcmdBLCBhcmdzLmFyZ0IpO1xyXG4gICAgICAgICAgICBzaG91bGRTZXQgJiYgc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgbmFtZSwgb3V0cHV0KTtcclxuICAgICAgICAgICAgY2xlYW51cChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQgJiZcclxuICAgICAgICAgICAgZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQsIG5hbWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dCA9IG1ldGhvZChnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCwgbmFtZSksIGFyZ3MuYXJnQSwgYXJncy5hcmdCKTtcclxuICAgICAgICAgICAgc2hvdWxkU2V0ICYmIHNldChmb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkLCBuYW1lLCBvdXRwdXQpO1xyXG4gICAgICAgICAgICBjbGVhbnVwKGZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzIHx8XHJcbiAgICAgICAgICAgIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc0RpcnR5KSB7XHJcbiAgICAgICAgICAgIHNldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSwgc2V0RmllbGRBcnJheURpcnR5RmllbGRzKG9taXRLZXkodXBkYXRlZEZvcm1WYWx1ZXMpLCBnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lLCBbXSksIGdldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSwgW10pKSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZURpcnR5RmllbGRzV2l0aERlZmF1bHRWYWx1ZXModXBkYXRlZEZpZWxkVmFsdWVzKTtcclxuICAgICAgICAgICAgY2xlYW51cChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaG91bGRVcGRhdGVWYWxpZCAmJlxyXG4gICAgICAgICAgICByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCAmJlxyXG4gICAgICAgICAgICAhdmFsaWRhdGVSZXNvbHZlcikge1xyXG4gICAgICAgICAgICBzZXQodmFsaWRGaWVsZHNSZWYuY3VycmVudCwgbmFtZSwgbWV0aG9kKGdldCh2YWxpZEZpZWxkc1JlZi5jdXJyZW50LCBuYW1lLCBbXSksIGFyZ3MuYXJnQSkpO1xyXG4gICAgICAgICAgICBjbGVhbnVwKHZhbGlkRmllbGRzUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICBzZXQoZmllbGRzV2l0aFZhbGlkYXRpb25SZWYuY3VycmVudCwgbmFtZSwgbWV0aG9kKGdldChmaWVsZHNXaXRoVmFsaWRhdGlvblJlZi5jdXJyZW50LCBuYW1lLCBbXSksIGFyZ3MuYXJnQSkpO1xyXG4gICAgICAgICAgICBjbGVhbnVwKGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICBpc0RpcnR5OiBpc0Zvcm1EaXJ0eShuYW1lLCBvbWl0S2V5KHVwZGF0ZWRGb3JtVmFsdWVzKSksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgYXBwZW5kID0gKHZhbHVlLCBzaG91bGRGb2N1cyA9IHRydWUpID0+IHtcclxuICAgICAgICBjb25zdCBhcHBlbmRWYWx1ZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUZvcm1WYWx1ZXMgPSBbXHJcbiAgICAgICAgICAgIC4uLmdldEN1cnJlbnRGaWVsZHNWYWx1ZXMoKSxcclxuICAgICAgICAgICAgLi4ubWFwSWRzKGFwcGVuZFZhbHVlLCBrZXlOYW1lKSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIHNldEZpZWxkQW5kVmFsaWRTdGF0ZSh1cGRhdGVGb3JtVmFsdWVzKTtcclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzIHx8XHJcbiAgICAgICAgICAgIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc0RpcnR5KSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZURpcnR5RmllbGRzV2l0aERlZmF1bHRWYWx1ZXModXBkYXRlRm9ybVZhbHVlcyk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc0RpcnR5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGlydHlGaWVsZHM6IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgIXNob3VsZFVucmVnaXN0ZXIgJiZcclxuICAgICAgICAgICAgc2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lLCBbXHJcbiAgICAgICAgICAgICAgICAuLi4oZ2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lKSB8fCBbXSksXHJcbiAgICAgICAgICAgICAgICAuLi5jbG9uZU9iamVjdChhcHBlbmRWYWx1ZSksXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIGZvY3VzSW5kZXhSZWYuY3VycmVudCA9IHNob3VsZEZvY3VzXHJcbiAgICAgICAgICAgID8gZ2V0KGZpZWxkQXJyYXlWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSkubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA6IC0xO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHByZXBlbmQkMSA9ICh2YWx1ZSwgc2hvdWxkRm9jdXMgPSB0cnVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZW1wdHlBcnJheSA9IGZpbGxFbXB0eUFycmF5KHZhbHVlKTtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcyA9IHByZXBlbmQoZ2V0Q3VycmVudEZpZWxkc1ZhbHVlcygpLCBtYXBJZHMoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV0sIGtleU5hbWUpKTtcclxuICAgICAgICBzZXRGaWVsZEFuZFZhbGlkU3RhdGUodXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIHJlc2V0RmllbGRzKCk7XHJcbiAgICAgICAgYmF0Y2hTdGF0ZVVwZGF0ZShwcmVwZW5kLCB7XHJcbiAgICAgICAgICAgIGFyZ0E6IGVtcHR5QXJyYXksXHJcbiAgICAgICAgICAgIGFyZ0M6IGZpbGxCb29sZWFuQXJyYXkodmFsdWUpLFxyXG4gICAgICAgIH0sIHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKTtcclxuICAgICAgICBmb2N1c0luZGV4UmVmLmN1cnJlbnQgPSBzaG91bGRGb2N1cyA/IDAgOiAtMTtcclxuICAgIH07XHJcbiAgICBjb25zdCByZW1vdmUgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZFZhbHVlcyA9IGdldEN1cnJlbnRGaWVsZHNWYWx1ZXMoKTtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmllbGRWYWx1ZXMgPSByZW1vdmVBcnJheUF0KGZpZWxkVmFsdWVzLCBpbmRleCk7XHJcbiAgICAgICAgc2V0RmllbGRBbmRWYWxpZFN0YXRlKHVwZGF0ZWRGaWVsZFZhbHVlcyk7XHJcbiAgICAgICAgcmVzZXRGaWVsZHMoKTtcclxuICAgICAgICBiYXRjaFN0YXRlVXBkYXRlKHJlbW92ZUFycmF5QXQsIHtcclxuICAgICAgICAgICAgYXJnQTogaW5kZXgsXHJcbiAgICAgICAgICAgIGFyZ0M6IGluZGV4LFxyXG4gICAgICAgIH0sIHVwZGF0ZWRGaWVsZFZhbHVlcywgcmVtb3ZlQXJyYXlBdChmaWVsZFZhbHVlcywgaW5kZXgpLCB0cnVlLCB0cnVlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBpbnNlcnQkMSA9IChpbmRleCwgdmFsdWUsIHNob3VsZEZvY3VzID0gdHJ1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVtcHR5QXJyYXkgPSBmaWxsRW1wdHlBcnJheSh2YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgZmllbGRWYWx1ZXMgPSBnZXRDdXJyZW50RmllbGRzVmFsdWVzKCk7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMgPSBpbnNlcnQoZmllbGRWYWx1ZXMsIGluZGV4LCBtYXBJZHMoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV0sIGtleU5hbWUpKTtcclxuICAgICAgICBzZXRGaWVsZEFuZFZhbGlkU3RhdGUodXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIHJlc2V0RmllbGRzKCk7XHJcbiAgICAgICAgYmF0Y2hTdGF0ZVVwZGF0ZShpbnNlcnQsIHtcclxuICAgICAgICAgICAgYXJnQTogaW5kZXgsXHJcbiAgICAgICAgICAgIGFyZ0I6IGVtcHR5QXJyYXksXHJcbiAgICAgICAgICAgIGFyZ0M6IGluZGV4LFxyXG4gICAgICAgICAgICBhcmdEOiBmaWxsQm9vbGVhbkFycmF5KHZhbHVlKSxcclxuICAgICAgICB9LCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcywgaW5zZXJ0KGZpZWxkVmFsdWVzLCBpbmRleCkpO1xyXG4gICAgICAgIGZvY3VzSW5kZXhSZWYuY3VycmVudCA9IHNob3VsZEZvY3VzID8gaW5kZXggOiAtMTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzd2FwID0gKGluZGV4QSwgaW5kZXhCKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRWYWx1ZXMgPSBnZXRDdXJyZW50RmllbGRzVmFsdWVzKCk7XHJcbiAgICAgICAgc3dhcEFycmF5QXQoZmllbGRWYWx1ZXMsIGluZGV4QSwgaW5kZXhCKTtcclxuICAgICAgICByZXNldEZpZWxkcygpO1xyXG4gICAgICAgIHNldEZpZWxkQW5kVmFsaWRTdGF0ZShbLi4uZmllbGRWYWx1ZXNdKTtcclxuICAgICAgICBiYXRjaFN0YXRlVXBkYXRlKHN3YXBBcnJheUF0LCB7XHJcbiAgICAgICAgICAgIGFyZ0E6IGluZGV4QSxcclxuICAgICAgICAgICAgYXJnQjogaW5kZXhCLFxyXG4gICAgICAgICAgICBhcmdDOiBpbmRleEEsXHJcbiAgICAgICAgICAgIGFyZ0Q6IGluZGV4QixcclxuICAgICAgICB9LCB1bmRlZmluZWQsIGZpZWxkVmFsdWVzLCBmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbW92ZSA9IChmcm9tLCB0bykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkVmFsdWVzID0gZ2V0Q3VycmVudEZpZWxkc1ZhbHVlcygpO1xyXG4gICAgICAgIG1vdmVBcnJheUF0KGZpZWxkVmFsdWVzLCBmcm9tLCB0byk7XHJcbiAgICAgICAgcmVzZXRGaWVsZHMoKTtcclxuICAgICAgICBzZXRGaWVsZEFuZFZhbGlkU3RhdGUoWy4uLmZpZWxkVmFsdWVzXSk7XHJcbiAgICAgICAgYmF0Y2hTdGF0ZVVwZGF0ZShtb3ZlQXJyYXlBdCwge1xyXG4gICAgICAgICAgICBhcmdBOiBmcm9tLFxyXG4gICAgICAgICAgICBhcmdCOiB0byxcclxuICAgICAgICAgICAgYXJnQzogZnJvbSxcclxuICAgICAgICAgICAgYXJnRDogdG8sXHJcbiAgICAgICAgfSwgdW5kZWZpbmVkLCBmaWVsZFZhbHVlcywgZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgaWYgKCFuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ/Cfk4sgdXNlRmllbGRBcnJheSBpcyBtaXNzaW5nIGBuYW1lYCBhdHRyaWJ1dGUuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjdXNlRmllbGRBcnJheScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZXMgPSBnZXQoZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgaWYgKGRlZmF1bHRWYWx1ZXMgJiYgZmllbGRzLmxlbmd0aCA8IGRlZmF1bHRWYWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNldChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lLCBkZWZhdWx0VmFsdWVzLnNsaWNlKDEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdXBkYXRlV2F0Y2hlZFZhbHVlKG5hbWUpO1xyXG4gICAgICAgIGlmIChmb2N1c0luZGV4UmVmLmN1cnJlbnQgPiAtMSkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBmaWVsZHNSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNSZWYuY3VycmVudFtrZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKGAke25hbWV9WyR7Zm9jdXNJbmRleFJlZi5jdXJyZW50fV1gKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLnJlZi5mb2N1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLnJlZi5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvY3VzSW5kZXhSZWYuY3VycmVudCA9IC0xO1xyXG4gICAgfSwgW2ZpZWxkcywgbmFtZV0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCByZXNldEZ1bmN0aW9ucyA9IHJlc2V0RmllbGRBcnJheUZ1bmN0aW9uUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgY29uc3QgZmllbGRBcnJheU5hbWVzID0gZmllbGRBcnJheU5hbWVzUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgaWYgKCFnZXRGaWVsZEFycmF5UGFyZW50TmFtZShuYW1lKSkge1xyXG4gICAgICAgICAgICByZXNldEZ1bmN0aW9uc1tuYW1lXSA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNldEZpZWxkcygpO1xyXG4gICAgICAgICAgICAgICAgIWRhdGEgJiYgdW5zZXQoZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICB1bnNldChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBtZW1vaXplZERlZmF1bHRWYWx1ZXMuY3VycmVudCA9IGdldChkYXRhIHx8IGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRGaWVsZHMobWFwSWRzKG1lbW9pemVkRGVmYXVsdFZhbHVlcy5jdXJyZW50LCBrZXlOYW1lKSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzZXRGaWVsZHMoKTtcclxuICAgICAgICAgICAgZGVsZXRlIHJlc2V0RnVuY3Rpb25zW25hbWVdO1xyXG4gICAgICAgICAgICB1bnNldChmaWVsZEFycmF5VmFsdWVzUmVmLCBuYW1lKTtcclxuICAgICAgICAgICAgZmllbGRBcnJheU5hbWVzLmRlbGV0ZShuYW1lKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzd2FwOiB1c2VDYWxsYmFjayhzd2FwLCBbbmFtZV0pLFxyXG4gICAgICAgIG1vdmU6IHVzZUNhbGxiYWNrKG1vdmUsIFtuYW1lXSksXHJcbiAgICAgICAgcHJlcGVuZDogdXNlQ2FsbGJhY2socHJlcGVuZCQxLCBbbmFtZV0pLFxyXG4gICAgICAgIGFwcGVuZDogdXNlQ2FsbGJhY2soYXBwZW5kLCBbbmFtZV0pLFxyXG4gICAgICAgIHJlbW92ZTogdXNlQ2FsbGJhY2socmVtb3ZlLCBbbmFtZV0pLFxyXG4gICAgICAgIGluc2VydDogdXNlQ2FsbGJhY2soaW5zZXJ0JDEsIFtuYW1lXSksXHJcbiAgICAgICAgZmllbGRzLFxyXG4gICAgfTtcclxufTtcblxudmFyIGdldElucHV0VmFsdWUgPSAoZXZlbnQpID0+IGlzUHJpbWl0aXZlKGV2ZW50KSB8fFxyXG4gICAgIWlzT2JqZWN0KGV2ZW50LnRhcmdldCkgfHxcclxuICAgIChpc09iamVjdChldmVudC50YXJnZXQpICYmICFldmVudC50eXBlKVxyXG4gICAgPyBldmVudFxyXG4gICAgOiBpc1VuZGVmaW5lZChldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgPyBldmVudC50YXJnZXQuY2hlY2tlZFxyXG4gICAgICAgIDogZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG5mdW5jdGlvbiB1c2VDb250cm9sbGVyKHsgbmFtZSwgcnVsZXMsIGRlZmF1bHRWYWx1ZSwgY29udHJvbCwgb25Gb2N1cywgfSkge1xyXG4gICAgY29uc3QgbWV0aG9kcyA9IHVzZUZvcm1Db250ZXh0KCk7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgIGlmICghY29udHJvbCAmJiAhbWV0aG9kcykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ/Cfk4sgQ29udHJvbGxlciBpcyBtaXNzaW5nIGBjb250cm9sYCBwcm9wLiBodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpI0NvbnRyb2xsZXInKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB7IGRlZmF1bHRWYWx1ZXNSZWYsIHNldFZhbHVlLCByZWdpc3RlciwgdW5yZWdpc3RlciwgdHJpZ2dlciwgbW9kZSwgcmVWYWxpZGF0ZU1vZGU6IHsgaXNSZVZhbGlkYXRlT25CbHVyLCBpc1JlVmFsaWRhdGVPbkNoYW5nZSB9LCBmb3JtU3RhdGUsIGZvcm1TdGF0ZVJlZjogeyBjdXJyZW50OiB7IGlzU3VibWl0dGVkLCB0b3VjaGVkLCBlcnJvcnMgfSwgfSwgdXBkYXRlRm9ybVN0YXRlLCByZWFkRm9ybVN0YXRlUmVmLCBmaWVsZHNSZWYsIGZpZWxkQXJyYXlOYW1lc1JlZiwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLCB9ID0gY29udHJvbCB8fCBtZXRob2RzLmNvbnRyb2w7XHJcbiAgICBjb25zdCBpc05vdEZpZWxkQXJyYXkgPSAhaXNOYW1lSW5GaWVsZEFycmF5KGZpZWxkQXJyYXlOYW1lc1JlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgIGNvbnN0IGdldEluaXRpYWxWYWx1ZSA9ICgpID0+ICFpc1VuZGVmaW5lZChnZXQoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUpKSAmJiBpc05vdEZpZWxkQXJyYXlcclxuICAgICAgICA/IGdldChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCwgbmFtZSlcclxuICAgICAgICA6IGlzVW5kZWZpbmVkKGRlZmF1bHRWYWx1ZSlcclxuICAgICAgICAgICAgPyBnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lKVxyXG4gICAgICAgICAgICA6IGRlZmF1bHRWYWx1ZTtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0SW5wdXRTdGF0ZVZhbHVlXSA9IHVzZVN0YXRlKGdldEluaXRpYWxWYWx1ZSgpKTtcclxuICAgIGNvbnN0IHZhbHVlUmVmID0gdXNlUmVmKHZhbHVlKTtcclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZih7XHJcbiAgICAgICAgZm9jdXM6ICgpID0+IG51bGwsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG9uRm9jdXNSZWYgPSB1c2VSZWYob25Gb2N1cyB8fFxyXG4gICAgICAgICgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHJlZi5jdXJyZW50LmZvY3VzKSkge1xyXG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0Z1bmN0aW9uKHJlZi5jdXJyZW50LmZvY3VzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihg8J+TiyAncmVmJyBmcm9tIENvbnRyb2xsZXIgcmVuZGVyIHByb3AgbXVzdCBiZSBhdHRhY2hlZCB0byBhIFJlYWN0IGNvbXBvbmVudCBvciBhIERPTSBFbGVtZW50IHdob3NlIHJlZiBwcm92aWRlcyBhICdmb2N1cygpJyBtZXRob2RgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgIGNvbnN0IHNob3VsZFZhbGlkYXRlID0gdXNlQ2FsbGJhY2soKGlzQmx1ckV2ZW50KSA9PiAhc2tpcFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7IGlzQmx1ckV2ZW50LFxyXG4gICAgICAgIGlzUmVWYWxpZGF0ZU9uQmx1cixcclxuICAgICAgICBpc1JlVmFsaWRhdGVPbkNoYW5nZSxcclxuICAgICAgICBpc1N1Ym1pdHRlZCwgaXNUb3VjaGVkOiAhIWdldCh0b3VjaGVkLCBuYW1lKSB9LCBtb2RlKSksIFtcclxuICAgICAgICBpc1JlVmFsaWRhdGVPbkJsdXIsXHJcbiAgICAgICAgaXNSZVZhbGlkYXRlT25DaGFuZ2UsXHJcbiAgICAgICAgaXNTdWJtaXR0ZWQsXHJcbiAgICAgICAgdG91Y2hlZCxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIG1vZGUsXHJcbiAgICBdKTtcclxuICAgIGNvbnN0IGNvbW1vblRhc2sgPSB1c2VDYWxsYmFjaygoW2V2ZW50XSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBnZXRJbnB1dFZhbHVlKGV2ZW50KTtcclxuICAgICAgICBzZXRJbnB1dFN0YXRlVmFsdWUoZGF0YSk7XHJcbiAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IGRhdGE7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCByZWdpc3RlckZpZWxkID0gdXNlQ2FsbGJhY2soKHNob3VsZFVwZGF0ZVZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgaWYgKCFuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKCfwn5OLIEZpZWxkIGlzIG1pc3NpbmcgYG5hbWVgIHByb3AuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjQ29udHJvbGxlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaWVsZHNSZWYuY3VycmVudFtuYW1lXSkge1xyXG4gICAgICAgICAgICBmaWVsZHNSZWYuY3VycmVudFtuYW1lXSA9IE9iamVjdC5hc3NpZ24oeyByZWY6IGZpZWxkc1JlZi5jdXJyZW50W25hbWVdLnJlZiB9LCBydWxlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZWdpc3RlcihPYmplY3QuZGVmaW5lUHJvcGVydGllcyh7XHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgZm9jdXM6IG9uRm9jdXNSZWYuY3VycmVudCxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXQoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFN0YXRlVmFsdWUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVSZWYuY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksIHJ1bGVzKTtcclxuICAgICAgICAgICAgc2hvdWxkVXBkYXRlVmFsdWUgPSBpc1VuZGVmaW5lZChnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNob3VsZFVwZGF0ZVZhbHVlICYmXHJcbiAgICAgICAgICAgIGlzTm90RmllbGRBcnJheSAmJlxyXG4gICAgICAgICAgICBzZXRJbnB1dFN0YXRlVmFsdWUoZ2V0SW5pdGlhbFZhbHVlKCkpO1xyXG4gICAgfSwgW3J1bGVzLCBuYW1lLCByZWdpc3Rlcl0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+ICgpID0+IHVucmVnaXN0ZXIobmFtZSksIFtuYW1lXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihg8J+TiyAke25hbWV9IGlzIG1pc3NpbmcgaW4gdGhlICdkZWZhdWx0VmFsdWUnIHByb3Agb2YgZWl0aGVyIGl0cyBDb250cm9sbGVyIChodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpI0NvbnRyb2xsZXIpIG9yIHVzZUZvcm0gKGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjdXNlRm9ybSlgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzTm90RmllbGRBcnJheSAmJiBpc1VuZGVmaW5lZChkZWZhdWx0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ/Cfk4sgQ29udHJvbGxlciBpcyBtaXNzaW5nIGBkZWZhdWx0VmFsdWVgIHByb3Agd2hlbiB1c2luZyBgdXNlRmllbGRBcnJheWAuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjQ29udHJvbGxlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlZ2lzdGVyRmllbGQoKTtcclxuICAgIH0sIFtyZWdpc3RlckZpZWxkXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICFmaWVsZHNSZWYuY3VycmVudFtuYW1lXSAmJiByZWdpc3RlckZpZWxkKHRydWUpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBvbkJsdXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkICYmICFnZXQodG91Y2hlZCwgbmFtZSkpIHtcclxuICAgICAgICAgICAgc2V0KHRvdWNoZWQsIG5hbWUsIHRydWUpO1xyXG4gICAgICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdG91Y2hlZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNob3VsZFZhbGlkYXRlKHRydWUpICYmIHRyaWdnZXIobmFtZSk7XHJcbiAgICB9LCBbbmFtZSwgdXBkYXRlRm9ybVN0YXRlLCBzaG91bGRWYWxpZGF0ZSwgdHJpZ2dlciwgcmVhZEZvcm1TdGF0ZVJlZl0pO1xyXG4gICAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoLi4uZXZlbnQpID0+IHNldFZhbHVlKG5hbWUsIGNvbW1vblRhc2soZXZlbnQpLCB7XHJcbiAgICAgICAgc2hvdWxkVmFsaWRhdGU6IHNob3VsZFZhbGlkYXRlKCksXHJcbiAgICAgICAgc2hvdWxkRGlydHk6IHRydWUsXHJcbiAgICB9KSwgW3NldFZhbHVlLCBuYW1lLCBzaG91bGRWYWxpZGF0ZV0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmaWVsZDoge1xyXG4gICAgICAgICAgICBvbkNoYW5nZSxcclxuICAgICAgICAgICAgb25CbHVyLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgcmVmLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0YTogT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoe1xyXG4gICAgICAgICAgICBpbnZhbGlkOiAhIWdldChlcnJvcnMsIG5hbWUpLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaXNEaXJ0eToge1xyXG4gICAgICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIWdldChmb3JtU3RhdGUuZGlydHlGaWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaXNUb3VjaGVkOiB7XHJcbiAgICAgICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhZ2V0KGZvcm1TdGF0ZS50b3VjaGVkLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICB9O1xyXG59XG5cbmZ1bmN0aW9uIHVzZVdhdGNoKHsgY29udHJvbCwgbmFtZSwgZGVmYXVsdFZhbHVlLCB9KSB7XHJcbiAgICBjb25zdCBtZXRob2RzID0gdXNlRm9ybUNvbnRleHQoKTtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgaWYgKCFjb250cm9sICYmICFtZXRob2RzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign8J+TiyB1c2VXYXRjaCBpcyBtaXNzaW5nIGBjb250cm9sYCBwcm9wLiBodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpI3VzZVdhdGNoJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgeyB1c2VXYXRjaEZpZWxkc1JlZiwgdXNlV2F0Y2hSZW5kZXJGdW5jdGlvbnNSZWYsIHdhdGNoSW50ZXJuYWwsIGRlZmF1bHRWYWx1ZXNSZWYsIH0gPSBjb250cm9sIHx8IG1ldGhvZHMuY29udHJvbDtcclxuICAgIGNvbnN0IHVwZGF0ZVZhbHVlID0gdXNlU3RhdGUoKVsxXTtcclxuICAgIGNvbnN0IGlkUmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBkZWZhdWx0VmFsdWVSZWYgPSB1c2VSZWYoZGVmYXVsdFZhbHVlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ/Cfk4sgdXNlV2F0Y2ggaXMgbWlzc2luZyBgbmFtZWAgYXR0cmlidXRlLiBodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpI3VzZVdhdGNoJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWQgPSAoaWRSZWYuY3VycmVudCA9IGdlbmVyYXRlSWQoKSk7XHJcbiAgICAgICAgY29uc3Qgd2F0Y2hGaWVsZHNIb29rUmVuZGVyID0gdXNlV2F0Y2hSZW5kZXJGdW5jdGlvbnNSZWYuY3VycmVudDtcclxuICAgICAgICBjb25zdCB3YXRjaEZpZWxkc0hvb2sgPSB1c2VXYXRjaEZpZWxkc1JlZi5jdXJyZW50O1xyXG4gICAgICAgIHdhdGNoRmllbGRzSG9va1tpZF0gPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgd2F0Y2hGaWVsZHNIb29rUmVuZGVyW2lkXSA9ICgpID0+IHVwZGF0ZVZhbHVlKHt9KTtcclxuICAgICAgICB3YXRjaEludGVybmFsKG5hbWUsIGRlZmF1bHRWYWx1ZVJlZi5jdXJyZW50LCBpZCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZGVsZXRlIHdhdGNoRmllbGRzSG9va1tpZF07XHJcbiAgICAgICAgICAgIGRlbGV0ZSB3YXRjaEZpZWxkc0hvb2tSZW5kZXJbaWRdO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICB1c2VXYXRjaFJlbmRlckZ1bmN0aW9uc1JlZixcclxuICAgICAgICB1c2VXYXRjaEZpZWxkc1JlZixcclxuICAgICAgICB3YXRjaEludGVybmFsLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZVJlZixcclxuICAgIF0pO1xyXG4gICAgcmV0dXJuIGlkUmVmLmN1cnJlbnRcclxuICAgICAgICA/IHdhdGNoSW50ZXJuYWwobmFtZSwgZGVmYXVsdFZhbHVlUmVmLmN1cnJlbnQsIGlkUmVmLmN1cnJlbnQpXHJcbiAgICAgICAgOiBpc1VuZGVmaW5lZChkZWZhdWx0VmFsdWUpXHJcbiAgICAgICAgICAgID8gaXNTdHJpbmcobmFtZSlcclxuICAgICAgICAgICAgICAgID8gZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSlcclxuICAgICAgICAgICAgICAgIDogQXJyYXkuaXNBcnJheShuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgID8gbmFtZS5yZWR1Y2UoKHByZXZpb3VzLCBpbnB1dE5hbWUpID0+IChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHByZXZpb3VzKSwgeyBbaW5wdXROYW1lXTogZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgaW5wdXROYW1lKSB9KSksIHt9KVxyXG4gICAgICAgICAgICAgICAgICAgIDogZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50XHJcbiAgICAgICAgICAgIDogZGVmYXVsdFZhbHVlO1xyXG59XG5cbmNvbnN0IENvbnRyb2xsZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgcnVsZXMsIGFzLCByZW5kZXIsIGRlZmF1bHRWYWx1ZSwgY29udHJvbCwgb25Gb2N1cyB9ID0gcHJvcHMsIHJlc3QgPSBfX3Jlc3QocHJvcHMsIFtcInJ1bGVzXCIsIFwiYXNcIiwgXCJyZW5kZXJcIiwgXCJkZWZhdWx0VmFsdWVcIiwgXCJjb250cm9sXCIsIFwib25Gb2N1c1wiXSk7XHJcbiAgICBjb25zdCB7IGZpZWxkLCBtZXRhIH0gPSB1c2VDb250cm9sbGVyKHByb3BzKTtcclxuICAgIGNvbnN0IGNvbXBvbmVudFByb3BzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZXN0KSwgZmllbGQpO1xyXG4gICAgcmV0dXJuIGFzXHJcbiAgICAgICAgPyBpc1ZhbGlkRWxlbWVudChhcylcclxuICAgICAgICAgICAgPyBjbG9uZUVsZW1lbnQoYXMsIGNvbXBvbmVudFByb3BzKVxyXG4gICAgICAgICAgICA6IGNyZWF0ZUVsZW1lbnQoYXMsIGNvbXBvbmVudFByb3BzKVxyXG4gICAgICAgIDogcmVuZGVyXHJcbiAgICAgICAgICAgID8gcmVuZGVyKGZpZWxkLCBtZXRhKVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbn07XG5cbmV4cG9ydCB7IENvbnRyb2xsZXIsIEZvcm1Qcm92aWRlciwgYXBwZW5kRXJyb3JzLCBnZXQsIHRyYW5zZm9ybVRvTmVzdE9iamVjdCwgdXNlQ29udHJvbGxlciwgdXNlRmllbGRBcnJheSwgdXNlRm9ybSwgdXNlRm9ybUNvbnRleHQsIHVzZVdhdGNoIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iXSwic291cmNlUm9vdCI6IiJ9