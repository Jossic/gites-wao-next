webpackHotUpdate_N_E("pages/admin/crud/divers/partenaire/[id]",{

/***/ "./components/admin/forms/FormUpdatePartenaire.js":
/*!********************************************************!*\
  !*** ./components/admin/forms/FormUpdatePartenaire.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions_partenairesActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../actions/partenairesActions */ "./actions/partenairesActions.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");




var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\forms\\FormUpdatePartenaire.js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var FormUpdatePartenaire = function FormUpdatePartenaire(_ref) {
  _s();

  var preloadedValues = _ref.preloadedValues,
      router = _ref.router;
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_4__["getCookie"])('token');

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])({
    defaultValues: preloadedValues
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    nom: '',
    presPartenaire: '',
    actif: '',
    loading: false,
    success: '',
    error: ''
  }),
      values = _useState[0],
      setValues = _useState[1];

  var success = values.success,
      loading = values.loading,
      error = values.error;

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(data);
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                loading: true
              }));
              createPartenaire(data, token).then(function (result) {
                if (result.error) {
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    error: result.error
                  }));
                } else {
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    success: true,
                    loading: false
                  }));
                  setTimeout(function () {
                    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/admin/gestionDivers/partenaires');
                  }, 3000);
                }
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 8
    }
  }, "Texte du lien (Cat\xE9gorie)"), __jsx("input", {
    type: "text",
    name: "nom",
    ref: register({
      required: true
    }),
    className: "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 8
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 8
    }
  }, "Descriptif (facultatif)"), __jsx("input", {
    type: "text",
    name: "presPartenaire",
    ref: register(),
    className: "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 8
    }
  })), __jsx("div", {
    className: "custom-control custom-switch",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx("input", {
    className: "custom-control-input",
    type: "checkbox",
    name: "actif",
    id: "flexSwitchCheckDefault",
    ref: register(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 8
    }
  }), __jsx("label", {
    className: "custom-control-label pb-3",
    "for": "flexSwitchCheckDefault",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 8
    }
  }, "Actif")))), success && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Alert"], {
    color: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 6
    }
  }, "La cat\xE9gorie a bien \xE9t\xE9 modifi\xE9e, redirection en cours..."), loading && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }), error && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Alert"], {
    color: "danger",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, error), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, __jsx("button", {
    type: "submit",
    className: "btn btn-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 6
    }
  }, "Modifier cette cat\xE9gorie"))));
};

_s(FormUpdatePartenaire, "LBRQoy2/AQVjwm+yJjftgCzTO4E=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"]];
});

_c = FormUpdatePartenaire;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(FormUpdatePartenaire));

var _c, _c2;

$RefreshReg$(_c, "FormUpdatePartenaire");
$RefreshReg$(_c2, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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
    value: null,
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

function getFieldValue(fieldsRef, name, shallowFieldsStateRef, excludeDisabled, shouldKeepRawValue) {
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
        return shouldKeepRawValue
            ? value
            : valueAsNumber
                ? value === ''
                    ? NaN
                    : +value
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
        const fieldValue = getFieldValue(fieldsRef, name, shallowFieldsStateRef, false, true);
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
            const parentNodeName = getFieldArrayParentName(fieldNames) || fieldNames;
            if (fieldArrayNamesRef.current.has(parentNodeName)) {
                fieldValues = Object.assign(Object.assign({}, fieldArrayValuesRef.current), fieldValues);
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


/***/ }),

/***/ "./pages/admin/crud/divers/partenaire/[id].js":
/*!****************************************************!*\
  !*** ./pages/admin/crud/divers/partenaire/[id].js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_partenairesActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../actions/partenairesActions */ "./actions/partenairesActions.js");
/* harmony import */ var _components_admin_forms_FormUpdatePartenaire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../components/admin/forms/FormUpdatePartenaire */ "./components/admin/forms/FormUpdatePartenaire.js");
/* harmony import */ var _components_auth_Admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../components/auth/Admin */ "./components/auth/Admin.js");
/* harmony import */ var _components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../components/layout/AdminHeader */ "./components/layout/AdminHeader.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../actions/authActions */ "./actions/authActions.js");



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\admin\\crud\\divers\\partenaire\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var updatePartenaire = function updatePartenaire(_ref) {
  _s();

  var router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      data = _useState[0],
      setData = _useState[1];

  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_9__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = setData;
                _context.next = 3;
                return Object(_actions_partenairesActions__WEBPACK_IMPORTED_MODULE_3__["listePartenaireById"])(router.query.id);

              case 3:
                _context.t1 = _context.sent;
                (0, _context.t0)(_context.t1);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }
  }, __jsx(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 6
    }
  }, "Formulaire de modification d'un partenaire"), data ? __jsx(_components_admin_forms_FormUpdatePartenaire__WEBPACK_IMPORTED_MODULE_4__["default"], {
    preloadedValues: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }) : __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Spinner"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }))));
};

