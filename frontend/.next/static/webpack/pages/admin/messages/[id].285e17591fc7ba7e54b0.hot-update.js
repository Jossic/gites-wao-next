webpackHotUpdate_N_E("pages/admin/messages/[id]",{

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

/***/ "./pages/admin/messages/[id].js":
/*!**************************************!*\
  !*** ./pages/admin/messages/[id].js ***!
  \**************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/layout/AdminHeader */ "./components/layout/AdminHeader.js");
/* harmony import */ var _components_auth_Admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/auth/Admin */ "./components/auth/Admin.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_messageActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/messageActions */ "./actions/messageActions.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TextareaAutosize */ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Backspace__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Backspace */ "./node_modules/@material-ui/icons/Backspace.js");
/* harmony import */ var _material_ui_icons_Backspace__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Backspace__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\admin\\messages\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (darkTheme) {
  return {
    root: {
      minWidth: 275
    },
    rootPaper: {
      padding: '6px 4px',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#212529'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    },
    iconButton: {
      padding: 10
    },
    input: {
      marginLeft: darkTheme.spacing(1),
      flex: 1
    },
    divider: {
      height: 28,
      margin: 4
    }
  };
});

var MessageId = function MessageId(_ref) {
  _s();

  var message = _ref.message,
      router = _ref.router;
  var classes = useStyles();
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_14__["getCookie"])('token');

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_18__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit; //Envoyer la réponse
  //UseEffect mettant vu à true au chargement de la page
  //Afficher la réponse en dessous du message


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_actions_messageActions__WEBPACK_IMPORTED_MODULE_4__["setVu"])(router.query.id, token);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 4
    }
  }, __jsx(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx("h2", {
    style: {
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 6
    }
  }, "Consultation du message de ", message.nom), __jsx(next_link__WEBPACK_IMPORTED_MODULE_17___default.a, {
    href: "/admin/messages",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Backspace__WEBPACK_IMPORTED_MODULE_16___default.a, {
    fontSize: "large",
    style: {
      "float": 'right',
      position: 'relative'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 8
    }
  }))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 6
    }
  }), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h5",
    component: "h5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 8
    }
  }, "Envoy\xE9 par ", message.nom), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.title,
    color: "textSecondary",
    gutterBottom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 8
    }
  }, "le", ' ', dayjs__WEBPACK_IMPORTED_MODULE_3___default()(message.createdAt).format('DD/MM/YYYY à HH:mm')), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.pos,
    color: "textSecondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 8
    }
  }, "Coordonn\xE9es :", ' ', __jsx("a", {
    href: "mailto:".concat(message.mail),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, message.mail), ' ', "/ 0", "".concat(message.tel.toString().substring(0, 1), " ").concat(message.tel.toString().substring(1, 3), " ").concat(message.tel.toString().substring(3, 5), " ").concat(message.tel.toString().substring(5, 7), " ").concat(message.tel.toString().substring(7, 9))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "body2",
    component: "p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 8
    }
  }, "Message :", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }), message.msg)), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "form",
    className: classes.rootPaper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 8
    }
  }, __jsx("form", {
    className: classes.rootPaper,
    onSubmit: handleSubmit(onSubmit),
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_13__["default"], {
    style: {
      width: '100%'
    },
    "aria-label": "reponse",
    placeholder: "R\xE9ponse",
    rowsMin: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 10
    }
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.divider,
    orientation: "vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 10
    }
  }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: "submit",
    color: "primary",
    className: classes.iconButton,
    "aria-label": "Envoyer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 10
    }
  }, __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 11
    }
  })))))))));
};

_s(MessageId, "icnBhbtotOTJ3p4SRg3HjAJyip0=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_18__["useForm"]];
});

_c = MessageId;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_15__["withRouter"])(MessageId));

var _c, _c2;

$RefreshReg$(_c, "MessageId");
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWhvb2stZm9ybS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vbWVzc2FnZXMvLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJkYXJrVGhlbWUiLCJyb290IiwibWluV2lkdGgiLCJyb290UGFwZXIiLCJwYWRkaW5nIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImJ1bGxldCIsIm1hcmdpbiIsInRyYW5zZm9ybSIsInRpdGxlIiwiZm9udFNpemUiLCJwb3MiLCJtYXJnaW5Cb3R0b20iLCJpY29uQnV0dG9uIiwiaW5wdXQiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsImZsZXgiLCJkaXZpZGVyIiwiaGVpZ2h0IiwiTWVzc2FnZUlkIiwibWVzc2FnZSIsInJvdXRlciIsImNsYXNzZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInVzZUVmZmVjdCIsInNldFZ1IiwicXVlcnkiLCJpZCIsImNvbG9yIiwibm9tIiwicG9zaXRpb24iLCJkYXlqcyIsImNyZWF0ZWRBdCIsImZvcm1hdCIsIm1haWwiLCJ0ZWwiLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsIm1zZyIsIm9uU3VibWl0Iiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtKOztBQUVsSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQixNQUFNO0FBQ3JD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QUE7QUFBQSxJQUxELENBZkQsQ0FIRCxDQURELENBckRELENBZEQsQ0FERCxDQURELENBREQ7QUF3R0EsQ0FwSEQ7O0dBQU1PLFM7VUFDV3pCLFMsRUFFbUIrQix3RDs7O0tBSDlCTixTOztBQWlJUyxxRUFBQXlCLCtEQUFVLENBQUN6QixTQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL21lc3NhZ2VzL1tpZF0uMjg1ZTE3NTkxZmM3YmE3ZTU0YjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzVmFsaWRFbGVtZW50LCB1c2VSZWYsIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VNZW1vLCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCBjcmVhdGVFbGVtZW50LCBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5cbnZhciBpc0hUTUxFbGVtZW50ID0gKHZhbHVlKSA9PiB2YWx1ZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuXG5jb25zdCBFVkVOVFMgPSB7XHJcbiAgICBCTFVSOiAnYmx1cicsXHJcbiAgICBDSEFOR0U6ICdjaGFuZ2UnLFxyXG4gICAgSU5QVVQ6ICdpbnB1dCcsXHJcbn07XHJcbmNvbnN0IFZBTElEQVRJT05fTU9ERSA9IHtcclxuICAgIG9uQmx1cjogJ29uQmx1cicsXHJcbiAgICBvbkNoYW5nZTogJ29uQ2hhbmdlJyxcclxuICAgIG9uU3VibWl0OiAnb25TdWJtaXQnLFxyXG4gICAgb25Ub3VjaGVkOiAnb25Ub3VjaGVkJyxcclxuICAgIGFsbDogJ2FsbCcsXHJcbn07XHJcbmNvbnN0IFNFTEVDVCA9ICdzZWxlY3QnO1xyXG5jb25zdCBVTkRFRklORUQgPSAndW5kZWZpbmVkJztcclxuY29uc3QgSU5QVVRfVkFMSURBVElPTl9SVUxFUyA9IHtcclxuICAgIG1heDogJ21heCcsXHJcbiAgICBtaW46ICdtaW4nLFxyXG4gICAgbWF4TGVuZ3RoOiAnbWF4TGVuZ3RoJyxcclxuICAgIG1pbkxlbmd0aDogJ21pbkxlbmd0aCcsXHJcbiAgICBwYXR0ZXJuOiAncGF0dGVybicsXHJcbiAgICByZXF1aXJlZDogJ3JlcXVpcmVkJyxcclxuICAgIHZhbGlkYXRlOiAndmFsaWRhdGUnLFxyXG59O1xuXG5mdW5jdGlvbiBhdHRhY2hFdmVudExpc3RlbmVycyh7IHJlZiB9LCBzaG91bGRBdHRhY2hDaGFuZ2VFdmVudCwgaGFuZGxlQ2hhbmdlKSB7XHJcbiAgICBpZiAoaXNIVE1MRWxlbWVudChyZWYpICYmIGhhbmRsZUNoYW5nZSkge1xyXG4gICAgICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKHNob3VsZEF0dGFjaENoYW5nZUV2ZW50ID8gRVZFTlRTLkNIQU5HRSA6IEVWRU5UUy5JTlBVVCwgaGFuZGxlQ2hhbmdlKTtcclxuICAgICAgICByZWYuYWRkRXZlbnRMaXN0ZW5lcihFVkVOVFMuQkxVUiwgaGFuZGxlQ2hhbmdlKTtcclxuICAgIH1cclxufVxuXG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSAodmFsdWUpID0+IHZhbHVlID09IG51bGw7XG5cbmNvbnN0IGlzT2JqZWN0VHlwZSA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JztcclxudmFyIGlzT2JqZWN0ID0gKHZhbHVlKSA9PiAhaXNOdWxsT3JVbmRlZmluZWQodmFsdWUpICYmXHJcbiAgICAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiZcclxuICAgIGlzT2JqZWN0VHlwZSh2YWx1ZSkgJiZcclxuICAgICEodmFsdWUgaW5zdGFuY2VvZiBEYXRlKTtcblxudmFyIGlzS2V5ID0gKHZhbHVlKSA9PiAvXlxcdyokLy50ZXN0KHZhbHVlKTtcblxudmFyIGNvbXBhY3QgPSAodmFsdWUpID0+IHZhbHVlLmZpbHRlcihCb29sZWFuKTtcblxudmFyIHN0cmluZ1RvUGF0aCA9IChpbnB1dCkgPT4gY29tcGFjdChpbnB1dFxyXG4gICAgLnJlcGxhY2UoL1tcInwnXS9nLCAnJylcclxuICAgIC5yZXBsYWNlKC9cXFsvZywgJy4nKVxyXG4gICAgLnJlcGxhY2UoL1xcXS9nLCAnJylcclxuICAgIC5zcGxpdCgnLicpKTtcblxuZnVuY3Rpb24gc2V0KG9iamVjdCwgcGF0aCwgdmFsdWUpIHtcclxuICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgY29uc3QgdGVtcFBhdGggPSBpc0tleShwYXRoKSA/IFtwYXRoXSA6IHN0cmluZ1RvUGF0aChwYXRoKTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHRlbXBQYXRoLmxlbmd0aDtcclxuICAgIGNvbnN0IGxhc3RJbmRleCA9IGxlbmd0aCAtIDE7XHJcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHRlbXBQYXRoW2luZGV4XTtcclxuICAgICAgICBsZXQgbmV3VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IGxhc3RJbmRleCkge1xyXG4gICAgICAgICAgICBjb25zdCBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9XHJcbiAgICAgICAgICAgICAgICBpc09iamVjdChvYmpWYWx1ZSkgfHwgQXJyYXkuaXNBcnJheShvYmpWYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICA/IG9ialZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiAhaXNOYU4oK3RlbXBQYXRoW2luZGV4ICsgMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JqZWN0W2tleV0gPSBuZXdWYWx1ZTtcclxuICAgICAgICBvYmplY3QgPSBvYmplY3Rba2V5XTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmplY3Q7XHJcbn1cblxudmFyIHRyYW5zZm9ybVRvTmVzdE9iamVjdCA9IChkYXRhLCB2YWx1ZSA9IHt9KSA9PiB7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgIWlzS2V5KGtleSkgPyBzZXQodmFsdWUsIGtleSwgZGF0YVtrZXldKSA6ICh2YWx1ZVtrZXldID0gZGF0YVtrZXldKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxufTtcblxudmFyIGlzVW5kZWZpbmVkID0gKHZhbCkgPT4gdmFsID09PSB1bmRlZmluZWQ7XG5cbnZhciBnZXQgPSAob2JqID0ge30sIHBhdGgsIGRlZmF1bHRWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gY29tcGFjdChwYXRoLnNwbGl0KC9bLFtcXF0uXSs/LykpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IChpc051bGxPclVuZGVmaW5lZChyZXN1bHQpID8gcmVzdWx0IDogcmVzdWx0W2tleV0pLCBvYmopO1xyXG4gICAgcmV0dXJuIGlzVW5kZWZpbmVkKHJlc3VsdCkgfHwgcmVzdWx0ID09PSBvYmpcclxuICAgICAgICA/IGlzVW5kZWZpbmVkKG9ialtwYXRoXSlcclxuICAgICAgICAgICAgPyBkZWZhdWx0VmFsdWVcclxuICAgICAgICAgICAgOiBvYmpbcGF0aF1cclxuICAgICAgICA6IHJlc3VsdDtcclxufTtcblxudmFyIGZvY3VzT25FcnJvckZpZWxkID0gKGZpZWxkcywgZmllbGRFcnJvcnMpID0+IHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGZpZWxkcykge1xyXG4gICAgICAgIGlmIChnZXQoZmllbGRFcnJvcnMsIGtleSkpIHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNba2V5XTtcclxuICAgICAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQucmVmLmZvY3VzICYmIGlzVW5kZWZpbmVkKGZpZWxkLnJlZi5mb2N1cygpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZmllbGQub3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLm9wdGlvbnNbMF0ucmVmLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XG5cbnZhciByZW1vdmVBbGxFdmVudExpc3RlbmVycyA9IChyZWYsIHZhbGlkYXRlV2l0aFN0YXRlVXBkYXRlKSA9PiB7XHJcbiAgICBpZiAoaXNIVE1MRWxlbWVudChyZWYpICYmIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoRVZFTlRTLklOUFVULCB2YWxpZGF0ZVdpdGhTdGF0ZVVwZGF0ZSk7XHJcbiAgICAgICAgcmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoRVZFTlRTLkNIQU5HRSwgdmFsaWRhdGVXaXRoU3RhdGVVcGRhdGUpO1xyXG4gICAgICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKEVWRU5UUy5CTFVSLCB2YWxpZGF0ZVdpdGhTdGF0ZVVwZGF0ZSk7XHJcbiAgICB9XHJcbn07XG5cbmNvbnN0IGRlZmF1bHRSZXR1cm4gPSB7XHJcbiAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgIHZhbHVlOiBudWxsLFxyXG59O1xyXG52YXIgZ2V0UmFkaW9WYWx1ZSA9IChvcHRpb25zKSA9PiBBcnJheS5pc0FycmF5KG9wdGlvbnMpXHJcbiAgICA/IG9wdGlvbnMucmVkdWNlKChwcmV2aW91cywgb3B0aW9uKSA9PiBvcHRpb24gJiYgb3B0aW9uLnJlZi5jaGVja2VkXHJcbiAgICAgICAgPyB7XHJcbiAgICAgICAgICAgIGlzVmFsaWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiBvcHRpb24ucmVmLnZhbHVlLFxyXG4gICAgICAgIH1cclxuICAgICAgICA6IHByZXZpb3VzLCBkZWZhdWx0UmV0dXJuKVxyXG4gICAgOiBkZWZhdWx0UmV0dXJuO1xuXG52YXIgZ2V0TXVsdGlwbGVTZWxlY3RWYWx1ZSA9IChvcHRpb25zKSA9PiBbLi4ub3B0aW9uc11cclxuICAgIC5maWx0ZXIoKHsgc2VsZWN0ZWQgfSkgPT4gc2VsZWN0ZWQpXHJcbiAgICAubWFwKCh7IHZhbHVlIH0pID0+IHZhbHVlKTtcblxudmFyIGlzUmFkaW9JbnB1dCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09ICdyYWRpbyc7XG5cbnZhciBpc0ZpbGVJbnB1dCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09ICdmaWxlJztcblxudmFyIGlzQ2hlY2tCb3hJbnB1dCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCc7XG5cbnZhciBpc011bHRpcGxlU2VsZWN0ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQudHlwZSA9PT0gYCR7U0VMRUNUfS1tdWx0aXBsZWA7XG5cbmNvbnN0IGRlZmF1bHRSZXN1bHQgPSB7XHJcbiAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICBpc1ZhbGlkOiBmYWxzZSxcclxufTtcclxuY29uc3QgdmFsaWRSZXN1bHQgPSB7IHZhbHVlOiB0cnVlLCBpc1ZhbGlkOiB0cnVlIH07XHJcbnZhciBnZXRDaGVja2JveFZhbHVlID0gKG9wdGlvbnMpID0+IHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbiAmJiBvcHRpb24ucmVmLmNoZWNrZWQpXHJcbiAgICAgICAgICAgICAgICAubWFwKCh7IHJlZjogeyB2YWx1ZSB9IH0pID0+IHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlcywgaXNWYWxpZDogISF2YWx1ZXMubGVuZ3RoIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgY2hlY2tlZCwgdmFsdWUsIGF0dHJpYnV0ZXMgfSA9IG9wdGlvbnNbMF0ucmVmO1xyXG4gICAgICAgIHJldHVybiBjaGVja2VkXHJcbiAgICAgICAgICAgID8gYXR0cmlidXRlcyAmJiAhaXNVbmRlZmluZWQoYXR0cmlidXRlcy52YWx1ZSlcclxuICAgICAgICAgICAgICAgID8gaXNVbmRlZmluZWQodmFsdWUpIHx8IHZhbHVlID09PSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgID8gdmFsaWRSZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICA6IHsgdmFsdWU6IHZhbHVlLCBpc1ZhbGlkOiB0cnVlIH1cclxuICAgICAgICAgICAgICAgIDogdmFsaWRSZXN1bHRcclxuICAgICAgICAgICAgOiBkZWZhdWx0UmVzdWx0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlZmF1bHRSZXN1bHQ7XHJcbn07XG5cbmZ1bmN0aW9uIGdldEZpZWxkVmFsdWUoZmllbGRzUmVmLCBuYW1lLCBzaGFsbG93RmllbGRzU3RhdGVSZWYsIGV4Y2x1ZGVEaXNhYmxlZCwgc2hvdWxkS2VlcFJhd1ZhbHVlKSB7XHJcbiAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1JlZi5jdXJyZW50W25hbWVdO1xyXG4gICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgY29uc3QgeyByZWY6IHsgdmFsdWUsIGRpc2FibGVkIH0sIHJlZiwgdmFsdWVBc051bWJlciwgdmFsdWVBc0RhdGUsIHNldFZhbHVlQXMsIH0gPSBmaWVsZDtcclxuICAgICAgICBpZiAoZGlzYWJsZWQgJiYgZXhjbHVkZURpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzRmlsZUlucHV0KHJlZikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlZi5maWxlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzUmFkaW9JbnB1dChyZWYpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRSYWRpb1ZhbHVlKGZpZWxkLm9wdGlvbnMpLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNNdWx0aXBsZVNlbGVjdChyZWYpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRNdWx0aXBsZVNlbGVjdFZhbHVlKHJlZi5vcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzQ2hlY2tCb3hJbnB1dChyZWYpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRDaGVja2JveFZhbHVlKGZpZWxkLm9wdGlvbnMpLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2hvdWxkS2VlcFJhd1ZhbHVlXHJcbiAgICAgICAgICAgID8gdmFsdWVcclxuICAgICAgICAgICAgOiB2YWx1ZUFzTnVtYmVyXHJcbiAgICAgICAgICAgICAgICA/IHZhbHVlID09PSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgID8gTmFOXHJcbiAgICAgICAgICAgICAgICAgICAgOiArdmFsdWVcclxuICAgICAgICAgICAgICAgIDogdmFsdWVBc0RhdGVcclxuICAgICAgICAgICAgICAgICAgICA/IHJlZi52YWx1ZUFzRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogc2V0VmFsdWVBc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNldFZhbHVlQXModmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdmFsdWU7XHJcbiAgICB9XHJcbiAgICBpZiAoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICB9XHJcbn1cblxuZnVuY3Rpb24gaXNEZXRhY2hlZChlbGVtZW50KSB7XHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHxcclxuICAgICAgICBlbGVtZW50Lm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNEZXRhY2hlZChlbGVtZW50LnBhcmVudE5vZGUpO1xyXG59XG5cbnZhciBpc0VtcHR5T2JqZWN0ID0gKHZhbHVlKSA9PiBpc09iamVjdCh2YWx1ZSkgJiYgIU9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGg7XG5cbnZhciBpc0Jvb2xlYW4gPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nO1xuXG5mdW5jdGlvbiBiYXNlR2V0KG9iamVjdCwgdXBkYXRlUGF0aCkge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gdXBkYXRlUGF0aC5zbGljZSgwLCAtMSkubGVuZ3RoO1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgICAgIG9iamVjdCA9IGlzVW5kZWZpbmVkKG9iamVjdCkgPyBpbmRleCsrIDogb2JqZWN0W3VwZGF0ZVBhdGhbaW5kZXgrK11dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iamVjdDtcclxufVxyXG5mdW5jdGlvbiB1bnNldChvYmplY3QsIHBhdGgpIHtcclxuICAgIGNvbnN0IHVwZGF0ZVBhdGggPSBpc0tleShwYXRoKSA/IFtwYXRoXSA6IHN0cmluZ1RvUGF0aChwYXRoKTtcclxuICAgIGNvbnN0IGNoaWxkT2JqZWN0ID0gdXBkYXRlUGF0aC5sZW5ndGggPT0gMSA/IG9iamVjdCA6IGJhc2VHZXQob2JqZWN0LCB1cGRhdGVQYXRoKTtcclxuICAgIGNvbnN0IGtleSA9IHVwZGF0ZVBhdGhbdXBkYXRlUGF0aC5sZW5ndGggLSAxXTtcclxuICAgIGxldCBwcmV2aW91c09ialJlZjtcclxuICAgIGlmIChjaGlsZE9iamVjdCkge1xyXG4gICAgICAgIGRlbGV0ZSBjaGlsZE9iamVjdFtrZXldO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCB1cGRhdGVQYXRoLnNsaWNlKDAsIC0xKS5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgICAgIGxldCBvYmplY3RSZWY7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhdGhzID0gdXBkYXRlUGF0aC5zbGljZSgwLCAtKGsgKyAxKSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhdGhzTGVuZ3RoID0gY3VycmVudFBhdGhzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgaWYgKGsgPiAwKSB7XHJcbiAgICAgICAgICAgIHByZXZpb3VzT2JqUmVmID0gb2JqZWN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoKytpbmRleCA8IGN1cnJlbnRQYXRocy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGN1cnJlbnRQYXRoc1tpbmRleF07XHJcbiAgICAgICAgICAgIG9iamVjdFJlZiA9IG9iamVjdFJlZiA/IG9iamVjdFJlZltpdGVtXSA6IG9iamVjdFtpdGVtXTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYXRoc0xlbmd0aCA9PT0gaW5kZXggJiZcclxuICAgICAgICAgICAgICAgICgoaXNPYmplY3Qob2JqZWN0UmVmKSAmJiBpc0VtcHR5T2JqZWN0KG9iamVjdFJlZikpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkob2JqZWN0UmVmKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhb2JqZWN0UmVmLmZpbHRlcigoZGF0YSkgPT4gKGlzT2JqZWN0KGRhdGEpICYmICFpc0VtcHR5T2JqZWN0KGRhdGEpKSB8fCBpc0Jvb2xlYW4oZGF0YSkpLmxlbmd0aCkpKSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c09ialJlZiA/IGRlbGV0ZSBwcmV2aW91c09ialJlZltpdGVtXSA6IGRlbGV0ZSBvYmplY3RbaXRlbV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJldmlvdXNPYmpSZWYgPSBvYmplY3RSZWY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iamVjdDtcclxufVxuXG5jb25zdCBpc1NhbWVSZWYgPSAoZmllbGRWYWx1ZSwgcmVmKSA9PiBmaWVsZFZhbHVlICYmIGZpZWxkVmFsdWUucmVmID09PSByZWY7XHJcbmZ1bmN0aW9uIGZpbmRSZW1vdmVkRmllbGRBbmRSZW1vdmVMaXN0ZW5lcihmaWVsZHNSZWYsIGhhbmRsZUNoYW5nZSwgZmllbGQsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZiwgc2hvdWxkVW5yZWdpc3RlciwgZm9yY2VEZWxldGUpIHtcclxuICAgIGNvbnN0IHsgcmVmLCByZWY6IHsgbmFtZSB9LCB9ID0gZmllbGQ7XHJcbiAgICBjb25zdCBmaWVsZFJlZiA9IGZpZWxkc1JlZi5jdXJyZW50W25hbWVdO1xyXG4gICAgaWYgKCFzaG91bGRVbnJlZ2lzdGVyKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBnZXRGaWVsZFZhbHVlKGZpZWxkc1JlZiwgbmFtZSwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmKTtcclxuICAgICAgICAhaXNVbmRlZmluZWQodmFsdWUpICYmIHNldChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCwgbmFtZSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZWYudHlwZSB8fCAhZmllbGRSZWYpIHtcclxuICAgICAgICBkZWxldGUgZmllbGRzUmVmLmN1cnJlbnRbbmFtZV07XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzUmFkaW9JbnB1dChyZWYpIHx8IGlzQ2hlY2tCb3hJbnB1dChyZWYpKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGRSZWYub3B0aW9ucykgJiYgZmllbGRSZWYub3B0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29tcGFjdChmaWVsZFJlZi5vcHRpb25zKS5mb3JFYWNoKChvcHRpb24gPSB7fSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICgoaXNEZXRhY2hlZChvcHRpb24ucmVmKSAmJiBpc1NhbWVSZWYob3B0aW9uLCBvcHRpb24ucmVmKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICBmb3JjZURlbGV0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzKG9wdGlvbi5yZWYsIGhhbmRsZUNoYW5nZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5zZXQoZmllbGRSZWYub3B0aW9ucywgYFske2luZGV4fV1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZFJlZi5vcHRpb25zICYmICFjb21wYWN0KGZpZWxkUmVmLm9wdGlvbnMpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGZpZWxkc1JlZi5jdXJyZW50W25hbWVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkZWxldGUgZmllbGRzUmVmLmN1cnJlbnRbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKGlzRGV0YWNoZWQocmVmKSAmJiBpc1NhbWVSZWYoZmllbGRSZWYsIHJlZikpIHx8IGZvcmNlRGVsZXRlKSB7XHJcbiAgICAgICAgcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMocmVmLCBoYW5kbGVDaGFuZ2UpO1xyXG4gICAgICAgIGRlbGV0ZSBmaWVsZHNSZWYuY3VycmVudFtuYW1lXTtcclxuICAgIH1cclxufVxuXG52YXIgaXNQcmltaXRpdmUgPSAodmFsdWUpID0+IGlzTnVsbE9yVW5kZWZpbmVkKHZhbHVlKSB8fCAhaXNPYmplY3RUeXBlKHZhbHVlKTtcblxuZnVuY3Rpb24gZGVlcE1lcmdlKHRhcmdldCwgc291cmNlKSB7XHJcbiAgICBpZiAoaXNQcmltaXRpdmUodGFyZ2V0KSB8fCBpc1ByaW1pdGl2ZShzb3VyY2UpKSB7XHJcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qga2V5IGluIHNvdXJjZSkge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFZhbHVlID0gdGFyZ2V0W2tleV07XHJcbiAgICAgICAgY29uc3Qgc291cmNlVmFsdWUgPSBzb3VyY2Vba2V5XTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9XHJcbiAgICAgICAgICAgICAgICAoaXNPYmplY3QodGFyZ2V0VmFsdWUpICYmIGlzT2JqZWN0KHNvdXJjZVZhbHVlKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoQXJyYXkuaXNBcnJheSh0YXJnZXRWYWx1ZSkgJiYgQXJyYXkuaXNBcnJheShzb3VyY2VWYWx1ZSkpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBkZWVwTWVyZ2UodGFyZ2V0VmFsdWUsIHNvdXJjZVZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIDogc291cmNlVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChfYSkgeyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XG5cbmZ1bmN0aW9uIGRlZXBFcXVhbChvYmplY3QxLCBvYmplY3QyLCBpc0Vycm9yT2JqZWN0KSB7XHJcbiAgICBpZiAoaXNQcmltaXRpdmUob2JqZWN0MSkgfHxcclxuICAgICAgICBpc1ByaW1pdGl2ZShvYmplY3QyKSB8fFxyXG4gICAgICAgIG9iamVjdDEgaW5zdGFuY2VvZiBEYXRlIHx8XHJcbiAgICAgICAgb2JqZWN0MiBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICByZXR1cm4gb2JqZWN0MSA9PT0gb2JqZWN0MjtcclxuICAgIH1cclxuICAgIGlmICghaXNWYWxpZEVsZW1lbnQob2JqZWN0MSkpIHtcclxuICAgICAgICBjb25zdCBrZXlzMSA9IE9iamVjdC5rZXlzKG9iamVjdDEpO1xyXG4gICAgICAgIGNvbnN0IGtleXMyID0gT2JqZWN0LmtleXMob2JqZWN0Mik7XHJcbiAgICAgICAgaWYgKGtleXMxLmxlbmd0aCAhPT0ga2V5czIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5czEpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsMSA9IG9iamVjdDFba2V5XTtcclxuICAgICAgICAgICAgaWYgKCEoaXNFcnJvck9iamVjdCAmJiBrZXkgPT09ICdyZWYnKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsMiA9IG9iamVjdDJba2V5XTtcclxuICAgICAgICAgICAgICAgIGlmICgoaXNPYmplY3QodmFsMSkgfHwgQXJyYXkuaXNBcnJheSh2YWwxKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAoaXNPYmplY3QodmFsMikgfHwgQXJyYXkuaXNBcnJheSh2YWwyKSlcclxuICAgICAgICAgICAgICAgICAgICA/ICFkZWVwRXF1YWwodmFsMSwgdmFsMiwgaXNFcnJvck9iamVjdClcclxuICAgICAgICAgICAgICAgICAgICA6IHZhbDEgIT09IHZhbDIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxuXG5mdW5jdGlvbiBzZXREaXJ0eUZpZWxkcyh2YWx1ZXMsIGRlZmF1bHRWYWx1ZXMsIGRpcnR5RmllbGRzLCBwYXJlbnROb2RlLCBwYXJlbnROYW1lKSB7XHJcbiAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgIHdoaWxlICgrK2luZGV4IDwgdmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlc1tpbmRleF0pIHtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVzW2luZGV4XVtrZXldKSkge1xyXG4gICAgICAgICAgICAgICAgIWRpcnR5RmllbGRzW2luZGV4XSAmJiAoZGlydHlGaWVsZHNbaW5kZXhdID0ge30pO1xyXG4gICAgICAgICAgICAgICAgZGlydHlGaWVsZHNbaW5kZXhdW2tleV0gPSBbXTtcclxuICAgICAgICAgICAgICAgIHNldERpcnR5RmllbGRzKHZhbHVlc1tpbmRleF1ba2V5XSwgZ2V0KGRlZmF1bHRWYWx1ZXNbaW5kZXhdIHx8IHt9LCBrZXksIFtdKSwgZGlydHlGaWVsZHNbaW5kZXhdW2tleV0sIGRpcnR5RmllbGRzW2luZGV4XSwga2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlZXBFcXVhbChnZXQoZGVmYXVsdFZhbHVlc1tpbmRleF0gfHwge30sIGtleSksIHZhbHVlc1tpbmRleF1ba2V5XSlcclxuICAgICAgICAgICAgICAgICAgICA/IHNldChkaXJ0eUZpZWxkc1tpbmRleF0gfHwge30sIGtleSlcclxuICAgICAgICAgICAgICAgICAgICA6IChkaXJ0eUZpZWxkc1tpbmRleF0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRpcnR5RmllbGRzW2luZGV4XSksIHsgW2tleV06IHRydWUgfSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmVudE5vZGUgJiZcclxuICAgICAgICAgICAgIWRpcnR5RmllbGRzLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICBkZWxldGUgcGFyZW50Tm9kZVtwYXJlbnROYW1lXTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXJ0eUZpZWxkcztcclxufVxyXG52YXIgc2V0RmllbGRBcnJheURpcnR5RmllbGRzID0gKHZhbHVlcywgZGVmYXVsdFZhbHVlcywgZGlydHlGaWVsZHMpID0+IGRlZXBNZXJnZShzZXREaXJ0eUZpZWxkcyh2YWx1ZXMsIGRlZmF1bHRWYWx1ZXMsIGRpcnR5RmllbGRzLnNsaWNlKDAsIHZhbHVlcy5sZW5ndGgpKSwgc2V0RGlydHlGaWVsZHMoZGVmYXVsdFZhbHVlcywgdmFsdWVzLCBkaXJ0eUZpZWxkcy5zbGljZSgwLCB2YWx1ZXMubGVuZ3RoKSkpO1xuXG52YXIgaXNTdHJpbmcgPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG5cbnZhciBnZXRGaWVsZHNWYWx1ZXMgPSAoZmllbGRzUmVmLCBzaGFsbG93RmllbGRzU3RhdGUsIHNob3VsZFVucmVnaXN0ZXIsIGV4Y2x1ZGVEaXNhYmxlZCwgc2VhcmNoKSA9PiB7XHJcbiAgICBjb25zdCBvdXRwdXQgPSB7fTtcclxuICAgIGZvciAoY29uc3QgbmFtZSBpbiBmaWVsZHNSZWYuY3VycmVudCkge1xyXG4gICAgICAgIGlmIChpc1VuZGVmaW5lZChzZWFyY2gpIHx8XHJcbiAgICAgICAgICAgIChpc1N0cmluZyhzZWFyY2gpXHJcbiAgICAgICAgICAgICAgICA/IG5hbWUuc3RhcnRzV2l0aChzZWFyY2gpXHJcbiAgICAgICAgICAgICAgICA6IEFycmF5LmlzQXJyYXkoc2VhcmNoKSAmJiBzZWFyY2guZmluZCgoZGF0YSkgPT4gbmFtZS5zdGFydHNXaXRoKGRhdGEpKSkpIHtcclxuICAgICAgICAgICAgb3V0cHV0W25hbWVdID0gZ2V0RmllbGRWYWx1ZShmaWVsZHNSZWYsIG5hbWUsIHVuZGVmaW5lZCwgZXhjbHVkZURpc2FibGVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2hvdWxkVW5yZWdpc3RlclxyXG4gICAgICAgID8gdHJhbnNmb3JtVG9OZXN0T2JqZWN0KG91dHB1dClcclxuICAgICAgICA6IGRlZXBNZXJnZShzaGFsbG93RmllbGRzU3RhdGUsIHRyYW5zZm9ybVRvTmVzdE9iamVjdChvdXRwdXQpKTtcclxufTtcblxudmFyIGlzRXJyb3JTdGF0ZUNoYW5nZWQgPSAoeyBlcnJvcnMsIG5hbWUsIGVycm9yLCB2YWxpZEZpZWxkcywgZmllbGRzV2l0aFZhbGlkYXRpb24sIH0pID0+IHtcclxuICAgIGNvbnN0IGlzVmFsaWQgPSBpc1VuZGVmaW5lZChlcnJvcik7XHJcbiAgICBjb25zdCBwcmV2aW91c0Vycm9yID0gZ2V0KGVycm9ycywgbmFtZSk7XHJcbiAgICByZXR1cm4gKChpc1ZhbGlkICYmICEhcHJldmlvdXNFcnJvcikgfHxcclxuICAgICAgICAoIWlzVmFsaWQgJiYgIWRlZXBFcXVhbChwcmV2aW91c0Vycm9yLCBlcnJvciwgdHJ1ZSkpIHx8XHJcbiAgICAgICAgKGlzVmFsaWQgJiYgZ2V0KGZpZWxkc1dpdGhWYWxpZGF0aW9uLCBuYW1lKSAmJiAhZ2V0KHZhbGlkRmllbGRzLCBuYW1lKSkpO1xyXG59O1xuXG52YXIgaXNSZWdleCA9ICh2YWx1ZSkgPT4gdmFsdWUgaW5zdGFuY2VvZiBSZWdFeHA7XG5cbnZhciBnZXRWYWx1ZUFuZE1lc3NhZ2UgPSAodmFsaWRhdGlvbkRhdGEpID0+IGlzT2JqZWN0KHZhbGlkYXRpb25EYXRhKSAmJiAhaXNSZWdleCh2YWxpZGF0aW9uRGF0YSlcclxuICAgID8gdmFsaWRhdGlvbkRhdGFcclxuICAgIDoge1xyXG4gICAgICAgIHZhbHVlOiB2YWxpZGF0aW9uRGF0YSxcclxuICAgICAgICBtZXNzYWdlOiAnJyxcclxuICAgIH07XG5cbnZhciBpc0Z1bmN0aW9uID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG5cbnZhciBpc01lc3NhZ2UgPSAodmFsdWUpID0+IGlzU3RyaW5nKHZhbHVlKSB8fCBpc1ZhbGlkRWxlbWVudCh2YWx1ZSk7XG5cbmZ1bmN0aW9uIGdldFZhbGlkYXRlRXJyb3IocmVzdWx0LCByZWYsIHR5cGUgPSAndmFsaWRhdGUnKSB7XHJcbiAgICBpZiAoaXNNZXNzYWdlKHJlc3VsdCkgfHwgKGlzQm9vbGVhbihyZXN1bHQpICYmICFyZXN1bHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogaXNNZXNzYWdlKHJlc3VsdCkgPyByZXN1bHQgOiAnJyxcclxuICAgICAgICAgICAgcmVmLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cblxudmFyIGFwcGVuZEVycm9ycyA9IChuYW1lLCB2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEsIGVycm9ycywgdHlwZSwgbWVzc2FnZSkgPT4gdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhXHJcbiAgICA/IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZXJyb3JzW25hbWVdKSwgeyB0eXBlczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCAoZXJyb3JzW25hbWVdICYmIGVycm9yc1tuYW1lXS50eXBlcyA/IGVycm9yc1tuYW1lXS50eXBlcyA6IHt9KSksIHsgW3R5cGVdOiBtZXNzYWdlIHx8IHRydWUgfSkgfSkgOiB7fTtcblxudmFyIHZhbGlkYXRlRmllbGQgPSBhc3luYyAoZmllbGRzUmVmLCB2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEsIHsgcmVmLCByZWY6IHsgdmFsdWUgfSwgb3B0aW9ucywgcmVxdWlyZWQsIG1heExlbmd0aCwgbWluTGVuZ3RoLCBtaW4sIG1heCwgcGF0dGVybiwgdmFsaWRhdGUsIH0sIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZikgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IHJlZi5uYW1lO1xyXG4gICAgY29uc3QgZXJyb3IgPSB7fTtcclxuICAgIGNvbnN0IGlzUmFkaW8gPSBpc1JhZGlvSW5wdXQocmVmKTtcclxuICAgIGNvbnN0IGlzQ2hlY2tCb3ggPSBpc0NoZWNrQm94SW5wdXQocmVmKTtcclxuICAgIGNvbnN0IGlzUmFkaW9PckNoZWNrYm94ID0gaXNSYWRpbyB8fCBpc0NoZWNrQm94O1xyXG4gICAgY29uc3QgaXNFbXB0eSA9IHZhbHVlID09PSAnJztcclxuICAgIGNvbnN0IGFwcGVuZEVycm9yc0N1cnJ5ID0gYXBwZW5kRXJyb3JzLmJpbmQobnVsbCwgbmFtZSwgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBlcnJvcik7XHJcbiAgICBjb25zdCBnZXRNaW5NYXhNZXNzYWdlID0gKGV4Y2VlZE1heCwgbWF4TGVuZ3RoTWVzc2FnZSwgbWluTGVuZ3RoTWVzc2FnZSwgbWF4VHlwZSA9IElOUFVUX1ZBTElEQVRJT05fUlVMRVMubWF4TGVuZ3RoLCBtaW5UeXBlID0gSU5QVVRfVkFMSURBVElPTl9SVUxFUy5taW5MZW5ndGgpID0+IHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXhjZWVkTWF4ID8gbWF4TGVuZ3RoTWVzc2FnZSA6IG1pbkxlbmd0aE1lc3NhZ2U7XHJcbiAgICAgICAgZXJyb3JbbmFtZV0gPSBPYmplY3QuYXNzaWduKHsgdHlwZTogZXhjZWVkTWF4ID8gbWF4VHlwZSA6IG1pblR5cGUsIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHJlZiB9LCAoZXhjZWVkTWF4XHJcbiAgICAgICAgICAgID8gYXBwZW5kRXJyb3JzQ3VycnkobWF4VHlwZSwgbWVzc2FnZSlcclxuICAgICAgICAgICAgOiBhcHBlbmRFcnJvcnNDdXJyeShtaW5UeXBlLCBtZXNzYWdlKSkpO1xyXG4gICAgfTtcclxuICAgIGlmIChyZXF1aXJlZCAmJlxyXG4gICAgICAgICgoIWlzUmFkaW8gJiYgIWlzQ2hlY2tCb3ggJiYgKGlzRW1wdHkgfHwgaXNOdWxsT3JVbmRlZmluZWQodmFsdWUpKSkgfHxcclxuICAgICAgICAgICAgKGlzQm9vbGVhbih2YWx1ZSkgJiYgIXZhbHVlKSB8fFxyXG4gICAgICAgICAgICAoaXNDaGVja0JveCAmJiAhZ2V0Q2hlY2tib3hWYWx1ZShvcHRpb25zKS5pc1ZhbGlkKSB8fFxyXG4gICAgICAgICAgICAoaXNSYWRpbyAmJiAhZ2V0UmFkaW9WYWx1ZShvcHRpb25zKS5pc1ZhbGlkKSkpIHtcclxuICAgICAgICBjb25zdCB7IHZhbHVlLCBtZXNzYWdlIH0gPSBpc01lc3NhZ2UocmVxdWlyZWQpXHJcbiAgICAgICAgICAgID8geyB2YWx1ZTogISFyZXF1aXJlZCwgbWVzc2FnZTogcmVxdWlyZWQgfVxyXG4gICAgICAgICAgICA6IGdldFZhbHVlQW5kTWVzc2FnZShyZXF1aXJlZCk7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGVycm9yW25hbWVdID0gT2JqZWN0LmFzc2lnbih7IHR5cGU6IElOUFVUX1ZBTElEQVRJT05fUlVMRVMucmVxdWlyZWQsIG1lc3NhZ2UsIHJlZjogaXNSYWRpb09yQ2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICA/ICgoZmllbGRzUmVmLmN1cnJlbnRbbmFtZV0ub3B0aW9ucyB8fCBbXSlbMF0gfHwge30pLnJlZlxyXG4gICAgICAgICAgICAgICAgICAgIDogcmVmIH0sIGFwcGVuZEVycm9yc0N1cnJ5KElOUFVUX1ZBTElEQVRJT05fUlVMRVMucmVxdWlyZWQsIG1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICgoIWlzTnVsbE9yVW5kZWZpbmVkKG1pbikgfHwgIWlzTnVsbE9yVW5kZWZpbmVkKG1heCkpICYmIHZhbHVlICE9PSAnJykge1xyXG4gICAgICAgIGxldCBleGNlZWRNYXg7XHJcbiAgICAgICAgbGV0IGV4Y2VlZE1pbjtcclxuICAgICAgICBjb25zdCBtYXhPdXRwdXQgPSBnZXRWYWx1ZUFuZE1lc3NhZ2UobWF4KTtcclxuICAgICAgICBjb25zdCBtaW5PdXRwdXQgPSBnZXRWYWx1ZUFuZE1lc3NhZ2UobWluKTtcclxuICAgICAgICBpZiAoIWlzTmFOKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZU51bWJlciA9IHJlZi52YWx1ZUFzTnVtYmVyIHx8IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKG1heE91dHB1dC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGV4Y2VlZE1heCA9IHZhbHVlTnVtYmVyID4gbWF4T3V0cHV0LnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQobWluT3V0cHV0LnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZXhjZWVkTWluID0gdmFsdWVOdW1iZXIgPCBtaW5PdXRwdXQudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlRGF0ZSA9IHJlZi52YWx1ZUFzRGF0ZSB8fCBuZXcgRGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyhtYXhPdXRwdXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBleGNlZWRNYXggPSB2YWx1ZURhdGUgPiBuZXcgRGF0ZShtYXhPdXRwdXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyhtaW5PdXRwdXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBleGNlZWRNaW4gPSB2YWx1ZURhdGUgPCBuZXcgRGF0ZShtaW5PdXRwdXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChleGNlZWRNYXggfHwgZXhjZWVkTWluKSB7XHJcbiAgICAgICAgICAgIGdldE1pbk1heE1lc3NhZ2UoISFleGNlZWRNYXgsIG1heE91dHB1dC5tZXNzYWdlLCBtaW5PdXRwdXQubWVzc2FnZSwgSU5QVVRfVkFMSURBVElPTl9SVUxFUy5tYXgsIElOUFVUX1ZBTElEQVRJT05fUlVMRVMubWluKTtcclxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgIWlzRW1wdHkgJiYgKG1heExlbmd0aCB8fCBtaW5MZW5ndGgpKSB7XHJcbiAgICAgICAgY29uc3QgbWF4TGVuZ3RoT3V0cHV0ID0gZ2V0VmFsdWVBbmRNZXNzYWdlKG1heExlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgbWluTGVuZ3RoT3V0cHV0ID0gZ2V0VmFsdWVBbmRNZXNzYWdlKG1pbkxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgZXhjZWVkTWF4ID0gIWlzTnVsbE9yVW5kZWZpbmVkKG1heExlbmd0aE91dHB1dC52YWx1ZSkgJiZcclxuICAgICAgICAgICAgdmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoT3V0cHV0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGV4Y2VlZE1pbiA9ICFpc051bGxPclVuZGVmaW5lZChtaW5MZW5ndGhPdXRwdXQudmFsdWUpICYmXHJcbiAgICAgICAgICAgIHZhbHVlLmxlbmd0aCA8IG1pbkxlbmd0aE91dHB1dC52YWx1ZTtcclxuICAgICAgICBpZiAoZXhjZWVkTWF4IHx8IGV4Y2VlZE1pbikge1xyXG4gICAgICAgICAgICBnZXRNaW5NYXhNZXNzYWdlKGV4Y2VlZE1heCwgbWF4TGVuZ3RoT3V0cHV0Lm1lc3NhZ2UsIG1pbkxlbmd0aE91dHB1dC5tZXNzYWdlKTtcclxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChpc1N0cmluZyh2YWx1ZSkgJiYgcGF0dGVybiAmJiAhaXNFbXB0eSkge1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWU6IHBhdHRlcm5WYWx1ZSwgbWVzc2FnZSB9ID0gZ2V0VmFsdWVBbmRNZXNzYWdlKHBhdHRlcm4pO1xyXG4gICAgICAgIGlmIChpc1JlZ2V4KHBhdHRlcm5WYWx1ZSkgJiYgIXBhdHRlcm5WYWx1ZS50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICBlcnJvcltuYW1lXSA9IE9iamVjdC5hc3NpZ24oeyB0eXBlOiBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLnBhdHRlcm4sIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICByZWYgfSwgYXBwZW5kRXJyb3JzQ3VycnkoSU5QVVRfVkFMSURBVElPTl9SVUxFUy5wYXR0ZXJuLCBtZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodmFsaWRhdGUpIHtcclxuICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gZ2V0RmllbGRWYWx1ZShmaWVsZHNSZWYsIG5hbWUsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZiwgZmFsc2UsIHRydWUpO1xyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRlUmVmID0gaXNSYWRpb09yQ2hlY2tib3ggJiYgb3B0aW9ucyA/IG9wdGlvbnNbMF0ucmVmIDogcmVmO1xyXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKHZhbGlkYXRlKSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB2YWxpZGF0ZShmaWVsZFZhbHVlKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVFcnJvciA9IGdldFZhbGlkYXRlRXJyb3IocmVzdWx0LCB2YWxpZGF0ZVJlZik7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZUVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcltuYW1lXSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdmFsaWRhdGVFcnJvciksIGFwcGVuZEVycm9yc0N1cnJ5KElOUFVUX1ZBTElEQVRJT05fUlVMRVMudmFsaWRhdGUsIHZhbGlkYXRlRXJyb3IubWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNPYmplY3QodmFsaWRhdGUpKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWxpZGF0aW9uUmVzdWx0ID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsaWRhdGVGdW5jdGlvbl0gb2YgT2JqZWN0LmVudHJpZXModmFsaWRhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzRW1wdHlPYmplY3QodmFsaWRhdGlvblJlc3VsdCkgJiYgIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVSZXN1bHQgPSBhd2FpdCB2YWxpZGF0ZUZ1bmN0aW9uKGZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVFcnJvciA9IGdldFZhbGlkYXRlRXJyb3IodmFsaWRhdGVSZXN1bHQsIHZhbGlkYXRlUmVmLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUmVzdWx0ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB2YWxpZGF0ZUVycm9yKSwgYXBwZW5kRXJyb3JzQ3Vycnkoa2V5LCB2YWxpZGF0ZUVycm9yLm1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yW25hbWVdID0gdmFsaWRhdGlvblJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFpc0VtcHR5T2JqZWN0KHZhbGlkYXRpb25SZXN1bHQpKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcltuYW1lXSA9IE9iamVjdC5hc3NpZ24oeyByZWY6IHZhbGlkYXRlUmVmIH0sIHZhbGlkYXRpb25SZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbn07XG5cbmNvbnN0IGdldFBhdGggPSAocm9vdFBhdGgsIHZhbHVlcywgcGF0aHMgPSBbXSkgPT4ge1xyXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiB2YWx1ZXMpIHtcclxuICAgICAgICBjb25zdCByb290TmFtZSA9IChyb290UGF0aCArXHJcbiAgICAgICAgICAgIChpc09iamVjdCh2YWx1ZXMpXHJcbiAgICAgICAgICAgICAgICA/IGAuJHtwcm9wZXJ0eX1gXHJcbiAgICAgICAgICAgICAgICA6IGBbJHtwcm9wZXJ0eX1dYCkpO1xyXG4gICAgICAgIGlzUHJpbWl0aXZlKHZhbHVlc1twcm9wZXJ0eV0pXHJcbiAgICAgICAgICAgID8gcGF0aHMucHVzaChyb290TmFtZSlcclxuICAgICAgICAgICAgOiBnZXRQYXRoKHJvb3ROYW1lLCB2YWx1ZXNbcHJvcGVydHldLCBwYXRocyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGF0aHM7XHJcbn07XG5cbnZhciBhc3NpZ25XYXRjaEZpZWxkcyA9IChmaWVsZFZhbHVlcywgZmllbGROYW1lLCB3YXRjaEZpZWxkcywgaW5wdXRWYWx1ZSwgaXNTaW5nbGVGaWVsZCkgPT4ge1xyXG4gICAgbGV0IHZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgd2F0Y2hGaWVsZHMuYWRkKGZpZWxkTmFtZSk7XHJcbiAgICBpZiAoIWlzRW1wdHlPYmplY3QoZmllbGRWYWx1ZXMpKSB7XHJcbiAgICAgICAgdmFsdWUgPSBnZXQoZmllbGRWYWx1ZXMsIGZpZWxkTmFtZSk7XHJcbiAgICAgICAgaWYgKGlzT2JqZWN0KHZhbHVlKSB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICBnZXRQYXRoKGZpZWxkTmFtZSwgdmFsdWUpLmZvckVhY2goKG5hbWUpID0+IHdhdGNoRmllbGRzLmFkZChuYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzVW5kZWZpbmVkKHZhbHVlKVxyXG4gICAgICAgID8gaXNTaW5nbGVGaWVsZFxyXG4gICAgICAgICAgICA/IGlucHV0VmFsdWVcclxuICAgICAgICAgICAgOiBnZXQoaW5wdXRWYWx1ZSwgZmllbGROYW1lKVxyXG4gICAgICAgIDogdmFsdWU7XHJcbn07XG5cbnZhciBza2lwVmFsaWRhdGlvbiA9ICh7IGlzT25CbHVyLCBpc09uQ2hhbmdlLCBpc09uVG91Y2gsIGlzVG91Y2hlZCwgaXNSZVZhbGlkYXRlT25CbHVyLCBpc1JlVmFsaWRhdGVPbkNoYW5nZSwgaXNCbHVyRXZlbnQsIGlzU3VibWl0dGVkLCBpc09uQWxsLCB9KSA9PiB7XHJcbiAgICBpZiAoaXNPbkFsbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKCFpc1N1Ym1pdHRlZCAmJiBpc09uVG91Y2gpIHtcclxuICAgICAgICByZXR1cm4gIShpc1RvdWNoZWQgfHwgaXNCbHVyRXZlbnQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNTdWJtaXR0ZWQgPyBpc1JlVmFsaWRhdGVPbkJsdXIgOiBpc09uQmx1cikge1xyXG4gICAgICAgIHJldHVybiAhaXNCbHVyRXZlbnQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc1N1Ym1pdHRlZCA/IGlzUmVWYWxpZGF0ZU9uQ2hhbmdlIDogaXNPbkNoYW5nZSkge1xyXG4gICAgICAgIHJldHVybiBpc0JsdXJFdmVudDtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59O1xuXG52YXIgZ2V0RmllbGRBcnJheVBhcmVudE5hbWUgPSAobmFtZSkgPT4gbmFtZS5zdWJzdHJpbmcoMCwgbmFtZS5pbmRleE9mKCdbJykpO1xuXG5jb25zdCBpc01hdGNoRmllbGRBcnJheU5hbWUgPSAobmFtZSwgc2VhcmNoTmFtZSkgPT4gUmVnRXhwKGBeJHtzZWFyY2hOYW1lfShbfC4pXFxcXGQrYC5yZXBsYWNlKC9cXFsvZywgJ1xcXFxbJykucmVwbGFjZSgvXFxdL2csICdcXFxcXScpKS50ZXN0KG5hbWUpO1xyXG52YXIgaXNOYW1lSW5GaWVsZEFycmF5ID0gKG5hbWVzLCBuYW1lKSA9PiBbLi4ubmFtZXNdLnNvbWUoKGN1cnJlbnQpID0+IGlzTWF0Y2hGaWVsZEFycmF5TmFtZShuYW1lLCBjdXJyZW50KSk7XG5cbnZhciBpc1NlbGVjdElucHV0ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQudHlwZSA9PT0gYCR7U0VMRUNUfS1vbmVgO1xuXG5mdW5jdGlvbiBvbkRvbVJlbW92ZShmaWVsZHNSZWYsIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lckFuZFJlZikge1xyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBPYmplY3QudmFsdWVzKGZpZWxkc1JlZi5jdXJyZW50KSkge1xyXG4gICAgICAgICAgICBpZiAoZmllbGQgJiYgZmllbGQub3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2YgZmllbGQub3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gJiYgb3B0aW9uLnJlZiAmJiBpc0RldGFjaGVkKG9wdGlvbi5yZWYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lckFuZFJlZihmaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGZpZWxkICYmIGlzRGV0YWNoZWQoZmllbGQucmVmKSkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyQW5kUmVmKGZpZWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh3aW5kb3cuZG9jdW1lbnQsIHtcclxuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXHJcbiAgICAgICAgc3VidHJlZTogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG9ic2VydmVyO1xyXG59XG5cbnZhciBpc1dlYiA9IHR5cGVvZiB3aW5kb3cgIT09IFVOREVGSU5FRCAmJiB0eXBlb2YgZG9jdW1lbnQgIT09IFVOREVGSU5FRDtcblxuZnVuY3Rpb24gY2xvbmVPYmplY3QoZGF0YSkge1xyXG4gICAgbGV0IGNvcHk7XHJcbiAgICBpZiAoaXNQcmltaXRpdmUoZGF0YSkgfHxcclxuICAgICAgICAoaXNXZWIgJiYgKGRhdGEgaW5zdGFuY2VvZiBGaWxlIHx8IGlzSFRNTEVsZW1lbnQoZGF0YSkpKSkge1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgY29weSA9IG5ldyBEYXRlKGRhdGEuZ2V0VGltZSgpKTtcclxuICAgICAgICByZXR1cm4gY29weTtcclxuICAgIH1cclxuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgU2V0KSB7XHJcbiAgICAgICAgY29weSA9IG5ldyBTZXQoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xyXG4gICAgICAgICAgICBjb3B5LmFkZChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvcHk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIE1hcCkge1xyXG4gICAgICAgIGNvcHkgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgZGF0YS5rZXlzKCkpIHtcclxuICAgICAgICAgICAgY29weS5zZXQoa2V5LCBjbG9uZU9iamVjdChkYXRhLmdldChrZXkpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb3B5O1xyXG4gICAgfVxyXG4gICAgY29weSA9IEFycmF5LmlzQXJyYXkoZGF0YSkgPyBbXSA6IHt9O1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgIGNvcHlba2V5XSA9IGNsb25lT2JqZWN0KGRhdGFba2V5XSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29weTtcclxufVxuXG52YXIgbW9kZUNoZWNrZXIgPSAobW9kZSkgPT4gKHtcclxuICAgIGlzT25TdWJtaXQ6ICFtb2RlIHx8IG1vZGUgPT09IFZBTElEQVRJT05fTU9ERS5vblN1Ym1pdCxcclxuICAgIGlzT25CbHVyOiBtb2RlID09PSBWQUxJREFUSU9OX01PREUub25CbHVyLFxyXG4gICAgaXNPbkNoYW5nZTogbW9kZSA9PT0gVkFMSURBVElPTl9NT0RFLm9uQ2hhbmdlLFxyXG4gICAgaXNPbkFsbDogbW9kZSA9PT0gVkFMSURBVElPTl9NT0RFLmFsbCxcclxuICAgIGlzT25Ub3VjaDogbW9kZSA9PT0gVkFMSURBVElPTl9NT0RFLm9uVG91Y2hlZCxcclxufSk7XG5cbnZhciBpc1JhZGlvT3JDaGVja2JveEZ1bmN0aW9uID0gKHJlZikgPT4gaXNSYWRpb0lucHV0KHJlZikgfHwgaXNDaGVja0JveElucHV0KHJlZik7XG5cbmNvbnN0IGlzV2luZG93VW5kZWZpbmVkID0gdHlwZW9mIHdpbmRvdyA9PT0gVU5ERUZJTkVEO1xyXG5jb25zdCBpc1Byb3h5RW5hYmxlZCA9IGlzV2ViID8gJ1Byb3h5JyBpbiB3aW5kb3cgOiB0eXBlb2YgUHJveHkgIT09IFVOREVGSU5FRDtcclxuZnVuY3Rpb24gdXNlRm9ybSh7IG1vZGUgPSBWQUxJREFUSU9OX01PREUub25TdWJtaXQsIHJlVmFsaWRhdGVNb2RlID0gVkFMSURBVElPTl9NT0RFLm9uQ2hhbmdlLCByZXNvbHZlciwgY29udGV4dCwgZGVmYXVsdFZhbHVlcyA9IHt9LCBzaG91bGRGb2N1c0Vycm9yID0gdHJ1ZSwgc2hvdWxkVW5yZWdpc3RlciA9IHRydWUsIGNyaXRlcmlhTW9kZSwgfSA9IHt9KSB7XHJcbiAgICBjb25zdCBmaWVsZHNSZWYgPSB1c2VSZWYoe30pO1xyXG4gICAgY29uc3QgZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYgPSB1c2VSZWYoe30pO1xyXG4gICAgY29uc3QgZmllbGRBcnJheVZhbHVlc1JlZiA9IHVzZVJlZih7fSk7XHJcbiAgICBjb25zdCB3YXRjaEZpZWxkc1JlZiA9IHVzZVJlZihuZXcgU2V0KCkpO1xyXG4gICAgY29uc3QgdXNlV2F0Y2hGaWVsZHNSZWYgPSB1c2VSZWYoe30pO1xyXG4gICAgY29uc3QgdXNlV2F0Y2hSZW5kZXJGdW5jdGlvbnNSZWYgPSB1c2VSZWYoe30pO1xyXG4gICAgY29uc3QgZmllbGRzV2l0aFZhbGlkYXRpb25SZWYgPSB1c2VSZWYoe30pO1xyXG4gICAgY29uc3QgdmFsaWRGaWVsZHNSZWYgPSB1c2VSZWYoe30pO1xyXG4gICAgY29uc3QgZGVmYXVsdFZhbHVlc1JlZiA9IHVzZVJlZihkZWZhdWx0VmFsdWVzKTtcclxuICAgIGNvbnN0IGlzVW5Nb3VudCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgICBjb25zdCBpc1dhdGNoQWxsUmVmID0gdXNlUmVmKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3Qgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IHJlc2V0RmllbGRBcnJheUZ1bmN0aW9uUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IGNvbnRleHRSZWYgPSB1c2VSZWYoY29udGV4dCk7XHJcbiAgICBjb25zdCByZXNvbHZlclJlZiA9IHVzZVJlZihyZXNvbHZlcik7XHJcbiAgICBjb25zdCBmaWVsZEFycmF5TmFtZXNSZWYgPSB1c2VSZWYobmV3IFNldCgpKTtcclxuICAgIGNvbnN0IG1vZGVSZWYgPSB1c2VSZWYobW9kZUNoZWNrZXIobW9kZSkpO1xyXG4gICAgY29uc3QgeyBpc09uU3VibWl0LCBpc09uVG91Y2ggfSA9IG1vZGVSZWYuY3VycmVudDtcclxuICAgIGNvbnN0IGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhID0gY3JpdGVyaWFNb2RlID09PSBWQUxJREFUSU9OX01PREUuYWxsO1xyXG4gICAgY29uc3QgW2Zvcm1TdGF0ZSwgc2V0Rm9ybVN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBpc0RpcnR5OiBmYWxzZSxcclxuICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGRpcnR5RmllbGRzOiB7fSxcclxuICAgICAgICBpc1N1Ym1pdHRlZDogZmFsc2UsXHJcbiAgICAgICAgc3VibWl0Q291bnQ6IDAsXHJcbiAgICAgICAgdG91Y2hlZDoge30sXHJcbiAgICAgICAgaXNTdWJtaXR0aW5nOiBmYWxzZSxcclxuICAgICAgICBpc1N1Ym1pdFN1Y2Nlc3NmdWw6IGZhbHNlLFxyXG4gICAgICAgIGlzVmFsaWQ6ICFpc09uU3VibWl0LFxyXG4gICAgICAgIGVycm9yczoge30sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlYWRGb3JtU3RhdGVSZWYgPSB1c2VSZWYoe1xyXG4gICAgICAgIGlzRGlydHk6ICFpc1Byb3h5RW5hYmxlZCxcclxuICAgICAgICBkaXJ0eUZpZWxkczogIWlzUHJveHlFbmFibGVkLFxyXG4gICAgICAgIHRvdWNoZWQ6ICFpc1Byb3h5RW5hYmxlZCB8fCBpc09uVG91Y2gsXHJcbiAgICAgICAgaXNWYWxpZGF0aW5nOiAhaXNQcm94eUVuYWJsZWQsXHJcbiAgICAgICAgaXNTdWJtaXR0aW5nOiAhaXNQcm94eUVuYWJsZWQsXHJcbiAgICAgICAgaXNWYWxpZDogIWlzUHJveHlFbmFibGVkLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmb3JtU3RhdGVSZWYgPSB1c2VSZWYoZm9ybVN0YXRlKTtcclxuICAgIGNvbnN0IG9ic2VydmVyUmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCB7IGlzT25CbHVyOiBpc1JlVmFsaWRhdGVPbkJsdXIsIGlzT25DaGFuZ2U6IGlzUmVWYWxpZGF0ZU9uQ2hhbmdlLCB9ID0gdXNlUmVmKG1vZGVDaGVja2VyKHJlVmFsaWRhdGVNb2RlKSkuY3VycmVudDtcclxuICAgIGNvbnRleHRSZWYuY3VycmVudCA9IGNvbnRleHQ7XHJcbiAgICByZXNvbHZlclJlZi5jdXJyZW50ID0gcmVzb2x2ZXI7XHJcbiAgICBmb3JtU3RhdGVSZWYuY3VycmVudCA9IGZvcm1TdGF0ZTtcclxuICAgIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50ID0gc2hvdWxkVW5yZWdpc3RlclxyXG4gICAgICAgID8ge31cclxuICAgICAgICA6IGlzRW1wdHlPYmplY3Qoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQpXHJcbiAgICAgICAgICAgID8gY2xvbmVPYmplY3QoZGVmYXVsdFZhbHVlcylcclxuICAgICAgICAgICAgOiBzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudDtcclxuICAgIGNvbnN0IHVwZGF0ZUZvcm1TdGF0ZSA9IHVzZUNhbGxiYWNrKChzdGF0ZSA9IHt9KSA9PiB7XHJcbiAgICAgICAgaWYgKCFpc1VuTW91bnQuY3VycmVudCkge1xyXG4gICAgICAgICAgICBmb3JtU3RhdGVSZWYuY3VycmVudCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZm9ybVN0YXRlUmVmLmN1cnJlbnQpLCBzdGF0ZSk7XHJcbiAgICAgICAgICAgIHNldEZvcm1TdGF0ZShmb3JtU3RhdGVSZWYuY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgdXBkYXRlSXNWYWxpZGF0aW5nID0gKCkgPT4gcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWRhdGluZyAmJlxyXG4gICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzVmFsaWRhdGluZzogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIGNvbnN0IHNob3VsZFJlbmRlckJhc2VPbkVycm9yID0gdXNlQ2FsbGJhY2soKG5hbWUsIGVycm9yLCBzaG91bGRSZW5kZXIgPSBmYWxzZSwgc3RhdGUgPSB7fSwgaXNWYWxpZCkgPT4ge1xyXG4gICAgICAgIGxldCBzaG91bGRSZVJlbmRlciA9IHNob3VsZFJlbmRlciB8fFxyXG4gICAgICAgICAgICBpc0Vycm9yU3RhdGVDaGFuZ2VkKHtcclxuICAgICAgICAgICAgICAgIGVycm9yczogZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRGaWVsZHM6IHZhbGlkRmllbGRzUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgICAgICAgICBmaWVsZHNXaXRoVmFsaWRhdGlvbjogZmllbGRzV2l0aFZhbGlkYXRpb25SZWYuY3VycmVudCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNFcnJvciA9IGdldChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICB1bnNldCh2YWxpZEZpZWxkc1JlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgICAgICAgICAgc2hvdWxkUmVSZW5kZXIgPVxyXG4gICAgICAgICAgICAgICAgc2hvdWxkUmVSZW5kZXIgfHxcclxuICAgICAgICAgICAgICAgICAgICAhcHJldmlvdXNFcnJvciB8fFxyXG4gICAgICAgICAgICAgICAgICAgICFkZWVwRXF1YWwocHJldmlvdXNFcnJvciwgZXJyb3IsIHRydWUpO1xyXG4gICAgICAgICAgICBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZ2V0KGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQsIG5hbWUpIHx8IHJlc29sdmVyUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHNldCh2YWxpZEZpZWxkc1JlZi5jdXJyZW50LCBuYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHNob3VsZFJlUmVuZGVyID0gc2hvdWxkUmVSZW5kZXIgfHwgcHJldmlvdXNFcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bnNldChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHNob3VsZFJlUmVuZGVyICYmICFpc051bGxPclVuZGVmaW5lZChzaG91bGRSZW5kZXIpKSB8fFxyXG4gICAgICAgICAgICAhaXNFbXB0eU9iamVjdChzdGF0ZSkgfHxcclxuICAgICAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWRhdGluZykge1xyXG4gICAgICAgICAgICB1cGRhdGVGb3JtU3RhdGUoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgKHJlc29sdmVyUmVmLmN1cnJlbnQgPyB7IGlzVmFsaWQ6ICEhaXNWYWxpZCB9IDoge30pKSwgeyBpc1ZhbGlkYXRpbmc6IGZhbHNlIH0pKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBzZXRGaWVsZFZhbHVlID0gdXNlQ2FsbGJhY2soKG5hbWUsIHJhd1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyByZWYsIG9wdGlvbnMgfSA9IGZpZWxkc1JlZi5jdXJyZW50W25hbWVdO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gaXNXZWIgJiYgaXNIVE1MRWxlbWVudChyZWYpICYmIGlzTnVsbE9yVW5kZWZpbmVkKHJhd1ZhbHVlKVxyXG4gICAgICAgICAgICA/ICcnXHJcbiAgICAgICAgICAgIDogcmF3VmFsdWU7XHJcbiAgICAgICAgaWYgKGlzUmFkaW9JbnB1dChyZWYpKSB7XHJcbiAgICAgICAgICAgIChvcHRpb25zIHx8IFtdKS5mb3JFYWNoKCh7IHJlZjogcmFkaW9SZWYgfSkgPT4gKHJhZGlvUmVmLmNoZWNrZWQgPSByYWRpb1JlZi52YWx1ZSA9PT0gdmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNGaWxlSW5wdXQocmVmKSAmJiAhaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJlZi5maWxlcyA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc011bHRpcGxlU2VsZWN0KHJlZikpIHtcclxuICAgICAgICAgICAgWy4uLnJlZi5vcHRpb25zXS5mb3JFYWNoKChzZWxlY3RSZWYpID0+IChzZWxlY3RSZWYuc2VsZWN0ZWQgPSB2YWx1ZS5pbmNsdWRlcyhzZWxlY3RSZWYudmFsdWUpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzQ2hlY2tCb3hJbnB1dChyZWYpICYmIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5sZW5ndGggPiAxXHJcbiAgICAgICAgICAgICAgICA/IG9wdGlvbnMuZm9yRWFjaCgoeyByZWY6IGNoZWNrYm94UmVmIH0pID0+IChjaGVja2JveFJlZi5jaGVja2VkID0gQXJyYXkuaXNBcnJheSh2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICA/ICEhdmFsdWUuZmluZCgoZGF0YSkgPT4gZGF0YSA9PT0gY2hlY2tib3hSZWYudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZSA9PT0gY2hlY2tib3hSZWYudmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgOiAob3B0aW9uc1swXS5yZWYuY2hlY2tlZCA9ICEhdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVmLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgaXNGb3JtRGlydHkgPSB1c2VDYWxsYmFjaygobmFtZSwgZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNEaXJ0eSkge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtVmFsdWVzID0gZ2V0VmFsdWVzKCk7XHJcbiAgICAgICAgICAgIG5hbWUgJiYgZGF0YSAmJiBzZXQoZm9ybVZhbHVlcywgbmFtZSwgZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiAhZGVlcEVxdWFsKGZvcm1WYWx1ZXMsIGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHVwZGF0ZUFuZEdldERpcnR5U3RhdGUgPSB1c2VDYWxsYmFjaygobmFtZSwgc2hvdWxkUmVuZGVyID0gdHJ1ZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNEaXJ0eSB8fFxyXG4gICAgICAgICAgICByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNGaWVsZERpcnR5ID0gIWRlZXBFcXVhbChnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lKSwgZ2V0RmllbGRWYWx1ZShmaWVsZHNSZWYsIG5hbWUsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZikpO1xyXG4gICAgICAgICAgICBjb25zdCBpc0RpcnR5RmllbGRFeGlzdCA9IGdldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzSXNEaXJ0eSA9IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzRGlydHk7XHJcbiAgICAgICAgICAgIGlzRmllbGREaXJ0eVxyXG4gICAgICAgICAgICAgICAgPyBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsIG5hbWUsIHRydWUpXHJcbiAgICAgICAgICAgICAgICA6IHVuc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLCBuYW1lKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICBpc0RpcnR5OiBpc0Zvcm1EaXJ0eSgpLFxyXG4gICAgICAgICAgICAgICAgZGlydHlGaWVsZHM6IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBpc0NoYW5nZWQgPSAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzRGlydHkgJiZcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzSXNEaXJ0eSAhPT0gc3RhdGUuaXNEaXJ0eSkgfHxcclxuICAgICAgICAgICAgICAgIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMgJiZcclxuICAgICAgICAgICAgICAgICAgICBpc0RpcnR5RmllbGRFeGlzdCAhPT0gZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLCBuYW1lKSk7XHJcbiAgICAgICAgICAgIGlzQ2hhbmdlZCAmJiBzaG91bGRSZW5kZXIgJiYgdXBkYXRlRm9ybVN0YXRlKHN0YXRlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGlzQ2hhbmdlZCA/IHN0YXRlIDoge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGV4ZWN1dGVWYWxpZGF0aW9uID0gdXNlQ2FsbGJhY2soYXN5bmMgKG5hbWUsIHNraXBSZVJlbmRlcikgPT4ge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGlmICghZmllbGRzUmVmLmN1cnJlbnRbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybign8J+TiyBGaWVsZCBpcyBtaXNzaW5nIHdpdGggYG5hbWVgIGF0dHJpYnV0ZTogJywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoYXdhaXQgdmFsaWRhdGVGaWVsZChmaWVsZHNSZWYsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBmaWVsZHNSZWYuY3VycmVudFtuYW1lXSwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmKSlbbmFtZV07XHJcbiAgICAgICAgc2hvdWxkUmVuZGVyQmFzZU9uRXJyb3IobmFtZSwgZXJyb3IsIHNraXBSZVJlbmRlcik7XHJcbiAgICAgICAgcmV0dXJuIGlzVW5kZWZpbmVkKGVycm9yKTtcclxuICAgIH0sIFtzaG91bGRSZW5kZXJCYXNlT25FcnJvciwgaXNWYWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWFdKTtcclxuICAgIGNvbnN0IGV4ZWN1dGVTY2hlbWFPclJlc29sdmVyVmFsaWRhdGlvbiA9IHVzZUNhbGxiYWNrKGFzeW5jIChuYW1lcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZXJyb3JzIH0gPSBhd2FpdCByZXNvbHZlclJlZi5jdXJyZW50KGdldFZhbHVlcygpLCBjb250ZXh0UmVmLmN1cnJlbnQsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKTtcclxuICAgICAgICBjb25zdCBwcmV2aW91c0Zvcm1Jc1ZhbGlkID0gZm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZDtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShuYW1lcykpIHtcclxuICAgICAgICAgICAgY29uc3QgaXNJbnB1dHNWYWxpZCA9IG5hbWVzXHJcbiAgICAgICAgICAgICAgICAubWFwKChuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IGdldChlcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICA/IHNldChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIG5hbWUsIGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgIDogdW5zZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhZXJyb3I7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuZXZlcnkoQm9vbGVhbik7XHJcbiAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkOiBpc0VtcHR5T2JqZWN0KGVycm9ycyksXHJcbiAgICAgICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGlzSW5wdXRzVmFsaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IGdldChlcnJvcnMsIG5hbWVzKTtcclxuICAgICAgICAgICAgc2hvdWxkUmVuZGVyQmFzZU9uRXJyb3IobmFtZXMsIGVycm9yLCBwcmV2aW91c0Zvcm1Jc1ZhbGlkICE9PSBpc0VtcHR5T2JqZWN0KGVycm9ycyksIHt9LCBpc0VtcHR5T2JqZWN0KGVycm9ycykpO1xyXG4gICAgICAgICAgICByZXR1cm4gIWVycm9yO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtzaG91bGRSZW5kZXJCYXNlT25FcnJvciwgaXNWYWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWFdKTtcclxuICAgIGNvbnN0IHRyaWdnZXIgPSB1c2VDYWxsYmFjayhhc3luYyAobmFtZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IG5hbWUgfHwgT2JqZWN0LmtleXMoZmllbGRzUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIHVwZGF0ZUlzVmFsaWRhdGluZygpO1xyXG4gICAgICAgIGlmIChyZXNvbHZlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleGVjdXRlU2NoZW1hT3JSZXNvbHZlclZhbGlkYXRpb24oZmllbGRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGRzKSkge1xyXG4gICAgICAgICAgICAhbmFtZSAmJiAoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzID0ge30pO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChmaWVsZHMubWFwKGFzeW5jIChkYXRhKSA9PiBhd2FpdCBleGVjdXRlVmFsaWRhdGlvbihkYXRhLCBudWxsKSkpO1xyXG4gICAgICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNWYWxpZGF0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZXZlcnkoQm9vbGVhbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhd2FpdCBleGVjdXRlVmFsaWRhdGlvbihmaWVsZHMpO1xyXG4gICAgfSwgW2V4ZWN1dGVTY2hlbWFPclJlc29sdmVyVmFsaWRhdGlvbiwgZXhlY3V0ZVZhbGlkYXRpb25dKTtcclxuICAgIGNvbnN0IHNldEludGVybmFsVmFsdWVzID0gdXNlQ2FsbGJhY2soKG5hbWUsIHZhbHVlLCB7IHNob3VsZERpcnR5LCBzaG91bGRWYWxpZGF0ZSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHt9O1xyXG4gICAgICAgIHNldChkYXRhLCBuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZE5hbWUgb2YgZ2V0UGF0aChuYW1lLCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkc1JlZi5jdXJyZW50W2ZpZWxkTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWUoZmllbGROYW1lLCBnZXQoZGF0YSwgZmllbGROYW1lKSk7XHJcbiAgICAgICAgICAgICAgICBzaG91bGREaXJ0eSAmJiB1cGRhdGVBbmRHZXREaXJ0eVN0YXRlKGZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBzaG91bGRWYWxpZGF0ZSAmJiB0cmlnZ2VyKGZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbdHJpZ2dlciwgc2V0RmllbGRWYWx1ZSwgdXBkYXRlQW5kR2V0RGlydHlTdGF0ZV0pO1xyXG4gICAgY29uc3Qgc2V0SW50ZXJuYWxWYWx1ZSA9IHVzZUNhbGxiYWNrKChuYW1lLCB2YWx1ZSwgY29uZmlnKSA9PiB7XHJcbiAgICAgICAgIXNob3VsZFVucmVnaXN0ZXIgJiZcclxuICAgICAgICAgICAgIWlzUHJpbWl0aXZlKHZhbHVlKSAmJlxyXG4gICAgICAgICAgICBzZXQoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUsIE9iamVjdC5hc3NpZ24oe30sIHZhbHVlKSk7XHJcbiAgICAgICAgaWYgKGZpZWxkc1JlZi5jdXJyZW50W25hbWVdKSB7XHJcbiAgICAgICAgICAgIHNldEZpZWxkVmFsdWUobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICBjb25maWcuc2hvdWxkRGlydHkgJiYgdXBkYXRlQW5kR2V0RGlydHlTdGF0ZShuYW1lKTtcclxuICAgICAgICAgICAgY29uZmlnLnNob3VsZFZhbGlkYXRlICYmIHRyaWdnZXIobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgc2V0SW50ZXJuYWxWYWx1ZXMobmFtZSwgdmFsdWUsIGNvbmZpZyk7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZEFycmF5TmFtZXNSZWYuY3VycmVudC5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudE5hbWUgPSBnZXRGaWVsZEFycmF5UGFyZW50TmFtZShuYW1lKSB8fCBuYW1lO1xyXG4gICAgICAgICAgICAgICAgc2V0KGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJlc2V0RmllbGRBcnJheUZ1bmN0aW9uUmVmLmN1cnJlbnRbcGFyZW50TmFtZV0oe1xyXG4gICAgICAgICAgICAgICAgICAgIFtwYXJlbnROYW1lXTogZ2V0KGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIHBhcmVudE5hbWUpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc0RpcnR5IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5zaG91bGREaXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSwgc2V0RmllbGRBcnJheURpcnR5RmllbGRzKHZhbHVlLCBnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lLCBbXSksIGdldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSwgW10pKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybVN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXJ0eTogIWRlZXBFcXVhbChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGdldFZhbHVlcygpKSwgeyBbbmFtZV06IHZhbHVlIH0pLCBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICFzaG91bGRVbnJlZ2lzdGVyICYmIHNldChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCwgbmFtZSwgdmFsdWUpO1xyXG4gICAgfSwgW3VwZGF0ZUFuZEdldERpcnR5U3RhdGUsIHNldEZpZWxkVmFsdWUsIHNldEludGVybmFsVmFsdWVzXSk7XHJcbiAgICBjb25zdCBpc0ZpZWxkV2F0Y2hlZCA9IChuYW1lKSA9PiBpc1dhdGNoQWxsUmVmLmN1cnJlbnQgfHxcclxuICAgICAgICB3YXRjaEZpZWxkc1JlZi5jdXJyZW50LmhhcyhuYW1lKSB8fFxyXG4gICAgICAgIHdhdGNoRmllbGRzUmVmLmN1cnJlbnQuaGFzKChuYW1lLm1hdGNoKC9cXHcrLykgfHwgW10pWzBdKTtcclxuICAgIGNvbnN0IHJlbmRlcldhdGNoZWRJbnB1dHMgPSAobmFtZSkgPT4ge1xyXG4gICAgICAgIGxldCBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKCFpc0VtcHR5T2JqZWN0KHVzZVdhdGNoRmllbGRzUmVmLmN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHVzZVdhdGNoRmllbGRzUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICghbmFtZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICF1c2VXYXRjaEZpZWxkc1JlZi5jdXJyZW50W2tleV0uc2l6ZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVdhdGNoRmllbGRzUmVmLmN1cnJlbnRba2V5XS5oYXMobmFtZSkgfHxcclxuICAgICAgICAgICAgICAgICAgICB1c2VXYXRjaEZpZWxkc1JlZi5jdXJyZW50W2tleV0uaGFzKGdldEZpZWxkQXJyYXlQYXJlbnROYW1lKG5hbWUpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZVdhdGNoUmVuZGVyRnVuY3Rpb25zUmVmLmN1cnJlbnRba2V5XSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZvdW5kO1xyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIHNldFZhbHVlKG5hbWUsIHZhbHVlLCBjb25maWcpIHtcclxuICAgICAgICBzZXRJbnRlcm5hbFZhbHVlKG5hbWUsIHZhbHVlLCBjb25maWcgfHwge30pO1xyXG4gICAgICAgIGlzRmllbGRXYXRjaGVkKG5hbWUpICYmIHVwZGF0ZUZvcm1TdGF0ZSgpO1xyXG4gICAgICAgIHJlbmRlcldhdGNoZWRJbnB1dHMobmFtZSk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVDaGFuZ2VSZWYuY3VycmVudCA9IGhhbmRsZUNoYW5nZVJlZi5jdXJyZW50XHJcbiAgICAgICAgPyBoYW5kbGVDaGFuZ2VSZWYuY3VycmVudFxyXG4gICAgICAgIDogYXN5bmMgKHsgdHlwZSwgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSB0YXJnZXQubmFtZTtcclxuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNSZWYuY3VycmVudFtuYW1lXTtcclxuICAgICAgICAgICAgbGV0IGVycm9yO1xyXG4gICAgICAgICAgICBsZXQgaXNWYWxpZDtcclxuICAgICAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0JsdXJFdmVudCA9IHR5cGUgPT09IEVWRU5UUy5CTFVSO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2tpcFZhbGlkYXRpb24gPSBza2lwVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHsgaXNCbHVyRXZlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZVZhbGlkYXRlT25DaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZVZhbGlkYXRlT25CbHVyLCBpc1RvdWNoZWQ6ICEhZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQsIG5hbWUpLCBpc1N1Ym1pdHRlZDogZm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNTdWJtaXR0ZWQgfSwgbW9kZVJlZi5jdXJyZW50KSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhdGUgPSB1cGRhdGVBbmRHZXREaXJ0eVN0YXRlKG5hbWUsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGxldCBzaG91bGRSZW5kZXIgPSAhaXNFbXB0eU9iamVjdChzdGF0ZSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoIWlzQmx1ckV2ZW50ICYmIGlzRmllbGRXYXRjaGVkKG5hbWUpKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc0JsdXJFdmVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCwgbmFtZSkgJiZcclxuICAgICAgICAgICAgICAgICAgICByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldChmb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkLCBuYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpLCB7IHRvdWNoZWQ6IGZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNob3VsZFVucmVnaXN0ZXIgJiYgaXNDaGVja0JveElucHV0KHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXQoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUsIGdldEZpZWxkVmFsdWUoZmllbGRzUmVmLCBuYW1lKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkU2tpcFZhbGlkYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAhaXNCbHVyRXZlbnQgJiYgcmVuZGVyV2F0Y2hlZElucHV0cyhuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCghaXNFbXB0eU9iamVjdChzdGF0ZSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNob3VsZFJlbmRlciAmJiBpc0VtcHR5T2JqZWN0KHN0YXRlKSkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZShzdGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlSXNWYWxpZGF0aW5nKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3JzIH0gPSBhd2FpdCByZXNvbHZlclJlZi5jdXJyZW50KGdldFZhbHVlcygpLCBjb250ZXh0UmVmLmN1cnJlbnQsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c0Zvcm1Jc1ZhbGlkID0gZm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZDtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGdldChlcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0NoZWNrQm94SW5wdXQodGFyZ2V0KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhZXJyb3IgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZXJSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnROb2RlTmFtZSA9IGdldEZpZWxkQXJyYXlQYXJlbnROYW1lKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RXJyb3IgPSBnZXQoZXJyb3JzLCBwYXJlbnROb2RlTmFtZSwge30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RXJyb3IudHlwZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVycm9yLm1lc3NhZ2UgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvciA9IGN1cnJlbnRFcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnROb2RlTmFtZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGN1cnJlbnRFcnJvciB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIHBhcmVudE5vZGVOYW1lKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBwYXJlbnROb2RlTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gaXNFbXB0eU9iamVjdChlcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzRm9ybUlzVmFsaWQgIT09IGlzVmFsaWQgJiYgKHNob3VsZFJlbmRlciA9IHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSAoYXdhaXQgdmFsaWRhdGVGaWVsZChmaWVsZHNSZWYsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBmaWVsZCwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmKSlbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAhaXNCbHVyRXZlbnQgJiYgcmVuZGVyV2F0Y2hlZElucHV0cyhuYW1lKTtcclxuICAgICAgICAgICAgICAgIHNob3VsZFJlbmRlckJhc2VPbkVycm9yKG5hbWUsIGVycm9yLCBzaG91bGRSZW5kZXIsIHN0YXRlLCBpc1ZhbGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICBmdW5jdGlvbiBzZXRGaWVsZEFycmF5RGVmYXVsdFZhbHVlcyhkYXRhKSB7XHJcbiAgICAgICAgaWYgKCFzaG91bGRVbnJlZ2lzdGVyKSB7XHJcbiAgICAgICAgICAgIGxldCBjb3B5ID0gY2xvbmVPYmplY3QoZGF0YSk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgZmllbGRBcnJheU5hbWVzUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpc0tleSh2YWx1ZSkgJiYgIWNvcHlbdmFsdWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29weSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29weSksIHsgW3ZhbHVlXTogW10gfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvcHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0VmFsdWVzKHBheWxvYWQpIHtcclxuICAgICAgICBpZiAoaXNTdHJpbmcocGF5bG9hZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdldEZpZWxkVmFsdWUoZmllbGRzUmVmLCBwYXlsb2FkLCBzaGFsbG93RmllbGRzU3RhdGVSZWYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXlsb2FkKSkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBwYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBzZXQoZGF0YSwgbmFtZSwgZ2V0RmllbGRWYWx1ZShmaWVsZHNSZWYsIG5hbWUsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2V0RmllbGRBcnJheURlZmF1bHRWYWx1ZXMoZ2V0RmllbGRzVmFsdWVzKGZpZWxkc1JlZiwgY2xvbmVPYmplY3Qoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQpLCBzaG91bGRVbnJlZ2lzdGVyKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB2YWxpZGF0ZVJlc29sdmVyID0gdXNlQ2FsbGJhY2soYXN5bmMgKHZhbHVlcyA9IHt9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBlcnJvcnMgfSA9IGF3YWl0IHJlc29sdmVyUmVmLmN1cnJlbnQoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBnZXRWYWx1ZXMoKSksIHZhbHVlcyksIGNvbnRleHRSZWYuY3VycmVudCwgaXNWYWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpO1xyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBpc0VtcHR5T2JqZWN0KGVycm9ycyk7XHJcbiAgICAgICAgZm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCAhPT0gaXNWYWxpZCAmJlxyXG4gICAgICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNWYWxpZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LCBbaXNWYWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWFdKTtcclxuICAgIGNvbnN0IHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lciA9IHVzZUNhbGxiYWNrKChmaWVsZCwgZm9yY2VEZWxldGUpID0+IGZpbmRSZW1vdmVkRmllbGRBbmRSZW1vdmVMaXN0ZW5lcihmaWVsZHNSZWYsIGhhbmRsZUNoYW5nZVJlZi5jdXJyZW50LCBmaWVsZCwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLCBzaG91bGRVbnJlZ2lzdGVyLCBmb3JjZURlbGV0ZSksIFtzaG91bGRVbnJlZ2lzdGVyXSk7XHJcbiAgICBjb25zdCB1cGRhdGVXYXRjaGVkVmFsdWUgPSB1c2VDYWxsYmFjaygobmFtZSkgPT4ge1xyXG4gICAgICAgIGlmIChpc1dhdGNoQWxsUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgdXBkYXRlRm9ybVN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHdhdGNoRmllbGQgb2Ygd2F0Y2hGaWVsZHNSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHdhdGNoRmllbGQuc3RhcnRzV2l0aChuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlbmRlcldhdGNoZWRJbnB1dHMobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyQW5kUmVmID0gdXNlQ2FsbGJhY2soKGZpZWxkLCBmb3JjZURlbGV0ZSkgPT4ge1xyXG4gICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXIoZmllbGQsIGZvcmNlRGVsZXRlKTtcclxuICAgICAgICAgICAgaWYgKHNob3VsZFVucmVnaXN0ZXIgJiYgIWNvbXBhY3QoZmllbGQub3B0aW9ucyB8fCBbXSkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB1bnNldCh2YWxpZEZpZWxkc1JlZi5jdXJyZW50LCBmaWVsZC5yZWYubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB1bnNldChmaWVsZHNXaXRoVmFsaWRhdGlvblJlZi5jdXJyZW50LCBmaWVsZC5yZWYubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB1bnNldChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIGZpZWxkLnJlZi5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHNldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgZmllbGQucmVmLm5hbWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlRm9ybVN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc0RpcnR5OiBpc0Zvcm1EaXJ0eSgpLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVyUmVmLmN1cnJlbnQgJiZcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZVJlc29sdmVyKCk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVXYXRjaGVkVmFsdWUoZmllbGQucmVmLm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3ZhbGlkYXRlUmVzb2x2ZXIsIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lcl0pO1xyXG4gICAgZnVuY3Rpb24gY2xlYXJFcnJvcnMobmFtZSkge1xyXG4gICAgICAgIG5hbWUgJiZcclxuICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkobmFtZSkgPyBuYW1lIDogW25hbWVdKS5mb3JFYWNoKChpbnB1dE5hbWUpID0+IGZpZWxkc1JlZi5jdXJyZW50W2lucHV0TmFtZV0gJiYgaXNLZXkoaW5wdXROYW1lKVxyXG4gICAgICAgICAgICAgICAgPyBkZWxldGUgZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzW2lucHV0TmFtZV1cclxuICAgICAgICAgICAgICAgIDogdW5zZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBpbnB1dE5hbWUpKTtcclxuICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICBlcnJvcnM6IG5hbWUgPyBmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMgOiB7fSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldEVycm9yKG5hbWUsIGVycm9yKSB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gKGZpZWxkc1JlZi5jdXJyZW50W25hbWVdIHx8IHt9KS5yZWY7XHJcbiAgICAgICAgc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgbmFtZSwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBlcnJvciksIHsgcmVmIH0pKTtcclxuICAgICAgICB1cGRhdGVGb3JtU3RhdGUoe1xyXG4gICAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBlcnJvci5zaG91bGRGb2N1cyAmJiByZWYgJiYgcmVmLmZvY3VzICYmIHJlZi5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgd2F0Y2hJbnRlcm5hbCA9IHVzZUNhbGxiYWNrKChmaWVsZE5hbWVzLCBkZWZhdWx0VmFsdWUsIHdhdGNoSWQpID0+IHtcclxuICAgICAgICBjb25zdCB3YXRjaEZpZWxkcyA9IHdhdGNoSWRcclxuICAgICAgICAgICAgPyB1c2VXYXRjaEZpZWxkc1JlZi5jdXJyZW50W3dhdGNoSWRdXHJcbiAgICAgICAgICAgIDogd2F0Y2hGaWVsZHNSZWYuY3VycmVudDtcclxuICAgICAgICBsZXQgZmllbGRWYWx1ZXMgPSBnZXRGaWVsZHNWYWx1ZXMoZmllbGRzUmVmLCBjbG9uZU9iamVjdChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCksIHNob3VsZFVucmVnaXN0ZXIsIGZhbHNlLCBmaWVsZE5hbWVzKTtcclxuICAgICAgICBpZiAoaXNTdHJpbmcoZmllbGROYW1lcykpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50Tm9kZU5hbWUgPSBnZXRGaWVsZEFycmF5UGFyZW50TmFtZShmaWVsZE5hbWVzKSB8fCBmaWVsZE5hbWVzO1xyXG4gICAgICAgICAgICBpZiAoZmllbGRBcnJheU5hbWVzUmVmLmN1cnJlbnQuaGFzKHBhcmVudE5vZGVOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgZmllbGRWYWx1ZXMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZpZWxkQXJyYXlWYWx1ZXNSZWYuY3VycmVudCksIGZpZWxkVmFsdWVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXNzaWduV2F0Y2hGaWVsZHMoZmllbGRWYWx1ZXMsIGZpZWxkTmFtZXMsIHdhdGNoRmllbGRzLCBpc1VuZGVmaW5lZChnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBmaWVsZE5hbWVzKSlcclxuICAgICAgICAgICAgICAgID8gZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgICAgICAgICA6IGdldChkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIGZpZWxkTmFtZXMpLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29tYmluZWREZWZhdWx0VmFsdWVzID0gaXNVbmRlZmluZWQoZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgICAgICA/IGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudFxyXG4gICAgICAgICAgICA6IGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWVsZE5hbWVzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmllbGROYW1lcy5yZWR1Y2UoKHByZXZpb3VzLCBuYW1lKSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91cyksIHsgW25hbWVdOiBhc3NpZ25XYXRjaEZpZWxkcyhmaWVsZFZhbHVlcywgbmFtZSwgd2F0Y2hGaWVsZHMsIGNvbWJpbmVkRGVmYXVsdFZhbHVlcykgfSkpLCB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzV2F0Y2hBbGxSZWYuY3VycmVudCA9IGlzVW5kZWZpbmVkKHdhdGNoSWQpO1xyXG4gICAgICAgIHJldHVybiB0cmFuc2Zvcm1Ub05lc3RPYmplY3QoKCFpc0VtcHR5T2JqZWN0KGZpZWxkVmFsdWVzKSAmJiBmaWVsZFZhbHVlcykgfHxcclxuICAgICAgICAgICAgY29tYmluZWREZWZhdWx0VmFsdWVzKTtcclxuICAgIH0sIFtdKTtcclxuICAgIGZ1bmN0aW9uIHdhdGNoKGZpZWxkTmFtZXMsIGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB3YXRjaEludGVybmFsKGZpZWxkTmFtZXMsIGRlZmF1bHRWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1bnJlZ2lzdGVyKG5hbWUpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkTmFtZSBvZiBBcnJheS5pc0FycmF5KG5hbWUpID8gbmFtZSA6IFtuYW1lXSkge1xyXG4gICAgICAgICAgICByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXJBbmRSZWYoZmllbGRzUmVmLmN1cnJlbnRbZmllbGROYW1lXSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJGaWVsZFJlZihyZWYsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGlmICghcmVmLm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oJ/Cfk4sgRmllbGQgaXMgbWlzc2luZyBgbmFtZWAgYXR0cmlidXRlJywgcmVmLCBgaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaSN1c2VGb3JtYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZpZWxkQXJyYXlOYW1lc1JlZi5jdXJyZW50LmhhcyhyZWYubmFtZS5zcGxpdCgvXFxbXFxkK1xcXSQvKVswXSkgJiZcclxuICAgICAgICAgICAgICAgICFSZWdFeHAoYF4ke3JlZi5uYW1lLnNwbGl0KC9cXFtcXGQrXFxdJC8pWzBdfVtcXFxcZCtdLlxcXFx3K2BcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxbL2csICdcXFxcWycpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXS9nLCAnXFxcXF0nKSkudGVzdChyZWYubmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oJ/Cfk4sgYG5hbWVgIHByb3Agc2hvdWxkIGJlIGluIG9iamVjdCBzaGFwZTogbmFtZT1cInRlc3RbaW5kZXhdLm5hbWVcIicsIHJlZiwgJ2h0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjdXNlRmllbGRBcnJheScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdHlwZSwgdmFsdWUgfSA9IHJlZjtcclxuICAgICAgICBjb25zdCBmaWVsZFJlZkFuZFZhbGlkYXRpb25PcHRpb25zID0gT2JqZWN0LmFzc2lnbih7IHJlZiB9LCBvcHRpb25zKTtcclxuICAgICAgICBjb25zdCBmaWVsZHMgPSBmaWVsZHNSZWYuY3VycmVudDtcclxuICAgICAgICBjb25zdCBpc1JhZGlvT3JDaGVja2JveCA9IGlzUmFkaW9PckNoZWNrYm94RnVuY3Rpb24ocmVmKTtcclxuICAgICAgICBjb25zdCBpc0ZpZWxkQXJyYXkgPSBpc05hbWVJbkZpZWxkQXJyYXkoZmllbGRBcnJheU5hbWVzUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGNvbXBhcmVSZWYgPSAoY3VycmVudFJlZikgPT4gaXNXZWIgJiYgKCFpc0hUTUxFbGVtZW50KHJlZikgfHwgY3VycmVudFJlZiA9PT0gcmVmKTtcclxuICAgICAgICBsZXQgZmllbGQgPSBmaWVsZHNbbmFtZV07XHJcbiAgICAgICAgbGV0IGlzRW1wdHlEZWZhdWx0VmFsdWUgPSB0cnVlO1xyXG4gICAgICAgIGxldCBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgaWYgKGZpZWxkICYmXHJcbiAgICAgICAgICAgIChpc1JhZGlvT3JDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgPyBBcnJheS5pc0FycmF5KGZpZWxkLm9wdGlvbnMpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGFjdChmaWVsZC5vcHRpb25zKS5maW5kKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSBvcHRpb24ucmVmLnZhbHVlICYmIGNvbXBhcmVSZWYob3B0aW9uLnJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIDogY29tcGFyZVJlZihmaWVsZC5yZWYpKSkge1xyXG4gICAgICAgICAgICBmaWVsZHNbbmFtZV0gPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZpZWxkKSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUpIHtcclxuICAgICAgICAgICAgZmllbGQgPSBpc1JhZGlvT3JDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgPyBPYmplY3QuYXNzaWduKHsgb3B0aW9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jb21wYWN0KChmaWVsZCAmJiBmaWVsZC5vcHRpb25zKSB8fCBbXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdLCByZWY6IHsgdHlwZSwgbmFtZSB9IH0sIG9wdGlvbnMpIDogT2JqZWN0LmFzc2lnbih7fSwgZmllbGRSZWZBbmRWYWxpZGF0aW9uT3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmaWVsZCA9IGZpZWxkUmVmQW5kVmFsaWRhdGlvbk9wdGlvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZWxkc1tuYW1lXSA9IGZpZWxkO1xyXG4gICAgICAgIGNvbnN0IGlzRW1wdHlVbm1vdW50RmllbGRzID0gaXNVbmRlZmluZWQoZ2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lKSk7XHJcbiAgICAgICAgaWYgKCFpc0VtcHR5T2JqZWN0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCkgfHwgIWlzRW1wdHlVbm1vdW50RmllbGRzKSB7XHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IGdldChpc0VtcHR5VW5tb3VudEZpZWxkc1xyXG4gICAgICAgICAgICAgICAgPyBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnRcclxuICAgICAgICAgICAgICAgIDogc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgICAgICAgICBpc0VtcHR5RGVmYXVsdFZhbHVlID0gaXNVbmRlZmluZWQoZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKCFpc0VtcHR5RGVmYXVsdFZhbHVlICYmICFpc0ZpZWxkQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWUobmFtZSwgZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlzRW1wdHlPYmplY3Qob3B0aW9ucykpIHtcclxuICAgICAgICAgICAgc2V0KGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQsIG5hbWUsIHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoIWlzT25TdWJtaXQgJiYgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlRmllbGQoZmllbGRzUmVmLCBpc1ZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZmllbGQsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZikudGhlbigoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c0Zvcm1Jc1ZhbGlkID0gZm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZDtcclxuICAgICAgICAgICAgICAgICAgICBpc0VtcHR5T2JqZWN0KGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNldCh2YWxpZEZpZWxkc1JlZi5jdXJyZW50LCBuYW1lLCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHVuc2V0KHZhbGlkRmllbGRzUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzRm9ybUlzVmFsaWQgIT09IGlzRW1wdHlPYmplY3QoZXJyb3IpICYmIHVwZGF0ZUZvcm1TdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNob3VsZFVucmVnaXN0ZXIgJiYgIShpc0ZpZWxkQXJyYXkgJiYgaXNFbXB0eURlZmF1bHRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgIWlzRmllbGRBcnJheSAmJiB1bnNldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGF0dGFjaEV2ZW50TGlzdGVuZXJzKGlzUmFkaW9PckNoZWNrYm94ICYmIGZpZWxkLm9wdGlvbnNcclxuICAgICAgICAgICAgICAgID8gZmllbGQub3B0aW9uc1tmaWVsZC5vcHRpb25zLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICAgICAgICA6IGZpZWxkLCBpc1JhZGlvT3JDaGVja2JveCB8fCBpc1NlbGVjdElucHV0KHJlZiksIGhhbmRsZUNoYW5nZVJlZi5jdXJyZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWdpc3RlcihyZWZPclJlZ2lzdGVyT3B0aW9ucywgb3B0aW9ucykge1xyXG4gICAgICAgIGlmICghaXNXaW5kb3dVbmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKHJlZk9yUmVnaXN0ZXJPcHRpb25zKSkge1xyXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJGaWVsZFJlZih7IG5hbWU6IHJlZk9yUmVnaXN0ZXJPcHRpb25zIH0sIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KHJlZk9yUmVnaXN0ZXJPcHRpb25zKSAmJlxyXG4gICAgICAgICAgICAgICAgJ25hbWUnIGluIHJlZk9yUmVnaXN0ZXJPcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICByZWdpc3RlckZpZWxkUmVmKHJlZk9yUmVnaXN0ZXJPcHRpb25zLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAocmVmKSA9PiByZWYgJiYgcmVnaXN0ZXJGaWVsZFJlZihyZWYsIHJlZk9yUmVnaXN0ZXJPcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IHVzZUNhbGxiYWNrKChvblZhbGlkLCBvbkludmFsaWQpID0+IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUgJiYgZS5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUucGVyc2lzdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZmllbGRFcnJvcnMgPSB7fTtcclxuICAgICAgICBsZXQgZmllbGRWYWx1ZXMgPSBzZXRGaWVsZEFycmF5RGVmYXVsdFZhbHVlcyhnZXRGaWVsZHNWYWx1ZXMoZmllbGRzUmVmLCBjbG9uZU9iamVjdChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCksIHNob3VsZFVucmVnaXN0ZXIsIHRydWUpKTtcclxuICAgICAgICByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNTdWJtaXR0aW5nICYmXHJcbiAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNvbHZlclJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9ycywgdmFsdWVzIH0gPSBhd2FpdCByZXNvbHZlclJlZi5jdXJyZW50KGZpZWxkVmFsdWVzLCBjb250ZXh0UmVmLmN1cnJlbnQsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKTtcclxuICAgICAgICAgICAgICAgIGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycyA9IGZpZWxkRXJyb3JzID0gZXJyb3JzO1xyXG4gICAgICAgICAgICAgICAgZmllbGRWYWx1ZXMgPSB2YWx1ZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIE9iamVjdC52YWx1ZXMoZmllbGRzUmVmLmN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gZmllbGQucmVmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZEVycm9yID0gYXdhaXQgdmFsaWRhdGVGaWVsZChmaWVsZHNSZWYsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBmaWVsZCwgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkRXJyb3JbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldChmaWVsZEVycm9ycywgbmFtZSwgZmllbGRFcnJvcltuYW1lXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bnNldCh2YWxpZEZpZWxkc1JlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChnZXQoZmllbGRzV2l0aFZhbGlkYXRpb25SZWYuY3VycmVudCwgbmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQodmFsaWRGaWVsZHNSZWYuY3VycmVudCwgbmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzRW1wdHlPYmplY3QoZmllbGRFcnJvcnMpICYmXHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMpLmV2ZXJ5KChuYW1lKSA9PiBuYW1lIGluIGZpZWxkc1JlZi5jdXJyZW50KSkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlRm9ybVN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIGlzU3VibWl0dGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgb25WYWxpZChmaWVsZFZhbHVlcywgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycyksIGZpZWxkRXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIG9uSW52YWxpZCAmJiAoYXdhaXQgb25JbnZhbGlkKGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycywgZSkpO1xyXG4gICAgICAgICAgICAgICAgc2hvdWxkRm9jdXNFcnJvciAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzT25FcnJvckZpZWxkKGZpZWxkc1JlZi5jdXJyZW50LCBmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBmb3JtU3RhdGVSZWYuY3VycmVudC5pc1N1Ym1pdHRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdXBkYXRlRm9ybVN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzU3VibWl0dGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXNTdWJtaXR0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzU3VibWl0U3VjY2Vzc2Z1bDogaXNFbXB0eU9iamVjdChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMpLFxyXG4gICAgICAgICAgICAgICAgc3VibWl0Q291bnQ6IGZvcm1TdGF0ZVJlZi5jdXJyZW50LnN1Ym1pdENvdW50ICsgMSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Nob3VsZEZvY3VzRXJyb3IsIGlzVmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhXSk7XHJcbiAgICBjb25zdCByZXNldFJlZnMgPSAoeyBlcnJvcnMsIGlzRGlydHksIGlzU3VibWl0dGVkLCB0b3VjaGVkLCBpc1ZhbGlkLCBzdWJtaXRDb3VudCwgZGlydHlGaWVsZHMsIH0pID0+IHtcclxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdmFsaWRGaWVsZHNSZWYuY3VycmVudCA9IHt9O1xyXG4gICAgICAgICAgICBmaWVsZHNXaXRoVmFsaWRhdGlvblJlZi5jdXJyZW50ID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQgPSB7fTtcclxuICAgICAgICB3YXRjaEZpZWxkc1JlZi5jdXJyZW50ID0gbmV3IFNldCgpO1xyXG4gICAgICAgIGlzV2F0Y2hBbGxSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgIHN1Ym1pdENvdW50OiBzdWJtaXRDb3VudCA/IGZvcm1TdGF0ZVJlZi5jdXJyZW50LnN1Ym1pdENvdW50IDogMCxcclxuICAgICAgICAgICAgaXNEaXJ0eTogaXNEaXJ0eSA/IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzRGlydHkgOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNTdWJtaXR0ZWQ6IGlzU3VibWl0dGVkID8gZm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNTdWJtaXR0ZWQgOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNWYWxpZDogaXNWYWxpZCA/IGZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQgOiBmYWxzZSxcclxuICAgICAgICAgICAgZGlydHlGaWVsZHM6IGRpcnR5RmllbGRzID8gZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMgOiB7fSxcclxuICAgICAgICAgICAgdG91Y2hlZDogdG91Y2hlZCA/IGZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQgOiB7fSxcclxuICAgICAgICAgICAgZXJyb3JzOiBlcnJvcnMgPyBmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMgOiB7fSxcclxuICAgICAgICAgICAgaXNTdWJtaXR0aW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNTdWJtaXRTdWNjZXNzZnVsOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCByZXNldCA9ICh2YWx1ZXMsIG9taXRSZXNldFN0YXRlID0ge30pID0+IHtcclxuICAgICAgICBpZiAoaXNXZWIpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBPYmplY3QudmFsdWVzKGZpZWxkc1JlZi5jdXJyZW50KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyByZWYsIG9wdGlvbnMgfSA9IGZpZWxkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0UmVmID0gaXNSYWRpb09yQ2hlY2tib3hGdW5jdGlvbihyZWYpICYmIEFycmF5LmlzQXJyYXkob3B0aW9ucylcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBvcHRpb25zWzBdLnJlZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHJlZjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNIVE1MRWxlbWVudChpbnB1dFJlZikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0UmVmLmNsb3Nlc3QoJ2Zvcm0nKS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKF9hKSB7IH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmllbGRzUmVmLmN1cnJlbnQgPSB7fTtcclxuICAgICAgICBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQgPSBPYmplY3QuYXNzaWduKHt9LCAodmFsdWVzIHx8IGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCkpO1xyXG4gICAgICAgIHZhbHVlcyAmJiByZW5kZXJXYXRjaGVkSW5wdXRzKCcnKTtcclxuICAgICAgICBPYmplY3QudmFsdWVzKHJlc2V0RmllbGRBcnJheUZ1bmN0aW9uUmVmLmN1cnJlbnQpLmZvckVhY2goKHJlc2V0RmllbGRBcnJheSkgPT4gaXNGdW5jdGlvbihyZXNldEZpZWxkQXJyYXkpICYmIHJlc2V0RmllbGRBcnJheSgpKTtcclxuICAgICAgICBzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCA9IHNob3VsZFVucmVnaXN0ZXJcclxuICAgICAgICAgICAgPyB7fVxyXG4gICAgICAgICAgICA6IGNsb25lT2JqZWN0KHZhbHVlcyB8fCBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIHJlc2V0UmVmcyhvbWl0UmVzZXRTdGF0ZSk7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICByZXNvbHZlciAmJiByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCAmJiB2YWxpZGF0ZVJlc29sdmVyKCk7XHJcbiAgICAgICAgb2JzZXJ2ZXJSZWYuY3VycmVudCA9XHJcbiAgICAgICAgICAgIG9ic2VydmVyUmVmLmN1cnJlbnQgfHwgIWlzV2ViXHJcbiAgICAgICAgICAgICAgICA/IG9ic2VydmVyUmVmLmN1cnJlbnRcclxuICAgICAgICAgICAgICAgIDogb25Eb21SZW1vdmUoZmllbGRzUmVmLCByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXJBbmRSZWYpO1xyXG4gICAgfSwgW3JlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lckFuZFJlZiwgZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50XSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4gKCkgPT4ge1xyXG4gICAgICAgIG9ic2VydmVyUmVmLmN1cnJlbnQgJiYgb2JzZXJ2ZXJSZWYuY3VycmVudC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgaXNVbk1vdW50LmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhmaWVsZHNSZWYuY3VycmVudCkuZm9yRWFjaCgoZmllbGQpID0+IHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lckFuZFJlZihmaWVsZCwgdHJ1ZSkpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgaWYgKCFyZXNvbHZlciAmJiByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCkge1xyXG4gICAgICAgIGZvcm1TdGF0ZS5pc1ZhbGlkID1cclxuICAgICAgICAgICAgZGVlcEVxdWFsKHZhbGlkRmllbGRzUmVmLmN1cnJlbnQsIGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQpICYmXHJcbiAgICAgICAgICAgICAgICBpc0VtcHR5T2JqZWN0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb21tb25Qcm9wcyA9IHtcclxuICAgICAgICB0cmlnZ2VyLFxyXG4gICAgICAgIHNldFZhbHVlOiB1c2VDYWxsYmFjayhzZXRWYWx1ZSwgW3NldEludGVybmFsVmFsdWUsIHRyaWdnZXJdKSxcclxuICAgICAgICBnZXRWYWx1ZXM6IHVzZUNhbGxiYWNrKGdldFZhbHVlcywgW10pLFxyXG4gICAgICAgIHJlZ2lzdGVyOiB1c2VDYWxsYmFjayhyZWdpc3RlciwgW2RlZmF1bHRWYWx1ZXNSZWYuY3VycmVudF0pLFxyXG4gICAgICAgIHVucmVnaXN0ZXI6IHVzZUNhbGxiYWNrKHVucmVnaXN0ZXIsIFtdKSxcclxuICAgICAgICBmb3JtU3RhdGU6IGlzUHJveHlFbmFibGVkXHJcbiAgICAgICAgICAgID8gbmV3IFByb3h5KGZvcm1TdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgZ2V0OiAob2JqLCBwcm9wKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09ICdpc1ZhbGlkJyAmJiBpc09uU3VibWl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ/Cfk4sgYGZvcm1TdGF0ZS5pc1ZhbGlkYCBpcyBhcHBsaWNhYmxlIHdpdGggYG9uVG91Y2hlZGAsIGBvbkNoYW5nZWAgb3IgYG9uQmx1cmAgbW9kZS4gaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaSNmb3JtU3RhdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCBpbiBvYmopIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50W3Byb3BdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9ialtwcm9wXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIDogZm9ybVN0YXRlLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IGNvbnRyb2wgPSB1c2VNZW1vKCgpID0+IChPYmplY3QuYXNzaWduKHsgaXNGb3JtRGlydHksXHJcbiAgICAgICAgdXBkYXRlV2F0Y2hlZFZhbHVlLFxyXG4gICAgICAgIHNob3VsZFVucmVnaXN0ZXIsXHJcbiAgICAgICAgdXBkYXRlRm9ybVN0YXRlLFxyXG4gICAgICAgIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lcixcclxuICAgICAgICB3YXRjaEludGVybmFsLCBtb2RlOiBtb2RlUmVmLmN1cnJlbnQsIHJlVmFsaWRhdGVNb2RlOiB7XHJcbiAgICAgICAgICAgIGlzUmVWYWxpZGF0ZU9uQmx1cixcclxuICAgICAgICAgICAgaXNSZVZhbGlkYXRlT25DaGFuZ2UsXHJcbiAgICAgICAgfSwgdmFsaWRhdGVSZXNvbHZlcjogcmVzb2x2ZXIgPyB2YWxpZGF0ZVJlc29sdmVyIDogdW5kZWZpbmVkLCBmaWVsZHNSZWYsXHJcbiAgICAgICAgcmVzZXRGaWVsZEFycmF5RnVuY3Rpb25SZWYsXHJcbiAgICAgICAgdXNlV2F0Y2hGaWVsZHNSZWYsXHJcbiAgICAgICAgdXNlV2F0Y2hSZW5kZXJGdW5jdGlvbnNSZWYsXHJcbiAgICAgICAgZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYsXHJcbiAgICAgICAgdmFsaWRGaWVsZHNSZWYsXHJcbiAgICAgICAgZmllbGRzV2l0aFZhbGlkYXRpb25SZWYsXHJcbiAgICAgICAgZmllbGRBcnJheU5hbWVzUmVmLFxyXG4gICAgICAgIHJlYWRGb3JtU3RhdGVSZWYsXHJcbiAgICAgICAgZm9ybVN0YXRlUmVmLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZXNSZWYsXHJcbiAgICAgICAgc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLFxyXG4gICAgICAgIGZpZWxkQXJyYXlWYWx1ZXNSZWYgfSwgY29tbW9uUHJvcHMpKSwgW1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCxcclxuICAgICAgICB1cGRhdGVXYXRjaGVkVmFsdWUsXHJcbiAgICAgICAgc2hvdWxkVW5yZWdpc3RlcixcclxuICAgICAgICByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXIsXHJcbiAgICAgICAgd2F0Y2hJbnRlcm5hbCxcclxuICAgIF0pO1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyB3YXRjaCxcclxuICAgICAgICBjb250cm9sLFxyXG4gICAgICAgIGhhbmRsZVN1Ym1pdCwgcmVzZXQ6IHVzZUNhbGxiYWNrKHJlc2V0LCBbXSksIGNsZWFyRXJyb3JzOiB1c2VDYWxsYmFjayhjbGVhckVycm9ycywgW10pLCBzZXRFcnJvcjogdXNlQ2FsbGJhY2soc2V0RXJyb3IsIFtdKSwgZXJyb3JzOiBmb3JtU3RhdGUuZXJyb3JzIH0sIGNvbW1vblByb3BzKTtcclxufVxuXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XG5cbmNvbnN0IEZvcm1Db250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuRm9ybUNvbnRleHQuZGlzcGxheU5hbWUgPSAnUkhGQ29udGV4dCc7XHJcbmNvbnN0IHVzZUZvcm1Db250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChGb3JtQ29udGV4dCk7XHJcbmNvbnN0IEZvcm1Qcm92aWRlciA9IChfYSkgPT4ge1xyXG4gICAgdmFyIHsgY2hpbGRyZW4gfSA9IF9hLCBwcm9wcyA9IF9fcmVzdChfYSwgW1wiY2hpbGRyZW5cIl0pO1xyXG4gICAgcmV0dXJuIChjcmVhdGVFbGVtZW50KEZvcm1Db250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykgfSwgY2hpbGRyZW4pKTtcclxufTtcblxudmFyIGdlbmVyYXRlSWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkID0gdHlwZW9mIHBlcmZvcm1hbmNlID09PSBVTkRFRklORUQgPyBEYXRlLm5vdygpIDogcGVyZm9ybWFuY2Uubm93KCkgKiAxMDAwO1xyXG4gICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+IHtcclxuICAgICAgICBjb25zdCByID0gKE1hdGgucmFuZG9tKCkgKiAxNiArIGQpICUgMTYgfCAwO1xyXG4gICAgICAgIHJldHVybiAoYyA9PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4KS50b1N0cmluZygxNik7XHJcbiAgICB9KTtcclxufTtcblxuZnVuY3Rpb24gcmVtb3ZlQXRJbmRleGVzKGRhdGEsIGluZGV4ZXMpIHtcclxuICAgIGxldCBpID0gMDtcclxuICAgIGNvbnN0IHRlbXAgPSBbLi4uZGF0YV07XHJcbiAgICBmb3IgKGNvbnN0IGluZGV4IG9mIGluZGV4ZXMpIHtcclxuICAgICAgICB0ZW1wLnNwbGljZShpbmRleCAtIGksIDEpO1xyXG4gICAgICAgIGkrKztcclxuICAgIH1cclxuICAgIHJldHVybiBjb21wYWN0KHRlbXApLmxlbmd0aCA/IHRlbXAgOiBbXTtcclxufVxyXG52YXIgcmVtb3ZlQXJyYXlBdCA9IChkYXRhLCBpbmRleCkgPT4gaXNVbmRlZmluZWQoaW5kZXgpXHJcbiAgICA/IFtdXHJcbiAgICA6IHJlbW92ZUF0SW5kZXhlcyhkYXRhLCAoQXJyYXkuaXNBcnJheShpbmRleCkgPyBpbmRleCA6IFtpbmRleF0pLnNvcnQoKSk7XG5cbnZhciBtb3ZlQXJyYXlBdCA9IChkYXRhLCBmcm9tLCB0bykgPT4ge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuICAgICAgICBpZiAoaXNVbmRlZmluZWQoZGF0YVt0b10pKSB7XHJcbiAgICAgICAgICAgIGRhdGFbdG9dID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhLnNwbGljZSh0bywgMCwgZGF0YS5zcGxpY2UoZnJvbSwgMSlbMF0pO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG59O1xuXG52YXIgc3dhcEFycmF5QXQgPSAoZGF0YSwgaW5kZXhBLCBpbmRleEIpID0+IHtcclxuICAgIGNvbnN0IHRlbXAgPSBbZGF0YVtpbmRleEJdLCBkYXRhW2luZGV4QV1dO1xyXG4gICAgZGF0YVtpbmRleEFdID0gdGVtcFswXTtcclxuICAgIGRhdGFbaW5kZXhCXSA9IHRlbXBbMV07XHJcbn07XG5cbmZ1bmN0aW9uIHByZXBlbmQoZGF0YSwgdmFsdWUpIHtcclxuICAgIHJldHVybiBbLi4uKEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWUgfHwgdW5kZWZpbmVkXSksIC4uLmRhdGFdO1xyXG59XG5cbmZ1bmN0aW9uIGluc2VydChkYXRhLCBpbmRleCwgdmFsdWUpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgLi4uZGF0YS5zbGljZSgwLCBpbmRleCksXHJcbiAgICAgICAgLi4uKEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWUgfHwgdW5kZWZpbmVkXSksXHJcbiAgICAgICAgLi4uZGF0YS5zbGljZShpbmRleCksXHJcbiAgICBdO1xyXG59XG5cbnZhciBmaWxsRW1wdHlBcnJheSA9ICh2YWx1ZSkgPT4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBBcnJheSh2YWx1ZS5sZW5ndGgpLmZpbGwodW5kZWZpbmVkKSA6IHVuZGVmaW5lZDtcblxudmFyIGZpbGxCb29sZWFuQXJyYXkgPSAodmFsdWUpID0+IChBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXSkubWFwKChkYXRhKSA9PiB7XHJcbiAgICBpZiAoaXNPYmplY3QoZGF0YSkpIHtcclxuICAgICAgICBjb25zdCBvYmplY3QgPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgIG9iamVjdFtrZXldID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcblxuY29uc3QgbWFwSWRzID0gKHZhbHVlcyA9IFtdLCBrZXlOYW1lLCBza2lwV2FybikgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICBpZiAoIXNraXBXYXJuKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXlOYW1lIGluIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihg8J+TiyB1c2VGaWVsZEFycmF5IGZpZWxkVmFsdWVzIGNvbnRhaW4gdGhlIGtleU5hbWUgXFxgJHtrZXlOYW1lfVxcYCB3aGljaCBpcyByZXNlcnZlZCBmb3IgdXNlIGJ5IHVzZUZpZWxkQXJyYXkuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjdXNlRmllbGRBcnJheWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYPCfk4sgdXNlRmllbGRBcnJheSBpbnB1dCdzIG5hbWUgc2hvdWxkIGJlIGluIG9iamVjdCBzaGFwZSBpbnN0ZWFkIG9mIGZsYXQgYXJyYXkuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjdXNlRmllbGRBcnJheWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbHVlcy5tYXAoKHZhbHVlKSA9PiAoT2JqZWN0LmFzc2lnbih7IFtrZXlOYW1lXTogdmFsdWVba2V5TmFtZV0gfHwgZ2VuZXJhdGVJZCgpIH0sIHZhbHVlKSkpO1xyXG59O1xyXG5jb25zdCB1c2VGaWVsZEFycmF5ID0gKHsgY29udHJvbCwgbmFtZSwga2V5TmFtZSA9ICdpZCcsIH0pID0+IHtcclxuICAgIGNvbnN0IG1ldGhvZHMgPSB1c2VGb3JtQ29udGV4dCgpO1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICBpZiAoIWNvbnRyb2wgJiYgIW1ldGhvZHMpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfwn5OLIHVzZUZpZWxkQXJyYXkgaXMgbWlzc2luZyBgY29udHJvbGAgcHJvcC4gaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaSN1c2VGaWVsZEFycmF5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZm9jdXNJbmRleFJlZiA9IHVzZVJlZigtMSk7XHJcbiAgICBjb25zdCB7IGlzRm9ybURpcnR5LCB1cGRhdGVXYXRjaGVkVmFsdWUsIHJlc2V0RmllbGRBcnJheUZ1bmN0aW9uUmVmLCBmaWVsZEFycmF5TmFtZXNSZWYsIGZpZWxkc1JlZiwgZGVmYXVsdFZhbHVlc1JlZiwgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyLCBmb3JtU3RhdGVSZWYsIHNoYWxsb3dGaWVsZHNTdGF0ZVJlZiwgdXBkYXRlRm9ybVN0YXRlLCByZWFkRm9ybVN0YXRlUmVmLCB2YWxpZEZpZWxkc1JlZiwgZmllbGRzV2l0aFZhbGlkYXRpb25SZWYsIGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLCB2YWxpZGF0ZVJlc29sdmVyLCBnZXRWYWx1ZXMsIHNob3VsZFVucmVnaXN0ZXIsIGZpZWxkQXJyYXlWYWx1ZXNSZWYsIH0gPSBjb250cm9sIHx8IG1ldGhvZHMuY29udHJvbDtcclxuICAgIGNvbnN0IGdldERlZmF1bHRWYWx1ZXMgPSAodmFsdWVzKSA9PiBnZXQoc2hvdWxkVW5yZWdpc3RlciA/IHZhbHVlcyA6IHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lLCBbXSk7XHJcbiAgICBjb25zdCBmaWVsZEFycmF5UGFyZW50TmFtZSA9IGdldEZpZWxkQXJyYXlQYXJlbnROYW1lKG5hbWUpO1xyXG4gICAgY29uc3QgbWVtb2l6ZWREZWZhdWx0VmFsdWVzID0gdXNlUmVmKFtcclxuICAgICAgICAuLi4oZ2V0KGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIGZpZWxkQXJyYXlQYXJlbnROYW1lKVxyXG4gICAgICAgICAgICA/IGdldERlZmF1bHRWYWx1ZXMoZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYuY3VycmVudClcclxuICAgICAgICAgICAgOiBnZXREZWZhdWx0VmFsdWVzKGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCkpLFxyXG4gICAgXSk7XHJcbiAgICBjb25zdCBbZmllbGRzLCBzZXRGaWVsZHNdID0gdXNlU3RhdGUobWFwSWRzKG1lbW9pemVkRGVmYXVsdFZhbHVlcy5jdXJyZW50LCBrZXlOYW1lKSk7XHJcbiAgICBzZXQoZmllbGRBcnJheVZhbHVlc1JlZi5jdXJyZW50LCBuYW1lLCBmaWVsZHMpO1xyXG4gICAgY29uc3Qgb21pdEtleSA9IChmaWVsZHMpID0+IGZpZWxkcy5tYXAoKF9hID0ge30pID0+IHtcclxuICAgICAgICB2YXIgX2IgPSBrZXlOYW1lLCBvbWl0dGVkID0gX2FbX2JdLCByZXN0ID0gX19yZXN0KF9hLCBbdHlwZW9mIF9iID09PSBcInN5bWJvbFwiID8gX2IgOiBfYiArIFwiXCJdKTtcclxuICAgICAgICByZXR1cm4gcmVzdDtcclxuICAgIH0pO1xyXG4gICAgZmllbGRBcnJheU5hbWVzUmVmLmN1cnJlbnQuYWRkKG5hbWUpO1xyXG4gICAgY29uc3QgZ2V0RmllbGRBcnJheVZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4gZ2V0KGZpZWxkQXJyYXlWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSwgW10pLCBbbmFtZV0pO1xyXG4gICAgY29uc3QgZ2V0Q3VycmVudEZpZWxkc1ZhbHVlcyA9ICgpID0+IG1hcElkcyhnZXQoZ2V0VmFsdWVzKCksIG5hbWUsIGdldEZpZWxkQXJyYXlWYWx1ZSgpKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBnZXRGaWVsZEFycmF5VmFsdWUoKVtpbmRleF0pLCBpdGVtKSkpLCBrZXlOYW1lLCB0cnVlKTtcclxuICAgIGZpZWxkQXJyYXlOYW1lc1JlZi5jdXJyZW50LmFkZChuYW1lKTtcclxuICAgIGlmIChmaWVsZEFycmF5UGFyZW50TmFtZSAmJlxyXG4gICAgICAgICFnZXQoZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgZmllbGRBcnJheVBhcmVudE5hbWUpKSB7XHJcbiAgICAgICAgc2V0KGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIGZpZWxkQXJyYXlQYXJlbnROYW1lLCBjbG9uZU9iamVjdChnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBmaWVsZEFycmF5UGFyZW50TmFtZSkpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNldEZpZWxkQW5kVmFsaWRTdGF0ZSA9IChmaWVsZHNWYWx1ZXMpID0+IHtcclxuICAgICAgICBzZXRGaWVsZHMoZmllbGRzVmFsdWVzKTtcclxuICAgICAgICBzZXQoZmllbGRBcnJheVZhbHVlc1JlZi5jdXJyZW50LCBuYW1lLCBmaWVsZHNWYWx1ZXMpO1xyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCAmJiB2YWxpZGF0ZVJlc29sdmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IGdldFZhbHVlcygpO1xyXG4gICAgICAgICAgICBzZXQodmFsdWVzLCBuYW1lLCBmaWVsZHNWYWx1ZXMpO1xyXG4gICAgICAgICAgICB2YWxpZGF0ZVJlc29sdmVyKHZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc2V0RmllbGRzID0gKCkgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGZpZWxkc1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChpc01hdGNoRmllbGRBcnJheU5hbWUoa2V5LCBuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyKGZpZWxkc1JlZi5jdXJyZW50W2tleV0sIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGZpZWxkc1JlZi5jdXJyZW50W2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY2xlYW51cCA9IChyZWYpID0+ICFjb21wYWN0KGdldChyZWYsIG5hbWUsIFtdKSkubGVuZ3RoICYmIHVuc2V0KHJlZiwgbmFtZSk7XHJcbiAgICBjb25zdCB1cGRhdGVEaXJ0eUZpZWxkc1dpdGhEZWZhdWx0VmFsdWVzID0gKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzKSB7XHJcbiAgICAgICAgICAgIHNldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSwgc2V0RmllbGRBcnJheURpcnR5RmllbGRzKG9taXRLZXkodXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpLCBnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lLCBbXSksIGdldChmb3JtU3RhdGVSZWYuY3VycmVudC5kaXJ0eUZpZWxkcywgbmFtZSwgW10pKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGJhdGNoU3RhdGVVcGRhdGUgPSAobWV0aG9kLCBhcmdzLCB1cGRhdGVkRmllbGRWYWx1ZXMsIHVwZGF0ZWRGb3JtVmFsdWVzID0gW10sIHNob3VsZFNldCA9IHRydWUsIHNob3VsZFVwZGF0ZVZhbGlkID0gZmFsc2UpID0+IHtcclxuICAgICAgICBpZiAoZ2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lKSkge1xyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXQgPSBtZXRob2QoZ2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lKSwgYXJncy5hcmdBLCBhcmdzLmFyZ0IpO1xyXG4gICAgICAgICAgICBzaG91bGRTZXQgJiYgc2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lLCBvdXRwdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2V0KGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dCA9IG1ldGhvZChnZXQoZmllbGRBcnJheURlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSksIGFyZ3MuYXJnQSwgYXJncy5hcmdCKTtcclxuICAgICAgICAgICAgc2hvdWxkU2V0ICYmIHNldChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lLCBvdXRwdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lKSkpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gbWV0aG9kKGdldChmb3JtU3RhdGVSZWYuY3VycmVudC5lcnJvcnMsIG5hbWUpLCBhcmdzLmFyZ0EsIGFyZ3MuYXJnQik7XHJcbiAgICAgICAgICAgIHNob3VsZFNldCAmJiBzZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQuZXJyb3JzLCBuYW1lLCBvdXRwdXQpO1xyXG4gICAgICAgICAgICBjbGVhbnVwKGZvcm1TdGF0ZVJlZi5jdXJyZW50LmVycm9ycyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCAmJlxyXG4gICAgICAgICAgICBnZXQoZm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCwgbmFtZSkpIHtcclxuICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gbWV0aG9kKGdldChmb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkLCBuYW1lKSwgYXJncy5hcmdBLCBhcmdzLmFyZ0IpO1xyXG4gICAgICAgICAgICBzaG91bGRTZXQgJiYgc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQsIG5hbWUsIG91dHB1dCk7XHJcbiAgICAgICAgICAgIGNsZWFudXAoZm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMgfHxcclxuICAgICAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzRGlydHkpIHtcclxuICAgICAgICAgICAgc2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLCBuYW1lLCBzZXRGaWVsZEFycmF5RGlydHlGaWVsZHMob21pdEtleSh1cGRhdGVkRm9ybVZhbHVlcyksIGdldChkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUsIFtdKSwgZ2V0KGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzLCBuYW1lLCBbXSkpKTtcclxuICAgICAgICAgICAgdXBkYXRlRGlydHlGaWVsZHNXaXRoRGVmYXVsdFZhbHVlcyh1cGRhdGVkRmllbGRWYWx1ZXMpO1xyXG4gICAgICAgICAgICBjbGVhbnVwKGZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5RmllbGRzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZVZhbGlkICYmXHJcbiAgICAgICAgICAgIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkICYmXHJcbiAgICAgICAgICAgICF2YWxpZGF0ZVJlc29sdmVyKSB7XHJcbiAgICAgICAgICAgIHNldCh2YWxpZEZpZWxkc1JlZi5jdXJyZW50LCBuYW1lLCBtZXRob2QoZ2V0KHZhbGlkRmllbGRzUmVmLmN1cnJlbnQsIG5hbWUsIFtdKSwgYXJncy5hcmdBKSk7XHJcbiAgICAgICAgICAgIGNsZWFudXAodmFsaWRGaWVsZHNSZWYuY3VycmVudCk7XHJcbiAgICAgICAgICAgIHNldChmaWVsZHNXaXRoVmFsaWRhdGlvblJlZi5jdXJyZW50LCBuYW1lLCBtZXRob2QoZ2V0KGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQsIG5hbWUsIFtdKSwgYXJncy5hcmdBKSk7XHJcbiAgICAgICAgICAgIGNsZWFudXAoZmllbGRzV2l0aFZhbGlkYXRpb25SZWYuY3VycmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgIGlzRGlydHk6IGlzRm9ybURpcnR5KG5hbWUsIG9taXRLZXkodXBkYXRlZEZvcm1WYWx1ZXMpKSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBhcHBlbmQgPSAodmFsdWUsIHNob3VsZEZvY3VzID0gdHJ1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFwcGVuZFZhbHVlID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07XHJcbiAgICAgICAgY29uc3QgdXBkYXRlRm9ybVZhbHVlcyA9IFtcclxuICAgICAgICAgICAgLi4uZ2V0Q3VycmVudEZpZWxkc1ZhbHVlcygpLFxyXG4gICAgICAgICAgICAuLi5tYXBJZHMoYXBwZW5kVmFsdWUsIGtleU5hbWUpLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgc2V0RmllbGRBbmRWYWxpZFN0YXRlKHVwZGF0ZUZvcm1WYWx1ZXMpO1xyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMgfHxcclxuICAgICAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzRGlydHkpIHtcclxuICAgICAgICAgICAgdXBkYXRlRGlydHlGaWVsZHNXaXRoRGVmYXVsdFZhbHVlcyh1cGRhdGVGb3JtVmFsdWVzKTtcclxuICAgICAgICAgICAgdXBkYXRlRm9ybVN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzRGlydHk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkaXJ0eUZpZWxkczogZm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAhc2hvdWxkVW5yZWdpc3RlciAmJlxyXG4gICAgICAgICAgICBzZXQoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUsIFtcclxuICAgICAgICAgICAgICAgIC4uLihnZXQoc2hhbGxvd0ZpZWxkc1N0YXRlUmVmLmN1cnJlbnQsIG5hbWUpIHx8IFtdKSxcclxuICAgICAgICAgICAgICAgIC4uLmNsb25lT2JqZWN0KGFwcGVuZFZhbHVlKSxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgZm9jdXNJbmRleFJlZi5jdXJyZW50ID0gc2hvdWxkRm9jdXNcclxuICAgICAgICAgICAgPyBnZXQoZmllbGRBcnJheVZhbHVlc1JlZi5jdXJyZW50LCBuYW1lKS5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIDogLTE7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcHJlcGVuZCQxID0gKHZhbHVlLCBzaG91bGRGb2N1cyA9IHRydWUpID0+IHtcclxuICAgICAgICBjb25zdCBlbXB0eUFycmF5ID0gZmlsbEVtcHR5QXJyYXkodmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzID0gcHJlcGVuZChnZXRDdXJyZW50RmllbGRzVmFsdWVzKCksIG1hcElkcyhBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXSwga2V5TmFtZSkpO1xyXG4gICAgICAgIHNldEZpZWxkQW5kVmFsaWRTdGF0ZSh1cGRhdGVkRmllbGRBcnJheVZhbHVlcyk7XHJcbiAgICAgICAgcmVzZXRGaWVsZHMoKTtcclxuICAgICAgICBiYXRjaFN0YXRlVXBkYXRlKHByZXBlbmQsIHtcclxuICAgICAgICAgICAgYXJnQTogZW1wdHlBcnJheSxcclxuICAgICAgICAgICAgYXJnQzogZmlsbEJvb2xlYW5BcnJheSh2YWx1ZSksXHJcbiAgICAgICAgfSwgdXBkYXRlZEZpZWxkQXJyYXlWYWx1ZXMpO1xyXG4gICAgICAgIGZvY3VzSW5kZXhSZWYuY3VycmVudCA9IHNob3VsZEZvY3VzID8gMCA6IC0xO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlbW92ZSA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkVmFsdWVzID0gZ2V0Q3VycmVudEZpZWxkc1ZhbHVlcygpO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRGaWVsZFZhbHVlcyA9IHJlbW92ZUFycmF5QXQoZmllbGRWYWx1ZXMsIGluZGV4KTtcclxuICAgICAgICBzZXRGaWVsZEFuZFZhbGlkU3RhdGUodXBkYXRlZEZpZWxkVmFsdWVzKTtcclxuICAgICAgICByZXNldEZpZWxkcygpO1xyXG4gICAgICAgIGJhdGNoU3RhdGVVcGRhdGUocmVtb3ZlQXJyYXlBdCwge1xyXG4gICAgICAgICAgICBhcmdBOiBpbmRleCxcclxuICAgICAgICAgICAgYXJnQzogaW5kZXgsXHJcbiAgICAgICAgfSwgdXBkYXRlZEZpZWxkVmFsdWVzLCByZW1vdmVBcnJheUF0KGZpZWxkVmFsdWVzLCBpbmRleCksIHRydWUsIHRydWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGluc2VydCQxID0gKGluZGV4LCB2YWx1ZSwgc2hvdWxkRm9jdXMgPSB0cnVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZW1wdHlBcnJheSA9IGZpbGxFbXB0eUFycmF5KHZhbHVlKTtcclxuICAgICAgICBjb25zdCBmaWVsZFZhbHVlcyA9IGdldEN1cnJlbnRGaWVsZHNWYWx1ZXMoKTtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmllbGRBcnJheVZhbHVlcyA9IGluc2VydChmaWVsZFZhbHVlcywgaW5kZXgsIG1hcElkcyhBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXSwga2V5TmFtZSkpO1xyXG4gICAgICAgIHNldEZpZWxkQW5kVmFsaWRTdGF0ZSh1cGRhdGVkRmllbGRBcnJheVZhbHVlcyk7XHJcbiAgICAgICAgcmVzZXRGaWVsZHMoKTtcclxuICAgICAgICBiYXRjaFN0YXRlVXBkYXRlKGluc2VydCwge1xyXG4gICAgICAgICAgICBhcmdBOiBpbmRleCxcclxuICAgICAgICAgICAgYXJnQjogZW1wdHlBcnJheSxcclxuICAgICAgICAgICAgYXJnQzogaW5kZXgsXHJcbiAgICAgICAgICAgIGFyZ0Q6IGZpbGxCb29sZWFuQXJyYXkodmFsdWUpLFxyXG4gICAgICAgIH0sIHVwZGF0ZWRGaWVsZEFycmF5VmFsdWVzLCBpbnNlcnQoZmllbGRWYWx1ZXMsIGluZGV4KSk7XHJcbiAgICAgICAgZm9jdXNJbmRleFJlZi5jdXJyZW50ID0gc2hvdWxkRm9jdXMgPyBpbmRleCA6IC0xO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHN3YXAgPSAoaW5kZXhBLCBpbmRleEIpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZFZhbHVlcyA9IGdldEN1cnJlbnRGaWVsZHNWYWx1ZXMoKTtcclxuICAgICAgICBzd2FwQXJyYXlBdChmaWVsZFZhbHVlcywgaW5kZXhBLCBpbmRleEIpO1xyXG4gICAgICAgIHJlc2V0RmllbGRzKCk7XHJcbiAgICAgICAgc2V0RmllbGRBbmRWYWxpZFN0YXRlKFsuLi5maWVsZFZhbHVlc10pO1xyXG4gICAgICAgIGJhdGNoU3RhdGVVcGRhdGUoc3dhcEFycmF5QXQsIHtcclxuICAgICAgICAgICAgYXJnQTogaW5kZXhBLFxyXG4gICAgICAgICAgICBhcmdCOiBpbmRleEIsXHJcbiAgICAgICAgICAgIGFyZ0M6IGluZGV4QSxcclxuICAgICAgICAgICAgYXJnRDogaW5kZXhCLFxyXG4gICAgICAgIH0sIHVuZGVmaW5lZCwgZmllbGRWYWx1ZXMsIGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBtb3ZlID0gKGZyb20sIHRvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRWYWx1ZXMgPSBnZXRDdXJyZW50RmllbGRzVmFsdWVzKCk7XHJcbiAgICAgICAgbW92ZUFycmF5QXQoZmllbGRWYWx1ZXMsIGZyb20sIHRvKTtcclxuICAgICAgICByZXNldEZpZWxkcygpO1xyXG4gICAgICAgIHNldEZpZWxkQW5kVmFsaWRTdGF0ZShbLi4uZmllbGRWYWx1ZXNdKTtcclxuICAgICAgICBiYXRjaFN0YXRlVXBkYXRlKG1vdmVBcnJheUF0LCB7XHJcbiAgICAgICAgICAgIGFyZ0E6IGZyb20sXHJcbiAgICAgICAgICAgIGFyZ0I6IHRvLFxyXG4gICAgICAgICAgICBhcmdDOiBmcm9tLFxyXG4gICAgICAgICAgICBhcmdEOiB0byxcclxuICAgICAgICB9LCB1bmRlZmluZWQsIGZpZWxkVmFsdWVzLCBmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybign8J+TiyB1c2VGaWVsZEFycmF5IGlzIG1pc3NpbmcgYG5hbWVgIGF0dHJpYnV0ZS4gaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaSN1c2VGaWVsZEFycmF5Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlcyA9IGdldChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgICAgICBpZiAoZGVmYXVsdFZhbHVlcyAmJiBmaWVsZHMubGVuZ3RoIDwgZGVmYXVsdFZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc2V0KGZpZWxkQXJyYXlEZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUsIGRlZmF1bHRWYWx1ZXMuc2xpY2UoMSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVXYXRjaGVkVmFsdWUobmFtZSk7XHJcbiAgICAgICAgaWYgKGZvY3VzSW5kZXhSZWYuY3VycmVudCA+IC0xKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGZpZWxkc1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1JlZi5jdXJyZW50W2tleV07XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoYCR7bmFtZX1bJHtmb2N1c0luZGV4UmVmLmN1cnJlbnR9XWApICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQucmVmLmZvY3VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQucmVmLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9jdXNJbmRleFJlZi5jdXJyZW50ID0gLTE7XHJcbiAgICB9LCBbZmllbGRzLCBuYW1lXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc2V0RnVuY3Rpb25zID0gcmVzZXRGaWVsZEFycmF5RnVuY3Rpb25SZWYuY3VycmVudDtcclxuICAgICAgICBjb25zdCBmaWVsZEFycmF5TmFtZXMgPSBmaWVsZEFycmF5TmFtZXNSZWYuY3VycmVudDtcclxuICAgICAgICBpZiAoIWdldEZpZWxkQXJyYXlQYXJlbnROYW1lKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJlc2V0RnVuY3Rpb25zW25hbWVdID0gKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc2V0RmllbGRzKCk7XHJcbiAgICAgICAgICAgICAgICAhZGF0YSAmJiB1bnNldChmaWVsZEFycmF5RGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIHVuc2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIG1lbW9pemVkRGVmYXVsdFZhbHVlcy5jdXJyZW50ID0gZ2V0KGRhdGEgfHwgZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgICAgICAgICAgICAgIHNldEZpZWxkcyhtYXBJZHMobWVtb2l6ZWREZWZhdWx0VmFsdWVzLmN1cnJlbnQsIGtleU5hbWUpKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNldEZpZWxkcygpO1xyXG4gICAgICAgICAgICBkZWxldGUgcmVzZXRGdW5jdGlvbnNbbmFtZV07XHJcbiAgICAgICAgICAgIHVuc2V0KGZpZWxkQXJyYXlWYWx1ZXNSZWYsIG5hbWUpO1xyXG4gICAgICAgICAgICBmaWVsZEFycmF5TmFtZXMuZGVsZXRlKG5hbWUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN3YXA6IHVzZUNhbGxiYWNrKHN3YXAsIFtuYW1lXSksXHJcbiAgICAgICAgbW92ZTogdXNlQ2FsbGJhY2sobW92ZSwgW25hbWVdKSxcclxuICAgICAgICBwcmVwZW5kOiB1c2VDYWxsYmFjayhwcmVwZW5kJDEsIFtuYW1lXSksXHJcbiAgICAgICAgYXBwZW5kOiB1c2VDYWxsYmFjayhhcHBlbmQsIFtuYW1lXSksXHJcbiAgICAgICAgcmVtb3ZlOiB1c2VDYWxsYmFjayhyZW1vdmUsIFtuYW1lXSksXHJcbiAgICAgICAgaW5zZXJ0OiB1c2VDYWxsYmFjayhpbnNlcnQkMSwgW25hbWVdKSxcclxuICAgICAgICBmaWVsZHMsXHJcbiAgICB9O1xyXG59O1xuXG52YXIgZ2V0SW5wdXRWYWx1ZSA9IChldmVudCkgPT4gaXNQcmltaXRpdmUoZXZlbnQpIHx8XHJcbiAgICAhaXNPYmplY3QoZXZlbnQudGFyZ2V0KSB8fFxyXG4gICAgKGlzT2JqZWN0KGV2ZW50LnRhcmdldCkgJiYgIWV2ZW50LnR5cGUpXHJcbiAgICA/IGV2ZW50XHJcbiAgICA6IGlzVW5kZWZpbmVkKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICA/IGV2ZW50LnRhcmdldC5jaGVja2VkXHJcbiAgICAgICAgOiBldmVudC50YXJnZXQudmFsdWU7XG5cbmZ1bmN0aW9uIHVzZUNvbnRyb2xsZXIoeyBuYW1lLCBydWxlcywgZGVmYXVsdFZhbHVlLCBjb250cm9sLCBvbkZvY3VzLCB9KSB7XHJcbiAgICBjb25zdCBtZXRob2RzID0gdXNlRm9ybUNvbnRleHQoKTtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgaWYgKCFjb250cm9sICYmICFtZXRob2RzKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcign8J+TiyBDb250cm9sbGVyIGlzIG1pc3NpbmcgYGNvbnRyb2xgIHByb3AuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjQ29udHJvbGxlcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHsgZGVmYXVsdFZhbHVlc1JlZiwgc2V0VmFsdWUsIHJlZ2lzdGVyLCB1bnJlZ2lzdGVyLCB0cmlnZ2VyLCBtb2RlLCByZVZhbGlkYXRlTW9kZTogeyBpc1JlVmFsaWRhdGVPbkJsdXIsIGlzUmVWYWxpZGF0ZU9uQ2hhbmdlIH0sIGZvcm1TdGF0ZSwgZm9ybVN0YXRlUmVmOiB7IGN1cnJlbnQ6IHsgaXNTdWJtaXR0ZWQsIHRvdWNoZWQsIGVycm9ycyB9LCB9LCB1cGRhdGVGb3JtU3RhdGUsIHJlYWRGb3JtU3RhdGVSZWYsIGZpZWxkc1JlZiwgZmllbGRBcnJheU5hbWVzUmVmLCBzaGFsbG93RmllbGRzU3RhdGVSZWYsIH0gPSBjb250cm9sIHx8IG1ldGhvZHMuY29udHJvbDtcclxuICAgIGNvbnN0IGlzTm90RmllbGRBcnJheSA9ICFpc05hbWVJbkZpZWxkQXJyYXkoZmllbGRBcnJheU5hbWVzUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgY29uc3QgZ2V0SW5pdGlhbFZhbHVlID0gKCkgPT4gIWlzVW5kZWZpbmVkKGdldChzaGFsbG93RmllbGRzU3RhdGVSZWYuY3VycmVudCwgbmFtZSkpICYmIGlzTm90RmllbGRBcnJheVxyXG4gICAgICAgID8gZ2V0KHNoYWxsb3dGaWVsZHNTdGF0ZVJlZi5jdXJyZW50LCBuYW1lKVxyXG4gICAgICAgIDogaXNVbmRlZmluZWQoZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgICAgICA/IGdldChkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUpXHJcbiAgICAgICAgICAgIDogZGVmYXVsdFZhbHVlO1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRJbnB1dFN0YXRlVmFsdWVdID0gdXNlU3RhdGUoZ2V0SW5pdGlhbFZhbHVlKCkpO1xyXG4gICAgY29uc3QgdmFsdWVSZWYgPSB1c2VSZWYodmFsdWUpO1xyXG4gICAgY29uc3QgcmVmID0gdXNlUmVmKHtcclxuICAgICAgICBmb2N1czogKCkgPT4gbnVsbCxcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgb25Gb2N1c1JlZiA9IHVzZVJlZihvbkZvY3VzIHx8XHJcbiAgICAgICAgKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24ocmVmLmN1cnJlbnQuZm9jdXMpKSB7XHJcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzRnVuY3Rpb24ocmVmLmN1cnJlbnQuZm9jdXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGDwn5OLICdyZWYnIGZyb20gQ29udHJvbGxlciByZW5kZXIgcHJvcCBtdXN0IGJlIGF0dGFjaGVkIHRvIGEgUmVhY3QgY29tcG9uZW50IG9yIGEgRE9NIEVsZW1lbnQgd2hvc2UgcmVmIHByb3ZpZGVzIGEgJ2ZvY3VzKCknIG1ldGhvZGApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgY29uc3Qgc2hvdWxkVmFsaWRhdGUgPSB1c2VDYWxsYmFjaygoaXNCbHVyRXZlbnQpID0+ICFza2lwVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHsgaXNCbHVyRXZlbnQsXHJcbiAgICAgICAgaXNSZVZhbGlkYXRlT25CbHVyLFxyXG4gICAgICAgIGlzUmVWYWxpZGF0ZU9uQ2hhbmdlLFxyXG4gICAgICAgIGlzU3VibWl0dGVkLCBpc1RvdWNoZWQ6ICEhZ2V0KHRvdWNoZWQsIG5hbWUpIH0sIG1vZGUpKSwgW1xyXG4gICAgICAgIGlzUmVWYWxpZGF0ZU9uQmx1cixcclxuICAgICAgICBpc1JlVmFsaWRhdGVPbkNoYW5nZSxcclxuICAgICAgICBpc1N1Ym1pdHRlZCxcclxuICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgbW9kZSxcclxuICAgIF0pO1xyXG4gICAgY29uc3QgY29tbW9uVGFzayA9IHVzZUNhbGxiYWNrKChbZXZlbnRdKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGdldElucHV0VmFsdWUoZXZlbnQpO1xyXG4gICAgICAgIHNldElucHV0U3RhdGVWYWx1ZShkYXRhKTtcclxuICAgICAgICB2YWx1ZVJlZi5jdXJyZW50ID0gZGF0YTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHJlZ2lzdGVyRmllbGQgPSB1c2VDYWxsYmFjaygoc2hvdWxkVXBkYXRlVmFsdWUpID0+IHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oJ/Cfk4sgRmllbGQgaXMgbWlzc2luZyBgbmFtZWAgcHJvcC4gaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaSNDb250cm9sbGVyJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpZWxkc1JlZi5jdXJyZW50W25hbWVdKSB7XHJcbiAgICAgICAgICAgIGZpZWxkc1JlZi5jdXJyZW50W25hbWVdID0gT2JqZWN0LmFzc2lnbih7IHJlZjogZmllbGRzUmVmLmN1cnJlbnRbbmFtZV0ucmVmIH0sIHJ1bGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlZ2lzdGVyKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICBmb2N1czogb25Gb2N1c1JlZi5jdXJyZW50LFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0U3RhdGVWYWx1ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVJlZi5jdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KSwgcnVsZXMpO1xyXG4gICAgICAgICAgICBzaG91bGRVcGRhdGVWYWx1ZSA9IGlzVW5kZWZpbmVkKGdldChkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQsIG5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hvdWxkVXBkYXRlVmFsdWUgJiZcclxuICAgICAgICAgICAgaXNOb3RGaWVsZEFycmF5ICYmXHJcbiAgICAgICAgICAgIHNldElucHV0U3RhdGVWYWx1ZShnZXRJbml0aWFsVmFsdWUoKSk7XHJcbiAgICB9LCBbcnVsZXMsIG5hbWUsIHJlZ2lzdGVyXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4gKCkgPT4gdW5yZWdpc3RlcihuYW1lKSwgW25hbWVdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGDwn5OLICR7bmFtZX0gaXMgbWlzc2luZyBpbiB0aGUgJ2RlZmF1bHRWYWx1ZScgcHJvcCBvZiBlaXRoZXIgaXRzIENvbnRyb2xsZXIgKGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjQ29udHJvbGxlcikgb3IgdXNlRm9ybSAoaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaSN1c2VGb3JtKWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXNOb3RGaWVsZEFycmF5ICYmIGlzVW5kZWZpbmVkKGRlZmF1bHRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybign8J+TiyBDb250cm9sbGVyIGlzIG1pc3NpbmcgYGRlZmF1bHRWYWx1ZWAgcHJvcCB3aGVuIHVzaW5nIGB1c2VGaWVsZEFycmF5YC4gaHR0cHM6Ly9yZWFjdC1ob29rLWZvcm0uY29tL2FwaSNDb250cm9sbGVyJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVnaXN0ZXJGaWVsZCgpO1xyXG4gICAgfSwgW3JlZ2lzdGVyRmllbGRdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgIWZpZWxkc1JlZi5jdXJyZW50W25hbWVdICYmIHJlZ2lzdGVyRmllbGQodHJ1ZSk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG9uQmx1ciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQgJiYgIWdldCh0b3VjaGVkLCBuYW1lKSkge1xyXG4gICAgICAgICAgICBzZXQodG91Y2hlZCwgbmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUZvcm1TdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hvdWxkVmFsaWRhdGUodHJ1ZSkgJiYgdHJpZ2dlcihuYW1lKTtcclxuICAgIH0sIFtuYW1lLCB1cGRhdGVGb3JtU3RhdGUsIHNob3VsZFZhbGlkYXRlLCB0cmlnZ2VyLCByZWFkRm9ybVN0YXRlUmVmXSk7XHJcbiAgICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKCguLi5ldmVudCkgPT4gc2V0VmFsdWUobmFtZSwgY29tbW9uVGFzayhldmVudCksIHtcclxuICAgICAgICBzaG91bGRWYWxpZGF0ZTogc2hvdWxkVmFsaWRhdGUoKSxcclxuICAgICAgICBzaG91bGREaXJ0eTogdHJ1ZSxcclxuICAgIH0pLCBbc2V0VmFsdWUsIG5hbWUsIHNob3VsZFZhbGlkYXRlXSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZpZWxkOiB7XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlLFxyXG4gICAgICAgICAgICBvbkJsdXIsXHJcbiAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICByZWYsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRhOiBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh7XHJcbiAgICAgICAgICAgIGludmFsaWQ6ICEhZ2V0KGVycm9ycywgbmFtZSksXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpc0RpcnR5OiB7XHJcbiAgICAgICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhZ2V0KGZvcm1TdGF0ZS5kaXJ0eUZpZWxkcywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpc1RvdWNoZWQ6IHtcclxuICAgICAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gISFnZXQoZm9ybVN0YXRlLnRvdWNoZWQsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSxcclxuICAgIH07XHJcbn1cblxuZnVuY3Rpb24gdXNlV2F0Y2goeyBjb250cm9sLCBuYW1lLCBkZWZhdWx0VmFsdWUsIH0pIHtcclxuICAgIGNvbnN0IG1ldGhvZHMgPSB1c2VGb3JtQ29udGV4dCgpO1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICBpZiAoIWNvbnRyb2wgJiYgIW1ldGhvZHMpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfwn5OLIHVzZVdhdGNoIGlzIG1pc3NpbmcgYGNvbnRyb2xgIHByb3AuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjdXNlV2F0Y2gnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB7IHVzZVdhdGNoRmllbGRzUmVmLCB1c2VXYXRjaFJlbmRlckZ1bmN0aW9uc1JlZiwgd2F0Y2hJbnRlcm5hbCwgZGVmYXVsdFZhbHVlc1JlZiwgfSA9IGNvbnRyb2wgfHwgbWV0aG9kcy5jb250cm9sO1xyXG4gICAgY29uc3QgdXBkYXRlVmFsdWUgPSB1c2VTdGF0ZSgpWzFdO1xyXG4gICAgY29uc3QgaWRSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGRlZmF1bHRWYWx1ZVJlZiA9IHVzZVJlZihkZWZhdWx0VmFsdWUpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybign8J+TiyB1c2VXYXRjaCBpcyBtaXNzaW5nIGBuYW1lYCBhdHRyaWJ1dGUuIGh0dHBzOi8vcmVhY3QtaG9vay1mb3JtLmNvbS9hcGkjdXNlV2F0Y2gnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpZCA9IChpZFJlZi5jdXJyZW50ID0gZ2VuZXJhdGVJZCgpKTtcclxuICAgICAgICBjb25zdCB3YXRjaEZpZWxkc0hvb2tSZW5kZXIgPSB1c2VXYXRjaFJlbmRlckZ1bmN0aW9uc1JlZi5jdXJyZW50O1xyXG4gICAgICAgIGNvbnN0IHdhdGNoRmllbGRzSG9vayA9IHVzZVdhdGNoRmllbGRzUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgd2F0Y2hGaWVsZHNIb29rW2lkXSA9IG5ldyBTZXQoKTtcclxuICAgICAgICB3YXRjaEZpZWxkc0hvb2tSZW5kZXJbaWRdID0gKCkgPT4gdXBkYXRlVmFsdWUoe30pO1xyXG4gICAgICAgIHdhdGNoSW50ZXJuYWwobmFtZSwgZGVmYXVsdFZhbHVlUmVmLmN1cnJlbnQsIGlkKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBkZWxldGUgd2F0Y2hGaWVsZHNIb29rW2lkXTtcclxuICAgICAgICAgICAgZGVsZXRlIHdhdGNoRmllbGRzSG9va1JlbmRlcltpZF07XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIHVzZVdhdGNoUmVuZGVyRnVuY3Rpb25zUmVmLFxyXG4gICAgICAgIHVzZVdhdGNoRmllbGRzUmVmLFxyXG4gICAgICAgIHdhdGNoSW50ZXJuYWwsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlUmVmLFxyXG4gICAgXSk7XHJcbiAgICByZXR1cm4gaWRSZWYuY3VycmVudFxyXG4gICAgICAgID8gd2F0Y2hJbnRlcm5hbChuYW1lLCBkZWZhdWx0VmFsdWVSZWYuY3VycmVudCwgaWRSZWYuY3VycmVudClcclxuICAgICAgICA6IGlzVW5kZWZpbmVkKGRlZmF1bHRWYWx1ZSlcclxuICAgICAgICAgICAgPyBpc1N0cmluZyhuYW1lKVxyXG4gICAgICAgICAgICAgICAgPyBnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lKVxyXG4gICAgICAgICAgICAgICAgOiBBcnJheS5pc0FycmF5KG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBuYW1lLnJlZHVjZSgocHJldmlvdXMsIGlucHV0TmFtZSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXMpLCB7IFtpbnB1dE5hbWVdOiBnZXQoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBpbnB1dE5hbWUpIH0pKSwge30pXHJcbiAgICAgICAgICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnRcclxuICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWU7XHJcbn1cblxuY29uc3QgQ29udHJvbGxlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgeyBydWxlcywgYXMsIHJlbmRlciwgZGVmYXVsdFZhbHVlLCBjb250cm9sLCBvbkZvY3VzIH0gPSBwcm9wcywgcmVzdCA9IF9fcmVzdChwcm9wcywgW1wicnVsZXNcIiwgXCJhc1wiLCBcInJlbmRlclwiLCBcImRlZmF1bHRWYWx1ZVwiLCBcImNvbnRyb2xcIiwgXCJvbkZvY3VzXCJdKTtcclxuICAgIGNvbnN0IHsgZmllbGQsIG1ldGEgfSA9IHVzZUNvbnRyb2xsZXIocHJvcHMpO1xyXG4gICAgY29uc3QgY29tcG9uZW50UHJvcHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJlc3QpLCBmaWVsZCk7XHJcbiAgICByZXR1cm4gYXNcclxuICAgICAgICA/IGlzVmFsaWRFbGVtZW50KGFzKVxyXG4gICAgICAgICAgICA/IGNsb25lRWxlbWVudChhcywgY29tcG9uZW50UHJvcHMpXHJcbiAgICAgICAgICAgIDogY3JlYXRlRWxlbWVudChhcywgY29tcG9uZW50UHJvcHMpXHJcbiAgICAgICAgOiByZW5kZXJcclxuICAgICAgICAgICAgPyByZW5kZXIoZmllbGQsIG1ldGEpXHJcbiAgICAgICAgICAgIDogbnVsbDtcclxufTtcblxuZXhwb3J0IHsgQ29udHJvbGxlciwgRm9ybVByb3ZpZGVyLCBhcHBlbmRFcnJvcnMsIGdldCwgdHJhbnNmb3JtVG9OZXN0T2JqZWN0LCB1c2VDb250cm9sbGVyLCB1c2VGaWVsZEFycmF5LCB1c2VGb3JtLCB1c2VGb3JtQ29udGV4dCwgdXNlV2F0Y2ggfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImltcG9ydCBBZG1pbkhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dC9BZG1pbkhlYWRlcic7XHJcbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2F1dGgvQWRtaW4nO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgeyBsaXN0TWVzc2FnZUJ5SWQsIHNldFZ1IH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9tZXNzYWdlQWN0aW9ucyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IFNlbmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZW5kJztcclxuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dGFyZWFBdXRvc2l6ZSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBCYWNrc3BhY2VJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9CYWNrc3BhY2UnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKGRhcmtUaGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHRtaW5XaWR0aDogMjc1LFxyXG5cdH0sXHJcblx0cm9vdFBhcGVyOiB7XHJcblx0XHRwYWRkaW5nOiAnNnB4IDRweCcsXHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjMjEyNTI5JyxcclxuXHR9LFxyXG5cdGJ1bGxldDoge1xyXG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcblx0XHRtYXJnaW46ICcwIDJweCcsXHJcblx0XHR0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyxcclxuXHR9LFxyXG5cdHRpdGxlOiB7XHJcblx0XHRmb250U2l6ZTogMTQsXHJcblx0fSxcclxuXHRwb3M6IHtcclxuXHRcdG1hcmdpbkJvdHRvbTogMTIsXHJcblx0fSxcclxuXHRpY29uQnV0dG9uOiB7XHJcblx0XHRwYWRkaW5nOiAxMCxcclxuXHR9LFxyXG5cdGlucHV0OiB7XHJcblx0XHRtYXJnaW5MZWZ0OiBkYXJrVGhlbWUuc3BhY2luZygxKSxcclxuXHRcdGZsZXg6IDEsXHJcblx0fSxcclxuXHRkaXZpZGVyOiB7XHJcblx0XHRoZWlnaHQ6IDI4LFxyXG5cdFx0bWFyZ2luOiA0LFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IE1lc3NhZ2VJZCA9ICh7IG1lc3NhZ2UsIHJvdXRlciB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSgpO1xyXG5cdC8vRW52b3llciBsYSByw6lwb25zZVxyXG5cdC8vVXNlRWZmZWN0IG1ldHRhbnQgdnUgw6AgdHJ1ZSBhdSBjaGFyZ2VtZW50IGRlIGxhIHBhZ2VcclxuXHQvL0FmZmljaGVyIGxhIHLDqXBvbnNlIGVuIGRlc3NvdXMgZHUgbWVzc2FnZVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0VnUocm91dGVyLnF1ZXJ5LmlkLCB0b2tlbik7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEFkbWluSGVhZGVyPlxyXG5cdFx0XHRcdDxBZG1pbj5cclxuXHRcdFx0XHRcdHsvKiBGaWwgZCdhcmlhbmUgKi99XHJcblx0XHRcdFx0XHQ8aDIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+XHJcblx0XHRcdFx0XHRcdENvbnN1bHRhdGlvbiBkdSBtZXNzYWdlIGRlIHttZXNzYWdlLm5vbX1cclxuXHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4vbWVzc2FnZXMnPlxyXG5cdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHQ8QmFja3NwYWNlSWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU9J2xhcmdlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHQ8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblx0XHRcdFx0XHRcdDxDYXJkQ29udGVudD5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PSdoNScgY29tcG9uZW50PSdoNSc+XHJcblx0XHRcdFx0XHRcdFx0XHRFbnZvecOpIHBhciB7bWVzc2FnZS5ub219XHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ndGV4dFNlY29uZGFyeSdcclxuXHRcdFx0XHRcdFx0XHRcdGd1dHRlckJvdHRvbT5cclxuXHRcdFx0XHRcdFx0XHRcdGxleycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdHtkYXlqcyhtZXNzYWdlLmNyZWF0ZWRBdCkuZm9ybWF0KFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnREQvTU0vWVlZWSDDoCBISDptbSdcclxuXHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnBvc31cclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPSd0ZXh0U2Vjb25kYXJ5Jz5cclxuXHRcdFx0XHRcdFx0XHRcdENvb3Jkb25uw6llcyA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2BtYWlsdG86JHttZXNzYWdlLm1haWx9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHttZXNzYWdlLm1haWx9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdC8gMFxyXG5cdFx0XHRcdFx0XHRcdFx0e2Ake21lc3NhZ2UudGVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5zdWJzdHJpbmcoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0MCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQxXHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9ICR7bWVzc2FnZS50ZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnN1YnN0cmluZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQxLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDNcclxuXHRcdFx0XHRcdFx0XHRcdFx0KX0gJHttZXNzYWdlLnRlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3Vic3RyaW5nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0NVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfSAke21lc3NhZ2UudGVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5zdWJzdHJpbmcoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0NSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ3XHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9ICR7bWVzc2FnZS50ZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnN1YnN0cmluZyg3LCA5KX1gfVxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MicgY29tcG9uZW50PSdwJz5cclxuXHRcdFx0XHRcdFx0XHRcdE1lc3NhZ2UgOlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHR7bWVzc2FnZS5tc2d9XHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHQ8L0NhcmRDb250ZW50PlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZENvbnRlbnQ+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnQ9J2Zvcm0nXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMucm9vdFBhcGVyfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxmb3JtXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290UGFwZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRub1ZhbGlkYXRlXHJcblx0XHRcdFx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT0nb2ZmJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRleHRhcmVhQXV0b3NpemVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0ncmVwb25zZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nUsOpcG9uc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cm93c01pbj17Nn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PERpdmlkZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuZGl2aWRlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcmllbnRhdGlvbj0ndmVydGljYWwnXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxJY29uQnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nc3VibWl0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yPSdwcmltYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29uQnV0dG9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J0Vudm95ZXInPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxTZW5kSWNvbiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdFx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHRcdFx0PC9DYXJkQ29udGVudD5cclxuXHRcdFx0XHRcdDwvQ2FyZD5cclxuXHRcdFx0XHQ8L0FkbWluPlxyXG5cdFx0XHQ8L0FkbWluSGVhZGVyPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG5cdGNvbnN0IHJlczEgPSBhd2FpdCBsaXN0TWVzc2FnZUJ5SWQoY29udGV4dC5wYXJhbXMuaWQpO1xyXG5cdGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCByZXMxO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0bWVzc2FnZSxcclxuXHRcdH0sXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihNZXNzYWdlSWQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9