_s(updatePartenaire, "fQZRxy/+nAZ7NLS1X4dVhrlp8Go=");

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(updatePartenaire));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtVXBkYXRlUGFydGVuYWlyZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWhvb2stZm9ybS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vY3J1ZC9kaXZlcnMvcGFydGVuYWlyZS8uanMiXSwibmFtZXMiOlsiRm9ybVVwZGF0ZVBhcnRlbmFpcmUiLCJwcmVsb2FkZWRWYWx1ZXMiLCJyb3V0ZXIiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZUZvcm0iLCJkZWZhdWx0VmFsdWVzIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ1c2VTdGF0ZSIsIm5vbSIsInByZXNQYXJ0ZW5haXJlIiwiYWN0aWYiLCJsb2FkaW5nIiwic3VjY2VzcyIsImVycm9yIiwidmFsdWVzIiwic2V0VmFsdWVzIiwib25TdWJtaXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVBhcnRlbmFpcmUiLCJ0aGVuIiwicmVzdWx0Iiwic2V0VGltZW91dCIsIlJvdXRlciIsInB1c2giLCJyZXF1aXJlZCIsIndpdGhSb3V0ZXIiLCJ1cGRhdGVQYXJ0ZW5haXJlIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsImxpc3RlUGFydGVuYWlyZUJ5SWQiLCJxdWVyeSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsT0FBaUM7QUFBQTs7QUFBQSxNQUE5QkMsZUFBOEIsUUFBOUJBLGVBQThCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQzdELE1BQU1DLEtBQUssR0FBR0Msc0VBQVMsQ0FBQyxPQUFELENBQXZCOztBQUQ2RCxpQkFFMUJD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsSUFBSSx1REFBUztBQUNiLFlBQVksSUFBcUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLEtBQUssR0FBRyxzQkFBc0I7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFBO0FBQUE7QUFBQSxJQURJLEdBR0osTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERCxDQURELENBREQ7QUFjQSxDQXpCRDs7R0FBTVcsZ0I7O0FBMkJTRCw2SEFBVSxDQUFDQyxnQkFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9jcnVkL2RpdmVycy9wYXJ0ZW5haXJlL1tpZF0uM2FmNDE5MzU0M2ZmM2I4ODIwNjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1cGRhdGVQYXJ0ZW5haXJlIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9wYXJ0ZW5haXJlc0FjdGlvbnMnO1xyXG5pbXBvcnQgeyBBbGVydCwgU3Bpbm5lciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgRm9ybVVwZGF0ZVBhcnRlbmFpcmUgPSAoeyBwcmVsb2FkZWRWYWx1ZXMsIHJvdXRlciB9KSA9PiB7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblx0Y29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKHtcclxuXHRcdGRlZmF1bHRWYWx1ZXM6IHByZWxvYWRlZFZhbHVlcyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdG5vbTogJycsXHJcblx0XHRwcmVzUGFydGVuYWlyZTogJycsXHJcblx0XHRhY3RpZjogJycsXHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdH0pO1xyXG5cdGNvbnN0IHsgc3VjY2VzcywgbG9hZGluZywgZXJyb3IgfSA9IHZhbHVlcztcclxuXHJcblx0Y29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblx0XHRjcmVhdGVQYXJ0ZW5haXJlKGRhdGEsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IHJlc3VsdC5lcnJvciB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Um91dGVyLnB1c2goJy9hZG1pbi9nZXN0aW9uRGl2ZXJzL3BhcnRlbmFpcmVzJyk7XHJcblx0XHRcdFx0fSwgMzAwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTEyJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvcm0tZ3JvdXAnPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9J3RleHQtbXV0ZWQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0VGV4dGUgZHUgbGllbiAoQ2F0w6lnb3JpZSlcclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J25vbSdcclxuXHRcdFx0XHRcdFx0XHRcdHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZm9ybS1jb250cm9sJ1xyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9ybS1ncm91cCc+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCc+XHJcblx0XHRcdFx0XHRcdFx0XHREZXNjcmlwdGlmIChmYWN1bHRhdGlmKVxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0ncHJlc1BhcnRlbmFpcmUnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKCl9XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Zvcm0tY29udHJvbCdcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjdXN0b20tY29udHJvbCBjdXN0b20tc3dpdGNoJz5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY3VzdG9tLWNvbnRyb2wtaW5wdXQnXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSdjaGVja2JveCdcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J2FjdGlmJ1xyXG5cdFx0XHRcdFx0XHRcdFx0aWQ9J2ZsZXhTd2l0Y2hDaGVja0RlZmF1bHQnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyKCl9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY3VzdG9tLWNvbnRyb2wtbGFiZWwgcGItMydcclxuXHRcdFx0XHRcdFx0XHRcdGZvcj0nZmxleFN3aXRjaENoZWNrRGVmYXVsdCc+XHJcblx0XHRcdFx0XHRcdFx0XHRBY3RpZlxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0e3N1Y2Nlc3MgJiYgKFxyXG5cdFx0XHRcdFx0PEFsZXJ0IGNvbG9yPSdzdWNjZXNzJz5cclxuXHRcdFx0XHRcdFx0TGEgY2F0w6lnb3JpZSBhIGJpZW4gw6l0w6kgbW9kaWZpw6llLCByZWRpcmVjdGlvbiBlblxyXG5cdFx0XHRcdFx0XHRjb3Vycy4uLlxyXG5cdFx0XHRcdFx0PC9BbGVydD5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHRcdHtsb2FkaW5nICYmIDxTcGlubmVyIC8+fVxyXG5cdFx0XHRcdHtlcnJvciAmJiA8QWxlcnQgY29sb3I9J2Rhbmdlcic+e2Vycm9yfTwvQWxlcnQ+fVxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG4gYnRuLWluZm8nPlxyXG5cdFx0XHRcdFx0XHRNb2RpZmllciBjZXR0ZSBjYXTDqWdvcmllXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoRm9ybVVwZGF0ZVBhcnRlbmFpcmUpO1xyXG4iLCJpbXBvcnQgeyBpc1ZhbGlkRWxlbWVudCwgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlTWVtbywgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgY3JlYXRlRWxlbWVudCwgY2xvbmVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuXG52YXIgaXNIVE1MRWxlbWVudCA9ICh2YWx1ZSkgPT4gdmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcblxuY29uc3QgRVZFTlRTID0ge1xyXG4gICAgQkxVUjogJ2JsdXInLFxyXG4gICAgQ0hBTkdFOiAnY2hhbmdlJyxcclxuICAgIElOUFVUOiAnaW5wdXQnLFxyXG59O1xyXG5jb25zdCBWQUxJREFUSU9OX01PREUgPSB7XHJcbiAgICBvbkJsdXI6ICdvbkJsdXInLFxyXG4gICAgb25DaGFuZ2U6ICdvbkNoYW5nZScsXHJcbiAgICBvblN1Ym1pdDogJ29uU3VibWl0JyxcclxuICAgIG9uVG91Y2hlZDogJ29uVG91Y2hlZCcsXHJcbiAgICBhbGw6ICdhbGwnLFxyXG59O1xyXG5jb25zdCBTRUxFQ1QgPSAnc2VsZWN0JztcclxuY29uc3QgVU5ERUZJTkVEID0gJ3VuZGVmaW5lZCc7XHJcbmNvbnN0IElOUFVUX1ZBTElEQVRJT05fUlVMRVMgPSB7XHJcbiAgICBtYXg6ICdtYXgnLFxyXG4gICAgbWluOiAnbWluJyxcclxuICAgIG1heExlbmd0aDogJ21heExlbmd0aCcsXHJcbiAgICBtaW5MZW5ndGg6ICdtaW5MZW5ndGgnLFxyXG4gICAgcGF0dGVybjogJ3BhdHRlcm4nLFxyXG4gICAgcmVxdWlyZWQ6ICdyZXF1aXJlZCcsXHJcbiAgICB2YWxpZGF0ZTogJ3ZhbGlkYXRlJyxcclxufTtcblxuZnVuY3Rpb24gYXR0YWNoRXZlbnRMaXN0ZW5lcnMoeyByZWYgfSwgc2hvdWxkQXR0YWNoQ2hhbmdlRXZlbnQsIGhhbmRsZUNoYW5nZSkge1xyXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQocmVmKSAmJiBoYW5kbGVDaGFuZ2UpIHtcclxuICAgICAgICByZWYuYWRkRXZlbnRMaXN0ZW5lcihzaG91bGRBdHRhY2hDaGFuZ2VFdmVudCA/IEVWRU5UUy5DSEFOR0UgOiBFVkVOVFMuSU5QVVQsIGhhbmRsZUNoYW5nZSk7XHJcbiAgICAgICAgcmVmLmFkZEV2ZW50TGlzdGVuZXIoRVZFTlRTLkJMVVIsIGhhbmRsZUNoYW5nZSk7XHJcbiAgICB9XHJcbn1cblxudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gKHZhbHVlKSA9PiB2YWx1ZSA9PSBudWxsO1xuXG5jb25zdCBpc09iamVjdFR5cGUgPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XHJcbnZhciBpc09iamVjdCA9ICh2YWx1ZSkgPT4gIWlzTnVsbE9yVW5kZWZpbmVkKHZhbHVlKSAmJlxyXG4gICAgIUFycmF5LmlzQXJyYXkodmFsdWUpICYmXHJcbiAgICBpc09iamVjdFR5cGUodmFsdWUpICYmXHJcbiAgICAhKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSk7XG5cbnZhciBpc0tleSA9ICh2YWx1ZSkgPT4gL15cXHcqJC8udGVzdCh2YWx1ZSk7XG5cbnZhciBjb21wYWN0ID0gKHZhbHVlKSA9PiB2YWx1ZS5maWx0ZXIoQm9vbGVhbik7XG5cbnZhciBzdHJpbmdUb1BhdGggPSAoaW5wdXQpID0+IGNvbXBhY3QoaW5wdXRcclxuICAgIC5yZXBsYWNlKC9bXCJ8J10vZywgJycpXHJcbiAgICAucmVwbGFjZSgvXFxbL2csICcuJylcclxuICAgIC5yZXBsYWNlKC9cXF0vZywgJycpXHJcbiAgICAuc3BsaXQoJy4nKSk7XG5cbmZ1bmN0aW9uIHNldChvYmplY3QsIHBhdGgsIHZhbHVlKSB7XHJcbiAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgIGNvbnN0IHRlbXBQYXRoID0gaXNLZXkocGF0aCkgPyBbcGF0aF0gOiBzdHJpbmdUb1BhdGgocGF0aCk7XHJcbiAgICBjb25zdCBsZW5ndGggPSB0ZW1wUGF0aC5sZW5ndGg7XHJcbiAgICBjb25zdCBsYXN0SW5kZXggPSBsZW5ndGggLSAxO1xyXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSB0ZW1wUGF0aFtpbmRleF07XHJcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSBsYXN0SW5kZXgpIHtcclxuICAgICAgICAgICAgY29uc3Qgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcclxuICAgICAgICAgICAgbmV3VmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgaXNPYmplY3Qob2JqVmFsdWUpIHx8IEFycmF5LmlzQXJyYXkob2JqVmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBvYmpWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogIWlzTmFOKCt0ZW1wUGF0aFtpbmRleCArIDFdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDoge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iamVjdFtrZXldID0gbmV3VmFsdWU7XHJcbiAgICAgICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqZWN0O1xyXG59XG5cbnZhciB0cmFuc2Zvcm1Ub05lc3RPYmplY3QgPSAoZGF0YSwgdmFsdWUgPSB7fSkgPT4ge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgICFpc0tleShrZXkpID8gc2V0KHZhbHVlLCBrZXksIGRhdGFba2V5XSkgOiAodmFsdWVba2V5XSA9IGRhdGFba2V5XSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn07XG5cbnZhciBpc1VuZGVmaW5lZCA9ICh2YWwpID0+IHZhbCA9PT0gdW5kZWZpbmVkO1xuXG52YXIgZ2V0ID0gKG9iaiA9IHt9LCBwYXRoLCBkZWZhdWx0VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGNvbXBhY3QocGF0aC5zcGxpdCgvWyxbXFxdLl0rPy8pKS5yZWR1Y2UoKHJlc3VsdCwga2V5KSA9PiAoaXNOdWxsT3JVbmRlZmluZWQocmVzdWx0KSA/IHJlc3VsdCA6IHJlc3VsdFtrZXldKSwgb2JqKTtcclxuICAgIHJldHVybiBpc1VuZGVmaW5lZChyZXN1bHQpIHx8IHJlc3VsdCA9PT0gb2JqXHJcbiAgICAgICAgPyBpc1VuZGVmaW5lZChvYmpbcGF0aF0pXHJcbiAgICAgICAgICAgID8gZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgICAgIDogb2JqW3BhdGhdXHJcbiAgICAgICAgOiByZXN1bHQ7XHJcbn07XG5cbnZhciBmb2N1c09uRXJyb3JGaWVsZCA9IChmaWVsZHMsIGZpZWxkRXJyb3JzKSA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmaWVsZHMpIHtcclxuICAgICAgICBpZiAoZ2V0KGZpZWxkRXJyb3JzLCBrZXkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW2tleV07XHJcbiAgICAgICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLnJlZi5mb2N1cyAmJiBpc1VuZGVmaW5lZChmaWVsZC5yZWYuZm9jdXMoKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZpZWxkLm9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5vcHRpb25zWzBdLnJlZi5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xuXG52YXIgcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMgPSAocmVmLCB2YWxpZGF0ZVdpdGhTdGF0ZVVwZGF0ZSkgPT4ge1xyXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQocmVmKSAmJiByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKEVWRU5UUy5JTlBVVCwgdmFsaWRhdGVXaXRoU3RhdGVVcGRhdGUpO1xyXG4gICAgICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKEVWRU5UUy5DSEFOR0UsIHZhbGlkYXRlV2l0aFN0YXRlVXBkYXRlKTtcclxuICAgICAgICByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcihFVkVOVFMuQkxVUiwgdmFsaWRhdGVXaXRoU3RhdGVVcGRhdGUpO1xyXG4gICAgfVxyXG59O1xuXG5jb25zdCBkZWZhdWx0UmV0dXJuID0ge1xyXG4gICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICB2YWx1ZTogbnVsbCxcclxufTtcclxudmFyIGdldFJhZGlvVmFsdWUgPSAob3B0aW9ucykgPT4gQXJyYXkuaXNBcnJheShvcHRpb25zKVxyXG4gICAgPyBvcHRpb25zLnJlZHVjZSgocHJldmlvdXMsIG9wdGlvbikgPT4gb3B0aW9uICYmIG9wdGlvbi5yZWYuY2hlY2tlZFxyXG4gICAgICAgID8ge1xyXG4gICAgICAgICAgICBpc1ZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnJlZi52YWx1ZSxcclxuICAgICAgICB9XHJcbiAgICAgICAgOiBwcmV2aW91cywgZGVmYXVsdFJldHVybilcclxuICAgIDogZGVmYXVsdFJldHVybjtcblxudmFyIGdldE11bHRpcGxlU2VsZWN0VmFsdWUgPSAob3B0aW9ucykgPT4gWy4uLm9wdGlvbnNdXHJcbiAgICAuZmlsdGVyKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKVxyXG4gICAgLm1hcCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSk7XG5cbnZhciBpc1JhZGlvSW5wdXQgPSAoZWxlbWVudCkgPT4gZWxlbWVudC50eXBlID09PSAncmFkaW8nO1xuXG52YXIgaXNGaWxlSW5wdXQgPSAoZWxlbWVudCkgPT4gZWxlbWVudC50eXBlID09PSAnZmlsZSc7XG5cbnZhciBpc0NoZWNrQm94SW5wdXQgPSAoZWxlbWVudCkgPT4gZWxlbWVudC50eXBlID09PSAnY2hlY2tib3gnO1xuXG52YXIgaXNNdWx0aXBsZVNlbGVjdCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09IGAke1NFTEVDVH0tbXVsdGlwbGVgO1xuXG5jb25zdCBkZWZhdWx0UmVzdWx0ID0ge1xyXG4gICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgaXNWYWxpZDogZmFsc2UsXHJcbn07XHJcbmNvbnN0IHZhbGlkUmVzdWx0ID0geyB2YWx1ZTogdHJ1ZSwgaXNWYWxpZDogdHJ1ZSB9O1xyXG52YXIgZ2V0Q2hlY2tib3hWYWx1ZSA9IChvcHRpb25zKSA9PiB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xyXG4gICAgICAgIGlmIChvcHRpb25zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gb3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24gJiYgb3B0aW9uLnJlZi5jaGVja2VkKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoeyByZWY6IHsgdmFsdWUgfSB9KSA9PiB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZXMsIGlzVmFsaWQ6ICEhdmFsdWVzLmxlbmd0aCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IGNoZWNrZWQsIHZhbHVlLCBhdHRyaWJ1dGVzIH0gPSBvcHRpb25zWzBdLnJlZjtcclxuICAgICAgICByZXR1cm4gY2hlY2tlZFxyXG4gICAgICAgICAgICA/IGF0dHJpYnV0ZXMgJiYgIWlzVW5kZWZpbmVkKGF0dHJpYnV0ZXMudmFsdWUpXHJcbiAgICAgICAgICAgICAgICA/IGlzVW5kZWZpbmVkKHZhbHVlKSB8fCB2YWx1ZSA9PT0gJydcclxuICAgICAgICAgICAgICAgICAgICA/IHZhbGlkUmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgOiB7IHZhbHVlOiB2YWx1ZSwgaXNWYWxpZDogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICA6IHZhbGlkUmVzdWx0XHJcbiAgICAgICAgICAgIDogZGVmYXVsdFJlc3VsdDtcclxuICAgIH1cclxuICAgIHJldHVybiBkZWZhdWx0UmVzdWx0O1xyXG59O1xuXG5mdW5jdGlvbiBnZXRGaWVsZFZhbHVlKGZpZWxkc1JlZiwgbmFtZSwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLCBleGNsdWRlRGlzYWJsZWQsIHNob3VsZEtlZXBSYXdWYWx1ZSkge1xyXG4gICAgY29uc3QgZmllbGQgPSBmaWVsZHNSZWYuY3VycmVudFtuYW1lXTtcclxuICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgIGNvbnN0IHsgcmVmOiB7IHZhbHVlLCBkaXNhYmxlZCB9LCByZWYsIHZhbHVlQXNOdW1iZXIsIHZhbHVlQXNEYXRlLCBzZXRWYWx1ZUFzLCB9ID0gZmllbGQ7XHJcbiAgICAgICAgaWYgKGRpc2FibGVkICYmIGV4Y2x1ZGVEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0ZpbGVJbnB1dChyZWYpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWYuZmlsZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1JhZGlvSW5wdXQocmVmKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0UmFkaW9WYWx1ZShmaWVsZC5vcHRpb25zKS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTXVsdGlwbGVTZWxlY3QocmVmKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0TXVsdGlwbGVTZWxlY3RWYWx1ZShyZWYub3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0NoZWNrQm94SW5wdXQocmVmKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0Q2hlY2tib3hWYWx1ZShmaWVsZC5vcHRpb25zKS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNob3VsZEtlZXBSYXdWYWx1ZVxyXG4gICAgICAgICAgICA/IHZhbHVlXHJcbiAgICAgICAgICAgIDogdmFsdWVBc051bWJlclxyXG4gICAgICAgICAgICAgICAgPyB2YWx1ZSA9PT0gJydcclxuICAgICAgICAgICAgICAgICAgICA/IE5hTlxyXG4gICAgICAgICAgICAgICAgICAgIDogK3ZhbHVlXHJcbiAgICAgICAgICAgICAgICA6IHZhbHVlQXNEYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgPyByZWYudmFsdWVBc0RhdGVcclxuICAgICAgICAgICAgICAgICAgICA6IHNldFZhbHVlQXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZXRWYWx1ZUFzKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHNoYWxsb3dGaWVsZHNTdGF0ZVJlZikge1xyXG4gICAgICAgIHJldHVybiBnZXQoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIGlzRGV0YWNoZWQoZWxlbWVudCkge1xyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8XHJcbiAgICAgICAgZWxlbWVudC5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzRGV0YWNoZWQoZWxlbWVudC5wYXJlbnROb2RlKTtcclxufVxuXG52YXIgaXNFbXB0eU9iamVjdCA9ICh2YWx1ZSkgPT4gaXNPYmplY3QodmFsdWUpICYmICFPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoO1xuXG52YXIgaXNCb29sZWFuID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcblxuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHVwZGF0ZVBhdGgpIHtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHVwZGF0ZVBhdGguc2xpY2UoMCwgLTEpLmxlbmd0aDtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgICBvYmplY3QgPSBpc1VuZGVmaW5lZChvYmplY3QpID8gaW5kZXgrKyA6IG9iamVjdFt1cGRhdGVQYXRoW2luZGV4KytdXTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3Q7XHJcbn1cclxuZnVuY3Rpb24gdW5zZXQob2JqZWN0LCBwYXRoKSB7XHJcbiAgICBjb25zdCB1cGRhdGVQYXRoID0gaXNLZXkocGF0aCkgPyBbcGF0aF0gOiBzdHJpbmdUb1BhdGgocGF0aCk7XHJcbiAgICBjb25zdCBjaGlsZE9iamVjdCA9IHVwZGF0ZVBhdGgubGVuZ3RoID09IDEgPyBvYmplY3QgOiBiYXNlR2V0KG9iamVjdCwgdXBkYXRlUGF0aCk7XHJcbiAgICBjb25zdCBrZXkgPSB1cGRhdGVQYXRoW3VwZGF0ZVBhdGgubGVuZ3RoIC0gMV07XHJcbiAgICBsZXQgcHJldmlvdXNPYmpSZWY7XHJcbiAgICBpZiAoY2hpbGRPYmplY3QpIHtcclxuICAgICAgICBkZWxldGUgY2hpbGRPYmplY3Rba2V5XTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgdXBkYXRlUGF0aC5zbGljZSgwLCAtMSkubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgICAgICBsZXQgb2JqZWN0UmVmO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXRocyA9IHVwZGF0ZVBhdGguc2xpY2UoMCwgLShrICsgMSkpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXRoc0xlbmd0aCA9IGN1cnJlbnRQYXRocy5sZW5ndGggLSAxO1xyXG4gICAgICAgIGlmIChrID4gMCkge1xyXG4gICAgICAgICAgICBwcmV2aW91c09ialJlZiA9IG9iamVjdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKCsraW5kZXggPCBjdXJyZW50UGF0aHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjdXJyZW50UGF0aHNbaW5kZXhdO1xyXG4gICAgICAgICAgICBvYmplY3RSZWYgPSBvYmplY3RSZWYgPyBvYmplY3RSZWZbaXRlbV0gOiBvYmplY3RbaXRlbV07XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50UGF0aHNMZW5ndGggPT09IGluZGV4ICYmXHJcbiAgICAgICAgICAgICAgICAoKGlzT2JqZWN0KG9iamVjdFJlZikgJiYgaXNFbXB0eU9iamVjdChvYmplY3RSZWYpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChBcnJheS5pc0FycmF5KG9iamVjdFJlZikgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIW9iamVjdFJlZi5maWx0ZXIoKGRhdGEpID0+IChpc09iamVjdChkYXRhKSAmJiAhaXNFbXB0eU9iamVjdChkYXRhKSkgfHwgaXNCb29sZWFuKGRhdGEpKS5sZW5ndGgpKSkge1xyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNPYmpSZWYgPyBkZWxldGUgcHJldmlvdXNPYmpSZWZbaXRlbV0gOiBkZWxldGUgb2JqZWN0W2l0ZW1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByZXZpb3VzT2JqUmVmID0gb2JqZWN0UmVmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3Q7XHJcbn1cblxuY29uc3QgaXNTYW1lUmVmID0gKGZpZWxkVmFsdWUsIHJlZikgPT4gZmllbGRWYWx1ZSAmJiBmaWVsZFZhbHVlLnJlZiA9PT0gcmVmO1xyXG5mdW5jdGlvbiBmaW5kUmVtb3ZlZEZpZWxkQW5kUmVtb3ZlTGlzdGVuZXIoZmllbGRzUmVmLCBoYW5kbGVDaGFuZ2UsIGZpZWxkLCBzaGFsbG93RmllbGRzU3RhdGVSZWYsIHNob3VsZFVucmVnaXN0ZXIsIGZvcmNlRGVsZXRlKSB7XHJcbiAgICBjb25zdCB7IHJlZiwgcmVmOiB7IG5hbWUgfSwgfSA9IGZpZWxkO1xyXG4gICAgY29uc3QgZmllbGRSZWYgPSBmaWVsZHNSZWYuY3VycmVudFtuYW1lXTtcclxuICAgIGlmICghc2hvdWxkVW5yZWdpc3Rlcikge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0RmllbGRWYWx1ZShmaWVsZHNSZWYsIG5hbWUsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZik7XHJcbiAgICAgICAgIWlzVW5kZWZpbmVkKHZhbHVlKSAmJiBzZXQoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUsIHZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmICghcmVmLnR5cGUgfHwgIWZpZWxkUmVmKSB7XHJcbiAgICAgICAgZGVsZXRlIGZpZWxkc1JlZi5jdXJyZW50W25hbWVdO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChpc1JhZGlvSW5wdXQocmVmKSB8fCBpc0NoZWNrQm94SW5wdXQocmVmKSkge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpZWxkUmVmLm9wdGlvbnMpICYmIGZpZWxkUmVmLm9wdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbXBhY3QoZmllbGRSZWYub3B0aW9ucykuZm9yRWFjaCgob3B0aW9uID0ge30sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGlzRGV0YWNoZWQob3B0aW9uLnJlZikgJiYgaXNTYW1lUmVmKG9wdGlvbiwgb3B0aW9uLnJlZikpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VEZWxldGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVBbGxFdmVudExpc3RlbmVycyhvcHRpb24ucmVmLCBoYW5kbGVDaGFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVuc2V0KGZpZWxkUmVmLm9wdGlvbnMsIGBbJHtpbmRleH1dYCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoZmllbGRSZWYub3B0aW9ucyAmJiAhY29tcGFjdChmaWVsZFJlZi5vcHRpb25zKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBmaWVsZHNSZWYuY3VycmVudFtuYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZGVsZXRlIGZpZWxkc1JlZi5jdXJyZW50W25hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKChpc0RldGFjaGVkKHJlZikgJiYgaXNTYW1lUmVmKGZpZWxkUmVmLCByZWYpKSB8fCBmb3JjZURlbGV0ZSkge1xyXG4gICAgICAgIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzKHJlZiwgaGFuZGxlQ2hhbmdlKTtcclxuICAgICAgICBkZWxldGUgZmllbGRzUmVmLmN1cnJlbnRbbmFtZV07XHJcbiAgICB9XHJcbn1cblxudmFyIGlzUHJpbWl0aXZlID0gKHZhbHVlKSA9PiBpc051bGxPclVuZGVmaW5lZCh2YWx1ZSkgfHwgIWlzT2JqZWN0VHlwZSh2YWx1ZSk7XG5cbmZ1bmN0aW9uIGRlZXBNZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xyXG4gICAgaWYgKGlzUHJpbWl0aXZlKHRhcmdldCkgfHwgaXNQcmltaXRpdmUoc291cmNlKSkge1xyXG4gICAgICAgIHJldHVybiBzb3VyY2U7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IHRhcmdldFtrZXldO1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZVZhbHVlID0gc291cmNlW2tleV07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPVxyXG4gICAgICAgICAgICAgICAgKGlzT2JqZWN0KHRhcmdldFZhbHVlKSAmJiBpc09iamVjdChzb3VyY2VWYWx1ZSkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkodGFyZ2V0VmFsdWUpICYmIEFycmF5LmlzQXJyYXkoc291cmNlVmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgICAgID8gZGVlcE1lcmdlKHRhcmdldFZhbHVlLCBzb3VyY2VWYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICA6IHNvdXJjZVZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoX2EpIHsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxuXG5mdW5jdGlvbiBkZWVwRXF1YWwob2JqZWN0MSwgb2JqZWN0MiwgaXNFcnJvck9iamVjdCkge1xyXG4gICAgaWYgKGlzUHJpbWl0aXZlKG9iamVjdDEpIHx8XHJcbiAgICAgICAgaXNQcmltaXRpdmUob2JqZWN0MikgfHxcclxuICAgICAgICBvYmplY3QxIGluc3RhbmNlb2YgRGF0ZSB8fFxyXG4gICAgICAgIG9iamVjdDIgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iamVjdDEgPT09IG9iamVjdDI7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzVmFsaWRFbGVtZW50KG9iamVjdDEpKSB7XHJcbiAgICAgICAgY29uc3Qga2V5czEgPSBPYmplY3Qua2V5cyhvYmplY3QxKTtcclxuICAgICAgICBjb25zdCBrZXlzMiA9IE9iamVjdC5rZXlzKG9iamVjdDIpO1xyXG4gICAgICAgIGlmIChrZXlzMS5sZW5ndGggIT09IGtleXMyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbDEgPSBvYmplY3QxW2tleV07XHJcbiAgICAgICAgICAgIGlmICghKGlzRXJyb3JPYmplY3QgJiYga2V5ID09PSAncmVmJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbDIgPSBvYmplY3QyW2tleV07XHJcbiAgICAgICAgICAgICAgICBpZiAoKGlzT2JqZWN0KHZhbDEpIHx8IEFycmF5LmlzQXJyYXkodmFsMSkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKGlzT2JqZWN0KHZhbDIpIHx8IEFycmF5LmlzQXJyYXkodmFsMikpXHJcbiAgICAgICAgICAgICAgICAgICAgPyAhZGVlcEVxdWFsKHZhbDEsIHZhbDIsIGlzRXJyb3JPYmplY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgOiB2YWwxICE9PSB2YWwyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cblxuZnVuY3Rpb24gc2V0RGlydHlGaWVsZHModmFsdWVzLCBkZWZhdWx0VmFsdWVzLCBkaXJ0eUZpZWxkcywgcGFyZW50Tm9kZSwgcGFyZW50TmFtZSkge1xyXG4gICAgbGV0IGluZGV4ID0gLTE7XHJcbiAgICB3aGlsZSAoKytpbmRleCA8IHZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZXNbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlc1tpbmRleF1ba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgICFkaXJ0eUZpZWxkc1tpbmRleF0gJiYgKGRpcnR5RmllbGRzW2luZGV4XSA9IHt9KTtcclxuICAgICAgICAgICAgICAgIGRpcnR5RmllbGRzW2luZGV4XVtrZXldID0gW107XHJcbiAgICAgICAgICAgICAgICBzZXREaXJ0eUZpZWxkcyh2YWx1ZXNbaW5kZXhdW2tleV0sIGdldChkZWZhdWx0VmFsdWVzW2luZGV4XSB8fCB7fSwga2V5LCBbXSksIGRpcnR5RmllbGRzW2luZGV4XVtrZXldLCBkaXJ0eUZpZWxkc1tpbmRleF0sIGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZWVwRXF1YWwoZ2V0KGRlZmF1bHRWYWx1ZXNbaW5kZXhdIHx8IHt9LCBrZXkpLCB2YWx1ZXNbaW5kZXhdW2tleV0pXHJcbiAgICAgICAgICAgICAgICAgICAgPyBzZXQoZGlydHlGaWVsZHNbaW5kZXhdIHx8IHt9LCBrZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAoZGlydHlGaWVsZHNbaW5kZXhdID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkaXJ0eUZpZWxkc1tpbmRleF0pLCB7IFtrZXldOiB0cnVlIH0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJlbnROb2RlICYmXHJcbiAgICAgICAgICAgICFkaXJ0eUZpZWxkcy5sZW5ndGggJiZcclxuICAgICAgICAgICAgZGVsZXRlIHBhcmVudE5vZGVbcGFyZW50TmFtZV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGlydHlGaWVsZHM7XHJcbn1cclxudmFyIHNldEZpZWxkQXJyYXlEaXJ0eUZpZWxkcyA9ICh2YWx1ZXMsIGRlZmF1bHRWYWx1ZXMsIGRpcnR5RmllbGRzKSA9PiBkZWVwTWVyZ2Uoc2V0RGlydHlGaWVsZHModmFsdWVzLCBkZWZhdWx0VmFsdWVzLCBkaXJ0eUZpZWxkcy5zbGljZSgwLCB2YWx1ZXMubGVuZ3RoKSksIHNldERpcnR5RmllbGRzKGRlZmF1bHRWYWx1ZXMsIHZhbHVlcywgZGlydHlGaWVsZHMuc2xpY2UoMCwgdmFsdWVzLmxlbmd0aCkpKTtcblxudmFyIGlzU3RyaW5nID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuXG52YXIgZ2V0RmllbGRzVmFsdWVzID0gKGZpZWxkc1JlZiwgc2hhbGxvd0ZpZWxkc1N0YXRlLCBzaG91bGRVbnJlZ2lzdGVyLCBleGNsdWRlRGlzYWJsZWQsIHNlYXJjaCkgPT4ge1xyXG4gICAgY29uc3Qgb3V0cHV0ID0ge307XHJcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gZmllbGRzUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICBpZiAoaXNVbmRlZmluZWQoc2VhcmNoKSB8fFxyXG4gICAgICAgICAgICAoaXNTdHJpbmcoc2VhcmNoKVxyXG4gICAgICAgICAgICAgICAgPyBuYW1lLnN0YXJ0c1dpdGgoc2VhcmNoKVxyXG4gICAgICAgICAgICAgICAgOiBBcnJheS5pc0FycmF5KHNlYXJjaCkgJiYgc2VhcmNoLmZpbmQoKGRhdGEpID0+IG5hbWUuc3RhcnRzV2l0aChkYXRhKSkpKSB7XHJcbiAgICAgICAgICAgIG91dHB1dFtuYW1lXSA9IGdldEZpZWxkVmFsdWUoZmllbGRzUmVmLCBuYW1lLCB1bmRlZmluZWQsIGV4Y2x1ZGVEaXNhYmxlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNob3VsZFVucmVnaXN0ZXJcclxuICAgICAgICA/IHRyYW5zZm9ybVRvTmVzdE9iamVjdChvdXRwdXQpXHJcbiAgICAgICAgOiBkZWVwTWVyZ2Uoc2hhbGxvd0ZpZWxkc1N0YXRlLCB0cmFuc2Zvcm1Ub05lc3RPYmplY3Qob3V0cHV0KSk7XHJcbn07XG5cbnZhciBpc0Vycm9yU3RhdGVDaGFuZ2VkID0gKHsgZXJyb3JzLCBuYW1lLCBlcnJvciwgdmFsaWRGaWVsZHMsIGZpZWxkc1dpdGhWYWxpZGF0aW9uLCB9KSA9PiB7XHJcbiAgICBjb25zdCBpc1ZhbGlkID0gaXNVbmRlZmluZWQoZXJyb3IpO1xyXG4gICAgY29uc3QgcHJldmlvdXNFcnJvciA9IGdldChlcnJvcnMsIG5hbWUpO1xyXG4gICAgcmV0dXJuICgoaXNWYWxpZCAmJiAhIXByZXZpb3VzRXJyb3IpIHx8XHJcbiAgICAgICAgKCFpc1ZhbGlkICYmICFkZWVwRXF1YWwocHJldmlvdXNFcnJvciwgZXJyb3IsIHRydWUpKSB8fFxyXG4gICAgICAgIChpc1ZhbGlkICYmIGdldChmaWVsZHNXaXRoVmFsaWRhdGlvbiwgbmFtZSkgJiYgIWdldCh2YWxpZEZpZWxkcywgbmFtZSkpKTtcclxufTtcblxudmFyIGlzUmVnZXggPSAodmFsdWUpID0+IHZhbHVlIGluc3RhbmNlb2YgUmVnRXhwO1xuXG52YXIgZ2V0VmFsdWVBbmRNZXNzYWdlID0gKHZhbGlkYXRpb25EYXRhKSA9PiBpc09iamVjdCh2YWxpZGF0aW9uRGF0YSkgJiYgIWlzUmVnZXgodmFsaWRhdGlvbkRhdGEpXHJcbiAgICA/IHZhbGlkYXRpb25EYXRhXHJcbiAgICA6IHtcclxuICAgICAgICB2YWx1ZTogdmFsaWRhdGlvbkRhdGEsXHJcbiAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICB9O1xuXG52YXIgaXNGdW5jdGlvbiA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuXG52YXIgaXNNZXNzYWdlID0gKHZhbHVlKSA9PiBpc1N0cmluZyh2YWx1ZSkgfHwgaXNWYWxpZEVsZW1lbnQodmFsdWUpO1xuXG5mdW5jdGlvbiBnZXRWYWxpZGF0ZUVycm9yKHJlc3VsdCwgcmVmLCB0eXBlID0gJ3ZhbGlkYXRlJykge1xyXG4gICAgaWYgKGlzTWVzc2FnZShyZXN1bHQpIHx8IChpc0Jvb2xlYW4ocmVzdWx0KSAmJiAhcmVzdWx0KSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGlzTWVzc2FnZShyZXN1bHQpID8gcmVzdWx0IDogJycsXHJcbiAgICAgICAgICAgIHJlZixcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XG5cbnZhciBhcHBlbmRFcnJvcnMgPSAobmFtZSwgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBlcnJvcnMsIHR5cGUsIG1lc3NhZ2UpID0+IHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYVxyXG4gICAgPyBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGVycm9yc1tuYW1lXSksIHsgdHlwZXM6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgKGVycm9yc1tuYW1lXSAmJiBlcnJvcnNbbmFtZV0udHlwZXMgPyBlcnJvcnNbbmFtZV0udHlwZXMgOiB7fSkpLCB7IFt0eXBlXTogbWVzc2FnZSB8fCB0cnVlIH0pIH0pIDoge307XG5cbnZhciB2YWxpZGF0ZUZpZWxkID0gYXN5bmMgKGZpZWxkc1JlZiwgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCB7IHJlZiwgcmVmOiB7IHZhbHVlIH0sIG9wdGlvbnMsIHJlcXVpcmVkLCBtYXhMZW5ndGgsIG1pbkxlbmd0aCwgbWluLCBtYXgsIHBhdHRlcm4sIHZhbGlkYXRlLCB9LCBzaGFsbG93RmllbGRzU3RhdGVSZWYpID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSByZWYubmFtZTtcclxuICAgIGNvbnN0IGVycm9yID0ge307XHJcbiAgICBjb25zdCBpc1JhZGlvID0gaXNSYWRpb0lucHV0KHJlZik7XHJcbiAgICBjb25zdCBpc0NoZWNrQm94ID0gaXNDaGVja0JveElucHV0KHJlZik7XHJcbiAgICBjb25zdCBpc1JhZGlvT3JDaGVja2JveCA9IGlzUmFkaW8gfHwgaXNDaGVja0JveDtcclxuICAgIGNvbnN0IGlzRW1wdHkgPSB2YWx1ZSA9PT0gJyc7XHJcbiAgICBjb25zdCBhcHBlbmRFcnJvcnNDdXJyeSA9IGFwcGVuZEVycm9ycy5iaW5kKG51bGwsIG5hbWUsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZXJyb3IpO1xyXG4gICAgY29uc3QgZ2V0TWluTWF4TWVzc2FnZSA9IChleGNlZWRNYXgsIG1heExlbmd0aE1lc3NhZ2UsIG1pbkxlbmd0aE1lc3NhZ2UsIG1heFR5cGUgPSBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLm1heExlbmd0aCwgbWluVHlwZSA9IElOUFVUX1ZBTElEQVRJT05fUlVMRVMubWluTGVuZ3RoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGV4Y2VlZE1heCA/IG1heExlbmd0aE1lc3NhZ2UgOiBtaW5MZW5ndGhNZXNzYWdlO1xyXG4gICAgICAgIGVycm9yW25hbWVdID0gT2JqZWN0LmFzc2lnbih7IHR5cGU6IGV4Y2VlZE1heCA/IG1heFR5cGUgOiBtaW5UeXBlLCBtZXNzYWdlLFxyXG4gICAgICAgICAgICByZWYgfSwgKGV4Y2VlZE1heFxyXG4gICAgICAgICAgICA/IGFwcGVuZEVycm9yc0N1cnJ5KG1heFR5cGUsIG1lc3NhZ2UpXHJcbiAgICAgICAgICAgIDogYXBwZW5kRXJyb3JzQ3VycnkobWluVHlwZSwgbWVzc2FnZSkpKTtcclxuICAgIH07XHJcbiAgICBpZiAocmVxdWlyZWQgJiZcclxuICAgICAgICAoKCFpc1JhZGlvICYmICFpc0NoZWNrQm94ICYmIChpc0VtcHR5IHx8IGlzTnVsbE9yVW5kZWZpbmVkKHZhbHVlKSkpIHx8XHJcbiAgICAgICAgICAgIChpc0Jvb2xlYW4odmFsdWUpICYmICF2YWx1ZSkgfHxcclxuICAgICAgICAgICAgKGlzQ2hlY2tCb3ggJiYgIWdldENoZWNrYm94VmFsdWUob3B0aW9ucykuaXNWYWxpZCkgfHxcclxuICAgICAgICAgICAgKGlzUmFkaW8gJiYgIWdldFJhZGlvVmFsdWUob3B0aW9ucykuaXNWYWxpZCkpKSB7XHJcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgbWVzc2FnZSB9ID0gaXNNZXNzYWdlKHJlcXVpcmVkKVxyXG4gICAgICAgICAgICA/IHsgdmFsdWU6ICEhcmVxdWlyZWQsIG1lc3NhZ2U6IHJlcXVpcmVkIH1cclxuICAgICAgICAgICAgOiBnZXRWYWx1ZUFuZE1lc3NhZ2UocmVxdWlyZWQpO1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBlcnJvcltuYW1lXSA9IE9iamVjdC5hc3NpZ24oeyB0eXBlOiBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLnJlcXVpcmVkLCBtZXNzYWdlLCByZWY6IGlzUmFkaW9PckNoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgPyAoKGZpZWxkc1JlZi5jdXJyZW50W25hbWVdLm9wdGlvbnMgfHwgW10pWzBdIHx8IHt9KS5yZWZcclxuICAgICAgICAgICAgICAgICAgICA6IHJlZiB9LCBhcHBlbmRFcnJvcnNDdXJyeShJTlBVVF9WQUxJREFUSU9OX1JVTEVTLnJlcXVpcmVkLCBtZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoKCFpc051bGxPclVuZGVmaW5lZChtaW4pIHx8ICFpc051bGxPclVuZGVmaW5lZChtYXgpKSAmJiB2YWx1ZSAhPT0gJycpIHtcclxuICAgICAgICBsZXQgZXhjZWVkTWF4O1xyXG4gICAgICAgIGxldCBleGNlZWRNaW47XHJcbiAgICAgICAgY29uc3QgbWF4T3V0cHV0ID0gZ2V0VmFsdWVBbmRNZXNzYWdlKG1heCk7XHJcbiAgICAgICAgY29uc3QgbWluT3V0cHV0ID0gZ2V0VmFsdWVBbmRNZXNzYWdlKG1pbik7XHJcbiAgICAgICAgaWYgKCFpc05hTih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVOdW1iZXIgPSByZWYudmFsdWVBc051bWJlciB8fCBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKCFpc051bGxPclVuZGVmaW5lZChtYXhPdXRwdXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBleGNlZWRNYXggPSB2YWx1ZU51bWJlciA+IG1heE91dHB1dC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKG1pbk91dHB1dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGV4Y2VlZE1pbiA9IHZhbHVlTnVtYmVyIDwgbWluT3V0cHV0LnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZURhdGUgPSByZWYudmFsdWVBc0RhdGUgfHwgbmV3IERhdGUodmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcobWF4T3V0cHV0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZXhjZWVkTWF4ID0gdmFsdWVEYXRlID4gbmV3IERhdGUobWF4T3V0cHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcobWluT3V0cHV0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZXhjZWVkTWluID0gdmFsdWVEYXRlIDwgbmV3IERhdGUobWluT3V0cHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXhjZWVkTWF4IHx8IGV4Y2VlZE1pbikge1xyXG4gICAgICAgICAgICBnZXRNaW5NYXhNZXNzYWdlKCEhZXhjZWVkTWF4LCBtYXhPdXRwdXQubWVzc2FnZSwgbWluT3V0cHV0Lm1lc3NhZ2UsIElOUFVUX1ZBTElEQVRJT05fUlVMRVMubWF4LCBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLm1pbik7XHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoaXNTdHJpbmcodmFsdWUpICYmICFpc0VtcHR5ICYmIChtYXhMZW5ndGggfHwgbWluTGVuZ3RoKSkge1xyXG4gICAgICAgIGNvbnN0IG1heExlbmd0aE91dHB1dCA9IGdldFZhbHVlQW5kTWVzc2FnZShtYXhMZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IG1pbkxlbmd0aE91dHB1dCA9IGdldFZhbHVlQW5kTWVzc2FnZShtaW5MZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IGV4Y2VlZE1heCA9ICFpc051bGxPclVuZGVmaW5lZChtYXhMZW5ndGhPdXRwdXQudmFsdWUpICYmXHJcbiAgICAgICAgICAgIHZhbHVlLmxlbmd0aCA+IG1heExlbmd0aE91dHB1dC52YWx1ZTtcclxuICAgICAgICBjb25zdCBleGNlZWRNaW4gPSAhaXNOdWxsT3JVbmRlZmluZWQobWluTGVuZ3RoT3V0cHV0LnZhbHVlKSAmJlxyXG4gICAgICAgICAgICB2YWx1ZS5sZW5ndGggPCBtaW5MZW5ndGhPdXRwdXQudmFsdWU7XHJcbiAgICAgICAgaWYgKGV4Y2VlZE1heCB8fCBleGNlZWRNaW4pIHtcclxuICAgICAgICAgICAgZ2V0TWluTWF4TWVzc2FnZShleGNlZWRNYXgsIG1heExlbmd0aE91dHB1dC5tZXNzYWdlLCBtaW5MZW5ndGhPdXRwdXQubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoaXNTdHJpbmcodmFsdWUpICYmIHBhdHRlcm4gJiYgIWlzRW1wdHkpIHtcclxuICAgICAgICBjb25zdCB7IHZhbHVlOiBwYXR0ZXJuVmFsdWUsIG1lc3NhZ2UgfSA9IGdldFZhbHVlQW5kTWVzc2FnZShwYXR0ZXJuKTtcclxuICAgICAgICBpZiAoaXNSZWdleChwYXR0ZXJuVmFsdWUpICYmICFwYXR0ZXJuVmFsdWUudGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgZXJyb3JbbmFtZV0gPSBPYmplY3QuYXNzaWduKHsgdHlwZTogSU5QVVRfVkFMSURBVElPTl9SVUxFUy5wYXR0ZXJuLCBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgcmVmIH0sIGFwcGVuZEVycm9yc0N1cnJ5KElOUFVUX1ZBTElEQVRJT05fUlVMRVMucGF0dGVybiwgbWVzc2FnZSkpO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHZhbGlkYXRlKSB7XHJcbiAgICAgICAgY29uc3QgZmllbGRWYWx1ZSA9IGdldEZpZWxkVmFsdWUoZmllbGRzUmVmLCBuYW1lLCBzaGFsbG93RmllbGRzU3RhdGVSZWYsIGZhbHNlLCB0cnVlKTtcclxuICAgICAgICBjb25zdCB2YWxpZGF0ZVJlZiA9IGlzUmFkaW9PckNoZWNrYm94ICYmIG9wdGlvbnMgPyBvcHRpb25zWzBdLnJlZiA6IHJlZjtcclxuICAgICAgICBpZiAoaXNGdW5jdGlvbih2YWxpZGF0ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdmFsaWRhdGUoZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlRXJyb3IgPSBnZXRWYWxpZGF0ZUVycm9yKHJlc3VsdCwgdmFsaWRhdGVSZWYpO1xyXG4gICAgICAgICAgICBpZiAodmFsaWRhdGVFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JbbmFtZV0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHZhbGlkYXRlRXJyb3IpLCBhcHBlbmRFcnJvcnNDdXJyeShJTlBVVF9WQUxJREFUSU9OX1JVTEVTLnZhbGlkYXRlLCB2YWxpZGF0ZUVycm9yLm1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KHZhbGlkYXRlKSkge1xyXG4gICAgICAgICAgICBsZXQgdmFsaWRhdGlvblJlc3VsdCA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbGlkYXRlRnVuY3Rpb25dIG9mIE9iamVjdC5lbnRyaWVzKHZhbGlkYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0VtcHR5T2JqZWN0KHZhbGlkYXRpb25SZXN1bHQpICYmICF2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlUmVzdWx0ID0gYXdhaXQgdmFsaWRhdGVGdW5jdGlvbihmaWVsZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlRXJyb3IgPSBnZXRWYWxpZGF0ZUVycm9yKHZhbGlkYXRlUmVzdWx0LCB2YWxpZGF0ZVJlZiwga2V5KTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdmFsaWRhdGVFcnJvciksIGFwcGVuZEVycm9yc0N1cnJ5KGtleSwgdmFsaWRhdGVFcnJvci5tZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcltuYW1lXSA9IHZhbGlkYXRpb25SZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXNFbXB0eU9iamVjdCh2YWxpZGF0aW9uUmVzdWx0KSkge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JbbmFtZV0gPSBPYmplY3QuYXNzaWduKHsgcmVmOiB2YWxpZGF0ZVJlZiB9LCB2YWxpZGF0aW9uUmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9yO1xyXG59O1xuXG5jb25zdCBnZXRQYXRoID0gKHJvb3RQYXRoLCB2YWx1ZXMsIHBhdGhzID0gW10pID0+IHtcclxuICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdmFsdWVzKSB7XHJcbiAgICAgICAgY29uc3Qgcm9vdE5hbWUgPSAocm9vdFBhdGggK1xyXG4gICAgICAgICAgICAoaXNPYmplY3QodmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgPyBgLiR7cHJvcGVydHl9YFxyXG4gICAgICAgICAgICAgICAgOiBgWyR7cHJvcGVydHl9XWApKTtcclxuICAgICAgICBpc1ByaW1pdGl2ZSh2YWx1ZXNbcHJvcGVydHldKVxyXG4gICAgICAgICAgICA/IHBhdGhzLnB1c2gocm9vdE5hbWUpXHJcbiAgICAgICAgICAgIDogZ2V0UGF0aChyb290TmFtZSwgdmFsdWVzW3Byb3BlcnR5XSwgcGF0aHMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhdGhzO1xyXG59O1xuXG52YXIgYXNzaWduV2F0Y2hGaWVsZHMgPSAoZmllbGRWYWx1ZXMsIGZpZWxkTmFtZSwgd2F0Y2hGaWVsZHMsIGlucHV0VmFsdWUsIGlzU2luZ2xlRmllbGQpID0+IHtcclxuICAgIGxldCB2YWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgIHdhdGNoRmllbGRzLmFkZChmaWVsZE5hbWUpO1xyXG4gICAgaWYgKCFpc0VtcHR5T2JqZWN0KGZpZWxkVmFsdWVzKSkge1xyXG4gICAgICAgIHZhbHVlID0gZ2V0KGZpZWxkVmFsdWVzLCBmaWVsZE5hbWUpO1xyXG4gICAgICAgIGlmIChpc09iamVjdCh2YWx1ZSkgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgZ2V0UGF0aChmaWVsZE5hbWUsIHZhbHVlKS5mb3JFYWNoKChuYW1lKSA9PiB3YXRjaEZpZWxkcy5hZGQobmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBpc1VuZGVmaW5lZCh2YWx1ZSlcclxuICAgICAgICA/IGlzU2luZ2xlRmllbGRcclxuICAgICAgICAgICAgPyBpbnB1dFZhbHVlXHJcbiAgICAgICAgICAgIDogZ2V0KGlucHV0VmFsdWUsIGZpZWxkTmFtZSlcclxuICAgICAgICA6IHZhbHVlO1xyXG59O1xuXG52YXIgc2tpcFZhbGlkYXRpb24gPSAoeyBpc09uQmx1ciwgaXNPbkNoYW5nZSwgaXNPblRvdWNoLCBpc1RvdWNoZWQsIGlzUmVWYWxpZGF0ZU9uQmx1ciwgaXNSZVZhbGlkYXRlT25DaGFuZ2UsIGlzQmx1ckV2ZW50LCBpc1N1Ym1pdHRlZCwgaXNPbkFsbCwgfSkgPT4ge1xyXG4gICAgaWYgKGlzT25BbGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghaXNTdWJtaXR0ZWQgJiYgaXNPblRvdWNoKSB7XHJcbiAgICAgICAgcmV0dXJuICEoaXNUb3VjaGVkIHx8IGlzQmx1ckV2ZW50KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzU3VibWl0dGVkID8gaXNSZVZhbGlkYXRlT25CbHVyIDogaXNPbkJsdXIpIHtcclxuICAgICAgICByZXR1cm4gIWlzQmx1ckV2ZW50O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNTdWJtaXR0ZWQgPyBpc1JlVmFsaWRhdGVPbkNoYW5nZSA6IGlzT25DaGFuZ2UpIHtcclxuICAgICAgICByZXR1cm4gaXNCbHVyRXZlbnQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufTtcblxudmFyIGdldEZpZWxkQXJyYXlQYXJlbnROYW1lID0gKG5hbWUpID0+IG5hbWUuc3Vic3RyaW5nKDAsIG5hbWUuaW5kZXhPZignWycpKTtcblxuY29uc3QgaXNNYXRjaEZpZWxkQXJyYXlOYW1lID0gKG5hbWUsIHNlYXJjaE5hbWUpID0+IFJlZ0V4cChgXiR7c2VhcmNoTmFtZX0oW3wuKVxcXFxkK2AucmVwbGFjZSgvXFxbL2csICdcXFxcWycpLnJlcGxhY2UoL1xcXS9nLCAnXFxcXF0nKSkudGVzdChuYW1lKTtcclxudmFyIGlzTmFtZUluRmllbGRBcnJheSA9IChuYW1lcywgbmFtZSkgPT4gWy4uLm5hbWVzXS5zb21lKChjdXJyZW50KSA9PiBpc01hdGNoRmllbGRBcnJheU5hbWUobmFtZSwgY3VycmVudCkpO1xuXG52YXIgaXNTZWxlY3RJbnB1dCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09IGAke1NFTEVDVH0tb25lYDtcblxuZnVuY3Rpb24gb25Eb21SZW1vdmUoZmllbGRzUmVmLCByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXJBbmRSZWYpIHtcclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgT2JqZWN0LnZhbHVlcyhmaWVsZHNSZWYuY3VycmVudCkpIHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkICYmIGZpZWxkLm9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIGZpZWxkLm9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5yZWYgJiYgaXNEZXRhY2hlZChvcHRpb24ucmVmKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXJBbmRSZWYoZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChmaWVsZCAmJiBpc0RldGFjaGVkKGZpZWxkLnJlZikpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lckFuZFJlZihmaWVsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIG9ic2VydmVyLm9ic2VydmUod2luZG93LmRvY3VtZW50LCB7XHJcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvYnNlcnZlcjtcclxufVxuXG52YXIgaXNXZWIgPSB0eXBlb2Ygd2luZG93ICE9PSBVTkRFRklORUQgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSBVTkRFRklORUQ7XG5cbmZ1bmN0aW9uIGNsb25lT2JqZWN0KGRhdGEpIHtcclxuICAgIGxldCBjb3B5O1xyXG4gICAgaWYgKGlzUHJpbWl0aXZlKGRhdGEpIHx8XHJcbiAgICAgICAgKGlzV2ViICYmIChkYXRhIGluc3RhbmNlb2YgRmlsZSB8fCBpc0hUTUxFbGVtZW50KGRhdGEpKSkpIHtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgIGNvcHkgPSBuZXcgRGF0ZShkYXRhLmdldFRpbWUoKSk7XHJcbiAgICAgICAgcmV0dXJuIGNvcHk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIFNldCkge1xyXG4gICAgICAgIGNvcHkgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgY29weS5hZGQoaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb3B5O1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBNYXApIHtcclxuICAgICAgICBjb3B5ID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGRhdGEua2V5cygpKSB7XHJcbiAgICAgICAgICAgIGNvcHkuc2V0KGtleSwgY2xvbmVPYmplY3QoZGF0YS5nZXQoa2V5KSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29weTtcclxuICAgIH1cclxuICAgIGNvcHkgPSBBcnJheS5pc0FycmF5KGRhdGEpID8gW10gOiB7fTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgICAgICBjb3B5W2tleV0gPSBjbG9uZU9iamVjdChkYXRhW2tleV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvcHk7XHJcbn1cblxudmFyIG1vZGVDaGVja2VyID0gKG1vZGUpID0+ICh7XHJcbiAgICBpc09uU3VibWl0OiAhbW9kZSB8fCBtb2RlID09PSBWQUxJREFUSU9OX01PREUub25TdWJtaXQsXHJcbiAgICBpc09uQmx1cjogbW9kZSA9PT0gVkFMSURBVElPTl9NT0RFLm9uQmx1cixcclxuICAgIGlzT25DaGFuZ2U6IG1vZGUgPT09IFZBTElEQVRJT05fTU9ERS5vbkNoYW5nZSxcclxuICAgIGlzT25BbGw6IG1vZGUgPT09IFZBTElEQVRJT05fTU9ERS5hbGwsXHJcbiAgICBpc09uVG91Y2g6IG1vZGUgPT09IFZBTElEQVRJT05fTU9ERS5vblRvdWNoZWQsXHJcbn0pO1xuXG52YXIgaXNSYWRpb09yQ2hlY2tib3hGdW5jdGlvbiA9IChyZWYpID0+IGlzUmFkaW9JbnB1dChyZWYpIHx8IGlzQ2hlY2tCb3hJbnB1dChyZWYpO1xuXG5jb25zdCBpc1dpbmRvd1VuZGVmaW5lZCA9IHR5cGVvZiB3aW5kb3cgPT09IFVOREVGSU5FRDtcclxuY29uc3QgaXNQcm94eUVuYWJsZWQgPSBpc1dlYiA/ICdQcm94eScgaW4gd2luZG93IDogdHlwZW9mIFByb3h5ICE9PSBVTkRFRklORUQ7XHJcbmZ1bmN0aW9uIHVzZUZvcm0oeyBtb2RlID0gVkFMSURBVElPTl9NT0RFLm9uU3VibWl0LCByZVZhbGlkYXRlTW9kZSA9IFZBTElEQVRJT05fTU9ERS5vbkNoYW5nZSwgcmVzb2x2ZXIsIGNvbnRleHQsIGRlZmF1bHRWYWx1ZXMgPSB7fSwgc2hvdWxkRm9jdXNFcnJvciA9IHRydWUsIHNob3VsZFVucmVnaXN0ZXIgPSB0cnVlLCBjcml0ZXJpYU1vZGUsIH0gPSB7fSkge1xyXG4gICAgY29uc3QgZmllbGRzUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IGZpZWxkQXJyYXlWYWx1ZXNSZWYgPSB1c2VSZWYoe30pO1xyXG4gICAgY29uc3Qgd2F0Y2hGaWVsZHNSZWYgPSB1c2VSZWYobmV3IFNldCgpKTtcclxuICAgIGNvbnN0IHVzZVdhdGNoRmllbGRzUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IHVzZVdhdGNoUmVuZGVyRnVuY3Rpb25zUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IHZhbGlkRmllbGRzUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IGRlZmF1bHRWYWx1ZXNSZWYgPSB1c2VSZWYoZGVmYXVsdFZhbHVlcyk7XHJcbiAgICBjb25zdCBpc1VuTW91bnQgPSB1c2VSZWYoZmFsc2UpO1xyXG4gICAgY29uc3QgaXNXYXRjaEFsbFJlZiA9IHVzZVJlZihmYWxzZSk7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IHNoYWxsb3dGaWVsZHNTdGF0ZVJlZiA9IHVzZVJlZih7fSk7XHJcbiAgICBjb25zdCByZXNldEZpZWxkQXJyYXlGdW5jdGlvblJlZiA9IHVzZVJlZih7fSk7XHJcbiAgICBjb25zdCBjb250ZXh0UmVmID0gdXNlUmVmKGNvbnRleHQpO1xyXG4gICAgY29uc3QgcmVzb2x2ZXJSZWYgPSB1c2VSZWYocmVzb2x2ZXIpO1xyXG4gICAgY29uc3QgZmllbGRBcnJheU5hbWVzUmVmID0gdXNlUmVmKG5ldyBTZXQoKSk7XHJcbiAgICBjb25zdCBtb2RlUmVmID0gdXNlUmVmKG1vZGVDaGVja2VyKG1vZGUpKTtcclxuICAgIGNvbnN0IHsgaXNPblN1Ym1pdCwgaXNPblRvdWNoIH0gPSBtb2RlUmVmLmN1cnJlbnQ7XHJcbiAgICBjb25zdCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSA9IGNyaXRlcmlhTW9kZSA9PT0gVkFMSURBVElPTl9NT0RFLmFsbDtcclxuICAgIGNvbnN0IFtmb3JtU3RhdGUsIHNldEZvcm1TdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgaXNEaXJ0eTogZmFsc2UsXHJcbiAgICAgICAgaXNWYWxpZGF0aW5nOiBmYWxzZSxcclxuICAgICAgICBkaXJ0eUZpZWxkczoge30sXHJcbiAgICAgICAgaXNTdWJtaXR0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIHN1Ym1pdENvdW50OiAwLFxyXG4gICAgICAgIHRvdWNoZWQ6IHt9LFxyXG4gICAgICAgIGlzU3VibWl0dGluZzogZmFsc2UsXHJcbiAgICAgICAgaXNTdWJtaXRTdWNjZXNzZnVsOiBmYWxzZSxcclxuICAgICAgICBpc1ZhbGlkOiAhaXNPblN1Ym1pdCxcclxuICAgICAgICBlcnJvcnM6IHt9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZWFkRm9ybVN0YXRlUmVmID0gdXNlUmVmKHtcclxuICAgICAgICBpc0RpcnR5OiAhaXNQcm94eUVuYWJsZWQsXHJcbiAgICAgICAgZGlydHlGaWVsZHM6ICFpc1Byb3h5RW5hYmxlZCxcclxuICAgICAgICB0b3VjaGVkOiAhaXNQcm94eUVuYWJsZWQgfHwgaXNPblRvdWNoLFxyXG4gICAgICAgIGlzVmFsaWRhdGluZzogIWlzUHJveHlFbmFibGVkLFxyXG4gICAgICAgIGlzU3VibWl0dGluZzogIWlzUHJveHlFbmFibGVkLFxyXG4gICAgICAgIGlzVmFsaWQ6ICFpc1Byb3h5RW5hYmxlZCxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZm9ybVN0YXRlUmVmID0gdXNlUmVmKGZvcm1TdGF0ZSk7XHJcbiAgICBjb25zdCBvYnNlcnZlclJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgeyBpc09uQmx1cjogaXNSZVZhbGlkYXRlT25CbHVyLCBpc09uQ2hhbmdlOiBpc1JlVmFsaWRhdGVPbkNoYW5nZSwgfSA9IHVzZVJlZihtb2RlQ2hlY2tlcihyZVZhbGlkYXRlTW9kZSkpLmN1cnJlbnQ7XHJcbiAgICBjb250ZXh0UmVmLmN1cnJlbnQgPSBjb250ZXh0O1xyXG4gICAgcmVzb2x2ZXJSZWYuY3VycmVudCA9IHJlc29sdmVyO1xyXG4gICAgZm9ybVN0YXRlUmVmLmN1cnJlbnQgPSBmb3JtU3RhdGU7XHJcbiAgICBzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCA9IHNob3VsZFVucmVnaXN0ZXJcclxuICAgICAgICA/IHt9XHJcbiAgICAgICAgOiBpc0VtcHR5T2JqZWN0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50KVxyXG4gICAgICAgICAgICA/IGNsb25lT2JqZWN0KGRlZmF1bHRWYWx1ZXMpXHJcbiAgICAgICAgICAgIDogc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQ7XHJcbiAgICBjb25zdCB1cGRhdGVGb3JtU3RhdGUgPSB1c2VDYWxsYmFjaygoc3RhdGUgPSB7fSkgPT4ge1xyXG4gICAgICAgIGlmICghaXNVbk1vdW50LmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgZm9ybVN0YXRlUmVmLmN1cnJlbnQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZvcm1TdGF0ZVJlZi5jdXJyZW50KSwgc3RhdGUpO1xyXG4gICAgICAgICAgICBzZXRGb3JtU3RhdGUoZm9ybVN0YXRlUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHVwZGF0ZUlzVmFsaWRhdGluZyA9ICgpID0+IHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkYXRpbmcgJiZcclxuICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICBjb25zdCBzaG91bGRSZW5kZXJCYXNlT25FcnJvciA9IHVzZUNhbGxiYWNrKChuYW1lLCBlcnJvciwgc2hvdWxkUmVuZGVyID0gZmFsc2UsIHN0YXRlID0ge30sIGlzVmFsaWQpID0+IHtcclxuICAgICAgICBsZXQgc2hvdWxkUmVSZW5kZXIgPSBzaG91bGRSZW5kZXIgfHxcclxuICAgICAgICAgICAgaXNFcnJvclN0YXRlQ2hhbmdlZCh7XHJcbiAgICAgICAgICAgICAgICBlcnJvcnM6IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycyxcclxuICAgICAgICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIHZhbGlkRmllbGRzOiB2YWxpZEZpZWxkc1JlZi5jdXJyZW50LFxyXG4gICAgICAgICAgICAgICAgZmllbGRzV2l0aFZhbGlkYXRpb246IGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzRXJyb3IgPSBnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lKTtcclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdW5zZXQodmFsaWRGaWVsZHNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgICAgIHNob3VsZFJlUmVuZGVyID1cclxuICAgICAgICAgICAgICAgIHNob3VsZFJlUmVuZGVyIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgIXByZXZpb3VzRXJyb3IgfHxcclxuICAgICAgICAgICAgICAgICAgICAhZGVlcEVxdWFsKHByZXZpb3VzRXJyb3IsIGVycm9yLCB0cnVlKTtcclxuICAgICAgICAgICAgc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgbmFtZSwgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGdldChmaWVsZHNXaXRoVmFsaWRhdGlvblJlZi5jdXJyZW50LCBuYW1lKSB8fCByZXNvbHZlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzZXQodmFsaWRGaWVsZHNSZWYuY3VycmVudCwgbmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBzaG91bGRSZVJlbmRlciA9IHNob3VsZFJlUmVuZGVyIHx8IHByZXZpb3VzRXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdW5zZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChzaG91bGRSZVJlbmRlciAmJiAhaXNOdWxsT3JVbmRlZmluZWQoc2hvdWxkUmVuZGVyKSkgfHxcclxuICAgICAgICAgICAgIWlzRW1wdHlPYmplY3Qoc3RhdGUpIHx8XHJcbiAgICAgICAgICAgIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkYXRpbmcpIHtcclxuICAgICAgICAgICAgdXBkYXRlRm9ybVN0YXRlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSksIChyZXNvbHZlclJlZi5jdXJyZW50ID8geyBpc1ZhbGlkOiAhIWlzVmFsaWQgfSA6IHt9KSksIHsgaXNWYWxpZGF0aW5nOiBmYWxzZSB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3Qgc2V0RmllbGRWYWx1ZSA9IHVzZUNhbGxiYWNrKChuYW1lLCByYXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgcmVmLCBvcHRpb25zIH0gPSBmaWVsZHNSZWYuY3VycmVudFtuYW1lXTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGlzV2ViICYmIGlzSFRNTEVsZW1lbnQocmVmKSAmJiBpc051bGxPclVuZGVmaW5lZChyYXdWYWx1ZSlcclxuICAgICAgICAgICAgPyAnJ1xyXG4gICAgICAgICAgICA6IHJhd1ZhbHVlO1xyXG4gICAgICAgIGlmIChpc1JhZGlvSW5wdXQocmVmKSkge1xyXG4gICAgICAgICAgICAob3B0aW9ucyB8fCBbXSkuZm9yRWFjaCgoeyByZWY6IHJhZGlvUmVmIH0pID0+IChyYWRpb1JlZi5jaGVja2VkID0gcmFkaW9SZWYudmFsdWUgPT09IHZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzRmlsZUlucHV0KHJlZikgJiYgIWlzU3RyaW5nKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZWYuZmlsZXMgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNNdWx0aXBsZVNlbGVjdChyZWYpKSB7XHJcbiAgICAgICAgICAgIFsuLi5yZWYub3B0aW9uc10uZm9yRWFjaCgoc2VsZWN0UmVmKSA9PiAoc2VsZWN0UmVmLnNlbGVjdGVkID0gdmFsdWUuaW5jbHVkZXMoc2VsZWN0UmVmLnZhbHVlKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc0NoZWNrQm94SW5wdXQocmVmKSAmJiBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMubGVuZ3RoID4gMVxyXG4gICAgICAgICAgICAgICAgPyBvcHRpb25zLmZvckVhY2goKHsgcmVmOiBjaGVja2JveFJlZiB9KSA9PiAoY2hlY2tib3hSZWYuY2hlY2tlZCA9IEFycmF5LmlzQXJyYXkodmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgPyAhIXZhbHVlLmZpbmQoKGRhdGEpID0+IGRhdGEgPT09IGNoZWNrYm94UmVmLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIDogdmFsdWUgPT09IGNoZWNrYm94UmVmLnZhbHVlKSlcclxuICAgICAgICAgICAgICAgIDogKG9wdGlvbnNbMF0ucmVmLmNoZWNrZWQgPSAhIXZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlZi52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGlzRm9ybURpcnR5ID0gdXNlQ2FsbGJhY2soKG5hbWUsIGRhdGEpID0+IHtcclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzRGlydHkpIHtcclxuICAgICAgICAgICAgY29uc3QgZm9ybVZhbHVlcyA9IGdldFZhbHVlcygpO1xyXG4gICAgICAgICAgICBuYW1lICYmIGRhdGEgJiYgc2V0KGZvcm1WYWx1ZXMsIG5hbWUsIGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gIWRlZXBFcXVhbChmb3JtVmFsdWVzLCBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCB1cGRhdGVBbmRHZXREaXJ0eVN0YXRlID0gdXNlQ2FsbGJhY2soKG5hbWUsIHNob3VsZFJlbmRlciA9IHRydWUpID0+IHtcclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzRGlydHkgfHxcclxuICAgICAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzRmllbGREaXJ0eSA9ICFkZWVwRXF1YWwoZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSksIGdldEZpZWxkVmFsdWUoZmllbGRzUmVmLCBuYW1lLCBzaGFsbG93RmllbGRzU3RhdGVSZWYpKTtcclxuICAgICAgICAgICAgY29uc3QgaXNEaXJ0eUZpZWxkRXhpc3QgPSBnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0lzRGlydHkgPSBmb3JtU3RhdGVSZWYuY3VycmVudC5pc0RpcnR5O1xyXG4gICAgICAgICAgICBpc0ZpZWxkRGlydHlcclxuICAgICAgICAgICAgICAgID8gc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLCBuYW1lLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgOiB1bnNldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgaXNEaXJ0eTogaXNGb3JtRGlydHkoKSxcclxuICAgICAgICAgICAgICAgIGRpcnR5RmllbGRzOiBmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgaXNDaGFuZ2VkID0gKHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc0RpcnR5ICYmXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c0lzRGlydHkgIT09IHN0YXRlLmlzRGlydHkpIHx8XHJcbiAgICAgICAgICAgICAgICAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgaXNEaXJ0eUZpZWxkRXhpc3QgIT09IGdldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSkpO1xyXG4gICAgICAgICAgICBpc0NoYW5nZWQgJiYgc2hvdWxkUmVuZGVyICYmIHVwZGF0ZUZvcm1TdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBpc0NoYW5nZWQgPyBzdGF0ZSA6IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBleGVjdXRlVmFsaWRhdGlvbiA9IHVzZUNhbGxiYWNrKGFzeW5jIChuYW1lLCBza2lwUmVSZW5kZXIpID0+IHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICBpZiAoIWZpZWxkc1JlZi5jdXJyZW50W25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ/Cfk4sgRmllbGQgaXMgbWlzc2luZyB3aXRoIGBuYW1lYCBhdHRyaWJ1dGU6ICcsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGVycm9yID0gKGF3YWl0IHZhbGlkYXRlRmllbGQoZmllbGRzUmVmLCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZmllbGRzUmVmLmN1cnJlbnRbbmFtZV0sIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZikpW25hbWVdO1xyXG4gICAgICAgIHNob3VsZFJlbmRlckJhc2VPbkVycm9yKG5hbWUsIGVycm9yLCBza2lwUmVSZW5kZXIpO1xyXG4gICAgICAgIHJldHVybiBpc1VuZGVmaW5lZChlcnJvcik7XHJcbiAgICB9LCBbc2hvdWxkUmVuZGVyQmFzZU9uRXJyb3IsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhXSk7XHJcbiAgICBjb25zdCBleGVjdXRlU2NoZW1hT3JSZXNvbHZlclZhbGlkYXRpb24gPSB1c2VDYWxsYmFjayhhc3luYyAobmFtZXMpID0+IHtcclxuICAgICAgICBjb25zdCB7IGVycm9ycyB9ID0gYXdhaXQgcmVzb2x2ZXJSZWYuY3VycmVudChnZXRWYWx1ZXMoKSwgY29udGV4dFJlZi5jdXJyZW50LCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSk7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNGb3JtSXNWYWxpZCA9IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQ7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobmFtZXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzSW5wdXRzVmFsaWQgPSBuYW1lc1xyXG4gICAgICAgICAgICAgICAgLm1hcCgobmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBnZXQoZXJyb3JzLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgPyBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lLCBlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICA6IHVuc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIWVycm9yO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmV2ZXJ5KEJvb2xlYW4pO1xyXG4gICAgICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNWYWxpZDogaXNFbXB0eU9iamVjdChlcnJvcnMpLFxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZGF0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBpc0lucHV0c1ZhbGlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBnZXQoZXJyb3JzLCBuYW1lcyk7XHJcbiAgICAgICAgICAgIHNob3VsZFJlbmRlckJhc2VPbkVycm9yKG5hbWVzLCBlcnJvciwgcHJldmlvdXNGb3JtSXNWYWxpZCAhPT0gaXNFbXB0eU9iamVjdChlcnJvcnMpLCB7fSwgaXNFbXB0eU9iamVjdChlcnJvcnMpKTtcclxuICAgICAgICAgICAgcmV0dXJuICFlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICB9LCBbc2hvdWxkUmVuZGVyQmFzZU9uRXJyb3IsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhXSk7XHJcbiAgICBjb25zdCB0cmlnZ2VyID0gdXNlQ2FsbGJhY2soYXN5bmMgKG5hbWUpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZHMgPSBuYW1lIHx8IE9iamVjdC5rZXlzKGZpZWxkc1JlZi5jdXJyZW50KTtcclxuICAgICAgICB1cGRhdGVJc1ZhbGlkYXRpbmcoKTtcclxuICAgICAgICBpZiAocmVzb2x2ZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXhlY3V0ZVNjaGVtYU9yUmVzb2x2ZXJWYWxpZGF0aW9uKGZpZWxkcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpZWxkcykpIHtcclxuICAgICAgICAgICAgIW5hbWUgJiYgKGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycyA9IHt9KTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5hbGwoZmllbGRzLm1hcChhc3luYyAoZGF0YSkgPT4gYXdhaXQgZXhlY3V0ZVZhbGlkYXRpb24oZGF0YSwgbnVsbCkpKTtcclxuICAgICAgICAgICAgdXBkYXRlRm9ybVN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzVmFsaWRhdGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmV2ZXJ5KEJvb2xlYW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXdhaXQgZXhlY3V0ZVZhbGlkYXRpb24oZmllbGRzKTtcclxuICAgIH0sIFtleGVjdXRlU2NoZW1hT3JSZXNvbHZlclZhbGlkYXRpb24sIGV4ZWN1dGVWYWxpZGF0aW9uXSk7XHJcbiAgICBjb25zdCBzZXRJbnRlcm5hbFZhbHVlcyA9IHVzZUNhbGxiYWNrKChuYW1lLCB2YWx1ZSwgeyBzaG91bGREaXJ0eSwgc2hvdWxkVmFsaWRhdGUgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7fTtcclxuICAgICAgICBzZXQoZGF0YSwgbmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIGZvciAoY29uc3QgZmllbGROYW1lIG9mIGdldFBhdGgobmFtZSwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZHNSZWYuY3VycmVudFtmaWVsZE5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlKGZpZWxkTmFtZSwgZ2V0KGRhdGEsIGZpZWxkTmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgc2hvdWxkRGlydHkgJiYgdXBkYXRlQW5kR2V0RGlydHlTdGF0ZShmaWVsZE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgc2hvdWxkVmFsaWRhdGUgJiYgdHJpZ2dlcihmaWVsZE5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3RyaWdnZXIsIHNldEZpZWxkVmFsdWUsIHVwZGF0ZUFuZEdldERpcnR5U3RhdGVdKTtcclxuICAgIGNvbnN0IHNldEludGVybmFsVmFsdWUgPSB1c2VDYWxsYmFjaygobmFtZSwgdmFsdWUsIGNvbmZpZykgPT4ge1xyXG4gICAgICAgICFzaG91bGRVbnJlZ2lzdGVyICYmXHJcbiAgICAgICAgICAgICFpc1ByaW1pdGl2ZSh2YWx1ZSkgJiZcclxuICAgICAgICAgICAgc2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lLCBPYmplY3QuYXNzaWduKHt9LCB2YWx1ZSkpO1xyXG4gICAgICAgIGlmIChmaWVsZHNSZWYuY3VycmVudFtuYW1lXSkge1xyXG4gICAgICAgICAgICBzZXRGaWVsZFZhbHVlKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgY29uZmlnLnNob3VsZERpcnR5ICYmIHVwZGF0ZUFuZEdldERpcnR5U3RhdGUobmFtZSk7XHJcbiAgICAgICAgICAgIGNvbmZpZy5zaG91bGRWYWxpZGF0ZSAmJiB0cmlnZ2VyKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghaXNQcmltaXRpdmUodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHNldEludGVybmFsVmFsdWVzKG5hbWUsIHZhbHVlLCBjb25maWcpO1xyXG4gICAgICAgICAgICBpZiAoZmllbGRBcnJheU5hbWVzUmVmLmN1cnJlbnQuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnROYW1lID0gZ2V0RmllbGRBcnJheVBhcmVudE5hbWUobmFtZSkgfHwgbmFtZTtcclxuICAgICAgICAgICAgICAgIHNldChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXNldEZpZWxkQXJyYXlGdW5jdGlvblJlZi5jdXJyZW50W3BhcmVudE5hbWVdKHtcclxuICAgICAgICAgICAgICAgICAgICBbcGFyZW50TmFtZV06IGdldChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBwYXJlbnROYW1lKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNEaXJ0eSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcykgJiZcclxuICAgICAgICAgICAgICAgICAgICBjb25maWcuc2hvdWxkRGlydHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsIG5hbWUsIHNldEZpZWxkQXJyYXlEaXJ0eUZpZWxkcyh2YWx1ZSwgZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSwgW10pLCBnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsIG5hbWUsIFtdKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlydHk6ICFkZWVwRXF1YWwoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBnZXRWYWx1ZXMoKSksIHsgW25hbWVdOiB2YWx1ZSB9KSwgZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50KSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAhc2hvdWxkVW5yZWdpc3RlciAmJiBzZXQoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUsIHZhbHVlKTtcclxuICAgIH0sIFt1cGRhdGVBbmRHZXREaXJ0eVN0YXRlLCBzZXRGaWVsZFZhbHVlLCBzZXRJbnRlcm5hbFZhbHVlc10pO1xyXG4gICAgY29uc3QgaXNGaWVsZFdhdGNoZWQgPSAobmFtZSkgPT4gaXNXYXRjaEFsbFJlZi5jdXJyZW50IHx8XHJcbiAgICAgICAgd2F0Y2hGaWVsZHNSZWYuY3VycmVudC5oYXMobmFtZSkgfHxcclxuICAgICAgICB3YXRjaEZpZWxkc1JlZi5jdXJyZW50LmhhcygobmFtZS5tYXRjaCgvXFx3Ky8pIHx8IFtdKVswXSk7XHJcbiAgICBjb25zdCByZW5kZXJXYXRjaGVkSW5wdXRzID0gKG5hbWUpID0+IHtcclxuICAgICAgICBsZXQgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgIGlmICghaXNFbXB0eU9iamVjdCh1c2VXYXRjaEZpZWxkc1JlZi5jdXJyZW50KSkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB1c2VXYXRjaEZpZWxkc1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW5hbWUgfHxcclxuICAgICAgICAgICAgICAgICAgICAhdXNlV2F0Y2hGaWVsZHNSZWYuY3VycmVudFtrZXldLnNpemUgfHxcclxuICAgICAgICAgICAgICAgICAgICB1c2VXYXRjaEZpZWxkc1JlZi5jdXJyZW50W2tleV0uaGFzKG5hbWUpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlV2F0Y2hGaWVsZHNSZWYuY3VycmVudFtrZXldLmhhcyhnZXRGaWVsZEFycmF5UGFyZW50TmFtZShuYW1lKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VXYXRjaFJlbmRlckZ1bmN0aW9uc1JlZi5jdXJyZW50W2tleV0oKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb3VuZDtcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBzZXRWYWx1ZShuYW1lLCB2YWx1ZSwgY29uZmlnKSB7XHJcbiAgICAgICAgc2V0SW50ZXJuYWxWYWx1ZShuYW1lLCB2YWx1ZSwgY29uZmlnIHx8IHt9KTtcclxuICAgICAgICBpc0ZpZWxkV2F0Y2hlZChuYW1lKSAmJiB1cGRhdGVGb3JtU3RhdGUoKTtcclxuICAgICAgICByZW5kZXJXYXRjaGVkSW5wdXRzKG5hbWUpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlQ2hhbmdlUmVmLmN1cnJlbnQgPSBoYW5kbGVDaGFuZ2VSZWYuY3VycmVudFxyXG4gICAgICAgID8gaGFuZGxlQ2hhbmdlUmVmLmN1cnJlbnRcclxuICAgICAgICA6IGFzeW5jICh7IHR5cGUsIHRhcmdldCB9KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gdGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzUmVmLmN1cnJlbnRbbmFtZV07XHJcbiAgICAgICAgICAgIGxldCBlcnJvcjtcclxuICAgICAgICAgICAgbGV0IGlzVmFsaWQ7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNCbHVyRXZlbnQgPSB0eXBlID09PSBFVkVOVFMuQkxVUjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNob3VsZFNraXBWYWxpZGF0aW9uID0gc2tpcFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7IGlzQmx1ckV2ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVWYWxpZGF0ZU9uQ2hhbmdlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVWYWxpZGF0ZU9uQmx1ciwgaXNUb3VjaGVkOiAhIWdldChmb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkLCBuYW1lKSwgaXNTdWJtaXR0ZWQ6IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzU3VibWl0dGVkIH0sIG1vZGVSZWYuY3VycmVudCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXRlID0gdXBkYXRlQW5kR2V0RGlydHlTdGF0ZShuYW1lLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2hvdWxkUmVuZGVyID0gIWlzRW1wdHlPYmplY3Qoc3RhdGUpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKCFpc0JsdXJFdmVudCAmJiBpc0ZpZWxkV2F0Y2hlZChuYW1lKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNCbHVyRXZlbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICAhZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQsIG5hbWUpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCwgbmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgeyB0b3VjaGVkOiBmb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFzaG91bGRVbnJlZ2lzdGVyICYmIGlzQ2hlY2tCb3hJbnB1dCh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lLCBnZXRGaWVsZFZhbHVlKGZpZWxkc1JlZiwgbmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFNraXBWYWxpZGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIWlzQmx1ckV2ZW50ICYmIHJlbmRlcldhdGNoZWRJbnB1dHMobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgoIWlzRW1wdHlPYmplY3Qoc3RhdGUpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzaG91bGRSZW5kZXIgJiYgaXNFbXB0eU9iamVjdChzdGF0ZSkpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtU3RhdGUoc3RhdGUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVwZGF0ZUlzVmFsaWRhdGluZygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc29sdmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9ycyB9ID0gYXdhaXQgcmVzb2x2ZXJSZWYuY3VycmVudChnZXRWYWx1ZXMoKSwgY29udGV4dFJlZi5jdXJyZW50LCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNGb3JtSXNWYWxpZCA9IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBnZXQoZXJyb3JzLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDaGVja0JveElucHV0KHRhcmdldCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWVycm9yICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Tm9kZU5hbWUgPSBnZXRGaWVsZEFycmF5UGFyZW50TmFtZShuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEVycm9yID0gZ2V0KGVycm9ycywgcGFyZW50Tm9kZU5hbWUsIHt9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVycm9yLnR5cGUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFcnJvci5tZXNzYWdlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IgPSBjdXJyZW50RXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50Tm9kZU5hbWUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjdXJyZW50RXJyb3IgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBwYXJlbnROb2RlTmFtZSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gcGFyZW50Tm9kZU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZCA9IGlzRW1wdHlPYmplY3QoZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0Zvcm1Jc1ZhbGlkICE9PSBpc1ZhbGlkICYmIChzaG91bGRSZW5kZXIgPSB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gKGF3YWl0IHZhbGlkYXRlRmllbGQoZmllbGRzUmVmLCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZmllbGQsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZikpW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIWlzQmx1ckV2ZW50ICYmIHJlbmRlcldhdGNoZWRJbnB1dHMobmFtZSk7XHJcbiAgICAgICAgICAgICAgICBzaG91bGRSZW5kZXJCYXNlT25FcnJvcihuYW1lLCBlcnJvciwgc2hvdWxkUmVuZGVyLCBzdGF0ZSwgaXNWYWxpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgZnVuY3Rpb24gc2V0RmllbGRBcnJheURlZmF1bHRWYWx1ZXMoZGF0YSkge1xyXG4gICAgICAgIGlmICghc2hvdWxkVW5yZWdpc3Rlcikge1xyXG4gICAgICAgICAgICBsZXQgY29weSA9IGNsb25lT2JqZWN0KGRhdGEpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGZpZWxkQXJyYXlOYW1lc1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNLZXkodmFsdWUpICYmICFjb3B5W3ZhbHVlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvcHkgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGNvcHkpLCB7IFt2YWx1ZV06IFtdIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb3B5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFZhbHVlcyhwYXlsb2FkKSB7XHJcbiAgICAgICAgaWYgKGlzU3RyaW5nKHBheWxvYWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRGaWVsZFZhbHVlKGZpZWxkc1JlZiwgcGF5bG9hZCwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGF5bG9hZCkpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgcGF5bG9hZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0KGRhdGEsIG5hbWUsIGdldEZpZWxkVmFsdWUoZmllbGRzUmVmLCBuYW1lLCBzaGFsbG93RmllbGRzU3RhdGVSZWYpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNldEZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzKGdldEZpZWxkc1ZhbHVlcyhmaWVsZHNSZWYsIGNsb25lT2JqZWN0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50KSwgc2hvdWxkVW5yZWdpc3RlcikpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdmFsaWRhdGVSZXNvbHZlciA9IHVzZUNhbGxiYWNrKGFzeW5jICh2YWx1ZXMgPSB7fSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZXJyb3JzIH0gPSBhd2FpdCByZXNvbHZlclJlZi5jdXJyZW50KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZ2V0VmFsdWVzKCkpLCB2YWx1ZXMpLCBjb250ZXh0UmVmLmN1cnJlbnQsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKTtcclxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gaXNFbXB0eU9iamVjdChlcnJvcnMpO1xyXG4gICAgICAgIGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQgIT09IGlzVmFsaWQgJiZcclxuICAgICAgICAgICAgdXBkYXRlRm9ybVN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzVmFsaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW2lzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhXSk7XHJcbiAgICBjb25zdCByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXIgPSB1c2VDYWxsYmFjaygoZmllbGQsIGZvcmNlRGVsZXRlKSA9PiBmaW5kUmVtb3ZlZEZpZWxkQW5kUmVtb3ZlTGlzdGVuZXIoZmllbGRzUmVmLCBoYW5kbGVDaGFuZ2VSZWYuY3VycmVudCwgZmllbGQsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZiwgc2hvdWxkVW5yZWdpc3RlciwgZm9yY2VEZWxldGUpLCBbc2hvdWxkVW5yZWdpc3Rlcl0pO1xyXG4gICAgY29uc3QgdXBkYXRlV2F0Y2hlZFZhbHVlID0gdXNlQ2FsbGJhY2soKG5hbWUpID0+IHtcclxuICAgICAgICBpZiAoaXNXYXRjaEFsbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB3YXRjaEZpZWxkIG9mIHdhdGNoRmllbGRzUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh3YXRjaEZpZWxkLnN0YXJ0c1dpdGgobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZW5kZXJXYXRjaGVkSW5wdXRzKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lckFuZFJlZiA9IHVzZUNhbGxiYWNrKChmaWVsZCwgZm9yY2VEZWxldGUpID0+IHtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyKGZpZWxkLCBmb3JjZURlbGV0ZSk7XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRVbnJlZ2lzdGVyICYmICFjb21wYWN0KGZpZWxkLm9wdGlvbnMgfHwgW10pLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdW5zZXQodmFsaWRGaWVsZHNSZWYuY3VycmVudCwgZmllbGQucmVmLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdW5zZXQoZmllbGRzV2l0aFZhbGlkYXRpb25SZWYuY3VycmVudCwgZmllbGQucmVmLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdW5zZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBmaWVsZC5yZWYubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsIGZpZWxkLnJlZi5uYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNEaXJ0eTogaXNGb3JtRGlydHkoKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQgJiZcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlclJlZi5jdXJyZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVSZXNvbHZlcigpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlV2F0Y2hlZFZhbHVlKGZpZWxkLnJlZi5uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFt2YWxpZGF0ZVJlc29sdmVyLCByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXJdKTtcclxuICAgIGZ1bmN0aW9uIGNsZWFyRXJyb3JzKG5hbWUpIHtcclxuICAgICAgICBuYW1lICYmXHJcbiAgICAgICAgICAgIChBcnJheS5pc0FycmF5KG5hbWUpID8gbmFtZSA6IFtuYW1lXSkuZm9yRWFjaCgoaW5wdXROYW1lKSA9PiBmaWVsZHNSZWYuY3VycmVudFtpbnB1dE5hbWVdICYmIGlzS2V5KGlucHV0TmFtZSlcclxuICAgICAgICAgICAgICAgID8gZGVsZXRlIGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9yc1tpbnB1dE5hbWVdXHJcbiAgICAgICAgICAgICAgICA6IHVuc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgaW5wdXROYW1lKSk7XHJcbiAgICAgICAgdXBkYXRlRm9ybVN0YXRlKHtcclxuICAgICAgICAgICAgZXJyb3JzOiBuYW1lID8gZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzIDoge30sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRFcnJvcihuYW1lLCBlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IHJlZiA9IChmaWVsZHNSZWYuY3VycmVudFtuYW1lXSB8fCB7fSkucmVmO1xyXG4gICAgICAgIHNldChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIG5hbWUsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZXJyb3IpLCB7IHJlZiB9KSk7XHJcbiAgICAgICAgdXBkYXRlRm9ybVN0YXRlKHtcclxuICAgICAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXJyb3Iuc2hvdWxkRm9jdXMgJiYgcmVmICYmIHJlZi5mb2N1cyAmJiByZWYuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHdhdGNoSW50ZXJuYWwgPSB1c2VDYWxsYmFjaygoZmllbGROYW1lcywgZGVmYXVsdFZhbHVlLCB3YXRjaElkKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2F0Y2hGaWVsZHMgPSB3YXRjaElkXHJcbiAgICAgICAgICAgID8gdXNlV2F0Y2hGaWVsZHNSZWYuY3VycmVudFt3YXRjaElkXVxyXG4gICAgICAgICAgICA6IHdhdGNoRmllbGRzUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgbGV0IGZpZWxkVmFsdWVzID0gZ2V0RmllbGRzVmFsdWVzKGZpZWxkc1JlZiwgY2xvbmVPYmplY3Qoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQpLCBzaG91bGRVbnJlZ2lzdGVyLCBmYWxzZSwgZmllbGROYW1lcyk7XHJcbiAgICAgICAgaWYgKGlzU3RyaW5nKGZpZWxkTmFtZXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudE5vZGVOYW1lID0gZ2V0RmllbGRBcnJheVBhcmVudE5hbWUoZmllbGROYW1lcykgfHwgZmllbGROYW1lcztcclxuICAgICAgICAgICAgaWYgKGZpZWxkQXJyYXlOYW1lc1JlZi5jdXJyZW50LmhhcyhwYXJlbnROb2RlTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkVmFsdWVzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmaWVsZEFycmF5VmFsdWVzUmVmLmN1cnJlbnQpLCBmaWVsZFZhbHVlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFzc2lnbldhdGNoRmllbGRzKGZpZWxkVmFsdWVzLCBmaWVsZE5hbWVzLCB3YXRjaEZpZWxkcywgaXNVbmRlZmluZWQoZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgZmllbGROYW1lcykpXHJcbiAgICAgICAgICAgICAgICA/IGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgOiBnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBmaWVsZE5hbWVzKSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNvbWJpbmVkRGVmYXVsdFZhbHVlcyA9IGlzVW5kZWZpbmVkKGRlZmF1bHRWYWx1ZSlcclxuICAgICAgICAgICAgPyBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnRcclxuICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGROYW1lcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpZWxkTmFtZXMucmVkdWNlKChwcmV2aW91cywgbmFtZSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXMpLCB7IFtuYW1lXTogYXNzaWduV2F0Y2hGaWVsZHMoZmllbGRWYWx1ZXMsIG5hbWUsIHdhdGNoRmllbGRzLCBjb21iaW5lZERlZmF1bHRWYWx1ZXMpIH0pKSwge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc1dhdGNoQWxsUmVmLmN1cnJlbnQgPSBpc1VuZGVmaW5lZCh3YXRjaElkKTtcclxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtVG9OZXN0T2JqZWN0KCghaXNFbXB0eU9iamVjdChmaWVsZFZhbHVlcykgJiYgZmllbGRWYWx1ZXMpIHx8XHJcbiAgICAgICAgICAgIGNvbWJpbmVkRGVmYXVsdFZhbHVlcyk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBmdW5jdGlvbiB3YXRjaChmaWVsZE5hbWVzLCBkZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gd2F0Y2hJbnRlcm5hbChmaWVsZE5hbWVzLCBkZWZhdWx0VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdW5yZWdpc3RlcihuYW1lKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZE5hbWUgb2YgQXJyYXkuaXNBcnJheShuYW1lKSA/IG5hbWUgOiBbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyQW5kUmVmKGZpZWxkc1JlZi5jdXJyZW50W2ZpZWxkTmFtZV0sIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyRmllbGRSZWYocmVmLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICBpZiAoIXJlZi5uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKCfwn5OLIEZpZWxkIGlzIG1pc3NpbmcgYG5hbWVgIGF0dHJpYnV0ZScsIHJlZiwgYGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjdXNlRm9ybWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaWVsZEFycmF5TmFtZXNSZWYuY3VycmVudC5oYXMocmVmLm5hbWUuc3BsaXQoL1xcW1xcZCtcXF0kLylbMF0pICYmXHJcbiAgICAgICAgICAgICAgICAhUmVnRXhwKGBeJHtyZWYubmFtZS5zcGxpdCgvXFxbXFxkK1xcXSQvKVswXX1bXFxcXGQrXS5cXFxcdytgXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcWy9nLCAnXFxcXFsnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXF0vZywgJ1xcXFxdJykpLnRlc3QocmVmLm5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKCfwn5OLIGBuYW1lYCBwcm9wIHNob3VsZCBiZSBpbiBvYmplY3Qgc2hhcGU6IG5hbWU9XCJ0ZXN0W2luZGV4XS5uYW1lXCInLCByZWYsICdodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpI3VzZUZpZWxkQXJyYXknKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IG5hbWUsIHR5cGUsIHZhbHVlIH0gPSByZWY7XHJcbiAgICAgICAgY29uc3QgZmllbGRSZWZBbmRWYWxpZGF0aW9uT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oeyByZWYgfSwgb3B0aW9ucyk7XHJcbiAgICAgICAgY29uc3QgZmllbGRzID0gZmllbGRzUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgY29uc3QgaXNSYWRpb09yQ2hlY2tib3ggPSBpc1JhZGlvT3JDaGVja2JveEZ1bmN0aW9uKHJlZik7XHJcbiAgICAgICAgY29uc3QgaXNGaWVsZEFycmF5ID0gaXNOYW1lSW5GaWVsZEFycmF5KGZpZWxkQXJyYXlOYW1lc1JlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgICAgICBjb25zdCBjb21wYXJlUmVmID0gKGN1cnJlbnRSZWYpID0+IGlzV2ViICYmICghaXNIVE1MRWxlbWVudChyZWYpIHx8IGN1cnJlbnRSZWYgPT09IHJlZik7XHJcbiAgICAgICAgbGV0IGZpZWxkID0gZmllbGRzW25hbWVdO1xyXG4gICAgICAgIGxldCBpc0VtcHR5RGVmYXVsdFZhbHVlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIGlmIChmaWVsZCAmJlxyXG4gICAgICAgICAgICAoaXNSYWRpb09yQ2hlY2tib3hcclxuICAgICAgICAgICAgICAgID8gQXJyYXkuaXNBcnJheShmaWVsZC5vcHRpb25zKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhY3QoZmllbGQub3B0aW9ucykuZmluZCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gb3B0aW9uLnJlZi52YWx1ZSAmJiBjb21wYXJlUmVmKG9wdGlvbi5yZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICA6IGNvbXBhcmVSZWYoZmllbGQucmVmKSkpIHtcclxuICAgICAgICAgICAgZmllbGRzW25hbWVdID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmaWVsZCksIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGZpZWxkID0gaXNSYWRpb09yQ2hlY2tib3hcclxuICAgICAgICAgICAgICAgID8gT2JqZWN0LmFzc2lnbih7IG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY29tcGFjdCgoZmllbGQgJiYgZmllbGQub3B0aW9ucykgfHwgW10pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXSwgcmVmOiB7IHR5cGUsIG5hbWUgfSB9LCBvcHRpb25zKSA6IE9iamVjdC5hc3NpZ24oe30sIGZpZWxkUmVmQW5kVmFsaWRhdGlvbk9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZmllbGQgPSBmaWVsZFJlZkFuZFZhbGlkYXRpb25PcHRpb25zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaWVsZHNbbmFtZV0gPSBmaWVsZDtcclxuICAgICAgICBjb25zdCBpc0VtcHR5VW5tb3VudEZpZWxkcyA9IGlzVW5kZWZpbmVkKGdldChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCwgbmFtZSkpO1xyXG4gICAgICAgIGlmICghaXNFbXB0eU9iamVjdChkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQpIHx8ICFpc0VtcHR5VW5tb3VudEZpZWxkcykge1xyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSBnZXQoaXNFbXB0eVVubW91bnRGaWVsZHNcclxuICAgICAgICAgICAgICAgID8gZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50XHJcbiAgICAgICAgICAgICAgICA6IHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgICAgICAgICAgaXNFbXB0eURlZmF1bHRWYWx1ZSA9IGlzVW5kZWZpbmVkKGRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGlmICghaXNFbXB0eURlZmF1bHRWYWx1ZSAmJiAhaXNGaWVsZEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlKG5hbWUsIGRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc0VtcHR5T2JqZWN0KG9wdGlvbnMpKSB7XHJcbiAgICAgICAgICAgIHNldChmaWVsZHNXaXRoVmFsaWRhdGlvblJlZi5jdXJyZW50LCBuYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKCFpc09uU3VibWl0ICYmIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUZpZWxkKGZpZWxkc1JlZiwgaXNWYWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEsIGZpZWxkLCBzaGFsbG93RmllbGRzU3RhdGVSZWYpLnRoZW4oKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNGb3JtSXNWYWxpZCA9IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNFbXB0eU9iamVjdChlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBzZXQodmFsaWRGaWVsZHNSZWYuY3VycmVudCwgbmFtZSwgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB1bnNldCh2YWxpZEZpZWxkc1JlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0Zvcm1Jc1ZhbGlkICE9PSBpc0VtcHR5T2JqZWN0KGVycm9yKSAmJiB1cGRhdGVGb3JtU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaG91bGRVbnJlZ2lzdGVyICYmICEoaXNGaWVsZEFycmF5ICYmIGlzRW1wdHlEZWZhdWx0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICFpc0ZpZWxkQXJyYXkgJiYgdW5zZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsIG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZSkge1xyXG4gICAgICAgICAgICBhdHRhY2hFdmVudExpc3RlbmVycyhpc1JhZGlvT3JDaGVja2JveCAmJiBmaWVsZC5vcHRpb25zXHJcbiAgICAgICAgICAgICAgICA/IGZpZWxkLm9wdGlvbnNbZmllbGQub3B0aW9ucy5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICAgICAgOiBmaWVsZCwgaXNSYWRpb09yQ2hlY2tib3ggfHwgaXNTZWxlY3RJbnB1dChyZWYpLCBoYW5kbGVDaGFuZ2VSZWYuY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXIocmVmT3JSZWdpc3Rlck9wdGlvbnMsIG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoIWlzV2luZG93VW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyhyZWZPclJlZ2lzdGVyT3B0aW9ucykpIHtcclxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyRmllbGRSZWYoeyBuYW1lOiByZWZPclJlZ2lzdGVyT3B0aW9ucyB9LCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChpc09iamVjdChyZWZPclJlZ2lzdGVyT3B0aW9ucykgJiZcclxuICAgICAgICAgICAgICAgICduYW1lJyBpbiByZWZPclJlZ2lzdGVyT3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJGaWVsZFJlZihyZWZPclJlZ2lzdGVyT3B0aW9ucywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHJlZikgPT4gcmVmICYmIHJlZ2lzdGVyRmllbGRSZWYocmVmLCByZWZPclJlZ2lzdGVyT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSB1c2VDYWxsYmFjaygob25WYWxpZCwgb25JbnZhbGlkKSA9PiBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlICYmIGUucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnBlcnNpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZpZWxkRXJyb3JzID0ge307XHJcbiAgICAgICAgbGV0IGZpZWxkVmFsdWVzID0gc2V0RmllbGRBcnJheURlZmF1bHRWYWx1ZXMoZ2V0RmllbGRzVmFsdWVzKGZpZWxkc1JlZiwgY2xvbmVPYmplY3Qoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQpLCBzaG91bGRVbnJlZ2lzdGVyLCB0cnVlKSk7XHJcbiAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzU3VibWl0dGluZyAmJlxyXG4gICAgICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNTdWJtaXR0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAocmVzb2x2ZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBlcnJvcnMsIHZhbHVlcyB9ID0gYXdhaXQgcmVzb2x2ZXJSZWYuY3VycmVudChmaWVsZFZhbHVlcywgY29udGV4dFJlZi5jdXJyZW50LCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSk7XHJcbiAgICAgICAgICAgICAgICBmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMgPSBmaWVsZEVycm9ycyA9IGVycm9ycztcclxuICAgICAgICAgICAgICAgIGZpZWxkVmFsdWVzID0gdmFsdWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBPYmplY3QudmFsdWVzKGZpZWxkc1JlZi5jdXJyZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG5hbWUgfSA9IGZpZWxkLnJlZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRFcnJvciA9IGF3YWl0IHZhbGlkYXRlRmllbGQoZmllbGRzUmVmLCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZmllbGQsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZEVycm9yW25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQoZmllbGRFcnJvcnMsIG5hbWUsIGZpZWxkRXJyb3JbbmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5zZXQodmFsaWRGaWVsZHNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZ2V0KGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQsIG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnNldChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0KHZhbGlkRmllbGRzUmVmLmN1cnJlbnQsIG5hbWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc0VtcHR5T2JqZWN0KGZpZWxkRXJyb3JzKSAmJlxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzKS5ldmVyeSgobmFtZSkgPT4gbmFtZSBpbiBmaWVsZHNSZWYuY3VycmVudCkpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IG9uVmFsaWQoZmllbGRWYWx1ZXMsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMpLCBmaWVsZEVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICBvbkludmFsaWQgJiYgKGF3YWl0IG9uSW52YWxpZChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIGUpKTtcclxuICAgICAgICAgICAgICAgIHNob3VsZEZvY3VzRXJyb3IgJiZcclxuICAgICAgICAgICAgICAgICAgICBmb2N1c09uRXJyb3JGaWVsZChmaWVsZHNSZWYuY3VycmVudCwgZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgZm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNTdWJtaXR0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc1N1Ym1pdHRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlzU3VibWl0dGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc1N1Ym1pdFN1Y2Nlc3NmdWw6IGlzRW1wdHlPYmplY3QoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzKSxcclxuICAgICAgICAgICAgICAgIHN1Ym1pdENvdW50OiBmb3JtU3RhdGVSZWYuY3VycmVudC5zdWJtaXRDb3VudCArIDEsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtzaG91bGRGb2N1c0Vycm9yLCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYV0pO1xyXG4gICAgY29uc3QgcmVzZXRSZWZzID0gKHsgZXJyb3JzLCBpc0RpcnR5LCBpc1N1Ym1pdHRlZCwgdG91Y2hlZCwgaXNWYWxpZCwgc3VibWl0Q291bnQsIGRpcnR5RmllbGRzLCB9KSA9PiB7XHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHZhbGlkRmllbGRzUmVmLmN1cnJlbnQgPSB7fTtcclxuICAgICAgICAgICAgZmllbGRzV2l0aFZhbGlkYXRpb25SZWYuY3VycmVudCA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50ID0ge307XHJcbiAgICAgICAgd2F0Y2hGaWVsZHNSZWYuY3VycmVudCA9IG5ldyBTZXQoKTtcclxuICAgICAgICBpc1dhdGNoQWxsUmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICBzdWJtaXRDb3VudDogc3VibWl0Q291bnQgPyBmb3JtU3RhdGVSZWYuY3VycmVudC5zdWJtaXRDb3VudCA6IDAsXHJcbiAgICAgICAgICAgIGlzRGlydHk6IGlzRGlydHkgPyBmb3JtU3RhdGVSZWYuY3VycmVudC5pc0RpcnR5IDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzU3VibWl0dGVkOiBpc1N1Ym1pdHRlZCA/IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzU3VibWl0dGVkIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzVmFsaWQ6IGlzVmFsaWQgPyBmb3JtU3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpcnR5RmllbGRzOiBkaXJ0eUZpZWxkcyA/IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzIDoge30sXHJcbiAgICAgICAgICAgIHRvdWNoZWQ6IHRvdWNoZWQgPyBmb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkIDoge30sXHJcbiAgICAgICAgICAgIGVycm9yczogZXJyb3JzID8gZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzIDoge30sXHJcbiAgICAgICAgICAgIGlzU3VibWl0dGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzU3VibWl0U3VjY2Vzc2Z1bDogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzZXQgPSAodmFsdWVzLCBvbWl0UmVzZXRTdGF0ZSA9IHt9KSA9PiB7XHJcbiAgICAgICAgaWYgKGlzV2ViKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgT2JqZWN0LnZhbHVlcyhmaWVsZHNSZWYuY3VycmVudCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVmLCBvcHRpb25zIH0gPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFJlZiA9IGlzUmFkaW9PckNoZWNrYm94RnVuY3Rpb24ocmVmKSAmJiBBcnJheS5pc0FycmF5KG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gb3B0aW9uc1swXS5yZWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiByZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSFRNTEVsZW1lbnQoaW5wdXRSZWYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFJlZi5jbG9zZXN0KCdmb3JtJykucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChfYSkgeyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZWxkc1JlZi5jdXJyZW50ID0ge307XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50ID0gT2JqZWN0LmFzc2lnbih7fSwgKHZhbHVlcyB8fCBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQpKTtcclxuICAgICAgICB2YWx1ZXMgJiYgcmVuZGVyV2F0Y2hlZElucHV0cygnJyk7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhyZXNldEZpZWxkQXJyYXlGdW5jdGlvblJlZi5jdXJyZW50KS5mb3JFYWNoKChyZXNldEZpZWxkQXJyYXkpID0+IGlzRnVuY3Rpb24ocmVzZXRGaWVsZEFycmF5KSAmJiByZXNldEZpZWxkQXJyYXkoKSk7XHJcbiAgICAgICAgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQgPSBzaG91bGRVbnJlZ2lzdGVyXHJcbiAgICAgICAgICAgID8ge31cclxuICAgICAgICAgICAgOiBjbG9uZU9iamVjdCh2YWx1ZXMgfHwgZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50KTtcclxuICAgICAgICByZXNldFJlZnMob21pdFJlc2V0U3RhdGUpO1xyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZXIgJiYgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQgJiYgdmFsaWRhdGVSZXNvbHZlcigpO1xyXG4gICAgICAgIG9ic2VydmVyUmVmLmN1cnJlbnQgPVxyXG4gICAgICAgICAgICBvYnNlcnZlclJlZi5jdXJyZW50IHx8ICFpc1dlYlxyXG4gICAgICAgICAgICAgICAgPyBvYnNlcnZlclJlZi5jdXJyZW50XHJcbiAgICAgICAgICAgICAgICA6IG9uRG9tUmVtb3ZlKGZpZWxkc1JlZiwgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyQW5kUmVmKTtcclxuICAgIH0sIFtyZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXJBbmRSZWYsIGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudF0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+ICgpID0+IHtcclxuICAgICAgICBvYnNlcnZlclJlZi5jdXJyZW50ICYmIG9ic2VydmVyUmVmLmN1cnJlbnQuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIGlzVW5Nb3VudC5jdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoZmllbGRzUmVmLmN1cnJlbnQpLmZvckVhY2goKGZpZWxkKSA9PiByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXJBbmRSZWYoZmllbGQsIHRydWUpKTtcclxuICAgIH0sIFtdKTtcclxuICAgIGlmICghcmVzb2x2ZXIgJiYgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQpIHtcclxuICAgICAgICBmb3JtU3RhdGUuaXNWYWxpZCA9XHJcbiAgICAgICAgICAgIGRlZXBFcXVhbCh2YWxpZEZpZWxkc1JlZi5jdXJyZW50LCBmaWVsZHNXaXRoVmFsaWRhdGlvblJlZi5jdXJyZW50KSAmJlxyXG4gICAgICAgICAgICAgICAgaXNFbXB0eU9iamVjdChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY29tbW9uUHJvcHMgPSB7XHJcbiAgICAgICAgdHJpZ2dlcixcclxuICAgICAgICBzZXRWYWx1ZTogdXNlQ2FsbGJhY2soc2V0VmFsdWUsIFtzZXRJbnRlcm5hbFZhbHVlLCB0cmlnZ2VyXSksXHJcbiAgICAgICAgZ2V0VmFsdWVzOiB1c2VDYWxsYmFjayhnZXRWYWx1ZXMsIFtdKSxcclxuICAgICAgICByZWdpc3RlcjogdXNlQ2FsbGJhY2socmVnaXN0ZXIsIFtkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnRdKSxcclxuICAgICAgICB1bnJlZ2lzdGVyOiB1c2VDYWxsYmFjayh1bnJlZ2lzdGVyLCBbXSksXHJcbiAgICAgICAgZm9ybVN0YXRlOiBpc1Byb3h5RW5hYmxlZFxyXG4gICAgICAgICAgICA/IG5ldyBQcm94eShmb3JtU3RhdGUsIHtcclxuICAgICAgICAgICAgICAgIGdldDogKG9iaiwgcHJvcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSAnaXNWYWxpZCcgJiYgaXNPblN1Ym1pdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCfwn5OLIGBmb3JtU3RhdGUuaXNWYWxpZGAgaXMgYXBwbGljYWJsZSB3aXRoIGBvblRvdWNoZWRgLCBgb25DaGFuZ2VgIG9yIGBvbkJsdXJgIG1vZGUuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjZm9ybVN0YXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudFtwcm9wXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmpbcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICA6IGZvcm1TdGF0ZSxcclxuICAgIH07XHJcbiAgICBjb25zdCBjb250cm9sID0gdXNlTWVtbygoKSA9PiAoT2JqZWN0LmFzc2lnbih7IGlzRm9ybURpcnR5LFxyXG4gICAgICAgIHVwZGF0ZVdhdGNoZWRWYWx1ZSxcclxuICAgICAgICBzaG91bGRVbnJlZ2lzdGVyLFxyXG4gICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSxcclxuICAgICAgICByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXIsXHJcbiAgICAgICAgd2F0Y2hJbnRlcm5hbCwgbW9kZTogbW9kZVJlZi5jdXJyZW50LCByZVZhbGlkYXRlTW9kZToge1xyXG4gICAgICAgICAgICBpc1JlVmFsaWRhdGVPbkJsdXIsXHJcbiAgICAgICAgICAgIGlzUmVWYWxpZGF0ZU9uQ2hhbmdlLFxyXG4gICAgICAgIH0sIHZhbGlkYXRlUmVzb2x2ZXI6IHJlc29sdmVyID8gdmFsaWRhdGVSZXNvbHZlciA6IHVuZGVmaW5lZCwgZmllbGRzUmVmLFxyXG4gICAgICAgIHJlc2V0RmllbGRBcnJheUZ1bmN0aW9uUmVmLFxyXG4gICAgICAgIHVzZVdhdGNoRmllbGRzUmVmLFxyXG4gICAgICAgIHVzZVdhdGNoUmVuZGVyRnVuY3Rpb25zUmVmLFxyXG4gICAgICAgIGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLFxyXG4gICAgICAgIHZhbGlkRmllbGRzUmVmLFxyXG4gICAgICAgIGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLFxyXG4gICAgICAgIGZpZWxkQXJyYXlOYW1lc1JlZixcclxuICAgICAgICByZWFkRm9ybVN0YXRlUmVmLFxyXG4gICAgICAgIGZvcm1TdGF0ZVJlZixcclxuICAgICAgICBkZWZhdWx0VmFsdWVzUmVmLFxyXG4gICAgICAgIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZixcclxuICAgICAgICBmaWVsZEFycmF5VmFsdWVzUmVmIH0sIGNvbW1vblByb3BzKSksIFtcclxuICAgICAgICBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgdXBkYXRlV2F0Y2hlZFZhbHVlLFxyXG4gICAgICAgIHNob3VsZFVucmVnaXN0ZXIsXHJcbiAgICAgICAgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyLFxyXG4gICAgICAgIHdhdGNoSW50ZXJuYWwsXHJcbiAgICBdKTtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgd2F0Y2gsXHJcbiAgICAgICAgY29udHJvbCxcclxuICAgICAgICBoYW5kbGVTdWJtaXQsIHJlc2V0OiB1c2VDYWxsYmFjayhyZXNldCwgW10pLCBjbGVhckVycm9yczogdXNlQ2FsbGJhY2soY2xlYXJFcnJvcnMsIFtdKSwgc2V0RXJyb3I6IHVzZUNhbGxiYWNrKHNldEVycm9yLCBbXSksIGVycm9yczogZm9ybVN0YXRlLmVycm9ycyB9LCBjb21tb25Qcm9wcyk7XHJcbn1cblxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbmZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxuXG5jb25zdCBGb3JtQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XHJcbkZvcm1Db250ZXh0LmRpc3BsYXlOYW1lID0gJ1JIRkNvbnRleHQnO1xyXG5jb25zdCB1c2VGb3JtQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoRm9ybUNvbnRleHQpO1xyXG5jb25zdCBGb3JtUHJvdmlkZXIgPSAoX2EpID0+IHtcclxuICAgIHZhciB7IGNoaWxkcmVuIH0gPSBfYSwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCJdKTtcclxuICAgIHJldHVybiAoY3JlYXRlRWxlbWVudChGb3JtQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpIH0sIGNoaWxkcmVuKSk7XHJcbn07XG5cbnZhciBnZW5lcmF0ZUlkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZCA9IHR5cGVvZiBwZXJmb3JtYW5jZSA9PT0gVU5ERUZJTkVEID8gRGF0ZS5ub3coKSA6IHBlcmZvcm1hbmNlLm5vdygpICogMTAwMDtcclxuICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIChjKSA9PiB7XHJcbiAgICAgICAgY29uc3QgciA9IChNYXRoLnJhbmRvbSgpICogMTYgKyBkKSAlIDE2IHwgMDtcclxuICAgICAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4OCkudG9TdHJpbmcoMTYpO1xyXG4gICAgfSk7XHJcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZUF0SW5kZXhlcyhkYXRhLCBpbmRleGVzKSB7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBjb25zdCB0ZW1wID0gWy4uLmRhdGFdO1xyXG4gICAgZm9yIChjb25zdCBpbmRleCBvZiBpbmRleGVzKSB7XHJcbiAgICAgICAgdGVtcC5zcGxpY2UoaW5kZXggLSBpLCAxKTtcclxuICAgICAgICBpKys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29tcGFjdCh0ZW1wKS5sZW5ndGggPyB0ZW1wIDogW107XHJcbn1cclxudmFyIHJlbW92ZUFycmF5QXQgPSAoZGF0YSwgaW5kZXgpID0+IGlzVW5kZWZpbmVkKGluZGV4KVxyXG4gICAgPyBbXVxyXG4gICAgOiByZW1vdmVBdEluZGV4ZXMoZGF0YSwgKEFycmF5LmlzQXJyYXkoaW5kZXgpID8gaW5kZXggOiBbaW5kZXhdKS5zb3J0KCkpO1xuXG52YXIgbW92ZUFycmF5QXQgPSAoZGF0YSwgZnJvbSwgdG8pID0+IHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKGRhdGFbdG9dKSkge1xyXG4gICAgICAgICAgICBkYXRhW3RvXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YS5zcGxpY2UodG8sIDAsIGRhdGEuc3BsaWNlKGZyb20sIDEpWzBdKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIHJldHVybiBbXTtcclxufTtcblxudmFyIHN3YXBBcnJheUF0ID0gKGRhdGEsIGluZGV4QSwgaW5kZXhCKSA9PiB7XHJcbiAgICBjb25zdCB0ZW1wID0gW2RhdGFbaW5kZXhCXSwgZGF0YVtpbmRleEFdXTtcclxuICAgIGRhdGFbaW5kZXhBXSA9IHRlbXBbMF07XHJcbiAgICBkYXRhW2luZGV4Ql0gPSB0ZW1wWzFdO1xyXG59O1xuXG5mdW5jdGlvbiBwcmVwZW5kKGRhdGEsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gWy4uLihBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlIHx8IHVuZGVmaW5lZF0pLCAuLi5kYXRhXTtcclxufVxuXG5mdW5jdGlvbiBpbnNlcnQoZGF0YSwgaW5kZXgsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIC4uLmRhdGEuc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgICAgIC4uLihBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlIHx8IHVuZGVmaW5lZF0pLFxyXG4gICAgICAgIC4uLmRhdGEuc2xpY2UoaW5kZXgpLFxyXG4gICAgXTtcclxufVxuXG52YXIgZmlsbEVtcHR5QXJyYXkgPSAodmFsdWUpID0+IEFycmF5LmlzQXJyYXkodmFsdWUpID8gQXJyYXkodmFsdWUubGVuZ3RoKS5maWxsKHVuZGVmaW5lZCkgOiB1bmRlZmluZWQ7XG5cbnZhciBmaWxsQm9vbGVhbkFycmF5ID0gKHZhbHVlKSA9PiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV0pLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgaWYgKGlzT2JqZWN0KGRhdGEpKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICBvYmplY3Rba2V5XSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufSk7XG5cbmNvbnN0IG1hcElkcyA9ICh2YWx1ZXMgPSBbXSwga2V5TmFtZSwgc2tpcFdhcm4pID0+IHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgaWYgKCFza2lwV2Fybikge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5TmFtZSBpbiB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYPCfk4sgdXNlRmllbGRBcnJheSBmaWVsZFZhbHVlcyBjb250YWluIHRoZSBrZXlOYW1lIFxcYCR7a2V5TmFtZX1cXGAgd2hpY2ggaXMgcmVzZXJ2ZWQgZm9yIHVzZSBieSB1c2VGaWVsZEFycmF5LiBodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpI3VzZUZpZWxkQXJyYXlgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGDwn5OLIHVzZUZpZWxkQXJyYXkgaW5wdXQncyBuYW1lIHNob3VsZCBiZSBpbiBvYmplY3Qgc2hhcGUgaW5zdGVhZCBvZiBmbGF0IGFycmF5LiBodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpI3VzZUZpZWxkQXJyYXlgKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZXMubWFwKCh2YWx1ZSkgPT4gKE9iamVjdC5hc3NpZ24oeyBba2V5TmFtZV06IHZhbHVlW2tleU5hbWVdIHx8IGdlbmVyYXRlSWQoKSB9LCB2YWx1ZSkpKTtcclxufTtcclxuY29uc3QgdXNlRmllbGRBcnJheSA9ICh7IGNvbnRyb2wsIG5hbWUsIGtleU5hbWUgPSAnaWQnLCB9KSA9PiB7XHJcbiAgICBjb25zdCBtZXRob2RzID0gdXNlRm9ybUNvbnRleHQoKTtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgaWYgKCFjb250cm9sICYmICFtZXRob2RzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign8J+TiyB1c2VGaWVsZEFycmF5IGlzIG1pc3NpbmcgYGNvbnRyb2xgIHByb3AuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjdXNlRmllbGRBcnJheScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGZvY3VzSW5kZXhSZWYgPSB1c2VSZWYoLTEpO1xyXG4gICAgY29uc3QgeyBpc0Zvcm1EaXJ0eSwgdXBkYXRlV2F0Y2hlZFZhbHVlLCByZXNldEZpZWxkQXJyYXlGdW5jdGlvblJlZiwgZmllbGRBcnJheU5hbWVzUmVmLCBmaWVsZHNSZWYsIGRlZmF1bHRWYWx1ZXNSZWYsIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lciwgZm9ybVN0YXRlUmVmLCBzaGFsbG93RmllbGRzU3RhdGVSZWYsIHVwZGF0ZUZvcm1TdGF0ZSwgcmVhZEZvcm1TdGF0ZVJlZiwgdmFsaWRGaWVsZHNSZWYsIGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLCBmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZiwgdmFsaWRhdGVSZXNvbHZlciwgZ2V0VmFsdWVzLCBzaG91bGRVbnJlZ2lzdGVyLCBmaWVsZEFycmF5VmFsdWVzUmVmLCB9ID0gY29udHJvbCB8fCBtZXRob2RzLmNvbnRyb2w7XHJcbiAgICBjb25zdCBnZXREZWZhdWx0VmFsdWVzID0gKHZhbHVlcykgPT4gZ2V0KHNob3VsZFVucmVnaXN0ZXIgPyB2YWx1ZXMgOiBzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCwgbmFtZSwgW10pO1xyXG4gICAgY29uc3QgZmllbGRBcnJheVBhcmVudE5hbWUgPSBnZXRGaWVsZEFycmF5UGFyZW50TmFtZShuYW1lKTtcclxuICAgIGNvbnN0IG1lbW9pemVkRGVmYXVsdFZhbHVlcyA9IHVzZVJlZihbXHJcbiAgICAgICAgLi4uKGdldChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBmaWVsZEFycmF5UGFyZW50TmFtZSlcclxuICAgICAgICAgICAgPyBnZXREZWZhdWx0VmFsdWVzKGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQpXHJcbiAgICAgICAgICAgIDogZ2V0RGVmYXVsdFZhbHVlcyhkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQpKSxcclxuICAgIF0pO1xyXG4gICAgY29uc3QgW2ZpZWxkcywgc2V0RmllbGRzXSA9IHVzZVN0YXRlKG1hcElkcyhtZW1vaXplZERlZmF1bHRWYWx1ZXMuY3VycmVudCwga2V5TmFtZSkpO1xyXG4gICAgc2V0KGZpZWxkQXJyYXlWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSwgZmllbGRzKTtcclxuICAgIGNvbnN0IG9taXRLZXkgPSAoZmllbGRzKSA9PiBmaWVsZHMubWFwKChfYSA9IHt9KSA9PiB7XHJcbiAgICAgICAgdmFyIF9iID0ga2V5TmFtZSwgb21pdHRlZCA9IF9hW19iXSwgcmVzdCA9IF9fcmVzdChfYSwgW3R5cGVvZiBfYiA9PT0gXCJzeW1ib2xcIiA/IF9iIDogX2IgKyBcIlwiXSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3Q7XHJcbiAgICB9KTtcclxuICAgIGZpZWxkQXJyYXlOYW1lc1JlZi5jdXJyZW50LmFkZChuYW1lKTtcclxuICAgIGNvbnN0IGdldEZpZWxkQXJyYXlWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IGdldChmaWVsZEFycmF5VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUsIFtdKSwgW25hbWVdKTtcclxuICAgIGNvbnN0IGdldEN1cnJlbnRGaWVsZHNWYWx1ZXMgPSAoKSA9PiBtYXBJZHMoZ2V0KGdldFZhbHVlcygpLCBuYW1lLCBnZXRGaWVsZEFycmF5VmFsdWUoKSkubWFwKChpdGVtLCBpbmRleCkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZ2V0RmllbGRBcnJheVZhbHVlKClbaW5kZXhdKSwgaXRlbSkpKSwga2V5TmFtZSwgdHJ1ZSk7XHJcbiAgICBmaWVsZEFycmF5TmFtZXNSZWYuY3VycmVudC5hZGQobmFtZSk7XHJcbiAgICBpZiAoZmllbGRBcnJheVBhcmVudE5hbWUgJiZcclxuICAgICAgICAhZ2V0KGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIGZpZWxkQXJyYXlQYXJlbnROYW1lKSkge1xyXG4gICAgICAgIHNldChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBmaWVsZEFycmF5UGFyZW50TmFtZSwgY2xvbmVPYmplY3QoZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgZmllbGRBcnJheVBhcmVudE5hbWUpKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXRGaWVsZEFuZFZhbGlkU3RhdGUgPSAoZmllbGRzVmFsdWVzKSA9PiB7XHJcbiAgICAgICAgc2V0RmllbGRzKGZpZWxkc1ZhbHVlcyk7XHJcbiAgICAgICAgc2V0KGZpZWxkQXJyYXlWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSwgZmllbGRzVmFsdWVzKTtcclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQgJiYgdmFsaWRhdGVSZXNvbHZlcikge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBnZXRWYWx1ZXMoKTtcclxuICAgICAgICAgICAgc2V0KHZhbHVlcywgbmFtZSwgZmllbGRzVmFsdWVzKTtcclxuICAgICAgICAgICAgdmFsaWRhdGVSZXNvbHZlcih2YWx1ZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCByZXNldEZpZWxkcyA9ICgpID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBmaWVsZHNSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICBpZiAoaXNNYXRjaEZpZWxkQXJyYXlOYW1lKGtleSwgbmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lcihmaWVsZHNSZWYuY3VycmVudFtrZXldLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBmaWVsZHNSZWYuY3VycmVudFtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGNsZWFudXAgPSAocmVmKSA9PiAhY29tcGFjdChnZXQocmVmLCBuYW1lLCBbXSkpLmxlbmd0aCAmJiB1bnNldChyZWYsIG5hbWUpO1xyXG4gICAgY29uc3QgdXBkYXRlRGlydHlGaWVsZHNXaXRoRGVmYXVsdFZhbHVlcyA9ICh1cGRhdGVkRmllbGRBcnJheVZhbHVlcykgPT4ge1xyXG4gICAgICAgIGlmICh1cGRhdGVkRmllbGRBcnJheVZhbHVlcykge1xyXG4gICAgICAgICAgICBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsIG5hbWUsIHNldEZpZWxkQXJyYXlEaXJ0eUZpZWxkcyhvbWl0S2V5KHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKSwgZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSwgW10pLCBnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsIG5hbWUsIFtdKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBiYXRjaFN0YXRlVXBkYXRlID0gKG1ldGhvZCwgYXJncywgdXBkYXRlZEZpZWxkVmFsdWVzLCB1cGRhdGVkRm9ybVZhbHVlcyA9IFtdLCBzaG91bGRTZXQgPSB0cnVlLCBzaG91bGRVcGRhdGVWYWxpZCA9IGZhbHNlKSA9PiB7XHJcbiAgICAgICAgaWYgKGdldChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCwgbmFtZSkpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gbWV0aG9kKGdldChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCwgbmFtZSksIGFyZ3MuYXJnQSwgYXJncy5hcmdCKTtcclxuICAgICAgICAgICAgc2hvdWxkU2V0ICYmIHNldChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCwgbmFtZSwgb3V0cHV0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdldChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXQgPSBtZXRob2QoZ2V0KGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUpLCBhcmdzLmFyZ0EsIGFyZ3MuYXJnQik7XHJcbiAgICAgICAgICAgIHNob3VsZFNldCAmJiBzZXQoZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSwgb3V0cHV0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgbmFtZSkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dCA9IG1ldGhvZChnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lKSwgYXJncy5hcmdBLCBhcmdzLmFyZ0IpO1xyXG4gICAgICAgICAgICBzaG91bGRTZXQgJiYgc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgbmFtZSwgb3V0cHV0KTtcclxuICAgICAgICAgICAgY2xlYW51cChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQgJiZcclxuICAgICAgICAgICAgZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQsIG5hbWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dCA9IG1ldGhvZChnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCwgbmFtZSksIGFyZ3MuYXJnQSwgYXJncy5hcmdCKTtcclxuICAgICAgICAgICAgc2hvdWxkU2V0ICYmIHNldChmb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkLCBuYW1lLCBvdXRwdXQpO1xyXG4gICAgICAgICAgICBjbGVhbnVwKGZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzIHx8XHJcbiAgICAgICAgICAgIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc0RpcnR5KSB7XHJcbiAgICAgICAgICAgIHNldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSwgc2V0RmllbGRBcnJheURpcnR5RmllbGRzKG9taXRLZXkodXBkYXRlZEZvcm1WYWx1ZXMpLCBnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lLCBbXSksIGdldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSwgW10pKSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZURpcnR5RmllbGRzV2l0aERlZmF1bHRWYWx1ZXModXBkYXRlZEZpZWxkVmFsdWVzKTtcclxuICAgICAgICAgICAgY2xlYW51cChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaG91bGRVcGRhdGVWYWxpZCAmJlxyXG4gICAgICAgICAgICByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCAmJlxyXG4gICAgICAgICAgICAhdmFsaWRhdGVSZXNvbHZlcikge1xyXG4gICAgICAgICAgICBzZXQodmFsaWRGaWVsZHNSZWYuY3VycmVudCwgbmFtZSwgbWV0aG9kKGdldCh2YWxpZEZpZWxkc1JlZi5jdXJyZW50LCBuYW1lLCBbXSksIGFyZ3MuYXJnQSkpO1xyXG4gICAgICAgICAgICBjbGVhbnVwKHZhbGlkRmllbGRzUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgICAgICBzZXQoZmllbGRzV2l0aFZhbGlkYXRpb25SZWYuY3VycmVudCwgbmFtZSwgbWV0aG9kKGdldChmaWVsZHNXaXRoVmFsaWRhdGlvblJlZi5jdXJyZW50LCBuYW1lLCBbXSksIGFyZ3MuYXJnQSkpO1xyXG4gICAgICAgICAgICBjbGVhbnVwKGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICBpc0RpcnR5OiBpc0Zvcm1EaXJ0eShuYW1lLCBvbWl0S2V5KHVwZGF0ZWRGb3JtVmFsdWVzKSksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgYXBwZW5kID0gKHZhbHVlLCBzaG91bGRGb2N1cyA9IHRydWUpID0+IHtcclxuICAgICAgICBjb25zdCBhcHBlbmRWYWx1ZSA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZUZvcm1WYWx1ZXMgPSBbXHJcbiAgICAgICAgICAgIC4uLmdldEN1cnJlbnRGaWVsZHNWYWx1ZXMoKSxcclxuICAgICAgICAgICAgLi4ubWFwSWRzKGFwcGVuZFZhbHVlLCBrZXlOYW1lKSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIHNldEZpZWxkQW5kVmFsaWRTdGF0ZSh1cGRhdGVGb3JtVmFsdWVzKTtcclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzIHx8XHJcbiAgICAgICAgICAgIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc0RpcnR5KSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZURpcnR5RmllbGRzV2l0aERlZmF1bHRWYWx1ZXModXBkYXRlRm9ybVZhbHVlcyk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc0RpcnR5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGlydHlGaWVsZHM6IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgIXNob3VsZFVucmVnaXN0ZXIgJiZcclxuICAgICAgICAgICAgc2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lLCBbXHJcbiAgICAgICAgICAgICAgICAuLi4oZ2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lKSB8fCBbXSksXHJcbiAgICAgICAgICAgICAgICAuLi5jbG9uZU9iamVjdChhcHBlbmRWYWx1ZSksXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIGZvY3VzSW5kZXhSZWYuY3VycmVudCA9IHNob3VsZEZvY3VzXHJcbiAgICAgICAgICAgID8gZ2V0KGZpZWxkQXJyYXlWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSkubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA6IC0xO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHByZXBlbmQkMSA9ICh2YWx1ZSwgc2hvdWxkRm9jdXMgPSB0cnVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZW1wdHlBcnJheSA9IGZpbGxFbXB0eUFycmF5KHZhbHVlKTtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcyA9IHByZXBlbmQoZ2V0Q3VycmVudEZpZWxkc1ZhbHVlcygpLCBtYXBJZHMoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV0sIGtleU5hbWUpKTtcclxuICAgICAgICBzZXRGaWVsZEFuZFZhbGlkU3RhdGUodXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIHJlc2V0RmllbGRzKCk7XHJcbiAgICAgICAgYmF0Y2hTdGF0ZVVwZGF0ZShwcmVwZW5kLCB7XHJcbiAgICAgICAgICAgIGFyZ0E6IGVtcHR5QXJyYXksXHJcbiAgICAgICAgICAgIGFyZ0M6IGZpbGxCb29sZWFuQXJyYXkodmFsdWUpLFxyXG4gICAgICAgIH0sIHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKTtcclxuICAgICAgICBmb2N1c0luZGV4UmVmLmN1cnJlbnQgPSBzaG91bGRGb2N1cyA/IDAgOiAtMTtcclxuICAgIH07XHJcbiAgICBjb25zdCByZW1vdmUgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZFZhbHVlcyA9IGdldEN1cnJlbnRGaWVsZHNWYWx1ZXMoKTtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmllbGRWYWx1ZXMgPSByZW1vdmVBcnJheUF0KGZpZWxkVmFsdWVzLCBpbmRleCk7XHJcbiAgICAgICAgc2V0RmllbGRBbmRWYWxpZFN0YXRlKHVwZGF0ZWRGaWVsZFZhbHVlcyk7XHJcbiAgICAgICAgcmVzZXRGaWVsZHMoKTtcclxuICAgICAgICBiYXRjaFN0YXRlVXBkYXRlKHJlbW92ZUFycmF5QXQsIHtcclxuICAgICAgICAgICAgYXJnQTogaW5kZXgsXHJcbiAgICAgICAgICAgIGFyZ0M6IGluZGV4LFxyXG4gICAgICAgIH0sIHVwZGF0ZWRGaWVsZFZhbHVlcywgcmVtb3ZlQXJyYXlBdChmaWVsZFZhbHVlcywgaW5kZXgpLCB0cnVlLCB0cnVlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBpbnNlcnQkMSA9IChpbmRleCwgdmFsdWUsIHNob3VsZEZvY3VzID0gdHJ1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVtcHR5QXJyYXkgPSBmaWxsRW1wdHlBcnJheSh2YWx1ZSk7XHJcbiAgICAgICAgY29uc3QgZmllbGRWYWx1ZXMgPSBnZXRDdXJyZW50RmllbGRzVmFsdWVzKCk7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMgPSBpbnNlcnQoZmllbGRWYWx1ZXMsIGluZGV4LCBtYXBJZHMoQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV0sIGtleU5hbWUpKTtcclxuICAgICAgICBzZXRGaWVsZEFuZFZhbGlkU3RhdGUodXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIHJlc2V0RmllbGRzKCk7XHJcbiAgICAgICAgYmF0Y2hTdGF0ZVVwZGF0ZShpbnNlcnQsIHtcclxuICAgICAgICAgICAgYXJnQTogaW5kZXgsXHJcbiAgICAgICAgICAgIGFyZ0I6IGVtcHR5QXJyYXksXHJcbiAgICAgICAgICAgIGFyZ0M6IGluZGV4LFxyXG4gICAgICAgICAgICBhcmdEOiBmaWxsQm9vbGVhbkFycmF5KHZhbHVlKSxcclxuICAgICAgICB9LCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcywgaW5zZXJ0KGZpZWxkVmFsdWVzLCBpbmRleCkpO1xyXG4gICAgICAgIGZvY3VzSW5kZXhSZWYuY3VycmVudCA9IHNob3VsZEZvY3VzID8gaW5kZXggOiAtMTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzd2FwID0gKGluZGV4QSwgaW5kZXhCKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRWYWx1ZXMgPSBnZXRDdXJyZW50RmllbGRzVmFsdWVzKCk7XHJcbiAgICAgICAgc3dhcEFycmF5QXQoZmllbGRWYWx1ZXMsIGluZGV4QSwgaW5kZXhCKTtcclxuICAgICAgICByZXNldEZpZWxkcygpO1xyXG4gICAgICAgIHNldEZpZWxkQW5kVmFsaWRTdGF0ZShbLi4uZmllbGRWYWx1ZXNdKTtcclxuICAgICAgICBiYXRjaFN0YXRlVXBkYXRlKHN3YXBBcnJheUF0LCB7XHJcbiAgICAgICAgICAgIGFyZ0E6IGluZGV4QSxcclxuICAgICAgICAgICAgYXJnQjogaW5kZXhCLFxyXG4gICAgICAgICAgICBhcmdDOiBpbmRleEEsXHJcbiAgICAgICAgICAgIGFyZ0Q6IGluZGV4QixcclxuICAgICAgICB9LCB1bmRlZmluZWQsIGZpZWxkVmFsdWVzLCBmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbW92ZSA9IChmcm9tLCB0bykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkVmFsdWVzID0gZ2V0Q3VycmVudEZpZWxkc1ZhbHVlcygpO1xyXG4gICAgICAgIG1vdmVBcnJheUF0KGZpZWxkVmFsdWVzLCBmcm9tLCB0byk7XHJcbiAgICAgICAgcmVzZXRGaWVsZHMoKTtcclxuICAgICAgICBzZXRGaWVsZEFuZFZhbGlkU3RhdGUoWy4uLmZpZWxkVmFsdWVzXSk7XHJcbiAgICAgICAgYmF0Y2hTdGF0ZVVwZGF0ZShtb3ZlQXJyYXlBdCwge1xyXG4gICAgICAgICAgICBhcmdBOiBmcm9tLFxyXG4gICAgICAgICAgICBhcmdCOiB0byxcclxuICAgICAgICAgICAgYXJnQzogZnJvbSxcclxuICAgICAgICAgICAgYXJnRDogdG8sXHJcbiAgICAgICAgfSwgdW5kZWZpbmVkLCBmaWVsZFZhbHVlcywgZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgaWYgKCFuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ/Cfk4sgdXNlRmllbGRBcnJheSBpcyBtaXNzaW5nIGBuYW1lYCBhdHRyaWJ1dGUuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjdXNlRmllbGRBcnJheScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZXMgPSBnZXQoZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgaWYgKGRlZmF1bHRWYWx1ZXMgJiYgZmllbGRzLmxlbmd0aCA8IGRlZmF1bHRWYWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNldChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lLCBkZWZhdWx0VmFsdWVzLnNsaWNlKDEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdXBkYXRlV2F0Y2hlZFZhbHVlKG5hbWUpO1xyXG4gICAgICAgIGlmIChmb2N1c0luZGV4UmVmLmN1cnJlbnQgPiAtMSkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBmaWVsZHNSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNSZWYuY3VycmVudFtrZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKGAke25hbWV9WyR7Zm9jdXNJbmRleFJlZi5jdXJyZW50fV1gKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLnJlZi5mb2N1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLnJlZi5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvY3VzSW5kZXhSZWYuY3VycmVudCA9IC0xO1xyXG4gICAgfSwgW2ZpZWxkcywgbmFtZV0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCByZXNldEZ1bmN0aW9ucyA9IHJlc2V0RmllbGRBcnJheUZ1bmN0aW9uUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgY29uc3QgZmllbGRBcnJheU5hbWVzID0gZmllbGRBcnJheU5hbWVzUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgaWYgKCFnZXRGaWVsZEFycmF5UGFyZW50TmFtZShuYW1lKSkge1xyXG4gICAgICAgICAgICByZXNldEZ1bmN0aW9uc1tuYW1lXSA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNldEZpZWxkcygpO1xyXG4gICAgICAgICAgICAgICAgIWRhdGEgJiYgdW5zZXQoZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICB1bnNldChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBtZW1vaXplZERlZmF1bHRWYWx1ZXMuY3VycmVudCA9IGdldChkYXRhIHx8IGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRGaWVsZHMobWFwSWRzKG1lbW9pemVkRGVmYXVsdFZhbHVlcy5jdXJyZW50LCBrZXlOYW1lKSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzZXRGaWVsZHMoKTtcclxuICAgICAgICAgICAgZGVsZXRlIHJlc2V0RnVuY3Rpb25zW25hbWVdO1xyXG4gICAgICAgICAgICB1bnNldChmaWVsZEFycmF5VmFsdWVzUmVmLCBuYW1lKTtcclxuICAgICAgICAgICAgZmllbGRBcnJheU5hbWVzLmRlbGV0ZShuYW1lKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzd2FwOiB1c2VDYWxsYmFjayhzd2FwLCBbbmFtZV0pLFxyXG4gICAgICAgIG1vdmU6IHVzZUNhbGxiYWNrKG1vdmUsIFtuYW1lXSksXHJcbiAgICAgICAgcHJlcGVuZDogdXNlQ2FsbGJhY2socHJlcGVuZCQxLCBbbmFtZV0pLFxyXG4gICAgICAgIGFwcGVuZDogdXNlQ2FsbGJhY2soYXBwZW5kLCBbbmFtZV0pLFxyXG4gICAgICAgIHJlbW92ZTogdXNlQ2FsbGJhY2socmVtb3ZlLCBbbmFtZV0pLFxyXG4gICAgICAgIGluc2VydDogdXNlQ2FsbGJhY2soaW5zZXJ0JDEsIFtuYW1lXSksXHJcbiAgICAgICAgZmllbGRzLFxyXG4gICAgfTtcclxufTtcblxudmFyIGdldElucHV0VmFsdWUgPSAoZXZlbnQpID0+IGlzUHJpbWl0aXZlKGV2ZW50KSB8fFxyXG4gICAgIWlzT2JqZWN0KGV2ZW50LnRhcmdldCkgfHxcclxuICAgIChpc09iamVjdChldmVudC50YXJnZXQpICYmICFldmVudC50eXBlKVxyXG4gICAgPyBldmVudFxyXG4gICAgOiBpc1VuZGVmaW5lZChldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgPyBldmVudC50YXJnZXQuY2hlY2tlZFxyXG4gICAgICAgIDogZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG5mdW5jdGlvbiB1c2VDb250cm9sbGVyKHsgbmFtZSwgcnVsZXMsIGRlZmF1bHRWYWx1ZSwgY29udHJvbCwgb25Gb2N1cywgfSkge1xyXG4gICAgY29uc3QgbWV0aG9kcyA9IHVzZUZvcm1Db250ZXh0KCk7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgIGlmICghY29udHJvbCAmJiAhbWV0aG9kcykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ/Cfk4sgQ29udHJvbGxlciBpcyBtaXNzaW5nIGBjb250cm9sYCBwcm9wLiBodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpI0NvbnRyb2xsZXInKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB7IGRlZmF1bHRWYWx1ZXNSZWYsIHNldFZhbHVlLCByZWdpc3RlciwgdW5yZWdpc3RlciwgdHJpZ2dlciwgbW9kZSwgcmVWYWxpZGF0ZU1vZGU6IHsgaXNSZVZhbGlkYXRlT25CbHVyLCBpc1JlVmFsaWRhdGVPbkNoYW5nZSB9LCBmb3JtU3RhdGUsIGZvcm1TdGF0ZVJlZjogeyBjdXJyZW50OiB7IGlzU3VibWl0dGVkLCB0b3VjaGVkLCBlcnJvcnMgfSwgfSwgdXBkYXRlRm9ybVN0YXRlLCByZWFkRm9ybVN0YXRlUmVmLCBmaWVsZHNSZWYsIGZpZWxkQXJyYXlOYW1lc1JlZiwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLCB9ID0gY29udHJvbCB8fCBtZXRob2RzLmNvbnRyb2w7XHJcbiAgICBjb25zdCBpc05vdEZpZWxkQXJyYXkgPSAhaXNOYW1lSW5GaWVsZEFycmF5KGZpZWxkQXJyYXlOYW1lc1JlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgIGNvbnN0IGdldEluaXRpYWxWYWx1ZSA9ICgpID0+ICFpc1VuZGVmaW5lZChnZXQoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUpKSAmJiBpc05vdEZpZWxkQXJyYXlcclxuICAgICAgICA/IGdldChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCwgbmFtZSlcclxuICAgICAgICA6IGlzVW5kZWZpbmVkKGRlZmF1bHRWYWx1ZSlcclxuICAgICAgICAgICAgPyBnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lKVxyXG4gICAgICAgICAgICA6IGRlZmF1bHRWYWx1ZTtcclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0SW5wdXRTdGF0ZVZhbHVlXSA9IHVzZVN0YXRlKGdldEluaXRpYWxWYWx1ZSgpKTtcclxuICAgIGNvbnN0IHZhbHVlUmVmID0gdXNlUmVmKHZhbHVlKTtcclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZih7XHJcbiAgICAgICAgZm9jdXM6ICgpID0+IG51bGwsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG9uRm9jdXNSZWYgPSB1c2VSZWYob25Gb2N1cyB8fFxyXG4gICAgICAgICgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHJlZi5jdXJyZW50LmZvY3VzKSkge1xyXG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0Z1bmN0aW9uKHJlZi5jdXJyZW50LmZvY3VzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihg8J+TiyAncmVmJyBmcm9tIENvbnRyb2xsZXIgcmVuZGVyIHByb3AgbXVzdCBiZSBhdHRhY2hlZCB0byBhIFJlYWN0IGNvbXBvbmVudCBvciBhIERPTSBFbGVtZW50IHdob3NlIHJlZiBwcm92aWRlcyBhICdmb2N1cygpJyBtZXRob2RgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgIGNvbnN0IHNob3VsZFZhbGlkYXRlID0gdXNlQ2FsbGJhY2soKGlzQmx1ckV2ZW50KSA9PiAhc2tpcFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7IGlzQmx1ckV2ZW50LFxyXG4gICAgICAgIGlzUmVWYWxpZGF0ZU9uQmx1cixcclxuICAgICAgICBpc1JlVmFsaWRhdGVPbkNoYW5nZSxcclxuICAgICAgICBpc1N1Ym1pdHRlZCwgaXNUb3VjaGVkOiAhIWdldCh0b3VjaGVkLCBuYW1lKSB9LCBtb2RlKSksIFtcclxuICAgICAgICBpc1JlVmFsaWRhdGVPbkJsdXIsXHJcbiAgICAgICAgaXNSZVZhbGlkYXRlT25DaGFuZ2UsXHJcbiAgICAgICAgaXNTdWJtaXR0ZWQsXHJcbiAgICAgICAgdG91Y2hlZCxcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIG1vZGUsXHJcbiAgICBdKTtcclxuICAgIGNvbnN0IGNvbW1vblRhc2sgPSB1c2VDYWxsYmFjaygoW2V2ZW50XSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBnZXRJbnB1dFZhbHVlKGV2ZW50KTtcclxuICAgICAgICBzZXRJbnB1dFN0YXRlVmFsdWUoZGF0YSk7XHJcbiAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IGRhdGE7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCByZWdpc3RlckZpZWxkID0gdXNlQ2FsbGJhY2soKHNob3VsZFVwZGF0ZVZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgaWYgKCFuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKCfwn5OLIEZpZWxkIGlzIG1pc3NpbmcgYG5hbWVgIHByb3AuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjQ29udHJvbGxlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaWVsZHNSZWYuY3VycmVudFtuYW1lXSkge1xyXG4gICAgICAgICAgICBmaWVsZHNSZWYuY3VycmVudFtuYW1lXSA9IE9iamVjdC5hc3NpZ24oeyByZWY6IGZpZWxkc1JlZi5jdXJyZW50W25hbWVdLnJlZiB9LCBydWxlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZWdpc3RlcihPYmplY3QuZGVmaW5lUHJvcGVydGllcyh7XHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgZm9jdXM6IG9uRm9jdXNSZWYuY3VycmVudCxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXQoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFN0YXRlVmFsdWUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVSZWYuY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksIHJ1bGVzKTtcclxuICAgICAgICAgICAgc2hvdWxkVXBkYXRlVmFsdWUgPSBpc1VuZGVmaW5lZChnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNob3VsZFVwZGF0ZVZhbHVlICYmXHJcbiAgICAgICAgICAgIGlzTm90RmllbGRBcnJheSAmJlxyXG4gICAgICAgICAgICBzZXRJbnB1dFN0YXRlVmFsdWUoZ2V0SW5pdGlhbFZhbHVlKCkpO1xyXG4gICAgfSwgW3J1bGVzLCBuYW1lLCByZWdpc3Rlcl0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+ICgpID0+IHVucmVnaXN0ZXIobmFtZSksIFtuYW1lXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihg8J+TiyAke25hbWV9IGlzIG1pc3NpbmcgaW4gdGhlICdkZWZhdWx0VmFsdWUnIHByb3Agb2YgZWl0aGVyIGl0cyBDb250cm9sbGVyIChodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpI0NvbnRyb2xsZXIpIG9yIHVzZUZvcm0gKGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjdXNlRm9ybSlgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzTm90RmllbGRBcnJheSAmJiBpc1VuZGVmaW5lZChkZWZhdWx0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ/Cfk4sgQ29udHJvbGxlciBpcyBtaXNzaW5nIGBkZWZhdWx0VmFsdWVgIHByb3Agd2hlbiB1c2luZyBgdXNlRmllbGRBcnJheWAuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjQ29udHJvbGxlcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlZ2lzdGVyRmllbGQoKTtcclxuICAgIH0sIFtyZWdpc3RlckZpZWxkXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICFmaWVsZHNSZWYuY3VycmVudFtuYW1lXSAmJiByZWdpc3RlckZpZWxkKHRydWUpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBvbkJsdXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkICYmICFnZXQodG91Y2hlZCwgbmFtZSkpIHtcclxuICAgICAgICAgICAgc2V0KHRvdWNoZWQsIG5hbWUsIHRydWUpO1xyXG4gICAgICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgdG91Y2hlZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNob3VsZFZhbGlkYXRlKHRydWUpICYmIHRyaWdnZXIobmFtZSk7XHJcbiAgICB9LCBbbmFtZSwgdXBkYXRlRm9ybVN0YXRlLCBzaG91bGRWYWxpZGF0ZSwgdHJpZ2dlciwgcmVhZEZvcm1TdGF0ZVJlZl0pO1xyXG4gICAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoLi4uZXZlbnQpID0+IHNldFZhbHVlKG5hbWUsIGNvbW1vblRhc2soZXZlbnQpLCB7XHJcbiAgICAgICAgc2hvdWxkVmFsaWRhdGU6IHNob3VsZFZhbGlkYXRlKCksXHJcbiAgICAgICAgc2hvdWxkRGlydHk6IHRydWUsXHJcbiAgICB9KSwgW3NldFZhbHVlLCBuYW1lLCBzaG91bGRWYWxpZGF0ZV0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmaWVsZDoge1xyXG4gICAgICAgICAgICBvbkNoYW5nZSxcclxuICAgICAgICAgICAgb25CbHVyLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgcmVmLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0YTogT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoe1xyXG4gICAgICAgICAgICBpbnZhbGlkOiAhIWdldChlcnJvcnMsIG5hbWUpLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaXNEaXJ0eToge1xyXG4gICAgICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIWdldChmb3JtU3RhdGUuZGlydHlGaWVsZHMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaXNUb3VjaGVkOiB7XHJcbiAgICAgICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhZ2V0KGZvcm1TdGF0ZS50b3VjaGVkLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICB9O1xyXG59XG5cbmZ1bmN0aW9uIHVzZVdhdGNoKHsgY29udHJvbCwgbmFtZSwgZGVmYXVsdFZhbHVlLCB9KSB7XHJcbiAgICBjb25zdCBtZXRob2RzID0gdXNlRm9ybUNvbnRleHQoKTtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgaWYgKCFjb250cm9sICYmICFtZXRob2RzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign8J+TiyB1c2VXYXRjaCBpcyBtaXNzaW5nIGBjb250cm9sYCBwcm9wLiBodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpI3VzZVdhdGNoJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgeyB1c2VXYXRjaEZpZWxkc1JlZiwgdXNlV2F0Y2hSZW5kZXJGdW5jdGlvbnNSZWYsIHdhdGNoSW50ZXJuYWwsIGRlZmF1bHRWYWx1ZXNSZWYsIH0gPSBjb250cm9sIHx8IG1ldGhvZHMuY29udHJvbDtcclxuICAgIGNvbnN0IHVwZGF0ZVZhbHVlID0gdXNlU3RhdGUoKVsxXTtcclxuICAgIGNvbnN0IGlkUmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBkZWZhdWx0VmFsdWVSZWYgPSB1c2VSZWYoZGVmYXVsdFZhbHVlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ/Cfk4sgdXNlV2F0Y2ggaXMgbWlzc2luZyBgbmFtZWAgYXR0cmlidXRlLiBodHRwczovL3JlYWN0LWhvb2stZm9ybS5jb20vYXBpI3VzZVdhdGNoJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaWQgPSAoaWRSZWYuY3VycmVudCA9IGdlbmVyYXRlSWQoKSk7XHJcbiAgICAgICAgY29uc3Qgd2F0Y2hGaWVsZHNIb29rUmVuZGVyID0gdXNlV2F0Y2hSZW5kZXJGdW5jdGlvbnNSZWYuY3VycmVudDtcclxuICAgICAgICBjb25zdCB3YXRjaEZpZWxkc0hvb2sgPSB1c2VXYXRjaEZpZWxkc1JlZi5jdXJyZW50O1xyXG4gICAgICAgIHdhdGNoRmllbGRzSG9va1tpZF0gPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgd2F0Y2hGaWVsZHNIb29rUmVuZGVyW2lkXSA9ICgpID0+IHVwZGF0ZVZhbHVlKHt9KTtcclxuICAgICAgICB3YXRjaEludGVybmFsKG5hbWUsIGRlZmF1bHRWYWx1ZVJlZi5jdXJyZW50LCBpZCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZGVsZXRlIHdhdGNoRmllbGRzSG9va1tpZF07XHJcbiAgICAgICAgICAgIGRlbGV0ZSB3YXRjaEZpZWxkc0hvb2tSZW5kZXJbaWRdO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICB1c2VXYXRjaFJlbmRlckZ1bmN0aW9uc1JlZixcclxuICAgICAgICB1c2VXYXRjaEZpZWxkc1JlZixcclxuICAgICAgICB3YXRjaEludGVybmFsLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZVJlZixcclxuICAgIF0pO1xyXG4gICAgcmV0dXJuIGlkUmVmLmN1cnJlbnRcclxuICAgICAgICA/IHdhdGNoSW50ZXJuYWwobmFtZSwgZGVmYXVsdFZhbHVlUmVmLmN1cnJlbnQsIGlkUmVmLmN1cnJlbnQpXHJcbiAgICAgICAgOiBpc1VuZGVmaW5lZChkZWZhdWx0VmFsdWUpXHJcbiAgICAgICAgICAgID8gaXNTdHJpbmcobmFtZSlcclxuICAgICAgICAgICAgICAgID8gZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSlcclxuICAgICAgICAgICAgICAgIDogQXJyYXkuaXNBcnJheShuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgID8gbmFtZS5yZWR1Y2UoKHByZXZpb3VzLCBpbnB1dE5hbWUpID0+IChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHByZXZpb3VzKSwgeyBbaW5wdXROYW1lXTogZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgaW5wdXROYW1lKSB9KSksIHt9KVxyXG4gICAgICAgICAgICAgICAgICAgIDogZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50XHJcbiAgICAgICAgICAgIDogZGVmYXVsdFZhbHVlO1xyXG59XG5cbmNvbnN0IENvbnRyb2xsZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgcnVsZXMsIGFzLCByZW5kZXIsIGRlZmF1bHRWYWx1ZSwgY29udHJvbCwgb25Gb2N1cyB9ID0gcHJvcHMsIHJlc3QgPSBfX3Jlc3QocHJvcHMsIFtcInJ1bGVzXCIsIFwiYXNcIiwgXCJyZW5kZXJcIiwgXCJkZWZhdWx0VmFsdWVcIiwgXCJjb250cm9sXCIsIFwib25Gb2N1c1wiXSk7XHJcbiAgICBjb25zdCB7IGZpZWxkLCBtZXRhIH0gPSB1c2VDb250cm9sbGVyKHByb3BzKTtcclxuICAgIGNvbnN0IGNvbXBvbmVudFByb3BzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZXN0KSwgZmllbGQpO1xyXG4gICAgcmV0dXJuIGFzXHJcbiAgICAgICAgPyBpc1ZhbGlkRWxlbWVudChhcylcclxuICAgICAgICAgICAgPyBjbG9uZUVsZW1lbnQoYXMsIGNvbXBvbmVudFByb3BzKVxyXG4gICAgICAgICAgICA6IGNyZWF0ZUVsZW1lbnQoYXMsIGNvbXBvbmVudFByb3BzKVxyXG4gICAgICAgIDogcmVuZGVyXHJcbiAgICAgICAgICAgID8gcmVuZGVyKGZpZWxkLCBtZXRhKVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbn07XG5cbmV4cG9ydCB7IENvbnRyb2xsZXIsIEZvcm1Qcm92aWRlciwgYXBwZW5kRXJyb3JzLCBnZXQsIHRyYW5zZm9ybVRvTmVzdE9iamVjdCwgdXNlQ29udHJvbGxlciwgdXNlRmllbGRBcnJheSwgdXNlRm9ybSwgdXNlRm9ybUNvbnRleHQsIHVzZVdhdGNoIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBsaXN0ZVBhcnRlbmFpcmVCeUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vYWN0aW9ucy9wYXJ0ZW5haXJlc0FjdGlvbnMnO1xyXG5pbXBvcnQgRm9ybVVwZGF0ZVBhcnRlbmFpcmUgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hZG1pbi9mb3Jtcy9Gb3JtVXBkYXRlUGFydGVuYWlyZSc7XHJcbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2F1dGgvQWRtaW4nO1xyXG5pbXBvcnQgQWRtaW5IZWFkZXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvQWRtaW5IZWFkZXInO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5cclxuY29uc3QgdXBkYXRlUGFydGVuYWlyZSA9ICh7IHJvdXRlciB9KSA9PiB7XHJcblx0Y29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRcdHNldERhdGEoYXdhaXQgbGlzdGVQYXJ0ZW5haXJlQnlJZChyb3V0ZXIucXVlcnkuaWQpKTtcclxuXHRcdH07XHJcblx0XHRmZXRjaERhdGEoKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8QWRtaW5IZWFkZXI+XHJcblx0XHRcdFx0PEFkbWluPlxyXG5cdFx0XHRcdFx0PGgyPkZvcm11bGFpcmUgZGUgbW9kaWZpY2F0aW9uIGQndW4gcGFydGVuYWlyZTwvaDI+XHJcblx0XHRcdFx0XHR7ZGF0YSA/IChcclxuXHRcdFx0XHRcdFx0PEZvcm1VcGRhdGVQYXJ0ZW5haXJlIHByZWxvYWRlZFZhbHVlcz17ZGF0YX0gLz5cclxuXHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdDxTcGlubmVyIC8+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvQWRtaW4+XHJcblx0XHRcdDwvQWRtaW5IZWFkZXI+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcih1cGRhdGVQYXJ0ZW5haXJlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==