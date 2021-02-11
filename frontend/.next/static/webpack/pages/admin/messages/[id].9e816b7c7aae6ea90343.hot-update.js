webpackHotUpdate_N_E("pages/admin/messages/[id]",{

/***/ "./node_modules/@material-ui/core/esm/FilledInput/FilledInput.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FilledInput/FilledInput.js ***!
  \***********************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");








var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  var backgroundColor = light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      backgroundColor: backgroundColor,
      borderTopLeftRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      '&:hover': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.13)' : 'rgba(255, 255, 255, 0.13)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: backgroundColor
        }
      },
      '&$focused': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.09)'
      },
      '&$disabled': {
        backgroundColor: light ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'
      }
    },

    /* Styles applied to the root element if color secondary. */
    colorSecondary: {
      '&$underline:after': {
        borderBottomColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the root element if `disableUnderline={false}`. */
    underline: {
      '&:after': {
        borderBottom: "2px solid ".concat(theme.palette.primary.main),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      },
      '&$error:after': {
        borderBottomColor: theme.palette.error.main,
        transform: 'scaleX(1)' // error is always underlined in red

      },
      '&:before': {
        borderBottom: "1px solid ".concat(bottomLineColor),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('border-bottom-color', {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&:hover:before': {
        borderBottom: "1px solid ".concat(theme.palette.text.primary)
      },
      '&$disabled:before': {
        borderBottomStyle: 'dotted'
      }
    },

    /* Pseudo-class applied to the root element if the component is focused. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {
      paddingLeft: 12
    },

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {
      paddingRight: 12
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: '27px 12px 10px',
      '&$marginDense': {
        paddingTop: 23,
        paddingBottom: 6
      }
    },

    /* Styles applied to the `input` element. */
    input: {
      padding: '27px 12px 10px',
      '&:-webkit-autofill': {
        WebkitBoxShadow: theme.palette.type === 'light' ? null : '0 0 0 100px #266798 inset',
        WebkitTextFillColor: theme.palette.type === 'light' ? null : '#fff',
        caretColor: theme.palette.type === 'light' ? null : '#fff',
        borderTopLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit'
      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 23,
      paddingBottom: 6
    },

    /* Styles applied to the `input` if in `<FormControl hiddenLabel />`. */
    inputHiddenLabel: {
      paddingTop: 18,
      paddingBottom: 19,
      '&$inputMarginDense': {
        paddingTop: 10,
        paddingBottom: 11
      }
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      padding: 0
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {
      paddingLeft: 0
    },

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {
      paddingRight: 0
    }
  };
};
var FilledInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function FilledInput(props, ref) {
  var disableUnderline = props.disableUnderline,
      classes = props.classes,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_InputBase__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    classes: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes, {
      root: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, !disableUnderline && classes.underline),
      underline: null
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other));
});
 true ? FilledInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the `input` element will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
} : undefined;
FilledInput.muiName = 'Input';
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiFilledInput'
})(FilledInput));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FilledInput/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FilledInput/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilledInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilledInput */ "./node_modules/@material-ui/core/esm/FilledInput/FilledInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FilledInput__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/FormControl.js ***!
  \***********************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _InputBase_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../InputBase/utils */ "./node_modules/@material-ui/core/esm/InputBase/utils.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/isMuiElement */ "./node_modules/@material-ui/core/esm/utils/isMuiElement.js");
/* harmony import */ var _FormControlContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormControlContext */ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js");










var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    // Reset fieldset default style.
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: 'top' // Fix alignment issue on Safari.

  },

  /* Styles applied to the root element if `margin="normal"`. */
  marginNormal: {
    marginTop: 16,
    marginBottom: 8
  },

  /* Styles applied to the root element if `margin="dense"`. */
  marginDense: {
    marginTop: 8,
    marginBottom: 4
  },

  /* Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {
    width: '100%'
  }
};
/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibility and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *
 *  - FormLabel
 *  - FormHelperText
 *  - Input
 *  - InputLabel
 *
 * You can find one composition example below and more going to [the demos](/components/text-fields/#components).
 *
 * ```jsx
 * <FormControl>
 *   <InputLabel htmlFor="my-input">Email address</InputLabel>
 *   <Input id="my-input" aria-describedby="my-helper-text" />
 *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
 * </FormControl>
 * ```
 *
 * ⚠️Only one input can be used within a FormControl.
 */

var FormControl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function FormControl(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      visuallyFocused = props.focused,
      _props$hiddenLabel = props.hiddenLabel,
      hiddenLabel = _props$hiddenLabel === void 0 ? false : _props$hiddenLabel,
      _props$margin = props.margin,
      margin = _props$margin === void 0 ? 'none' : _props$margin,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      size = props.size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "classes", "className", "color", "component", "disabled", "error", "fullWidth", "focused", "hiddenLabel", "margin", "required", "size", "variant"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](function () {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    var initialAdornedStart = false;

    if (children) {
      react__WEBPACK_IMPORTED_MODULE_2__["Children"].forEach(children, function (child) {
        if (!Object(_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__["default"])(child, ['Input', 'Select'])) {
          return;
        }

        var input = Object(_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__["default"])(child, ['Select']) ? child.props.input : child;

        if (input && Object(_InputBase_utils__WEBPACK_IMPORTED_MODULE_5__["isAdornedStart"])(input.props)) {
          initialAdornedStart = true;
        }
      });
    }

    return initialAdornedStart;
  }),
      adornedStart = _React$useState[0],
      setAdornedStart = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](function () {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    var initialFilled = false;

    if (children) {
      react__WEBPACK_IMPORTED_MODULE_2__["Children"].forEach(children, function (child) {
        if (!Object(_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__["default"])(child, ['Input', 'Select'])) {
          return;
        }

        if (Object(_InputBase_utils__WEBPACK_IMPORTED_MODULE_5__["isFilled"])(child.props, true)) {
          initialFilled = true;
        }
      });
    }

    return initialFilled;
  }),
      filled = _React$useState2[0],
      setFilled = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      _focused = _React$useState3[0],
      setFocused = _React$useState3[1];

  var focused = visuallyFocused !== undefined ? visuallyFocused : _focused;

  if (disabled && focused) {
    setFocused(false);
  }

  var registerEffect;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var registeredInput = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](false);

    registerEffect = function registerEffect() {
      if (registeredInput.current) {
        console.error(['Material-UI: There are multiple InputBase components inside a FormControl.', 'This is not supported. It might cause infinite rendering loops.', 'Only use one InputBase.'].join('\n'));
      }

      registeredInput.current = true;
      return function () {
        registeredInput.current = false;
      };
    };
  }

  var onFilled = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    setFilled(true);
  }, []);
  var onEmpty = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    setFilled(false);
  }, []);
  var childContext = {
    adornedStart: adornedStart,
    setAdornedStart: setAdornedStart,
    color: color,
    disabled: disabled,
    error: error,
    filled: filled,
    focused: focused,
    fullWidth: fullWidth,
    hiddenLabel: hiddenLabel,
    margin: (size === 'small' ? 'dense' : undefined) || margin,
    onBlur: function onBlur() {
      setFocused(false);
    },
    onEmpty: onEmpty,
    onFilled: onFilled,
    onFocus: function onFocus() {
      setFocused(true);
    },
    registerEffect: registerEffect,
    required: required,
    variant: variant
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FormControlContext__WEBPACK_IMPORTED_MODULE_9__["default"].Provider, {
    value: childContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, margin !== 'none' && classes["margin".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__["default"])(margin))], fullWidth && classes.fullWidth),
    ref: ref
  }, other), children));
});
 true ? FormControl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The contents of the form control.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the component will be displayed in focused state.
   */
  focused: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the component will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label will be hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   */
  hiddenLabel: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense', 'none', 'normal']),

  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The size of the text field.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['medium', 'small']),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['filled', 'outlined', 'standard'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiFormControl'
})(FormControl));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js ***!
  \******************************************************************************/
/*! exports provided: useFormControl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormControl", function() { return useFormControl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

var FormControlContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]();

if (true) {
  FormControlContext.displayName = 'FormControlContext';
}

function useFormControl() {
  return react__WEBPACK_IMPORTED_MODULE_0__["useContext"](FormControlContext);
}
/* harmony default export */ __webpack_exports__["default"] = (FormControlContext);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/formControlState.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formControlState; });
function formControlState(_ref) {
  var props = _ref.props,
      states = _ref.states,
      muiFormControl = _ref.muiFormControl;
  return states.reduce(function (acc, state) {
    acc[state] = props[state];

    if (muiFormControl) {
      if (typeof props[state] === 'undefined') {
        acc[state] = muiFormControl[state];
      }
    }

    return acc;
  }, {});
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/index.js ***!
  \*****************************************************************/
/*! exports provided: default, useFormControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FormControl__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _useFormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFormControl", function() { return _useFormControl__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/useFormControl.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useFormControl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormControlContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormControlContext */ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js");


function useFormControl() {
  return react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_FormControlContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js ***!
  \*****************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      color: theme.palette.text.secondary
    }, theme.typography.caption, {
      textAlign: 'left',
      marginTop: 3,
      margin: 0,
      '&$disabled': {
        color: theme.palette.text.disabled
      },
      '&$error': {
        color: theme.palette.error.main
      }
    }),

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      marginTop: 4
    },

    /* Styles applied to the root element if `variant="filled"` or `variant="outlined"`. */
    contained: {
      marginLeft: 14,
      marginRight: 14
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `filled={true}`. */
    filled: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {}
  };
};
var FormHelperText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function FormHelperText(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'p' : _props$component,
      disabled = props.disabled,
      error = props.error,
      filled = props.filled,
      focused = props.focused,
      margin = props.margin,
      required = props.required,
      variant = props.variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children", "classes", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"]);

  var muiFormControl = Object(_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_5__["default"])({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant', 'margin', 'disabled', 'error', 'filled', 'focused', 'required']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, (fcs.variant === 'filled' || fcs.variant === 'outlined') && classes.contained, className, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required, fcs.margin === 'dense' && classes.marginDense),
    ref: ref
  }, other), children === ' ' ?
  /*#__PURE__*/
  // eslint-disable-next-line react/no-danger
  react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    dangerouslySetInnerHTML: {
      __html: '&#8203;'
    }
  }) : children);
});
 true ? FormHelperText.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense']),

  /**
   * If `true`, the helper text should use required classes key.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['filled', 'outlined', 'standard'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiFormHelperText'
})(FormHelperText));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormHelperText/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormHelperText/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormHelperText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FormHelperText__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormLabel/FormLabel.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormLabel/FormLabel.js ***!
  \*******************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      color: theme.palette.text.secondary
    }, theme.typography.body1, {
      lineHeight: 1,
      padding: 0,
      '&$focused': {
        color: theme.palette.primary.main
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      },
      '&$error': {
        color: theme.palette.error.main
      }
    }),

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {
      '&$focused': {
        color: theme.palette.secondary.main
      }
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `filled={true}`. */
    filled: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {},

    /* Styles applied to the asterisk element. */
    asterisk: {
      '&$error': {
        color: theme.palette.error.main
      }
    }
  };
};
var FormLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function FormLabel(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      color = props.color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'label' : _props$component,
      disabled = props.disabled,
      error = props.error,
      filled = props.filled,
      focused = props.focused,
      required = props.required,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children", "classes", "className", "color", "component", "disabled", "error", "filled", "focused", "required"]);

  var muiFormControl = Object(_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_5__["default"])({
    props: props,
    muiFormControl: muiFormControl,
    states: ['color', 'required', 'focused', 'disabled', 'error', 'filled']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__["default"])(fcs.color || 'primary'))], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required),
    ref: ref
  }, other), children, fcs.required && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    "aria-hidden": true,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.asterisk, fcs.error && classes.error)
  }, "\u2009", '*'));
});
 true ? FormLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label should use filled classes key.
   */
  filled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiFormLabel'
})(FormLabel));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormLabel/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormLabel/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/FormLabel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FormLabel__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Grow/Grow.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Grow/Grow.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transitions/utils */ "./node_modules/@material-ui/core/esm/transitions/utils.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");










function getScale(value) {
  return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
}

var styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: 'none'
  }
};
/**
 * The Grow transition is used by the [Tooltip](/components/tooltips/) and
 * [Popover](/components/popover/) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Grow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Grow(props, ref) {
  var children = props.children,
      _props$disableStrictM = props.disableStrictModeCompat,
      disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      style = props.style,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? 'auto' : _props$timeout,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? react_transition_group__WEBPACK_IMPORTED_MODULE_5__["Transition"] : _props$TransitionComp,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);

  var timer = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  var autoTimeout = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  var theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  var foreignRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__["default"])(children.ref, ref);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__["default"])(enableStrictModeCompat ? nodeRef : undefined, foreignRef);

  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing],
            _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
            node = _ref2[0],
            isAppearing = _ref2[1]; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.


        if (isAppearing === undefined) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };

  var handleEntering = normalizedTransitionCallback(onEntering);
  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_7__["reflow"])(node); // So the animation always start from the start.

    var _getTransitionProps = Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_7__["getTransitionProps"])({
      style: style,
      timeout: timeout
    }, {
      mode: 'enter'
    }),
        transitionDuration = _getTransitionProps.duration,
        delay = _getTransitionProps.delay;

    var duration;

    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [theme.transitions.create('opacity', {
      duration: duration,
      delay: delay
    }), theme.transitions.create('transform', {
      duration: duration * 0.666,
      delay: delay
    })].join(',');

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function (node) {
    var _getTransitionProps2 = Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_7__["getTransitionProps"])({
      style: style,
      timeout: timeout
    }, {
      mode: 'exit'
    }),
        transitionDuration = _getTransitionProps2.duration,
        delay = _getTransitionProps2.delay;

    var duration;

    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [theme.transitions.create('opacity', {
      duration: duration,
      delay: delay
    }), theme.transitions.create('transform', {
      duration: duration * 0.666,
      delay: delay || duration * 0.333
    })].join(',');
    node.style.opacity = '0';
    node.style.transform = getScale(0.75);

    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);

  var addEndListener = function addEndListener(nodeOrNext, maybeNext) {
    var next = enableStrictModeCompat ? nodeOrNext : maybeNext;

    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTimeout.current || 0);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    return function () {
      clearTimeout(timer.current);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](TransitionComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    appear: true,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : undefined,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: addEndListener,
    timeout: timeout === 'auto' ? null : timeout
  }, other), function (state, childProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"](children, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        opacity: 0,
        transform: getScale(0.75),
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, styles[state], style, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
 true ? Grow.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A single child content element.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.element,

  /**
   * Enable this prop if you encounter 'Function components cannot be given refs',
   * use `unstable_createStrictModeTheme`,
   * and can't forward the ref in the child component.
   */
  disableStrictModeCompat: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['auto']), prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
  })])
} : undefined;
Grow.muiSupportAuto = true;
/* harmony default export */ __webpack_exports__["default"] = (Grow);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Grow/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Grow/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grow */ "./node_modules/@material-ui/core/esm/Grow/Grow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Grow__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Input/Input.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Input/Input.js ***!
  \***********************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");








var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative'
    },

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      'label + &': {
        marginTop: 16
      }
    },

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if color secondary. */
    colorSecondary: {
      '&$underline:after': {
        borderBottomColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the root element if `disableUnderline={false}`. */
    underline: {
      '&:after': {
        borderBottom: "2px solid ".concat(theme.palette.primary.main),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      },
      '&$error:after': {
        borderBottomColor: theme.palette.error.main,
        transform: 'scaleX(1)' // error is always underlined in red

      },
      '&:before': {
        borderBottom: "1px solid ".concat(bottomLineColor),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('border-bottom-color', {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&:hover:not($disabled):before': {
        borderBottom: "2px solid ".concat(theme.palette.text.primary),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          borderBottom: "1px solid ".concat(bottomLineColor)
        }
      },
      '&$disabled:before': {
        borderBottomStyle: 'dotted'
      }
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {},

    /* Styles applied to the `input` element. */
    input: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {},

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {},

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {}
  };
};
var Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Input(props, ref) {
  var disableUnderline = props.disableUnderline,
      classes = props.classes,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_InputBase__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    classes: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes, {
      root: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, !disableUnderline && classes.underline),
      underline: null
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other));
});
 true ? Input.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the `input` element will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
} : undefined;
Input.muiName = 'Input';
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiInput'
})(Input));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Input/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Input/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./node_modules/@material-ui/core/esm/Input/Input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Input__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputBase/InputBase.js ***!
  \*******************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormControl/FormControlContext */ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _TextareaAutosize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../TextareaAutosize */ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "./node_modules/@material-ui/core/esm/InputBase/utils.js");




/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */











var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var placeholder = {
    color: 'currentColor',
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter
    })
  };
  var placeholderHidden = {
    opacity: '0 !important'
  };
  var placeholderVisible = {
    opacity: light ? 0.42 : 0.5
  };
  return {
    '@global': {
      '@keyframes mui-auto-fill': {},
      '@keyframes mui-auto-fill-cancel': {}
    },

    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.typography.body1, {
      color: theme.palette.text.primary,
      lineHeight: '1.1876em',
      // Reset (19px), match the native input line-height
      boxSizing: 'border-box',
      // Prevent padding issue with fullWidth.
      position: 'relative',
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
      '&$disabled': {
        color: theme.palette.text.disabled,
        cursor: 'default'
      }
    }),

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {},

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {},

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      '&$marginDense': {
        paddingTop: 4 - 1
      }
    },

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the `input` element. */
    input: {
      font: 'inherit',
      letterSpacing: 'inherit',
      color: 'currentColor',
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      border: 0,
      boxSizing: 'content-box',
      background: 'none',
      height: '1.1876em',
      // Reset (19px), match the native input line-height
      margin: 0,
      // Reset for Safari
      WebkitTapHighlightColor: 'transparent',
      display: 'block',
      // Make the flex item shrink with Firefox
      minWidth: 0,
      width: '100%',
      // Fix IE 11 width issue
      animationName: 'mui-auto-fill-cancel',
      animationDuration: '10ms',
      '&::-webkit-input-placeholder': placeholder,
      '&::-moz-placeholder': placeholder,
      // Firefox 19+
      '&:-ms-input-placeholder': placeholder,
      // IE 11
      '&::-ms-input-placeholder': placeholder,
      // Edge
      '&:focus': {
        outline: 0
      },
      // Reset Firefox invalid required input style
      '&:invalid': {
        boxShadow: 'none'
      },
      '&::-webkit-search-decoration': {
        // Remove the padding when type=search.
        '-webkit-appearance': 'none'
      },
      // Show and hide the placeholder logic
      'label[data-shrink=false] + $formControl &': {
        '&::-webkit-input-placeholder': placeholderHidden,
        '&::-moz-placeholder': placeholderHidden,
        // Firefox 19+
        '&:-ms-input-placeholder': placeholderHidden,
        // IE 11
        '&::-ms-input-placeholder': placeholderHidden,
        // Edge
        '&:focus::-webkit-input-placeholder': placeholderVisible,
        '&:focus::-moz-placeholder': placeholderVisible,
        // Firefox 19+
        '&:focus:-ms-input-placeholder': placeholderVisible,
        // IE 11
        '&:focus::-ms-input-placeholder': placeholderVisible // Edge

      },
      '&$disabled': {
        opacity: 1 // Reset iOS opacity

      },
      '&:-webkit-autofill': {
        animationDuration: '5000s',
        animationName: 'mui-auto-fill'
      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 4 - 1
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      height: 'auto',
      resize: 'none',
      padding: 0
    },

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {
      // Improve type search style.
      '-moz-appearance': 'textfield',
      '-webkit-appearance': 'textfield'
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {},

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {},

    /* Styles applied to the `input` element if `hiddenLabel={true}`. */
    inputHiddenLabel: {}
  };
};
var useEnhancedEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_3__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_3__["useLayoutEffect"];
/**
 * `InputBase` contains as few styles as possible.
 * It aims to be a simple building block for creating an input.
 * It contains a load of style reset and some state logic.
 */

var InputBase = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function InputBase(props, ref) {
  var ariaDescribedby = props['aria-describedby'],
      autoComplete = props.autoComplete,
      autoFocus = props.autoFocus,
      classes = props.classes,
      className = props.className,
      color = props.color,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      endAdornment = props.endAdornment,
      error = props.error,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      id = props.id,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$inputProps = props.inputProps,
      inputPropsProp = _props$inputProps === void 0 ? {} : _props$inputProps,
      inputRefProp = props.inputRef,
      margin = props.margin,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      placeholder = props.placeholder,
      readOnly = props.readOnly,
      renderSuffix = props.renderSuffix,
      rows = props.rows,
      rowsMax = props.rowsMax,
      rowsMin = props.rowsMin,
      startAdornment = props.startAdornment,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      valueProp = props.value,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["aria-describedby", "autoComplete", "autoFocus", "classes", "className", "color", "defaultValue", "disabled", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "rowsMax", "rowsMin", "startAdornment", "type", "value"]);

  var value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](value != null),
      isControlled = _React$useRef.current;

  var inputRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  var handleInputRefWarning = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function (instance) {
    if (true) {
      if (instance && instance.nodeName !== 'INPUT' && !instance.focus) {
        console.error(['Material-UI: You have provided a `inputComponent` to the input component', 'that does not correctly handle the `inputRef` prop.', 'Make sure the `inputRef` prop is called with a HTMLInputElement.'].join('\n'));
      }
    }
  }, []);
  var handleInputPropsRefProp = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__["default"])(inputPropsProp.ref, handleInputRefWarning);
  var handleInputRefProp = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__["default"])(inputRefProp, handleInputPropsRefProp);
  var handleInputRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__["default"])(inputRef, handleInputRefProp);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"](false),
      focused = _React$useState[0],
      setFocused = _React$useState[1];

  var muiFormControl = Object(_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_7__["useFormControl"])();

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
      if (muiFormControl) {
        return muiFormControl.registerEffect();
      }

      return undefined;
    }, [muiFormControl]);
  }

  var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props: props,
    muiFormControl: muiFormControl,
    states: ['color', 'disabled', 'error', 'hiddenLabel', 'margin', 'required', 'filled']
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused; // The blur won't fire when the disabled state is set on a focused input.
  // We need to book keep the focused state manually.

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);

      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  var onFilled = muiFormControl && muiFormControl.onFilled;
  var onEmpty = muiFormControl && muiFormControl.onEmpty;
  var checkDirty = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function (obj) {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_12__["isFilled"])(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  useEnhancedEffect(function () {
    if (isControlled) {
      checkDirty({
        value: value
      });
    }
  }, [value, checkDirty, isControlled]);

  var handleFocus = function handleFocus(event) {
    // Fix a bug with IE 11 where the focus/blur events are triggered
    // while the input is disabled.
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }

    if (onFocus) {
      onFocus(event);
    }

    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };

  var handleBlur = function handleBlur(event) {
    if (onBlur) {
      onBlur(event);
    }

    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };

  var handleChange = function handleChange(event) {
    if (!isControlled) {
      var element = event.target || inputRef.current;

      if (element == null) {
        throw new Error( true ? "Material-UI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://material-ui.com/r/input-component-ref-interface for more info." : undefined);
      }

      checkDirty({
        value: element.value
      });
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (inputPropsProp.onChange) {
      inputPropsProp.onChange.apply(inputPropsProp, [event].concat(args));
    } // Perform in the willUpdate


    if (onChange) {
      onChange.apply(void 0, [event].concat(args));
    }
  }; // Check the input state on mount, in case it was filled by the user
  // or auto filled by the browser before the hydration (for SSR).


  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    checkDirty(inputRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  var handleClick = function handleClick(event) {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }

    if (onClick) {
      onClick(event);
    }
  };

  var InputComponent = inputComponent;

  var inputProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, inputPropsProp, {
    ref: handleInputRef
  });

  if (typeof InputComponent !== 'string') {
    inputProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      // Rename ref to inputRef as we don't know the
      // provided `inputComponent` structure.
      inputRef: handleInputRef,
      type: type
    }, inputProps, {
      ref: null
    });
  } else if (multiline) {
    if (rows && !rowsMax && !rowsMin) {
      InputComponent = 'textarea';
    } else {
      inputProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        rows: rows,
        rowsMax: rowsMax
      }, inputProps);
      InputComponent = _TextareaAutosize__WEBPACK_IMPORTED_MODULE_11__["default"];
    }
  } else {
    inputProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      type: type
    }, inputProps);
  }

  var handleAutoFill = function handleAutoFill(event) {
    // Provide a fake value as Chrome might not let you access it for security reasons.
    checkDirty(event.animationName === 'mui-auto-fill-cancel' ? inputRef.current : {
      value: 'x'
    });
  };

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_9__["default"])(fcs.color || 'primary'))], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fullWidth && classes.fullWidth, fcs.focused && classes.focused, muiFormControl && classes.formControl, multiline && classes.multiline, startAdornment && classes.adornedStart, endAdornment && classes.adornedEnd, fcs.margin === 'dense' && classes.marginDense),
    onClick: handleClick,
    ref: ref
  }, other), startAdornment, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
    value: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](InputComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "aria-invalid": fcs.error,
    "aria-describedby": ariaDescribedby,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    disabled: fcs.disabled,
    id: id,
    onAnimationStart: handleAutoFill,
    name: name,
    placeholder: placeholder,
    readOnly: readOnly,
    required: fcs.required,
    rows: rows,
    value: value,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp
  }, inputProps, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.input, inputPropsProp.className, fcs.disabled && classes.disabled, multiline && classes.inputMultiline, fcs.hiddenLabel && classes.inputHiddenLabel, startAdornment && classes.inputAdornedStart, endAdornment && classes.inputAdornedEnd, type === 'search' && classes.inputTypeSearch, fcs.margin === 'dense' && classes.inputMarginDense),
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus
  }))), endAdornment, renderSuffix ? renderSuffix(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, fcs, {
    startAdornment: startAdornment
  })) : null);
});
 true ? InputBase.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  'aria-describedby': prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__["refType"],

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Callback fired when the input is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onKeyUp: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  renderSuffix: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * If `true`, the `input` element will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),

  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  rowsMin: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiInputBase'
})(InputBase));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputBase/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputBase/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputBase */ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _InputBase__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputBase/utils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputBase/utils.js ***!
  \***************************************************************/
/*! exports provided: hasValue, isFilled, isAdornedStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasValue", function() { return hasValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFilled", function() { return isFilled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAdornedStart", function() { return isAdornedStart; });
// Supports determination of isControlled().
// Controlled input accepts its current value as a prop.
//
// @see https://facebook.github.io/react/docs/forms.html#controlled-components
// @param value
// @returns {boolean} true if string (including '') or number (including zero)
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
} // Determine if field is empty or filled.
// Response determines if label is presented above field or as placeholder.
//
// @param obj
// @param SSR
// @returns {boolean} False when not present or empty string.
//                    True when any number or string with length.

function isFilled(obj) {
  var SSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
} // Determine if an Input is adorned on start.
// It's corresponding to the left with LTR.
//
// @param obj
// @returns {boolean} False when no adornments.
//                    True when adorned at the start.

function isAdornedStart(obj) {
  return obj.startAdornment;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js ***!
  \*********************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _FormLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/index.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'block',
      transformOrigin: 'top left'
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {},

    /* Pseudo-class applied to the asterisk element. */
    asterisk: {},

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      position: 'absolute',
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: 'translate(0, 24px) scale(1)'
    },

    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      // Compensation for the `Input.inputDense` style.
      transform: 'translate(0, 21px) scale(1)'
    },

    /* Styles applied to the `input` element if `shrink={true}`. */
    shrink: {
      transform: 'translate(0, 1.5px) scale(0.75)',
      transformOrigin: 'top left'
    },

    /* Styles applied to the `input` element if `disableAnimation={false}`. */
    animated: {
      transition: theme.transitions.create(['color', 'transform'], {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      })
    },

    /* Styles applied to the root element if `variant="filled"`. */
    filled: {
      // Chrome's autofill feature gives the input field a yellow background.
      // Since the input field is behind the label in the HTML tree,
      // the input field is drawn last and hides the label with an opaque background color.
      // zIndex: 1 will raise the label above opaque background-colors of input.
      zIndex: 1,
      pointerEvents: 'none',
      transform: 'translate(12px, 20px) scale(1)',
      '&$marginDense': {
        transform: 'translate(12px, 17px) scale(1)'
      },
      '&$shrink': {
        transform: 'translate(12px, 10px) scale(0.75)',
        '&$marginDense': {
          transform: 'translate(12px, 7px) scale(0.75)'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      // see comment above on filled.zIndex
      zIndex: 1,
      pointerEvents: 'none',
      transform: 'translate(14px, 20px) scale(1)',
      '&$marginDense': {
        transform: 'translate(14px, 12px) scale(1)'
      },
      '&$shrink': {
        transform: 'translate(14px, -6px) scale(0.75)'
      }
    }
  };
};
var InputLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function InputLabel(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$disableAnimati = props.disableAnimation,
      disableAnimation = _props$disableAnimati === void 0 ? false : _props$disableAnimati,
      margin = props.margin,
      shrinkProp = props.shrink,
      variant = props.variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "disableAnimation", "margin", "shrink", "variant"]);

  var muiFormControl = Object(_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var shrink = shrinkProp;

  if (typeof shrink === 'undefined' && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }

  var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_5__["default"])({
    props: props,
    muiFormControl: muiFormControl,
    states: ['margin', 'variant']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FormLabel__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "data-shrink": shrink,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, muiFormControl && classes.formControl, !disableAnimation && classes.animated, shrink && classes.shrink, fcs.margin === 'dense' && classes.marginDense, {
      'filled': classes.filled,
      'outlined': classes.outlined
    }[fcs.variant]),
    classes: {
      focused: classes.focused,
      disabled: classes.disabled,
      error: classes.error,
      required: classes.required,
      asterisk: classes.asterisk
    },
    ref: ref
  }, other));
});
 true ? InputLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The contents of the `InputLabel`.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']),

  /**
   * If `true`, the transition animation is disabled.
   */
  disableAnimation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, apply disabled class.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input of this label is focused.
   */
  focused: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense']),

  /**
   * if `true`, the label will indicate that the input is required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label is shrunk.
   */
  shrink: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['filled', 'outlined', 'standard'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiInputLabel'
})(InputLabel));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputLabel/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputLabel/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _InputLabel__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/List/List.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/List/List.js ***!
  \*********************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ListContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ListContext */ "./node_modules/@material-ui/core/esm/List/ListContext.js");







var styles = {
  /* Styles applied to the root element. */
  root: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative'
  },

  /* Styles applied to the root element if `disablePadding={false}`. */
  padding: {
    paddingTop: 8,
    paddingBottom: 8
  },

  /* Styles applied to the root element if dense. */
  dense: {},

  /* Styles applied to the root element if a `subheader` is provided. */
  subheader: {
    paddingTop: 0
  }
};
var List = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function List(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'ul' : _props$component,
      _props$dense = props.dense,
      dense = _props$dense === void 0 ? false : _props$dense,
      _props$disablePadding = props.disablePadding,
      disablePadding = _props$disablePadding === void 0 ? false : _props$disablePadding,
      subheader = props.subheader,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]);

  var context = react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](function () {
    return {
      dense: dense
    };
  }, [dense]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ListContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
    value: context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, dense && classes.dense, !disablePadding && classes.padding, subheader && classes.subheader),
    ref: ref
  }, other), subheader, children));
});
 true ? List.propTypes = {
  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   */
  dense: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, vertical padding will be removed from the list.
   */
  disablePadding: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiList'
})(List));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/List/ListContext.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/List/ListContext.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

var ListContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({});

if (true) {
  ListContext.displayName = 'ListContext';
}

/* harmony default export */ __webpack_exports__["default"] = (ListContext);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/List/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/List/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "./node_modules/@material-ui/core/esm/List/List.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _List__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Menu/Menu.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Menu/Menu.js ***!
  \*********************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../MenuList */ "./node_modules/@material-ui/core/esm/MenuList/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");













var RTL_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};
var LTR_ORIGIN = {
  vertical: 'top',
  horizontal: 'left'
};
var styles = {
  /* Styles applied to the `Paper` component. */
  paper: {
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tapable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: 'calc(100% - 96px)',
    // Add iOS momentum scrolling.
    WebkitOverflowScrolling: 'touch'
  },

  /* Styles applied to the `List` component via `MenuList`. */
  list: {
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  }
};
var Menu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Menu(props, ref) {
  var _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus,
      children = props.children,
      classes = props.classes,
      _props$disableAutoFoc = props.disableAutoFocusItem,
      disableAutoFocusItem = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$MenuListProps = props.MenuListProps,
      MenuListProps = _props$MenuListProps === void 0 ? {} : _props$MenuListProps,
      onClose = props.onClose,
      onEntering = props.onEntering,
      open = props.open,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      PopoverClasses = props.PopoverClasses,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'selectedMenu' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["autoFocus", "children", "classes", "disableAutoFocusItem", "MenuListProps", "onClose", "onEntering", "open", "PaperProps", "PopoverClasses", "transitionDuration", "variant"]);

  var theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_12__["default"])();
  var autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  var menuListActionsRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  var contentAnchorRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);

  var getContentAnchorEl = function getContentAnchorEl() {
    return contentAnchorRef.current;
  };

  var handleEntering = function handleEntering(element, isAppearing) {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
    }

    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };

  var handleListKeyDown = function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();

      if (onClose) {
        onClose(event, 'tabKeyDown');
      }
    }
  };
  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */


  var activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
  // to check if there is a `selected` item. We're looking for the last `selected`
  // item and use the first valid item as a fallback

  react__WEBPACK_IMPORTED_MODULE_2__["Children"].map(children, function (child, index) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](child)) {
      return;
    }

    if (true) {
      if (Object(react_is__WEBPACK_IMPORTED_MODULE_3__["isFragment"])(child)) {
        console.error(["Material-UI: The Menu component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    if (!child.props.disabled) {
      if (variant !== "menu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  var items = react__WEBPACK_IMPORTED_MODULE_2__["Children"].map(children, function (child, index) {
    if (index === activeItemIndex) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](child, {
        ref: function ref(instance) {
          // #StrictMode ready
          contentAnchorRef.current = react_dom__WEBPACK_IMPORTED_MODULE_10__["findDOMNode"](instance);
          Object(_utils_setRef__WEBPACK_IMPORTED_MODULE_11__["default"])(child.ref, instance);
        }
      });
    }

    return child;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Popover__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    getContentAnchorEl: getContentAnchorEl,
    classes: PopoverClasses,
    onClose: onClose,
    onEntering: handleEntering,
    anchorOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
    transformOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
    PaperProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, PaperProps, {
      classes: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, PaperProps.classes, {
        root: classes.paper
      })
    }),
    open: open,
    ref: ref,
    transitionDuration: transitionDuration
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_MenuList__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onKeyDown: handleListKeyDown,
    actions: menuListActionsRef,
    autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
    autoFocusItem: autoFocusItem,
    variant: variant
  }, MenuListProps, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.list, MenuListProps.className)
  }), items));
});
 true ? Menu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A HTML element, or a function that returns it.
   * It's used to set the position of the menu.
   */
  anchorEl: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a
  /* @typescript-to-proptypes-ignore */
  .oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__["HTMLElementType"], prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]),

  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   */
  disableAutoFocusItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Props applied to the [`MenuList`](/api/menu-list/) element.
   */
  MenuListProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired before the Menu enters.
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the Menu has entered.
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the Menu is entering.
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired before the Menu exits.
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the Menu has exited.
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the Menu is exiting.
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * If `true`, the menu is visible.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,

  /**
   * @ignore
   */
  PaperProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * `classes` prop applied to the [`Popover`](/api/popover/) element.
   */
  PopoverClasses: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * The length of the transition in `ms`, or 'auto'
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['auto']), prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
  })]),

  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['menu', 'selectedMenu'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiMenu'
})(Menu));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/MenuList/MenuList.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/MenuList/MenuList.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getScrollbarSize */ "./node_modules/@material-ui/core/esm/utils/getScrollbarSize.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");











function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }

  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }

  return disableListWrap ? null : list.firstChild;
}

function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }

  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }

  return disableListWrap ? null : list.lastChild;
}

function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === undefined) {
    return true;
  }

  var text = nextFocus.innerText;

  if (text === undefined) {
    // jsdom doesn't support innerText
    text = nextFocus.textContent;
  }

  text = text.trim().toLowerCase();

  if (text.length === 0) {
    return false;
  }

  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }

  return text.indexOf(textCriteria.keys.join('')) === 0;
}

function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  var wrappedOnce = false;
  var nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);

  while (nextFocus) {
    // Prevent infinite loop.
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }

      wrappedOnce = true;
    } // Same logic as useAutocomplete.js


    var nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';

    if (!nextFocus.hasAttribute('tabindex') || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      // Move to the next element.
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return;
    }
  }
}

var useEnhancedEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"];
/**
 * A permanently displayed menu following https://www.w3.org/TR/wai-aria-practices/#menubutton.
 * It's exposed to help customization of the [`Menu`](/api/menu/) component. If you
 * use it separately you need to move focus into the component manually. Once
 * the focus is placed inside the component it is fully keyboard accessible.
 */

var MenuList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function MenuList(props, ref) {
  var actions = props.actions,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      _props$autoFocusItem = props.autoFocusItem,
      autoFocusItem = _props$autoFocusItem === void 0 ? false : _props$autoFocusItem,
      children = props.children,
      className = props.className,
      _props$disabledItemsF = props.disabledItemsFocusable,
      disabledItemsFocusable = _props$disabledItemsF === void 0 ? false : _props$disabledItemsF,
      _props$disableListWra = props.disableListWrap,
      disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra,
      onKeyDown = props.onKeyDown,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'selectedMenu' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"]);

  var listRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  var textCriteriaRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"]({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  useEnhancedEffect(function () {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"](actions, function () {
    return {
      adjustStyleForScrollbar: function adjustStyleForScrollbar(containerElement, theme) {
        // Let's ignore that piece of logic if users are already overriding the width
        // of the menu.
        var noExplicitWidth = !listRef.current.style.width;

        if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
          var scrollbarSize = "".concat(Object(_utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_8__["default"])(true), "px");
          listRef.current.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = scrollbarSize;
          listRef.current.style.width = "calc(100% + ".concat(scrollbarSize, ")");
        }

        return listRef.current;
      }
    };
  }, []);

  var handleKeyDown = function handleKeyDown(event) {
    var list = listRef.current;
    var key = event.key;
    /**
     * @type {Element} - will always be defined since we are in a keydown handler
     * attached to an element. A keydown event is either dispatched to the activeElement
     * or document.body or document.documentElement. Only the first case will
     * trigger this specific handler.
     */

    var currentFocus = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_6__["default"])(list).activeElement;

    if (key === 'ArrowDown') {
      // Prevent scroll of the page
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === 'ArrowUp') {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key === 'Home') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === 'End') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key.length === 1) {
      var criteria = textCriteriaRef.current;
      var lowerKey = key.toLowerCase();
      var currTime = performance.now();

      if (criteria.keys.length > 0) {
        // Reset
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }

      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      var keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);

      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (instance) {
    // #StrictMode ready
    listRef.current = react_dom__WEBPACK_IMPORTED_MODULE_5__["findDOMNode"](instance);
  }, []);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_9__["default"])(handleOwnRef, ref);
  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */

  var activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
  // to check if there is a `selected` item. We're looking for the last `selected`
  // item and use the first valid item as a fallback

  react__WEBPACK_IMPORTED_MODULE_2__["Children"].forEach(children, function (child, index) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](child)) {
      return;
    }

    if (true) {
      if (Object(react_is__WEBPACK_IMPORTED_MODULE_3__["isFragment"])(child)) {
        console.error(["Material-UI: The Menu component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    if (!child.props.disabled) {
      if (variant === 'selectedMenu' && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  var items = react__WEBPACK_IMPORTED_MODULE_2__["Children"].map(children, function (child, index) {
    if (index === activeItemIndex) {
      var newChildProps = {};

      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }

      if (child.props.tabIndex === undefined && variant === 'selectedMenu') {
        newChildProps.tabIndex = 0;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](child, newChildProps);
    }

    return child;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_List__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    role: "menu",
    ref: handleRef,
    className: className,
    onKeyDown: handleKeyDown,
    tabIndex: autoFocus ? 0 : -1
  }, other), items);
});
 true ? MenuList.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   */
  autoFocusItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * If `true`, will allow focus on disabled items.
   */
  disabledItemsFocusable: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the menu items will not wrap focus.
   */
  disableListWrap: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['menu', 'selectedMenu'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (MenuList);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/MenuList/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/MenuList/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuList */ "./node_modules/@material-ui/core/esm/MenuList/MenuList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MenuList__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Modal/Modal.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Modal/Modal.js ***!
  \***********************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Portal */ "./node_modules/@material-ui/core/esm/Portal/index.js");
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/createChainedFunction */ "./node_modules/@material-ui/core/esm/utils/createChainedFunction.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony import */ var _styles_zIndex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/zIndex */ "./node_modules/@material-ui/core/esm/styles/zIndex.js");
/* harmony import */ var _ModalManager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ModalManager */ "./node_modules/@material-ui/core/esm/Modal/ModalManager.js");
/* harmony import */ var _Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Unstable_TrapFocus */ "./node_modules/@material-ui/core/esm/Unstable_TrapFocus/index.js");
/* harmony import */ var _SimpleBackdrop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SimpleBackdrop */ "./node_modules/@material-ui/core/esm/Modal/SimpleBackdrop.js");

















function getContainer(container) {
  container = typeof container === 'function' ? container() : container;
  return react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"](container);
}

function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
} // A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.


var defaultManager = new _ModalManager__WEBPACK_IMPORTED_MODULE_13__["default"]();
var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0
    },

    /* Styles applied to the root element if the `Modal` has exited. */
    hidden: {
      visibility: 'hidden'
    }
  };
};
/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/api/dialog/)
 * - [Drawer](/api/drawer/)
 * - [Menu](/api/menu/)
 * - [Popover](/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */

var Modal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Modal(inProps, ref) {
  var theme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  var props = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["getThemeProps"])({
    name: 'MuiModal',
    props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, inProps),
    theme: theme
  });

  var _props$BackdropCompon = props.BackdropComponent,
      BackdropComponent = _props$BackdropCompon === void 0 ? _SimpleBackdrop__WEBPACK_IMPORTED_MODULE_15__["default"] : _props$BackdropCompon,
      BackdropProps = props.BackdropProps,
      children = props.children,
      _props$closeAfterTran = props.closeAfterTransition,
      closeAfterTransition = _props$closeAfterTran === void 0 ? false : _props$closeAfterTran,
      container = props.container,
      _props$disableAutoFoc = props.disableAutoFocus,
      disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$disableBackdro = props.disableBackdropClick,
      disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro,
      _props$disableEnforce = props.disableEnforceFocus,
      disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
      _props$disableEscapeK = props.disableEscapeKeyDown,
      disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      _props$disableRestore = props.disableRestoreFocus,
      disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
      _props$disableScrollL = props.disableScrollLock,
      disableScrollLock = _props$disableScrollL === void 0 ? false : _props$disableScrollL,
      _props$hideBackdrop = props.hideBackdrop,
      hideBackdrop = _props$hideBackdrop === void 0 ? false : _props$hideBackdrop,
      _props$keepMounted = props.keepMounted,
      keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted,
      _props$manager = props.manager,
      manager = _props$manager === void 0 ? defaultManager : _props$manager,
      onBackdropClick = props.onBackdropClick,
      onClose = props.onClose,
      onEscapeKeyDown = props.onEscapeKeyDown,
      onRendered = props.onRendered,
      open = props.open,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["BackdropComponent", "BackdropProps", "children", "closeAfterTransition", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](true),
      exited = _React$useState[0],
      setExited = _React$useState[1];

  var modal = react__WEBPACK_IMPORTED_MODULE_2__["useRef"]({});
  var mountNodeRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  var modalRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__["default"])(modalRef, ref);
  var hasTransition = getHasTransition(props);

  var getDoc = function getDoc() {
    return Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_7__["default"])(mountNodeRef.current);
  };

  var getModal = function getModal() {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };

  var handleMounted = function handleMounted() {
    manager.mount(getModal(), {
      disableScrollLock: disableScrollLock
    }); // Fix a bug on Chrome where the scroll isn't initially 0.

    modalRef.current.scrollTop = 0;
  };

  var handleOpen = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(function () {
    var resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer); // The element was already mounted.

    if (modalRef.current) {
      handleMounted();
    }
  });
  var isTopModal = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    return manager.isTopModal(getModal());
  }, [manager]);
  var handlePortalRef = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_11__["default"])(function (node) {
    mountNodeRef.current = node;

    if (!node) {
      return;
    }

    if (onRendered) {
      onRendered();
    }

    if (open && isTopModal()) {
      handleMounted();
    } else {
      Object(_ModalManager__WEBPACK_IMPORTED_MODULE_13__["ariaHidden"])(modalRef.current, true);
    }
  });
  var handleClose = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    manager.remove(getModal());
  }, [manager]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    return function () {
      handleClose();
    };
  }, [handleClose]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);

  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }

  var handleEnter = function handleEnter() {
    setExited(false);
  };

  var handleExited = function handleExited() {
    setExited(true);

    if (closeAfterTransition) {
      handleClose();
    }
  };

  var handleBackdropClick = function handleBackdropClick(event) {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (!disableBackdropClick && onClose) {
      onClose(event, 'backdropClick');
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviours like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    if (event.key !== 'Escape' || !isTopModal()) {
      return;
    }

    if (onEscapeKeyDown) {
      onEscapeKeyDown(event);
    }

    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();

      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
    }
  };

  var inlineStyle = styles(theme || {
    zIndex: _styles_zIndex__WEBPACK_IMPORTED_MODULE_12__["default"]
  });
  var childProps = {};

  if (children.props.tabIndex === undefined) {
    childProps.tabIndex = children.props.tabIndex || '-1';
  } // It's a Transition like component


  if (hasTransition) {
    childProps.onEnter = Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_9__["default"])(handleEnter, children.props.onEnter);
    childProps.onExited = Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_9__["default"])(handleExited, children.props.onExited);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Portal__WEBPACK_IMPORTED_MODULE_8__["default"], {
    ref: handlePortalRef,
    container: container,
    disablePortal: disablePortal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: handleRef,
    onKeyDown: handleKeyDown,
    role: "presentation"
  }, other, {
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, inlineStyle.root, !open && exited ? inlineStyle.hidden : {}, other.style)
  }), hideBackdrop ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](BackdropComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    open: open,
    onClick: handleBackdropClick
  }, BackdropProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_14__["default"], {
    disableEnforceFocus: disableEnforceFocus,
    disableAutoFocus: disableAutoFocus,
    disableRestoreFocus: disableRestoreFocus,
    getDoc: getDoc,
    isEnabled: isTopModal,
    open: open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](children, childProps))));
});
 true ? Modal.propTypes = {
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   */
  BackdropComponent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType,

  /**
   * Props applied to the [`Backdrop`](/api/backdrop/) element.
   */
  BackdropProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * A single child content element.
   */
  children: _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__["elementAcceptingRef"].isRequired,

  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   */
  closeAfterTransition: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A HTML element, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a
  /* @typescript-to-proptypes-ignore */
  .oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__["HTMLElementType"], prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.instanceOf(react__WEBPACK_IMPORTED_MODULE_2__["Component"]), prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]),

  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, clicking the backdrop will not fire `onClose`.
   */
  disableBackdropClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, hitting escape will not fire `onClose`.
   */
  disableEscapeKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden.
   */
  disableRestoreFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Disable the scroll lock behavior.
   */
  disableScrollLock: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the backdrop is not rendered.
   */
  hideBackdrop: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   */
  keepMounted: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  manager: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the escape key is pressed,
   * `disableEscapeKeyDown` is false and the modal is in focus.
   */
  onEscapeKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired once the children has been mounted into the `container`.
   * It signals that the `open={true}` prop took effect.
   *
   * This prop will be deprecated and removed in v5, the ref can be used instead.
   */
  onRendered: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * If `true`, the modal is open.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Modal/ModalManager.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Modal/ModalManager.js ***!
  \******************************************************************/
/*! exports provided: ariaHidden, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ariaHidden", function() { return ariaHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalManager; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getScrollbarSize */ "./node_modules/@material-ui/core/esm/utils/getScrollbarSize.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_ownerWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ownerWindow */ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js");





 // Is a vertical scrollbar displayed?

function isOverflowing(container) {
  var doc = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_4__["default"])(container);

  if (doc.body === container) {
    return Object(_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_5__["default"])(doc).innerWidth > doc.documentElement.clientWidth;
  }

  return container.scrollHeight > container.clientHeight;
}

function ariaHidden(node, show) {
  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}

function getPaddingRight(node) {
  return parseInt(window.getComputedStyle(node)['padding-right'], 10) || 0;
}

function ariaHiddenSiblings(container, mountNode, currentNode) {
  var nodesToExclude = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var show = arguments.length > 4 ? arguments[4] : undefined;
  var blacklist = [mountNode, currentNode].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(nodesToExclude));
  var blacklistTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE'];
  [].forEach.call(container.children, function (node) {
    if (node.nodeType === 1 && blacklist.indexOf(node) === -1 && blacklistTagNames.indexOf(node.tagName) === -1) {
      ariaHidden(node, show);
    }
  });
}

function findIndexOf(containerInfo, callback) {
  var idx = -1;
  containerInfo.some(function (item, index) {
    if (callback(item)) {
      idx = index;
      return true;
    }

    return false;
  });
  return idx;
}

function handleContainer(containerInfo, props) {
  var restoreStyle = [];
  var restorePaddings = [];
  var container = containerInfo.container;
  var fixedNodes;

  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      var scrollbarSize = Object(_utils_getScrollbarSize__WEBPACK_IMPORTED_MODULE_3__["default"])();
      restoreStyle.push({
        value: container.style.paddingRight,
        key: 'padding-right',
        el: container
      }); // Use computed style, here to get the real padding to add our scrollbar width.

      container.style['padding-right'] = "".concat(getPaddingRight(container) + scrollbarSize, "px"); // .mui-fixed is a global helper.

      fixedNodes = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_4__["default"])(container).querySelectorAll('.mui-fixed');
      [].forEach.call(fixedNodes, function (node) {
        restorePaddings.push(node.style.paddingRight);
        node.style.paddingRight = "".concat(getPaddingRight(node) + scrollbarSize, "px");
      });
    } // Improve Gatsby support
    // https://css-tricks.com/snippets/css/force-vertical-scrollbar/


    var parent = container.parentElement;
    var scrollContainer = parent.nodeName === 'HTML' && window.getComputedStyle(parent)['overflow-y'] === 'scroll' ? parent : container; // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.

    restoreStyle.push({
      value: scrollContainer.style.overflow,
      key: 'overflow',
      el: scrollContainer
    });
    scrollContainer.style.overflow = 'hidden';
  }

  var restore = function restore() {
    if (fixedNodes) {
      [].forEach.call(fixedNodes, function (node, i) {
        if (restorePaddings[i]) {
          node.style.paddingRight = restorePaddings[i];
        } else {
          node.style.removeProperty('padding-right');
        }
      });
    }

    restoreStyle.forEach(function (_ref) {
      var value = _ref.value,
          el = _ref.el,
          key = _ref.key;

      if (value) {
        el.style.setProperty(key, value);
      } else {
        el.style.removeProperty(key);
      }
    });
  };

  return restore;
}

function getHiddenSiblings(container) {
  var hiddenSiblings = [];
  [].forEach.call(container.children, function (node) {
    if (node.getAttribute && node.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(node);
    }
  });
  return hiddenSiblings;
}
/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */


var ModalManager = /*#__PURE__*/function () {
  function ModalManager() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ModalManager);

    // this.modals[modalIndex] = modal
    this.modals = []; // this.containers[containerIndex] = {
    //   modals: [],
    //   container,
    //   restore: null,
    // }

    this.containers = [];
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ModalManager, [{
    key: "add",
    value: function add(modal, container) {
      var modalIndex = this.modals.indexOf(modal);

      if (modalIndex !== -1) {
        return modalIndex;
      }

      modalIndex = this.modals.length;
      this.modals.push(modal); // If the modal we are adding is already in the DOM.

      if (modal.modalRef) {
        ariaHidden(modal.modalRef, false);
      }

      var hiddenSiblingNodes = getHiddenSiblings(container);
      ariaHiddenSiblings(container, modal.mountNode, modal.modalRef, hiddenSiblingNodes, true);
      var containerIndex = findIndexOf(this.containers, function (item) {
        return item.container === container;
      });

      if (containerIndex !== -1) {
        this.containers[containerIndex].modals.push(modal);
        return modalIndex;
      }

      this.containers.push({
        modals: [modal],
        container: container,
        restore: null,
        hiddenSiblingNodes: hiddenSiblingNodes
      });
      return modalIndex;
    }
  }, {
    key: "mount",
    value: function mount(modal, props) {
      var containerIndex = findIndexOf(this.containers, function (item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var containerInfo = this.containers[containerIndex];

      if (!containerInfo.restore) {
        containerInfo.restore = handleContainer(containerInfo, props);
      }
    }
  }, {
    key: "remove",
    value: function remove(modal) {
      var modalIndex = this.modals.indexOf(modal);

      if (modalIndex === -1) {
        return modalIndex;
      }

      var containerIndex = findIndexOf(this.containers, function (item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var containerInfo = this.containers[containerIndex];
      containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
      this.modals.splice(modalIndex, 1); // If that was the last modal in a container, clean up the container.

      if (containerInfo.modals.length === 0) {
        // The modal might be closed before it had the chance to be mounted in the DOM.
        if (containerInfo.restore) {
          containerInfo.restore();
        }

        if (modal.modalRef) {
          // In case the modal wasn't in the DOM yet.
          ariaHidden(modal.modalRef, true);
        }

        ariaHiddenSiblings(containerInfo.container, modal.mountNode, modal.modalRef, containerInfo.hiddenSiblingNodes, false);
        this.containers.splice(containerIndex, 1);
      } else {
        // Otherwise make sure the next top modal is visible to a screen reader.
        var nextTop = containerInfo.modals[containerInfo.modals.length - 1]; // as soon as a modal is adding its modalRef is undefined. it can't set
        // aria-hidden because the dom element doesn't exist either
        // when modal was unmounted before modalRef gets null

        if (nextTop.modalRef) {
          ariaHidden(nextTop.modalRef, false);
        }
      }

      return modalIndex;
    }
  }, {
    key: "isTopModal",
    value: function isTopModal(modal) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
    }
  }]);

  return ModalManager;
}();



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Modal/SimpleBackdrop.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Modal/SimpleBackdrop.js ***!
  \********************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




var styles = {
  /* Styles applied to the root element. */
  root: {
    zIndex: -1,
    position: 'fixed',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent'
  },

  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: 'transparent'
  }
};
/**
 * @ignore - internal component.
 */

var SimpleBackdrop = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function SimpleBackdrop(props, ref) {
  var _props$invisible = props.invisible,
      invisible = _props$invisible === void 0 ? false : _props$invisible,
      open = props.open,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["invisible", "open"]);

  return open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-hidden": true,
    ref: ref
  }, other, {
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.root, invisible ? styles.invisible : {}, other.style)
  })) : null;
});
 true ? SimpleBackdrop.propTypes = {
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   */
  invisible: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the backdrop is open.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (SimpleBackdrop);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Modal/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Modal/index.js ***!
  \***********************************************************/
/*! exports provided: default, ModalManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./node_modules/@material-ui/core/esm/Modal/Modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Modal__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ModalManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalManager */ "./node_modules/@material-ui/core/esm/Modal/ModalManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalManager", function() { return _ModalManager__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js ***!
  \*************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NativeSelectInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NativeSelectInput */ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../internal/svg-icons/ArrowDropDown */ "./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Input */ "./node_modules/@material-ui/core/esm/Input/index.js");










var styles = function styles(theme) {
  return {
    /* Styles applied to the select component `root` class. */
    root: {},

    /* Styles applied to the select component `select` class. */
    select: {
      '-moz-appearance': 'none',
      // Reset
      '-webkit-appearance': 'none',
      // Reset
      // When interacting quickly, the text can end up selected.
      // Native select can't be selected either.
      userSelect: 'none',
      borderRadius: 0,
      // Reset
      minWidth: 16,
      // So it doesn't collapse.
      cursor: 'pointer',
      '&:focus': {
        // Show that it's not an text input
        backgroundColor: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
        borderRadius: 0 // Reset Chrome style

      },
      // Remove IE 11 arrow
      '&::-ms-expand': {
        display: 'none'
      },
      '&$disabled': {
        cursor: 'default'
      },
      '&[multiple]': {
        height: 'auto'
      },
      '&:not([multiple]) option, &:not([multiple]) optgroup': {
        backgroundColor: theme.palette.background.paper
      },
      '&&': {
        paddingRight: 24
      }
    },

    /* Styles applied to the select component if `variant="filled"`. */
    filled: {
      '&&': {
        paddingRight: 32
      }
    },

    /* Styles applied to the select component if `variant="outlined"`. */
    outlined: {
      borderRadius: theme.shape.borderRadius,
      '&&': {
        paddingRight: 32
      }
    },

    /* Styles applied to the select component `selectMenu` class. */
    selectMenu: {
      height: 'auto',
      // Resets for multpile select with chips
      minHeight: '1.1876em',
      // Required for select\text-field height consistency
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },

    /* Pseudo-class applied to the select component `disabled` class. */
    disabled: {},

    /* Styles applied to the icon component. */
    icon: {
      // We use a position absolute over a flexbox in order to forward the pointer events
      // to the input and to support wrapping tags..
      position: 'absolute',
      right: 0,
      top: 'calc(50% - 12px)',
      // Center vertically
      pointerEvents: 'none',
      // Don't block pointer events on the select under the icon.
      color: theme.palette.action.active,
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    },

    /* Styles applied to the icon component if the popup is open. */
    iconOpen: {
      transform: 'rotate(180deg)'
    },

    /* Styles applied to the icon component if `variant="filled"`. */
    iconFilled: {
      right: 7
    },

    /* Styles applied to the icon component if `variant="outlined"`. */
    iconOutlined: {
      right: 7
    },

    /* Styles applied to the underlying native input component. */
    nativeInput: {
      bottom: 0,
      left: 0,
      position: 'absolute',
      opacity: 0,
      pointerEvents: 'none',
      width: '100%'
    }
  };
};
var defaultInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Input__WEBPACK_IMPORTED_MODULE_9__["default"], null);
/**
 * An alternative to `<Select native />` with a much smaller bundle size footprint.
 */

var NativeSelect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function NativeSelect(props, ref) {
  var children = props.children,
      classes = props.classes,
      _props$IconComponent = props.IconComponent,
      IconComponent = _props$IconComponent === void 0 ? _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_8__["default"] : _props$IconComponent,
      _props$input = props.input,
      input = _props$input === void 0 ? defaultInput : _props$input,
      inputProps = props.inputProps,
      variant = props.variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "classes", "IconComponent", "input", "inputProps", "variant"]);

  var muiFormControl = Object(_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_7__["default"])();
  var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](input, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    // Most of the logic is implemented in `NativeSelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: _NativeSelectInput__WEBPACK_IMPORTED_MODULE_4__["default"],
    inputProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      children: children,
      classes: classes,
      IconComponent: IconComponent,
      variant: fcs.variant,
      type: undefined
    }, inputProps, input ? input.props.inputProps : {}),
    ref: ref
  }, other));
});
 true ? NativeSelect.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /**
   * Attributes applied to the `select` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The input value. The DOM API casts this to a string.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['filled', 'outlined', 'standard'])
} : undefined;
NativeSelect.muiName = 'Select';
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiNativeSelect'
})(NativeSelect));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");







/**
 * @ignore - internal component.
 */

var NativeSelectInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function NativeSelectInput(props, ref) {
  var classes = props.classes,
      className = props.className,
      disabled = props.disabled,
      IconComponent = props.IconComponent,
      inputRef = props.inputRef,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "disabled", "IconComponent", "inputRef", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("select", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, // TODO v5: merge root and select
    classes.select, classes[variant], className, disabled && classes.disabled),
    disabled: disabled,
    ref: inputRef || ref
  }, other)), props.multiple ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](IconComponent, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.icon, classes["icon".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(variant))], disabled && classes.disabled)
  }));
});
 true ? NativeSelectInput.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * The CSS class name of the select element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the select will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType.isRequired,

  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * @ignore
   */
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The input value.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['standard', 'outlined', 'filled'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (NativeSelectInput);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/OutlinedInput/NotchedOutline.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/OutlinedInput/NotchedOutline.js ***!
  \****************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");









var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      top: -5,
      left: 0,
      margin: 0,
      padding: '0 8px',
      pointerEvents: 'none',
      borderRadius: 'inherit',
      borderStyle: 'solid',
      borderWidth: 1,
      overflow: 'hidden'
    },

    /* Styles applied to the legend element when `labelWidth` is provided. */
    legend: {
      textAlign: 'left',
      padding: 0,
      lineHeight: '11px',
      // sync with `height` in `legend` styles
      transition: theme.transitions.create('width', {
        duration: 150,
        easing: theme.transitions.easing.easeOut
      })
    },

    /* Styles applied to the legend element. */
    legendLabelled: {
      display: 'block',
      width: 'auto',
      textAlign: 'left',
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: '0.75em',
      visibility: 'hidden',
      maxWidth: 0.01,
      transition: theme.transitions.create('max-width', {
        duration: 50,
        easing: theme.transitions.easing.easeOut
      }),
      '& > span': {
        paddingLeft: 5,
        paddingRight: 5,
        display: 'inline-block'
      }
    },

    /* Styles applied to the legend element is notched. */
    legendNotched: {
      maxWidth: 1000,
      transition: theme.transitions.create('max-width', {
        duration: 100,
        easing: theme.transitions.easing.easeOut,
        delay: 50
      })
    }
  };
};
/**
 * @ignore - internal component.
 */

var NotchedOutline = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function NotchedOutline(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      label = props.label,
      labelWidthProp = props.labelWidth,
      notched = props.notched,
      style = props.style,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["children", "classes", "className", "label", "labelWidth", "notched", "style"]);

  var theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_7__["default"])();
  var align = theme.direction === 'rtl' ? 'right' : 'left';

  if (label !== undefined) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("fieldset", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      "aria-hidden": true,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className),
      ref: ref,
      style: style
    }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("legend", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.legendLabelled, notched && classes.legendNotched)
    }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", null, label) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", {
      dangerouslySetInnerHTML: {
        __html: '&#8203;'
      }
    })));
  }

  var labelWidth = labelWidthProp > 0 ? labelWidthProp * 0.75 + 8 : 0.01;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("fieldset", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "aria-hidden": true,
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "padding".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__["default"])(align)), 8), style),
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className),
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("legend", {
    className: classes.legend,
    style: {
      // IE 11: fieldset with legend does not render
      // a border radius. This maintains consistency
      // by always having a legend rendered
      width: notched ? labelWidth : 0.01
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", {
    dangerouslySetInnerHTML: {
      __html: '&#8203;'
    }
  })));
});
 true ? NotchedOutline.propTypes = {
  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The label.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * The width of the label.
   */
  labelWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,

  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,

  /**
   * @ignore
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'PrivateNotchedOutline'
})(NotchedOutline));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js ***!
  \***************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _NotchedOutline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NotchedOutline */ "./node_modules/@material-ui/core/esm/OutlinedInput/NotchedOutline.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");









var styles = function styles(theme) {
  var borderColor = theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      '&:hover $notchedOutline': {
        borderColor: theme.palette.text.primary
      },
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        '&:hover $notchedOutline': {
          borderColor: borderColor
        }
      },
      '&$focused $notchedOutline': {
        borderColor: theme.palette.primary.main,
        borderWidth: 2
      },
      '&$error $notchedOutline': {
        borderColor: theme.palette.error.main
      },
      '&$disabled $notchedOutline': {
        borderColor: theme.palette.action.disabled
      }
    },

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {
      '&$focused $notchedOutline': {
        borderColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {
      paddingLeft: 14
    },

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {
      paddingRight: 14
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: '18.5px 14px',
      '&$marginDense': {
        paddingTop: 10.5,
        paddingBottom: 10.5
      }
    },

    /* Styles applied to the `NotchedOutline` element. */
    notchedOutline: {
      borderColor: borderColor
    },

    /* Styles applied to the `input` element. */
    input: {
      padding: '18.5px 14px',
      '&:-webkit-autofill': {
        WebkitBoxShadow: theme.palette.type === 'light' ? null : '0 0 0 100px #266798 inset',
        WebkitTextFillColor: theme.palette.type === 'light' ? null : '#fff',
        caretColor: theme.palette.type === 'light' ? null : '#fff',
        borderRadius: 'inherit'
      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 10.5,
      paddingBottom: 10.5
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      padding: 0
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {
      paddingLeft: 0
    },

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {
      paddingRight: 0
    }
  };
};
var OutlinedInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function OutlinedInput(props, ref) {
  var classes = props.classes,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      label = props.label,
      _props$labelWidth = props.labelWidth,
      labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      notched = props.notched,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "fullWidth", "inputComponent", "label", "labelWidth", "multiline", "notched", "type"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_InputBase__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    renderSuffix: function renderSuffix(state) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_NotchedOutline__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: classes.notchedOutline,
        label: label,
        labelWidth: labelWidth,
        notched: typeof notched !== 'undefined' ? notched : Boolean(state.startAdornment || state.filled || state.focused)
      });
    },
    classes: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes, {
      root: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes.underline),
      notchedOutline: null
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other));
});
 true ? OutlinedInput.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * The label of the input. It is only used for layout. The actual labelling
   * is handled by `InputLabel`. If specified `labelWidth` is ignored.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * The width of the label. Is ignored if `label` is provided. Prefer `label`
   * if the input label appears with a strike through.
   */
  labelWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the `input` element will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
} : undefined;
OutlinedInput.muiName = 'Input';
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiOutlinedInput'
})(OutlinedInput));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/OutlinedInput/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OutlinedInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/OutlinedInput.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _OutlinedInput__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Popover/Popover.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Popover/Popover.js ***!
  \***************************************************************/
/*! exports provided: getOffsetTop, getOffsetLeft, styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsetTop", function() { return getOffsetTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsetLeft", function() { return getOffsetLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_ownerWindow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/ownerWindow */ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js");
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/createChainedFunction */ "./node_modules/@material-ui/core/esm/utils/createChainedFunction.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Modal */ "./node_modules/@material-ui/core/esm/Modal/index.js");
/* harmony import */ var _Grow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");















function getOffsetTop(rect, vertical) {
  var offset = 0;

  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }

  return offset;
}
function getOffsetLeft(rect, horizontal) {
  var offset = 0;

  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }

  return offset;
}

function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map(function (n) {
    return typeof n === 'number' ? "".concat(n, "px") : n;
  }).join(' ');
} // Sum the scrollTop between two elements.


function getScrollParent(parent, child) {
  var element = child;
  var scrollTop = 0;

  while (element && element !== parent) {
    element = element.parentElement;
    scrollTop += element.scrollTop;
  }

  return scrollTop;
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

var styles = {
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the `Paper` component. */
  paper: {
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    // So we see the popover when it's empty.
    // It's most likely on issue on userland.
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  }
};
var Popover = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Popover(props, ref) {
  var action = props.action,
      anchorEl = props.anchorEl,
      _props$anchorOrigin = props.anchorOrigin,
      anchorOrigin = _props$anchorOrigin === void 0 ? {
    vertical: 'top',
    horizontal: 'left'
  } : _props$anchorOrigin,
      anchorPosition = props.anchorPosition,
      _props$anchorReferenc = props.anchorReference,
      anchorReference = _props$anchorReferenc === void 0 ? 'anchorEl' : _props$anchorReferenc,
      children = props.children,
      classes = props.classes,
      className = props.className,
      containerProp = props.container,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 8 : _props$elevation,
      getContentAnchorEl = props.getContentAnchorEl,
      _props$marginThreshol = props.marginThreshold,
      marginThreshold = _props$marginThreshol === void 0 ? 16 : _props$marginThreshol,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      open = props.open,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      _props$transformOrigi = props.transformOrigin,
      transformOrigin = _props$transformOrigi === void 0 ? {
    vertical: 'top',
    horizontal: 'left'
  } : _props$transformOrigi,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Grow__WEBPACK_IMPORTED_MODULE_13__["default"] : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDurationProp = _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
      _props$TransitionProp = props.TransitionProps,
      TransitionProps = _props$TransitionProp === void 0 ? {} : _props$TransitionProp,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "classes", "className", "container", "elevation", "getContentAnchorEl", "marginThreshold", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"]);

  var paperRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](); // Returns the top/left offset of the position
  // to attach to on the anchor element (or body if none is provided)

  var getAnchorOffset = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (contentAnchorOffset) {
    if (anchorReference === 'anchorPosition') {
      if (true) {
        if (!anchorPosition) {
          console.error('Material-UI: You need to provide a `anchorPosition` prop when using ' + '<Popover anchorReference="anchorPosition" />.');
        }
      }

      return anchorPosition;
    }

    var resolvedAnchorEl = getAnchorEl(anchorEl); // If an anchor element wasn't provided, just use the parent body element of this Popover

    var anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_8__["default"])(paperRef.current).body;
    var anchorRect = anchorElement.getBoundingClientRect();

    if (true) {
      var box = anchorElement.getBoundingClientRect();

      if ( true && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
        console.warn(['Material-UI: The `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
      }
    }

    var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorVertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]); // Returns the vertical offset of inner content to anchor the transform on if provided

  var getContentAnchorOffset = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (element) {
    var contentAnchorOffset = 0;

    if (getContentAnchorEl && anchorReference === 'anchorEl') {
      var contentAnchorEl = getContentAnchorEl(element);

      if (contentAnchorEl && element.contains(contentAnchorEl)) {
        var scrollTop = getScrollParent(element, contentAnchorEl);
        contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
      } // != the default value


      if (true) {
        if (anchorOrigin.vertical !== 'top') {
          console.error(['Material-UI: You can not change the default `anchorOrigin.vertical` value ', 'when also providing the `getContentAnchorEl` prop to the popover component.', 'Only use one of the two props.', 'Set `getContentAnchorEl` to `null | undefined`' + ' or leave `anchorOrigin.vertical` unchanged.'].join('\n'));
        }
      }
    }

    return contentAnchorOffset;
  }, [anchorOrigin.vertical, anchorReference, getContentAnchorEl]); // Return the base transform origin using the element
  // and taking the content anchor offset into account if in use

  var getTransformOrigin = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (elemRect) {
    var contentAnchorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  var getPositioningStyle = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (element) {
    // Check if the parent has requested anchoring on an inner content node
    var contentAnchorOffset = getContentAnchorOffset(element);
    var elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    }; // Get the transform origin point on the element itself

    var elemTransformOrigin = getTransformOrigin(elemRect, contentAnchorOffset);

    if (anchorReference === 'none') {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    } // Get the offset of of the anchoring element


    var anchorOffset = getAnchorOffset(contentAnchorOffset); // Calculate element positioning

    var top = anchorOffset.top - elemTransformOrigin.vertical;
    var left = anchorOffset.left - elemTransformOrigin.horizontal;
    var bottom = top + elemRect.height;
    var right = left + elemRect.width; // Use the parent window of the anchorEl if provided

    var containerWindow = Object(_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_9__["default"])(getAnchorEl(anchorEl)); // Window thresholds taking required margin into account

    var heightThreshold = containerWindow.innerHeight - marginThreshold;
    var widthThreshold = containerWindow.innerWidth - marginThreshold; // Check if the vertical axis needs shifting

    if (top < marginThreshold) {
      var diff = top - marginThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (bottom > heightThreshold) {
      var _diff = bottom - heightThreshold;

      top -= _diff;
      elemTransformOrigin.vertical += _diff;
    }

    if (true) {
      if (elemRect.height > heightThreshold && elemRect.height && heightThreshold) {
        console.error(['Material-UI: The popover component is too tall.', "Some part of it can not be seen on the screen (".concat(elemRect.height - heightThreshold, "px)."), 'Please consider adding a `max-height` to improve the user-experience.'].join('\n'));
      }
    } // Check if the horizontal axis needs shifting


    if (left < marginThreshold) {
      var _diff2 = left - marginThreshold;

      left -= _diff2;
      elemTransformOrigin.horizontal += _diff2;
    } else if (right > widthThreshold) {
      var _diff3 = right - widthThreshold;

      left -= _diff3;
      elemTransformOrigin.horizontal += _diff3;
    }

    return {
      top: "".concat(Math.round(top), "px"),
      left: "".concat(Math.round(left), "px"),
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getContentAnchorOffset, getTransformOrigin, marginThreshold]);
  var setPositioningStyles = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    var element = paperRef.current;

    if (!element) {
      return;
    }

    var positioning = getPositioningStyle(element);

    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }

    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }

    element.style.transformOrigin = positioning.transformOrigin;
  }, [getPositioningStyle]);

  var handleEntering = function handleEntering(element, isAppearing) {
    if (onEntering) {
      onEntering(element, isAppearing);
    }

    setPositioningStyles();
  };

  var handlePaperRef = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (instance) {
    // #StrictMode ready
    paperRef.current = react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"](instance);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (open) {
      setPositioningStyles();
    }
  });
  react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"](action, function () {
    return open ? {
      updatePosition: function updatePosition() {
        setPositioningStyles();
      }
    } : null;
  }, [open, setPositioningStyles]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (!open) {
      return undefined;
    }

    var handleResize = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
      setPositioningStyles();
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [open, setPositioningStyles]);
  var transitionDuration = transitionDurationProp;

  if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
    transitionDuration = undefined;
  } // If the container prop is provided, use that
  // If the anchorEl prop is provided, use its parent body element as the container
  // If neither are provided let the Modal take care of choosing the container


  var container = containerProp || (anchorEl ? Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_8__["default"])(getAnchorEl(anchorEl)).body : undefined);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Modal__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    container: container,
    open: open,
    ref: ref,
    BackdropProps: {
      invisible: true
    },
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.root, className)
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](TransitionComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    appear: true,
    in: open,
    onEnter: onEnter,
    onEntered: onEntered,
    onExit: onExit,
    onExited: onExited,
    onExiting: onExiting,
    timeout: transitionDuration
  }, TransitionProps, {
    onEntering: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_10__["default"])(handleEntering, TransitionProps.onEntering)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Paper__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    elevation: elevation,
    ref: handlePaperRef
  }, PaperProps, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.paper, PaperProps.className)
  }), children)));
});
 true ? Popover.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * A HTML element, or a function that returns it.
   * It's used to set the position of the popover.
   */
  anchorEl: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["HTMLElementType"], prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]), function (props) {
    if (props.open && (!props.anchorReference || props.anchorReference === 'anchorEl')) {
      var resolvedAnchorEl = getAnchorEl(props.anchorEl);

      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        var box = resolvedAnchorEl.getBoundingClientRect();

        if ( true && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(['Material-UI: The `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
        }
      } else {
        return new Error(['Material-UI: The `anchorEl` prop provided to the component is invalid.', "It should be an Element instance but it's `".concat(resolvedAnchorEl, "` instead.")].join('\n'));
      }
    }

    return null;
  }),

  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   */
  anchorOrigin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    horizontal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['center', 'left', 'right']), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]).isRequired,
    vertical: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['bottom', 'center', 'top']), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]).isRequired
  }),

  /**
   * This is the position that may be used
   * to set the position of the popover.
   * The coordinates are relative to
   * the application's client area.
   */
  anchorPosition: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    left: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
    top: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired
  }),

  /**
   * This determines which anchor prop to refer to to set
   * the position of the popover.
   */
  anchorReference: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['anchorEl', 'anchorPosition', 'none']),

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * A HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["HTMLElementType"], prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(react__WEBPACK_IMPORTED_MODULE_2__["Component"]), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),

  /**
   * The elevation of the popover.
   */
  elevation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * This function is called in order to retrieve the content anchor element.
   * It's the opposite of the `anchorEl` prop.
   * The content anchor element should be an element inside the popover.
   * It's used to correctly scroll and set the position of the popover.
   * The positioning strategy tries to make the content anchor element just above the
   * anchor element.
   */
  getContentAnchorEl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Specifies how close to the edge of the window the popover can appear.
   */
  marginThreshold: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * Callback fired when the component requests to be closed.
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired before the component is entering.
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component has entered.
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component is entering.
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired before the component is exiting.
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component has exited.
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component is exiting.
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * If `true`, the popover is visible.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,

  /**
   * Props applied to the [`Paper`](/api/paper/) element.
   */
  PaperProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .shape({
    component: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["elementTypeAcceptingRef"]
  }),

  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   */
  transformOrigin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    horizontal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['center', 'left', 'right']), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]).isRequired,
    vertical: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['bottom', 'center', 'top']), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]).isRequired
  }),

  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   */
  TransitionComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['auto']), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    appear: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    enter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    exit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
  })]),

  /**
   * Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.
   */
  TransitionProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_11__["default"])(styles, {
  name: 'MuiPopover'
})(Popover));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Popover/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Popover/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popover */ "./node_modules/@material-ui/core/esm/Popover/Popover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Popover__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Portal/Portal.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Portal/Portal.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");







function getContainer(container) {
  container = typeof container === 'function' ? container() : container; // #StrictMode ready

  return react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"](container);
}

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];
/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */

var Portal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function Portal(props, ref) {
  var children = props.children,
      container = props.container,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      onRendered = props.onRendered;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null),
      mountNode = _React$useState[0],
      setMountNode = _React$useState[1];

  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](children) ? children.ref : null, ref);
  useEnhancedEffect(function () {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect(function () {
    if (mountNode && !disablePortal) {
      Object(_utils_setRef__WEBPACK_IMPORTED_MODULE_4__["default"])(ref, mountNode);
      return function () {
        Object(_utils_setRef__WEBPACK_IMPORTED_MODULE_4__["default"])(ref, null);
      };
    }

    return undefined;
  }, [ref, mountNode, disablePortal]);
  useEnhancedEffect(function () {
    if (onRendered && (mountNode || disablePortal)) {
      onRendered();
    }
  }, [onRendered, mountNode, disablePortal]);

  if (disablePortal) {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](children)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](children, {
        ref: handleRef
      });
    }

    return children;
  }

  return mountNode ? /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"](children, mountNode) : mountNode;
});
 true ? Portal.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The children to render into the `container`.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * A HTML element, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a
  /* @typescript-to-proptypes-ignore */
  .oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__["HTMLElementType"], prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func]),

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Callback fired once the children has been mounted into the `container`.
   *
   * This prop will be deprecated and removed in v5, the ref can be used instead.
   */
  onRendered: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
} : undefined;

if (true) {
  // eslint-disable-next-line
  Portal['propTypes' + ''] = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__["exactProp"])(Portal.propTypes);
}

/* harmony default export */ __webpack_exports__["default"] = (Portal);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Portal/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Portal/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Portal */ "./node_modules/@material-ui/core/esm/Portal/Portal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Portal__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Select/Select.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Select/Select.js ***!
  \*************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _SelectInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectInput */ "./node_modules/@material-ui/core/esm/Select/SelectInput.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../internal/svg-icons/ArrowDropDown */ "./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _NativeSelect_NativeSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../NativeSelect/NativeSelect */ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelect.js");
/* harmony import */ var _NativeSelect_NativeSelectInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../NativeSelect/NativeSelectInput */ "./node_modules/@material-ui/core/esm/NativeSelect/NativeSelectInput.js");
/* harmony import */ var _FilledInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../FilledInput */ "./node_modules/@material-ui/core/esm/FilledInput/index.js");
/* harmony import */ var _OutlinedInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js");















var styles = _NativeSelect_NativeSelect__WEBPACK_IMPORTED_MODULE_11__["styles"];

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Input__WEBPACK_IMPORTED_MODULE_10__["default"], null);

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FilledInput__WEBPACK_IMPORTED_MODULE_13__["default"], null);

var Select = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Select(props, ref) {
  var _props$autoWidth = props.autoWidth,
      autoWidth = _props$autoWidth === void 0 ? false : _props$autoWidth,
      children = props.children,
      classes = props.classes,
      _props$displayEmpty = props.displayEmpty,
      displayEmpty = _props$displayEmpty === void 0 ? false : _props$displayEmpty,
      _props$IconComponent = props.IconComponent,
      IconComponent = _props$IconComponent === void 0 ? _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_9__["default"] : _props$IconComponent,
      id = props.id,
      input = props.input,
      inputProps = props.inputProps,
      label = props.label,
      labelId = props.labelId,
      _props$labelWidth = props.labelWidth,
      labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth,
      MenuProps = props.MenuProps,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? false : _props$multiple,
      _props$native = props.native,
      native = _props$native === void 0 ? false : _props$native,
      onClose = props.onClose,
      onOpen = props.onOpen,
      open = props.open,
      renderValue = props.renderValue,
      SelectDisplayProps = props.SelectDisplayProps,
      _props$variant = props.variant,
      variantProps = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["autoWidth", "children", "classes", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "labelWidth", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"]);

  var inputComponent = native ? _NativeSelect_NativeSelectInput__WEBPACK_IMPORTED_MODULE_12__["default"] : _SelectInput__WEBPACK_IMPORTED_MODULE_5__["default"];
  var muiFormControl = Object(_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_7__["default"])();
  var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant']
  });
  var variant = fcs.variant || variantProps;
  var InputComponent = input || {
    standard: _ref,
    outlined: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_OutlinedInput__WEBPACK_IMPORTED_MODULE_14__["default"], {
      label: label,
      labelWidth: labelWidth
    }),
    filled: _ref2
  }[variant];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](InputComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    // Most of the logic is implemented in `SelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: inputComponent,
    inputProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      children: children,
      IconComponent: IconComponent,
      variant: variant,
      type: undefined,
      // We render a select. We can ignore the type provided by the `Input`.
      multiple: multiple
    }, native ? {
      id: id
    } : {
      autoWidth: autoWidth,
      displayEmpty: displayEmpty,
      labelId: labelId,
      MenuProps: MenuProps,
      onClose: onClose,
      onOpen: onOpen,
      open: open,
      renderValue: renderValue,
      SelectDisplayProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        id: id
      }, SelectDisplayProps)
    }, inputProps, {
      classes: inputProps ? Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["mergeClasses"])({
        baseClasses: classes,
        newClasses: inputProps.classes,
        Component: Select
      }) : classes
    }, input ? input.props.inputProps : {}),
    ref: ref
  }, other));
});
 true ? Select.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function should be passed to the `renderValue` prop which returns the value to be displayed when no items are selected.
   * You can only use it when the `native` prop is `false` (default).
   */
  displayEmpty: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * See [OutlinedInput#label](/api/outlined-input/#props)
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * See [OutlinedInput#label](/api/outlined-input/#props)
   */
  labelWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * Props applied to the [`Menu`](/api/menu/) element.
   */
  MenuProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the component will be using a native `select` element.
   */
  native: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Control `select` open state.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The input value. Providing an empty string will select no options.
   * This prop is required when the `native` prop is `false` (default).
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['filled', 'outlined', 'standard'])
} : undefined;
Select.muiName = 'Select';
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiSelect'
})(Select));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Select/SelectInput.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Select/SelectInput.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Menu/Menu */ "./node_modules/@material-ui/core/esm/Menu/Menu.js");
/* harmony import */ var _InputBase_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../InputBase/utils */ "./node_modules/@material-ui/core/esm/InputBase/utils.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_useControlled__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/useControlled */ "./node_modules/@material-ui/core/esm/utils/useControlled.js");

















function areEqualValues(a, b) {
  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__["default"])(b) === 'object' && b !== null) {
    return a === b;
  }

  return String(a) === String(b);
}

function isEmpty(display) {
  return display == null || typeof display === 'string' && !display.trim();
}
/**
 * @ignore - internal component.
 */


var SelectInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["forwardRef"](function SelectInput(props, ref) {
  var ariaLabel = props['aria-label'],
      autoFocus = props.autoFocus,
      autoWidth = props.autoWidth,
      children = props.children,
      classes = props.classes,
      className = props.className,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      displayEmpty = props.displayEmpty,
      IconComponent = props.IconComponent,
      inputRefProp = props.inputRef,
      labelId = props.labelId,
      _props$MenuProps = props.MenuProps,
      MenuProps = _props$MenuProps === void 0 ? {} : _props$MenuProps,
      multiple = props.multiple,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onClose = props.onClose,
      onFocus = props.onFocus,
      onOpen = props.onOpen,
      openProp = props.open,
      readOnly = props.readOnly,
      renderValue = props.renderValue,
      _props$SelectDisplayP = props.SelectDisplayProps,
      SelectDisplayProps = _props$SelectDisplayP === void 0 ? {} : _props$SelectDisplayP,
      tabIndexProp = props.tabIndex,
      type = props.type,
      valueProp = props.value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["aria-label", "autoFocus", "autoWidth", "children", "classes", "className", "defaultValue", "disabled", "displayEmpty", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"]);

  var _useControlled = Object(_utils_useControlled__WEBPACK_IMPORTED_MODULE_14__["default"])({
    controlled: valueProp,
    default: defaultValue,
    name: 'Select'
  }),
      _useControlled2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useControlled, 2),
      value = _useControlled2[0],
      setValue = _useControlled2[1];

  var inputRef = react__WEBPACK_IMPORTED_MODULE_5__["useRef"](null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5__["useState"](null),
      displayNode = _React$useState[0],
      setDisplayNode = _React$useState[1];

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_5__["useRef"](openProp != null),
      isOpenControlled = _React$useRef.current;

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_5__["useState"](),
      menuMinWidthState = _React$useState2[0],
      setMenuMinWidthState = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_5__["useState"](false),
      openState = _React$useState3[0],
      setOpenState = _React$useState3[1];

  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_13__["default"])(ref, inputRefProp);
  react__WEBPACK_IMPORTED_MODULE_5__["useImperativeHandle"](handleRef, function () {
    return {
      focus: function focus() {
        displayNode.focus();
      },
      node: inputRef.current,
      value: value
    };
  }, [displayNode, value]);
  react__WEBPACK_IMPORTED_MODULE_5__["useEffect"](function () {
    if (autoFocus && displayNode) {
      displayNode.focus();
    }
  }, [autoFocus, displayNode]);
  react__WEBPACK_IMPORTED_MODULE_5__["useEffect"](function () {
    if (displayNode) {
      var label = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_9__["default"])(displayNode).getElementById(labelId);

      if (label) {
        var handler = function handler() {
          if (getSelection().isCollapsed) {
            displayNode.focus();
          }
        };

        label.addEventListener('click', handler);
        return function () {
          label.removeEventListener('click', handler);
        };
      }
    }

    return undefined;
  }, [labelId, displayNode]);

  var update = function update(open, event) {
    if (open) {
      if (onOpen) {
        onOpen(event);
      }
    } else if (onClose) {
      onClose(event);
    }

    if (!isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : displayNode.clientWidth);
      setOpenState(open);
    }
  };

  var handleMouseDown = function handleMouseDown(event) {
    // Ignore everything but left-click
    if (event.button !== 0) {
      return;
    } // Hijack the default focus behavior.


    event.preventDefault();
    displayNode.focus();
    update(true, event);
  };

  var handleClose = function handleClose(event) {
    update(false, event);
  };

  var childrenArray = react__WEBPACK_IMPORTED_MODULE_5__["Children"].toArray(children); // Support autofill.

  var handleChange = function handleChange(event) {
    var index = childrenArray.map(function (child) {
      return child.props.value;
    }).indexOf(event.target.value);

    if (index === -1) {
      return;
    }

    var child = childrenArray[index];
    setValue(child.props.value);

    if (onChange) {
      onChange(event, child);
    }
  };

  var handleItemClick = function handleItemClick(child) {
    return function (event) {
      if (!multiple) {
        update(false, event);
      }

      var newValue;

      if (multiple) {
        newValue = Array.isArray(value) ? value.slice() : [];
        var itemIndex = value.indexOf(child.props.value);

        if (itemIndex === -1) {
          newValue.push(child.props.value);
        } else {
          newValue.splice(itemIndex, 1);
        }
      } else {
        newValue = child.props.value;
      }

      if (child.props.onClick) {
        child.props.onClick(event);
      }

      if (value === newValue) {
        return;
      }

      setValue(newValue);

      if (onChange) {
        event.persist(); // Preact support, target is read only property on a native event.

        Object.defineProperty(event, 'target', {
          writable: true,
          value: {
            value: newValue,
            name: name
          }
        });
        onChange(event, child);
      }
    };
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (!readOnly) {
      var validKeys = [' ', 'ArrowUp', 'ArrowDown', // The native select doesn't respond to enter on MacOS, but it's recommended by
      // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
      'Enter'];

      if (validKeys.indexOf(event.key) !== -1) {
        event.preventDefault();
        update(true, event);
      }
    }
  };

  var open = displayNode !== null && (isOpenControlled ? openProp : openState);

  var handleBlur = function handleBlur(event) {
    // if open event.stopImmediatePropagation
    if (!open && onBlur) {
      event.persist(); // Preact support, target is read only property on a native event.

      Object.defineProperty(event, 'target', {
        writable: true,
        value: {
          value: value,
          name: name
        }
      });
      onBlur(event);
    }
  };

  delete other['aria-invalid'];
  var display;
  var displaySingle;
  var displayMultiple = [];
  var computeDisplay = false;
  var foundMatch = false; // No need to display any value if the field is empty.

  if (Object(_InputBase_utils__WEBPACK_IMPORTED_MODULE_12__["isFilled"])({
    value: value
  }) || displayEmpty) {
    if (renderValue) {
      display = renderValue(value);
    } else {
      computeDisplay = true;
    }
  }

  var items = childrenArray.map(function (child) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["isValidElement"](child)) {
      return null;
    }

    if (true) {
      if (Object(react_is__WEBPACK_IMPORTED_MODULE_6__["isFragment"])(child)) {
        console.error(["Material-UI: The Select component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    var selected;

    if (multiple) {
      if (!Array.isArray(value)) {
        throw new Error( true ? "Material-UI: The `value` prop must be an array when using the `Select` component with `multiple`." : undefined);
      }

      selected = value.some(function (v) {
        return areEqualValues(v, child.props.value);
      });

      if (selected && computeDisplay) {
        displayMultiple.push(child.props.children);
      }
    } else {
      selected = areEqualValues(value, child.props.value);

      if (selected && computeDisplay) {
        displaySingle = child.props.children;
      }
    }

    if (selected) {
      foundMatch = true;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["cloneElement"](child, {
      'aria-selected': selected ? 'true' : undefined,
      onClick: handleItemClick(child),
      onKeyUp: function onKeyUp(event) {
        if (event.key === ' ') {
          // otherwise our MenuItems dispatches a click event
          // it's not behavior of the native <option> and causes
          // the select to close immediately since we open on space keydown
          event.preventDefault();
        }

        if (child.props.onKeyUp) {
          child.props.onKeyUp(event);
        }
      },
      role: 'option',
      selected: selected,
      value: undefined,
      // The value is most likely not a valid HTML attribute.
      'data-value': child.props.value // Instead, we provide it as a data attribute.

    });
  });

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_5__["useEffect"](function () {
      if (!foundMatch && !multiple && value !== '') {
        var values = childrenArray.map(function (child) {
          return child.props.value;
        });
        console.warn(["Material-UI: You have provided an out-of-range value `".concat(value, "` for the select ").concat(name ? "(name=\"".concat(name, "\") ") : '', "component."), "Consider providing a value that matches one of the available options or ''.", "The available values are ".concat(values.filter(function (x) {
          return x != null;
        }).map(function (x) {
          return "`".concat(x, "`");
        }).join(', ') || '""', ".")].join('\n'));
      }
    }, [foundMatch, childrenArray, multiple, name, value]);
  }

  if (computeDisplay) {
    display = multiple ? displayMultiple.join(', ') : displaySingle;
  } // Avoid performing a layout computation in the render method.


  var menuMinWidth = menuMinWidthState;

  if (!autoWidth && isOpenControlled && displayNode) {
    menuMinWidth = displayNode.clientWidth;
  }

  var tabIndex;

  if (typeof tabIndexProp !== 'undefined') {
    tabIndex = tabIndexProp;
  } else {
    tabIndex = disabled ? null : 0;
  }

  var buttonId = SelectDisplayProps.id || (name ? "mui-component-select-".concat(name) : undefined);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])(classes.root, // TODO v5: merge root and select
    classes.select, classes.selectMenu, classes[variant], className, disabled && classes.disabled),
    ref: setDisplayNode,
    tabIndex: tabIndex,
    role: "button",
    "aria-disabled": disabled ? 'true' : undefined,
    "aria-expanded": open ? 'true' : undefined,
    "aria-haspopup": "listbox",
    "aria-label": ariaLabel,
    "aria-labelledby": [labelId, buttonId].filter(Boolean).join(' ') || undefined,
    onKeyDown: handleKeyDown,
    onMouseDown: disabled || readOnly ? null : handleMouseDown,
    onBlur: handleBlur,
    onFocus: onFocus
  }, SelectDisplayProps, {
    // The id is required for proper a11y
    id: buttonId
  }), isEmpty(display) ?
  /*#__PURE__*/
  // eslint-disable-next-line react/no-danger
  react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("span", {
    dangerouslySetInnerHTML: {
      __html: '&#8203;'
    }
  }) : display), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    value: Array.isArray(value) ? value.join(',') : value,
    name: name,
    ref: inputRef,
    "aria-hidden": true,
    onChange: handleChange,
    tabIndex: -1,
    className: classes.nativeInput,
    autoFocus: autoFocus
  }, other)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](IconComponent, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_8__["default"])(classes.icon, classes["icon".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_10__["default"])(variant))], open && classes.iconOpen, disabled && classes.disabled)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_Menu_Menu__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: "menu-".concat(name || ''),
    anchorEl: displayNode,
    open: open,
    onClose: handleClose
  }, MenuProps, {
    MenuListProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      'aria-labelledby': labelId,
      role: 'listbox',
      disableListWrap: true
    }, MenuProps.MenuListProps),
    PaperProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, MenuProps.PaperProps, {
      style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        minWidth: menuMinWidth
      }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
    })
  }), items));
});
 true ? SelectInput.propTypes = {
  /**
   * @ignore
   */
  'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
   * @ignore
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired,

  /**
   * The CSS class name of the select element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,

  /**
   * If `true`, the select will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.elementType.isRequired,

  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_4__["refType"],

  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
   * Props applied to the [`Menu`](/api/menu/) element.
   */
  MenuProps: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * Control `select` open state.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * @ignore
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,

  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,

  /**
   * @ignore
   */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),

  /**
   * @ignore
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,

  /**
   * The input value.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(['standard', 'outlined', 'filled'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (SelectInput);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Select/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Select/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select */ "./node_modules/@material-ui/core/esm/Select/Select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Select__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/SvgIcon/SvgIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/SvgIcon/SvgIcon.js ***!
  \***************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      userSelect: 'none',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      fill: 'currentColor',
      flexShrink: 0,
      fontSize: theme.typography.pxToRem(24),
      transition: theme.transitions.create('fill', {
        duration: theme.transitions.duration.shorter
      })
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `color="action"`. */
    colorAction: {
      color: theme.palette.action.active
    },

    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      color: theme.palette.error.main
    },

    /* Styles applied to the root element if `color="disabled"`. */
    colorDisabled: {
      color: theme.palette.action.disabled
    },

    /* Styles applied to the root element if `fontSize="inherit"`. */
    fontSizeInherit: {
      fontSize: 'inherit'
    },

    /* Styles applied to the root element if `fontSize="small"`. */
    fontSizeSmall: {
      fontSize: theme.typography.pxToRem(20)
    },

    /* Styles applied to the root element if `fontSize="large"`. */
    fontSizeLarge: {
      fontSize: theme.typography.pxToRem(35)
    }
  };
};
var SvgIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function SvgIcon(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'inherit' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'svg' : _props$component,
      _props$fontSize = props.fontSize,
      fontSize = _props$fontSize === void 0 ? 'default' : _props$fontSize,
      htmlColor = props.htmlColor,
      titleAccess = props.titleAccess,
      _props$viewBox = props.viewBox,
      viewBox = _props$viewBox === void 0 ? '0 0 24 24' : _props$viewBox,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "classes", "className", "color", "component", "fontSize", "htmlColor", "titleAccess", "viewBox"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, color !== 'inherit' && classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color))], fontSize !== 'default' && classes["fontSize".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(fontSize))]),
    focusable: "false",
    viewBox: viewBox,
    color: htmlColor,
    "aria-hidden": titleAccess ? undefined : true,
    role: titleAccess ? 'img' : undefined,
    ref: ref
  }, other), children, titleAccess ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("title", null, titleAccess) : null);
});
 true ? SvgIcon.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Node passed into the SVG element.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['action', 'disabled', 'error', 'inherit', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   */
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['default', 'inherit', 'large', 'small']),

  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this property.
   */
  shapeRendering: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
} : undefined;
SvgIcon.muiName = 'SvgIcon';
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiSvgIcon'
})(SvgIcon));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/SvgIcon/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/SvgIcon/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/SvgIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TextField/TextField.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TextField/TextField.js ***!
  \*******************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _FilledInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FilledInput */ "./node_modules/@material-ui/core/esm/FilledInput/index.js");
/* harmony import */ var _OutlinedInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js");
/* harmony import */ var _InputLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _FormHelperText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");














var variantComponent = {
  standard: _Input__WEBPACK_IMPORTED_MODULE_6__["default"],
  filled: _FilledInput__WEBPACK_IMPORTED_MODULE_7__["default"],
  outlined: _OutlinedInput__WEBPACK_IMPORTED_MODULE_8__["default"]
};
var styles = {
  /* Styles applied to the root element. */
  root: {}
};
/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 *
 * - [FormControl](/api/form-control/)
 * - [InputLabel](/api/input-label/)
 * - [FilledInput](/api/filled-input/)
 * - [OutlinedInput](/api/outlined-input/)
 * - [Input](/api/input/)
 * - [FormHelperText](/api/form-helper-text/)
 *
 * If you wish to alter the props applied to the `input` element, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 *
 * - using the upper case props for passing values directly to the components
 * - using the underlying components directly as shown in the demos
 */

var TextField = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TextField(props, ref) {
  var autoComplete = props.autoComplete,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      defaultValue = props.defaultValue,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      FormHelperTextProps = props.FormHelperTextProps,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      helperText = props.helperText,
      hiddenLabel = props.hiddenLabel,
      id = props.id,
      InputLabelProps = props.InputLabelProps,
      inputProps = props.inputProps,
      InputProps = props.InputProps,
      inputRef = props.inputRef,
      label = props.label,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      placeholder = props.placeholder,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      rows = props.rows,
      rowsMax = props.rowsMax,
      _props$select = props.select,
      select = _props$select === void 0 ? false : _props$select,
      SelectProps = props.SelectProps,
      type = props.type,
      value = props.value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["autoComplete", "autoFocus", "children", "classes", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "hiddenLabel", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "rowsMax", "select", "SelectProps", "type", "value", "variant"]);

  if (true) {
    if (select && !children) {
      console.error('Material-UI: `children` must be passed when using the `TextField` component with `select`.');
    }
  }

  var InputMore = {};

  if (variant === 'outlined') {
    if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
      InputMore.notched = InputLabelProps.shrink;
    }

    if (label) {
      var _InputLabelProps$requ;

      var displayRequired = (_InputLabelProps$requ = InputLabelProps === null || InputLabelProps === void 0 ? void 0 : InputLabelProps.required) !== null && _InputLabelProps$requ !== void 0 ? _InputLabelProps$requ : required;
      InputMore.label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, label, displayRequired && "\xA0*");
    }
  }

  if (select) {
    // unset defaults from textbox inputs
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = undefined;
    }

    InputMore['aria-describedby'] = undefined;
  }

  var helperTextId = helperText && id ? "".concat(id, "-helper-text") : undefined;
  var inputLabelId = label && id ? "".concat(id, "-label") : undefined;
  var InputComponent = variantComponent[variant];
  var InputElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](InputComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-describedby": helperTextId,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    fullWidth: fullWidth,
    multiline: multiline,
    name: name,
    rows: rows,
    rowsMax: rowsMax,
    type: type,
    value: value,
    id: id,
    inputRef: inputRef,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    inputProps: inputProps
  }, InputMore, InputProps));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FormControl__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    disabled: disabled,
    error: error,
    fullWidth: fullWidth,
    hiddenLabel: hiddenLabel,
    ref: ref,
    required: required,
    color: color,
    variant: variant
  }, other), label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_InputLabel__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    htmlFor: id,
    id: inputLabelId
  }, InputLabelProps), label), select ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Select__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-describedby": helperTextId,
    id: id,
    labelId: inputLabelId,
    value: value,
    input: InputElement
  }, SelectProps), children) : InputElement, helperText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FormHelperText__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: helperTextId
  }, FormHelperTextProps), helperText));
});
 true ? TextField.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * @ignore
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']),

  /**
   * The default value of the `input` element.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Props applied to the [`FormHelperText`](/api/form-helper-text/) element.
   */
  FormHelperTextProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The helper text content.
   */
  helperText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * @ignore
   */
  hiddenLabel: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Props applied to the [`InputLabel`](/api/input-label/) element.
   */
  InputLabelProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/api/filled-input/),
   * [`OutlinedInput`](/api/outlined-input/) or [`Input`](/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * The label content.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense', 'none', 'normal']),

  /**
   * If `true`, a textarea element will be rendered instead of an input.
   */
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the label is displayed as required and the `input` element` will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Render a [`Select`](/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   */
  select: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Props applied to the [`Select`](/api/select/) element.
   */
  SelectProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The size of the text field.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['medium', 'small']),

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['filled', 'outlined', 'standard'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_13__["default"])(styles, {
  name: 'MuiTextField'
})(TextField));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TextField/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TextField/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextField */ "./node_modules/@material-ui/core/esm/TextField/TextField.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TextField__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");







function getStyleValue(computedStyle, property) {
  return parseInt(computedStyle[property], 10) || 0;
}

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_2__["useEffect"];
var styles = {
  /* Styles applied to the shadow textarea element. */
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: 'hidden',
    // Remove from the content flow
    position: 'absolute',
    // Ignore the scrollbar width
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: 'translateZ(0)'
  }
};
var TextareaAutosize = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TextareaAutosize(props, ref) {
  var onChange = props.onChange,
      rows = props.rows,
      rowsMax = props.rowsMax,
      _props$rowsMin = props.rowsMin,
      rowsMinProp = _props$rowsMin === void 0 ? 1 : _props$rowsMin,
      style = props.style,
      value = props.value,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["onChange", "rows", "rowsMax", "rowsMin", "style", "value"]);

  var rowsMin = rows || rowsMinProp;

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](value != null),
      isControlled = _React$useRef.current;

  var inputRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__["default"])(ref, inputRef);
  var shadowRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  var renders = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](0);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"]({}),
      state = _React$useState[0],
      setState = _React$useState[1];

  var syncHeight = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    var input = inputRef.current;
    var computedStyle = window.getComputedStyle(input);
    var inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || 'x';

    if (inputShallow.value.slice(-1) === '\n') {
      // Certain fonts which overflow the line height will cause the textarea
      // to report a different scrollHeight depending on whether the last line
      // is empty. Make it non-empty to avoid this issue.
      inputShallow.value += ' ';
    }

    var boxSizing = computedStyle['box-sizing'];
    var padding = getStyleValue(computedStyle, 'padding-bottom') + getStyleValue(computedStyle, 'padding-top');
    var border = getStyleValue(computedStyle, 'border-bottom-width') + getStyleValue(computedStyle, 'border-top-width'); // The height of the inner content

    var innerHeight = inputShallow.scrollHeight - padding; // Measure height of a textarea with a single row

    inputShallow.value = 'x';
    var singleRowHeight = inputShallow.scrollHeight - padding; // The height of the outer content

    var outerHeight = innerHeight;

    if (rowsMin) {
      outerHeight = Math.max(Number(rowsMin) * singleRowHeight, outerHeight);
    }

    if (rowsMax) {
      outerHeight = Math.min(Number(rowsMax) * singleRowHeight, outerHeight);
    }

    outerHeight = Math.max(outerHeight, singleRowHeight); // Take the box sizing into account for applying this value as a style.

    var outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    var overflow = Math.abs(outerHeight - innerHeight) <= 1;
    setState(function (prevState) {
      // Need a large enough difference to update the height.
      // This prevents infinite rendering loop.
      if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
        renders.current += 1;
        return {
          overflow: overflow,
          outerHeightStyle: outerHeightStyle
        };
      }

      if (true) {
        if (renders.current === 20) {
          console.error(['Material-UI: Too many re-renders. The layout is unstable.', 'TextareaAutosize limits the number of renders to prevent an infinite loop.'].join('\n'));
        }
      }

      return prevState;
    });
  }, [rowsMax, rowsMin, props.placeholder]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    var handleResize = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
      renders.current = 0;
      syncHeight();
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [syncHeight]);
  useEnhancedEffect(function () {
    syncHeight();
  });
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    renders.current = 0;
  }, [value]);

  var handleChange = function handleChange(event) {
    renders.current = 0;

    if (!isControlled) {
      syncHeight();
    }

    if (onChange) {
      onChange(event);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("textarea", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    value: value,
    onChange: handleChange,
    ref: handleRef // Apply the rows prop to get a "correct" first SSR paint
    ,
    rows: rowsMin,
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      height: state.outerHeightStyle,
      // Need a large enough difference to allow scrolling.
      // This prevents infinite rendering loop.
      overflow: state.overflow ? 'hidden' : null
    }, style)
  }, other)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("textarea", {
    "aria-hidden": true,
    className: props.className,
    readOnly: true,
    ref: shadowRef,
    tabIndex: -1,
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.shadow, style)
  }));
});
 true ? TextareaAutosize.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * @ignore
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Use `rowsMin` instead. The prop will be removed in v5.
   *
   * @deprecated
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Maximum number of rows to display.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Minimum number of rows to display.
   */
  rowsMin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * @ignore
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (TextareaAutosize);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TextareaAutosize/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextareaAutosize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextareaAutosize */ "./node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TextareaAutosize__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Unstable_TrapFocus/Unstable_TrapFocus.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Unstable_TrapFocus/Unstable_TrapFocus.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex, camelcase */






/**
 * Utility component that locks focus inside the component.
 */

function Unstable_TrapFocus(props) {
  var children = props.children,
      _props$disableAutoFoc = props.disableAutoFocus,
      disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$disableEnforce = props.disableEnforceFocus,
      disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
      _props$disableRestore = props.disableRestoreFocus,
      disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
      getDoc = props.getDoc,
      isEnabled = props.isEnabled,
      open = props.open;
  var ignoreNextEnforceFocus = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
  var sentinelStart = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  var sentinelEnd = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  var nodeToRestore = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
  var rootRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null); // can be removed once we drop support for non ref forwarding class components

  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (instance) {
    // #StrictMode ready
    rootRef.current = react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"](instance);
  }, []);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__["default"])(children.ref, handleOwnRef);
  var prevOpenRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    prevOpenRef.current = open;
  }, [open]);

  if (!prevOpenRef.current && open && typeof window !== 'undefined') {
    // WARNING: Potentially unsafe in concurrent mode.
    // The way the read on `nodeToRestore` is setup could make this actually safe.
    // Say we render `open={false}` -> `open={true}` but never commit.
    // We have now written a state that wasn't committed. But no committed effect
    // will read this wrong value. We only read from `nodeToRestore` in effects
    // that were committed on `open={true}`
    // WARNING: Prevents the instance from being garbage collected. Should only
    // hold a weak ref.
    nodeToRestore.current = getDoc().activeElement;
  }

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    if (!open) {
      return;
    }

    var doc = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_3__["default"])(rootRef.current); // We might render an empty child.

    if (!disableAutoFocus && rootRef.current && !rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {
        if (true) {
          console.error(['Material-UI: The modal content node does not accept focus.', 'For the benefit of assistive technologies, ' + 'the tabIndex of the node is being set to "-1".'].join('\n'));
        }

        rootRef.current.setAttribute('tabIndex', -1);
      }

      rootRef.current.focus();
    }

    var contain = function contain() {
      var rootElement = rootRef.current; // Cleanup functions are executed lazily in React 17.
      // Contain can be called between the component being unmounted and its cleanup function being run.

      if (rootElement === null) {
        return;
      }

      if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }

      if (rootRef.current && !rootRef.current.contains(doc.activeElement)) {
        rootRef.current.focus();
      }
    };

    var loopFocus = function loopFocus(event) {
      // 9 = Tab
      if (disableEnforceFocus || !isEnabled() || event.keyCode !== 9) {
        return;
      } // Make sure the next tab starts from the right place.


      if (doc.activeElement === rootRef.current) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;

        if (event.shiftKey) {
          sentinelEnd.current.focus();
        } else {
          sentinelStart.current.focus();
        }
      }
    };

    doc.addEventListener('focus', contain, true);
    doc.addEventListener('keydown', loopFocus, true); // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area
    // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.

    var interval = setInterval(function () {
      contain();
    }, 50);
    return function () {
      clearInterval(interval);
      doc.removeEventListener('focus', contain, true);
      doc.removeEventListener('keydown', loopFocus, true); // restoreLastFocus()

      if (!disableRestoreFocus) {
        // In IE 11 it is possible for document.activeElement to be null resulting
        // in nodeToRestore.current being null.
        // Not all elements in IE 11 have a focus method.
        // Once IE 11 support is dropped the focus() call can be unconditional.
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          nodeToRestore.current.focus();
        }

        nodeToRestore.current = null;
      }
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    tabIndex: 0,
    ref: sentinelStart,
    "data-test": "sentinelStart"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](children, {
    ref: handleRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    tabIndex: 0,
    ref: sentinelEnd,
    "data-test": "sentinelEnd"
  }));
}

 true ? Unstable_TrapFocus.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A single child content element.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * If `true`, the trap focus will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any trap focus children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * If `true`, the trap focus will not prevent focus from leaving the trap focus while open.
   *
   * Generally this should never be set to `true` as it makes the trap focus less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * If `true`, the trap focus will not restore focus to previously focused element once
   * trap focus is hidden.
   */
  disableRestoreFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Return the document to consider.
   * We use it to implement the restore focus between different browser documents.
   */
  getDoc: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,

  /**
   * Do we still want to enforce the focus?
   * This prop helps nesting TrapFocus elements.
   */
  isEnabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,

  /**
   * If `true`, focus will be locked.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired
} : undefined;

if (true) {
  // eslint-disable-next-line
  Unstable_TrapFocus['propTypes' + ''] = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["exactProp"])(Unstable_TrapFocus.propTypes);
}

/* harmony default export */ __webpack_exports__["default"] = (Unstable_TrapFocus);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Unstable_TrapFocus/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Unstable_TrapFocus/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unstable_TrapFocus */ "./node_modules/@material-ui/core/esm/Unstable_TrapFocus/Unstable_TrapFocus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/ArrowDropDown.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown'));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/transitions/utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/transitions/utils.js ***!
  \*****************************************************************/
/*! exports provided: reflow, getTransitionProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reflow", function() { return reflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransitionProps", function() { return getTransitionProps; });
var reflow = function reflow(node) {
  return node.scrollTop;
};
function getTransitionProps(props, options) {
  var timeout = props.timeout,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style;
  return {
    duration: style.transitionDuration || typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
    delay: style.transitionDelay
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/createChainedFunction.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/createChainedFunction.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createChainedFunction; });
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.reduce(function (acc, func) {
    if (func == null) {
      return acc;
    }

    if (true) {
      if (typeof func !== 'function') {
        console.error('Material-UI: Invalid Argument Type, must only provide functions, undefined, or null.');
      }
    }

    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      func.apply(this, args);
    };
  }, function () {});
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSvgIcon; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");



/**
 * Private module reserved for @material-ui/x packages.
 */

function createSvgIcon(path, displayName) {
  var Component = function Component(props, ref) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: ref
    }, props), path);
  };

  if (true) {
    // Need to set `displayName` on the inner component for React.memo.
    // React prior to 16.14 ignores `displayName` on the wrapper.
    Component.displayName = "".concat(displayName, "Icon");
  }

  Component.muiName = _SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"].muiName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(Component));
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/debounce.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/debounce.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 166;
  var timeout;

  function debounced() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // eslint-disable-next-line consistent-this
    var that = this;

    var later = function later() {
      func.apply(that, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }

  debounced.clear = function () {
    clearTimeout(timeout);
  };

  return debounced;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/getScrollbarSize.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/getScrollbarSize.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScrollbarSize; });
// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/3ffe3a5d82f6f561b82ff78d82b32a7d14aed558/js/src/modal.js#L512-L519
function getScrollbarSize() {
  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '99px';
  scrollDiv.style.height = '99px';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarSize;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/isMuiElement.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/isMuiElement.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isMuiElement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function isMuiElement(element, muiNames) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](element) && muiNames.indexOf(element.type.muiName) !== -1;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/ownerDocument.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ownerDocument; });
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/ownerWindow.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ownerWindow; });
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");

function ownerWindow(node) {
  var doc = Object(_ownerDocument__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  return doc.defaultView || window;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/useControlled.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/useControlled.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useControlled; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */

function useControlled(_ref) {
  var controlled = _ref.controlled,
      defaultProp = _ref.default,
      name = _ref.name,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? 'value' : _ref$state;

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](controlled !== undefined),
      isControlled = _React$useRef.current;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](defaultProp),
      valueState = _React$useState[0],
      setValue = _React$useState[1];

  var value = isControlled ? controlled : valueState;

  if (true) {
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
      if (isControlled !== (controlled !== undefined)) {
        console.error(["Material-UI: A component is changing the ".concat(isControlled ? '' : 'un', "controlled ").concat(state, " state of ").concat(name, " to be ").concat(isControlled ? 'un' : '', "controlled."), 'Elements should not switch from uncontrolled to controlled (or vice versa).', "Decide between using a controlled or uncontrolled ".concat(name, " ") + 'element for the lifetime of the component.', "The nature of the state is determined during the first render, it's considered controlled if the value is not `undefined`.", 'More info: https://fb.me/react-controlled-components'].join('\n'));
      }
    }, [controlled]);

    var _React$useRef2 = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](defaultProp),
        defaultValue = _React$useRef2.current;

    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
      if (!isControlled && defaultValue !== defaultProp) {
        console.error(["Material-UI: A component is changing the default ".concat(state, " state of an uncontrolled ").concat(name, " after being initialized. ") + "To suppress this warning opt to use a controlled ".concat(name, ".")].join('\n'));
      }
    }, [JSON.stringify(defaultProp)]);
  }

  var setValueIfUncontrolled = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (newValue) {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\admin\\messages\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  root: {
    minWidth: 275
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
  }
});

var MessageId = function MessageId(_ref) {
  _s();

  var message = _ref.message;
  var classes = useStyles();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }
  }, __jsx(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("h2", {
    style: {
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 6
    }
  }, "Consultation du message de ", message.nom), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }
  }), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "h5",
    component: "h5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 8
    }
  }, "Envoy\xE9 par ", message.nom), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.title,
    color: "textSecondary",
    gutterBottom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 8
    }
  }, "Envoy\xE9 le", ' ', dayjs__WEBPACK_IMPORTED_MODULE_3___default()(message.createdAt).format('DD/MM/YYYY à HH:mm')), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.pos,
    color: "textSecondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 8
    }
  }, "Coordonn\xE9es : ", message.mail, " / 0", "".concat(message.tel.toString().substring(0, 1), " ").concat(message.tel.toString().substring(1, 3), " ").concat(message.tel.toString().substring(3, 5), " ").concat(message.tel.toString().substring(5, 7), " ").concat(message.tel.toString().substring(7, 9))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "body2",
    component: "p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 8
    }
  }, "Message :", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }), message.msg)), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, __jsx("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "standard-basic",
    label: "Standard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "filled-basic",
    label: "Filled",
    variant: "filled",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "outlined-basic",
    label: "Outlined",
    variant: "outlined",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 8
    }
  }, "Learn More"))))));
};

_s(MessageId, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = MessageId;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (MessageId);

var _c;

$RefreshReg$(_c, "MessageId");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9GaWxsZWRJbnB1dC9GaWxsZWRJbnB1dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9GaWxsZWRJbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtQ29udHJvbC9Gb3JtQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtQ29udHJvbC9Gb3JtQ29udHJvbENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vRm9ybUNvbnRyb2wvZm9ybUNvbnRyb2xTdGF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtQ29udHJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtQ29udHJvbC91c2VGb3JtQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtSGVscGVyVGV4dC9Gb3JtSGVscGVyVGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtSGVscGVyVGV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtTGFiZWwvRm9ybUxhYmVsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0Zvcm1MYWJlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Hcm93L0dyb3cuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vR3Jvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9JbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9JbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9JbnB1dEJhc2UvSW5wdXRCYXNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0lucHV0QmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9JbnB1dEJhc2UvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vSW5wdXRMYWJlbC9JbnB1dExhYmVsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0lucHV0TGFiZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTGlzdC9MaXN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0xpc3QvTGlzdENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9NZW51L01lbnUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTWVudUxpc3QvTWVudUxpc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTWVudUxpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTW9kYWwvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTW9kYWwvTW9kYWxNYW5hZ2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL01vZGFsL1NpbXBsZUJhY2tkcm9wLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL01vZGFsL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL05hdGl2ZVNlbGVjdC9OYXRpdmVTZWxlY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTmF0aXZlU2VsZWN0L05hdGl2ZVNlbGVjdElucHV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL091dGxpbmVkSW5wdXQvTm90Y2hlZE91dGxpbmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vT3V0bGluZWRJbnB1dC9PdXRsaW5lZElucHV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL091dGxpbmVkSW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vUG9wb3Zlci9Qb3BvdmVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1BvcG92ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vUG9ydGFsL1BvcnRhbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Qb3J0YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vU2VsZWN0L1NlbGVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9TZWxlY3QvU2VsZWN0SW5wdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vU2VsZWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1N2Z0ljb24vU3ZnSWNvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9TdmdJY29uL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1RleHRGaWVsZC9UZXh0RmllbGQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVGV4dEZpZWxkL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1RleHRhcmVhQXV0b3NpemUvVGV4dGFyZWFBdXRvc2l6ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UZXh0YXJlYUF1dG9zaXplL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1Vuc3RhYmxlX1RyYXBGb2N1cy9VbnN0YWJsZV9UcmFwRm9jdXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVW5zdGFibGVfVHJhcEZvY3VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2ludGVybmFsL3N2Zy1pY29ucy9BcnJvd0Ryb3BEb3duLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3RyYW5zaXRpb25zL3V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy9jcmVhdGVTdmdJY29uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL2RlYm91bmNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL2dldFNjcm9sbGJhclNpemUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvaXNNdWlFbGVtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL293bmVyRG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvb3duZXJXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvdXNlQ29udHJvbGxlZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vbWVzc2FnZXMvLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwibWluV2lkdGgiLCJidWxsZXQiLCJkaXNwbGF5IiwibWFyZ2luIiwidHJhbnNmb3JtIiwidGl0bGUiLCJmb250U2l6ZSIsInBvcyIsIm1hcmdpbkJvdHRvbSIsIk1lc3NhZ2VJZCIsIm1lc3NhZ2UiLCJjbGFzc2VzIiwiY29sb3IiLCJub20iLCJkYXlqcyIsImNyZWF0ZWRBdCIsImZvcm1hdCIsIm1haWwiLCJ0ZWwiLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsIm1zZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUNnQztBQUMzRDtBQUNJO0FBQ1g7QUFDcUI7QUFDUjtBQUNTO0FBQ3ZDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxnRUFBZ0UsTUFBTTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUEsT0FBTztB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O0FBQUE7QUFBQSxLQUlDLE1BQUMsb0VBQUQ7QUFDQyxNQUFFLEVBQUMsZ0JBREo7QUFFQyxTQUFLLEVBQUMsVUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkQsRUFRQyxNQUFDLG9FQUFEO0FBQ0MsTUFBRSxFQUFDLGNBREo7QUFFQyxTQUFLLEVBQUMsUUFGUDtBQUdDLFdBQU8sRUFBQyxRQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRCxFQWFDLE1BQUMsb0VBQUQ7QUFDQyxNQUFFLEVBQUMsZ0JBREo7QUFFQyxTQUFLLEVBQUMsVUFGUDtBQUdDLFdBQU8sRUFBQyxVQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiRCxDQURELEVBb0JDLE1BQUMsZ0VBQUQ7QUFBUSxRQUFJLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXBCRCxDQWpERCxDQU5ELENBREQsQ0FERCxDQUREO0FBcUZBLENBeEZEOztHQUFNVSxTO1VBQ1daLFM7OztLQURYWSxTOztBQXNHU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vbWVzc2FnZXMvW2lkXS45ZTgxNmI3YzdhYWU2ZWE5MDM0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgcmVmVHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgSW5wdXRCYXNlIGZyb20gJy4uL0lucHV0QmFzZSc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICB2YXIgbGlnaHQgPSB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCc7XG4gIHZhciBib3R0b21MaW5lQ29sb3IgPSBsaWdodCA/ICdyZ2JhKDAsIDAsIDAsIDAuNDIpJyA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknO1xuICB2YXIgYmFja2dyb3VuZENvbG9yID0gbGlnaHQgPyAncmdiYSgwLCAwLCAwLCAwLjA5KScgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA5KSc7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxuICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IHRoZW1lLnNoYXBlLmJvcmRlclJhZGl1cyxcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnYmFja2dyb3VuZC1jb2xvcicsIHtcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXIsXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXRcbiAgICAgIH0pLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogbGlnaHQgPyAncmdiYSgwLCAwLCAwLCAwLjEzKScgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKScsXG4gICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XG4gICAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvclxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJyYkZm9jdXNlZCc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBsaWdodCA/ICdyZ2JhKDAsIDAsIDAsIDAuMDkpJyA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDkpJ1xuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGxpZ2h0ID8gJ3JnYmEoMCwgMCwgMCwgMC4xMiknIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMiknXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgY29sb3Igc2Vjb25kYXJ5LiAqL1xuICAgIGNvbG9yU2Vjb25kYXJ5OiB7XG4gICAgICAnJiR1bmRlcmxpbmU6YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVVbmRlcmxpbmU9e2ZhbHNlfWAuICovXG4gICAgdW5kZXJsaW5lOiB7XG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcIjJweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4pLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIC8vIERvaW5nIHRoZSBvdGhlciB3YXkgYXJvdW5kIGNyYXNoIG9uIElFIDExIFwiJydcIiBodHRwczovL2dpdGh1Yi5jb20vY3NzaW5qcy9qc3MvaXNzdWVzLzI0MlxuICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDApJyxcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd0cmFuc2Zvcm0nLCB7XG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXIsXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dFxuICAgICAgICB9KSxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnIC8vIFRyYW5zcGFyZW50IHRvIHRoZSBob3ZlciBzdHlsZS5cblxuICAgICAgfSxcbiAgICAgICcmJGZvY3VzZWQ6YWZ0ZXInOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgxKSdcbiAgICAgIH0sXG4gICAgICAnJiRlcnJvcjphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpbixcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJyAvLyBlcnJvciBpcyBhbHdheXMgdW5kZXJsaW5lZCBpbiByZWRcblxuICAgICAgfSxcbiAgICAgICcmOmJlZm9yZSc6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCBcIi5jb25jYXQoYm90dG9tTGluZUNvbG9yKSxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAvLyBEb2luZyB0aGUgb3RoZXIgd2F5IGFyb3VuZCBjcmFzaCBvbiBJRSAxMSBcIicnXCIgaHR0cHM6Ly9naXRodWIuY29tL2Nzc2luanMvanNzL2lzc3Vlcy8yNDJcbiAgICAgICAgY29udGVudDogJ1wiXFxcXDAwYTBcIicsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdib3JkZXItYm90dG9tLWNvbG9yJywge1xuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVyXG4gICAgICAgIH0pLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScgLy8gVHJhbnNwYXJlbnQgdG8gdGhlIGhvdmVyIHN0eWxlLlxuXG4gICAgICB9LFxuICAgICAgJyY6aG92ZXI6YmVmb3JlJzoge1xuICAgICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSlcbiAgICAgIH0sXG4gICAgICAnJiRkaXNhYmxlZDpiZWZvcmUnOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnZG90dGVkJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBjb21wb25lbnQgaXMgZm9jdXNlZC4gKi9cbiAgICBmb2N1c2VkOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVkPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc3RhcnRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGFkb3JuZWRTdGFydDoge1xuICAgICAgcGFkZGluZ0xlZnQ6IDEyXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGVuZEFkb3JubWVudGAgaXMgcHJvdmlkZWQuICovXG4gICAgYWRvcm5lZEVuZDoge1xuICAgICAgcGFkZGluZ1JpZ2h0OiAxMlxuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBlcnJvcj17dHJ1ZX1gLiAqL1xuICAgIGVycm9yOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG1hcmdpbj1cImRlbnNlXCJgLiAqL1xuICAgIG1hcmdpbkRlbnNlOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG11bHRpbGluZT17dHJ1ZX1gLiAqL1xuICAgIG11bHRpbGluZToge1xuICAgICAgcGFkZGluZzogJzI3cHggMTJweCAxMHB4JyxcbiAgICAgICcmJG1hcmdpbkRlbnNlJzoge1xuICAgICAgICBwYWRkaW5nVG9wOiAyMyxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogNlxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50LiAqL1xuICAgIGlucHV0OiB7XG4gICAgICBwYWRkaW5nOiAnMjdweCAxMnB4IDEwcHgnLFxuICAgICAgJyY6LXdlYmtpdC1hdXRvZmlsbCc6IHtcbiAgICAgICAgV2Via2l0Qm94U2hhZG93OiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyBudWxsIDogJzAgMCAwIDEwMHB4ICMyNjY3OTggaW5zZXQnLFxuICAgICAgICBXZWJraXRUZXh0RmlsbENvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyBudWxsIDogJyNmZmYnLFxuICAgICAgICBjYXJldENvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyBudWxsIDogJyNmZmYnLFxuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAnaW5oZXJpdCcsXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAnaW5oZXJpdCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgbWFyZ2luPVwiZGVuc2VcImAuICovXG4gICAgaW5wdXRNYXJnaW5EZW5zZToge1xuICAgICAgcGFkZGluZ1RvcDogMjMsXG4gICAgICBwYWRkaW5nQm90dG9tOiA2XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGlmIGluIGA8Rm9ybUNvbnRyb2wgaGlkZGVuTGFiZWwgLz5gLiAqL1xuICAgIGlucHV0SGlkZGVuTGFiZWw6IHtcbiAgICAgIHBhZGRpbmdUb3A6IDE4LFxuICAgICAgcGFkZGluZ0JvdHRvbTogMTksXG4gICAgICAnJiRpbnB1dE1hcmdpbkRlbnNlJzoge1xuICAgICAgICBwYWRkaW5nVG9wOiAxMCxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogMTFcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgbXVsdGlsaW5lPXt0cnVlfWAuICovXG4gICAgaW5wdXRNdWx0aWxpbmU6IHtcbiAgICAgIHBhZGRpbmc6IDBcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgc3RhcnRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGlucHV0QWRvcm5lZFN0YXJ0OiB7XG4gICAgICBwYWRkaW5nTGVmdDogMFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBlbmRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGlucHV0QWRvcm5lZEVuZDoge1xuICAgICAgcGFkZGluZ1JpZ2h0OiAwXG4gICAgfVxuICB9O1xufTtcbnZhciBGaWxsZWRJbnB1dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEZpbGxlZElucHV0KHByb3BzLCByZWYpIHtcbiAgdmFyIGRpc2FibGVVbmRlcmxpbmUgPSBwcm9wcy5kaXNhYmxlVW5kZXJsaW5lLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBfcHJvcHMkZnVsbFdpZHRoID0gcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgZnVsbFdpZHRoID0gX3Byb3BzJGZ1bGxXaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnVsbFdpZHRoLFxuICAgICAgX3Byb3BzJGlucHV0Q29tcG9uZW50ID0gcHJvcHMuaW5wdXRDb21wb25lbnQsXG4gICAgICBpbnB1dENvbXBvbmVudCA9IF9wcm9wcyRpbnB1dENvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2lucHV0JyA6IF9wcm9wcyRpbnB1dENvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRtdWx0aWxpbmUgPSBwcm9wcy5tdWx0aWxpbmUsXG4gICAgICBtdWx0aWxpbmUgPSBfcHJvcHMkbXVsdGlsaW5lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRtdWx0aWxpbmUsXG4gICAgICBfcHJvcHMkdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICB0eXBlID0gX3Byb3BzJHR5cGUgPT09IHZvaWQgMCA/ICd0ZXh0JyA6IF9wcm9wcyR0eXBlLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImRpc2FibGVVbmRlcmxpbmVcIiwgXCJjbGFzc2VzXCIsIFwiZnVsbFdpZHRoXCIsIFwiaW5wdXRDb21wb25lbnRcIiwgXCJtdWx0aWxpbmVcIiwgXCJ0eXBlXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRCYXNlLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NlczogX2V4dGVuZHMoe30sIGNsYXNzZXMsIHtcbiAgICAgIHJvb3Q6IGNsc3goY2xhc3Nlcy5yb290LCAhZGlzYWJsZVVuZGVybGluZSAmJiBjbGFzc2VzLnVuZGVybGluZSksXG4gICAgICB1bmRlcmxpbmU6IG51bGxcbiAgICB9KSxcbiAgICBmdWxsV2lkdGg6IGZ1bGxXaWR0aCxcbiAgICBpbnB1dENvbXBvbmVudDogaW5wdXRDb21wb25lbnQsXG4gICAgbXVsdGlsaW5lOiBtdWx0aWxpbmUsXG4gICAgcmVmOiByZWYsXG4gICAgdHlwZTogdHlwZVxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBGaWxsZWRJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGlzIHByb3AgaGVscHMgdXNlcnMgdG8gZmlsbCBmb3JtcyBmYXN0ZXIsIGVzcGVjaWFsbHkgb24gbW9iaWxlIGRldmljZXMuXG4gICAqIFRoZSBuYW1lIGNhbiBiZSBjb25mdXNpbmcsIGFzIGl0J3MgbW9yZSBsaWtlIGFuIGF1dG9maWxsLlxuICAgKiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgaXQgW2ZvbGxvd2luZyB0aGUgc3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybS1jb250cm9sLWluZnJhc3RydWN0dXJlLmh0bWwjYXV0b2ZpbGwpLlxuICAgKi9cbiAgYXV0b0NvbXBsZXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSBmb2N1c2VkIGR1cmluZyB0aGUgZmlyc3QgbW91bnQuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgYGlucHV0YCBlbGVtZW50IHZhbHVlLiBVc2Ugd2hlbiB0aGUgY29tcG9uZW50IGlzIG5vdCBjb250cm9sbGVkLlxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCBub3QgaGF2ZSBhbiB1bmRlcmxpbmUuXG4gICAqL1xuICBkaXNhYmxlVW5kZXJsaW5lOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5kIGBJbnB1dEFkb3JubWVudGAgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgZW5kQWRvcm5tZW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCBpbmRpY2F0ZSBhbiBlcnJvci4gVGhpcyBpcyBub3JtYWxseSBvYnRhaW5lZCB2aWEgY29udGV4dCBmcm9tXG4gICAqIEZvcm1Db250cm9sLlxuICAgKi9cbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cbiAgICovXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGlucHV0Q29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFtBdHRyaWJ1dGVzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjQXR0cmlidXRlcykgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUGFzcyBhIHJlZiB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRSZWY6IHJlZlR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGBkZW5zZWAsIHdpbGwgYWRqdXN0IHZlcnRpY2FsIHNwYWNpbmcuIFRoaXMgaXMgbm9ybWFsbHkgb2J0YWluZWQgdmlhIGNvbnRleHQgZnJvbVxuICAgKiBGb3JtQ29udHJvbC5cbiAgICovXG4gIG1hcmdpbjogUHJvcFR5cGVzLm9uZU9mKFsnZGVuc2UnLCAnbm9uZSddKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBhIHRleHRhcmVhIGVsZW1lbnQgd2lsbCBiZSByZW5kZXJlZC5cbiAgICovXG4gIG11bHRpbGluZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE5hbWUgYXR0cmlidXRlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIFlvdSBjYW4gcHVsbCBvdXQgdGhlIG5ldyB2YWx1ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC52YWx1ZWAgKHN0cmluZykuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBzaG9ydCBoaW50IGRpc3BsYXllZCBpbiB0aGUgaW5wdXQgYmVmb3JlIHRoZSB1c2VyIGVudGVycyBhIHZhbHVlLlxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEl0IHByZXZlbnRzIHRoZSB1c2VyIGZyb20gY2hhbmdpbmcgdGhlIHZhbHVlIG9mIHRoZSBmaWVsZFxuICAgKiAobm90IGZyb20gaW50ZXJhY3Rpbmcgd2l0aCB0aGUgZmllbGQpLlxuICAgKi9cbiAgcmVhZE9ubHk6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSByZXF1aXJlZC5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzTWF4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIFN0YXJ0IGBJbnB1dEFkb3JubWVudGAgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgc3RhcnRBZG9ybm1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUeXBlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuIEl0IHNob3VsZCBiZSBbYSB2YWxpZCBIVE1MNSBpbnB1dCB0eXBlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjRm9ybV8lM0NpbnB1dCUzRV90eXBlcykuXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudCwgcmVxdWlyZWQgZm9yIGEgY29udHJvbGxlZCBjb21wb25lbnQuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueVxufSA6IHZvaWQgMDtcbkZpbGxlZElucHV0Lm11aU5hbWUgPSAnSW5wdXQnO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUZpbGxlZElucHV0J1xufSkoRmlsbGVkSW5wdXQpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0ZpbGxlZElucHV0JzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBpc0ZpbGxlZCwgaXNBZG9ybmVkU3RhcnQgfSBmcm9tICcuLi9JbnB1dEJhc2UvdXRpbHMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5pbXBvcnQgaXNNdWlFbGVtZW50IGZyb20gJy4uL3V0aWxzL2lzTXVpRWxlbWVudCc7XG5pbXBvcnQgRm9ybUNvbnRyb2xDb250ZXh0IGZyb20gJy4vRm9ybUNvbnRyb2xDb250ZXh0JztcbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAvLyBSZXNldCBmaWVsZHNldCBkZWZhdWx0IHN0eWxlLlxuICAgIG1pbldpZHRoOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgbWFyZ2luOiAwLFxuICAgIGJvcmRlcjogMCxcbiAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyAvLyBGaXggYWxpZ25tZW50IGlzc3VlIG9uIFNhZmFyaS5cblxuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG1hcmdpbj1cIm5vcm1hbFwiYC4gKi9cbiAgbWFyZ2luTm9ybWFsOiB7XG4gICAgbWFyZ2luVG9wOiAxNixcbiAgICBtYXJnaW5Cb3R0b206IDhcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgbWFyZ2luRGVuc2U6IHtcbiAgICBtYXJnaW5Ub3A6IDgsXG4gICAgbWFyZ2luQm90dG9tOiA0XG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZnVsbFdpZHRoPXt0cnVlfWAuICovXG4gIGZ1bGxXaWR0aDoge1xuICAgIHdpZHRoOiAnMTAwJSdcbiAgfVxufTtcbi8qKlxuICogUHJvdmlkZXMgY29udGV4dCBzdWNoIGFzIGZpbGxlZC9mb2N1c2VkL2Vycm9yL3JlcXVpcmVkIGZvciBmb3JtIGlucHV0cy5cbiAqIFJlbHlpbmcgb24gdGhlIGNvbnRleHQgcHJvdmlkZXMgaGlnaCBmbGV4aWJpbGl0eSBhbmQgZW5zdXJlcyB0aGF0IHRoZSBzdGF0ZSBhbHdheXMgc3RheXNcbiAqIGNvbnNpc3RlbnQgYWNyb3NzIHRoZSBjaGlsZHJlbiBvZiB0aGUgYEZvcm1Db250cm9sYC5cbiAqIFRoaXMgY29udGV4dCBpcyB1c2VkIGJ5IHRoZSBmb2xsb3dpbmcgY29tcG9uZW50czpcbiAqXG4gKiAgLSBGb3JtTGFiZWxcbiAqICAtIEZvcm1IZWxwZXJUZXh0XG4gKiAgLSBJbnB1dFxuICogIC0gSW5wdXRMYWJlbFxuICpcbiAqIFlvdSBjYW4gZmluZCBvbmUgY29tcG9zaXRpb24gZXhhbXBsZSBiZWxvdyBhbmQgbW9yZSBnb2luZyB0byBbdGhlIGRlbW9zXSgvY29tcG9uZW50cy90ZXh0LWZpZWxkcy8jY29tcG9uZW50cykuXG4gKlxuICogYGBganN4XG4gKiA8Rm9ybUNvbnRyb2w+XG4gKiAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJteS1pbnB1dFwiPkVtYWlsIGFkZHJlc3M8L0lucHV0TGFiZWw+XG4gKiAgIDxJbnB1dCBpZD1cIm15LWlucHV0XCIgYXJpYS1kZXNjcmliZWRieT1cIm15LWhlbHBlci10ZXh0XCIgLz5cbiAqICAgPEZvcm1IZWxwZXJUZXh0IGlkPVwibXktaGVscGVyLXRleHRcIj5XZSdsbCBuZXZlciBzaGFyZSB5b3VyIGVtYWlsLjwvRm9ybUhlbHBlclRleHQ+XG4gKiA8L0Zvcm1Db250cm9sPlxuICogYGBgXG4gKlxuICog4pqg77iPT25seSBvbmUgaW5wdXQgY2FuIGJlIHVzZWQgd2l0aGluIGEgRm9ybUNvbnRyb2wuXG4gKi9cblxudmFyIEZvcm1Db250cm9sID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gRm9ybUNvbnRyb2wocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBjb2xvciA9IF9wcm9wcyRjb2xvciA9PT0gdm9pZCAwID8gJ3ByaW1hcnknIDogX3Byb3BzJGNvbG9yLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdkaXYnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzYWJsZWQgPSBfcHJvcHMkZGlzYWJsZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVkLFxuICAgICAgX3Byb3BzJGVycm9yID0gcHJvcHMuZXJyb3IsXG4gICAgICBlcnJvciA9IF9wcm9wcyRlcnJvciA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZXJyb3IsXG4gICAgICBfcHJvcHMkZnVsbFdpZHRoID0gcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgZnVsbFdpZHRoID0gX3Byb3BzJGZ1bGxXaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnVsbFdpZHRoLFxuICAgICAgdmlzdWFsbHlGb2N1c2VkID0gcHJvcHMuZm9jdXNlZCxcbiAgICAgIF9wcm9wcyRoaWRkZW5MYWJlbCA9IHByb3BzLmhpZGRlbkxhYmVsLFxuICAgICAgaGlkZGVuTGFiZWwgPSBfcHJvcHMkaGlkZGVuTGFiZWwgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGhpZGRlbkxhYmVsLFxuICAgICAgX3Byb3BzJG1hcmdpbiA9IHByb3BzLm1hcmdpbixcbiAgICAgIG1hcmdpbiA9IF9wcm9wcyRtYXJnaW4gPT09IHZvaWQgMCA/ICdub25lJyA6IF9wcm9wcyRtYXJnaW4sXG4gICAgICBfcHJvcHMkcmVxdWlyZWQgPSBwcm9wcy5yZXF1aXJlZCxcbiAgICAgIHJlcXVpcmVkID0gX3Byb3BzJHJlcXVpcmVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRyZXF1aXJlZCxcbiAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnc3RhbmRhcmQnIDogX3Byb3BzJHZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJjb21wb25lbnRcIiwgXCJkaXNhYmxlZFwiLCBcImVycm9yXCIsIFwiZnVsbFdpZHRoXCIsIFwiZm9jdXNlZFwiLCBcImhpZGRlbkxhYmVsXCIsIFwibWFyZ2luXCIsIFwicmVxdWlyZWRcIiwgXCJzaXplXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBXZSBuZWVkIHRvIGl0ZXJhdGUgdGhyb3VnaCB0aGUgY2hpbGRyZW4gYW5kIGZpbmQgdGhlIElucHV0IGluIG9yZGVyXG4gICAgLy8gdG8gZnVsbHkgc3VwcG9ydCBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuXG4gICAgdmFyIGluaXRpYWxBZG9ybmVkU3RhcnQgPSBmYWxzZTtcblxuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmICghaXNNdWlFbGVtZW50KGNoaWxkLCBbJ0lucHV0JywgJ1NlbGVjdCddKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpbnB1dCA9IGlzTXVpRWxlbWVudChjaGlsZCwgWydTZWxlY3QnXSkgPyBjaGlsZC5wcm9wcy5pbnB1dCA6IGNoaWxkO1xuXG4gICAgICAgIGlmIChpbnB1dCAmJiBpc0Fkb3JuZWRTdGFydChpbnB1dC5wcm9wcykpIHtcbiAgICAgICAgICBpbml0aWFsQWRvcm5lZFN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluaXRpYWxBZG9ybmVkU3RhcnQ7XG4gIH0pLFxuICAgICAgYWRvcm5lZFN0YXJ0ID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0QWRvcm5lZFN0YXJ0ID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUyID0gUmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIC8vIFdlIG5lZWQgdG8gaXRlcmF0ZSB0aHJvdWdoIHRoZSBjaGlsZHJlbiBhbmQgZmluZCB0aGUgSW5wdXQgaW4gb3JkZXJcbiAgICAvLyB0byBmdWxseSBzdXBwb3J0IHNlcnZlci1zaWRlIHJlbmRlcmluZy5cbiAgICB2YXIgaW5pdGlhbEZpbGxlZCA9IGZhbHNlO1xuXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKCFpc011aUVsZW1lbnQoY2hpbGQsIFsnSW5wdXQnLCAnU2VsZWN0J10pKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRmlsbGVkKGNoaWxkLnByb3BzLCB0cnVlKSkge1xuICAgICAgICAgIGluaXRpYWxGaWxsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5pdGlhbEZpbGxlZDtcbiAgfSksXG4gICAgICBmaWxsZWQgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0RmlsbGVkID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMyA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIF9mb2N1c2VkID0gX1JlYWN0JHVzZVN0YXRlM1swXSxcbiAgICAgIHNldEZvY3VzZWQgPSBfUmVhY3QkdXNlU3RhdGUzWzFdO1xuXG4gIHZhciBmb2N1c2VkID0gdmlzdWFsbHlGb2N1c2VkICE9PSB1bmRlZmluZWQgPyB2aXN1YWxseUZvY3VzZWQgOiBfZm9jdXNlZDtcblxuICBpZiAoZGlzYWJsZWQgJiYgZm9jdXNlZCkge1xuICAgIHNldEZvY3VzZWQoZmFsc2UpO1xuICB9XG5cbiAgdmFyIHJlZ2lzdGVyRWZmZWN0O1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgdmFyIHJlZ2lzdGVyZWRJbnB1dCA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG5cbiAgICByZWdpc3RlckVmZmVjdCA9IGZ1bmN0aW9uIHJlZ2lzdGVyRWZmZWN0KCkge1xuICAgICAgaWYgKHJlZ2lzdGVyZWRJbnB1dC5jdXJyZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogVGhlcmUgYXJlIG11bHRpcGxlIElucHV0QmFzZSBjb21wb25lbnRzIGluc2lkZSBhIEZvcm1Db250cm9sLicsICdUaGlzIGlzIG5vdCBzdXBwb3J0ZWQuIEl0IG1pZ2h0IGNhdXNlIGluZmluaXRlIHJlbmRlcmluZyBsb29wcy4nLCAnT25seSB1c2Ugb25lIElucHV0QmFzZS4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG5cbiAgICAgIHJlZ2lzdGVyZWRJbnB1dC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlZ2lzdGVyZWRJbnB1dC5jdXJyZW50ID0gZmFsc2U7XG4gICAgICB9O1xuICAgIH07XG4gIH1cblxuICB2YXIgb25GaWxsZWQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgc2V0RmlsbGVkKHRydWUpO1xuICB9LCBbXSk7XG4gIHZhciBvbkVtcHR5ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHNldEZpbGxlZChmYWxzZSk7XG4gIH0sIFtdKTtcbiAgdmFyIGNoaWxkQ29udGV4dCA9IHtcbiAgICBhZG9ybmVkU3RhcnQ6IGFkb3JuZWRTdGFydCxcbiAgICBzZXRBZG9ybmVkU3RhcnQ6IHNldEFkb3JuZWRTdGFydCxcbiAgICBjb2xvcjogY29sb3IsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIGVycm9yOiBlcnJvcixcbiAgICBmaWxsZWQ6IGZpbGxlZCxcbiAgICBmb2N1c2VkOiBmb2N1c2VkLFxuICAgIGZ1bGxXaWR0aDogZnVsbFdpZHRoLFxuICAgIGhpZGRlbkxhYmVsOiBoaWRkZW5MYWJlbCxcbiAgICBtYXJnaW46IChzaXplID09PSAnc21hbGwnID8gJ2RlbnNlJyA6IHVuZGVmaW5lZCkgfHwgbWFyZ2luLFxuICAgIG9uQmx1cjogZnVuY3Rpb24gb25CbHVyKCkge1xuICAgICAgc2V0Rm9jdXNlZChmYWxzZSk7XG4gICAgfSxcbiAgICBvbkVtcHR5OiBvbkVtcHR5LFxuICAgIG9uRmlsbGVkOiBvbkZpbGxlZCxcbiAgICBvbkZvY3VzOiBmdW5jdGlvbiBvbkZvY3VzKCkge1xuICAgICAgc2V0Rm9jdXNlZCh0cnVlKTtcbiAgICB9LFxuICAgIHJlZ2lzdGVyRWZmZWN0OiByZWdpc3RlckVmZmVjdCxcbiAgICByZXF1aXJlZDogcmVxdWlyZWQsXG4gICAgdmFyaWFudDogdmFyaWFudFxuICB9O1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRyb2xDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGNoaWxkQ29udGV4dFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIG1hcmdpbiAhPT0gJ25vbmUnICYmIGNsYXNzZXNbXCJtYXJnaW5cIi5jb25jYXQoY2FwaXRhbGl6ZShtYXJnaW4pKV0sIGZ1bGxXaWR0aCAmJiBjbGFzc2VzLmZ1bGxXaWR0aCksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBjaGlsZHJlbikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBGb3JtQ29udHJvbC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudHMgb2YgdGhlIGZvcm0gY29udHJvbC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsLCBpbnB1dCBhbmQgaGVscGVyIHRleHQgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiBhIGRpc2FibGVkIHN0YXRlLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCBzaG91bGQgYmUgZGlzcGxheWVkIGluIGFuIGVycm9yIHN0YXRlLlxuICAgKi9cbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjb21wb25lbnQgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gZm9jdXNlZCBzdGF0ZS5cbiAgICovXG4gIGZvY3VzZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjb21wb25lbnQgd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCB3aWxsIGJlIGhpZGRlbi5cbiAgICogVGhpcyBpcyB1c2VkIHRvIGluY3JlYXNlIGRlbnNpdHkgZm9yIGEgYEZpbGxlZElucHV0YC5cbiAgICogQmUgc3VyZSB0byBhZGQgYGFyaWEtbGFiZWxgIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBoaWRkZW5MYWJlbDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGBkZW5zZWAgb3IgYG5vcm1hbGAsIHdpbGwgYWRqdXN0IHZlcnRpY2FsIHNwYWNpbmcgb2YgdGhpcyBhbmQgY29udGFpbmVkIGNvbXBvbmVudHMuXG4gICAqL1xuICBtYXJnaW46IFByb3BUeXBlcy5vbmVPZihbJ2RlbnNlJywgJ25vbmUnLCAnbm9ybWFsJ10pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCB3aWxsIGluZGljYXRlIHRoYXQgdGhlIGlucHV0IGlzIHJlcXVpcmVkLlxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgdGV4dCBmaWVsZC5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ21lZGl1bScsICdzbWFsbCddKSxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZmlsbGVkJywgJ291dGxpbmVkJywgJ3N0YW5kYXJkJ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUZvcm1Db250cm9sJ1xufSkoRm9ybUNvbnRyb2wpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG52YXIgRm9ybUNvbnRyb2xDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBGb3JtQ29udHJvbENvbnRleHQuZGlzcGxheU5hbWUgPSAnRm9ybUNvbnRyb2xDb250ZXh0Jztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZvcm1Db250cm9sKCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChGb3JtQ29udHJvbENvbnRleHQpO1xufVxuZXhwb3J0IGRlZmF1bHQgRm9ybUNvbnRyb2xDb250ZXh0OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1Db250cm9sU3RhdGUoX3JlZikge1xuICB2YXIgcHJvcHMgPSBfcmVmLnByb3BzLFxuICAgICAgc3RhdGVzID0gX3JlZi5zdGF0ZXMsXG4gICAgICBtdWlGb3JtQ29udHJvbCA9IF9yZWYubXVpRm9ybUNvbnRyb2w7XG4gIHJldHVybiBzdGF0ZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHN0YXRlKSB7XG4gICAgYWNjW3N0YXRlXSA9IHByb3BzW3N0YXRlXTtcblxuICAgIGlmIChtdWlGb3JtQ29udHJvbCkge1xuICAgICAgaWYgKHR5cGVvZiBwcm9wc1tzdGF0ZV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGFjY1tzdGF0ZV0gPSBtdWlGb3JtQ29udHJvbFtzdGF0ZV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufSIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0Zvcm1Db250cm9sJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlRm9ybUNvbnRyb2wgfSBmcm9tICcuL3VzZUZvcm1Db250cm9sJzsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRm9ybUNvbnRyb2xDb250ZXh0IGZyb20gJy4vRm9ybUNvbnRyb2xDb250ZXh0JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcm1Db250cm9sKCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChGb3JtQ29udHJvbENvbnRleHQpO1xufSIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBmb3JtQ29udHJvbFN0YXRlIGZyb20gJy4uL0Zvcm1Db250cm9sL2Zvcm1Db250cm9sU3RhdGUnO1xuaW1wb3J0IHVzZUZvcm1Db250cm9sIGZyb20gJy4uL0Zvcm1Db250cm9sL3VzZUZvcm1Db250cm9sJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiBfZXh0ZW5kcyh7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeVxuICAgIH0sIHRoZW1lLnR5cG9ncmFwaHkuY2FwdGlvbiwge1xuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICBtYXJnaW5Ub3A6IDMsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5kaXNhYmxlZFxuICAgICAgfSxcbiAgICAgICcmJGVycm9yJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluXG4gICAgICB9XG4gICAgfSksXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBlcnJvcj17dHJ1ZX1gLiAqL1xuICAgIGVycm9yOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVkPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgbWFyZ2luPVwiZGVuc2VcImAuICovXG4gICAgbWFyZ2luRGVuc2U6IHtcbiAgICAgIG1hcmdpblRvcDogNFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiZmlsbGVkXCJgIG9yIGB2YXJpYW50PVwib3V0bGluZWRcImAuICovXG4gICAgY29udGFpbmVkOiB7XG4gICAgICBtYXJnaW5MZWZ0OiAxNCxcbiAgICAgIG1hcmdpblJpZ2h0OiAxNFxuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmb2N1c2VkPXt0cnVlfWAuICovXG4gICAgZm9jdXNlZDoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmaWxsZWQ9e3RydWV9YC4gKi9cbiAgICBmaWxsZWQ6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgcmVxdWlyZWQ9e3RydWV9YC4gKi9cbiAgICByZXF1aXJlZDoge31cbiAgfTtcbn07XG52YXIgRm9ybUhlbHBlclRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBGb3JtSGVscGVyVGV4dChwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ3AnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBlcnJvciA9IHByb3BzLmVycm9yLFxuICAgICAgZmlsbGVkID0gcHJvcHMuZmlsbGVkLFxuICAgICAgZm9jdXNlZCA9IHByb3BzLmZvY3VzZWQsXG4gICAgICBtYXJnaW4gPSBwcm9wcy5tYXJnaW4sXG4gICAgICByZXF1aXJlZCA9IHByb3BzLnJlcXVpcmVkLFxuICAgICAgdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29tcG9uZW50XCIsIFwiZGlzYWJsZWRcIiwgXCJlcnJvclwiLCBcImZpbGxlZFwiLCBcImZvY3VzZWRcIiwgXCJtYXJnaW5cIiwgXCJyZXF1aXJlZFwiLCBcInZhcmlhbnRcIl0pO1xuXG4gIHZhciBtdWlGb3JtQ29udHJvbCA9IHVzZUZvcm1Db250cm9sKCk7XG4gIHZhciBmY3MgPSBmb3JtQ29udHJvbFN0YXRlKHtcbiAgICBwcm9wczogcHJvcHMsXG4gICAgbXVpRm9ybUNvbnRyb2w6IG11aUZvcm1Db250cm9sLFxuICAgIHN0YXRlczogWyd2YXJpYW50JywgJ21hcmdpbicsICdkaXNhYmxlZCcsICdlcnJvcicsICdmaWxsZWQnLCAnZm9jdXNlZCcsICdyZXF1aXJlZCddXG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgKGZjcy52YXJpYW50ID09PSAnZmlsbGVkJyB8fCBmY3MudmFyaWFudCA9PT0gJ291dGxpbmVkJykgJiYgY2xhc3Nlcy5jb250YWluZWQsIGNsYXNzTmFtZSwgZmNzLmRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQsIGZjcy5lcnJvciAmJiBjbGFzc2VzLmVycm9yLCBmY3MuZmlsbGVkICYmIGNsYXNzZXMuZmlsbGVkLCBmY3MuZm9jdXNlZCAmJiBjbGFzc2VzLmZvY3VzZWQsIGZjcy5yZXF1aXJlZCAmJiBjbGFzc2VzLnJlcXVpcmVkLCBmY3MubWFyZ2luID09PSAnZGVuc2UnICYmIGNsYXNzZXMubWFyZ2luRGVuc2UpLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSwgY2hpbGRyZW4gPT09ICcgJyA/XG4gIC8qI19fUFVSRV9fKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRhbmdlclxuICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgIF9faHRtbDogJyYjODIwMzsnXG4gICAgfVxuICB9KSA6IGNoaWxkcmVuKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gRm9ybUhlbHBlclRleHQucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogSWYgYCcgJ2AgaXMgcHJvdmlkZWQsIHRoZSBjb21wb25lbnQgcmVzZXJ2ZXMgb25lIGxpbmUgaGVpZ2h0IGZvciBkaXNwbGF5aW5nIGEgZnV0dXJlIG1lc3NhZ2UuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaGVscGVyIHRleHQgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiBhIGRpc2FibGVkIHN0YXRlLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGhlbHBlciB0ZXh0IHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gYW4gZXJyb3Igc3RhdGUuXG4gICAqL1xuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGhlbHBlciB0ZXh0IHNob3VsZCB1c2UgZmlsbGVkIGNsYXNzZXMga2V5LlxuICAgKi9cbiAgZmlsbGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaGVscGVyIHRleHQgc2hvdWxkIHVzZSBmb2N1c2VkIGNsYXNzZXMga2V5LlxuICAgKi9cbiAgZm9jdXNlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGBkZW5zZWAsIHdpbGwgYWRqdXN0IHZlcnRpY2FsIHNwYWNpbmcuIFRoaXMgaXMgbm9ybWFsbHkgb2J0YWluZWQgdmlhIGNvbnRleHQgZnJvbVxuICAgKiBGb3JtQ29udHJvbC5cbiAgICovXG4gIG1hcmdpbjogUHJvcFR5cGVzLm9uZU9mKFsnZGVuc2UnXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGhlbHBlciB0ZXh0IHNob3VsZCB1c2UgcmVxdWlyZWQgY2xhc3NlcyBrZXkuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2ZpbGxlZCcsICdvdXRsaW5lZCcsICdzdGFuZGFyZCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlGb3JtSGVscGVyVGV4dCdcbn0pKEZvcm1IZWxwZXJUZXh0KTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Gb3JtSGVscGVyVGV4dCc7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IGZvcm1Db250cm9sU3RhdGUgZnJvbSAnLi4vRm9ybUNvbnRyb2wvZm9ybUNvbnRyb2xTdGF0ZSc7XG5pbXBvcnQgdXNlRm9ybUNvbnRyb2wgZnJvbSAnLi4vRm9ybUNvbnRyb2wvdXNlRm9ybUNvbnRyb2wnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDogX2V4dGVuZHMoe1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnlcbiAgICB9LCB0aGVtZS50eXBvZ3JhcGh5LmJvZHkxLCB7XG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgICcmJGZvY3VzZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LmRpc2FibGVkXG4gICAgICB9LFxuICAgICAgJyYkZXJyb3InOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW5cbiAgICAgIH1cbiAgICB9KSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIGNvbG9yIGlzIHNlY29uZGFyeS4gKi9cbiAgICBjb2xvclNlY29uZGFyeToge1xuICAgICAgJyYkZm9jdXNlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZm9jdXNlZD17dHJ1ZX1gLiAqL1xuICAgIGZvY3VzZWQ6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZWQ9e3RydWV9YC4gKi9cbiAgICBkaXNhYmxlZDoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBlcnJvcj17dHJ1ZX1gLiAqL1xuICAgIGVycm9yOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGZpbGxlZD17dHJ1ZX1gLiAqL1xuICAgIGZpbGxlZDoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGByZXF1aXJlZD17dHJ1ZX1gLiAqL1xuICAgIHJlcXVpcmVkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBhc3RlcmlzayBlbGVtZW50LiAqL1xuICAgIGFzdGVyaXNrOiB7XG4gICAgICAnJiRlcnJvcic6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpblxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG52YXIgRm9ybUxhYmVsID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gRm9ybUxhYmVsKHByb3BzLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2xhYmVsJyA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZXJyb3IgPSBwcm9wcy5lcnJvcixcbiAgICAgIGZpbGxlZCA9IHByb3BzLmZpbGxlZCxcbiAgICAgIGZvY3VzZWQgPSBwcm9wcy5mb2N1c2VkLFxuICAgICAgcmVxdWlyZWQgPSBwcm9wcy5yZXF1aXJlZCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb2xvclwiLCBcImNvbXBvbmVudFwiLCBcImRpc2FibGVkXCIsIFwiZXJyb3JcIiwgXCJmaWxsZWRcIiwgXCJmb2N1c2VkXCIsIFwicmVxdWlyZWRcIl0pO1xuXG4gIHZhciBtdWlGb3JtQ29udHJvbCA9IHVzZUZvcm1Db250cm9sKCk7XG4gIHZhciBmY3MgPSBmb3JtQ29udHJvbFN0YXRlKHtcbiAgICBwcm9wczogcHJvcHMsXG4gICAgbXVpRm9ybUNvbnRyb2w6IG11aUZvcm1Db250cm9sLFxuICAgIHN0YXRlczogWydjb2xvcicsICdyZXF1aXJlZCcsICdmb2N1c2VkJywgJ2Rpc2FibGVkJywgJ2Vycm9yJywgJ2ZpbGxlZCddXG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3Nlc1tcImNvbG9yXCIuY29uY2F0KGNhcGl0YWxpemUoZmNzLmNvbG9yIHx8ICdwcmltYXJ5JykpXSwgY2xhc3NOYW1lLCBmY3MuZGlzYWJsZWQgJiYgY2xhc3Nlcy5kaXNhYmxlZCwgZmNzLmVycm9yICYmIGNsYXNzZXMuZXJyb3IsIGZjcy5maWxsZWQgJiYgY2xhc3Nlcy5maWxsZWQsIGZjcy5mb2N1c2VkICYmIGNsYXNzZXMuZm9jdXNlZCwgZmNzLnJlcXVpcmVkICYmIGNsYXNzZXMucmVxdWlyZWQpLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSwgY2hpbGRyZW4sIGZjcy5yZXF1aXJlZCAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5hc3RlcmlzaywgZmNzLmVycm9yICYmIGNsYXNzZXMuZXJyb3IpXG4gIH0sIFwiXFx1MjAwOVwiLCAnKicpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gRm9ybUxhYmVsLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGNvbXBvbmVudC4gSXQgc3VwcG9ydHMgdGhvc2UgdGhlbWUgY29sb3JzIHRoYXQgbWFrZSBzZW5zZSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCBzaG91bGQgYmUgZGlzcGxheWVkIGluIGEgZGlzYWJsZWQgc3RhdGUuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gYW4gZXJyb3Igc3RhdGUuXG4gICAqL1xuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsIHNob3VsZCB1c2UgZmlsbGVkIGNsYXNzZXMga2V5LlxuICAgKi9cbiAgZmlsbGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgb2YgdGhpcyBsYWJlbCBpcyBmb2N1c2VkICh1c2VkIGJ5IGBGb3JtR3JvdXBgIGNvbXBvbmVudHMpLlxuICAgKi9cbiAgZm9jdXNlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsIHdpbGwgaW5kaWNhdGUgdGhhdCB0aGUgaW5wdXQgaXMgcmVxdWlyZWQuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2xcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpRm9ybUxhYmVsJ1xufSkoRm9ybUxhYmVsKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Gb3JtTGFiZWwnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCB1c2VUaGVtZSBmcm9tICcuLi9zdHlsZXMvdXNlVGhlbWUnO1xuaW1wb3J0IHsgcmVmbG93LCBnZXRUcmFuc2l0aW9uUHJvcHMgfSBmcm9tICcuLi90cmFuc2l0aW9ucy91dGlscyc7XG5pbXBvcnQgdXNlRm9ya1JlZiBmcm9tICcuLi91dGlscy91c2VGb3JrUmVmJztcblxuZnVuY3Rpb24gZ2V0U2NhbGUodmFsdWUpIHtcbiAgcmV0dXJuIFwic2NhbGUoXCIuY29uY2F0KHZhbHVlLCBcIiwgXCIpLmNvbmNhdChNYXRoLnBvdyh2YWx1ZSwgMiksIFwiKVwiKTtcbn1cblxudmFyIHN0eWxlcyA9IHtcbiAgZW50ZXJpbmc6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zZm9ybTogZ2V0U2NhbGUoMSlcbiAgfSxcbiAgZW50ZXJlZDoge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiAnbm9uZSdcbiAgfVxufTtcbi8qKlxuICogVGhlIEdyb3cgdHJhbnNpdGlvbiBpcyB1c2VkIGJ5IHRoZSBbVG9vbHRpcF0oL2NvbXBvbmVudHMvdG9vbHRpcHMvKSBhbmRcbiAqIFtQb3BvdmVyXSgvY29tcG9uZW50cy9wb3BvdmVyLykgY29tcG9uZW50cy5cbiAqIEl0IHVzZXMgW3JlYWN0LXRyYW5zaXRpb24tZ3JvdXBdKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXApIGludGVybmFsbHkuXG4gKi9cblxudmFyIEdyb3cgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBHcm93KHByb3BzLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBfcHJvcHMkZGlzYWJsZVN0cmljdE0gPSBwcm9wcy5kaXNhYmxlU3RyaWN0TW9kZUNvbXBhdCxcbiAgICAgIGRpc2FibGVTdHJpY3RNb2RlQ29tcGF0ID0gX3Byb3BzJGRpc2FibGVTdHJpY3RNID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlU3RyaWN0TSxcbiAgICAgIGluUHJvcCA9IHByb3BzLmluLFxuICAgICAgb25FbnRlciA9IHByb3BzLm9uRW50ZXIsXG4gICAgICBvbkVudGVyZWQgPSBwcm9wcy5vbkVudGVyZWQsXG4gICAgICBvbkVudGVyaW5nID0gcHJvcHMub25FbnRlcmluZyxcbiAgICAgIG9uRXhpdCA9IHByb3BzLm9uRXhpdCxcbiAgICAgIG9uRXhpdGVkID0gcHJvcHMub25FeGl0ZWQsXG4gICAgICBvbkV4aXRpbmcgPSBwcm9wcy5vbkV4aXRpbmcsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgX3Byb3BzJHRpbWVvdXQgPSBwcm9wcy50aW1lb3V0LFxuICAgICAgdGltZW91dCA9IF9wcm9wcyR0aW1lb3V0ID09PSB2b2lkIDAgPyAnYXV0bycgOiBfcHJvcHMkdGltZW91dCxcbiAgICAgIF9wcm9wcyRUcmFuc2l0aW9uQ29tcCA9IHByb3BzLlRyYW5zaXRpb25Db21wb25lbnQsXG4gICAgICBUcmFuc2l0aW9uQ29tcG9uZW50ID0gX3Byb3BzJFRyYW5zaXRpb25Db21wID09PSB2b2lkIDAgPyBUcmFuc2l0aW9uIDogX3Byb3BzJFRyYW5zaXRpb25Db21wLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiZGlzYWJsZVN0cmljdE1vZGVDb21wYXRcIiwgXCJpblwiLCBcIm9uRW50ZXJcIiwgXCJvbkVudGVyZWRcIiwgXCJvbkVudGVyaW5nXCIsIFwib25FeGl0XCIsIFwib25FeGl0ZWRcIiwgXCJvbkV4aXRpbmdcIiwgXCJzdHlsZVwiLCBcInRpbWVvdXRcIiwgXCJUcmFuc2l0aW9uQ29tcG9uZW50XCJdKTtcblxuICB2YXIgdGltZXIgPSBSZWFjdC51c2VSZWYoKTtcbiAgdmFyIGF1dG9UaW1lb3V0ID0gUmVhY3QudXNlUmVmKCk7XG4gIHZhciB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIHZhciBlbmFibGVTdHJpY3RNb2RlQ29tcGF0ID0gdGhlbWUudW5zdGFibGVfc3RyaWN0TW9kZSAmJiAhZGlzYWJsZVN0cmljdE1vZGVDb21wYXQ7XG4gIHZhciBub2RlUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgZm9yZWlnblJlZiA9IHVzZUZvcmtSZWYoY2hpbGRyZW4ucmVmLCByZWYpO1xuICB2YXIgaGFuZGxlUmVmID0gdXNlRm9ya1JlZihlbmFibGVTdHJpY3RNb2RlQ29tcGF0ID8gbm9kZVJlZiA6IHVuZGVmaW5lZCwgZm9yZWlnblJlZik7XG5cbiAgdmFyIG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2sgPSBmdW5jdGlvbiBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChub2RlT3JBcHBlYXJpbmcsIG1heWJlQXBwZWFyaW5nKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF9yZWYgPSBlbmFibGVTdHJpY3RNb2RlQ29tcGF0ID8gW25vZGVSZWYuY3VycmVudCwgbm9kZU9yQXBwZWFyaW5nXSA6IFtub2RlT3JBcHBlYXJpbmcsIG1heWJlQXBwZWFyaW5nXSxcbiAgICAgICAgICAgIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgICAgICBub2RlID0gX3JlZjJbMF0sXG4gICAgICAgICAgICBpc0FwcGVhcmluZyA9IF9yZWYyWzFdOyAvLyBvbkVudGVyWHh4IGFuZCBvbkV4aXRYeHggY2FsbGJhY2tzIGhhdmUgYSBkaWZmZXJlbnQgYXJndW1lbnRzLmxlbmd0aCB2YWx1ZS5cblxuXG4gICAgICAgIGlmIChpc0FwcGVhcmluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY2FsbGJhY2sobm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2sobm9kZSwgaXNBcHBlYXJpbmcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgaGFuZGxlRW50ZXJpbmcgPSBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrKG9uRW50ZXJpbmcpO1xuICB2YXIgaGFuZGxlRW50ZXIgPSBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrKGZ1bmN0aW9uIChub2RlLCBpc0FwcGVhcmluZykge1xuICAgIHJlZmxvdyhub2RlKTsgLy8gU28gdGhlIGFuaW1hdGlvbiBhbHdheXMgc3RhcnQgZnJvbSB0aGUgc3RhcnQuXG5cbiAgICB2YXIgX2dldFRyYW5zaXRpb25Qcm9wcyA9IGdldFRyYW5zaXRpb25Qcm9wcyh7XG4gICAgICBzdHlsZTogc3R5bGUsXG4gICAgICB0aW1lb3V0OiB0aW1lb3V0XG4gICAgfSwge1xuICAgICAgbW9kZTogJ2VudGVyJ1xuICAgIH0pLFxuICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSBfZ2V0VHJhbnNpdGlvblByb3BzLmR1cmF0aW9uLFxuICAgICAgICBkZWxheSA9IF9nZXRUcmFuc2l0aW9uUHJvcHMuZGVsYXk7XG5cbiAgICB2YXIgZHVyYXRpb247XG5cbiAgICBpZiAodGltZW91dCA9PT0gJ2F1dG8nKSB7XG4gICAgICBkdXJhdGlvbiA9IHRoZW1lLnRyYW5zaXRpb25zLmdldEF1dG9IZWlnaHREdXJhdGlvbihub2RlLmNsaWVudEhlaWdodCk7XG4gICAgICBhdXRvVGltZW91dC5jdXJyZW50ID0gZHVyYXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgIH1cblxuICAgIG5vZGUuc3R5bGUudHJhbnNpdGlvbiA9IFt0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknLCB7XG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBkZWxheTogZGVsYXlcbiAgICB9KSwgdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd0cmFuc2Zvcm0nLCB7XG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24gKiAwLjY2NixcbiAgICAgIGRlbGF5OiBkZWxheVxuICAgIH0pXS5qb2luKCcsJyk7XG5cbiAgICBpZiAob25FbnRlcikge1xuICAgICAgb25FbnRlcihub2RlLCBpc0FwcGVhcmluZyk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGhhbmRsZUVudGVyZWQgPSBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrKG9uRW50ZXJlZCk7XG4gIHZhciBoYW5kbGVFeGl0aW5nID0gbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayhvbkV4aXRpbmcpO1xuICB2YXIgaGFuZGxlRXhpdCA9IG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2soZnVuY3Rpb24gKG5vZGUpIHtcbiAgICB2YXIgX2dldFRyYW5zaXRpb25Qcm9wczIgPSBnZXRUcmFuc2l0aW9uUHJvcHMoe1xuICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgdGltZW91dDogdGltZW91dFxuICAgIH0sIHtcbiAgICAgIG1vZGU6ICdleGl0J1xuICAgIH0pLFxuICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSBfZ2V0VHJhbnNpdGlvblByb3BzMi5kdXJhdGlvbixcbiAgICAgICAgZGVsYXkgPSBfZ2V0VHJhbnNpdGlvblByb3BzMi5kZWxheTtcblxuICAgIHZhciBkdXJhdGlvbjtcblxuICAgIGlmICh0aW1lb3V0ID09PSAnYXV0bycpIHtcbiAgICAgIGR1cmF0aW9uID0gdGhlbWUudHJhbnNpdGlvbnMuZ2V0QXV0b0hlaWdodER1cmF0aW9uKG5vZGUuY2xpZW50SGVpZ2h0KTtcbiAgICAgIGF1dG9UaW1lb3V0LmN1cnJlbnQgPSBkdXJhdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgZHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb247XG4gICAgfVxuXG4gICAgbm9kZS5zdHlsZS50cmFuc2l0aW9uID0gW3RoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScsIHtcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIGRlbGF5OiBkZWxheVxuICAgIH0pLCB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3RyYW5zZm9ybScsIHtcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiAqIDAuNjY2LFxuICAgICAgZGVsYXk6IGRlbGF5IHx8IGR1cmF0aW9uICogMC4zMzNcbiAgICB9KV0uam9pbignLCcpO1xuICAgIG5vZGUuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9IGdldFNjYWxlKDAuNzUpO1xuXG4gICAgaWYgKG9uRXhpdCkge1xuICAgICAgb25FeGl0KG5vZGUpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBoYW5kbGVFeGl0ZWQgPSBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrKG9uRXhpdGVkKTtcblxuICB2YXIgYWRkRW5kTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRFbmRMaXN0ZW5lcihub2RlT3JOZXh0LCBtYXliZU5leHQpIHtcbiAgICB2YXIgbmV4dCA9IGVuYWJsZVN0cmljdE1vZGVDb21wYXQgPyBub2RlT3JOZXh0IDogbWF5YmVOZXh0O1xuXG4gICAgaWYgKHRpbWVvdXQgPT09ICdhdXRvJykge1xuICAgICAgdGltZXIuY3VycmVudCA9IHNldFRpbWVvdXQobmV4dCwgYXV0b1RpbWVvdXQuY3VycmVudCB8fCAwKTtcbiAgICB9XG4gIH07XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyLmN1cnJlbnQpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Db21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBhcHBlYXI6IHRydWUsXG4gICAgaW46IGluUHJvcCxcbiAgICBub2RlUmVmOiBlbmFibGVTdHJpY3RNb2RlQ29tcGF0ID8gbm9kZVJlZiA6IHVuZGVmaW5lZCxcbiAgICBvbkVudGVyOiBoYW5kbGVFbnRlcixcbiAgICBvbkVudGVyZWQ6IGhhbmRsZUVudGVyZWQsXG4gICAgb25FbnRlcmluZzogaGFuZGxlRW50ZXJpbmcsXG4gICAgb25FeGl0OiBoYW5kbGVFeGl0LFxuICAgIG9uRXhpdGVkOiBoYW5kbGVFeGl0ZWQsXG4gICAgb25FeGl0aW5nOiBoYW5kbGVFeGl0aW5nLFxuICAgIGFkZEVuZExpc3RlbmVyOiBhZGRFbmRMaXN0ZW5lcixcbiAgICB0aW1lb3V0OiB0aW1lb3V0ID09PSAnYXV0bycgPyBudWxsIDogdGltZW91dFxuICB9LCBvdGhlciksIGZ1bmN0aW9uIChzdGF0ZSwgY2hpbGRQcm9wcykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCBfZXh0ZW5kcyh7XG4gICAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB0cmFuc2Zvcm06IGdldFNjYWxlKDAuNzUpLFxuICAgICAgICB2aXNpYmlsaXR5OiBzdGF0ZSA9PT0gJ2V4aXRlZCcgJiYgIWluUHJvcCA/ICdoaWRkZW4nIDogdW5kZWZpbmVkXG4gICAgICB9LCBzdHlsZXNbc3RhdGVdLCBzdHlsZSwgY2hpbGRyZW4ucHJvcHMuc3R5bGUpLFxuICAgICAgcmVmOiBoYW5kbGVSZWZcbiAgICB9LCBjaGlsZFByb3BzKSk7XG4gIH0pO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBHcm93LnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIEEgc2luZ2xlIGNoaWxkIGNvbnRlbnQgZWxlbWVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudCxcblxuICAvKipcbiAgICogRW5hYmxlIHRoaXMgcHJvcCBpZiB5b3UgZW5jb3VudGVyICdGdW5jdGlvbiBjb21wb25lbnRzIGNhbm5vdCBiZSBnaXZlbiByZWZzJyxcbiAgICogdXNlIGB1bnN0YWJsZV9jcmVhdGVTdHJpY3RNb2RlVGhlbWVgLFxuICAgKiBhbmQgY2FuJ3QgZm9yd2FyZCB0aGUgcmVmIGluIHRoZSBjaGlsZCBjb21wb25lbnQuXG4gICAqL1xuICBkaXNhYmxlU3RyaWN0TW9kZUNvbXBhdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgc2hvdyB0aGUgY29tcG9uZW50OyB0cmlnZ2VycyB0aGUgZW50ZXIgb3IgZXhpdCBhbmltYXRpb24uXG4gICAqL1xuICBpbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogVGhlIGR1cmF0aW9uIGZvciB0aGUgdHJhbnNpdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBZb3UgbWF5IHNwZWNpZnkgYSBzaW5nbGUgdGltZW91dCBmb3IgYWxsIHRyYW5zaXRpb25zLCBvciBpbmRpdmlkdWFsbHkgd2l0aCBhbiBvYmplY3QuXG4gICAqXG4gICAqIFNldCB0byAnYXV0bycgdG8gYXV0b21hdGljYWxseSBjYWxjdWxhdGUgdHJhbnNpdGlvbiB0aW1lIGJhc2VkIG9uIGhlaWdodC5cbiAgICovXG4gIHRpbWVvdXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXBwZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGVudGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGV4aXQ6IFByb3BUeXBlcy5udW1iZXJcbiAgfSldKVxufSA6IHZvaWQgMDtcbkdyb3cubXVpU3VwcG9ydEF1dG8gPSB0cnVlO1xuZXhwb3J0IGRlZmF1bHQgR3JvdzsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Hcm93JzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyByZWZUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBJbnB1dEJhc2UgZnJvbSAnLi4vSW5wdXRCYXNlJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHZhciBsaWdodCA9IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JztcbiAgdmFyIGJvdHRvbUxpbmVDb2xvciA9IGxpZ2h0ID8gJ3JnYmEoMCwgMCwgMCwgMC40MiknIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSc7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBjb21wb25lbnQgaXMgYSBkZXNjZW5kYW50IG9mIGBGb3JtQ29udHJvbGAuICovXG4gICAgZm9ybUNvbnRyb2w6IHtcbiAgICAgICdsYWJlbCArICYnOiB7XG4gICAgICAgIG1hcmdpblRvcDogMTZcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgY29tcG9uZW50IGlzIGZvY3VzZWQuICovXG4gICAgZm9jdXNlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlZD17dHJ1ZX1gLiAqL1xuICAgIGRpc2FibGVkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgY29sb3Igc2Vjb25kYXJ5LiAqL1xuICAgIGNvbG9yU2Vjb25kYXJ5OiB7XG4gICAgICAnJiR1bmRlcmxpbmU6YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVVbmRlcmxpbmU9e2ZhbHNlfWAuICovXG4gICAgdW5kZXJsaW5lOiB7XG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcIjJweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4pLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIC8vIERvaW5nIHRoZSBvdGhlciB3YXkgYXJvdW5kIGNyYXNoIG9uIElFIDExIFwiJydcIiBodHRwczovL2dpdGh1Yi5jb20vY3NzaW5qcy9qc3MvaXNzdWVzLzI0MlxuICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDApJyxcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd0cmFuc2Zvcm0nLCB7XG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXIsXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dFxuICAgICAgICB9KSxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnIC8vIFRyYW5zcGFyZW50IHRvIHRoZSBob3ZlciBzdHlsZS5cblxuICAgICAgfSxcbiAgICAgICcmJGZvY3VzZWQ6YWZ0ZXInOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgxKSdcbiAgICAgIH0sXG4gICAgICAnJiRlcnJvcjphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpbixcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJyAvLyBlcnJvciBpcyBhbHdheXMgdW5kZXJsaW5lZCBpbiByZWRcblxuICAgICAgfSxcbiAgICAgICcmOmJlZm9yZSc6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCBcIi5jb25jYXQoYm90dG9tTGluZUNvbG9yKSxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAvLyBEb2luZyB0aGUgb3RoZXIgd2F5IGFyb3VuZCBjcmFzaCBvbiBJRSAxMSBcIicnXCIgaHR0cHM6Ly9naXRodWIuY29tL2Nzc2luanMvanNzL2lzc3Vlcy8yNDJcbiAgICAgICAgY29udGVudDogJ1wiXFxcXDAwYTBcIicsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdib3JkZXItYm90dG9tLWNvbG9yJywge1xuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVyXG4gICAgICAgIH0pLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScgLy8gVHJhbnNwYXJlbnQgdG8gdGhlIGhvdmVyIHN0eWxlLlxuXG4gICAgICB9LFxuICAgICAgJyY6aG92ZXI6bm90KCRkaXNhYmxlZCk6YmVmb3JlJzoge1xuICAgICAgICBib3JkZXJCb3R0b206IFwiMnB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSksXG4gICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XG4gICAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIFwiLmNvbmNhdChib3R0b21MaW5lQ29sb3IpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnJiRkaXNhYmxlZDpiZWZvcmUnOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnZG90dGVkJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBlcnJvcj17dHJ1ZX1gLiAqL1xuICAgIGVycm9yOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG1hcmdpbj1cImRlbnNlXCJgLiAqL1xuICAgIG1hcmdpbkRlbnNlOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG11bHRpbGluZT17dHJ1ZX1gLiAqL1xuICAgIG11bHRpbGluZToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmdWxsV2lkdGg9e3RydWV9YC4gKi9cbiAgICBmdWxsV2lkdGg6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC4gKi9cbiAgICBpbnB1dDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgICBpbnB1dE1hcmdpbkRlbnNlOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG11bHRpbGluZT17dHJ1ZX1gLiAqL1xuICAgIGlucHV0TXVsdGlsaW5lOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYHR5cGU9XCJzZWFyY2hcImAuICovXG4gICAgaW5wdXRUeXBlU2VhcmNoOiB7fVxuICB9O1xufTtcbnZhciBJbnB1dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIElucHV0KHByb3BzLCByZWYpIHtcbiAgdmFyIGRpc2FibGVVbmRlcmxpbmUgPSBwcm9wcy5kaXNhYmxlVW5kZXJsaW5lLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBfcHJvcHMkZnVsbFdpZHRoID0gcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgZnVsbFdpZHRoID0gX3Byb3BzJGZ1bGxXaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnVsbFdpZHRoLFxuICAgICAgX3Byb3BzJGlucHV0Q29tcG9uZW50ID0gcHJvcHMuaW5wdXRDb21wb25lbnQsXG4gICAgICBpbnB1dENvbXBvbmVudCA9IF9wcm9wcyRpbnB1dENvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2lucHV0JyA6IF9wcm9wcyRpbnB1dENvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRtdWx0aWxpbmUgPSBwcm9wcy5tdWx0aWxpbmUsXG4gICAgICBtdWx0aWxpbmUgPSBfcHJvcHMkbXVsdGlsaW5lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRtdWx0aWxpbmUsXG4gICAgICBfcHJvcHMkdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICB0eXBlID0gX3Byb3BzJHR5cGUgPT09IHZvaWQgMCA/ICd0ZXh0JyA6IF9wcm9wcyR0eXBlLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImRpc2FibGVVbmRlcmxpbmVcIiwgXCJjbGFzc2VzXCIsIFwiZnVsbFdpZHRoXCIsIFwiaW5wdXRDb21wb25lbnRcIiwgXCJtdWx0aWxpbmVcIiwgXCJ0eXBlXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRCYXNlLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NlczogX2V4dGVuZHMoe30sIGNsYXNzZXMsIHtcbiAgICAgIHJvb3Q6IGNsc3goY2xhc3Nlcy5yb290LCAhZGlzYWJsZVVuZGVybGluZSAmJiBjbGFzc2VzLnVuZGVybGluZSksXG4gICAgICB1bmRlcmxpbmU6IG51bGxcbiAgICB9KSxcbiAgICBmdWxsV2lkdGg6IGZ1bGxXaWR0aCxcbiAgICBpbnB1dENvbXBvbmVudDogaW5wdXRDb21wb25lbnQsXG4gICAgbXVsdGlsaW5lOiBtdWx0aWxpbmUsXG4gICAgcmVmOiByZWYsXG4gICAgdHlwZTogdHlwZVxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGlzIHByb3AgaGVscHMgdXNlcnMgdG8gZmlsbCBmb3JtcyBmYXN0ZXIsIGVzcGVjaWFsbHkgb24gbW9iaWxlIGRldmljZXMuXG4gICAqIFRoZSBuYW1lIGNhbiBiZSBjb25mdXNpbmcsIGFzIGl0J3MgbW9yZSBsaWtlIGFuIGF1dG9maWxsLlxuICAgKiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgaXQgW2ZvbGxvd2luZyB0aGUgc3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybS1jb250cm9sLWluZnJhc3RydWN0dXJlLmh0bWwjYXV0b2ZpbGwpLlxuICAgKi9cbiAgYXV0b0NvbXBsZXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSBmb2N1c2VkIGR1cmluZyB0aGUgZmlyc3QgbW91bnQuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgYGlucHV0YCBlbGVtZW50IHZhbHVlLiBVc2Ugd2hlbiB0aGUgY29tcG9uZW50IGlzIG5vdCBjb250cm9sbGVkLlxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCBub3QgaGF2ZSBhbiB1bmRlcmxpbmUuXG4gICAqL1xuICBkaXNhYmxlVW5kZXJsaW5lOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5kIGBJbnB1dEFkb3JubWVudGAgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgZW5kQWRvcm5tZW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCBpbmRpY2F0ZSBhbiBlcnJvci4gVGhpcyBpcyBub3JtYWxseSBvYnRhaW5lZCB2aWEgY29udGV4dCBmcm9tXG4gICAqIEZvcm1Db250cm9sLlxuICAgKi9cbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cbiAgICovXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGlucHV0Q29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFtBdHRyaWJ1dGVzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjQXR0cmlidXRlcykgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUGFzcyBhIHJlZiB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRSZWY6IHJlZlR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGBkZW5zZWAsIHdpbGwgYWRqdXN0IHZlcnRpY2FsIHNwYWNpbmcuIFRoaXMgaXMgbm9ybWFsbHkgb2J0YWluZWQgdmlhIGNvbnRleHQgZnJvbVxuICAgKiBGb3JtQ29udHJvbC5cbiAgICovXG4gIG1hcmdpbjogUHJvcFR5cGVzLm9uZU9mKFsnZGVuc2UnLCAnbm9uZSddKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBhIHRleHRhcmVhIGVsZW1lbnQgd2lsbCBiZSByZW5kZXJlZC5cbiAgICovXG4gIG11bHRpbGluZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE5hbWUgYXR0cmlidXRlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIFlvdSBjYW4gcHVsbCBvdXQgdGhlIG5ldyB2YWx1ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC52YWx1ZWAgKHN0cmluZykuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBzaG9ydCBoaW50IGRpc3BsYXllZCBpbiB0aGUgaW5wdXQgYmVmb3JlIHRoZSB1c2VyIGVudGVycyBhIHZhbHVlLlxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEl0IHByZXZlbnRzIHRoZSB1c2VyIGZyb20gY2hhbmdpbmcgdGhlIHZhbHVlIG9mIHRoZSBmaWVsZFxuICAgKiAobm90IGZyb20gaW50ZXJhY3Rpbmcgd2l0aCB0aGUgZmllbGQpLlxuICAgKi9cbiAgcmVhZE9ubHk6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSByZXF1aXJlZC5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzTWF4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIFN0YXJ0IGBJbnB1dEFkb3JubWVudGAgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgc3RhcnRBZG9ybm1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUeXBlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuIEl0IHNob3VsZCBiZSBbYSB2YWxpZCBIVE1MNSBpbnB1dCB0eXBlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjRm9ybV8lM0NpbnB1dCUzRV90eXBlcykuXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudCwgcmVxdWlyZWQgZm9yIGEgY29udHJvbGxlZCBjb21wb25lbnQuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueVxufSA6IHZvaWQgMDtcbklucHV0Lm11aU5hbWUgPSAnSW5wdXQnO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUlucHV0J1xufSkoSW5wdXQpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0lucHV0JzsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBmb3JtYXRNdWlFcnJvck1lc3NhZ2UgYXMgX2Zvcm1hdE11aUVycm9yTWVzc2FnZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIjtcblxuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvY2xpY2stZXZlbnRzLWhhdmUta2V5LWV2ZW50cywganN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyByZWZUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBmb3JtQ29udHJvbFN0YXRlIGZyb20gJy4uL0Zvcm1Db250cm9sL2Zvcm1Db250cm9sU3RhdGUnO1xuaW1wb3J0IEZvcm1Db250cm9sQ29udGV4dCwgeyB1c2VGb3JtQ29udHJvbCB9IGZyb20gJy4uL0Zvcm1Db250cm9sL0Zvcm1Db250cm9sQ29udGV4dCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmltcG9ydCB1c2VGb3JrUmVmIGZyb20gJy4uL3V0aWxzL3VzZUZvcmtSZWYnO1xuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSAnLi4vVGV4dGFyZWFBdXRvc2l6ZSc7XG5pbXBvcnQgeyBpc0ZpbGxlZCB9IGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgdmFyIGxpZ2h0ID0gdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnO1xuICB2YXIgcGxhY2Vob2xkZXIgPSB7XG4gICAgY29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgIG9wYWNpdHk6IGxpZ2h0ID8gMC40MiA6IDAuNSxcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknLCB7XG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRlclxuICAgIH0pXG4gIH07XG4gIHZhciBwbGFjZWhvbGRlckhpZGRlbiA9IHtcbiAgICBvcGFjaXR5OiAnMCAhaW1wb3J0YW50J1xuICB9O1xuICB2YXIgcGxhY2Vob2xkZXJWaXNpYmxlID0ge1xuICAgIG9wYWNpdHk6IGxpZ2h0ID8gMC40MiA6IDAuNVxuICB9O1xuICByZXR1cm4ge1xuICAgICdAZ2xvYmFsJzoge1xuICAgICAgJ0BrZXlmcmFtZXMgbXVpLWF1dG8tZmlsbCc6IHt9LFxuICAgICAgJ0BrZXlmcmFtZXMgbXVpLWF1dG8tZmlsbC1jYW5jZWwnOiB7fVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IF9leHRlbmRzKHt9LCB0aGVtZS50eXBvZ3JhcGh5LmJvZHkxLCB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgICBsaW5lSGVpZ2h0OiAnMS4xODc2ZW0nLFxuICAgICAgLy8gUmVzZXQgKDE5cHgpLCBtYXRjaCB0aGUgbmF0aXZlIGlucHV0IGxpbmUtaGVpZ2h0XG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIC8vIFByZXZlbnQgcGFkZGluZyBpc3N1ZSB3aXRoIGZ1bGxXaWR0aC5cbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgY3Vyc29yOiAndGV4dCcsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5kaXNhYmxlZCxcbiAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCdcbiAgICAgIH1cbiAgICB9KSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIGNvbXBvbmVudCBpcyBhIGRlc2NlbmRhbnQgb2YgYEZvcm1Db250cm9sYC4gKi9cbiAgICBmb3JtQ29udHJvbDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBjb21wb25lbnQgaXMgZm9jdXNlZC4gKi9cbiAgICBmb2N1c2VkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVkPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc3RhcnRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGFkb3JuZWRTdGFydDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBlbmRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGFkb3JuZWRFbmQ6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZXJyb3I9e3RydWV9YC4gKi9cbiAgICBlcnJvcjoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgICBtYXJnaW5EZW5zZToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBtdWx0aWxpbmU9e3RydWV9YC4gKi9cbiAgICBtdWx0aWxpbmU6IHtcbiAgICAgIHBhZGRpbmc6IFwiXCIuY29uY2F0KDggLSAyLCBcInB4IDAgXCIpLmNvbmNhdCg4IC0gMSwgXCJweFwiKSxcbiAgICAgICcmJG1hcmdpbkRlbnNlJzoge1xuICAgICAgICBwYWRkaW5nVG9wOiA0IC0gMVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBjb2xvciBpcyBzZWNvbmRhcnkuICovXG4gICAgY29sb3JTZWNvbmRhcnk6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZnVsbFdpZHRoPXt0cnVlfWAuICovXG4gICAgZnVsbFdpZHRoOiB7XG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuICovXG4gICAgaW5wdXQ6IHtcbiAgICAgIGZvbnQ6ICdpbmhlcml0JyxcbiAgICAgIGxldHRlclNwYWNpbmc6ICdpbmhlcml0JyxcbiAgICAgIGNvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHBhZGRpbmc6IFwiXCIuY29uY2F0KDggLSAyLCBcInB4IDAgXCIpLmNvbmNhdCg4IC0gMSwgXCJweFwiKSxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcbiAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgIGhlaWdodDogJzEuMTg3NmVtJyxcbiAgICAgIC8vIFJlc2V0ICgxOXB4KSwgbWF0Y2ggdGhlIG5hdGl2ZSBpbnB1dCBsaW5lLWhlaWdodFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgLy8gUmVzZXQgZm9yIFNhZmFyaVxuICAgICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgLy8gTWFrZSB0aGUgZmxleCBpdGVtIHNocmluayB3aXRoIEZpcmVmb3hcbiAgICAgIG1pbldpZHRoOiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIC8vIEZpeCBJRSAxMSB3aWR0aCBpc3N1ZVxuICAgICAgYW5pbWF0aW9uTmFtZTogJ211aS1hdXRvLWZpbGwtY2FuY2VsJyxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMTBtcycsXG4gICAgICAnJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVyLFxuICAgICAgJyY6Oi1tb3otcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlcixcbiAgICAgIC8vIEZpcmVmb3ggMTkrXG4gICAgICAnJjotbXMtaW5wdXQtcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlcixcbiAgICAgIC8vIElFIDExXG4gICAgICAnJjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXIsXG4gICAgICAvLyBFZGdlXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogMFxuICAgICAgfSxcbiAgICAgIC8vIFJlc2V0IEZpcmVmb3ggaW52YWxpZCByZXF1aXJlZCBpbnB1dCBzdHlsZVxuICAgICAgJyY6aW52YWxpZCc6IHtcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICAnJjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbic6IHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBwYWRkaW5nIHdoZW4gdHlwZT1zZWFyY2guXG4gICAgICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICAvLyBTaG93IGFuZCBoaWRlIHRoZSBwbGFjZWhvbGRlciBsb2dpY1xuICAgICAgJ2xhYmVsW2RhdGEtc2hyaW5rPWZhbHNlXSArICRmb3JtQ29udHJvbCAmJzoge1xuICAgICAgICAnJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVySGlkZGVuLFxuICAgICAgICAnJjo6LW1vei1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVySGlkZGVuLFxuICAgICAgICAvLyBGaXJlZm94IDE5K1xuICAgICAgICAnJjotbXMtaW5wdXQtcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlckhpZGRlbixcbiAgICAgICAgLy8gSUUgMTFcbiAgICAgICAgJyY6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVySGlkZGVuLFxuICAgICAgICAvLyBFZGdlXG4gICAgICAgICcmOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXJWaXNpYmxlLFxuICAgICAgICAnJjpmb2N1czo6LW1vei1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVyVmlzaWJsZSxcbiAgICAgICAgLy8gRmlyZWZveCAxOStcbiAgICAgICAgJyY6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXJWaXNpYmxlLFxuICAgICAgICAvLyBJRSAxMVxuICAgICAgICAnJjpmb2N1czo6LW1zLWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXJWaXNpYmxlIC8vIEVkZ2VcblxuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBvcGFjaXR5OiAxIC8vIFJlc2V0IGlPUyBvcGFjaXR5XG5cbiAgICAgIH0sXG4gICAgICAnJjotd2Via2l0LWF1dG9maWxsJzoge1xuICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzUwMDBzJyxcbiAgICAgICAgYW5pbWF0aW9uTmFtZTogJ211aS1hdXRvLWZpbGwnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG1hcmdpbj1cImRlbnNlXCJgLiAqL1xuICAgIGlucHV0TWFyZ2luRGVuc2U6IHtcbiAgICAgIHBhZGRpbmdUb3A6IDQgLSAxXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG11bHRpbGluZT17dHJ1ZX1gLiAqL1xuICAgIGlucHV0TXVsdGlsaW5lOiB7XG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHJlc2l6ZTogJ25vbmUnLFxuICAgICAgcGFkZGluZzogMFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGB0eXBlPVwic2VhcmNoXCJgLiAqL1xuICAgIGlucHV0VHlwZVNlYXJjaDoge1xuICAgICAgLy8gSW1wcm92ZSB0eXBlIHNlYXJjaCBzdHlsZS5cbiAgICAgICctbW96LWFwcGVhcmFuY2UnOiAndGV4dGZpZWxkJyxcbiAgICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAndGV4dGZpZWxkJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBzdGFydEFkb3JubWVudGAgaXMgcHJvdmlkZWQuICovXG4gICAgaW5wdXRBZG9ybmVkU3RhcnQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgZW5kQWRvcm5tZW50YCBpcyBwcm92aWRlZC4gKi9cbiAgICBpbnB1dEFkb3JuZWRFbmQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgaGlkZGVuTGFiZWw9e3RydWV9YC4gKi9cbiAgICBpbnB1dEhpZGRlbkxhYmVsOiB7fVxuICB9O1xufTtcbnZhciB1c2VFbmhhbmNlZEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gUmVhY3QudXNlRWZmZWN0IDogUmVhY3QudXNlTGF5b3V0RWZmZWN0O1xuLyoqXG4gKiBgSW5wdXRCYXNlYCBjb250YWlucyBhcyBmZXcgc3R5bGVzIGFzIHBvc3NpYmxlLlxuICogSXQgYWltcyB0byBiZSBhIHNpbXBsZSBidWlsZGluZyBibG9jayBmb3IgY3JlYXRpbmcgYW4gaW5wdXQuXG4gKiBJdCBjb250YWlucyBhIGxvYWQgb2Ygc3R5bGUgcmVzZXQgYW5kIHNvbWUgc3RhdGUgbG9naWMuXG4gKi9cblxudmFyIElucHV0QmFzZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIElucHV0QmFzZShwcm9wcywgcmVmKSB7XG4gIHZhciBhcmlhRGVzY3JpYmVkYnkgPSBwcm9wc1snYXJpYS1kZXNjcmliZWRieSddLFxuICAgICAgYXV0b0NvbXBsZXRlID0gcHJvcHMuYXV0b0NvbXBsZXRlLFxuICAgICAgYXV0b0ZvY3VzID0gcHJvcHMuYXV0b0ZvY3VzLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGVuZEFkb3JubWVudCA9IHByb3BzLmVuZEFkb3JubWVudCxcbiAgICAgIGVycm9yID0gcHJvcHMuZXJyb3IsXG4gICAgICBfcHJvcHMkZnVsbFdpZHRoID0gcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgZnVsbFdpZHRoID0gX3Byb3BzJGZ1bGxXaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnVsbFdpZHRoLFxuICAgICAgaWQgPSBwcm9wcy5pZCxcbiAgICAgIF9wcm9wcyRpbnB1dENvbXBvbmVudCA9IHByb3BzLmlucHV0Q29tcG9uZW50LFxuICAgICAgaW5wdXRDb21wb25lbnQgPSBfcHJvcHMkaW5wdXRDb21wb25lbnQgPT09IHZvaWQgMCA/ICdpbnB1dCcgOiBfcHJvcHMkaW5wdXRDb21wb25lbnQsXG4gICAgICBfcHJvcHMkaW5wdXRQcm9wcyA9IHByb3BzLmlucHV0UHJvcHMsXG4gICAgICBpbnB1dFByb3BzUHJvcCA9IF9wcm9wcyRpbnB1dFByb3BzID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRpbnB1dFByb3BzLFxuICAgICAgaW5wdXRSZWZQcm9wID0gcHJvcHMuaW5wdXRSZWYsXG4gICAgICBtYXJnaW4gPSBwcm9wcy5tYXJnaW4sXG4gICAgICBfcHJvcHMkbXVsdGlsaW5lID0gcHJvcHMubXVsdGlsaW5lLFxuICAgICAgbXVsdGlsaW5lID0gX3Byb3BzJG11bHRpbGluZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkbXVsdGlsaW5lLFxuICAgICAgbmFtZSA9IHByb3BzLm5hbWUsXG4gICAgICBvbkJsdXIgPSBwcm9wcy5vbkJsdXIsXG4gICAgICBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgb25DbGljayA9IHByb3BzLm9uQ2xpY2ssXG4gICAgICBvbkZvY3VzID0gcHJvcHMub25Gb2N1cyxcbiAgICAgIG9uS2V5RG93biA9IHByb3BzLm9uS2V5RG93bixcbiAgICAgIG9uS2V5VXAgPSBwcm9wcy5vbktleVVwLFxuICAgICAgcGxhY2Vob2xkZXIgPSBwcm9wcy5wbGFjZWhvbGRlcixcbiAgICAgIHJlYWRPbmx5ID0gcHJvcHMucmVhZE9ubHksXG4gICAgICByZW5kZXJTdWZmaXggPSBwcm9wcy5yZW5kZXJTdWZmaXgsXG4gICAgICByb3dzID0gcHJvcHMucm93cyxcbiAgICAgIHJvd3NNYXggPSBwcm9wcy5yb3dzTWF4LFxuICAgICAgcm93c01pbiA9IHByb3BzLnJvd3NNaW4sXG4gICAgICBzdGFydEFkb3JubWVudCA9IHByb3BzLnN0YXJ0QWRvcm5tZW50LFxuICAgICAgX3Byb3BzJHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgdHlwZSA9IF9wcm9wcyR0eXBlID09PSB2b2lkIDAgPyAndGV4dCcgOiBfcHJvcHMkdHlwZSxcbiAgICAgIHZhbHVlUHJvcCA9IHByb3BzLnZhbHVlLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImFyaWEtZGVzY3JpYmVkYnlcIiwgXCJhdXRvQ29tcGxldGVcIiwgXCJhdXRvRm9jdXNcIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJkZWZhdWx0VmFsdWVcIiwgXCJkaXNhYmxlZFwiLCBcImVuZEFkb3JubWVudFwiLCBcImVycm9yXCIsIFwiZnVsbFdpZHRoXCIsIFwiaWRcIiwgXCJpbnB1dENvbXBvbmVudFwiLCBcImlucHV0UHJvcHNcIiwgXCJpbnB1dFJlZlwiLCBcIm1hcmdpblwiLCBcIm11bHRpbGluZVwiLCBcIm5hbWVcIiwgXCJvbkJsdXJcIiwgXCJvbkNoYW5nZVwiLCBcIm9uQ2xpY2tcIiwgXCJvbkZvY3VzXCIsIFwib25LZXlEb3duXCIsIFwib25LZXlVcFwiLCBcInBsYWNlaG9sZGVyXCIsIFwicmVhZE9ubHlcIiwgXCJyZW5kZXJTdWZmaXhcIiwgXCJyb3dzXCIsIFwicm93c01heFwiLCBcInJvd3NNaW5cIiwgXCJzdGFydEFkb3JubWVudFwiLCBcInR5cGVcIiwgXCJ2YWx1ZVwiXSk7XG5cbiAgdmFyIHZhbHVlID0gaW5wdXRQcm9wc1Byb3AudmFsdWUgIT0gbnVsbCA/IGlucHV0UHJvcHNQcm9wLnZhbHVlIDogdmFsdWVQcm9wO1xuXG4gIHZhciBfUmVhY3QkdXNlUmVmID0gUmVhY3QudXNlUmVmKHZhbHVlICE9IG51bGwpLFxuICAgICAgaXNDb250cm9sbGVkID0gX1JlYWN0JHVzZVJlZi5jdXJyZW50O1xuXG4gIHZhciBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICB2YXIgaGFuZGxlSW5wdXRSZWZXYXJuaW5nID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5ub2RlTmFtZSAhPT0gJ0lOUFVUJyAmJiAhaW5zdGFuY2UuZm9jdXMpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBZb3UgaGF2ZSBwcm92aWRlZCBhIGBpbnB1dENvbXBvbmVudGAgdG8gdGhlIGlucHV0IGNvbXBvbmVudCcsICd0aGF0IGRvZXMgbm90IGNvcnJlY3RseSBoYW5kbGUgdGhlIGBpbnB1dFJlZmAgcHJvcC4nLCAnTWFrZSBzdXJlIHRoZSBgaW5wdXRSZWZgIHByb3AgaXMgY2FsbGVkIHdpdGggYSBIVE1MSW5wdXRFbGVtZW50LiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcbiAgdmFyIGhhbmRsZUlucHV0UHJvcHNSZWZQcm9wID0gdXNlRm9ya1JlZihpbnB1dFByb3BzUHJvcC5yZWYsIGhhbmRsZUlucHV0UmVmV2FybmluZyk7XG4gIHZhciBoYW5kbGVJbnB1dFJlZlByb3AgPSB1c2VGb3JrUmVmKGlucHV0UmVmUHJvcCwgaGFuZGxlSW5wdXRQcm9wc1JlZlByb3ApO1xuICB2YXIgaGFuZGxlSW5wdXRSZWYgPSB1c2VGb3JrUmVmKGlucHV0UmVmLCBoYW5kbGVJbnB1dFJlZlByb3ApO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksXG4gICAgICBmb2N1c2VkID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0Rm9jdXNlZCA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgbXVpRm9ybUNvbnRyb2wgPSB1c2VGb3JtQ29udHJvbCgpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtdWlGb3JtQ29udHJvbCkge1xuICAgICAgICByZXR1cm4gbXVpRm9ybUNvbnRyb2wucmVnaXN0ZXJFZmZlY3QoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LCBbbXVpRm9ybUNvbnRyb2xdKTtcbiAgfVxuXG4gIHZhciBmY3MgPSBmb3JtQ29udHJvbFN0YXRlKHtcbiAgICBwcm9wczogcHJvcHMsXG4gICAgbXVpRm9ybUNvbnRyb2w6IG11aUZvcm1Db250cm9sLFxuICAgIHN0YXRlczogWydjb2xvcicsICdkaXNhYmxlZCcsICdlcnJvcicsICdoaWRkZW5MYWJlbCcsICdtYXJnaW4nLCAncmVxdWlyZWQnLCAnZmlsbGVkJ11cbiAgfSk7XG4gIGZjcy5mb2N1c2VkID0gbXVpRm9ybUNvbnRyb2wgPyBtdWlGb3JtQ29udHJvbC5mb2N1c2VkIDogZm9jdXNlZDsgLy8gVGhlIGJsdXIgd29uJ3QgZmlyZSB3aGVuIHRoZSBkaXNhYmxlZCBzdGF0ZSBpcyBzZXQgb24gYSBmb2N1c2VkIGlucHV0LlxuICAvLyBXZSBuZWVkIHRvIGJvb2sga2VlcCB0aGUgZm9jdXNlZCBzdGF0ZSBtYW51YWxseS5cblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghbXVpRm9ybUNvbnRyb2wgJiYgZGlzYWJsZWQgJiYgZm9jdXNlZCkge1xuICAgICAgc2V0Rm9jdXNlZChmYWxzZSk7XG5cbiAgICAgIGlmIChvbkJsdXIpIHtcbiAgICAgICAgb25CbHVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbbXVpRm9ybUNvbnRyb2wsIGRpc2FibGVkLCBmb2N1c2VkLCBvbkJsdXJdKTtcbiAgdmFyIG9uRmlsbGVkID0gbXVpRm9ybUNvbnRyb2wgJiYgbXVpRm9ybUNvbnRyb2wub25GaWxsZWQ7XG4gIHZhciBvbkVtcHR5ID0gbXVpRm9ybUNvbnRyb2wgJiYgbXVpRm9ybUNvbnRyb2wub25FbXB0eTtcbiAgdmFyIGNoZWNrRGlydHkgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAob2JqKSB7XG4gICAgaWYgKGlzRmlsbGVkKG9iaikpIHtcbiAgICAgIGlmIChvbkZpbGxlZCkge1xuICAgICAgICBvbkZpbGxlZCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob25FbXB0eSkge1xuICAgICAgb25FbXB0eSgpO1xuICAgIH1cbiAgfSwgW29uRmlsbGVkLCBvbkVtcHR5XSk7XG4gIHVzZUVuaGFuY2VkRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNDb250cm9sbGVkKSB7XG4gICAgICBjaGVja0RpcnR5KHtcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFt2YWx1ZSwgY2hlY2tEaXJ0eSwgaXNDb250cm9sbGVkXSk7XG5cbiAgdmFyIGhhbmRsZUZvY3VzID0gZnVuY3Rpb24gaGFuZGxlRm9jdXMoZXZlbnQpIHtcbiAgICAvLyBGaXggYSBidWcgd2l0aCBJRSAxMSB3aGVyZSB0aGUgZm9jdXMvYmx1ciBldmVudHMgYXJlIHRyaWdnZXJlZFxuICAgIC8vIHdoaWxlIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbiAgICBpZiAoZmNzLmRpc2FibGVkKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob25Gb2N1cykge1xuICAgICAgb25Gb2N1cyhldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0UHJvcHNQcm9wLm9uRm9jdXMpIHtcbiAgICAgIGlucHV0UHJvcHNQcm9wLm9uRm9jdXMoZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChtdWlGb3JtQ29udHJvbCAmJiBtdWlGb3JtQ29udHJvbC5vbkZvY3VzKSB7XG4gICAgICBtdWlGb3JtQ29udHJvbC5vbkZvY3VzKGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Rm9jdXNlZCh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZUJsdXIgPSBmdW5jdGlvbiBoYW5kbGVCbHVyKGV2ZW50KSB7XG4gICAgaWYgKG9uQmx1cikge1xuICAgICAgb25CbHVyKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaW5wdXRQcm9wc1Byb3Aub25CbHVyKSB7XG4gICAgICBpbnB1dFByb3BzUHJvcC5vbkJsdXIoZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChtdWlGb3JtQ29udHJvbCAmJiBtdWlGb3JtQ29udHJvbC5vbkJsdXIpIHtcbiAgICAgIG11aUZvcm1Db250cm9sLm9uQmx1cihldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZvY3VzZWQoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgaWYgKCFpc0NvbnRyb2xsZWQpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZXZlbnQudGFyZ2V0IHx8IGlucHV0UmVmLmN1cnJlbnQ7XG5cbiAgICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiTWF0ZXJpYWwtVUk6IEV4cGVjdGVkIHZhbGlkIGlucHV0IHRhcmdldC4gRGlkIHlvdSB1c2UgYSBjdXN0b20gYGlucHV0Q29tcG9uZW50YCBhbmQgZm9yZ2V0IHRvIGZvcndhcmQgcmVmcz8gU2VlIGh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL3IvaW5wdXQtY29tcG9uZW50LXJlZi1pbnRlcmZhY2UgZm9yIG1vcmUgaW5mby5cIiA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoMSkpO1xuICAgICAgfVxuXG4gICAgICBjaGVja0RpcnR5KHtcbiAgICAgICAgdmFsdWU6IGVsZW1lbnQudmFsdWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChpbnB1dFByb3BzUHJvcC5vbkNoYW5nZSkge1xuICAgICAgaW5wdXRQcm9wc1Byb3Aub25DaGFuZ2UuYXBwbHkoaW5wdXRQcm9wc1Byb3AsIFtldmVudF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9IC8vIFBlcmZvcm0gaW4gdGhlIHdpbGxVcGRhdGVcblxuXG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZS5hcHBseSh2b2lkIDAsIFtldmVudF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07IC8vIENoZWNrIHRoZSBpbnB1dCBzdGF0ZSBvbiBtb3VudCwgaW4gY2FzZSBpdCB3YXMgZmlsbGVkIGJ5IHRoZSB1c2VyXG4gIC8vIG9yIGF1dG8gZmlsbGVkIGJ5IHRoZSBicm93c2VyIGJlZm9yZSB0aGUgaHlkcmF0aW9uIChmb3IgU1NSKS5cblxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgY2hlY2tEaXJ0eShpbnB1dFJlZi5jdXJyZW50KTtcbiAgfSwgW10pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIHZhciBoYW5kbGVDbGljayA9IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKGlucHV0UmVmLmN1cnJlbnQgJiYgZXZlbnQuY3VycmVudFRhcmdldCA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgIG9uQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgSW5wdXRDb21wb25lbnQgPSBpbnB1dENvbXBvbmVudDtcblxuICB2YXIgaW5wdXRQcm9wcyA9IF9leHRlbmRzKHt9LCBpbnB1dFByb3BzUHJvcCwge1xuICAgIHJlZjogaGFuZGxlSW5wdXRSZWZcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBJbnB1dENvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICBpbnB1dFByb3BzID0gX2V4dGVuZHMoe1xuICAgICAgLy8gUmVuYW1lIHJlZiB0byBpbnB1dFJlZiBhcyB3ZSBkb24ndCBrbm93IHRoZVxuICAgICAgLy8gcHJvdmlkZWQgYGlucHV0Q29tcG9uZW50YCBzdHJ1Y3R1cmUuXG4gICAgICBpbnB1dFJlZjogaGFuZGxlSW5wdXRSZWYsXG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSwgaW5wdXRQcm9wcywge1xuICAgICAgcmVmOiBudWxsXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAobXVsdGlsaW5lKSB7XG4gICAgaWYgKHJvd3MgJiYgIXJvd3NNYXggJiYgIXJvd3NNaW4pIHtcbiAgICAgIElucHV0Q29tcG9uZW50ID0gJ3RleHRhcmVhJztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRQcm9wcyA9IF9leHRlbmRzKHtcbiAgICAgICAgcm93czogcm93cyxcbiAgICAgICAgcm93c01heDogcm93c01heFxuICAgICAgfSwgaW5wdXRQcm9wcyk7XG4gICAgICBJbnB1dENvbXBvbmVudCA9IFRleHRhcmVhQXV0b3NpemU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlucHV0UHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSwgaW5wdXRQcm9wcyk7XG4gIH1cblxuICB2YXIgaGFuZGxlQXV0b0ZpbGwgPSBmdW5jdGlvbiBoYW5kbGVBdXRvRmlsbChldmVudCkge1xuICAgIC8vIFByb3ZpZGUgYSBmYWtlIHZhbHVlIGFzIENocm9tZSBtaWdodCBub3QgbGV0IHlvdSBhY2Nlc3MgaXQgZm9yIHNlY3VyaXR5IHJlYXNvbnMuXG4gICAgY2hlY2tEaXJ0eShldmVudC5hbmltYXRpb25OYW1lID09PSAnbXVpLWF1dG8tZmlsbC1jYW5jZWwnID8gaW5wdXRSZWYuY3VycmVudCA6IHtcbiAgICAgIHZhbHVlOiAneCdcbiAgICB9KTtcbiAgfTtcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChtdWlGb3JtQ29udHJvbCkge1xuICAgICAgbXVpRm9ybUNvbnRyb2wuc2V0QWRvcm5lZFN0YXJ0KEJvb2xlYW4oc3RhcnRBZG9ybm1lbnQpKTtcbiAgICB9XG4gIH0sIFttdWlGb3JtQ29udHJvbCwgc3RhcnRBZG9ybm1lbnRdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc2VzW1wiY29sb3JcIi5jb25jYXQoY2FwaXRhbGl6ZShmY3MuY29sb3IgfHwgJ3ByaW1hcnknKSldLCBjbGFzc05hbWUsIGZjcy5kaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkLCBmY3MuZXJyb3IgJiYgY2xhc3Nlcy5lcnJvciwgZnVsbFdpZHRoICYmIGNsYXNzZXMuZnVsbFdpZHRoLCBmY3MuZm9jdXNlZCAmJiBjbGFzc2VzLmZvY3VzZWQsIG11aUZvcm1Db250cm9sICYmIGNsYXNzZXMuZm9ybUNvbnRyb2wsIG11bHRpbGluZSAmJiBjbGFzc2VzLm11bHRpbGluZSwgc3RhcnRBZG9ybm1lbnQgJiYgY2xhc3Nlcy5hZG9ybmVkU3RhcnQsIGVuZEFkb3JubWVudCAmJiBjbGFzc2VzLmFkb3JuZWRFbmQsIGZjcy5tYXJnaW4gPT09ICdkZW5zZScgJiYgY2xhc3Nlcy5tYXJnaW5EZW5zZSksXG4gICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBzdGFydEFkb3JubWVudCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRyb2xDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IG51bGxcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBcImFyaWEtaW52YWxpZFwiOiBmY3MuZXJyb3IsXG4gICAgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6IGFyaWFEZXNjcmliZWRieSxcbiAgICBhdXRvQ29tcGxldGU6IGF1dG9Db21wbGV0ZSxcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBkaXNhYmxlZDogZmNzLmRpc2FibGVkLFxuICAgIGlkOiBpZCxcbiAgICBvbkFuaW1hdGlvblN0YXJ0OiBoYW5kbGVBdXRvRmlsbCxcbiAgICBuYW1lOiBuYW1lLFxuICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICByZWFkT25seTogcmVhZE9ubHksXG4gICAgcmVxdWlyZWQ6IGZjcy5yZXF1aXJlZCxcbiAgICByb3dzOiByb3dzLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBvbktleURvd246IG9uS2V5RG93bixcbiAgICBvbktleVVwOiBvbktleVVwXG4gIH0sIGlucHV0UHJvcHMsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5pbnB1dCwgaW5wdXRQcm9wc1Byb3AuY2xhc3NOYW1lLCBmY3MuZGlzYWJsZWQgJiYgY2xhc3Nlcy5kaXNhYmxlZCwgbXVsdGlsaW5lICYmIGNsYXNzZXMuaW5wdXRNdWx0aWxpbmUsIGZjcy5oaWRkZW5MYWJlbCAmJiBjbGFzc2VzLmlucHV0SGlkZGVuTGFiZWwsIHN0YXJ0QWRvcm5tZW50ICYmIGNsYXNzZXMuaW5wdXRBZG9ybmVkU3RhcnQsIGVuZEFkb3JubWVudCAmJiBjbGFzc2VzLmlucHV0QWRvcm5lZEVuZCwgdHlwZSA9PT0gJ3NlYXJjaCcgJiYgY2xhc3Nlcy5pbnB1dFR5cGVTZWFyY2gsIGZjcy5tYXJnaW4gPT09ICdkZW5zZScgJiYgY2xhc3Nlcy5pbnB1dE1hcmdpbkRlbnNlKSxcbiAgICBvbkJsdXI6IGhhbmRsZUJsdXIsXG4gICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICBvbkZvY3VzOiBoYW5kbGVGb2N1c1xuICB9KSkpLCBlbmRBZG9ybm1lbnQsIHJlbmRlclN1ZmZpeCA/IHJlbmRlclN1ZmZpeChfZXh0ZW5kcyh7fSwgZmNzLCB7XG4gICAgc3RhcnRBZG9ybm1lbnQ6IHN0YXJ0QWRvcm5tZW50XG4gIH0pKSA6IG51bGwpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBJbnB1dEJhc2UucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgJ2FyaWEtZGVzY3JpYmVkYnknOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGlzIHByb3AgaGVscHMgdXNlcnMgdG8gZmlsbCBmb3JtcyBmYXN0ZXIsIGVzcGVjaWFsbHkgb24gbW9iaWxlIGRldmljZXMuXG4gICAqIFRoZSBuYW1lIGNhbiBiZSBjb25mdXNpbmcsIGFzIGl0J3MgbW9yZSBsaWtlIGFuIGF1dG9maWxsLlxuICAgKiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgaXQgW2ZvbGxvd2luZyB0aGUgc3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybS1jb250cm9sLWluZnJhc3RydWN0dXJlLmh0bWwjYXV0b2ZpbGwpLlxuICAgKi9cbiAgYXV0b0NvbXBsZXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSBmb2N1c2VkIGR1cmluZyB0aGUgZmlyc3QgbW91bnQuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5J10pLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBgaW5wdXRgIGVsZW1lbnQgdmFsdWUuIFVzZSB3aGVuIHRoZSBjb21wb25lbnQgaXMgbm90IGNvbnRyb2xsZWQuXG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGBpbnB1dGAgZWxlbWVudCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBFbmQgYElucHV0QWRvcm5tZW50YCBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBlbmRBZG9ybm1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCB3aWxsIGluZGljYXRlIGFuIGVycm9yLiBUaGlzIGlzIG5vcm1hbGx5IG9idGFpbmVkIHZpYSBjb250ZXh0IGZyb21cbiAgICogRm9ybUNvbnRyb2wuXG4gICAqL1xuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgdGFrZSB1cCB0aGUgZnVsbCB3aWR0aCBvZiBpdHMgY29udGFpbmVyLlxuICAgKi9cbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgaW5wdXRDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogW0F0dHJpYnV0ZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNBdHRyaWJ1dGVzKSBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBQYXNzIGEgcmVmIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dFJlZjogcmVmVHlwZSxcblxuICAvKipcbiAgICogSWYgYGRlbnNlYCwgd2lsbCBhZGp1c3QgdmVydGljYWwgc3BhY2luZy4gVGhpcyBpcyBub3JtYWxseSBvYnRhaW5lZCB2aWEgY29udGV4dCBmcm9tXG4gICAqIEZvcm1Db250cm9sLlxuICAgKi9cbiAgbWFyZ2luOiBQcm9wVHlwZXMub25lT2YoWydkZW5zZScsICdub25lJ10pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGEgdGV4dGFyZWEgZWxlbWVudCB3aWxsIGJlIHJlbmRlcmVkLlxuICAgKi9cbiAgbXVsdGlsaW5lOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTmFtZSBhdHRyaWJ1dGUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGlucHV0IGlzIGJsdXJyZWQuXG4gICAqXG4gICAqIE5vdGljZSB0aGF0IHRoZSBmaXJzdCBhcmd1bWVudCAoZXZlbnQpIG1pZ2h0IGJlIHVuZGVmaW5lZC5cbiAgICovXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHZhbHVlIGlzIGNoYW5nZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogWW91IGNhbiBwdWxsIG91dCB0aGUgbmV3IHZhbHVlIGJ5IGFjY2Vzc2luZyBgZXZlbnQudGFyZ2V0LnZhbHVlYCAoc3RyaW5nKS5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbktleVVwOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVGhlIHNob3J0IGhpbnQgZGlzcGxheWVkIGluIHRoZSBpbnB1dCBiZWZvcmUgdGhlIHVzZXIgZW50ZXJzIGEgdmFsdWUuXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSXQgcHJldmVudHMgdGhlIHVzZXIgZnJvbSBjaGFuZ2luZyB0aGUgdmFsdWUgb2YgdGhlIGZpZWxkXG4gICAqIChub3QgZnJvbSBpbnRlcmFjdGluZyB3aXRoIHRoZSBmaWVsZCkuXG4gICAqL1xuICByZWFkT25seTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHJlbmRlclN1ZmZpeDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGBpbnB1dGAgZWxlbWVudCB3aWxsIGJlIHJlcXVpcmVkLlxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBOdW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5IHdoZW4gbXVsdGlsaW5lIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIHJvd3M6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5IHdoZW4gbXVsdGlsaW5lIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIHJvd3NNYXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogTWluaW11bSBudW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5IHdoZW4gbXVsdGlsaW5lIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIHJvd3NNaW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogU3RhcnQgYElucHV0QWRvcm5tZW50YCBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBzdGFydEFkb3JubWVudDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFR5cGUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC4gSXQgc2hvdWxkIGJlIFthIHZhbGlkIEhUTUw1IGlucHV0IHR5cGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNGb3JtXyUzQ2lucHV0JTNFX3R5cGVzKS5cbiAgICovXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LCByZXF1aXJlZCBmb3IgYSBjb250cm9sbGVkIGNvbXBvbmVudC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55XG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUlucHV0QmFzZSdcbn0pKElucHV0QmFzZSk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSW5wdXRCYXNlJzsiLCIvLyBTdXBwb3J0cyBkZXRlcm1pbmF0aW9uIG9mIGlzQ29udHJvbGxlZCgpLlxuLy8gQ29udHJvbGxlZCBpbnB1dCBhY2NlcHRzIGl0cyBjdXJyZW50IHZhbHVlIGFzIGEgcHJvcC5cbi8vXG4vLyBAc2VlIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvZm9ybXMuaHRtbCNjb250cm9sbGVkLWNvbXBvbmVudHNcbi8vIEBwYXJhbSB2YWx1ZVxuLy8gQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgc3RyaW5nIChpbmNsdWRpbmcgJycpIG9yIG51bWJlciAoaW5jbHVkaW5nIHplcm8pXG5leHBvcnQgZnVuY3Rpb24gaGFzVmFsdWUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgIShBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApO1xufSAvLyBEZXRlcm1pbmUgaWYgZmllbGQgaXMgZW1wdHkgb3IgZmlsbGVkLlxuLy8gUmVzcG9uc2UgZGV0ZXJtaW5lcyBpZiBsYWJlbCBpcyBwcmVzZW50ZWQgYWJvdmUgZmllbGQgb3IgYXMgcGxhY2Vob2xkZXIuXG4vL1xuLy8gQHBhcmFtIG9ialxuLy8gQHBhcmFtIFNTUlxuLy8gQHJldHVybnMge2Jvb2xlYW59IEZhbHNlIHdoZW4gbm90IHByZXNlbnQgb3IgZW1wdHkgc3RyaW5nLlxuLy8gICAgICAgICAgICAgICAgICAgIFRydWUgd2hlbiBhbnkgbnVtYmVyIG9yIHN0cmluZyB3aXRoIGxlbmd0aC5cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRmlsbGVkKG9iaikge1xuICB2YXIgU1NSID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgcmV0dXJuIG9iaiAmJiAoaGFzVmFsdWUob2JqLnZhbHVlKSAmJiBvYmoudmFsdWUgIT09ICcnIHx8IFNTUiAmJiBoYXNWYWx1ZShvYmouZGVmYXVsdFZhbHVlKSAmJiBvYmouZGVmYXVsdFZhbHVlICE9PSAnJyk7XG59IC8vIERldGVybWluZSBpZiBhbiBJbnB1dCBpcyBhZG9ybmVkIG9uIHN0YXJ0LlxuLy8gSXQncyBjb3JyZXNwb25kaW5nIHRvIHRoZSBsZWZ0IHdpdGggTFRSLlxuLy9cbi8vIEBwYXJhbSBvYmpcbi8vIEByZXR1cm5zIHtib29sZWFufSBGYWxzZSB3aGVuIG5vIGFkb3JubWVudHMuXG4vLyAgICAgICAgICAgICAgICAgICAgVHJ1ZSB3aGVuIGFkb3JuZWQgYXQgdGhlIHN0YXJ0LlxuXG5leHBvcnQgZnVuY3Rpb24gaXNBZG9ybmVkU3RhcnQob2JqKSB7XG4gIHJldHVybiBvYmouc3RhcnRBZG9ybm1lbnQ7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IGZvcm1Db250cm9sU3RhdGUgZnJvbSAnLi4vRm9ybUNvbnRyb2wvZm9ybUNvbnRyb2xTdGF0ZSc7XG5pbXBvcnQgdXNlRm9ybUNvbnRyb2wgZnJvbSAnLi4vRm9ybUNvbnRyb2wvdXNlRm9ybUNvbnRyb2wnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IEZvcm1MYWJlbCBmcm9tICcuLi9Gb3JtTGFiZWwnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AgbGVmdCdcbiAgICB9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZm9jdXNlZD17dHJ1ZX1gLiAqL1xuICAgIGZvY3VzZWQ6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZWQ9e3RydWV9YC4gKi9cbiAgICBkaXNhYmxlZDoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBlcnJvcj17dHJ1ZX1gLiAqL1xuICAgIGVycm9yOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHJlcXVpcmVkPXt0cnVlfWAuICovXG4gICAgcmVxdWlyZWQ6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIGFzdGVyaXNrIGVsZW1lbnQuICovXG4gICAgYXN0ZXJpc2s6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgY29tcG9uZW50IGlzIGEgZGVzY2VuZGFudCBvZiBgRm9ybUNvbnRyb2xgLiAqL1xuICAgIGZvcm1Db250cm9sOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgICAvLyBzbGlnaHQgYWx0ZXJhdGlvbiB0byBzcGVjIHNwYWNpbmcgdG8gbWF0Y2ggdmlzdWFsIHNwZWMgcmVzdWx0XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwgMjRweCkgc2NhbGUoMSknXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG1hcmdpbj1cImRlbnNlXCJgLiAqL1xuICAgIG1hcmdpbkRlbnNlOiB7XG4gICAgICAvLyBDb21wZW5zYXRpb24gZm9yIHRoZSBgSW5wdXQuaW5wdXREZW5zZWAgc3R5bGUuXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwgMjFweCkgc2NhbGUoMSknXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYHNocmluaz17dHJ1ZX1gLiAqL1xuICAgIHNocmluazoge1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsIDEuNXB4KSBzY2FsZSgwLjc1KScsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AgbGVmdCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgZGlzYWJsZUFuaW1hdGlvbj17ZmFsc2V9YC4gKi9cbiAgICBhbmltYXRlZDoge1xuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnY29sb3InLCAndHJhbnNmb3JtJ10sIHtcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXIsXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXRcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJmaWxsZWRcImAuICovXG4gICAgZmlsbGVkOiB7XG4gICAgICAvLyBDaHJvbWUncyBhdXRvZmlsbCBmZWF0dXJlIGdpdmVzIHRoZSBpbnB1dCBmaWVsZCBhIHllbGxvdyBiYWNrZ3JvdW5kLlxuICAgICAgLy8gU2luY2UgdGhlIGlucHV0IGZpZWxkIGlzIGJlaGluZCB0aGUgbGFiZWwgaW4gdGhlIEhUTUwgdHJlZSxcbiAgICAgIC8vIHRoZSBpbnB1dCBmaWVsZCBpcyBkcmF3biBsYXN0IGFuZCBoaWRlcyB0aGUgbGFiZWwgd2l0aCBhbiBvcGFxdWUgYmFja2dyb3VuZCBjb2xvci5cbiAgICAgIC8vIHpJbmRleDogMSB3aWxsIHJhaXNlIHRoZSBsYWJlbCBhYm92ZSBvcGFxdWUgYmFja2dyb3VuZC1jb2xvcnMgb2YgaW5wdXQuXG4gICAgICB6SW5kZXg6IDEsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMTJweCwgMjBweCkgc2NhbGUoMSknLFxuICAgICAgJyYkbWFyZ2luRGVuc2UnOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgxMnB4LCAxN3B4KSBzY2FsZSgxKSdcbiAgICAgIH0sXG4gICAgICAnJiRzaHJpbmsnOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgxMnB4LCAxMHB4KSBzY2FsZSgwLjc1KScsXG4gICAgICAgICcmJG1hcmdpbkRlbnNlJzoge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgxMnB4LCA3cHgpIHNjYWxlKDAuNzUpJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJvdXRsaW5lZFwiYC4gKi9cbiAgICBvdXRsaW5lZDoge1xuICAgICAgLy8gc2VlIGNvbW1lbnQgYWJvdmUgb24gZmlsbGVkLnpJbmRleFxuICAgICAgekluZGV4OiAxLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDE0cHgsIDIwcHgpIHNjYWxlKDEpJyxcbiAgICAgICcmJG1hcmdpbkRlbnNlJzoge1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMTRweCwgMTJweCkgc2NhbGUoMSknXG4gICAgICB9LFxuICAgICAgJyYkc2hyaW5rJzoge1xuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMTRweCwgLTZweCkgc2NhbGUoMC43NSknXG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcbnZhciBJbnB1dExhYmVsID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gSW5wdXRMYWJlbChwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlQW5pbWF0aSA9IHByb3BzLmRpc2FibGVBbmltYXRpb24sXG4gICAgICBkaXNhYmxlQW5pbWF0aW9uID0gX3Byb3BzJGRpc2FibGVBbmltYXRpID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlQW5pbWF0aSxcbiAgICAgIG1hcmdpbiA9IHByb3BzLm1hcmdpbixcbiAgICAgIHNocmlua1Byb3AgPSBwcm9wcy5zaHJpbmssXG4gICAgICB2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlzYWJsZUFuaW1hdGlvblwiLCBcIm1hcmdpblwiLCBcInNocmlua1wiLCBcInZhcmlhbnRcIl0pO1xuXG4gIHZhciBtdWlGb3JtQ29udHJvbCA9IHVzZUZvcm1Db250cm9sKCk7XG4gIHZhciBzaHJpbmsgPSBzaHJpbmtQcm9wO1xuXG4gIGlmICh0eXBlb2Ygc2hyaW5rID09PSAndW5kZWZpbmVkJyAmJiBtdWlGb3JtQ29udHJvbCkge1xuICAgIHNocmluayA9IG11aUZvcm1Db250cm9sLmZpbGxlZCB8fCBtdWlGb3JtQ29udHJvbC5mb2N1c2VkIHx8IG11aUZvcm1Db250cm9sLmFkb3JuZWRTdGFydDtcbiAgfVxuXG4gIHZhciBmY3MgPSBmb3JtQ29udHJvbFN0YXRlKHtcbiAgICBwcm9wczogcHJvcHMsXG4gICAgbXVpRm9ybUNvbnRyb2w6IG11aUZvcm1Db250cm9sLFxuICAgIHN0YXRlczogWydtYXJnaW4nLCAndmFyaWFudCddXG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUxhYmVsLCBfZXh0ZW5kcyh7XG4gICAgXCJkYXRhLXNocmlua1wiOiBzaHJpbmssXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lLCBtdWlGb3JtQ29udHJvbCAmJiBjbGFzc2VzLmZvcm1Db250cm9sLCAhZGlzYWJsZUFuaW1hdGlvbiAmJiBjbGFzc2VzLmFuaW1hdGVkLCBzaHJpbmsgJiYgY2xhc3Nlcy5zaHJpbmssIGZjcy5tYXJnaW4gPT09ICdkZW5zZScgJiYgY2xhc3Nlcy5tYXJnaW5EZW5zZSwge1xuICAgICAgJ2ZpbGxlZCc6IGNsYXNzZXMuZmlsbGVkLFxuICAgICAgJ291dGxpbmVkJzogY2xhc3Nlcy5vdXRsaW5lZFxuICAgIH1bZmNzLnZhcmlhbnRdKSxcbiAgICBjbGFzc2VzOiB7XG4gICAgICBmb2N1c2VkOiBjbGFzc2VzLmZvY3VzZWQsXG4gICAgICBkaXNhYmxlZDogY2xhc3Nlcy5kaXNhYmxlZCxcbiAgICAgIGVycm9yOiBjbGFzc2VzLmVycm9yLFxuICAgICAgcmVxdWlyZWQ6IGNsYXNzZXMucmVxdWlyZWQsXG4gICAgICBhc3RlcmlzazogY2xhc3Nlcy5hc3Rlcmlza1xuICAgIH0sXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gSW5wdXRMYWJlbC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudHMgb2YgdGhlIGBJbnB1dExhYmVsYC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgdHJhbnNpdGlvbiBhbmltYXRpb24gaXMgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlQW5pbWF0aW9uOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBhcHBseSBkaXNhYmxlZCBjbGFzcy5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbGFiZWwgd2lsbCBiZSBkaXNwbGF5ZWQgaW4gYW4gZXJyb3Igc3RhdGUuXG4gICAqL1xuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IG9mIHRoaXMgbGFiZWwgaXMgZm9jdXNlZC5cbiAgICovXG4gIGZvY3VzZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgZGVuc2VgLCB3aWxsIGFkanVzdCB2ZXJ0aWNhbCBzcGFjaW5nLiBUaGlzIGlzIG5vcm1hbGx5IG9idGFpbmVkIHZpYSBjb250ZXh0IGZyb21cbiAgICogRm9ybUNvbnRyb2wuXG4gICAqL1xuICBtYXJnaW46IFByb3BUeXBlcy5vbmVPZihbJ2RlbnNlJ10pLFxuXG4gIC8qKlxuICAgKiBpZiBgdHJ1ZWAsIHRoZSBsYWJlbCB3aWxsIGluZGljYXRlIHRoYXQgdGhlIGlucHV0IGlzIHJlcXVpcmVkLlxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBsYWJlbCBpcyBzaHJ1bmsuXG4gICAqL1xuICBzaHJpbms6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydmaWxsZWQnLCAnb3V0bGluZWQnLCAnc3RhbmRhcmQnXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpSW5wdXRMYWJlbCdcbn0pKElucHV0TGFiZWwpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0lucHV0TGFiZWwnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBMaXN0Q29udGV4dCBmcm9tICcuL0xpc3RDb250ZXh0JztcbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7XG4gICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgbWFyZ2luOiAwLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlUGFkZGluZz17ZmFsc2V9YC4gKi9cbiAgcGFkZGluZzoge1xuICAgIHBhZGRpbmdUb3A6IDgsXG4gICAgcGFkZGluZ0JvdHRvbTogOFxuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgZGVuc2UuICovXG4gIGRlbnNlOiB7fSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGEgYHN1YmhlYWRlcmAgaXMgcHJvdmlkZWQuICovXG4gIHN1YmhlYWRlcjoge1xuICAgIHBhZGRpbmdUb3A6IDBcbiAgfVxufTtcbnZhciBMaXN0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTGlzdChwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ3VsJyA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBfcHJvcHMkZGVuc2UgPSBwcm9wcy5kZW5zZSxcbiAgICAgIGRlbnNlID0gX3Byb3BzJGRlbnNlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkZW5zZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlUGFkZGluZyA9IHByb3BzLmRpc2FibGVQYWRkaW5nLFxuICAgICAgZGlzYWJsZVBhZGRpbmcgPSBfcHJvcHMkZGlzYWJsZVBhZGRpbmcgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVQYWRkaW5nLFxuICAgICAgc3ViaGVhZGVyID0gcHJvcHMuc3ViaGVhZGVyLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFwiLCBcImRlbnNlXCIsIFwiZGlzYWJsZVBhZGRpbmdcIiwgXCJzdWJoZWFkZXJcIl0pO1xuXG4gIHZhciBjb250ZXh0ID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlbnNlOiBkZW5zZVxuICAgIH07XG4gIH0sIFtkZW5zZV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29udGV4dFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIGRlbnNlICYmIGNsYXNzZXMuZGVuc2UsICFkaXNhYmxlUGFkZGluZyAmJiBjbGFzc2VzLnBhZGRpbmcsIHN1YmhlYWRlciAmJiBjbGFzc2VzLnN1YmhlYWRlciksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBzdWJoZWFkZXIsIGNoaWxkcmVuKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IExpc3QucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgY29tcGFjdCB2ZXJ0aWNhbCBwYWRkaW5nIGRlc2lnbmVkIGZvciBrZXlib2FyZCBhbmQgbW91c2UgaW5wdXQgd2lsbCBiZSB1c2VkIGZvclxuICAgKiB0aGUgbGlzdCBhbmQgbGlzdCBpdGVtcy5cbiAgICogVGhlIHByb3AgaXMgYXZhaWxhYmxlIHRvIGRlc2NlbmRhbnQgY29tcG9uZW50cyBhcyB0aGUgYGRlbnNlYCBjb250ZXh0LlxuICAgKi9cbiAgZGVuc2U6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHZlcnRpY2FsIHBhZGRpbmcgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIGxpc3QuXG4gICAqL1xuICBkaXNhYmxlUGFkZGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBzdWJoZWFkZXIsIG5vcm1hbGx5IGBMaXN0U3ViaGVhZGVyYC5cbiAgICovXG4gIHN1YmhlYWRlcjogUHJvcFR5cGVzLm5vZGVcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpTGlzdCdcbn0pKExpc3QpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG52YXIgTGlzdENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgTGlzdENvbnRleHQuZGlzcGxheU5hbWUgPSAnTGlzdENvbnRleHQnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0Q29udGV4dDsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9MaXN0JzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc0ZyYWdtZW50IH0gZnJvbSAncmVhY3QtaXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgSFRNTEVsZW1lbnRUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBQb3BvdmVyIGZyb20gJy4uL1BvcG92ZXInO1xuaW1wb3J0IE1lbnVMaXN0IGZyb20gJy4uL01lbnVMaXN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgc2V0UmVmIGZyb20gJy4uL3V0aWxzL3NldFJlZic7XG5pbXBvcnQgdXNlVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3VzZVRoZW1lJztcbnZhciBSVExfT1JJR0lOID0ge1xuICB2ZXJ0aWNhbDogJ3RvcCcsXG4gIGhvcml6b250YWw6ICdyaWdodCdcbn07XG52YXIgTFRSX09SSUdJTiA9IHtcbiAgdmVydGljYWw6ICd0b3AnLFxuICBob3Jpem9udGFsOiAnbGVmdCdcbn07XG5leHBvcnQgdmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgY29tcG9uZW50LiAqL1xuICBwYXBlcjoge1xuICAgIC8vIHNwZWNaOiBUaGUgbWF4aW11bSBoZWlnaHQgb2YgYSBzaW1wbGUgbWVudSBzaG91bGQgYmUgb25lIG9yIG1vcmUgcm93cyBsZXNzIHRoYW4gdGhlIHZpZXdcbiAgICAvLyBoZWlnaHQuIFRoaXMgZW5zdXJlcyBhIHRhcGFibGUgYXJlYSBvdXRzaWRlIG9mIHRoZSBzaW1wbGUgbWVudSB3aXRoIHdoaWNoIHRvIGRpc21pc3NcbiAgICAvLyB0aGUgbWVudS5cbiAgICBtYXhIZWlnaHQ6ICdjYWxjKDEwMCUgLSA5NnB4KScsXG4gICAgLy8gQWRkIGlPUyBtb21lbnR1bSBzY3JvbGxpbmcuXG4gICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCdcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYExpc3RgIGNvbXBvbmVudCB2aWEgYE1lbnVMaXN0YC4gKi9cbiAgbGlzdDoge1xuICAgIC8vIFdlIGRpc2FibGUgdGhlIGZvY3VzIHJpbmcgZm9yIG1vdXNlLCB0b3VjaCBhbmQga2V5Ym9hcmQgdXNlcnMuXG4gICAgb3V0bGluZTogMFxuICB9XG59O1xudmFyIE1lbnUgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBNZW51KHByb3BzLCByZWYpIHtcbiAgdmFyIF9wcm9wcyRhdXRvRm9jdXMgPSBwcm9wcy5hdXRvRm9jdXMsXG4gICAgICBhdXRvRm9jdXMgPSBfcHJvcHMkYXV0b0ZvY3VzID09PSB2b2lkIDAgPyB0cnVlIDogX3Byb3BzJGF1dG9Gb2N1cyxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIF9wcm9wcyRkaXNhYmxlQXV0b0ZvYyA9IHByb3BzLmRpc2FibGVBdXRvRm9jdXNJdGVtLFxuICAgICAgZGlzYWJsZUF1dG9Gb2N1c0l0ZW0gPSBfcHJvcHMkZGlzYWJsZUF1dG9Gb2MgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVBdXRvRm9jLFxuICAgICAgX3Byb3BzJE1lbnVMaXN0UHJvcHMgPSBwcm9wcy5NZW51TGlzdFByb3BzLFxuICAgICAgTWVudUxpc3RQcm9wcyA9IF9wcm9wcyRNZW51TGlzdFByb3BzID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRNZW51TGlzdFByb3BzLFxuICAgICAgb25DbG9zZSA9IHByb3BzLm9uQ2xvc2UsXG4gICAgICBvbkVudGVyaW5nID0gcHJvcHMub25FbnRlcmluZyxcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuLFxuICAgICAgX3Byb3BzJFBhcGVyUHJvcHMgPSBwcm9wcy5QYXBlclByb3BzLFxuICAgICAgUGFwZXJQcm9wcyA9IF9wcm9wcyRQYXBlclByb3BzID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRQYXBlclByb3BzLFxuICAgICAgUG9wb3ZlckNsYXNzZXMgPSBwcm9wcy5Qb3BvdmVyQ2xhc3NlcyxcbiAgICAgIF9wcm9wcyR0cmFuc2l0aW9uRHVyYSA9IHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IF9wcm9wcyR0cmFuc2l0aW9uRHVyYSA9PT0gdm9pZCAwID8gJ2F1dG8nIDogX3Byb3BzJHRyYW5zaXRpb25EdXJhLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnc2VsZWN0ZWRNZW51JyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImF1dG9Gb2N1c1wiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImRpc2FibGVBdXRvRm9jdXNJdGVtXCIsIFwiTWVudUxpc3RQcm9wc1wiLCBcIm9uQ2xvc2VcIiwgXCJvbkVudGVyaW5nXCIsIFwib3BlblwiLCBcIlBhcGVyUHJvcHNcIiwgXCJQb3BvdmVyQ2xhc3Nlc1wiLCBcInRyYW5zaXRpb25EdXJhdGlvblwiLCBcInZhcmlhbnRcIl0pO1xuXG4gIHZhciB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIHZhciBhdXRvRm9jdXNJdGVtID0gYXV0b0ZvY3VzICYmICFkaXNhYmxlQXV0b0ZvY3VzSXRlbSAmJiBvcGVuO1xuICB2YXIgbWVudUxpc3RBY3Rpb25zUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgY29udGVudEFuY2hvclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICB2YXIgZ2V0Q29udGVudEFuY2hvckVsID0gZnVuY3Rpb24gZ2V0Q29udGVudEFuY2hvckVsKCkge1xuICAgIHJldHVybiBjb250ZW50QW5jaG9yUmVmLmN1cnJlbnQ7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUVudGVyaW5nID0gZnVuY3Rpb24gaGFuZGxlRW50ZXJpbmcoZWxlbWVudCwgaXNBcHBlYXJpbmcpIHtcbiAgICBpZiAobWVudUxpc3RBY3Rpb25zUmVmLmN1cnJlbnQpIHtcbiAgICAgIG1lbnVMaXN0QWN0aW9uc1JlZi5jdXJyZW50LmFkanVzdFN0eWxlRm9yU2Nyb2xsYmFyKGVsZW1lbnQsIHRoZW1lKTtcbiAgICB9XG5cbiAgICBpZiAob25FbnRlcmluZykge1xuICAgICAgb25FbnRlcmluZyhlbGVtZW50LCBpc0FwcGVhcmluZyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVMaXN0S2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZUxpc3RLZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ1RhYicpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmIChvbkNsb3NlKSB7XG4gICAgICAgIG9uQ2xvc2UoZXZlbnQsICd0YWJLZXlEb3duJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogdGhlIGluZGV4IG9mIHRoZSBpdGVtIHNob3VsZCByZWNlaXZlIGZvY3VzXG4gICAqIGluIGEgYHZhcmlhbnQ9XCJzZWxlY3RlZE1lbnVcImAgaXQncyB0aGUgZmlyc3QgYHNlbGVjdGVkYCBpdGVtXG4gICAqIG90aGVyd2lzZSBpdCdzIHRoZSB2ZXJ5IGZpcnN0IGl0ZW0uXG4gICAqL1xuXG5cbiAgdmFyIGFjdGl2ZUl0ZW1JbmRleCA9IC0xOyAvLyBzaW5jZSB3ZSBpbmplY3QgZm9jdXMgcmVsYXRlZCBwcm9wcyBpbnRvIGNoaWxkcmVuIHdlIGhhdmUgdG8gZG8gYSBsb29rYWhlYWRcbiAgLy8gdG8gY2hlY2sgaWYgdGhlcmUgaXMgYSBgc2VsZWN0ZWRgIGl0ZW0uIFdlJ3JlIGxvb2tpbmcgZm9yIHRoZSBsYXN0IGBzZWxlY3RlZGBcbiAgLy8gaXRlbSBhbmQgdXNlIHRoZSBmaXJzdCB2YWxpZCBpdGVtIGFzIGEgZmFsbGJhY2tcblxuICBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICBpZiAoISAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChpc0ZyYWdtZW50KGNoaWxkKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgTWVudSBjb21wb25lbnQgZG9lc24ndCBhY2NlcHQgYSBGcmFnbWVudCBhcyBhIGNoaWxkLlwiLCAnQ29uc2lkZXIgcHJvdmlkaW5nIGFuIGFycmF5IGluc3RlYWQuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghY2hpbGQucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIGlmICh2YXJpYW50ICE9PSBcIm1lbnVcIiAmJiBjaGlsZC5wcm9wcy5zZWxlY3RlZCkge1xuICAgICAgICBhY3RpdmVJdGVtSW5kZXggPSBpbmRleDtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlSXRlbUluZGV4ID09PSAtMSkge1xuICAgICAgICBhY3RpdmVJdGVtSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICB2YXIgaXRlbXMgPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPT09IGFjdGl2ZUl0ZW1JbmRleCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoaW5zdGFuY2UpIHtcbiAgICAgICAgICAvLyAjU3RyaWN0TW9kZSByZWFkeVxuICAgICAgICAgIGNvbnRlbnRBbmNob3JSZWYuY3VycmVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGluc3RhbmNlKTtcbiAgICAgICAgICBzZXRSZWYoY2hpbGQucmVmLCBpbnN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQb3BvdmVyLCBfZXh0ZW5kcyh7XG4gICAgZ2V0Q29udGVudEFuY2hvckVsOiBnZXRDb250ZW50QW5jaG9yRWwsXG4gICAgY2xhc3NlczogUG9wb3ZlckNsYXNzZXMsXG4gICAgb25DbG9zZTogb25DbG9zZSxcbiAgICBvbkVudGVyaW5nOiBoYW5kbGVFbnRlcmluZyxcbiAgICBhbmNob3JPcmlnaW46IHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyBSVExfT1JJR0lOIDogTFRSX09SSUdJTixcbiAgICB0cmFuc2Zvcm1PcmlnaW46IHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyBSVExfT1JJR0lOIDogTFRSX09SSUdJTixcbiAgICBQYXBlclByb3BzOiBfZXh0ZW5kcyh7fSwgUGFwZXJQcm9wcywge1xuICAgICAgY2xhc3NlczogX2V4dGVuZHMoe30sIFBhcGVyUHJvcHMuY2xhc3Nlcywge1xuICAgICAgICByb290OiBjbGFzc2VzLnBhcGVyXG4gICAgICB9KVxuICAgIH0pLFxuICAgIG9wZW46IG9wZW4sXG4gICAgcmVmOiByZWYsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0cmFuc2l0aW9uRHVyYXRpb25cbiAgfSwgb3RoZXIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNZW51TGlzdCwgX2V4dGVuZHMoe1xuICAgIG9uS2V5RG93bjogaGFuZGxlTGlzdEtleURvd24sXG4gICAgYWN0aW9uczogbWVudUxpc3RBY3Rpb25zUmVmLFxuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzICYmIChhY3RpdmVJdGVtSW5kZXggPT09IC0xIHx8IGRpc2FibGVBdXRvRm9jdXNJdGVtKSxcbiAgICBhdXRvRm9jdXNJdGVtOiBhdXRvRm9jdXNJdGVtLFxuICAgIHZhcmlhbnQ6IHZhcmlhbnRcbiAgfSwgTWVudUxpc3RQcm9wcywge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmxpc3QsIE1lbnVMaXN0UHJvcHMuY2xhc3NOYW1lKVxuICB9KSwgaXRlbXMpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gTWVudS5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBBIEhUTUwgZWxlbWVudCwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgaXQuXG4gICAqIEl0J3MgdXNlZCB0byBzZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBtZW51LlxuICAgKi9cbiAgYW5jaG9yRWw6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5vbmVPZlR5cGUoW0hUTUxFbGVtZW50VHlwZSwgUHJvcFR5cGVzLmZ1bmNdKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgIChEZWZhdWx0KSB3aWxsIGZvY3VzIHRoZSBgW3JvbGU9XCJtZW51XCJdYCBpZiBubyBmb2N1c2FibGUgY2hpbGQgaXMgZm91bmQuIERpc2FibGVkXG4gICAqIGNoaWxkcmVuIGFyZSBub3QgZm9jdXNhYmxlLiBJZiB5b3Ugc2V0IHRoaXMgcHJvcCB0byBgZmFsc2VgIGZvY3VzIHdpbGwgYmUgcGxhY2VkXG4gICAqIG9uIHRoZSBwYXJlbnQgbW9kYWwgY29udGFpbmVyLiBUaGlzIGhhcyBzZXZlcmUgYWNjZXNzaWJpbGl0eSBpbXBsaWNhdGlvbnNcbiAgICogYW5kIHNob3VsZCBvbmx5IGJlIGNvbnNpZGVyZWQgaWYgeW91IG1hbmFnZSBmb2N1cyBvdGhlcndpc2UuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBNZW51IGNvbnRlbnRzLCBub3JtYWxseSBgTWVudUl0ZW1gcy5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBXaGVuIG9wZW5pbmcgdGhlIG1lbnUgd2lsbCBub3QgZm9jdXMgdGhlIGFjdGl2ZSBpdGVtIGJ1dCB0aGUgYFtyb2xlPVwibWVudVwiXWBcbiAgICogdW5sZXNzIGBhdXRvRm9jdXNgIGlzIGFsc28gc2V0IHRvIGBmYWxzZWAuIE5vdCB1c2luZyB0aGUgZGVmYXVsdCBtZWFucyBub3RcbiAgICogZm9sbG93aW5nIFdBSS1BUklBIGF1dGhvcmluZyBwcmFjdGljZXMuIFBsZWFzZSBiZSBjb25zaWRlcmF0ZSBhYm91dCBwb3NzaWJsZVxuICAgKiBhY2Nlc3NpYmlsaXR5IGltcGxpY2F0aW9ucy5cbiAgICovXG4gIGRpc2FibGVBdXRvRm9jdXNJdGVtOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgW2BNZW51TGlzdGBdKC9hcGkvbWVudS1saXN0LykgZWxlbWVudC5cbiAgICovXG4gIE1lbnVMaXN0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCByZXF1ZXN0cyB0byBiZSBjbG9zZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvbiBDYW4gYmU6IGBcImVzY2FwZUtleURvd25cImAsIGBcImJhY2tkcm9wQ2xpY2tcImAsIGBcInRhYktleURvd25cImAuXG4gICAqL1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBNZW51IGVudGVycy5cbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBNZW51IGhhcyBlbnRlcmVkLlxuICAgKi9cbiAgb25FbnRlcmVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgTWVudSBpcyBlbnRlcmluZy5cbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIE1lbnUgZXhpdHMuXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBNZW51IGhhcyBleGl0ZWQuXG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIE1lbnUgaXMgZXhpdGluZy5cbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIG1lbnUgaXMgdmlzaWJsZS5cbiAgICovXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIFBhcGVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIGBjbGFzc2VzYCBwcm9wIGFwcGxpZWQgdG8gdGhlIFtgUG9wb3ZlcmBdKC9hcGkvcG9wb3Zlci8pIGVsZW1lbnQuXG4gICAqL1xuICBQb3BvdmVyQ2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogVGhlIGxlbmd0aCBvZiB0aGUgdHJhbnNpdGlvbiBpbiBgbXNgLCBvciAnYXV0bydcbiAgICovXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFsnYXV0byddKSwgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhcHBlYXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZW50ZXI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZXhpdDogUHJvcFR5cGVzLm51bWJlclxuICB9KV0pLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuIFVzZSBgbWVudWAgdG8gcHJldmVudCBzZWxlY3RlZCBpdGVtcyBmcm9tIGltcGFjdGluZyB0aGUgaW5pdGlhbCBmb2N1c1xuICAgKiBhbmQgdGhlIHZlcnRpY2FsIGFsaWdubWVudCByZWxhdGl2ZSB0byB0aGUgYW5jaG9yIGVsZW1lbnQuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydtZW51JywgJ3NlbGVjdGVkTWVudSddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlNZW51J1xufSkoTWVudSk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNGcmFnbWVudCB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnLi4vdXRpbHMvb3duZXJEb2N1bWVudCc7XG5pbXBvcnQgTGlzdCBmcm9tICcuLi9MaXN0JztcbmltcG9ydCBnZXRTY3JvbGxiYXJTaXplIGZyb20gJy4uL3V0aWxzL2dldFNjcm9sbGJhclNpemUnO1xuaW1wb3J0IHVzZUZvcmtSZWYgZnJvbSAnLi4vdXRpbHMvdXNlRm9ya1JlZic7XG5cbmZ1bmN0aW9uIG5leHRJdGVtKGxpc3QsIGl0ZW0sIGRpc2FibGVMaXN0V3JhcCkge1xuICBpZiAobGlzdCA9PT0gaXRlbSkge1xuICAgIHJldHVybiBsaXN0LmZpcnN0Q2hpbGQ7XG4gIH1cblxuICBpZiAoaXRlbSAmJiBpdGVtLm5leHRFbGVtZW50U2libGluZykge1xuICAgIHJldHVybiBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgfVxuXG4gIHJldHVybiBkaXNhYmxlTGlzdFdyYXAgPyBudWxsIDogbGlzdC5maXJzdENoaWxkO1xufVxuXG5mdW5jdGlvbiBwcmV2aW91c0l0ZW0obGlzdCwgaXRlbSwgZGlzYWJsZUxpc3RXcmFwKSB7XG4gIGlmIChsaXN0ID09PSBpdGVtKSB7XG4gICAgcmV0dXJuIGRpc2FibGVMaXN0V3JhcCA/IGxpc3QuZmlyc3RDaGlsZCA6IGxpc3QubGFzdENoaWxkO1xuICB9XG5cbiAgaWYgKGl0ZW0gJiYgaXRlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgcmV0dXJuIGl0ZW0ucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgfVxuXG4gIHJldHVybiBkaXNhYmxlTGlzdFdyYXAgPyBudWxsIDogbGlzdC5sYXN0Q2hpbGQ7XG59XG5cbmZ1bmN0aW9uIHRleHRDcml0ZXJpYU1hdGNoZXMobmV4dEZvY3VzLCB0ZXh0Q3JpdGVyaWEpIHtcbiAgaWYgKHRleHRDcml0ZXJpYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgdGV4dCA9IG5leHRGb2N1cy5pbm5lclRleHQ7XG5cbiAgaWYgKHRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIGpzZG9tIGRvZXNuJ3Qgc3VwcG9ydCBpbm5lclRleHRcbiAgICB0ZXh0ID0gbmV4dEZvY3VzLnRleHRDb250ZW50O1xuICB9XG5cbiAgdGV4dCA9IHRleHQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgaWYgKHRleHQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHRleHRDcml0ZXJpYS5yZXBlYXRpbmcpIHtcbiAgICByZXR1cm4gdGV4dFswXSA9PT0gdGV4dENyaXRlcmlhLmtleXNbMF07XG4gIH1cblxuICByZXR1cm4gdGV4dC5pbmRleE9mKHRleHRDcml0ZXJpYS5rZXlzLmpvaW4oJycpKSA9PT0gMDtcbn1cblxuZnVuY3Rpb24gbW92ZUZvY3VzKGxpc3QsIGN1cnJlbnRGb2N1cywgZGlzYWJsZUxpc3RXcmFwLCBkaXNhYmxlZEl0ZW1zRm9jdXNhYmxlLCB0cmF2ZXJzYWxGdW5jdGlvbiwgdGV4dENyaXRlcmlhKSB7XG4gIHZhciB3cmFwcGVkT25jZSA9IGZhbHNlO1xuICB2YXIgbmV4dEZvY3VzID0gdHJhdmVyc2FsRnVuY3Rpb24obGlzdCwgY3VycmVudEZvY3VzLCBjdXJyZW50Rm9jdXMgPyBkaXNhYmxlTGlzdFdyYXAgOiBmYWxzZSk7XG5cbiAgd2hpbGUgKG5leHRGb2N1cykge1xuICAgIC8vIFByZXZlbnQgaW5maW5pdGUgbG9vcC5cbiAgICBpZiAobmV4dEZvY3VzID09PSBsaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGlmICh3cmFwcGVkT25jZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdyYXBwZWRPbmNlID0gdHJ1ZTtcbiAgICB9IC8vIFNhbWUgbG9naWMgYXMgdXNlQXV0b2NvbXBsZXRlLmpzXG5cblxuICAgIHZhciBuZXh0Rm9jdXNEaXNhYmxlZCA9IGRpc2FibGVkSXRlbXNGb2N1c2FibGUgPyBmYWxzZSA6IG5leHRGb2N1cy5kaXNhYmxlZCB8fCBuZXh0Rm9jdXMuZ2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJykgPT09ICd0cnVlJztcblxuICAgIGlmICghbmV4dEZvY3VzLmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSB8fCAhdGV4dENyaXRlcmlhTWF0Y2hlcyhuZXh0Rm9jdXMsIHRleHRDcml0ZXJpYSkgfHwgbmV4dEZvY3VzRGlzYWJsZWQpIHtcbiAgICAgIC8vIE1vdmUgdG8gdGhlIG5leHQgZWxlbWVudC5cbiAgICAgIG5leHRGb2N1cyA9IHRyYXZlcnNhbEZ1bmN0aW9uKGxpc3QsIG5leHRGb2N1cywgZGlzYWJsZUxpc3RXcmFwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dEZvY3VzLmZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59XG5cbnZhciB1c2VFbmhhbmNlZEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gUmVhY3QudXNlRWZmZWN0IDogUmVhY3QudXNlTGF5b3V0RWZmZWN0O1xuLyoqXG4gKiBBIHBlcm1hbmVudGx5IGRpc3BsYXllZCBtZW51IGZvbGxvd2luZyBodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtcHJhY3RpY2VzLyNtZW51YnV0dG9uLlxuICogSXQncyBleHBvc2VkIHRvIGhlbHAgY3VzdG9taXphdGlvbiBvZiB0aGUgW2BNZW51YF0oL2FwaS9tZW51LykgY29tcG9uZW50LiBJZiB5b3VcbiAqIHVzZSBpdCBzZXBhcmF0ZWx5IHlvdSBuZWVkIHRvIG1vdmUgZm9jdXMgaW50byB0aGUgY29tcG9uZW50IG1hbnVhbGx5LiBPbmNlXG4gKiB0aGUgZm9jdXMgaXMgcGxhY2VkIGluc2lkZSB0aGUgY29tcG9uZW50IGl0IGlzIGZ1bGx5IGtleWJvYXJkIGFjY2Vzc2libGUuXG4gKi9cblxudmFyIE1lbnVMaXN0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTWVudUxpc3QocHJvcHMsIHJlZikge1xuICB2YXIgYWN0aW9ucyA9IHByb3BzLmFjdGlvbnMsXG4gICAgICBfcHJvcHMkYXV0b0ZvY3VzID0gcHJvcHMuYXV0b0ZvY3VzLFxuICAgICAgYXV0b0ZvY3VzID0gX3Byb3BzJGF1dG9Gb2N1cyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkYXV0b0ZvY3VzLFxuICAgICAgX3Byb3BzJGF1dG9Gb2N1c0l0ZW0gPSBwcm9wcy5hdXRvRm9jdXNJdGVtLFxuICAgICAgYXV0b0ZvY3VzSXRlbSA9IF9wcm9wcyRhdXRvRm9jdXNJdGVtID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRhdXRvRm9jdXNJdGVtLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlZEl0ZW1zRiA9IHByb3BzLmRpc2FibGVkSXRlbXNGb2N1c2FibGUsXG4gICAgICBkaXNhYmxlZEl0ZW1zRm9jdXNhYmxlID0gX3Byb3BzJGRpc2FibGVkSXRlbXNGID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlZEl0ZW1zRixcbiAgICAgIF9wcm9wcyRkaXNhYmxlTGlzdFdyYSA9IHByb3BzLmRpc2FibGVMaXN0V3JhcCxcbiAgICAgIGRpc2FibGVMaXN0V3JhcCA9IF9wcm9wcyRkaXNhYmxlTGlzdFdyYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUxpc3RXcmEsXG4gICAgICBvbktleURvd24gPSBwcm9wcy5vbktleURvd24sXG4gICAgICBfcHJvcHMkdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICB2YXJpYW50ID0gX3Byb3BzJHZhcmlhbnQgPT09IHZvaWQgMCA/ICdzZWxlY3RlZE1lbnUnIDogX3Byb3BzJHZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYWN0aW9uc1wiLCBcImF1dG9Gb2N1c1wiLCBcImF1dG9Gb2N1c0l0ZW1cIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcImRpc2FibGVkSXRlbXNGb2N1c2FibGVcIiwgXCJkaXNhYmxlTGlzdFdyYXBcIiwgXCJvbktleURvd25cIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgbGlzdFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIHRleHRDcml0ZXJpYVJlZiA9IFJlYWN0LnVzZVJlZih7XG4gICAga2V5czogW10sXG4gICAgcmVwZWF0aW5nOiB0cnVlLFxuICAgIHByZXZpb3VzS2V5TWF0Y2hlZDogdHJ1ZSxcbiAgICBsYXN0VGltZTogbnVsbFxuICB9KTtcbiAgdXNlRW5oYW5jZWRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChhdXRvRm9jdXMpIHtcbiAgICAgIGxpc3RSZWYuY3VycmVudC5mb2N1cygpO1xuICAgIH1cbiAgfSwgW2F1dG9Gb2N1c10pO1xuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKGFjdGlvbnMsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWRqdXN0U3R5bGVGb3JTY3JvbGxiYXI6IGZ1bmN0aW9uIGFkanVzdFN0eWxlRm9yU2Nyb2xsYmFyKGNvbnRhaW5lckVsZW1lbnQsIHRoZW1lKSB7XG4gICAgICAgIC8vIExldCdzIGlnbm9yZSB0aGF0IHBpZWNlIG9mIGxvZ2ljIGlmIHVzZXJzIGFyZSBhbHJlYWR5IG92ZXJyaWRpbmcgdGhlIHdpZHRoXG4gICAgICAgIC8vIG9mIHRoZSBtZW51LlxuICAgICAgICB2YXIgbm9FeHBsaWNpdFdpZHRoID0gIWxpc3RSZWYuY3VycmVudC5zdHlsZS53aWR0aDtcblxuICAgICAgICBpZiAoY29udGFpbmVyRWxlbWVudC5jbGllbnRIZWlnaHQgPCBsaXN0UmVmLmN1cnJlbnQuY2xpZW50SGVpZ2h0ICYmIG5vRXhwbGljaXRXaWR0aCkge1xuICAgICAgICAgIHZhciBzY3JvbGxiYXJTaXplID0gXCJcIi5jb25jYXQoZ2V0U2Nyb2xsYmFyU2l6ZSh0cnVlKSwgXCJweFwiKTtcbiAgICAgICAgICBsaXN0UmVmLmN1cnJlbnQuc3R5bGVbdGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/ICdwYWRkaW5nTGVmdCcgOiAncGFkZGluZ1JpZ2h0J10gPSBzY3JvbGxiYXJTaXplO1xuICAgICAgICAgIGxpc3RSZWYuY3VycmVudC5zdHlsZS53aWR0aCA9IFwiY2FsYygxMDAlICsgXCIuY29uY2F0KHNjcm9sbGJhclNpemUsIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaXN0UmVmLmN1cnJlbnQ7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHZhciBoYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgIHZhciBsaXN0ID0gbGlzdFJlZi5jdXJyZW50O1xuICAgIHZhciBrZXkgPSBldmVudC5rZXk7XG4gICAgLyoqXG4gICAgICogQHR5cGUge0VsZW1lbnR9IC0gd2lsbCBhbHdheXMgYmUgZGVmaW5lZCBzaW5jZSB3ZSBhcmUgaW4gYSBrZXlkb3duIGhhbmRsZXJcbiAgICAgKiBhdHRhY2hlZCB0byBhbiBlbGVtZW50LiBBIGtleWRvd24gZXZlbnQgaXMgZWl0aGVyIGRpc3BhdGNoZWQgdG8gdGhlIGFjdGl2ZUVsZW1lbnRcbiAgICAgKiBvciBkb2N1bWVudC5ib2R5IG9yIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC4gT25seSB0aGUgZmlyc3QgY2FzZSB3aWxsXG4gICAgICogdHJpZ2dlciB0aGlzIHNwZWNpZmljIGhhbmRsZXIuXG4gICAgICovXG5cbiAgICB2YXIgY3VycmVudEZvY3VzID0gb3duZXJEb2N1bWVudChsaXN0KS5hY3RpdmVFbGVtZW50O1xuXG4gICAgaWYgKGtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIC8vIFByZXZlbnQgc2Nyb2xsIG9mIHRoZSBwYWdlXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbW92ZUZvY3VzKGxpc3QsIGN1cnJlbnRGb2N1cywgZGlzYWJsZUxpc3RXcmFwLCBkaXNhYmxlZEl0ZW1zRm9jdXNhYmxlLCBuZXh0SXRlbSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1vdmVGb2N1cyhsaXN0LCBjdXJyZW50Rm9jdXMsIGRpc2FibGVMaXN0V3JhcCwgZGlzYWJsZWRJdGVtc0ZvY3VzYWJsZSwgcHJldmlvdXNJdGVtKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0hvbWUnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbW92ZUZvY3VzKGxpc3QsIG51bGwsIGRpc2FibGVMaXN0V3JhcCwgZGlzYWJsZWRJdGVtc0ZvY3VzYWJsZSwgbmV4dEl0ZW0pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnRW5kJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1vdmVGb2N1cyhsaXN0LCBudWxsLCBkaXNhYmxlTGlzdFdyYXAsIGRpc2FibGVkSXRlbXNGb2N1c2FibGUsIHByZXZpb3VzSXRlbSk7XG4gICAgfSBlbHNlIGlmIChrZXkubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY3JpdGVyaWEgPSB0ZXh0Q3JpdGVyaWFSZWYuY3VycmVudDtcbiAgICAgIHZhciBsb3dlcktleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdmFyIGN1cnJUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICAgIGlmIChjcml0ZXJpYS5rZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gUmVzZXRcbiAgICAgICAgaWYgKGN1cnJUaW1lIC0gY3JpdGVyaWEubGFzdFRpbWUgPiA1MDApIHtcbiAgICAgICAgICBjcml0ZXJpYS5rZXlzID0gW107XG4gICAgICAgICAgY3JpdGVyaWEucmVwZWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICBjcml0ZXJpYS5wcmV2aW91c0tleU1hdGNoZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGNyaXRlcmlhLnJlcGVhdGluZyAmJiBsb3dlcktleSAhPT0gY3JpdGVyaWEua2V5c1swXSkge1xuICAgICAgICAgIGNyaXRlcmlhLnJlcGVhdGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNyaXRlcmlhLmxhc3RUaW1lID0gY3VyclRpbWU7XG4gICAgICBjcml0ZXJpYS5rZXlzLnB1c2gobG93ZXJLZXkpO1xuICAgICAgdmFyIGtlZXBGb2N1c09uQ3VycmVudCA9IGN1cnJlbnRGb2N1cyAmJiAhY3JpdGVyaWEucmVwZWF0aW5nICYmIHRleHRDcml0ZXJpYU1hdGNoZXMoY3VycmVudEZvY3VzLCBjcml0ZXJpYSk7XG5cbiAgICAgIGlmIChjcml0ZXJpYS5wcmV2aW91c0tleU1hdGNoZWQgJiYgKGtlZXBGb2N1c09uQ3VycmVudCB8fCBtb3ZlRm9jdXMobGlzdCwgY3VycmVudEZvY3VzLCBmYWxzZSwgZGlzYWJsZWRJdGVtc0ZvY3VzYWJsZSwgbmV4dEl0ZW0sIGNyaXRlcmlhKSkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNyaXRlcmlhLnByZXZpb3VzS2V5TWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvbktleURvd24pIHtcbiAgICAgIG9uS2V5RG93bihldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVPd25SZWYgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAvLyAjU3RyaWN0TW9kZSByZWFkeVxuICAgIGxpc3RSZWYuY3VycmVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGluc3RhbmNlKTtcbiAgfSwgW10pO1xuICB2YXIgaGFuZGxlUmVmID0gdXNlRm9ya1JlZihoYW5kbGVPd25SZWYsIHJlZik7XG4gIC8qKlxuICAgKiB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gc2hvdWxkIHJlY2VpdmUgZm9jdXNcbiAgICogaW4gYSBgdmFyaWFudD1cInNlbGVjdGVkTWVudVwiYCBpdCdzIHRoZSBmaXJzdCBgc2VsZWN0ZWRgIGl0ZW1cbiAgICogb3RoZXJ3aXNlIGl0J3MgdGhlIHZlcnkgZmlyc3QgaXRlbS5cbiAgICovXG5cbiAgdmFyIGFjdGl2ZUl0ZW1JbmRleCA9IC0xOyAvLyBzaW5jZSB3ZSBpbmplY3QgZm9jdXMgcmVsYXRlZCBwcm9wcyBpbnRvIGNoaWxkcmVuIHdlIGhhdmUgdG8gZG8gYSBsb29rYWhlYWRcbiAgLy8gdG8gY2hlY2sgaWYgdGhlcmUgaXMgYSBgc2VsZWN0ZWRgIGl0ZW0uIFdlJ3JlIGxvb2tpbmcgZm9yIHRoZSBsYXN0IGBzZWxlY3RlZGBcbiAgLy8gaXRlbSBhbmQgdXNlIHRoZSBmaXJzdCB2YWxpZCBpdGVtIGFzIGEgZmFsbGJhY2tcblxuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgaWYgKCEgLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoaXNGcmFnbWVudChjaGlsZCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIE1lbnUgY29tcG9uZW50IGRvZXNuJ3QgYWNjZXB0IGEgRnJhZ21lbnQgYXMgYSBjaGlsZC5cIiwgJ0NvbnNpZGVyIHByb3ZpZGluZyBhbiBhcnJheSBpbnN0ZWFkLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNoaWxkLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICBpZiAodmFyaWFudCA9PT0gJ3NlbGVjdGVkTWVudScgJiYgY2hpbGQucHJvcHMuc2VsZWN0ZWQpIHtcbiAgICAgICAgYWN0aXZlSXRlbUluZGV4ID0gaW5kZXg7XG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZUl0ZW1JbmRleCA9PT0gLTEpIHtcbiAgICAgICAgYWN0aXZlSXRlbUluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgdmFyIGl0ZW1zID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID09PSBhY3RpdmVJdGVtSW5kZXgpIHtcbiAgICAgIHZhciBuZXdDaGlsZFByb3BzID0ge307XG5cbiAgICAgIGlmIChhdXRvRm9jdXNJdGVtKSB7XG4gICAgICAgIG5ld0NoaWxkUHJvcHMuYXV0b0ZvY3VzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkLnByb3BzLnRhYkluZGV4ID09PSB1bmRlZmluZWQgJiYgdmFyaWFudCA9PT0gJ3NlbGVjdGVkTWVudScpIHtcbiAgICAgICAgbmV3Q2hpbGRQcm9wcy50YWJJbmRleCA9IDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBuZXdDaGlsZFByb3BzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdCwgX2V4dGVuZHMoe1xuICAgIHJvbGU6IFwibWVudVwiLFxuICAgIHJlZjogaGFuZGxlUmVmLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIG9uS2V5RG93bjogaGFuZGxlS2V5RG93bixcbiAgICB0YWJJbmRleDogYXV0b0ZvY3VzID8gMCA6IC0xXG4gIH0sIG90aGVyKSwgaXRlbXMpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBNZW51TGlzdC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHdpbGwgZm9jdXMgdGhlIGBbcm9sZT1cIm1lbnVcIl1gIGNvbnRhaW5lciBhbmQgbW92ZSBpbnRvIHRhYiBvcmRlci5cbiAgICovXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgd2lsbCBmb2N1cyB0aGUgZmlyc3QgbWVudWl0ZW0gaWYgYHZhcmlhbnQ9XCJtZW51XCJgIG9yIHNlbGVjdGVkIGl0ZW1cbiAgICogaWYgYHZhcmlhbnQ9XCJzZWxlY3RlZE1lbnVcImAuXG4gICAqL1xuICBhdXRvRm9jdXNJdGVtOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTWVudUxpc3QgY29udGVudHMsIG5vcm1hbGx5IGBNZW51SXRlbWBzLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgd2lsbCBhbGxvdyBmb2N1cyBvbiBkaXNhYmxlZCBpdGVtcy5cbiAgICovXG4gIGRpc2FibGVkSXRlbXNGb2N1c2FibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBtZW51IGl0ZW1zIHdpbGwgbm90IHdyYXAgZm9jdXMuXG4gICAqL1xuICBkaXNhYmxlTGlzdFdyYXA6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuIFVzZSBgbWVudWAgdG8gcHJldmVudCBzZWxlY3RlZCBpdGVtcyBmcm9tIGltcGFjdGluZyB0aGUgaW5pdGlhbCBmb2N1c1xuICAgKiBhbmQgdGhlIHZlcnRpY2FsIGFsaWdubWVudCByZWxhdGl2ZSB0byB0aGUgYW5jaG9yIGVsZW1lbnQuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydtZW51JywgJ3NlbGVjdGVkTWVudSddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IE1lbnVMaXN0OyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL01lbnVMaXN0JzsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGdldFRoZW1lUHJvcHMsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgeyBlbGVtZW50QWNjZXB0aW5nUmVmLCBIVE1MRWxlbWVudFR5cGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnLi4vdXRpbHMvb3duZXJEb2N1bWVudCc7XG5pbXBvcnQgUG9ydGFsIGZyb20gJy4uL1BvcnRhbCc7XG5pbXBvcnQgY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uIGZyb20gJy4uL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbic7XG5pbXBvcnQgdXNlRm9ya1JlZiBmcm9tICcuLi91dGlscy91c2VGb3JrUmVmJztcbmltcG9ydCB1c2VFdmVudENhbGxiYWNrIGZyb20gJy4uL3V0aWxzL3VzZUV2ZW50Q2FsbGJhY2snO1xuaW1wb3J0IHpJbmRleCBmcm9tICcuLi9zdHlsZXMvekluZGV4JztcbmltcG9ydCBNb2RhbE1hbmFnZXIsIHsgYXJpYUhpZGRlbiB9IGZyb20gJy4vTW9kYWxNYW5hZ2VyJztcbmltcG9ydCBUcmFwRm9jdXMgZnJvbSAnLi4vVW5zdGFibGVfVHJhcEZvY3VzJztcbmltcG9ydCBTaW1wbGVCYWNrZHJvcCBmcm9tICcuL1NpbXBsZUJhY2tkcm9wJztcblxuZnVuY3Rpb24gZ2V0Q29udGFpbmVyKGNvbnRhaW5lcikge1xuICBjb250YWluZXIgPSB0eXBlb2YgY29udGFpbmVyID09PSAnZnVuY3Rpb24nID8gY29udGFpbmVyKCkgOiBjb250YWluZXI7XG4gIHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZShjb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBnZXRIYXNUcmFuc2l0aW9uKHByb3BzKSB7XG4gIHJldHVybiBwcm9wcy5jaGlsZHJlbiA/IHByb3BzLmNoaWxkcmVuLnByb3BzLmhhc093blByb3BlcnR5KCdpbicpIDogZmFsc2U7XG59IC8vIEEgbW9kYWwgbWFuYWdlciB1c2VkIHRvIHRyYWNrIGFuZCBtYW5hZ2UgdGhlIHN0YXRlIG9mIG9wZW4gTW9kYWxzLlxuLy8gTW9kYWxzIGRvbid0IG9wZW4gb24gdGhlIHNlcnZlciBzbyB0aGlzIHdvbid0IGNvbmZsaWN0IHdpdGggY29uY3VycmVudCByZXF1ZXN0cy5cblxuXG52YXIgZGVmYXVsdE1hbmFnZXIgPSBuZXcgTW9kYWxNYW5hZ2VyKCk7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5tb2RhbCxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBgTW9kYWxgIGhhcyBleGl0ZWQuICovXG4gICAgaGlkZGVuOiB7XG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJ1xuICAgIH1cbiAgfTtcbn07XG4vKipcbiAqIE1vZGFsIGlzIGEgbG93ZXItbGV2ZWwgY29uc3RydWN0IHRoYXQgaXMgbGV2ZXJhZ2VkIGJ5IHRoZSBmb2xsb3dpbmcgY29tcG9uZW50czpcbiAqXG4gKiAtIFtEaWFsb2ddKC9hcGkvZGlhbG9nLylcbiAqIC0gW0RyYXdlcl0oL2FwaS9kcmF3ZXIvKVxuICogLSBbTWVudV0oL2FwaS9tZW51LylcbiAqIC0gW1BvcG92ZXJdKC9hcGkvcG9wb3Zlci8pXG4gKlxuICogSWYgeW91IGFyZSBjcmVhdGluZyBhIG1vZGFsIGRpYWxvZywgeW91IHByb2JhYmx5IHdhbnQgdG8gdXNlIHRoZSBbRGlhbG9nXSgvYXBpL2RpYWxvZy8pIGNvbXBvbmVudFxuICogcmF0aGVyIHRoYW4gZGlyZWN0bHkgdXNpbmcgTW9kYWwuXG4gKlxuICogVGhpcyBjb21wb25lbnQgc2hhcmVzIG1hbnkgY29uY2VwdHMgd2l0aCBbcmVhY3Qtb3ZlcmxheXNdKGh0dHBzOi8vcmVhY3QtYm9vdHN0cmFwLmdpdGh1Yi5pby9yZWFjdC1vdmVybGF5cy8jbW9kYWxzKS5cbiAqL1xuXG52YXIgTW9kYWwgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBNb2RhbChpblByb3BzLCByZWYpIHtcbiAgdmFyIHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgdmFyIHByb3BzID0gZ2V0VGhlbWVQcm9wcyh7XG4gICAgbmFtZTogJ011aU1vZGFsJyxcbiAgICBwcm9wczogX2V4dGVuZHMoe30sIGluUHJvcHMpLFxuICAgIHRoZW1lOiB0aGVtZVxuICB9KTtcblxuICB2YXIgX3Byb3BzJEJhY2tkcm9wQ29tcG9uID0gcHJvcHMuQmFja2Ryb3BDb21wb25lbnQsXG4gICAgICBCYWNrZHJvcENvbXBvbmVudCA9IF9wcm9wcyRCYWNrZHJvcENvbXBvbiA9PT0gdm9pZCAwID8gU2ltcGxlQmFja2Ryb3AgOiBfcHJvcHMkQmFja2Ryb3BDb21wb24sXG4gICAgICBCYWNrZHJvcFByb3BzID0gcHJvcHMuQmFja2Ryb3BQcm9wcyxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBfcHJvcHMkY2xvc2VBZnRlclRyYW4gPSBwcm9wcy5jbG9zZUFmdGVyVHJhbnNpdGlvbixcbiAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uID0gX3Byb3BzJGNsb3NlQWZ0ZXJUcmFuID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRjbG9zZUFmdGVyVHJhbixcbiAgICAgIGNvbnRhaW5lciA9IHByb3BzLmNvbnRhaW5lcixcbiAgICAgIF9wcm9wcyRkaXNhYmxlQXV0b0ZvYyA9IHByb3BzLmRpc2FibGVBdXRvRm9jdXMsXG4gICAgICBkaXNhYmxlQXV0b0ZvY3VzID0gX3Byb3BzJGRpc2FibGVBdXRvRm9jID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlQXV0b0ZvYyxcbiAgICAgIF9wcm9wcyRkaXNhYmxlQmFja2RybyA9IHByb3BzLmRpc2FibGVCYWNrZHJvcENsaWNrLFxuICAgICAgZGlzYWJsZUJhY2tkcm9wQ2xpY2sgPSBfcHJvcHMkZGlzYWJsZUJhY2tkcm8gPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVCYWNrZHJvLFxuICAgICAgX3Byb3BzJGRpc2FibGVFbmZvcmNlID0gcHJvcHMuZGlzYWJsZUVuZm9yY2VGb2N1cyxcbiAgICAgIGRpc2FibGVFbmZvcmNlRm9jdXMgPSBfcHJvcHMkZGlzYWJsZUVuZm9yY2UgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVFbmZvcmNlLFxuICAgICAgX3Byb3BzJGRpc2FibGVFc2NhcGVLID0gcHJvcHMuZGlzYWJsZUVzY2FwZUtleURvd24sXG4gICAgICBkaXNhYmxlRXNjYXBlS2V5RG93biA9IF9wcm9wcyRkaXNhYmxlRXNjYXBlSyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUVzY2FwZUssXG4gICAgICBfcHJvcHMkZGlzYWJsZVBvcnRhbCA9IHByb3BzLmRpc2FibGVQb3J0YWwsXG4gICAgICBkaXNhYmxlUG9ydGFsID0gX3Byb3BzJGRpc2FibGVQb3J0YWwgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVQb3J0YWwsXG4gICAgICBfcHJvcHMkZGlzYWJsZVJlc3RvcmUgPSBwcm9wcy5kaXNhYmxlUmVzdG9yZUZvY3VzLFxuICAgICAgZGlzYWJsZVJlc3RvcmVGb2N1cyA9IF9wcm9wcyRkaXNhYmxlUmVzdG9yZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVJlc3RvcmUsXG4gICAgICBfcHJvcHMkZGlzYWJsZVNjcm9sbEwgPSBwcm9wcy5kaXNhYmxlU2Nyb2xsTG9jayxcbiAgICAgIGRpc2FibGVTY3JvbGxMb2NrID0gX3Byb3BzJGRpc2FibGVTY3JvbGxMID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlU2Nyb2xsTCxcbiAgICAgIF9wcm9wcyRoaWRlQmFja2Ryb3AgPSBwcm9wcy5oaWRlQmFja2Ryb3AsXG4gICAgICBoaWRlQmFja2Ryb3AgPSBfcHJvcHMkaGlkZUJhY2tkcm9wID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRoaWRlQmFja2Ryb3AsXG4gICAgICBfcHJvcHMka2VlcE1vdW50ZWQgPSBwcm9wcy5rZWVwTW91bnRlZCxcbiAgICAgIGtlZXBNb3VudGVkID0gX3Byb3BzJGtlZXBNb3VudGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRrZWVwTW91bnRlZCxcbiAgICAgIF9wcm9wcyRtYW5hZ2VyID0gcHJvcHMubWFuYWdlcixcbiAgICAgIG1hbmFnZXIgPSBfcHJvcHMkbWFuYWdlciA9PT0gdm9pZCAwID8gZGVmYXVsdE1hbmFnZXIgOiBfcHJvcHMkbWFuYWdlcixcbiAgICAgIG9uQmFja2Ryb3BDbGljayA9IHByb3BzLm9uQmFja2Ryb3BDbGljayxcbiAgICAgIG9uQ2xvc2UgPSBwcm9wcy5vbkNsb3NlLFxuICAgICAgb25Fc2NhcGVLZXlEb3duID0gcHJvcHMub25Fc2NhcGVLZXlEb3duLFxuICAgICAgb25SZW5kZXJlZCA9IHByb3BzLm9uUmVuZGVyZWQsXG4gICAgICBvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJCYWNrZHJvcENvbXBvbmVudFwiLCBcIkJhY2tkcm9wUHJvcHNcIiwgXCJjaGlsZHJlblwiLCBcImNsb3NlQWZ0ZXJUcmFuc2l0aW9uXCIsIFwiY29udGFpbmVyXCIsIFwiZGlzYWJsZUF1dG9Gb2N1c1wiLCBcImRpc2FibGVCYWNrZHJvcENsaWNrXCIsIFwiZGlzYWJsZUVuZm9yY2VGb2N1c1wiLCBcImRpc2FibGVFc2NhcGVLZXlEb3duXCIsIFwiZGlzYWJsZVBvcnRhbFwiLCBcImRpc2FibGVSZXN0b3JlRm9jdXNcIiwgXCJkaXNhYmxlU2Nyb2xsTG9ja1wiLCBcImhpZGVCYWNrZHJvcFwiLCBcImtlZXBNb3VudGVkXCIsIFwibWFuYWdlclwiLCBcIm9uQmFja2Ryb3BDbGlja1wiLCBcIm9uQ2xvc2VcIiwgXCJvbkVzY2FwZUtleURvd25cIiwgXCJvblJlbmRlcmVkXCIsIFwib3BlblwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpLFxuICAgICAgZXhpdGVkID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0RXhpdGVkID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBtb2RhbCA9IFJlYWN0LnVzZVJlZih7fSk7XG4gIHZhciBtb3VudE5vZGVSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciBtb2RhbFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIGhhbmRsZVJlZiA9IHVzZUZvcmtSZWYobW9kYWxSZWYsIHJlZik7XG4gIHZhciBoYXNUcmFuc2l0aW9uID0gZ2V0SGFzVHJhbnNpdGlvbihwcm9wcyk7XG5cbiAgdmFyIGdldERvYyA9IGZ1bmN0aW9uIGdldERvYygpIHtcbiAgICByZXR1cm4gb3duZXJEb2N1bWVudChtb3VudE5vZGVSZWYuY3VycmVudCk7XG4gIH07XG5cbiAgdmFyIGdldE1vZGFsID0gZnVuY3Rpb24gZ2V0TW9kYWwoKSB7XG4gICAgbW9kYWwuY3VycmVudC5tb2RhbFJlZiA9IG1vZGFsUmVmLmN1cnJlbnQ7XG4gICAgbW9kYWwuY3VycmVudC5tb3VudE5vZGUgPSBtb3VudE5vZGVSZWYuY3VycmVudDtcbiAgICByZXR1cm4gbW9kYWwuY3VycmVudDtcbiAgfTtcblxuICB2YXIgaGFuZGxlTW91bnRlZCA9IGZ1bmN0aW9uIGhhbmRsZU1vdW50ZWQoKSB7XG4gICAgbWFuYWdlci5tb3VudChnZXRNb2RhbCgpLCB7XG4gICAgICBkaXNhYmxlU2Nyb2xsTG9jazogZGlzYWJsZVNjcm9sbExvY2tcbiAgICB9KTsgLy8gRml4IGEgYnVnIG9uIENocm9tZSB3aGVyZSB0aGUgc2Nyb2xsIGlzbid0IGluaXRpYWxseSAwLlxuXG4gICAgbW9kYWxSZWYuY3VycmVudC5zY3JvbGxUb3AgPSAwO1xuICB9O1xuXG4gIHZhciBoYW5kbGVPcGVuID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc29sdmVkQ29udGFpbmVyID0gZ2V0Q29udGFpbmVyKGNvbnRhaW5lcikgfHwgZ2V0RG9jKCkuYm9keTtcbiAgICBtYW5hZ2VyLmFkZChnZXRNb2RhbCgpLCByZXNvbHZlZENvbnRhaW5lcik7IC8vIFRoZSBlbGVtZW50IHdhcyBhbHJlYWR5IG1vdW50ZWQuXG5cbiAgICBpZiAobW9kYWxSZWYuY3VycmVudCkge1xuICAgICAgaGFuZGxlTW91bnRlZCgpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBpc1RvcE1vZGFsID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtYW5hZ2VyLmlzVG9wTW9kYWwoZ2V0TW9kYWwoKSk7XG4gIH0sIFttYW5hZ2VyXSk7XG4gIHZhciBoYW5kbGVQb3J0YWxSZWYgPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgbW91bnROb2RlUmVmLmN1cnJlbnQgPSBub2RlO1xuXG4gICAgaWYgKCFub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9uUmVuZGVyZWQpIHtcbiAgICAgIG9uUmVuZGVyZWQoKTtcbiAgICB9XG5cbiAgICBpZiAob3BlbiAmJiBpc1RvcE1vZGFsKCkpIHtcbiAgICAgIGhhbmRsZU1vdW50ZWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJpYUhpZGRlbihtb2RhbFJlZi5jdXJyZW50LCB0cnVlKTtcbiAgICB9XG4gIH0pO1xuICB2YXIgaGFuZGxlQ2xvc2UgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgbWFuYWdlci5yZW1vdmUoZ2V0TW9kYWwoKSk7XG4gIH0sIFttYW5hZ2VyXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgfTtcbiAgfSwgW2hhbmRsZUNsb3NlXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG9wZW4pIHtcbiAgICAgIGhhbmRsZU9wZW4oKTtcbiAgICB9IGVsc2UgaWYgKCFoYXNUcmFuc2l0aW9uIHx8ICFjbG9zZUFmdGVyVHJhbnNpdGlvbikge1xuICAgICAgaGFuZGxlQ2xvc2UoKTtcbiAgICB9XG4gIH0sIFtvcGVuLCBoYW5kbGVDbG9zZSwgaGFzVHJhbnNpdGlvbiwgY2xvc2VBZnRlclRyYW5zaXRpb24sIGhhbmRsZU9wZW5dKTtcblxuICBpZiAoIWtlZXBNb3VudGVkICYmICFvcGVuICYmICghaGFzVHJhbnNpdGlvbiB8fCBleGl0ZWQpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgaGFuZGxlRW50ZXIgPSBmdW5jdGlvbiBoYW5kbGVFbnRlcigpIHtcbiAgICBzZXRFeGl0ZWQoZmFsc2UpO1xuICB9O1xuXG4gIHZhciBoYW5kbGVFeGl0ZWQgPSBmdW5jdGlvbiBoYW5kbGVFeGl0ZWQoKSB7XG4gICAgc2V0RXhpdGVkKHRydWUpO1xuXG4gICAgaWYgKGNsb3NlQWZ0ZXJUcmFuc2l0aW9uKSB7XG4gICAgICBoYW5kbGVDbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlQmFja2Ryb3BDbGljayA9IGZ1bmN0aW9uIGhhbmRsZUJhY2tkcm9wQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9uQmFja2Ryb3BDbGljaykge1xuICAgICAgb25CYWNrZHJvcENsaWNrKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoIWRpc2FibGVCYWNrZHJvcENsaWNrICYmIG9uQ2xvc2UpIHtcbiAgICAgIG9uQ2xvc2UoZXZlbnQsICdiYWNrZHJvcENsaWNrJyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgIC8vIFRoZSBoYW5kbGVyIGRvZXNuJ3QgdGFrZSBldmVudC5kZWZhdWx0UHJldmVudGVkIGludG8gYWNjb3VudDpcbiAgICAvL1xuICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgaXMgbWVhbnQgdG8gc3RvcCBkZWZhdWx0IGJlaGF2aW91cnMgbGlrZVxuICAgIC8vIGNsaWNraW5nIGEgY2hlY2tib3ggdG8gY2hlY2sgaXQsIGhpdHRpbmcgYSBidXR0b24gdG8gc3VibWl0IGEgZm9ybSxcbiAgICAvLyBhbmQgaGl0dGluZyBsZWZ0IGFycm93IHRvIG1vdmUgdGhlIGN1cnNvciBpbiBhIHRleHQgaW5wdXQgZXRjLlxuICAgIC8vIE9ubHkgc3BlY2lhbCBIVE1MIGVsZW1lbnRzIGhhdmUgdGhlc2UgZGVmYXVsdCBiZWhhdmlvcnMuXG4gICAgaWYgKGV2ZW50LmtleSAhPT0gJ0VzY2FwZScgfHwgIWlzVG9wTW9kYWwoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvbkVzY2FwZUtleURvd24pIHtcbiAgICAgIG9uRXNjYXBlS2V5RG93bihldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKCFkaXNhYmxlRXNjYXBlS2V5RG93bikge1xuICAgICAgLy8gU3dhbGxvdyB0aGUgZXZlbnQsIGluIGNhc2Ugc29tZW9uZSBpcyBsaXN0ZW5pbmcgZm9yIHRoZSBlc2NhcGUga2V5IG9uIHRoZSBib2R5LlxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIGlmIChvbkNsb3NlKSB7XG4gICAgICAgIG9uQ2xvc2UoZXZlbnQsICdlc2NhcGVLZXlEb3duJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBpbmxpbmVTdHlsZSA9IHN0eWxlcyh0aGVtZSB8fCB7XG4gICAgekluZGV4OiB6SW5kZXhcbiAgfSk7XG4gIHZhciBjaGlsZFByb3BzID0ge307XG5cbiAgaWYgKGNoaWxkcmVuLnByb3BzLnRhYkluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICBjaGlsZFByb3BzLnRhYkluZGV4ID0gY2hpbGRyZW4ucHJvcHMudGFiSW5kZXggfHwgJy0xJztcbiAgfSAvLyBJdCdzIGEgVHJhbnNpdGlvbiBsaWtlIGNvbXBvbmVudFxuXG5cbiAgaWYgKGhhc1RyYW5zaXRpb24pIHtcbiAgICBjaGlsZFByb3BzLm9uRW50ZXIgPSBjcmVhdGVDaGFpbmVkRnVuY3Rpb24oaGFuZGxlRW50ZXIsIGNoaWxkcmVuLnByb3BzLm9uRW50ZXIpO1xuICAgIGNoaWxkUHJvcHMub25FeGl0ZWQgPSBjcmVhdGVDaGFpbmVkRnVuY3Rpb24oaGFuZGxlRXhpdGVkLCBjaGlsZHJlbi5wcm9wcy5vbkV4aXRlZCk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUG9ydGFsLCB7XG4gICAgcmVmOiBoYW5kbGVQb3J0YWxSZWYsXG4gICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgZGlzYWJsZVBvcnRhbDogZGlzYWJsZVBvcnRhbFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBoYW5kbGVSZWYsXG4gICAgb25LZXlEb3duOiBoYW5kbGVLZXlEb3duLFxuICAgIHJvbGU6IFwicHJlc2VudGF0aW9uXCJcbiAgfSwgb3RoZXIsIHtcbiAgICBzdHlsZTogX2V4dGVuZHMoe30sIGlubGluZVN0eWxlLnJvb3QsICFvcGVuICYmIGV4aXRlZCA/IGlubGluZVN0eWxlLmhpZGRlbiA6IHt9LCBvdGhlci5zdHlsZSlcbiAgfSksIGhpZGVCYWNrZHJvcCA/IG51bGwgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCYWNrZHJvcENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIG9wZW46IG9wZW4sXG4gICAgb25DbGljazogaGFuZGxlQmFja2Ryb3BDbGlja1xuICB9LCBCYWNrZHJvcFByb3BzKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYXBGb2N1cywge1xuICAgIGRpc2FibGVFbmZvcmNlRm9jdXM6IGRpc2FibGVFbmZvcmNlRm9jdXMsXG4gICAgZGlzYWJsZUF1dG9Gb2N1czogZGlzYWJsZUF1dG9Gb2N1cyxcbiAgICBkaXNhYmxlUmVzdG9yZUZvY3VzOiBkaXNhYmxlUmVzdG9yZUZvY3VzLFxuICAgIGdldERvYzogZ2V0RG9jLFxuICAgIGlzRW5hYmxlZDogaXNUb3BNb2RhbCxcbiAgICBvcGVuOiBvcGVuXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIGNoaWxkUHJvcHMpKSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBNb2RhbC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBBIGJhY2tkcm9wIGNvbXBvbmVudC4gVGhpcyBwcm9wIGVuYWJsZXMgY3VzdG9tIGJhY2tkcm9wIHJlbmRlcmluZy5cbiAgICovXG4gIEJhY2tkcm9wQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIFtgQmFja2Ryb3BgXSgvYXBpL2JhY2tkcm9wLykgZWxlbWVudC5cbiAgICovXG4gIEJhY2tkcm9wUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEEgc2luZ2xlIGNoaWxkIGNvbnRlbnQgZWxlbWVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBlbGVtZW50QWNjZXB0aW5nUmVmLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFdoZW4gc2V0IHRvIHRydWUgdGhlIE1vZGFsIHdhaXRzIHVudGlsIGEgbmVzdGVkIFRyYW5zaXRpb24gaXMgY29tcGxldGVkIGJlZm9yZSBjbG9zaW5nLlxuICAgKi9cbiAgY2xvc2VBZnRlclRyYW5zaXRpb246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBIEhUTUwgZWxlbWVudCwgY29tcG9uZW50IGluc3RhbmNlLCBvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgZWl0aGVyLlxuICAgKiBUaGUgYGNvbnRhaW5lcmAgd2lsbCBoYXZlIHRoZSBwb3J0YWwgY2hpbGRyZW4gYXBwZW5kZWQgdG8gaXQuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIGl0IHVzZXMgdGhlIGJvZHkgb2YgdGhlIHRvcC1sZXZlbCBkb2N1bWVudCBvYmplY3QsXG4gICAqIHNvIGl0J3Mgc2ltcGx5IGBkb2N1bWVudC5ib2R5YCBtb3N0IG9mIHRoZSB0aW1lLlxuICAgKi9cbiAgY29udGFpbmVyOiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAub25lT2ZUeXBlKFtIVE1MRWxlbWVudFR5cGUsIFByb3BUeXBlcy5pbnN0YW5jZU9mKFJlYWN0LkNvbXBvbmVudCksIFByb3BUeXBlcy5mdW5jXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIG1vZGFsIHdpbGwgbm90IGF1dG9tYXRpY2FsbHkgc2hpZnQgZm9jdXMgdG8gaXRzZWxmIHdoZW4gaXQgb3BlbnMsIGFuZFxuICAgKiByZXBsYWNlIGl0IHRvIHRoZSBsYXN0IGZvY3VzZWQgZWxlbWVudCB3aGVuIGl0IGNsb3Nlcy5cbiAgICogVGhpcyBhbHNvIHdvcmtzIGNvcnJlY3RseSB3aXRoIGFueSBtb2RhbCBjaGlsZHJlbiB0aGF0IGhhdmUgdGhlIGBkaXNhYmxlQXV0b0ZvY3VzYCBwcm9wLlxuICAgKlxuICAgKiBHZW5lcmFsbHkgdGhpcyBzaG91bGQgbmV2ZXIgYmUgc2V0IHRvIGB0cnVlYCBhcyBpdCBtYWtlcyB0aGUgbW9kYWwgbGVzc1xuICAgKiBhY2Nlc3NpYmxlIHRvIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMsIGxpa2Ugc2NyZWVuIHJlYWRlcnMuXG4gICAqL1xuICBkaXNhYmxlQXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBjbGlja2luZyB0aGUgYmFja2Ryb3Agd2lsbCBub3QgZmlyZSBgb25DbG9zZWAuXG4gICAqL1xuICBkaXNhYmxlQmFja2Ryb3BDbGljazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIG1vZGFsIHdpbGwgbm90IHByZXZlbnQgZm9jdXMgZnJvbSBsZWF2aW5nIHRoZSBtb2RhbCB3aGlsZSBvcGVuLlxuICAgKlxuICAgKiBHZW5lcmFsbHkgdGhpcyBzaG91bGQgbmV2ZXIgYmUgc2V0IHRvIGB0cnVlYCBhcyBpdCBtYWtlcyB0aGUgbW9kYWwgbGVzc1xuICAgKiBhY2Nlc3NpYmxlIHRvIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMsIGxpa2Ugc2NyZWVuIHJlYWRlcnMuXG4gICAqL1xuICBkaXNhYmxlRW5mb3JjZUZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBoaXR0aW5nIGVzY2FwZSB3aWxsIG5vdCBmaXJlIGBvbkNsb3NlYC5cbiAgICovXG4gIGRpc2FibGVFc2NhcGVLZXlEb3duOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUgcG9ydGFsIGJlaGF2aW9yLlxuICAgKiBUaGUgY2hpbGRyZW4gc3RheSB3aXRoaW4gaXQncyBwYXJlbnQgRE9NIGhpZXJhcmNoeS5cbiAgICovXG4gIGRpc2FibGVQb3J0YWw6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBtb2RhbCB3aWxsIG5vdCByZXN0b3JlIGZvY3VzIHRvIHByZXZpb3VzbHkgZm9jdXNlZCBlbGVtZW50IG9uY2VcbiAgICogbW9kYWwgaXMgaGlkZGVuLlxuICAgKi9cbiAgZGlzYWJsZVJlc3RvcmVGb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIHNjcm9sbCBsb2NrIGJlaGF2aW9yLlxuICAgKi9cbiAgZGlzYWJsZVNjcm9sbExvY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBiYWNrZHJvcCBpcyBub3QgcmVuZGVyZWQuXG4gICAqL1xuICBoaWRlQmFja2Ryb3A6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBbHdheXMga2VlcCB0aGUgY2hpbGRyZW4gaW4gdGhlIERPTS5cbiAgICogVGhpcyBwcm9wIGNhbiBiZSB1c2VmdWwgaW4gU0VPIHNpdHVhdGlvbiBvclxuICAgKiB3aGVuIHlvdSB3YW50IHRvIG1heGltaXplIHRoZSByZXNwb25zaXZlbmVzcyBvZiB0aGUgTW9kYWwuXG4gICAqL1xuICBrZWVwTW91bnRlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG1hbmFnZXI6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGJhY2tkcm9wIGlzIGNsaWNrZWQuXG4gICAqL1xuICBvbkJhY2tkcm9wQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjb21wb25lbnQgcmVxdWVzdHMgdG8gYmUgY2xvc2VkLlxuICAgKiBUaGUgYHJlYXNvbmAgcGFyYW1ldGVyIGNhbiBvcHRpb25hbGx5IGJlIHVzZWQgdG8gY29udHJvbCB0aGUgcmVzcG9uc2UgdG8gYG9uQ2xvc2VgLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gQ2FuIGJlOiBgXCJlc2NhcGVLZXlEb3duXCJgLCBgXCJiYWNrZHJvcENsaWNrXCJgLlxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGVzY2FwZSBrZXkgaXMgcHJlc3NlZCxcbiAgICogYGRpc2FibGVFc2NhcGVLZXlEb3duYCBpcyBmYWxzZSBhbmQgdGhlIG1vZGFsIGlzIGluIGZvY3VzLlxuICAgKi9cbiAgb25Fc2NhcGVLZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgb25jZSB0aGUgY2hpbGRyZW4gaGFzIGJlZW4gbW91bnRlZCBpbnRvIHRoZSBgY29udGFpbmVyYC5cbiAgICogSXQgc2lnbmFscyB0aGF0IHRoZSBgb3Blbj17dHJ1ZX1gIHByb3AgdG9vayBlZmZlY3QuXG4gICAqXG4gICAqIFRoaXMgcHJvcCB3aWxsIGJlIGRlcHJlY2F0ZWQgYW5kIHJlbW92ZWQgaW4gdjUsIHRoZSByZWYgY2FuIGJlIHVzZWQgaW5zdGVhZC5cbiAgICovXG4gIG9uUmVuZGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBtb2RhbCBpcyBvcGVuLlxuICAgKi9cbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IE1vZGFsOyIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXlcIjtcbmltcG9ydCBnZXRTY3JvbGxiYXJTaXplIGZyb20gJy4uL3V0aWxzL2dldFNjcm9sbGJhclNpemUnO1xuaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnLi4vdXRpbHMvb3duZXJEb2N1bWVudCc7XG5pbXBvcnQgb3duZXJXaW5kb3cgZnJvbSAnLi4vdXRpbHMvb3duZXJXaW5kb3cnOyAvLyBJcyBhIHZlcnRpY2FsIHNjcm9sbGJhciBkaXNwbGF5ZWQ/XG5cbmZ1bmN0aW9uIGlzT3ZlcmZsb3dpbmcoY29udGFpbmVyKSB7XG4gIHZhciBkb2MgPSBvd25lckRvY3VtZW50KGNvbnRhaW5lcik7XG5cbiAgaWYgKGRvYy5ib2R5ID09PSBjb250YWluZXIpIHtcbiAgICByZXR1cm4gb3duZXJXaW5kb3coZG9jKS5pbm5lcldpZHRoID4gZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgfVxuXG4gIHJldHVybiBjb250YWluZXIuc2Nyb2xsSGVpZ2h0ID4gY29udGFpbmVyLmNsaWVudEhlaWdodDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFyaWFIaWRkZW4obm9kZSwgc2hvdykge1xuICBpZiAoc2hvdykge1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGFkZGluZ1JpZ2h0KG5vZGUpIHtcbiAgcmV0dXJuIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpWydwYWRkaW5nLXJpZ2h0J10sIDEwKSB8fCAwO1xufVxuXG5mdW5jdGlvbiBhcmlhSGlkZGVuU2libGluZ3MoY29udGFpbmVyLCBtb3VudE5vZGUsIGN1cnJlbnROb2RlKSB7XG4gIHZhciBub2Rlc1RvRXhjbHVkZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogW107XG4gIHZhciBzaG93ID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgPyBhcmd1bWVudHNbNF0gOiB1bmRlZmluZWQ7XG4gIHZhciBibGFja2xpc3QgPSBbbW91bnROb2RlLCBjdXJyZW50Tm9kZV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShub2Rlc1RvRXhjbHVkZSkpO1xuICB2YXIgYmxhY2tsaXN0VGFnTmFtZXMgPSBbJ1RFTVBMQVRFJywgJ1NDUklQVCcsICdTVFlMRSddO1xuICBbXS5mb3JFYWNoLmNhbGwoY29udGFpbmVyLmNoaWxkcmVuLCBmdW5jdGlvbiAobm9kZSkge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxICYmIGJsYWNrbGlzdC5pbmRleE9mKG5vZGUpID09PSAtMSAmJiBibGFja2xpc3RUYWdOYW1lcy5pbmRleE9mKG5vZGUudGFnTmFtZSkgPT09IC0xKSB7XG4gICAgICBhcmlhSGlkZGVuKG5vZGUsIHNob3cpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleE9mKGNvbnRhaW5lckluZm8sIGNhbGxiYWNrKSB7XG4gIHZhciBpZHggPSAtMTtcbiAgY29udGFpbmVySW5mby5zb21lKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgIGlmIChjYWxsYmFjayhpdGVtKSkge1xuICAgICAgaWR4ID0gaW5kZXg7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuICByZXR1cm4gaWR4O1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDb250YWluZXIoY29udGFpbmVySW5mbywgcHJvcHMpIHtcbiAgdmFyIHJlc3RvcmVTdHlsZSA9IFtdO1xuICB2YXIgcmVzdG9yZVBhZGRpbmdzID0gW107XG4gIHZhciBjb250YWluZXIgPSBjb250YWluZXJJbmZvLmNvbnRhaW5lcjtcbiAgdmFyIGZpeGVkTm9kZXM7XG5cbiAgaWYgKCFwcm9wcy5kaXNhYmxlU2Nyb2xsTG9jaykge1xuICAgIGlmIChpc092ZXJmbG93aW5nKGNvbnRhaW5lcikpIHtcbiAgICAgIC8vIENvbXB1dGUgdGhlIHNpemUgYmVmb3JlIGFwcGx5aW5nIG92ZXJmbG93IGhpZGRlbiB0byBhdm9pZCBhbnkgc2Nyb2xsIGp1bXBzLlxuICAgICAgdmFyIHNjcm9sbGJhclNpemUgPSBnZXRTY3JvbGxiYXJTaXplKCk7XG4gICAgICByZXN0b3JlU3R5bGUucHVzaCh7XG4gICAgICAgIHZhbHVlOiBjb250YWluZXIuc3R5bGUucGFkZGluZ1JpZ2h0LFxuICAgICAgICBrZXk6ICdwYWRkaW5nLXJpZ2h0JyxcbiAgICAgICAgZWw6IGNvbnRhaW5lclxuICAgICAgfSk7IC8vIFVzZSBjb21wdXRlZCBzdHlsZSwgaGVyZSB0byBnZXQgdGhlIHJlYWwgcGFkZGluZyB0byBhZGQgb3VyIHNjcm9sbGJhciB3aWR0aC5cblxuICAgICAgY29udGFpbmVyLnN0eWxlWydwYWRkaW5nLXJpZ2h0J10gPSBcIlwiLmNvbmNhdChnZXRQYWRkaW5nUmlnaHQoY29udGFpbmVyKSArIHNjcm9sbGJhclNpemUsIFwicHhcIik7IC8vIC5tdWktZml4ZWQgaXMgYSBnbG9iYWwgaGVscGVyLlxuXG4gICAgICBmaXhlZE5vZGVzID0gb3duZXJEb2N1bWVudChjb250YWluZXIpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tdWktZml4ZWQnKTtcbiAgICAgIFtdLmZvckVhY2guY2FsbChmaXhlZE5vZGVzLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXN0b3JlUGFkZGluZ3MucHVzaChub2RlLnN0eWxlLnBhZGRpbmdSaWdodCk7XG4gICAgICAgIG5vZGUuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIi5jb25jYXQoZ2V0UGFkZGluZ1JpZ2h0KG5vZGUpICsgc2Nyb2xsYmFyU2l6ZSwgXCJweFwiKTtcbiAgICAgIH0pO1xuICAgIH0gLy8gSW1wcm92ZSBHYXRzYnkgc3VwcG9ydFxuICAgIC8vIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vc25pcHBldHMvY3NzL2ZvcmNlLXZlcnRpY2FsLXNjcm9sbGJhci9cblxuXG4gICAgdmFyIHBhcmVudCA9IGNvbnRhaW5lci5wYXJlbnRFbGVtZW50O1xuICAgIHZhciBzY3JvbGxDb250YWluZXIgPSBwYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJyAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpWydvdmVyZmxvdy15J10gPT09ICdzY3JvbGwnID8gcGFyZW50IDogY29udGFpbmVyOyAvLyBCbG9jayB0aGUgc2Nyb2xsIGV2ZW4gaWYgbm8gc2Nyb2xsYmFyIGlzIHZpc2libGUgdG8gYWNjb3VudCBmb3IgbW9iaWxlIGtleWJvYXJkXG4gICAgLy8gc2NyZWVuc2l6ZSBzaHJpbmsuXG5cbiAgICByZXN0b3JlU3R5bGUucHVzaCh7XG4gICAgICB2YWx1ZTogc2Nyb2xsQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93LFxuICAgICAga2V5OiAnb3ZlcmZsb3cnLFxuICAgICAgZWw6IHNjcm9sbENvbnRhaW5lclxuICAgIH0pO1xuICAgIHNjcm9sbENvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICB9XG5cbiAgdmFyIHJlc3RvcmUgPSBmdW5jdGlvbiByZXN0b3JlKCkge1xuICAgIGlmIChmaXhlZE5vZGVzKSB7XG4gICAgICBbXS5mb3JFYWNoLmNhbGwoZml4ZWROb2RlcywgZnVuY3Rpb24gKG5vZGUsIGkpIHtcbiAgICAgICAgaWYgKHJlc3RvcmVQYWRkaW5nc1tpXSkge1xuICAgICAgICAgIG5vZGUuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcmVzdG9yZVBhZGRpbmdzW2ldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5vZGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctcmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzdG9yZVN0eWxlLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICAgICAgZWwgPSBfcmVmLmVsLFxuICAgICAgICAgIGtleSA9IF9yZWYua2V5O1xuXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eShrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiByZXN0b3JlO1xufVxuXG5mdW5jdGlvbiBnZXRIaWRkZW5TaWJsaW5ncyhjb250YWluZXIpIHtcbiAgdmFyIGhpZGRlblNpYmxpbmdzID0gW107XG4gIFtdLmZvckVhY2guY2FsbChjb250YWluZXIuY2hpbGRyZW4sIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaWYgKG5vZGUuZ2V0QXR0cmlidXRlICYmIG5vZGUuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpID09PSAndHJ1ZScpIHtcbiAgICAgIGhpZGRlblNpYmxpbmdzLnB1c2gobm9kZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGhpZGRlblNpYmxpbmdzO1xufVxuLyoqXG4gKiBAaWdub3JlIC0gZG8gbm90IGRvY3VtZW50LlxuICpcbiAqIFByb3BlciBzdGF0ZSBtYW5hZ2VtZW50IGZvciBjb250YWluZXJzIGFuZCB0aGUgbW9kYWxzIGluIHRob3NlIGNvbnRhaW5lcnMuXG4gKiBTaW1wbGlmaWVkLCBidXQgaW5zcGlyZWQgYnkgcmVhY3Qtb3ZlcmxheSdzIE1vZGFsTWFuYWdlciBjbGFzcy5cbiAqIFVzZWQgYnkgdGhlIE1vZGFsIHRvIGVuc3VyZSBwcm9wZXIgc3R5bGluZyBvZiBjb250YWluZXJzLlxuICovXG5cblxudmFyIE1vZGFsTWFuYWdlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1vZGFsTWFuYWdlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTW9kYWxNYW5hZ2VyKTtcblxuICAgIC8vIHRoaXMubW9kYWxzW21vZGFsSW5kZXhdID0gbW9kYWxcbiAgICB0aGlzLm1vZGFscyA9IFtdOyAvLyB0aGlzLmNvbnRhaW5lcnNbY29udGFpbmVySW5kZXhdID0ge1xuICAgIC8vICAgbW9kYWxzOiBbXSxcbiAgICAvLyAgIGNvbnRhaW5lcixcbiAgICAvLyAgIHJlc3RvcmU6IG51bGwsXG4gICAgLy8gfVxuXG4gICAgdGhpcy5jb250YWluZXJzID0gW107XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoTW9kYWxNYW5hZ2VyLCBbe1xuICAgIGtleTogXCJhZGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKG1vZGFsLCBjb250YWluZXIpIHtcbiAgICAgIHZhciBtb2RhbEluZGV4ID0gdGhpcy5tb2RhbHMuaW5kZXhPZihtb2RhbCk7XG5cbiAgICAgIGlmIChtb2RhbEluZGV4ICE9PSAtMSkge1xuICAgICAgICByZXR1cm4gbW9kYWxJbmRleDtcbiAgICAgIH1cblxuICAgICAgbW9kYWxJbmRleCA9IHRoaXMubW9kYWxzLmxlbmd0aDtcbiAgICAgIHRoaXMubW9kYWxzLnB1c2gobW9kYWwpOyAvLyBJZiB0aGUgbW9kYWwgd2UgYXJlIGFkZGluZyBpcyBhbHJlYWR5IGluIHRoZSBET00uXG5cbiAgICAgIGlmIChtb2RhbC5tb2RhbFJlZikge1xuICAgICAgICBhcmlhSGlkZGVuKG1vZGFsLm1vZGFsUmVmLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBoaWRkZW5TaWJsaW5nTm9kZXMgPSBnZXRIaWRkZW5TaWJsaW5ncyhjb250YWluZXIpO1xuICAgICAgYXJpYUhpZGRlblNpYmxpbmdzKGNvbnRhaW5lciwgbW9kYWwubW91bnROb2RlLCBtb2RhbC5tb2RhbFJlZiwgaGlkZGVuU2libGluZ05vZGVzLCB0cnVlKTtcbiAgICAgIHZhciBjb250YWluZXJJbmRleCA9IGZpbmRJbmRleE9mKHRoaXMuY29udGFpbmVycywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uY29udGFpbmVyID09PSBjb250YWluZXI7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGNvbnRhaW5lckluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lcnNbY29udGFpbmVySW5kZXhdLm1vZGFscy5wdXNoKG1vZGFsKTtcbiAgICAgICAgcmV0dXJuIG1vZGFsSW5kZXg7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGFpbmVycy5wdXNoKHtcbiAgICAgICAgbW9kYWxzOiBbbW9kYWxdLFxuICAgICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICAgICAgcmVzdG9yZTogbnVsbCxcbiAgICAgICAgaGlkZGVuU2libGluZ05vZGVzOiBoaWRkZW5TaWJsaW5nTm9kZXNcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1vZGFsSW5kZXg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1vdW50KG1vZGFsLCBwcm9wcykge1xuICAgICAgdmFyIGNvbnRhaW5lckluZGV4ID0gZmluZEluZGV4T2YodGhpcy5jb250YWluZXJzLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5tb2RhbHMuaW5kZXhPZihtb2RhbCkgIT09IC0xO1xuICAgICAgfSk7XG4gICAgICB2YXIgY29udGFpbmVySW5mbyA9IHRoaXMuY29udGFpbmVyc1tjb250YWluZXJJbmRleF07XG5cbiAgICAgIGlmICghY29udGFpbmVySW5mby5yZXN0b3JlKSB7XG4gICAgICAgIGNvbnRhaW5lckluZm8ucmVzdG9yZSA9IGhhbmRsZUNvbnRhaW5lcihjb250YWluZXJJbmZvLCBwcm9wcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUobW9kYWwpIHtcbiAgICAgIHZhciBtb2RhbEluZGV4ID0gdGhpcy5tb2RhbHMuaW5kZXhPZihtb2RhbCk7XG5cbiAgICAgIGlmIChtb2RhbEluZGV4ID09PSAtMSkge1xuICAgICAgICByZXR1cm4gbW9kYWxJbmRleDtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRhaW5lckluZGV4ID0gZmluZEluZGV4T2YodGhpcy5jb250YWluZXJzLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5tb2RhbHMuaW5kZXhPZihtb2RhbCkgIT09IC0xO1xuICAgICAgfSk7XG4gICAgICB2YXIgY29udGFpbmVySW5mbyA9IHRoaXMuY29udGFpbmVyc1tjb250YWluZXJJbmRleF07XG4gICAgICBjb250YWluZXJJbmZvLm1vZGFscy5zcGxpY2UoY29udGFpbmVySW5mby5tb2RhbHMuaW5kZXhPZihtb2RhbCksIDEpO1xuICAgICAgdGhpcy5tb2RhbHMuc3BsaWNlKG1vZGFsSW5kZXgsIDEpOyAvLyBJZiB0aGF0IHdhcyB0aGUgbGFzdCBtb2RhbCBpbiBhIGNvbnRhaW5lciwgY2xlYW4gdXAgdGhlIGNvbnRhaW5lci5cblxuICAgICAgaWYgKGNvbnRhaW5lckluZm8ubW9kYWxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBUaGUgbW9kYWwgbWlnaHQgYmUgY2xvc2VkIGJlZm9yZSBpdCBoYWQgdGhlIGNoYW5jZSB0byBiZSBtb3VudGVkIGluIHRoZSBET00uXG4gICAgICAgIGlmIChjb250YWluZXJJbmZvLnJlc3RvcmUpIHtcbiAgICAgICAgICBjb250YWluZXJJbmZvLnJlc3RvcmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb2RhbC5tb2RhbFJlZikge1xuICAgICAgICAgIC8vIEluIGNhc2UgdGhlIG1vZGFsIHdhc24ndCBpbiB0aGUgRE9NIHlldC5cbiAgICAgICAgICBhcmlhSGlkZGVuKG1vZGFsLm1vZGFsUmVmLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFyaWFIaWRkZW5TaWJsaW5ncyhjb250YWluZXJJbmZvLmNvbnRhaW5lciwgbW9kYWwubW91bnROb2RlLCBtb2RhbC5tb2RhbFJlZiwgY29udGFpbmVySW5mby5oaWRkZW5TaWJsaW5nTm9kZXMsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJzLnNwbGljZShjb250YWluZXJJbmRleCwgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPdGhlcndpc2UgbWFrZSBzdXJlIHRoZSBuZXh0IHRvcCBtb2RhbCBpcyB2aXNpYmxlIHRvIGEgc2NyZWVuIHJlYWRlci5cbiAgICAgICAgdmFyIG5leHRUb3AgPSBjb250YWluZXJJbmZvLm1vZGFsc1tjb250YWluZXJJbmZvLm1vZGFscy5sZW5ndGggLSAxXTsgLy8gYXMgc29vbiBhcyBhIG1vZGFsIGlzIGFkZGluZyBpdHMgbW9kYWxSZWYgaXMgdW5kZWZpbmVkLiBpdCBjYW4ndCBzZXRcbiAgICAgICAgLy8gYXJpYS1oaWRkZW4gYmVjYXVzZSB0aGUgZG9tIGVsZW1lbnQgZG9lc24ndCBleGlzdCBlaXRoZXJcbiAgICAgICAgLy8gd2hlbiBtb2RhbCB3YXMgdW5tb3VudGVkIGJlZm9yZSBtb2RhbFJlZiBnZXRzIG51bGxcblxuICAgICAgICBpZiAobmV4dFRvcC5tb2RhbFJlZikge1xuICAgICAgICAgIGFyaWFIaWRkZW4obmV4dFRvcC5tb2RhbFJlZiwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtb2RhbEluZGV4O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1RvcE1vZGFsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzVG9wTW9kYWwobW9kYWwpIHtcbiAgICAgIHJldHVybiB0aGlzLm1vZGFscy5sZW5ndGggPiAwICYmIHRoaXMubW9kYWxzW3RoaXMubW9kYWxzLmxlbmd0aCAtIDFdID09PSBtb2RhbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTW9kYWxNYW5hZ2VyO1xufSgpO1xuXG5leHBvcnQgeyBNb2RhbE1hbmFnZXIgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcm9vdDoge1xuICAgIHpJbmRleDogLTEsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6ICd0cmFuc3BhcmVudCdcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBpbnZpc2libGU9e3RydWV9YC4gKi9cbiAgaW52aXNpYmxlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG4gIH1cbn07XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxudmFyIFNpbXBsZUJhY2tkcm9wID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gU2ltcGxlQmFja2Ryb3AocHJvcHMsIHJlZikge1xuICB2YXIgX3Byb3BzJGludmlzaWJsZSA9IHByb3BzLmludmlzaWJsZSxcbiAgICAgIGludmlzaWJsZSA9IF9wcm9wcyRpbnZpc2libGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGludmlzaWJsZSxcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImludmlzaWJsZVwiLCBcIm9wZW5cIl0pO1xuXG4gIHJldHVybiBvcGVuID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlciwge1xuICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgc3R5bGVzLnJvb3QsIGludmlzaWJsZSA/IHN0eWxlcy5pbnZpc2libGUgOiB7fSwgb3RoZXIuc3R5bGUpXG4gIH0pKSA6IG51bGw7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFNpbXBsZUJhY2tkcm9wLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGJhY2tkcm9wIGlzIGludmlzaWJsZS5cbiAgICogSXQgY2FuIGJlIHVzZWQgd2hlbiByZW5kZXJpbmcgYSBwb3BvdmVyIG9yIGEgY3VzdG9tIHNlbGVjdCBjb21wb25lbnQuXG4gICAqL1xuICBpbnZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBiYWNrZHJvcCBpcyBvcGVuLlxuICAgKi9cbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IFNpbXBsZUJhY2tkcm9wOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL01vZGFsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kYWxNYW5hZ2VyIH0gZnJvbSAnLi9Nb2RhbE1hbmFnZXInOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTmF0aXZlU2VsZWN0SW5wdXQgZnJvbSAnLi9OYXRpdmVTZWxlY3RJbnB1dCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgZm9ybUNvbnRyb2xTdGF0ZSBmcm9tICcuLi9Gb3JtQ29udHJvbC9mb3JtQ29udHJvbFN0YXRlJztcbmltcG9ydCB1c2VGb3JtQ29udHJvbCBmcm9tICcuLi9Gb3JtQ29udHJvbC91c2VGb3JtQ29udHJvbCc7XG5pbXBvcnQgQXJyb3dEcm9wRG93bkljb24gZnJvbSAnLi4vaW50ZXJuYWwvc3ZnLWljb25zL0Fycm93RHJvcERvd24nO1xuaW1wb3J0IElucHV0IGZyb20gJy4uL0lucHV0JztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHNlbGVjdCBjb21wb25lbnQgYHJvb3RgIGNsYXNzLiAqL1xuICAgIHJvb3Q6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHNlbGVjdCBjb21wb25lbnQgYHNlbGVjdGAgY2xhc3MuICovXG4gICAgc2VsZWN0OiB7XG4gICAgICAnLW1vei1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgICAgLy8gUmVzZXRcbiAgICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZScsXG4gICAgICAvLyBSZXNldFxuICAgICAgLy8gV2hlbiBpbnRlcmFjdGluZyBxdWlja2x5LCB0aGUgdGV4dCBjYW4gZW5kIHVwIHNlbGVjdGVkLlxuICAgICAgLy8gTmF0aXZlIHNlbGVjdCBjYW4ndCBiZSBzZWxlY3RlZCBlaXRoZXIuXG4gICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgICAvLyBSZXNldFxuICAgICAgbWluV2lkdGg6IDE2LFxuICAgICAgLy8gU28gaXQgZG9lc24ndCBjb2xsYXBzZS5cbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIC8vIFNob3cgdGhhdCBpdCdzIG5vdCBhbiB0ZXh0IGlucHV0XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gJ3JnYmEoMCwgMCwgMCwgMC4wNSknIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSknLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDAgLy8gUmVzZXQgQ2hyb21lIHN0eWxlXG5cbiAgICAgIH0sXG4gICAgICAvLyBSZW1vdmUgSUUgMTEgYXJyb3dcbiAgICAgICcmOjotbXMtZXhwYW5kJzoge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCdcbiAgICAgIH0sXG4gICAgICAnJlttdWx0aXBsZV0nOiB7XG4gICAgICAgIGhlaWdodDogJ2F1dG8nXG4gICAgICB9LFxuICAgICAgJyY6bm90KFttdWx0aXBsZV0pIG9wdGlvbiwgJjpub3QoW211bHRpcGxlXSkgb3B0Z3JvdXAnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyXG4gICAgICB9LFxuICAgICAgJyYmJzoge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6IDI0XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBzZWxlY3QgY29tcG9uZW50IGlmIGB2YXJpYW50PVwiZmlsbGVkXCJgLiAqL1xuICAgIGZpbGxlZDoge1xuICAgICAgJyYmJzoge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6IDMyXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBzZWxlY3QgY29tcG9uZW50IGlmIGB2YXJpYW50PVwib3V0bGluZWRcImAuICovXG4gICAgb3V0bGluZWQ6IHtcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxuICAgICAgJyYmJzoge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6IDMyXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBzZWxlY3QgY29tcG9uZW50IGBzZWxlY3RNZW51YCBjbGFzcy4gKi9cbiAgICBzZWxlY3RNZW51OiB7XG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIC8vIFJlc2V0cyBmb3IgbXVsdHBpbGUgc2VsZWN0IHdpdGggY2hpcHNcbiAgICAgIG1pbkhlaWdodDogJzEuMTg3NmVtJyxcbiAgICAgIC8vIFJlcXVpcmVkIGZvciBzZWxlY3RcXHRleHQtZmllbGQgaGVpZ2h0IGNvbnNpc3RlbmN5XG4gICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgc2VsZWN0IGNvbXBvbmVudCBgZGlzYWJsZWRgIGNsYXNzLiAqL1xuICAgIGRpc2FibGVkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBpY29uIGNvbXBvbmVudC4gKi9cbiAgICBpY29uOiB7XG4gICAgICAvLyBXZSB1c2UgYSBwb3NpdGlvbiBhYnNvbHV0ZSBvdmVyIGEgZmxleGJveCBpbiBvcmRlciB0byBmb3J3YXJkIHRoZSBwb2ludGVyIGV2ZW50c1xuICAgICAgLy8gdG8gdGhlIGlucHV0IGFuZCB0byBzdXBwb3J0IHdyYXBwaW5nIHRhZ3MuLlxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICByaWdodDogMCxcbiAgICAgIHRvcDogJ2NhbGMoNTAlIC0gMTJweCknLFxuICAgICAgLy8gQ2VudGVyIHZlcnRpY2FsbHlcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgIC8vIERvbid0IGJsb2NrIHBvaW50ZXIgZXZlbnRzIG9uIHRoZSBzZWxlY3QgdW5kZXIgdGhlIGljb24uXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uYWN0aXZlLFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5kaXNhYmxlZFxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaWNvbiBjb21wb25lbnQgaWYgdGhlIHBvcHVwIGlzIG9wZW4uICovXG4gICAgaWNvbk9wZW46IHtcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgxODBkZWcpJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaWNvbiBjb21wb25lbnQgaWYgYHZhcmlhbnQ9XCJmaWxsZWRcImAuICovXG4gICAgaWNvbkZpbGxlZDoge1xuICAgICAgcmlnaHQ6IDdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGljb24gY29tcG9uZW50IGlmIGB2YXJpYW50PVwib3V0bGluZWRcImAuICovXG4gICAgaWNvbk91dGxpbmVkOiB7XG4gICAgICByaWdodDogN1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgdW5kZXJseWluZyBuYXRpdmUgaW5wdXQgY29tcG9uZW50LiAqL1xuICAgIG5hdGl2ZUlucHV0OiB7XG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH1cbiAgfTtcbn07XG52YXIgZGVmYXVsdElucHV0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIG51bGwpO1xuLyoqXG4gKiBBbiBhbHRlcm5hdGl2ZSB0byBgPFNlbGVjdCBuYXRpdmUgLz5gIHdpdGggYSBtdWNoIHNtYWxsZXIgYnVuZGxlIHNpemUgZm9vdHByaW50LlxuICovXG5cbnZhciBOYXRpdmVTZWxlY3QgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBOYXRpdmVTZWxlY3QocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgX3Byb3BzJEljb25Db21wb25lbnQgPSBwcm9wcy5JY29uQ29tcG9uZW50LFxuICAgICAgSWNvbkNvbXBvbmVudCA9IF9wcm9wcyRJY29uQ29tcG9uZW50ID09PSB2b2lkIDAgPyBBcnJvd0Ryb3BEb3duSWNvbiA6IF9wcm9wcyRJY29uQ29tcG9uZW50LFxuICAgICAgX3Byb3BzJGlucHV0ID0gcHJvcHMuaW5wdXQsXG4gICAgICBpbnB1dCA9IF9wcm9wcyRpbnB1dCA9PT0gdm9pZCAwID8gZGVmYXVsdElucHV0IDogX3Byb3BzJGlucHV0LFxuICAgICAgaW5wdXRQcm9wcyA9IHByb3BzLmlucHV0UHJvcHMsXG4gICAgICB2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJJY29uQ29tcG9uZW50XCIsIFwiaW5wdXRcIiwgXCJpbnB1dFByb3BzXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgdmFyIG11aUZvcm1Db250cm9sID0gdXNlRm9ybUNvbnRyb2woKTtcbiAgdmFyIGZjcyA9IGZvcm1Db250cm9sU3RhdGUoe1xuICAgIHByb3BzOiBwcm9wcyxcbiAgICBtdWlGb3JtQ29udHJvbDogbXVpRm9ybUNvbnRyb2wsXG4gICAgc3RhdGVzOiBbJ3ZhcmlhbnQnXVxuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoaW5wdXQsIF9leHRlbmRzKHtcbiAgICAvLyBNb3N0IG9mIHRoZSBsb2dpYyBpcyBpbXBsZW1lbnRlZCBpbiBgTmF0aXZlU2VsZWN0SW5wdXRgLlxuICAgIC8vIFRoZSBgU2VsZWN0YCBjb21wb25lbnQgaXMgYSBzaW1wbGUgQVBJIHdyYXBwZXIgdG8gZXhwb3NlIHNvbWV0aGluZyBiZXR0ZXIgdG8gcGxheSB3aXRoLlxuICAgIGlucHV0Q29tcG9uZW50OiBOYXRpdmVTZWxlY3RJbnB1dCxcbiAgICBpbnB1dFByb3BzOiBfZXh0ZW5kcyh7XG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzOiBjbGFzc2VzLFxuICAgICAgSWNvbkNvbXBvbmVudDogSWNvbkNvbXBvbmVudCxcbiAgICAgIHZhcmlhbnQ6IGZjcy52YXJpYW50LFxuICAgICAgdHlwZTogdW5kZWZpbmVkXG4gICAgfSwgaW5wdXRQcm9wcywgaW5wdXQgPyBpbnB1dC5wcm9wcy5pbnB1dFByb3BzIDoge30pLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IE5hdGl2ZVNlbGVjdC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgb3B0aW9uIGVsZW1lbnRzIHRvIHBvcHVsYXRlIHRoZSBzZWxlY3Qgd2l0aC5cbiAgICogQ2FuIGJlIHNvbWUgYDxvcHRpb24+YCBlbGVtZW50cy5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB0aGF0IGRpc3BsYXlzIHRoZSBhcnJvdy5cbiAgICovXG4gIEljb25Db21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogQW4gYElucHV0YCBlbGVtZW50OyBkb2VzIG5vdCBoYXZlIHRvIGJlIGEgbWF0ZXJpYWwtdWkgc3BlY2lmaWMgYElucHV0YC5cbiAgICovXG4gIGlucHV0OiBQcm9wVHlwZXMuZWxlbWVudCxcblxuICAvKipcbiAgICogQXR0cmlidXRlcyBhcHBsaWVkIHRvIHRoZSBgc2VsZWN0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiBhIG1lbnUgaXRlbSBpcyBzZWxlY3RlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgdmFsdWUgYnkgYWNjZXNzaW5nIGBldmVudC50YXJnZXQudmFsdWVgIChzdHJpbmcpLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgaW5wdXQgdmFsdWUuIFRoZSBET00gQVBJIGNhc3RzIHRoaXMgdG8gYSBzdHJpbmcuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZmlsbGVkJywgJ291dGxpbmVkJywgJ3N0YW5kYXJkJ10pXG59IDogdm9pZCAwO1xuTmF0aXZlU2VsZWN0Lm11aU5hbWUgPSAnU2VsZWN0JztcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlOYXRpdmVTZWxlY3QnXG59KShOYXRpdmVTZWxlY3QpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IHJlZlR5cGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxudmFyIE5hdGl2ZVNlbGVjdElucHV0ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTmF0aXZlU2VsZWN0SW5wdXQocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgSWNvbkNvbXBvbmVudCA9IHByb3BzLkljb25Db21wb25lbnQsXG4gICAgICBpbnB1dFJlZiA9IHByb3BzLmlucHV0UmVmLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnc3RhbmRhcmQnIDogX3Byb3BzJHZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImRpc2FibGVkXCIsIFwiSWNvbkNvbXBvbmVudFwiLCBcImlucHV0UmVmXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgLy8gVE9ETyB2NTogbWVyZ2Ugcm9vdCBhbmQgc2VsZWN0XG4gICAgY2xhc3Nlcy5zZWxlY3QsIGNsYXNzZXNbdmFyaWFudF0sIGNsYXNzTmFtZSwgZGlzYWJsZWQgJiYgY2xhc3Nlcy5kaXNhYmxlZCksXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIHJlZjogaW5wdXRSZWYgfHwgcmVmXG4gIH0sIG90aGVyKSksIHByb3BzLm11bHRpcGxlID8gbnVsbCA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEljb25Db21wb25lbnQsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5pY29uLCBjbGFzc2VzW1wiaWNvblwiLmNvbmNhdChjYXBpdGFsaXplKHZhcmlhbnQpKV0sIGRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQpXG4gIH0pKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gTmF0aXZlU2VsZWN0SW5wdXQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIG9wdGlvbiBlbGVtZW50cyB0byBwb3B1bGF0ZSB0aGUgc2VsZWN0IHdpdGguXG4gICAqIENhbiBiZSBzb21lIGA8b3B0aW9uPmAgZWxlbWVudHMuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgQ1NTIGNsYXNzIG5hbWUgb2YgdGhlIHNlbGVjdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBzZWxlY3Qgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGljb24gdGhhdCBkaXNwbGF5cyB0aGUgYXJyb3cuXG4gICAqL1xuICBJY29uQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogVXNlIHRoYXQgcHJvcCB0byBwYXNzIGEgcmVmIHRvIHRoZSBuYXRpdmUgc2VsZWN0IGVsZW1lbnQuXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBpbnB1dFJlZjogcmVmVHlwZSxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBOYW1lIGF0dHJpYnV0ZSBvZiB0aGUgYHNlbGVjdGAgb3IgaGlkZGVuIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gYSBtZW51IGl0ZW0gaXMgc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogWW91IGNhbiBwdWxsIG91dCB0aGUgbmV3IHZhbHVlIGJ5IGFjY2Vzc2luZyBgZXZlbnQudGFyZ2V0LnZhbHVlYCAoc3RyaW5nKS5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVGhlIGlucHV0IHZhbHVlLlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3N0YW5kYXJkJywgJ291dGxpbmVkJywgJ2ZpbGxlZCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IE5hdGl2ZVNlbGVjdElucHV0OyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgdXNlVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3VzZVRoZW1lJztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJy4uL3V0aWxzL2NhcGl0YWxpemUnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB0b3A6IC01LFxuICAgICAgbGVmdDogMCxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHBhZGRpbmc6ICcwIDhweCcsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICBib3JkZXJSYWRpdXM6ICdpbmhlcml0JyxcbiAgICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGxlZ2VuZCBlbGVtZW50IHdoZW4gYGxhYmVsV2lkdGhgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGxlZ2VuZDoge1xuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgbGluZUhlaWdodDogJzExcHgnLFxuICAgICAgLy8gc3luYyB3aXRoIGBoZWlnaHRgIGluIGBsZWdlbmRgIHN0eWxlc1xuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcbiAgICAgICAgZHVyYXRpb246IDE1MCxcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dFxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGxlZ2VuZCBlbGVtZW50LiAqL1xuICAgIGxlZ2VuZExhYmVsbGVkOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIGhlaWdodDogMTEsXG4gICAgICAvLyBzeW5jIHdpdGggYGxpbmVIZWlnaHRgIGluIGBsZWdlbmRgIHN0eWxlc1xuICAgICAgZm9udFNpemU6ICcwLjc1ZW0nLFxuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICBtYXhXaWR0aDogMC4wMSxcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnbWF4LXdpZHRoJywge1xuICAgICAgICBkdXJhdGlvbjogNTAsXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXRcbiAgICAgIH0pLFxuICAgICAgJyYgPiBzcGFuJzoge1xuICAgICAgICBwYWRkaW5nTGVmdDogNSxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiA1LFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgbGVnZW5kIGVsZW1lbnQgaXMgbm90Y2hlZC4gKi9cbiAgICBsZWdlbmROb3RjaGVkOiB7XG4gICAgICBtYXhXaWR0aDogMTAwMCxcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnbWF4LXdpZHRoJywge1xuICAgICAgICBkdXJhdGlvbjogMTAwLFxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5lYXNlT3V0LFxuICAgICAgICBkZWxheTogNTBcbiAgICAgIH0pXG4gICAgfVxuICB9O1xufTtcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG52YXIgTm90Y2hlZE91dGxpbmUgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBOb3RjaGVkT3V0bGluZShwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBsYWJlbCA9IHByb3BzLmxhYmVsLFxuICAgICAgbGFiZWxXaWR0aFByb3AgPSBwcm9wcy5sYWJlbFdpZHRoLFxuICAgICAgbm90Y2hlZCA9IHByb3BzLm5vdGNoZWQsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImxhYmVsXCIsIFwibGFiZWxXaWR0aFwiLCBcIm5vdGNoZWRcIiwgXCJzdHlsZVwiXSk7XG5cbiAgdmFyIHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgdmFyIGFsaWduID0gdGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCc7XG5cbiAgaWYgKGxhYmVsICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiLCBfZXh0ZW5kcyh7XG4gICAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUpLFxuICAgICAgcmVmOiByZWYsXG4gICAgICBzdHlsZTogc3R5bGVcbiAgICB9LCBvdGhlciksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmxlZ2VuZExhYmVsbGVkLCBub3RjaGVkICYmIGNsYXNzZXMubGVnZW5kTm90Y2hlZClcbiAgICB9LCBsYWJlbCA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBsYWJlbCkgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgX19odG1sOiAnJiM4MjAzOydcbiAgICAgIH1cbiAgICB9KSkpO1xuICB9XG5cbiAgdmFyIGxhYmVsV2lkdGggPSBsYWJlbFdpZHRoUHJvcCA+IDAgPyBsYWJlbFdpZHRoUHJvcCAqIDAuNzUgKyA4IDogMC4wMTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIiwgX2V4dGVuZHMoe1xuICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICBzdHlsZTogX2V4dGVuZHMoX2RlZmluZVByb3BlcnR5KHt9LCBcInBhZGRpbmdcIi5jb25jYXQoY2FwaXRhbGl6ZShhbGlnbikpLCA4KSwgc3R5bGUpLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLmxlZ2VuZCxcbiAgICBzdHlsZToge1xuICAgICAgLy8gSUUgMTE6IGZpZWxkc2V0IHdpdGggbGVnZW5kIGRvZXMgbm90IHJlbmRlclxuICAgICAgLy8gYSBib3JkZXIgcmFkaXVzLiBUaGlzIG1haW50YWlucyBjb25zaXN0ZW5jeVxuICAgICAgLy8gYnkgYWx3YXlzIGhhdmluZyBhIGxlZ2VuZCByZW5kZXJlZFxuICAgICAgd2lkdGg6IG5vdGNoZWQgPyBsYWJlbFdpZHRoIDogMC4wMVxuICAgIH1cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgX19odG1sOiAnJiM4MjAzOydcbiAgICB9XG4gIH0pKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IE5vdGNoZWRPdXRsaW5lLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwuXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgbGFiZWwuXG4gICAqL1xuICBsYWJlbFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIG91dGxpbmUgaXMgbm90Y2hlZCB0byBhY2NvbW1vZGF0ZSB0aGUgbGFiZWwuXG4gICAqL1xuICBub3RjaGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdQcml2YXRlTm90Y2hlZE91dGxpbmUnXG59KShOb3RjaGVkT3V0bGluZSk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgcmVmVHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgSW5wdXRCYXNlIGZyb20gJy4uL0lucHV0QmFzZSc7XG5pbXBvcnQgTm90Y2hlZE91dGxpbmUgZnJvbSAnLi9Ob3RjaGVkT3V0bGluZSc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICB2YXIgYm9yZGVyQ29sb3IgPSB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyAncmdiYSgwLCAwLCAwLCAwLjIzKScgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIzKSc7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxuICAgICAgJyY6aG92ZXIgJG5vdGNoZWRPdXRsaW5lJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnlcbiAgICAgIH0sXG4gICAgICAvLyBSZXNldCBvbiB0b3VjaCBkZXZpY2VzLCBpdCBkb2Vzbid0IGFkZCBzcGVjaWZpY2l0eVxuICAgICAgJ0BtZWRpYSAoaG92ZXI6IG5vbmUpJzoge1xuICAgICAgICAnJjpob3ZlciAkbm90Y2hlZE91dGxpbmUnOiB7XG4gICAgICAgICAgYm9yZGVyQ29sb3I6IGJvcmRlckNvbG9yXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnJiRmb2N1c2VkICRub3RjaGVkT3V0bGluZSc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgICBib3JkZXJXaWR0aDogMlxuICAgICAgfSxcbiAgICAgICcmJGVycm9yICRub3RjaGVkT3V0bGluZSc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpblxuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkICRub3RjaGVkT3V0bGluZSc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmRpc2FibGVkXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIGNvbG9yIGlzIHNlY29uZGFyeS4gKi9cbiAgICBjb2xvclNlY29uZGFyeToge1xuICAgICAgJyYkZm9jdXNlZCAkbm90Y2hlZE91dGxpbmUnOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIGNvbXBvbmVudCBpcyBmb2N1c2VkLiAqL1xuICAgIGZvY3VzZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZWQ9e3RydWV9YC4gKi9cbiAgICBkaXNhYmxlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBzdGFydEFkb3JubWVudGAgaXMgcHJvdmlkZWQuICovXG4gICAgYWRvcm5lZFN0YXJ0OiB7XG4gICAgICBwYWRkaW5nTGVmdDogMTRcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZW5kQWRvcm5tZW50YCBpcyBwcm92aWRlZC4gKi9cbiAgICBhZG9ybmVkRW5kOiB7XG4gICAgICBwYWRkaW5nUmlnaHQ6IDE0XG4gICAgfSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGVycm9yPXt0cnVlfWAuICovXG4gICAgZXJyb3I6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgbWFyZ2luPVwiZGVuc2VcImAuICovXG4gICAgbWFyZ2luRGVuc2U6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgbXVsdGlsaW5lPXt0cnVlfWAuICovXG4gICAgbXVsdGlsaW5lOiB7XG4gICAgICBwYWRkaW5nOiAnMTguNXB4IDE0cHgnLFxuICAgICAgJyYkbWFyZ2luRGVuc2UnOiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IDEwLjUsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IDEwLjVcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBOb3RjaGVkT3V0bGluZWAgZWxlbWVudC4gKi9cbiAgICBub3RjaGVkT3V0bGluZToge1xuICAgICAgYm9yZGVyQ29sb3I6IGJvcmRlckNvbG9yXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuICovXG4gICAgaW5wdXQ6IHtcbiAgICAgIHBhZGRpbmc6ICcxOC41cHggMTRweCcsXG4gICAgICAnJjotd2Via2l0LWF1dG9maWxsJzoge1xuICAgICAgICBXZWJraXRCb3hTaGFkb3c6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IG51bGwgOiAnMCAwIDAgMTAwcHggIzI2Njc5OCBpbnNldCcsXG4gICAgICAgIFdlYmtpdFRleHRGaWxsQ29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IG51bGwgOiAnI2ZmZicsXG4gICAgICAgIGNhcmV0Q29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IG51bGwgOiAnI2ZmZicsXG4gICAgICAgIGJvcmRlclJhZGl1czogJ2luaGVyaXQnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG1hcmdpbj1cImRlbnNlXCJgLiAqL1xuICAgIGlucHV0TWFyZ2luRGVuc2U6IHtcbiAgICAgIHBhZGRpbmdUb3A6IDEwLjUsXG4gICAgICBwYWRkaW5nQm90dG9tOiAxMC41XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG11bHRpbGluZT17dHJ1ZX1gLiAqL1xuICAgIGlucHV0TXVsdGlsaW5lOiB7XG4gICAgICBwYWRkaW5nOiAwXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYHN0YXJ0QWRvcm5tZW50YCBpcyBwcm92aWRlZC4gKi9cbiAgICBpbnB1dEFkb3JuZWRTdGFydDoge1xuICAgICAgcGFkZGluZ0xlZnQ6IDBcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgZW5kQWRvcm5tZW50YCBpcyBwcm92aWRlZC4gKi9cbiAgICBpbnB1dEFkb3JuZWRFbmQ6IHtcbiAgICAgIHBhZGRpbmdSaWdodDogMFxuICAgIH1cbiAgfTtcbn07XG52YXIgT3V0bGluZWRJbnB1dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIE91dGxpbmVkSW5wdXQocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBfcHJvcHMkZnVsbFdpZHRoID0gcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgZnVsbFdpZHRoID0gX3Byb3BzJGZ1bGxXaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnVsbFdpZHRoLFxuICAgICAgX3Byb3BzJGlucHV0Q29tcG9uZW50ID0gcHJvcHMuaW5wdXRDb21wb25lbnQsXG4gICAgICBpbnB1dENvbXBvbmVudCA9IF9wcm9wcyRpbnB1dENvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2lucHV0JyA6IF9wcm9wcyRpbnB1dENvbXBvbmVudCxcbiAgICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICBfcHJvcHMkbGFiZWxXaWR0aCA9IHByb3BzLmxhYmVsV2lkdGgsXG4gICAgICBsYWJlbFdpZHRoID0gX3Byb3BzJGxhYmVsV2lkdGggPT09IHZvaWQgMCA/IDAgOiBfcHJvcHMkbGFiZWxXaWR0aCxcbiAgICAgIF9wcm9wcyRtdWx0aWxpbmUgPSBwcm9wcy5tdWx0aWxpbmUsXG4gICAgICBtdWx0aWxpbmUgPSBfcHJvcHMkbXVsdGlsaW5lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRtdWx0aWxpbmUsXG4gICAgICBub3RjaGVkID0gcHJvcHMubm90Y2hlZCxcbiAgICAgIF9wcm9wcyR0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgIHR5cGUgPSBfcHJvcHMkdHlwZSA9PT0gdm9pZCAwID8gJ3RleHQnIDogX3Byb3BzJHR5cGUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImZ1bGxXaWR0aFwiLCBcImlucHV0Q29tcG9uZW50XCIsIFwibGFiZWxcIiwgXCJsYWJlbFdpZHRoXCIsIFwibXVsdGlsaW5lXCIsIFwibm90Y2hlZFwiLCBcInR5cGVcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dEJhc2UsIF9leHRlbmRzKHtcbiAgICByZW5kZXJTdWZmaXg6IGZ1bmN0aW9uIHJlbmRlclN1ZmZpeChzdGF0ZSkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE5vdGNoZWRPdXRsaW5lLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5ub3RjaGVkT3V0bGluZSxcbiAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICBsYWJlbFdpZHRoOiBsYWJlbFdpZHRoLFxuICAgICAgICBub3RjaGVkOiB0eXBlb2Ygbm90Y2hlZCAhPT0gJ3VuZGVmaW5lZCcgPyBub3RjaGVkIDogQm9vbGVhbihzdGF0ZS5zdGFydEFkb3JubWVudCB8fCBzdGF0ZS5maWxsZWQgfHwgc3RhdGUuZm9jdXNlZClcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY2xhc3NlczogX2V4dGVuZHMoe30sIGNsYXNzZXMsIHtcbiAgICAgIHJvb3Q6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc2VzLnVuZGVybGluZSksXG4gICAgICBub3RjaGVkT3V0bGluZTogbnVsbFxuICAgIH0pLFxuICAgIGZ1bGxXaWR0aDogZnVsbFdpZHRoLFxuICAgIGlucHV0Q29tcG9uZW50OiBpbnB1dENvbXBvbmVudCxcbiAgICBtdWx0aWxpbmU6IG11bHRpbGluZSxcbiAgICByZWY6IHJlZixcbiAgICB0eXBlOiB0eXBlXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IE91dGxpbmVkSW5wdXQucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhpcyBwcm9wIGhlbHBzIHVzZXJzIHRvIGZpbGwgZm9ybXMgZmFzdGVyLCBlc3BlY2lhbGx5IG9uIG1vYmlsZSBkZXZpY2VzLlxuICAgKiBUaGUgbmFtZSBjYW4gYmUgY29uZnVzaW5nLCBhcyBpdCdzIG1vcmUgbGlrZSBhbiBhdXRvZmlsbC5cbiAgICogWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IGl0IFtmb2xsb3dpbmcgdGhlIHNwZWNpZmljYXRpb25dKGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm0tY29udHJvbC1pbmZyYXN0cnVjdHVyZS5odG1sI2F1dG9maWxsKS5cbiAgICovXG4gIGF1dG9Db21wbGV0ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgZm9jdXNlZCBkdXJpbmcgdGhlIGZpcnN0IG1vdW50LlxuICAgKi9cbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUaGUgY29sb3Igb2YgdGhlIGNvbXBvbmVudC4gSXQgc3VwcG9ydHMgdGhvc2UgdGhlbWUgY29sb3JzIHRoYXQgbWFrZSBzZW5zZSBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGBpbnB1dGAgZWxlbWVudCB2YWx1ZS4gVXNlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBub3QgY29udHJvbGxlZC5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEVuZCBgSW5wdXRBZG9ybm1lbnRgIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGVuZEFkb3JubWVudDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgaW5kaWNhdGUgYW4gZXJyb3IuIFRoaXMgaXMgbm9ybWFsbHkgb2J0YWluZWQgdmlhIGNvbnRleHQgZnJvbVxuICAgKiBGb3JtQ29udHJvbC5cbiAgICovXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBpbnB1dENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBbQXR0cmlidXRlc10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I0F0dHJpYnV0ZXMpIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFBhc3MgYSByZWYgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UmVmOiByZWZUeXBlLFxuXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgb2YgdGhlIGlucHV0LiBJdCBpcyBvbmx5IHVzZWQgZm9yIGxheW91dC4gVGhlIGFjdHVhbCBsYWJlbGxpbmdcbiAgICogaXMgaGFuZGxlZCBieSBgSW5wdXRMYWJlbGAuIElmIHNwZWNpZmllZCBgbGFiZWxXaWR0aGAgaXMgaWdub3JlZC5cbiAgICovXG4gIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBsYWJlbC4gSXMgaWdub3JlZCBpZiBgbGFiZWxgIGlzIHByb3ZpZGVkLiBQcmVmZXIgYGxhYmVsYFxuICAgKiBpZiB0aGUgaW5wdXQgbGFiZWwgYXBwZWFycyB3aXRoIGEgc3RyaWtlIHRocm91Z2guXG4gICAqL1xuICBsYWJlbFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBJZiBgZGVuc2VgLCB3aWxsIGFkanVzdCB2ZXJ0aWNhbCBzcGFjaW5nLiBUaGlzIGlzIG5vcm1hbGx5IG9idGFpbmVkIHZpYSBjb250ZXh0IGZyb21cbiAgICogRm9ybUNvbnRyb2wuXG4gICAqL1xuICBtYXJnaW46IFByb3BUeXBlcy5vbmVPZihbJ2RlbnNlJywgJ25vbmUnXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYSB0ZXh0YXJlYSBlbGVtZW50IHdpbGwgYmUgcmVuZGVyZWQuXG4gICAqL1xuICBtdWx0aWxpbmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBOYW1lIGF0dHJpYnV0ZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgb3V0bGluZSBpcyBub3RjaGVkIHRvIGFjY29tbW9kYXRlIHRoZSBsYWJlbC5cbiAgICovXG4gIG5vdGNoZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIFlvdSBjYW4gcHVsbCBvdXQgdGhlIG5ldyB2YWx1ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC52YWx1ZWAgKHN0cmluZykuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBzaG9ydCBoaW50IGRpc3BsYXllZCBpbiB0aGUgaW5wdXQgYmVmb3JlIHRoZSB1c2VyIGVudGVycyBhIHZhbHVlLlxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEl0IHByZXZlbnRzIHRoZSB1c2VyIGZyb20gY2hhbmdpbmcgdGhlIHZhbHVlIG9mIHRoZSBmaWVsZFxuICAgKiAobm90IGZyb20gaW50ZXJhY3Rpbmcgd2l0aCB0aGUgZmllbGQpLlxuICAgKi9cbiAgcmVhZE9ubHk6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSByZXF1aXJlZC5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzTWF4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIFN0YXJ0IGBJbnB1dEFkb3JubWVudGAgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgc3RhcnRBZG9ybm1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUeXBlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuIEl0IHNob3VsZCBiZSBbYSB2YWxpZCBIVE1MNSBpbnB1dCB0eXBlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjRm9ybV8lM0NpbnB1dCUzRV90eXBlcykuXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudCwgcmVxdWlyZWQgZm9yIGEgY29udHJvbGxlZCBjb21wb25lbnQuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueVxufSA6IHZvaWQgMDtcbk91dGxpbmVkSW5wdXQubXVpTmFtZSA9ICdJbnB1dCc7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpT3V0bGluZWRJbnB1dCdcbn0pKE91dGxpbmVkSW5wdXQpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL091dGxpbmVkSW5wdXQnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY2hhaW5Qcm9wVHlwZXMsIGVsZW1lbnRUeXBlQWNjZXB0aW5nUmVmLCByZWZUeXBlLCBIVE1MRWxlbWVudFR5cGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uL3V0aWxzL2RlYm91bmNlJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnLi4vdXRpbHMvb3duZXJEb2N1bWVudCc7XG5pbXBvcnQgb3duZXJXaW5kb3cgZnJvbSAnLi4vdXRpbHMvb3duZXJXaW5kb3cnO1xuaW1wb3J0IGNyZWF0ZUNoYWluZWRGdW5jdGlvbiBmcm9tICcuLi91dGlscy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL01vZGFsJztcbmltcG9ydCBHcm93IGZyb20gJy4uL0dyb3cnO1xuaW1wb3J0IFBhcGVyIGZyb20gJy4uL1BhcGVyJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXRUb3AocmVjdCwgdmVydGljYWwpIHtcbiAgdmFyIG9mZnNldCA9IDA7XG5cbiAgaWYgKHR5cGVvZiB2ZXJ0aWNhbCA9PT0gJ251bWJlcicpIHtcbiAgICBvZmZzZXQgPSB2ZXJ0aWNhbDtcbiAgfSBlbHNlIGlmICh2ZXJ0aWNhbCA9PT0gJ2NlbnRlcicpIHtcbiAgICBvZmZzZXQgPSByZWN0LmhlaWdodCAvIDI7XG4gIH0gZWxzZSBpZiAodmVydGljYWwgPT09ICdib3R0b20nKSB7XG4gICAgb2Zmc2V0ID0gcmVjdC5oZWlnaHQ7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldExlZnQocmVjdCwgaG9yaXpvbnRhbCkge1xuICB2YXIgb2Zmc2V0ID0gMDtcblxuICBpZiAodHlwZW9mIGhvcml6b250YWwgPT09ICdudW1iZXInKSB7XG4gICAgb2Zmc2V0ID0gaG9yaXpvbnRhbDtcbiAgfSBlbHNlIGlmIChob3Jpem9udGFsID09PSAnY2VudGVyJykge1xuICAgIG9mZnNldCA9IHJlY3Qud2lkdGggLyAyO1xuICB9IGVsc2UgaWYgKGhvcml6b250YWwgPT09ICdyaWdodCcpIHtcbiAgICBvZmZzZXQgPSByZWN0LndpZHRoO1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldDtcbn1cblxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtT3JpZ2luVmFsdWUodHJhbnNmb3JtT3JpZ2luKSB7XG4gIHJldHVybiBbdHJhbnNmb3JtT3JpZ2luLmhvcml6b250YWwsIHRyYW5zZm9ybU9yaWdpbi52ZXJ0aWNhbF0ubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBuID09PSAnbnVtYmVyJyA/IFwiXCIuY29uY2F0KG4sIFwicHhcIikgOiBuO1xuICB9KS5qb2luKCcgJyk7XG59IC8vIFN1bSB0aGUgc2Nyb2xsVG9wIGJldHdlZW4gdHdvIGVsZW1lbnRzLlxuXG5cbmZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciBlbGVtZW50ID0gY2hpbGQ7XG4gIHZhciBzY3JvbGxUb3AgPSAwO1xuXG4gIHdoaWxlIChlbGVtZW50ICYmIGVsZW1lbnQgIT09IHBhcmVudCkge1xuICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgc2Nyb2xsVG9wICs9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuICB9XG5cbiAgcmV0dXJuIHNjcm9sbFRvcDtcbn1cblxuZnVuY3Rpb24gZ2V0QW5jaG9yRWwoYW5jaG9yRWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBhbmNob3JFbCA9PT0gJ2Z1bmN0aW9uJyA/IGFuY2hvckVsKCkgOiBhbmNob3JFbDtcbn1cblxuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHt9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgUGFwZXJgIGNvbXBvbmVudC4gKi9cbiAgcGFwZXI6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxuICAgIC8vIFNvIHdlIHNlZSB0aGUgcG9wb3ZlciB3aGVuIGl0J3MgZW1wdHkuXG4gICAgLy8gSXQncyBtb3N0IGxpa2VseSBvbiBpc3N1ZSBvbiB1c2VybGFuZC5cbiAgICBtaW5XaWR0aDogMTYsXG4gICAgbWluSGVpZ2h0OiAxNixcbiAgICBtYXhXaWR0aDogJ2NhbGMoMTAwJSAtIDMycHgpJyxcbiAgICBtYXhIZWlnaHQ6ICdjYWxjKDEwMCUgLSAzMnB4KScsXG4gICAgLy8gV2UgZGlzYWJsZSB0aGUgZm9jdXMgcmluZyBmb3IgbW91c2UsIHRvdWNoIGFuZCBrZXlib2FyZCB1c2Vycy5cbiAgICBvdXRsaW5lOiAwXG4gIH1cbn07XG52YXIgUG9wb3ZlciA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFBvcG92ZXIocHJvcHMsIHJlZikge1xuICB2YXIgYWN0aW9uID0gcHJvcHMuYWN0aW9uLFxuICAgICAgYW5jaG9yRWwgPSBwcm9wcy5hbmNob3JFbCxcbiAgICAgIF9wcm9wcyRhbmNob3JPcmlnaW4gPSBwcm9wcy5hbmNob3JPcmlnaW4sXG4gICAgICBhbmNob3JPcmlnaW4gPSBfcHJvcHMkYW5jaG9yT3JpZ2luID09PSB2b2lkIDAgPyB7XG4gICAgdmVydGljYWw6ICd0b3AnLFxuICAgIGhvcml6b250YWw6ICdsZWZ0J1xuICB9IDogX3Byb3BzJGFuY2hvck9yaWdpbixcbiAgICAgIGFuY2hvclBvc2l0aW9uID0gcHJvcHMuYW5jaG9yUG9zaXRpb24sXG4gICAgICBfcHJvcHMkYW5jaG9yUmVmZXJlbmMgPSBwcm9wcy5hbmNob3JSZWZlcmVuY2UsXG4gICAgICBhbmNob3JSZWZlcmVuY2UgPSBfcHJvcHMkYW5jaG9yUmVmZXJlbmMgPT09IHZvaWQgMCA/ICdhbmNob3JFbCcgOiBfcHJvcHMkYW5jaG9yUmVmZXJlbmMsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjb250YWluZXJQcm9wID0gcHJvcHMuY29udGFpbmVyLFxuICAgICAgX3Byb3BzJGVsZXZhdGlvbiA9IHByb3BzLmVsZXZhdGlvbixcbiAgICAgIGVsZXZhdGlvbiA9IF9wcm9wcyRlbGV2YXRpb24gPT09IHZvaWQgMCA/IDggOiBfcHJvcHMkZWxldmF0aW9uLFxuICAgICAgZ2V0Q29udGVudEFuY2hvckVsID0gcHJvcHMuZ2V0Q29udGVudEFuY2hvckVsLFxuICAgICAgX3Byb3BzJG1hcmdpblRocmVzaG9sID0gcHJvcHMubWFyZ2luVGhyZXNob2xkLFxuICAgICAgbWFyZ2luVGhyZXNob2xkID0gX3Byb3BzJG1hcmdpblRocmVzaG9sID09PSB2b2lkIDAgPyAxNiA6IF9wcm9wcyRtYXJnaW5UaHJlc2hvbCxcbiAgICAgIG9uRW50ZXIgPSBwcm9wcy5vbkVudGVyLFxuICAgICAgb25FbnRlcmVkID0gcHJvcHMub25FbnRlcmVkLFxuICAgICAgb25FbnRlcmluZyA9IHByb3BzLm9uRW50ZXJpbmcsXG4gICAgICBvbkV4aXQgPSBwcm9wcy5vbkV4aXQsXG4gICAgICBvbkV4aXRlZCA9IHByb3BzLm9uRXhpdGVkLFxuICAgICAgb25FeGl0aW5nID0gcHJvcHMub25FeGl0aW5nLFxuICAgICAgb3BlbiA9IHByb3BzLm9wZW4sXG4gICAgICBfcHJvcHMkUGFwZXJQcm9wcyA9IHByb3BzLlBhcGVyUHJvcHMsXG4gICAgICBQYXBlclByb3BzID0gX3Byb3BzJFBhcGVyUHJvcHMgPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJFBhcGVyUHJvcHMsXG4gICAgICBfcHJvcHMkdHJhbnNmb3JtT3JpZ2kgPSBwcm9wcy50cmFuc2Zvcm1PcmlnaW4sXG4gICAgICB0cmFuc2Zvcm1PcmlnaW4gPSBfcHJvcHMkdHJhbnNmb3JtT3JpZ2kgPT09IHZvaWQgMCA/IHtcbiAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgaG9yaXpvbnRhbDogJ2xlZnQnXG4gIH0gOiBfcHJvcHMkdHJhbnNmb3JtT3JpZ2ksXG4gICAgICBfcHJvcHMkVHJhbnNpdGlvbkNvbXAgPSBwcm9wcy5UcmFuc2l0aW9uQ29tcG9uZW50LFxuICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudCA9IF9wcm9wcyRUcmFuc2l0aW9uQ29tcCA9PT0gdm9pZCAwID8gR3JvdyA6IF9wcm9wcyRUcmFuc2l0aW9uQ29tcCxcbiAgICAgIF9wcm9wcyR0cmFuc2l0aW9uRHVyYSA9IHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvblByb3AgPSBfcHJvcHMkdHJhbnNpdGlvbkR1cmEgPT09IHZvaWQgMCA/ICdhdXRvJyA6IF9wcm9wcyR0cmFuc2l0aW9uRHVyYSxcbiAgICAgIF9wcm9wcyRUcmFuc2l0aW9uUHJvcCA9IHByb3BzLlRyYW5zaXRpb25Qcm9wcyxcbiAgICAgIFRyYW5zaXRpb25Qcm9wcyA9IF9wcm9wcyRUcmFuc2l0aW9uUHJvcCA9PT0gdm9pZCAwID8ge30gOiBfcHJvcHMkVHJhbnNpdGlvblByb3AsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYWN0aW9uXCIsIFwiYW5jaG9yRWxcIiwgXCJhbmNob3JPcmlnaW5cIiwgXCJhbmNob3JQb3NpdGlvblwiLCBcImFuY2hvclJlZmVyZW5jZVwiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbnRhaW5lclwiLCBcImVsZXZhdGlvblwiLCBcImdldENvbnRlbnRBbmNob3JFbFwiLCBcIm1hcmdpblRocmVzaG9sZFwiLCBcIm9uRW50ZXJcIiwgXCJvbkVudGVyZWRcIiwgXCJvbkVudGVyaW5nXCIsIFwib25FeGl0XCIsIFwib25FeGl0ZWRcIiwgXCJvbkV4aXRpbmdcIiwgXCJvcGVuXCIsIFwiUGFwZXJQcm9wc1wiLCBcInRyYW5zZm9ybU9yaWdpblwiLCBcIlRyYW5zaXRpb25Db21wb25lbnRcIiwgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIiwgXCJUcmFuc2l0aW9uUHJvcHNcIl0pO1xuXG4gIHZhciBwYXBlclJlZiA9IFJlYWN0LnVzZVJlZigpOyAvLyBSZXR1cm5zIHRoZSB0b3AvbGVmdCBvZmZzZXQgb2YgdGhlIHBvc2l0aW9uXG4gIC8vIHRvIGF0dGFjaCB0byBvbiB0aGUgYW5jaG9yIGVsZW1lbnQgKG9yIGJvZHkgaWYgbm9uZSBpcyBwcm92aWRlZClcblxuICB2YXIgZ2V0QW5jaG9yT2Zmc2V0ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGNvbnRlbnRBbmNob3JPZmZzZXQpIHtcbiAgICBpZiAoYW5jaG9yUmVmZXJlbmNlID09PSAnYW5jaG9yUG9zaXRpb24nKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIWFuY2hvclBvc2l0aW9uKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IFlvdSBuZWVkIHRvIHByb3ZpZGUgYSBgYW5jaG9yUG9zaXRpb25gIHByb3Agd2hlbiB1c2luZyAnICsgJzxQb3BvdmVyIGFuY2hvclJlZmVyZW5jZT1cImFuY2hvclBvc2l0aW9uXCIgLz4uJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFuY2hvclBvc2l0aW9uO1xuICAgIH1cblxuICAgIHZhciByZXNvbHZlZEFuY2hvckVsID0gZ2V0QW5jaG9yRWwoYW5jaG9yRWwpOyAvLyBJZiBhbiBhbmNob3IgZWxlbWVudCB3YXNuJ3QgcHJvdmlkZWQsIGp1c3QgdXNlIHRoZSBwYXJlbnQgYm9keSBlbGVtZW50IG9mIHRoaXMgUG9wb3ZlclxuXG4gICAgdmFyIGFuY2hvckVsZW1lbnQgPSByZXNvbHZlZEFuY2hvckVsICYmIHJlc29sdmVkQW5jaG9yRWwubm9kZVR5cGUgPT09IDEgPyByZXNvbHZlZEFuY2hvckVsIDogb3duZXJEb2N1bWVudChwYXBlclJlZi5jdXJyZW50KS5ib2R5O1xuICAgIHZhciBhbmNob3JSZWN0ID0gYW5jaG9yRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgYm94ID0gYW5jaG9yRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiYgYm94LnRvcCA9PT0gMCAmJiBib3gubGVmdCA9PT0gMCAmJiBib3gucmlnaHQgPT09IDAgJiYgYm94LmJvdHRvbSA9PT0gMCkge1xuICAgICAgICBjb25zb2xlLndhcm4oWydNYXRlcmlhbC1VSTogVGhlIGBhbmNob3JFbGAgcHJvcCBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50IGlzIGludmFsaWQuJywgJ1RoZSBhbmNob3IgZWxlbWVudCBzaG91bGQgYmUgcGFydCBvZiB0aGUgZG9jdW1lbnQgbGF5b3V0LicsIFwiTWFrZSBzdXJlIHRoZSBlbGVtZW50IGlzIHByZXNlbnQgaW4gdGhlIGRvY3VtZW50IG9yIHRoYXQgaXQncyBub3QgZGlzcGxheSBub25lLlwiXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFuY2hvclZlcnRpY2FsID0gY29udGVudEFuY2hvck9mZnNldCA9PT0gMCA/IGFuY2hvck9yaWdpbi52ZXJ0aWNhbCA6ICdjZW50ZXInO1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGFuY2hvclJlY3QudG9wICsgZ2V0T2Zmc2V0VG9wKGFuY2hvclJlY3QsIGFuY2hvclZlcnRpY2FsKSxcbiAgICAgIGxlZnQ6IGFuY2hvclJlY3QubGVmdCArIGdldE9mZnNldExlZnQoYW5jaG9yUmVjdCwgYW5jaG9yT3JpZ2luLmhvcml6b250YWwpXG4gICAgfTtcbiAgfSwgW2FuY2hvckVsLCBhbmNob3JPcmlnaW4uaG9yaXpvbnRhbCwgYW5jaG9yT3JpZ2luLnZlcnRpY2FsLCBhbmNob3JQb3NpdGlvbiwgYW5jaG9yUmVmZXJlbmNlXSk7IC8vIFJldHVybnMgdGhlIHZlcnRpY2FsIG9mZnNldCBvZiBpbm5lciBjb250ZW50IHRvIGFuY2hvciB0aGUgdHJhbnNmb3JtIG9uIGlmIHByb3ZpZGVkXG5cbiAgdmFyIGdldENvbnRlbnRBbmNob3JPZmZzZXQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHZhciBjb250ZW50QW5jaG9yT2Zmc2V0ID0gMDtcblxuICAgIGlmIChnZXRDb250ZW50QW5jaG9yRWwgJiYgYW5jaG9yUmVmZXJlbmNlID09PSAnYW5jaG9yRWwnKSB7XG4gICAgICB2YXIgY29udGVudEFuY2hvckVsID0gZ2V0Q29udGVudEFuY2hvckVsKGVsZW1lbnQpO1xuXG4gICAgICBpZiAoY29udGVudEFuY2hvckVsICYmIGVsZW1lbnQuY29udGFpbnMoY29udGVudEFuY2hvckVsKSkge1xuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQsIGNvbnRlbnRBbmNob3JFbCk7XG4gICAgICAgIGNvbnRlbnRBbmNob3JPZmZzZXQgPSBjb250ZW50QW5jaG9yRWwub2Zmc2V0VG9wICsgY29udGVudEFuY2hvckVsLmNsaWVudEhlaWdodCAvIDIgLSBzY3JvbGxUb3AgfHwgMDtcbiAgICAgIH0gLy8gIT0gdGhlIGRlZmF1bHQgdmFsdWVcblxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYW5jaG9yT3JpZ2luLnZlcnRpY2FsICE9PSAndG9wJykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogWW91IGNhbiBub3QgY2hhbmdlIHRoZSBkZWZhdWx0IGBhbmNob3JPcmlnaW4udmVydGljYWxgIHZhbHVlICcsICd3aGVuIGFsc28gcHJvdmlkaW5nIHRoZSBgZ2V0Q29udGVudEFuY2hvckVsYCBwcm9wIHRvIHRoZSBwb3BvdmVyIGNvbXBvbmVudC4nLCAnT25seSB1c2Ugb25lIG9mIHRoZSB0d28gcHJvcHMuJywgJ1NldCBgZ2V0Q29udGVudEFuY2hvckVsYCB0byBgbnVsbCB8IHVuZGVmaW5lZGAnICsgJyBvciBsZWF2ZSBgYW5jaG9yT3JpZ2luLnZlcnRpY2FsYCB1bmNoYW5nZWQuJ10uam9pbignXFxuJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRBbmNob3JPZmZzZXQ7XG4gIH0sIFthbmNob3JPcmlnaW4udmVydGljYWwsIGFuY2hvclJlZmVyZW5jZSwgZ2V0Q29udGVudEFuY2hvckVsXSk7IC8vIFJldHVybiB0aGUgYmFzZSB0cmFuc2Zvcm0gb3JpZ2luIHVzaW5nIHRoZSBlbGVtZW50XG4gIC8vIGFuZCB0YWtpbmcgdGhlIGNvbnRlbnQgYW5jaG9yIG9mZnNldCBpbnRvIGFjY291bnQgaWYgaW4gdXNlXG5cbiAgdmFyIGdldFRyYW5zZm9ybU9yaWdpbiA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChlbGVtUmVjdCkge1xuICAgIHZhciBjb250ZW50QW5jaG9yT2Zmc2V0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAgIHJldHVybiB7XG4gICAgICB2ZXJ0aWNhbDogZ2V0T2Zmc2V0VG9wKGVsZW1SZWN0LCB0cmFuc2Zvcm1PcmlnaW4udmVydGljYWwpICsgY29udGVudEFuY2hvck9mZnNldCxcbiAgICAgIGhvcml6b250YWw6IGdldE9mZnNldExlZnQoZWxlbVJlY3QsIHRyYW5zZm9ybU9yaWdpbi5ob3Jpem9udGFsKVxuICAgIH07XG4gIH0sIFt0cmFuc2Zvcm1PcmlnaW4uaG9yaXpvbnRhbCwgdHJhbnNmb3JtT3JpZ2luLnZlcnRpY2FsXSk7XG4gIHZhciBnZXRQb3NpdGlvbmluZ1N0eWxlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAvLyBDaGVjayBpZiB0aGUgcGFyZW50IGhhcyByZXF1ZXN0ZWQgYW5jaG9yaW5nIG9uIGFuIGlubmVyIGNvbnRlbnQgbm9kZVxuICAgIHZhciBjb250ZW50QW5jaG9yT2Zmc2V0ID0gZ2V0Q29udGVudEFuY2hvck9mZnNldChlbGVtZW50KTtcbiAgICB2YXIgZWxlbVJlY3QgPSB7XG4gICAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICB9OyAvLyBHZXQgdGhlIHRyYW5zZm9ybSBvcmlnaW4gcG9pbnQgb24gdGhlIGVsZW1lbnQgaXRzZWxmXG5cbiAgICB2YXIgZWxlbVRyYW5zZm9ybU9yaWdpbiA9IGdldFRyYW5zZm9ybU9yaWdpbihlbGVtUmVjdCwgY29udGVudEFuY2hvck9mZnNldCk7XG5cbiAgICBpZiAoYW5jaG9yUmVmZXJlbmNlID09PSAnbm9uZScpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogbnVsbCxcbiAgICAgICAgbGVmdDogbnVsbCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBnZXRUcmFuc2Zvcm1PcmlnaW5WYWx1ZShlbGVtVHJhbnNmb3JtT3JpZ2luKVxuICAgICAgfTtcbiAgICB9IC8vIEdldCB0aGUgb2Zmc2V0IG9mIG9mIHRoZSBhbmNob3JpbmcgZWxlbWVudFxuXG5cbiAgICB2YXIgYW5jaG9yT2Zmc2V0ID0gZ2V0QW5jaG9yT2Zmc2V0KGNvbnRlbnRBbmNob3JPZmZzZXQpOyAvLyBDYWxjdWxhdGUgZWxlbWVudCBwb3NpdGlvbmluZ1xuXG4gICAgdmFyIHRvcCA9IGFuY2hvck9mZnNldC50b3AgLSBlbGVtVHJhbnNmb3JtT3JpZ2luLnZlcnRpY2FsO1xuICAgIHZhciBsZWZ0ID0gYW5jaG9yT2Zmc2V0LmxlZnQgLSBlbGVtVHJhbnNmb3JtT3JpZ2luLmhvcml6b250YWw7XG4gICAgdmFyIGJvdHRvbSA9IHRvcCArIGVsZW1SZWN0LmhlaWdodDtcbiAgICB2YXIgcmlnaHQgPSBsZWZ0ICsgZWxlbVJlY3Qud2lkdGg7IC8vIFVzZSB0aGUgcGFyZW50IHdpbmRvdyBvZiB0aGUgYW5jaG9yRWwgaWYgcHJvdmlkZWRcblxuICAgIHZhciBjb250YWluZXJXaW5kb3cgPSBvd25lcldpbmRvdyhnZXRBbmNob3JFbChhbmNob3JFbCkpOyAvLyBXaW5kb3cgdGhyZXNob2xkcyB0YWtpbmcgcmVxdWlyZWQgbWFyZ2luIGludG8gYWNjb3VudFxuXG4gICAgdmFyIGhlaWdodFRocmVzaG9sZCA9IGNvbnRhaW5lcldpbmRvdy5pbm5lckhlaWdodCAtIG1hcmdpblRocmVzaG9sZDtcbiAgICB2YXIgd2lkdGhUaHJlc2hvbGQgPSBjb250YWluZXJXaW5kb3cuaW5uZXJXaWR0aCAtIG1hcmdpblRocmVzaG9sZDsgLy8gQ2hlY2sgaWYgdGhlIHZlcnRpY2FsIGF4aXMgbmVlZHMgc2hpZnRpbmdcblxuICAgIGlmICh0b3AgPCBtYXJnaW5UaHJlc2hvbGQpIHtcbiAgICAgIHZhciBkaWZmID0gdG9wIC0gbWFyZ2luVGhyZXNob2xkO1xuICAgICAgdG9wIC09IGRpZmY7XG4gICAgICBlbGVtVHJhbnNmb3JtT3JpZ2luLnZlcnRpY2FsICs9IGRpZmY7XG4gICAgfSBlbHNlIGlmIChib3R0b20gPiBoZWlnaHRUaHJlc2hvbGQpIHtcbiAgICAgIHZhciBfZGlmZiA9IGJvdHRvbSAtIGhlaWdodFRocmVzaG9sZDtcblxuICAgICAgdG9wIC09IF9kaWZmO1xuICAgICAgZWxlbVRyYW5zZm9ybU9yaWdpbi52ZXJ0aWNhbCArPSBfZGlmZjtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGVsZW1SZWN0LmhlaWdodCA+IGhlaWdodFRocmVzaG9sZCAmJiBlbGVtUmVjdC5oZWlnaHQgJiYgaGVpZ2h0VGhyZXNob2xkKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogVGhlIHBvcG92ZXIgY29tcG9uZW50IGlzIHRvbyB0YWxsLicsIFwiU29tZSBwYXJ0IG9mIGl0IGNhbiBub3QgYmUgc2VlbiBvbiB0aGUgc2NyZWVuIChcIi5jb25jYXQoZWxlbVJlY3QuaGVpZ2h0IC0gaGVpZ2h0VGhyZXNob2xkLCBcInB4KS5cIiksICdQbGVhc2UgY29uc2lkZXIgYWRkaW5nIGEgYG1heC1oZWlnaHRgIHRvIGltcHJvdmUgdGhlIHVzZXItZXhwZXJpZW5jZS4nXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfSAvLyBDaGVjayBpZiB0aGUgaG9yaXpvbnRhbCBheGlzIG5lZWRzIHNoaWZ0aW5nXG5cblxuICAgIGlmIChsZWZ0IDwgbWFyZ2luVGhyZXNob2xkKSB7XG4gICAgICB2YXIgX2RpZmYyID0gbGVmdCAtIG1hcmdpblRocmVzaG9sZDtcblxuICAgICAgbGVmdCAtPSBfZGlmZjI7XG4gICAgICBlbGVtVHJhbnNmb3JtT3JpZ2luLmhvcml6b250YWwgKz0gX2RpZmYyO1xuICAgIH0gZWxzZSBpZiAocmlnaHQgPiB3aWR0aFRocmVzaG9sZCkge1xuICAgICAgdmFyIF9kaWZmMyA9IHJpZ2h0IC0gd2lkdGhUaHJlc2hvbGQ7XG5cbiAgICAgIGxlZnQgLT0gX2RpZmYzO1xuICAgICAgZWxlbVRyYW5zZm9ybU9yaWdpbi5ob3Jpem9udGFsICs9IF9kaWZmMztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiBcIlwiLmNvbmNhdChNYXRoLnJvdW5kKHRvcCksIFwicHhcIiksXG4gICAgICBsZWZ0OiBcIlwiLmNvbmNhdChNYXRoLnJvdW5kKGxlZnQpLCBcInB4XCIpLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiBnZXRUcmFuc2Zvcm1PcmlnaW5WYWx1ZShlbGVtVHJhbnNmb3JtT3JpZ2luKVxuICAgIH07XG4gIH0sIFthbmNob3JFbCwgYW5jaG9yUmVmZXJlbmNlLCBnZXRBbmNob3JPZmZzZXQsIGdldENvbnRlbnRBbmNob3JPZmZzZXQsIGdldFRyYW5zZm9ybU9yaWdpbiwgbWFyZ2luVGhyZXNob2xkXSk7XG4gIHZhciBzZXRQb3NpdGlvbmluZ1N0eWxlcyA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWxlbWVudCA9IHBhcGVyUmVmLmN1cnJlbnQ7XG5cbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcG9zaXRpb25pbmcgPSBnZXRQb3NpdGlvbmluZ1N0eWxlKGVsZW1lbnQpO1xuXG4gICAgaWYgKHBvc2l0aW9uaW5nLnRvcCAhPT0gbnVsbCkge1xuICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBwb3NpdGlvbmluZy50b3A7XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uaW5nLmxlZnQgIT09IG51bGwpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IHBvc2l0aW9uaW5nLmxlZnQ7XG4gICAgfVxuXG4gICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBwb3NpdGlvbmluZy50cmFuc2Zvcm1PcmlnaW47XG4gIH0sIFtnZXRQb3NpdGlvbmluZ1N0eWxlXSk7XG5cbiAgdmFyIGhhbmRsZUVudGVyaW5nID0gZnVuY3Rpb24gaGFuZGxlRW50ZXJpbmcoZWxlbWVudCwgaXNBcHBlYXJpbmcpIHtcbiAgICBpZiAob25FbnRlcmluZykge1xuICAgICAgb25FbnRlcmluZyhlbGVtZW50LCBpc0FwcGVhcmluZyk7XG4gICAgfVxuXG4gICAgc2V0UG9zaXRpb25pbmdTdHlsZXMoKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlUGFwZXJSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAvLyAjU3RyaWN0TW9kZSByZWFkeVxuICAgIHBhcGVyUmVmLmN1cnJlbnQgPSBSZWFjdERPTS5maW5kRE9NTm9kZShpbnN0YW5jZSk7XG4gIH0sIFtdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAob3Blbikge1xuICAgICAgc2V0UG9zaXRpb25pbmdTdHlsZXMoKTtcbiAgICB9XG4gIH0pO1xuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKGFjdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBvcGVuID8ge1xuICAgICAgdXBkYXRlUG9zaXRpb246IGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICBzZXRQb3NpdGlvbmluZ1N0eWxlcygpO1xuICAgICAgfVxuICAgIH0gOiBudWxsO1xuICB9LCBbb3Blbiwgc2V0UG9zaXRpb25pbmdTdHlsZXNdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIW9wZW4pIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIGhhbmRsZVJlc2l6ZSA9IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldFBvc2l0aW9uaW5nU3R5bGVzKCk7XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbmRsZVJlc2l6ZS5jbGVhcigpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfTtcbiAgfSwgW29wZW4sIHNldFBvc2l0aW9uaW5nU3R5bGVzXSk7XG4gIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb25Qcm9wO1xuXG4gIGlmICh0cmFuc2l0aW9uRHVyYXRpb25Qcm9wID09PSAnYXV0bycgJiYgIVRyYW5zaXRpb25Db21wb25lbnQubXVpU3VwcG9ydEF1dG8pIHtcbiAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSB1bmRlZmluZWQ7XG4gIH0gLy8gSWYgdGhlIGNvbnRhaW5lciBwcm9wIGlzIHByb3ZpZGVkLCB1c2UgdGhhdFxuICAvLyBJZiB0aGUgYW5jaG9yRWwgcHJvcCBpcyBwcm92aWRlZCwgdXNlIGl0cyBwYXJlbnQgYm9keSBlbGVtZW50IGFzIHRoZSBjb250YWluZXJcbiAgLy8gSWYgbmVpdGhlciBhcmUgcHJvdmlkZWQgbGV0IHRoZSBNb2RhbCB0YWtlIGNhcmUgb2YgY2hvb3NpbmcgdGhlIGNvbnRhaW5lclxuXG5cbiAgdmFyIGNvbnRhaW5lciA9IGNvbnRhaW5lclByb3AgfHwgKGFuY2hvckVsID8gb3duZXJEb2N1bWVudChnZXRBbmNob3JFbChhbmNob3JFbCkpLmJvZHkgOiB1bmRlZmluZWQpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwsIF9leHRlbmRzKHtcbiAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICBvcGVuOiBvcGVuLFxuICAgIHJlZjogcmVmLFxuICAgIEJhY2tkcm9wUHJvcHM6IHtcbiAgICAgIGludmlzaWJsZTogdHJ1ZVxuICAgIH0sXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKVxuICB9LCBvdGhlciksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Db21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBhcHBlYXI6IHRydWUsXG4gICAgaW46IG9wZW4sXG4gICAgb25FbnRlcjogb25FbnRlcixcbiAgICBvbkVudGVyZWQ6IG9uRW50ZXJlZCxcbiAgICBvbkV4aXQ6IG9uRXhpdCxcbiAgICBvbkV4aXRlZDogb25FeGl0ZWQsXG4gICAgb25FeGl0aW5nOiBvbkV4aXRpbmcsXG4gICAgdGltZW91dDogdHJhbnNpdGlvbkR1cmF0aW9uXG4gIH0sIFRyYW5zaXRpb25Qcm9wcywge1xuICAgIG9uRW50ZXJpbmc6IGNyZWF0ZUNoYWluZWRGdW5jdGlvbihoYW5kbGVFbnRlcmluZywgVHJhbnNpdGlvblByb3BzLm9uRW50ZXJpbmcpXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQYXBlciwgX2V4dGVuZHMoe1xuICAgIGVsZXZhdGlvbjogZWxldmF0aW9uLFxuICAgIHJlZjogaGFuZGxlUGFwZXJSZWZcbiAgfSwgUGFwZXJQcm9wcywge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnBhcGVyLCBQYXBlclByb3BzLmNsYXNzTmFtZSlcbiAgfSksIGNoaWxkcmVuKSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBQb3BvdmVyLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIEEgcmVmIGZvciBpbXBlcmF0aXZlIGFjdGlvbnMuXG4gICAqIEl0IGN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIHVwZGF0ZVBvc2l0aW9uKCkgYWN0aW9uLlxuICAgKi9cbiAgYWN0aW9uOiByZWZUeXBlLFxuXG4gIC8qKlxuICAgKiBBIEhUTUwgZWxlbWVudCwgb3IgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgaXQuXG4gICAqIEl0J3MgdXNlZCB0byBzZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BvdmVyLlxuICAgKi9cbiAgYW5jaG9yRWw6IGNoYWluUHJvcFR5cGVzKFByb3BUeXBlcy5vbmVPZlR5cGUoW0hUTUxFbGVtZW50VHlwZSwgUHJvcFR5cGVzLmZ1bmNdKSwgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgaWYgKHByb3BzLm9wZW4gJiYgKCFwcm9wcy5hbmNob3JSZWZlcmVuY2UgfHwgcHJvcHMuYW5jaG9yUmVmZXJlbmNlID09PSAnYW5jaG9yRWwnKSkge1xuICAgICAgdmFyIHJlc29sdmVkQW5jaG9yRWwgPSBnZXRBbmNob3JFbChwcm9wcy5hbmNob3JFbCk7XG5cbiAgICAgIGlmIChyZXNvbHZlZEFuY2hvckVsICYmIHJlc29sdmVkQW5jaG9yRWwubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgdmFyIGJveCA9IHJlc29sdmVkQW5jaG9yRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiYgYm94LnRvcCA9PT0gMCAmJiBib3gubGVmdCA9PT0gMCAmJiBib3gucmlnaHQgPT09IDAgJiYgYm94LmJvdHRvbSA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoWydNYXRlcmlhbC1VSTogVGhlIGBhbmNob3JFbGAgcHJvcCBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50IGlzIGludmFsaWQuJywgJ1RoZSBhbmNob3IgZWxlbWVudCBzaG91bGQgYmUgcGFydCBvZiB0aGUgZG9jdW1lbnQgbGF5b3V0LicsIFwiTWFrZSBzdXJlIHRoZSBlbGVtZW50IGlzIHByZXNlbnQgaW4gdGhlIGRvY3VtZW50IG9yIHRoYXQgaXQncyBub3QgZGlzcGxheSBub25lLlwiXS5qb2luKCdcXG4nKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoWydNYXRlcmlhbC1VSTogVGhlIGBhbmNob3JFbGAgcHJvcCBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50IGlzIGludmFsaWQuJywgXCJJdCBzaG91bGQgYmUgYW4gRWxlbWVudCBpbnN0YW5jZSBidXQgaXQncyBgXCIuY29uY2F0KHJlc29sdmVkQW5jaG9yRWwsIFwiYCBpbnN0ZWFkLlwiKV0uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9KSxcblxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgcG9pbnQgb24gdGhlIGFuY2hvciB3aGVyZSB0aGUgcG9wb3ZlcidzXG4gICAqIGBhbmNob3JFbGAgd2lsbCBhdHRhY2ggdG8uIFRoaXMgaXMgbm90IHVzZWQgd2hlbiB0aGVcbiAgICogYW5jaG9yUmVmZXJlbmNlIGlzICdhbmNob3JQb3NpdGlvbicuXG4gICAqXG4gICAqIE9wdGlvbnM6XG4gICAqIHZlcnRpY2FsOiBbdG9wLCBjZW50ZXIsIGJvdHRvbV07XG4gICAqIGhvcml6b250YWw6IFtsZWZ0LCBjZW50ZXIsIHJpZ2h0XS5cbiAgICovXG4gIGFuY2hvck9yaWdpbjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBob3Jpem9udGFsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub25lT2YoWydjZW50ZXInLCAnbGVmdCcsICdyaWdodCddKSwgUHJvcFR5cGVzLm51bWJlcl0pLmlzUmVxdWlyZWQsXG4gICAgdmVydGljYWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2JvdHRvbScsICdjZW50ZXInLCAndG9wJ10pLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZFxuICB9KSxcblxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgcG9zaXRpb24gdGhhdCBtYXkgYmUgdXNlZFxuICAgKiB0byBzZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BvdmVyLlxuICAgKiBUaGUgY29vcmRpbmF0ZXMgYXJlIHJlbGF0aXZlIHRvXG4gICAqIHRoZSBhcHBsaWNhdGlvbidzIGNsaWVudCBhcmVhLlxuICAgKi9cbiAgYW5jaG9yUG9zaXRpb246IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbGVmdDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHRvcDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4gIH0pLFxuXG4gIC8qKlxuICAgKiBUaGlzIGRldGVybWluZXMgd2hpY2ggYW5jaG9yIHByb3AgdG8gcmVmZXIgdG8gdG8gc2V0XG4gICAqIHRoZSBwb3NpdGlvbiBvZiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIGFuY2hvclJlZmVyZW5jZTogUHJvcFR5cGVzLm9uZU9mKFsnYW5jaG9yRWwnLCAnYW5jaG9yUG9zaXRpb24nLCAnbm9uZSddKSxcblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEEgSFRNTCBlbGVtZW50LCBjb21wb25lbnQgaW5zdGFuY2UsIG9yIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBlaXRoZXIuXG4gICAqIFRoZSBgY29udGFpbmVyYCB3aWxsIHBhc3NlZCB0byB0aGUgTW9kYWwgY29tcG9uZW50LlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCBpdCB1c2VzIHRoZSBib2R5IG9mIHRoZSBhbmNob3JFbCdzIHRvcC1sZXZlbCBkb2N1bWVudCBvYmplY3QsXG4gICAqIHNvIGl0J3Mgc2ltcGx5IGBkb2N1bWVudC5ib2R5YCBtb3N0IG9mIHRoZSB0aW1lLlxuICAgKi9cbiAgY29udGFpbmVyOiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAub25lT2ZUeXBlKFtIVE1MRWxlbWVudFR5cGUsIFByb3BUeXBlcy5pbnN0YW5jZU9mKFJlYWN0LkNvbXBvbmVudCksIFByb3BUeXBlcy5mdW5jXSksXG5cbiAgLyoqXG4gICAqIFRoZSBlbGV2YXRpb24gb2YgdGhlIHBvcG92ZXIuXG4gICAqL1xuICBlbGV2YXRpb246IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGluIG9yZGVyIHRvIHJldHJpZXZlIHRoZSBjb250ZW50IGFuY2hvciBlbGVtZW50LlxuICAgKiBJdCdzIHRoZSBvcHBvc2l0ZSBvZiB0aGUgYGFuY2hvckVsYCBwcm9wLlxuICAgKiBUaGUgY29udGVudCBhbmNob3IgZWxlbWVudCBzaG91bGQgYmUgYW4gZWxlbWVudCBpbnNpZGUgdGhlIHBvcG92ZXIuXG4gICAqIEl0J3MgdXNlZCB0byBjb3JyZWN0bHkgc2Nyb2xsIGFuZCBzZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BvdmVyLlxuICAgKiBUaGUgcG9zaXRpb25pbmcgc3RyYXRlZ3kgdHJpZXMgdG8gbWFrZSB0aGUgY29udGVudCBhbmNob3IgZWxlbWVudCBqdXN0IGFib3ZlIHRoZVxuICAgKiBhbmNob3IgZWxlbWVudC5cbiAgICovXG4gIGdldENvbnRlbnRBbmNob3JFbDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyBob3cgY2xvc2UgdG8gdGhlIGVkZ2Ugb2YgdGhlIHdpbmRvdyB0aGUgcG9wb3ZlciBjYW4gYXBwZWFyLlxuICAgKi9cbiAgbWFyZ2luVGhyZXNob2xkOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjb21wb25lbnQgcmVxdWVzdHMgdG8gYmUgY2xvc2VkLlxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIGVudGVyaW5nLlxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBoYXMgZW50ZXJlZC5cbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBlbnRlcmluZy5cbiAgICovXG4gIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBleGl0aW5nLlxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IGhhcyBleGl0ZWQuXG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBleGl0aW5nLlxuICAgKi9cbiAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgcG9wb3ZlciBpcyB2aXNpYmxlLlxuICAgKi9cbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgW2BQYXBlcmBdKC9hcGkvcGFwZXIvKSBlbGVtZW50LlxuICAgKi9cbiAgUGFwZXJQcm9wczogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLnNoYXBlKHtcbiAgICBjb21wb25lbnQ6IGVsZW1lbnRUeXBlQWNjZXB0aW5nUmVmXG4gIH0pLFxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBwb2ludCBvbiB0aGUgcG9wb3ZlciB3aGljaFxuICAgKiB3aWxsIGF0dGFjaCB0byB0aGUgYW5jaG9yJ3Mgb3JpZ2luLlxuICAgKlxuICAgKiBPcHRpb25zOlxuICAgKiB2ZXJ0aWNhbDogW3RvcCwgY2VudGVyLCBib3R0b20sIHgocHgpXTtcbiAgICogaG9yaXpvbnRhbDogW2xlZnQsIGNlbnRlciwgcmlnaHQsIHgocHgpXS5cbiAgICovXG4gIHRyYW5zZm9ybU9yaWdpbjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBob3Jpem9udGFsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub25lT2YoWydjZW50ZXInLCAnbGVmdCcsICdyaWdodCddKSwgUHJvcFR5cGVzLm51bWJlcl0pLmlzUmVxdWlyZWQsXG4gICAgdmVydGljYWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2JvdHRvbScsICdjZW50ZXInLCAndG9wJ10pLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZFxuICB9KSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgdHJhbnNpdGlvbi5cbiAgICogW0ZvbGxvdyB0aGlzIGd1aWRlXSgvY29tcG9uZW50cy90cmFuc2l0aW9ucy8jdHJhbnNpdGlvbmNvbXBvbmVudC1wcm9wKSB0byBsZWFybiBtb3JlIGFib3V0IHRoZSByZXF1aXJlbWVudHMgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgVHJhbnNpdGlvbkNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBTZXQgdG8gJ2F1dG8nIHRvIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlIHRyYW5zaXRpb24gdGltZSBiYXNlZCBvbiBoZWlnaHQuXG4gICAqL1xuICB0cmFuc2l0aW9uRHVyYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXBwZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGVudGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGV4aXQ6IFByb3BUeXBlcy5udW1iZXJcbiAgfSldKSxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgW2BUcmFuc2l0aW9uYF0oaHR0cDovL3JlYWN0Y29tbXVuaXR5Lm9yZy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3RyYW5zaXRpb24jVHJhbnNpdGlvbi1wcm9wcykgZWxlbWVudC5cbiAgICovXG4gIFRyYW5zaXRpb25Qcm9wczogUHJvcFR5cGVzLm9iamVjdFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlQb3BvdmVyJ1xufSkoUG9wb3Zlcik7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vUG9wb3Zlcic7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBleGFjdFByb3AsIEhUTUxFbGVtZW50VHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgc2V0UmVmIGZyb20gJy4uL3V0aWxzL3NldFJlZic7XG5pbXBvcnQgdXNlRm9ya1JlZiBmcm9tICcuLi91dGlscy91c2VGb3JrUmVmJztcblxuZnVuY3Rpb24gZ2V0Q29udGFpbmVyKGNvbnRhaW5lcikge1xuICBjb250YWluZXIgPSB0eXBlb2YgY29udGFpbmVyID09PSAnZnVuY3Rpb24nID8gY29udGFpbmVyKCkgOiBjb250YWluZXI7IC8vICNTdHJpY3RNb2RlIHJlYWR5XG5cbiAgcmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKGNvbnRhaW5lcik7XG59XG5cbnZhciB1c2VFbmhhbmNlZEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gUmVhY3QudXNlTGF5b3V0RWZmZWN0IDogUmVhY3QudXNlRWZmZWN0O1xuLyoqXG4gKiBQb3J0YWxzIHByb3ZpZGUgYSBmaXJzdC1jbGFzcyB3YXkgdG8gcmVuZGVyIGNoaWxkcmVuIGludG8gYSBET00gbm9kZVxuICogdGhhdCBleGlzdHMgb3V0c2lkZSB0aGUgRE9NIGhpZXJhcmNoeSBvZiB0aGUgcGFyZW50IGNvbXBvbmVudC5cbiAqL1xuXG52YXIgUG9ydGFsID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gUG9ydGFsKHByb3BzLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjb250YWluZXIgPSBwcm9wcy5jb250YWluZXIsXG4gICAgICBfcHJvcHMkZGlzYWJsZVBvcnRhbCA9IHByb3BzLmRpc2FibGVQb3J0YWwsXG4gICAgICBkaXNhYmxlUG9ydGFsID0gX3Byb3BzJGRpc2FibGVQb3J0YWwgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVQb3J0YWwsXG4gICAgICBvblJlbmRlcmVkID0gcHJvcHMub25SZW5kZXJlZDtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUobnVsbCksXG4gICAgICBtb3VudE5vZGUgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRNb3VudE5vZGUgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIGhhbmRsZVJlZiA9IHVzZUZvcmtSZWYoIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZHJlbikgPyBjaGlsZHJlbi5yZWYgOiBudWxsLCByZWYpO1xuICB1c2VFbmhhbmNlZEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFkaXNhYmxlUG9ydGFsKSB7XG4gICAgICBzZXRNb3VudE5vZGUoZ2V0Q29udGFpbmVyKGNvbnRhaW5lcikgfHwgZG9jdW1lbnQuYm9keSk7XG4gICAgfVxuICB9LCBbY29udGFpbmVyLCBkaXNhYmxlUG9ydGFsXSk7XG4gIHVzZUVuaGFuY2VkRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobW91bnROb2RlICYmICFkaXNhYmxlUG9ydGFsKSB7XG4gICAgICBzZXRSZWYocmVmLCBtb3VudE5vZGUpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2V0UmVmKHJlZiwgbnVsbCk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0sIFtyZWYsIG1vdW50Tm9kZSwgZGlzYWJsZVBvcnRhbF0pO1xuICB1c2VFbmhhbmNlZEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG9uUmVuZGVyZWQgJiYgKG1vdW50Tm9kZSB8fCBkaXNhYmxlUG9ydGFsKSkge1xuICAgICAgb25SZW5kZXJlZCgpO1xuICAgIH1cbiAgfSwgW29uUmVuZGVyZWQsIG1vdW50Tm9kZSwgZGlzYWJsZVBvcnRhbF0pO1xuXG4gIGlmIChkaXNhYmxlUG9ydGFsKSB7XG4gICAgaWYgKCAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgICByZWY6IGhhbmRsZVJlZlxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgcmV0dXJuIG1vdW50Tm9kZSA/IC8qI19fUFVSRV9fKi9SZWFjdERPTS5jcmVhdGVQb3J0YWwoY2hpbGRyZW4sIG1vdW50Tm9kZSkgOiBtb3VudE5vZGU7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFBvcnRhbC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY2hpbGRyZW4gdG8gcmVuZGVyIGludG8gdGhlIGBjb250YWluZXJgLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBBIEhUTUwgZWxlbWVudCwgY29tcG9uZW50IGluc3RhbmNlLCBvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgZWl0aGVyLlxuICAgKiBUaGUgYGNvbnRhaW5lcmAgd2lsbCBoYXZlIHRoZSBwb3J0YWwgY2hpbGRyZW4gYXBwZW5kZWQgdG8gaXQuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIGl0IHVzZXMgdGhlIGJvZHkgb2YgdGhlIHRvcC1sZXZlbCBkb2N1bWVudCBvYmplY3QsXG4gICAqIHNvIGl0J3Mgc2ltcGx5IGBkb2N1bWVudC5ib2R5YCBtb3N0IG9mIHRoZSB0aW1lLlxuICAgKi9cbiAgY29udGFpbmVyOiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAub25lT2ZUeXBlKFtIVE1MRWxlbWVudFR5cGUsIFByb3BUeXBlcy5pbnN0YW5jZU9mKFJlYWN0LkNvbXBvbmVudCksIFByb3BUeXBlcy5mdW5jXSksXG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIHBvcnRhbCBiZWhhdmlvci5cbiAgICogVGhlIGNoaWxkcmVuIHN0YXkgd2l0aGluIGl0J3MgcGFyZW50IERPTSBoaWVyYXJjaHkuXG4gICAqL1xuICBkaXNhYmxlUG9ydGFsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgb25jZSB0aGUgY2hpbGRyZW4gaGFzIGJlZW4gbW91bnRlZCBpbnRvIHRoZSBgY29udGFpbmVyYC5cbiAgICpcbiAgICogVGhpcyBwcm9wIHdpbGwgYmUgZGVwcmVjYXRlZCBhbmQgcmVtb3ZlZCBpbiB2NSwgdGhlIHJlZiBjYW4gYmUgdXNlZCBpbnN0ZWFkLlxuICAgKi9cbiAgb25SZW5kZXJlZDogUHJvcFR5cGVzLmZ1bmNcbn0gOiB2b2lkIDA7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBQb3J0YWxbJ3Byb3BUeXBlcycgKyAnJ10gPSBleGFjdFByb3AoUG9ydGFsLnByb3BUeXBlcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRhbDsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Qb3J0YWwnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBtZXJnZUNsYXNzZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBTZWxlY3RJbnB1dCBmcm9tICcuL1NlbGVjdElucHV0JztcbmltcG9ydCBmb3JtQ29udHJvbFN0YXRlIGZyb20gJy4uL0Zvcm1Db250cm9sL2Zvcm1Db250cm9sU3RhdGUnO1xuaW1wb3J0IHVzZUZvcm1Db250cm9sIGZyb20gJy4uL0Zvcm1Db250cm9sL3VzZUZvcm1Db250cm9sJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBBcnJvd0Ryb3BEb3duSWNvbiBmcm9tICcuLi9pbnRlcm5hbC9zdmctaWNvbnMvQXJyb3dEcm9wRG93bic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vSW5wdXQnO1xuaW1wb3J0IHsgc3R5bGVzIGFzIG5hdGl2ZVNlbGVjdFN0eWxlcyB9IGZyb20gJy4uL05hdGl2ZVNlbGVjdC9OYXRpdmVTZWxlY3QnO1xuaW1wb3J0IE5hdGl2ZVNlbGVjdElucHV0IGZyb20gJy4uL05hdGl2ZVNlbGVjdC9OYXRpdmVTZWxlY3RJbnB1dCc7XG5pbXBvcnQgRmlsbGVkSW5wdXQgZnJvbSAnLi4vRmlsbGVkSW5wdXQnO1xuaW1wb3J0IE91dGxpbmVkSW5wdXQgZnJvbSAnLi4vT3V0bGluZWRJbnB1dCc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IG5hdGl2ZVNlbGVjdFN0eWxlcztcblxudmFyIF9yZWYgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgbnVsbCk7XG5cbnZhciBfcmVmMiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZpbGxlZElucHV0LCBudWxsKTtcblxudmFyIFNlbGVjdCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFNlbGVjdChwcm9wcywgcmVmKSB7XG4gIHZhciBfcHJvcHMkYXV0b1dpZHRoID0gcHJvcHMuYXV0b1dpZHRoLFxuICAgICAgYXV0b1dpZHRoID0gX3Byb3BzJGF1dG9XaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkYXV0b1dpZHRoLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgX3Byb3BzJGRpc3BsYXlFbXB0eSA9IHByb3BzLmRpc3BsYXlFbXB0eSxcbiAgICAgIGRpc3BsYXlFbXB0eSA9IF9wcm9wcyRkaXNwbGF5RW1wdHkgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc3BsYXlFbXB0eSxcbiAgICAgIF9wcm9wcyRJY29uQ29tcG9uZW50ID0gcHJvcHMuSWNvbkNvbXBvbmVudCxcbiAgICAgIEljb25Db21wb25lbnQgPSBfcHJvcHMkSWNvbkNvbXBvbmVudCA9PT0gdm9pZCAwID8gQXJyb3dEcm9wRG93bkljb24gOiBfcHJvcHMkSWNvbkNvbXBvbmVudCxcbiAgICAgIGlkID0gcHJvcHMuaWQsXG4gICAgICBpbnB1dCA9IHByb3BzLmlucHV0LFxuICAgICAgaW5wdXRQcm9wcyA9IHByb3BzLmlucHV0UHJvcHMsXG4gICAgICBsYWJlbCA9IHByb3BzLmxhYmVsLFxuICAgICAgbGFiZWxJZCA9IHByb3BzLmxhYmVsSWQsXG4gICAgICBfcHJvcHMkbGFiZWxXaWR0aCA9IHByb3BzLmxhYmVsV2lkdGgsXG4gICAgICBsYWJlbFdpZHRoID0gX3Byb3BzJGxhYmVsV2lkdGggPT09IHZvaWQgMCA/IDAgOiBfcHJvcHMkbGFiZWxXaWR0aCxcbiAgICAgIE1lbnVQcm9wcyA9IHByb3BzLk1lbnVQcm9wcyxcbiAgICAgIF9wcm9wcyRtdWx0aXBsZSA9IHByb3BzLm11bHRpcGxlLFxuICAgICAgbXVsdGlwbGUgPSBfcHJvcHMkbXVsdGlwbGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJG11bHRpcGxlLFxuICAgICAgX3Byb3BzJG5hdGl2ZSA9IHByb3BzLm5hdGl2ZSxcbiAgICAgIG5hdGl2ZSA9IF9wcm9wcyRuYXRpdmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJG5hdGl2ZSxcbiAgICAgIG9uQ2xvc2UgPSBwcm9wcy5vbkNsb3NlLFxuICAgICAgb25PcGVuID0gcHJvcHMub25PcGVuLFxuICAgICAgb3BlbiA9IHByb3BzLm9wZW4sXG4gICAgICByZW5kZXJWYWx1ZSA9IHByb3BzLnJlbmRlclZhbHVlLFxuICAgICAgU2VsZWN0RGlzcGxheVByb3BzID0gcHJvcHMuU2VsZWN0RGlzcGxheVByb3BzLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudFByb3BzID0gX3Byb3BzJHZhcmlhbnQgPT09IHZvaWQgMCA/ICdzdGFuZGFyZCcgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhdXRvV2lkdGhcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJkaXNwbGF5RW1wdHlcIiwgXCJJY29uQ29tcG9uZW50XCIsIFwiaWRcIiwgXCJpbnB1dFwiLCBcImlucHV0UHJvcHNcIiwgXCJsYWJlbFwiLCBcImxhYmVsSWRcIiwgXCJsYWJlbFdpZHRoXCIsIFwiTWVudVByb3BzXCIsIFwibXVsdGlwbGVcIiwgXCJuYXRpdmVcIiwgXCJvbkNsb3NlXCIsIFwib25PcGVuXCIsIFwib3BlblwiLCBcInJlbmRlclZhbHVlXCIsIFwiU2VsZWN0RGlzcGxheVByb3BzXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgdmFyIGlucHV0Q29tcG9uZW50ID0gbmF0aXZlID8gTmF0aXZlU2VsZWN0SW5wdXQgOiBTZWxlY3RJbnB1dDtcbiAgdmFyIG11aUZvcm1Db250cm9sID0gdXNlRm9ybUNvbnRyb2woKTtcbiAgdmFyIGZjcyA9IGZvcm1Db250cm9sU3RhdGUoe1xuICAgIHByb3BzOiBwcm9wcyxcbiAgICBtdWlGb3JtQ29udHJvbDogbXVpRm9ybUNvbnRyb2wsXG4gICAgc3RhdGVzOiBbJ3ZhcmlhbnQnXVxuICB9KTtcbiAgdmFyIHZhcmlhbnQgPSBmY3MudmFyaWFudCB8fCB2YXJpYW50UHJvcHM7XG4gIHZhciBJbnB1dENvbXBvbmVudCA9IGlucHV0IHx8IHtcbiAgICBzdGFuZGFyZDogX3JlZixcbiAgICBvdXRsaW5lZDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoT3V0bGluZWRJbnB1dCwge1xuICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgbGFiZWxXaWR0aDogbGFiZWxXaWR0aFxuICAgIH0pLFxuICAgIGZpbGxlZDogX3JlZjJcbiAgfVt2YXJpYW50XTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoSW5wdXRDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAvLyBNb3N0IG9mIHRoZSBsb2dpYyBpcyBpbXBsZW1lbnRlZCBpbiBgU2VsZWN0SW5wdXRgLlxuICAgIC8vIFRoZSBgU2VsZWN0YCBjb21wb25lbnQgaXMgYSBzaW1wbGUgQVBJIHdyYXBwZXIgdG8gZXhwb3NlIHNvbWV0aGluZyBiZXR0ZXIgdG8gcGxheSB3aXRoLlxuICAgIGlucHV0Q29tcG9uZW50OiBpbnB1dENvbXBvbmVudCxcbiAgICBpbnB1dFByb3BzOiBfZXh0ZW5kcyh7XG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICBJY29uQ29tcG9uZW50OiBJY29uQ29tcG9uZW50LFxuICAgICAgdmFyaWFudDogdmFyaWFudCxcbiAgICAgIHR5cGU6IHVuZGVmaW5lZCxcbiAgICAgIC8vIFdlIHJlbmRlciBhIHNlbGVjdC4gV2UgY2FuIGlnbm9yZSB0aGUgdHlwZSBwcm92aWRlZCBieSB0aGUgYElucHV0YC5cbiAgICAgIG11bHRpcGxlOiBtdWx0aXBsZVxuICAgIH0sIG5hdGl2ZSA/IHtcbiAgICAgIGlkOiBpZFxuICAgIH0gOiB7XG4gICAgICBhdXRvV2lkdGg6IGF1dG9XaWR0aCxcbiAgICAgIGRpc3BsYXlFbXB0eTogZGlzcGxheUVtcHR5LFxuICAgICAgbGFiZWxJZDogbGFiZWxJZCxcbiAgICAgIE1lbnVQcm9wczogTWVudVByb3BzLFxuICAgICAgb25DbG9zZTogb25DbG9zZSxcbiAgICAgIG9uT3Blbjogb25PcGVuLFxuICAgICAgb3Blbjogb3BlbixcbiAgICAgIHJlbmRlclZhbHVlOiByZW5kZXJWYWx1ZSxcbiAgICAgIFNlbGVjdERpc3BsYXlQcm9wczogX2V4dGVuZHMoe1xuICAgICAgICBpZDogaWRcbiAgICAgIH0sIFNlbGVjdERpc3BsYXlQcm9wcylcbiAgICB9LCBpbnB1dFByb3BzLCB7XG4gICAgICBjbGFzc2VzOiBpbnB1dFByb3BzID8gbWVyZ2VDbGFzc2VzKHtcbiAgICAgICAgYmFzZUNsYXNzZXM6IGNsYXNzZXMsXG4gICAgICAgIG5ld0NsYXNzZXM6IGlucHV0UHJvcHMuY2xhc3NlcyxcbiAgICAgICAgQ29tcG9uZW50OiBTZWxlY3RcbiAgICAgIH0pIDogY2xhc3Nlc1xuICAgIH0sIGlucHV0ID8gaW5wdXQucHJvcHMuaW5wdXRQcm9wcyA6IHt9KSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTZWxlY3QucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgd2lkdGggb2YgdGhlIHBvcG92ZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIHNldCBhY2NvcmRpbmcgdG8gdGhlIGl0ZW1zIGluc2lkZSB0aGVcbiAgICogbWVudSwgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgYXQgbGVhc3QgdGhlIHdpZHRoIG9mIHRoZSBzZWxlY3QgaW5wdXQuXG4gICAqL1xuICBhdXRvV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgb3B0aW9uIGVsZW1lbnRzIHRvIHBvcHVsYXRlIHRoZSBzZWxlY3Qgd2l0aC5cbiAgICogQ2FuIGJlIHNvbWUgYE1lbnVJdGVtYCB3aGVuIGBuYXRpdmVgIGlzIGZhbHNlIGFuZCBgb3B0aW9uYCB3aGVuIGBuYXRpdmVgIGlzIHRydWUuXG4gICAqXG4gICAqIOKaoO+4j1RoZSBgTWVudUl0ZW1gIGVsZW1lbnRzICoqbXVzdCoqIGJlIGRpcmVjdCBkZXNjZW5kYW50cyB3aGVuIGBuYXRpdmVgIGlzIGZhbHNlLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGVsZW1lbnQgdmFsdWUuIFVzZSB3aGVuIHRoZSBjb21wb25lbnQgaXMgbm90IGNvbnRyb2xsZWQuXG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYSB2YWx1ZSBpcyBkaXNwbGF5ZWQgZXZlbiBpZiBubyBpdGVtcyBhcmUgc2VsZWN0ZWQuXG4gICAqXG4gICAqIEluIG9yZGVyIHRvIGRpc3BsYXkgYSBtZWFuaW5nZnVsIHZhbHVlLCBhIGZ1bmN0aW9uIHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIGByZW5kZXJWYWx1ZWAgcHJvcCB3aGljaCByZXR1cm5zIHRoZSB2YWx1ZSB0byBiZSBkaXNwbGF5ZWQgd2hlbiBubyBpdGVtcyBhcmUgc2VsZWN0ZWQuXG4gICAqIFlvdSBjYW4gb25seSB1c2UgaXQgd2hlbiB0aGUgYG5hdGl2ZWAgcHJvcCBpcyBgZmFsc2VgIChkZWZhdWx0KS5cbiAgICovXG4gIGRpc3BsYXlFbXB0eTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIHRoYXQgZGlzcGxheXMgdGhlIGFycm93LlxuICAgKi9cbiAgSWNvbkNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBUaGUgYGlkYCBvZiB0aGUgd3JhcHBlciBlbGVtZW50IG9yIHRoZSBgc2VsZWN0YCBlbGVtZW50IHdoZW4gYG5hdGl2ZWAuXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQW4gYElucHV0YCBlbGVtZW50OyBkb2VzIG5vdCBoYXZlIHRvIGJlIGEgbWF0ZXJpYWwtdWkgc3BlY2lmaWMgYElucHV0YC5cbiAgICovXG4gIGlucHV0OiBQcm9wVHlwZXMuZWxlbWVudCxcblxuICAvKipcbiAgICogW0F0dHJpYnV0ZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNBdHRyaWJ1dGVzKSBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqIFdoZW4gYG5hdGl2ZWAgaXMgYHRydWVgLCB0aGUgYXR0cmlidXRlcyBhcmUgYXBwbGllZCBvbiB0aGUgYHNlbGVjdGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFNlZSBbT3V0bGluZWRJbnB1dCNsYWJlbF0oL2FwaS9vdXRsaW5lZC1pbnB1dC8jcHJvcHMpXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFRoZSBJRCBvZiBhbiBlbGVtZW50IHRoYXQgYWN0cyBhcyBhbiBhZGRpdGlvbmFsIGxhYmVsLiBUaGUgU2VsZWN0IHdpbGxcbiAgICogYmUgbGFiZWxsZWQgYnkgdGhlIGFkZGl0aW9uYWwgbGFiZWwgYW5kIHRoZSBzZWxlY3RlZCB2YWx1ZS5cbiAgICovXG4gIGxhYmVsSWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFNlZSBbT3V0bGluZWRJbnB1dCNsYWJlbF0oL2FwaS9vdXRsaW5lZC1pbnB1dC8jcHJvcHMpXG4gICAqL1xuICBsYWJlbFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYE1lbnVgXSgvYXBpL21lbnUvKSBlbGVtZW50LlxuICAgKi9cbiAgTWVudVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGB2YWx1ZWAgbXVzdCBiZSBhbiBhcnJheSBhbmQgdGhlIG1lbnUgd2lsbCBzdXBwb3J0IG11bHRpcGxlIHNlbGVjdGlvbnMuXG4gICAqL1xuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGNvbXBvbmVudCB3aWxsIGJlIHVzaW5nIGEgbmF0aXZlIGBzZWxlY3RgIGVsZW1lbnQuXG4gICAqL1xuICBuYXRpdmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIGEgbWVudSBpdGVtIGlzIHNlbGVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIFlvdSBjYW4gcHVsbCBvdXQgdGhlIG5ldyB2YWx1ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC52YWx1ZWAgKGFueSkuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbY2hpbGRdIFRoZSByZWFjdCBlbGVtZW50IHRoYXQgd2FzIHNlbGVjdGVkIHdoZW4gYG5hdGl2ZWAgaXMgYGZhbHNlYCAoZGVmYXVsdCkuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCByZXF1ZXN0cyB0byBiZSBjbG9zZWQuXG4gICAqIFVzZSBpbiBjb250cm9sbGVkIG1vZGUgKHNlZSBvcGVuKS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCByZXF1ZXN0cyB0byBiZSBvcGVuZWQuXG4gICAqIFVzZSBpbiBjb250cm9sbGVkIG1vZGUgKHNlZSBvcGVuKS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKi9cbiAgb25PcGVuOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ29udHJvbCBgc2VsZWN0YCBvcGVuIHN0YXRlLlxuICAgKiBZb3UgY2FuIG9ubHkgdXNlIGl0IHdoZW4gdGhlIGBuYXRpdmVgIHByb3AgaXMgYGZhbHNlYCAoZGVmYXVsdCkuXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBzZWxlY3RlZCB2YWx1ZS5cbiAgICogWW91IGNhbiBvbmx5IHVzZSBpdCB3aGVuIHRoZSBgbmF0aXZlYCBwcm9wIGlzIGBmYWxzZWAgKGRlZmF1bHQpLlxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgVGhlIGB2YWx1ZWAgcHJvdmlkZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogQHJldHVybnMge1JlYWN0Tm9kZX1cbiAgICovXG4gIHJlbmRlclZhbHVlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgY2xpY2thYmxlIGRpdiBlbGVtZW50LlxuICAgKi9cbiAgU2VsZWN0RGlzcGxheVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUaGUgaW5wdXQgdmFsdWUuIFByb3ZpZGluZyBhbiBlbXB0eSBzdHJpbmcgd2lsbCBzZWxlY3Qgbm8gb3B0aW9ucy5cbiAgICogVGhpcyBwcm9wIGlzIHJlcXVpcmVkIHdoZW4gdGhlIGBuYXRpdmVgIHByb3AgaXMgYGZhbHNlYCAoZGVmYXVsdCkuXG4gICAqIFNldCB0byBhbiBlbXB0eSBzdHJpbmcgYCcnYCBpZiB5b3UgZG9uJ3Qgd2FudCBhbnkgb2YgdGhlIGF2YWlsYWJsZSBvcHRpb25zIHRvIGJlIHNlbGVjdGVkLlxuICAgKlxuICAgKiBJZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0IGl0IG11c3QgaGF2ZSByZWZlcmVuY2UgZXF1YWxpdHkgd2l0aCB0aGUgb3B0aW9uIGluIG9yZGVyIHRvIGJlIHNlbGVjdGVkLlxuICAgKiBJZiB0aGUgdmFsdWUgaXMgbm90IGFuIG9iamVjdCwgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBtdXN0IG1hdGNoIHdpdGggdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgb3B0aW9uIGluIG9yZGVyIHRvIGJlIHNlbGVjdGVkLlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2ZpbGxlZCcsICdvdXRsaW5lZCcsICdzdGFuZGFyZCddKVxufSA6IHZvaWQgMDtcblNlbGVjdC5tdWlOYW1lID0gJ1NlbGVjdCc7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpU2VsZWN0J1xufSkoU2VsZWN0KTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCB7IGZvcm1hdE11aUVycm9yTWVzc2FnZSBhcyBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS91dGlsc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNGcmFnbWVudCB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJy4uL3V0aWxzL293bmVyRG9jdW1lbnQnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5pbXBvcnQgeyByZWZUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBNZW51IGZyb20gJy4uL01lbnUvTWVudSc7XG5pbXBvcnQgeyBpc0ZpbGxlZCB9IGZyb20gJy4uL0lucHV0QmFzZS91dGlscyc7XG5pbXBvcnQgdXNlRm9ya1JlZiBmcm9tICcuLi91dGlscy91c2VGb3JrUmVmJztcbmltcG9ydCB1c2VDb250cm9sbGVkIGZyb20gJy4uL3V0aWxzL3VzZUNvbnRyb2xsZWQnO1xuXG5mdW5jdGlvbiBhcmVFcXVhbFZhbHVlcyhhLCBiKSB7XG4gIGlmIChfdHlwZW9mKGIpID09PSAnb2JqZWN0JyAmJiBiICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGEgPT09IGI7XG4gIH1cblxuICByZXR1cm4gU3RyaW5nKGEpID09PSBTdHJpbmcoYik7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkoZGlzcGxheSkge1xuICByZXR1cm4gZGlzcGxheSA9PSBudWxsIHx8IHR5cGVvZiBkaXNwbGF5ID09PSAnc3RyaW5nJyAmJiAhZGlzcGxheS50cmltKCk7XG59XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxuXG52YXIgU2VsZWN0SW5wdXQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBTZWxlY3RJbnB1dChwcm9wcywgcmVmKSB7XG4gIHZhciBhcmlhTGFiZWwgPSBwcm9wc1snYXJpYS1sYWJlbCddLFxuICAgICAgYXV0b0ZvY3VzID0gcHJvcHMuYXV0b0ZvY3VzLFxuICAgICAgYXV0b1dpZHRoID0gcHJvcHMuYXV0b1dpZHRoLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGRpc3BsYXlFbXB0eSA9IHByb3BzLmRpc3BsYXlFbXB0eSxcbiAgICAgIEljb25Db21wb25lbnQgPSBwcm9wcy5JY29uQ29tcG9uZW50LFxuICAgICAgaW5wdXRSZWZQcm9wID0gcHJvcHMuaW5wdXRSZWYsXG4gICAgICBsYWJlbElkID0gcHJvcHMubGFiZWxJZCxcbiAgICAgIF9wcm9wcyRNZW51UHJvcHMgPSBwcm9wcy5NZW51UHJvcHMsXG4gICAgICBNZW51UHJvcHMgPSBfcHJvcHMkTWVudVByb3BzID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRNZW51UHJvcHMsXG4gICAgICBtdWx0aXBsZSA9IHByb3BzLm11bHRpcGxlLFxuICAgICAgbmFtZSA9IHByb3BzLm5hbWUsXG4gICAgICBvbkJsdXIgPSBwcm9wcy5vbkJsdXIsXG4gICAgICBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgb25DbG9zZSA9IHByb3BzLm9uQ2xvc2UsXG4gICAgICBvbkZvY3VzID0gcHJvcHMub25Gb2N1cyxcbiAgICAgIG9uT3BlbiA9IHByb3BzLm9uT3BlbixcbiAgICAgIG9wZW5Qcm9wID0gcHJvcHMub3BlbixcbiAgICAgIHJlYWRPbmx5ID0gcHJvcHMucmVhZE9ubHksXG4gICAgICByZW5kZXJWYWx1ZSA9IHByb3BzLnJlbmRlclZhbHVlLFxuICAgICAgX3Byb3BzJFNlbGVjdERpc3BsYXlQID0gcHJvcHMuU2VsZWN0RGlzcGxheVByb3BzLFxuICAgICAgU2VsZWN0RGlzcGxheVByb3BzID0gX3Byb3BzJFNlbGVjdERpc3BsYXlQID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRTZWxlY3REaXNwbGF5UCxcbiAgICAgIHRhYkluZGV4UHJvcCA9IHByb3BzLnRhYkluZGV4LFxuICAgICAgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICB2YWx1ZVByb3AgPSBwcm9wcy52YWx1ZSxcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ3N0YW5kYXJkJyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImFyaWEtbGFiZWxcIiwgXCJhdXRvRm9jdXNcIiwgXCJhdXRvV2lkdGhcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJkZWZhdWx0VmFsdWVcIiwgXCJkaXNhYmxlZFwiLCBcImRpc3BsYXlFbXB0eVwiLCBcIkljb25Db21wb25lbnRcIiwgXCJpbnB1dFJlZlwiLCBcImxhYmVsSWRcIiwgXCJNZW51UHJvcHNcIiwgXCJtdWx0aXBsZVwiLCBcIm5hbWVcIiwgXCJvbkJsdXJcIiwgXCJvbkNoYW5nZVwiLCBcIm9uQ2xvc2VcIiwgXCJvbkZvY3VzXCIsIFwib25PcGVuXCIsIFwib3BlblwiLCBcInJlYWRPbmx5XCIsIFwicmVuZGVyVmFsdWVcIiwgXCJTZWxlY3REaXNwbGF5UHJvcHNcIiwgXCJ0YWJJbmRleFwiLCBcInR5cGVcIiwgXCJ2YWx1ZVwiLCBcInZhcmlhbnRcIl0pO1xuXG4gIHZhciBfdXNlQ29udHJvbGxlZCA9IHVzZUNvbnRyb2xsZWQoe1xuICAgIGNvbnRyb2xsZWQ6IHZhbHVlUHJvcCxcbiAgICBkZWZhdWx0OiBkZWZhdWx0VmFsdWUsXG4gICAgbmFtZTogJ1NlbGVjdCdcbiAgfSksXG4gICAgICBfdXNlQ29udHJvbGxlZDIgPSBfc2xpY2VkVG9BcnJheShfdXNlQ29udHJvbGxlZCwgMiksXG4gICAgICB2YWx1ZSA9IF91c2VDb250cm9sbGVkMlswXSxcbiAgICAgIHNldFZhbHVlID0gX3VzZUNvbnRyb2xsZWQyWzFdO1xuXG4gIHZhciBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUobnVsbCksXG4gICAgICBkaXNwbGF5Tm9kZSA9IF9SZWFjdCR1c2VTdGF0ZVswXSxcbiAgICAgIHNldERpc3BsYXlOb2RlID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBfUmVhY3QkdXNlUmVmID0gUmVhY3QudXNlUmVmKG9wZW5Qcm9wICE9IG51bGwpLFxuICAgICAgaXNPcGVuQ29udHJvbGxlZCA9IF9SZWFjdCR1c2VSZWYuY3VycmVudDtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMiA9IFJlYWN0LnVzZVN0YXRlKCksXG4gICAgICBtZW51TWluV2lkdGhTdGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRNZW51TWluV2lkdGhTdGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTMgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksXG4gICAgICBvcGVuU3RhdGUgPSBfUmVhY3QkdXNlU3RhdGUzWzBdLFxuICAgICAgc2V0T3BlblN0YXRlID0gX1JlYWN0JHVzZVN0YXRlM1sxXTtcblxuICB2YXIgaGFuZGxlUmVmID0gdXNlRm9ya1JlZihyZWYsIGlucHV0UmVmUHJvcCk7XG4gIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUoaGFuZGxlUmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvY3VzOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgZGlzcGxheU5vZGUuZm9jdXMoKTtcbiAgICAgIH0sXG4gICAgICBub2RlOiBpbnB1dFJlZi5jdXJyZW50LFxuICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfTtcbiAgfSwgW2Rpc3BsYXlOb2RlLCB2YWx1ZV0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChhdXRvRm9jdXMgJiYgZGlzcGxheU5vZGUpIHtcbiAgICAgIGRpc3BsYXlOb2RlLmZvY3VzKCk7XG4gICAgfVxuICB9LCBbYXV0b0ZvY3VzLCBkaXNwbGF5Tm9kZV0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChkaXNwbGF5Tm9kZSkge1xuICAgICAgdmFyIGxhYmVsID0gb3duZXJEb2N1bWVudChkaXNwbGF5Tm9kZSkuZ2V0RWxlbWVudEJ5SWQobGFiZWxJZCk7XG5cbiAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG4gICAgICAgICAgaWYgKGdldFNlbGVjdGlvbigpLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICBkaXNwbGF5Tm9kZS5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGxhYmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcik7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSwgW2xhYmVsSWQsIGRpc3BsYXlOb2RlXSk7XG5cbiAgdmFyIHVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZShvcGVuLCBldmVudCkge1xuICAgIGlmIChvcGVuKSB7XG4gICAgICBpZiAob25PcGVuKSB7XG4gICAgICAgIG9uT3BlbihldmVudCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvbkNsb3NlKSB7XG4gICAgICBvbkNsb3NlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoIWlzT3BlbkNvbnRyb2xsZWQpIHtcbiAgICAgIHNldE1lbnVNaW5XaWR0aFN0YXRlKGF1dG9XaWR0aCA/IG51bGwgOiBkaXNwbGF5Tm9kZS5jbGllbnRXaWR0aCk7XG4gICAgICBzZXRPcGVuU3RhdGUob3Blbik7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVNb3VzZURvd24gPSBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgICAvLyBJZ25vcmUgZXZlcnl0aGluZyBidXQgbGVmdC1jbGlja1xuICAgIGlmIChldmVudC5idXR0b24gIT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEhpamFjayB0aGUgZGVmYXVsdCBmb2N1cyBiZWhhdmlvci5cblxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkaXNwbGF5Tm9kZS5mb2N1cygpO1xuICAgIHVwZGF0ZSh0cnVlLCBldmVudCk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUNsb3NlID0gZnVuY3Rpb24gaGFuZGxlQ2xvc2UoZXZlbnQpIHtcbiAgICB1cGRhdGUoZmFsc2UsIGV2ZW50KTtcbiAgfTtcblxuICB2YXIgY2hpbGRyZW5BcnJheSA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pOyAvLyBTdXBwb3J0IGF1dG9maWxsLlxuXG4gIHZhciBoYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB2YXIgaW5kZXggPSBjaGlsZHJlbkFycmF5Lm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHJldHVybiBjaGlsZC5wcm9wcy52YWx1ZTtcbiAgICB9KS5pbmRleE9mKGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5BcnJheVtpbmRleF07XG4gICAgc2V0VmFsdWUoY2hpbGQucHJvcHMudmFsdWUpO1xuXG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShldmVudCwgY2hpbGQpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlSXRlbUNsaWNrID0gZnVuY3Rpb24gaGFuZGxlSXRlbUNsaWNrKGNoaWxkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgICB1cGRhdGUoZmFsc2UsIGV2ZW50KTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld1ZhbHVlO1xuXG4gICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLnNsaWNlKCkgOiBbXTtcbiAgICAgICAgdmFyIGl0ZW1JbmRleCA9IHZhbHVlLmluZGV4T2YoY2hpbGQucHJvcHMudmFsdWUpO1xuXG4gICAgICAgIGlmIChpdGVtSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgbmV3VmFsdWUucHVzaChjaGlsZC5wcm9wcy52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VmFsdWUuc3BsaWNlKGl0ZW1JbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1ZhbHVlID0gY2hpbGQucHJvcHMudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZC5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xuXG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgZXZlbnQucGVyc2lzdCgpOyAvLyBQcmVhY3Qgc3VwcG9ydCwgdGFyZ2V0IGlzIHJlYWQgb25seSBwcm9wZXJ0eSBvbiBhIG5hdGl2ZSBldmVudC5cblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlbnQsICd0YXJnZXQnLCB7XG4gICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBvbkNoYW5nZShldmVudCwgY2hpbGQpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgdmFyIGhhbmRsZUtleURvd24gPSBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgaWYgKCFyZWFkT25seSkge1xuICAgICAgdmFyIHZhbGlkS2V5cyA9IFsnICcsICdBcnJvd1VwJywgJ0Fycm93RG93bicsIC8vIFRoZSBuYXRpdmUgc2VsZWN0IGRvZXNuJ3QgcmVzcG9uZCB0byBlbnRlciBvbiBNYWNPUywgYnV0IGl0J3MgcmVjb21tZW5kZWQgYnlcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS1wcmFjdGljZXMvZXhhbXBsZXMvbGlzdGJveC9saXN0Ym94LWNvbGxhcHNpYmxlLmh0bWxcbiAgICAgICdFbnRlciddO1xuXG4gICAgICBpZiAodmFsaWRLZXlzLmluZGV4T2YoZXZlbnQua2V5KSAhPT0gLTEpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdXBkYXRlKHRydWUsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdmFyIG9wZW4gPSBkaXNwbGF5Tm9kZSAhPT0gbnVsbCAmJiAoaXNPcGVuQ29udHJvbGxlZCA/IG9wZW5Qcm9wIDogb3BlblN0YXRlKTtcblxuICB2YXIgaGFuZGxlQmx1ciA9IGZ1bmN0aW9uIGhhbmRsZUJsdXIoZXZlbnQpIHtcbiAgICAvLyBpZiBvcGVuIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvblxuICAgIGlmICghb3BlbiAmJiBvbkJsdXIpIHtcbiAgICAgIGV2ZW50LnBlcnNpc3QoKTsgLy8gUHJlYWN0IHN1cHBvcnQsIHRhcmdldCBpcyByZWFkIG9ubHkgcHJvcGVydHkgb24gYSBuYXRpdmUgZXZlbnQuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgJ3RhcmdldCcsIHtcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBvbkJsdXIoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBkZWxldGUgb3RoZXJbJ2FyaWEtaW52YWxpZCddO1xuICB2YXIgZGlzcGxheTtcbiAgdmFyIGRpc3BsYXlTaW5nbGU7XG4gIHZhciBkaXNwbGF5TXVsdGlwbGUgPSBbXTtcbiAgdmFyIGNvbXB1dGVEaXNwbGF5ID0gZmFsc2U7XG4gIHZhciBmb3VuZE1hdGNoID0gZmFsc2U7IC8vIE5vIG5lZWQgdG8gZGlzcGxheSBhbnkgdmFsdWUgaWYgdGhlIGZpZWxkIGlzIGVtcHR5LlxuXG4gIGlmIChpc0ZpbGxlZCh7XG4gICAgdmFsdWU6IHZhbHVlXG4gIH0pIHx8IGRpc3BsYXlFbXB0eSkge1xuICAgIGlmIChyZW5kZXJWYWx1ZSkge1xuICAgICAgZGlzcGxheSA9IHJlbmRlclZhbHVlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcHV0ZURpc3BsYXkgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpdGVtcyA9IGNoaWxkcmVuQXJyYXkubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmICghIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoaXNGcmFnbWVudChjaGlsZCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIFNlbGVjdCBjb21wb25lbnQgZG9lc24ndCBhY2NlcHQgYSBGcmFnbWVudCBhcyBhIGNoaWxkLlwiLCAnQ29uc2lkZXIgcHJvdmlkaW5nIGFuIGFycmF5IGluc3RlYWQuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBzZWxlY3RlZDtcblxuICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gXCJNYXRlcmlhbC1VSTogVGhlIGB2YWx1ZWAgcHJvcCBtdXN0IGJlIGFuIGFycmF5IHdoZW4gdXNpbmcgdGhlIGBTZWxlY3RgIGNvbXBvbmVudCB3aXRoIGBtdWx0aXBsZWAuXCIgOiBfZm9ybWF0TXVpRXJyb3JNZXNzYWdlKDIpKTtcbiAgICAgIH1cblxuICAgICAgc2VsZWN0ZWQgPSB2YWx1ZS5zb21lKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBhcmVFcXVhbFZhbHVlcyh2LCBjaGlsZC5wcm9wcy52YWx1ZSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHNlbGVjdGVkICYmIGNvbXB1dGVEaXNwbGF5KSB7XG4gICAgICAgIGRpc3BsYXlNdWx0aXBsZS5wdXNoKGNoaWxkLnByb3BzLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0ZWQgPSBhcmVFcXVhbFZhbHVlcyh2YWx1ZSwgY2hpbGQucHJvcHMudmFsdWUpO1xuXG4gICAgICBpZiAoc2VsZWN0ZWQgJiYgY29tcHV0ZURpc3BsYXkpIHtcbiAgICAgICAgZGlzcGxheVNpbmdsZSA9IGNoaWxkLnByb3BzLmNoaWxkcmVuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgZm91bmRNYXRjaCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICdhcmlhLXNlbGVjdGVkJzogc2VsZWN0ZWQgPyAndHJ1ZScgOiB1bmRlZmluZWQsXG4gICAgICBvbkNsaWNrOiBoYW5kbGVJdGVtQ2xpY2soY2hpbGQpLFxuICAgICAgb25LZXlVcDogZnVuY3Rpb24gb25LZXlVcChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnICcpIHtcbiAgICAgICAgICAvLyBvdGhlcndpc2Ugb3VyIE1lbnVJdGVtcyBkaXNwYXRjaGVzIGEgY2xpY2sgZXZlbnRcbiAgICAgICAgICAvLyBpdCdzIG5vdCBiZWhhdmlvciBvZiB0aGUgbmF0aXZlIDxvcHRpb24+IGFuZCBjYXVzZXNcbiAgICAgICAgICAvLyB0aGUgc2VsZWN0IHRvIGNsb3NlIGltbWVkaWF0ZWx5IHNpbmNlIHdlIG9wZW4gb24gc3BhY2Uga2V5ZG93blxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGQucHJvcHMub25LZXlVcCkge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uS2V5VXAoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcm9sZTogJ29wdGlvbicsXG4gICAgICBzZWxlY3RlZDogc2VsZWN0ZWQsXG4gICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgLy8gVGhlIHZhbHVlIGlzIG1vc3QgbGlrZWx5IG5vdCBhIHZhbGlkIEhUTUwgYXR0cmlidXRlLlxuICAgICAgJ2RhdGEtdmFsdWUnOiBjaGlsZC5wcm9wcy52YWx1ZSAvLyBJbnN0ZWFkLCB3ZSBwcm92aWRlIGl0IGFzIGEgZGF0YSBhdHRyaWJ1dGUuXG5cbiAgICB9KTtcbiAgfSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFmb3VuZE1hdGNoICYmICFtdWx0aXBsZSAmJiB2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IGNoaWxkcmVuQXJyYXkubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgIHJldHVybiBjaGlsZC5wcm9wcy52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUud2FybihbXCJNYXRlcmlhbC1VSTogWW91IGhhdmUgcHJvdmlkZWQgYW4gb3V0LW9mLXJhbmdlIHZhbHVlIGBcIi5jb25jYXQodmFsdWUsIFwiYCBmb3IgdGhlIHNlbGVjdCBcIikuY29uY2F0KG5hbWUgPyBcIihuYW1lPVxcXCJcIi5jb25jYXQobmFtZSwgXCJcXFwiKSBcIikgOiAnJywgXCJjb21wb25lbnQuXCIpLCBcIkNvbnNpZGVyIHByb3ZpZGluZyBhIHZhbHVlIHRoYXQgbWF0Y2hlcyBvbmUgb2YgdGhlIGF2YWlsYWJsZSBvcHRpb25zIG9yICcnLlwiLCBcIlRoZSBhdmFpbGFibGUgdmFsdWVzIGFyZSBcIi5jb25jYXQodmFsdWVzLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuICAgICAgICAgIHJldHVybiB4ICE9IG51bGw7XG4gICAgICAgIH0pLm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgIHJldHVybiBcImBcIi5jb25jYXQoeCwgXCJgXCIpO1xuICAgICAgICB9KS5qb2luKCcsICcpIHx8ICdcIlwiJywgXCIuXCIpXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfSwgW2ZvdW5kTWF0Y2gsIGNoaWxkcmVuQXJyYXksIG11bHRpcGxlLCBuYW1lLCB2YWx1ZV0pO1xuICB9XG5cbiAgaWYgKGNvbXB1dGVEaXNwbGF5KSB7XG4gICAgZGlzcGxheSA9IG11bHRpcGxlID8gZGlzcGxheU11bHRpcGxlLmpvaW4oJywgJykgOiBkaXNwbGF5U2luZ2xlO1xuICB9IC8vIEF2b2lkIHBlcmZvcm1pbmcgYSBsYXlvdXQgY29tcHV0YXRpb24gaW4gdGhlIHJlbmRlciBtZXRob2QuXG5cblxuICB2YXIgbWVudU1pbldpZHRoID0gbWVudU1pbldpZHRoU3RhdGU7XG5cbiAgaWYgKCFhdXRvV2lkdGggJiYgaXNPcGVuQ29udHJvbGxlZCAmJiBkaXNwbGF5Tm9kZSkge1xuICAgIG1lbnVNaW5XaWR0aCA9IGRpc3BsYXlOb2RlLmNsaWVudFdpZHRoO1xuICB9XG5cbiAgdmFyIHRhYkluZGV4O1xuXG4gIGlmICh0eXBlb2YgdGFiSW5kZXhQcm9wICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRhYkluZGV4ID0gdGFiSW5kZXhQcm9wO1xuICB9IGVsc2Uge1xuICAgIHRhYkluZGV4ID0gZGlzYWJsZWQgPyBudWxsIDogMDtcbiAgfVxuXG4gIHZhciBidXR0b25JZCA9IFNlbGVjdERpc3BsYXlQcm9wcy5pZCB8fCAobmFtZSA/IFwibXVpLWNvbXBvbmVudC1zZWxlY3QtXCIuY29uY2F0KG5hbWUpIDogdW5kZWZpbmVkKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgLy8gVE9ETyB2NTogbWVyZ2Ugcm9vdCBhbmQgc2VsZWN0XG4gICAgY2xhc3Nlcy5zZWxlY3QsIGNsYXNzZXMuc2VsZWN0TWVudSwgY2xhc3Nlc1t2YXJpYW50XSwgY2xhc3NOYW1lLCBkaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkKSxcbiAgICByZWY6IHNldERpc3BsYXlOb2RlLFxuICAgIHRhYkluZGV4OiB0YWJJbmRleCxcbiAgICByb2xlOiBcImJ1dHRvblwiLFxuICAgIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/ICd0cnVlJyA6IHVuZGVmaW5lZCxcbiAgICBcImFyaWEtZXhwYW5kZWRcIjogb3BlbiA/ICd0cnVlJyA6IHVuZGVmaW5lZCxcbiAgICBcImFyaWEtaGFzcG9wdXBcIjogXCJsaXN0Ym94XCIsXG4gICAgXCJhcmlhLWxhYmVsXCI6IGFyaWFMYWJlbCxcbiAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBbbGFiZWxJZCwgYnV0dG9uSWRdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJykgfHwgdW5kZWZpbmVkLFxuICAgIG9uS2V5RG93bjogaGFuZGxlS2V5RG93bixcbiAgICBvbk1vdXNlRG93bjogZGlzYWJsZWQgfHwgcmVhZE9ubHkgPyBudWxsIDogaGFuZGxlTW91c2VEb3duLFxuICAgIG9uQmx1cjogaGFuZGxlQmx1cixcbiAgICBvbkZvY3VzOiBvbkZvY3VzXG4gIH0sIFNlbGVjdERpc3BsYXlQcm9wcywge1xuICAgIC8vIFRoZSBpZCBpcyByZXF1aXJlZCBmb3IgcHJvcGVyIGExMXlcbiAgICBpZDogYnV0dG9uSWRcbiAgfSksIGlzRW1wdHkoZGlzcGxheSkgP1xuICAvKiNfX1BVUkVfXyovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kYW5nZXJcbiAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICBfX2h0bWw6ICcmIzgyMDM7J1xuICAgIH1cbiAgfSkgOiBkaXNwbGF5KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBfZXh0ZW5kcyh7XG4gICAgdmFsdWU6IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUuam9pbignLCcpIDogdmFsdWUsXG4gICAgbmFtZTogbmFtZSxcbiAgICByZWY6IGlucHV0UmVmLFxuICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgIHRhYkluZGV4OiAtMSxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMubmF0aXZlSW5wdXQsXG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXNcbiAgfSwgb3RoZXIpKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkNvbXBvbmVudCwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmljb24sIGNsYXNzZXNbXCJpY29uXCIuY29uY2F0KGNhcGl0YWxpemUodmFyaWFudCkpXSwgb3BlbiAmJiBjbGFzc2VzLmljb25PcGVuLCBkaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkKVxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudSwgX2V4dGVuZHMoe1xuICAgIGlkOiBcIm1lbnUtXCIuY29uY2F0KG5hbWUgfHwgJycpLFxuICAgIGFuY2hvckVsOiBkaXNwbGF5Tm9kZSxcbiAgICBvcGVuOiBvcGVuLFxuICAgIG9uQ2xvc2U6IGhhbmRsZUNsb3NlXG4gIH0sIE1lbnVQcm9wcywge1xuICAgIE1lbnVMaXN0UHJvcHM6IF9leHRlbmRzKHtcbiAgICAgICdhcmlhLWxhYmVsbGVkYnknOiBsYWJlbElkLFxuICAgICAgcm9sZTogJ2xpc3Rib3gnLFxuICAgICAgZGlzYWJsZUxpc3RXcmFwOiB0cnVlXG4gICAgfSwgTWVudVByb3BzLk1lbnVMaXN0UHJvcHMpLFxuICAgIFBhcGVyUHJvcHM6IF9leHRlbmRzKHt9LCBNZW51UHJvcHMuUGFwZXJQcm9wcywge1xuICAgICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgICAgbWluV2lkdGg6IG1lbnVNaW5XaWR0aFxuICAgICAgfSwgTWVudVByb3BzLlBhcGVyUHJvcHMgIT0gbnVsbCA/IE1lbnVQcm9wcy5QYXBlclByb3BzLnN0eWxlIDogbnVsbClcbiAgICB9KVxuICB9KSwgaXRlbXMpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gU2VsZWN0SW5wdXQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgJ2FyaWEtbGFiZWwnOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB3aWR0aCBvZiB0aGUgcG9wb3ZlciB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgc2V0IGFjY29yZGluZyB0byB0aGUgaXRlbXMgaW5zaWRlIHRoZVxuICAgKiBtZW51LCBvdGhlcndpc2UgaXQgd2lsbCBiZSBhdCBsZWFzdCB0aGUgd2lkdGggb2YgdGhlIHNlbGVjdCBpbnB1dC5cbiAgICovXG4gIGF1dG9XaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBvcHRpb24gZWxlbWVudHMgdG8gcG9wdWxhdGUgdGhlIHNlbGVjdCB3aXRoLlxuICAgKiBDYW4gYmUgc29tZSBgPE1lbnVJdGVtPmAgZWxlbWVudHMuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgQ1NTIGNsYXNzIG5hbWUgb2YgdGhlIHNlbGVjdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBlbGVtZW50IHZhbHVlLiBVc2Ugd2hlbiB0aGUgY29tcG9uZW50IGlzIG5vdCBjb250cm9sbGVkLlxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBzZWxlY3Qgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgc2VsZWN0ZWQgaXRlbSBpcyBkaXNwbGF5ZWQgZXZlbiBpZiBpdHMgdmFsdWUgaXMgZW1wdHkuXG4gICAqL1xuICBkaXNwbGF5RW1wdHk6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB0aGF0IGRpc3BsYXlzIHRoZSBhcnJvdy5cbiAgICovXG4gIEljb25Db21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBJbXBlcmF0aXZlIGhhbmRsZSBpbXBsZW1lbnRpbmcgYHsgdmFsdWU6IFQsIG5vZGU6IEhUTUxFbGVtZW50LCBmb2N1cygpOiB2b2lkIH1gXG4gICAqIEVxdWl2YWxlbnQgdG8gYHJlZmBcbiAgICovXG4gIGlucHV0UmVmOiByZWZUeXBlLFxuXG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgYW4gZWxlbWVudCB0aGF0IGFjdHMgYXMgYW4gYWRkaXRpb25hbCBsYWJlbC4gVGhlIFNlbGVjdCB3aWxsXG4gICAqIGJlIGxhYmVsbGVkIGJ5IHRoZSBhZGRpdGlvbmFsIGxhYmVsIGFuZCB0aGUgc2VsZWN0ZWQgdmFsdWUuXG4gICAqL1xuICBsYWJlbElkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYE1lbnVgXSgvYXBpL21lbnUvKSBlbGVtZW50LlxuICAgKi9cbiAgTWVudVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGB2YWx1ZWAgbXVzdCBiZSBhbiBhcnJheSBhbmQgdGhlIG1lbnUgd2lsbCBzdXBwb3J0IG11bHRpcGxlIHNlbGVjdGlvbnMuXG4gICAqL1xuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE5hbWUgYXR0cmlidXRlIG9mIHRoZSBgc2VsZWN0YCBvciBoaWRkZW4gYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiBhIG1lbnUgaXRlbSBpcyBzZWxlY3RlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgdmFsdWUgYnkgYWNjZXNzaW5nIGBldmVudC50YXJnZXQudmFsdWVgIChhbnkpLlxuICAgKiBAcGFyYW0ge29iamVjdH0gW2NoaWxkXSBUaGUgcmVhY3QgZWxlbWVudCB0aGF0IHdhcyBzZWxlY3RlZC5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IHJlcXVlc3RzIHRvIGJlIGNsb3NlZC5cbiAgICogVXNlIGluIGNvbnRyb2xsZWQgbW9kZSAoc2VlIG9wZW4pLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqL1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCByZXF1ZXN0cyB0byBiZSBvcGVuZWQuXG4gICAqIFVzZSBpbiBjb250cm9sbGVkIG1vZGUgKHNlZSBvcGVuKS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKi9cbiAgb25PcGVuOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ29udHJvbCBgc2VsZWN0YCBvcGVuIHN0YXRlLlxuICAgKi9cbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBzZWxlY3RlZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlIFRoZSBgdmFsdWVgIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIEByZXR1cm5zIHtSZWFjdE5vZGV9XG4gICAqL1xuICByZW5kZXJWYWx1ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFByb3BzIGFwcGxpZWQgdG8gdGhlIGNsaWNrYWJsZSBkaXYgZWxlbWVudC5cbiAgICovXG4gIFNlbGVjdERpc3BsYXlQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdGFiSW5kZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogVGhlIGlucHV0IHZhbHVlLlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3N0YW5kYXJkJywgJ291dGxpbmVkJywgJ2ZpbGxlZCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdElucHV0OyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1NlbGVjdCc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgyNCksXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ2ZpbGwnLCB7XG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVyXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cInByaW1hcnlcImAuICovXG4gICAgY29sb3JQcmltYXJ5OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJzZWNvbmRhcnlcImAuICovXG4gICAgY29sb3JTZWNvbmRhcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwiYWN0aW9uXCJgLiAqL1xuICAgIGNvbG9yQWN0aW9uOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uYWN0aXZlXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwiZXJyb3JcImAuICovXG4gICAgY29sb3JFcnJvcjoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpblxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cImRpc2FibGVkXCJgLiAqL1xuICAgIGNvbG9yRGlzYWJsZWQ6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5kaXNhYmxlZFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmb250U2l6ZT1cImluaGVyaXRcImAuICovXG4gICAgZm9udFNpemVJbmhlcml0OiB7XG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGZvbnRTaXplPVwic21hbGxcImAuICovXG4gICAgZm9udFNpemVTbWFsbDoge1xuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgyMClcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZm9udFNpemU9XCJsYXJnZVwiYC4gKi9cbiAgICBmb250U2l6ZUxhcmdlOiB7XG4gICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDM1KVxuICAgIH1cbiAgfTtcbn07XG52YXIgU3ZnSWNvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFN2Z0ljb24ocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBjb2xvciA9IF9wcm9wcyRjb2xvciA9PT0gdm9pZCAwID8gJ2luaGVyaXQnIDogX3Byb3BzJGNvbG9yLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdzdmcnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRmb250U2l6ZSA9IHByb3BzLmZvbnRTaXplLFxuICAgICAgZm9udFNpemUgPSBfcHJvcHMkZm9udFNpemUgPT09IHZvaWQgMCA/ICdkZWZhdWx0JyA6IF9wcm9wcyRmb250U2l6ZSxcbiAgICAgIGh0bWxDb2xvciA9IHByb3BzLmh0bWxDb2xvcixcbiAgICAgIHRpdGxlQWNjZXNzID0gcHJvcHMudGl0bGVBY2Nlc3MsXG4gICAgICBfcHJvcHMkdmlld0JveCA9IHByb3BzLnZpZXdCb3gsXG4gICAgICB2aWV3Qm94ID0gX3Byb3BzJHZpZXdCb3ggPT09IHZvaWQgMCA/ICcwIDAgMjQgMjQnIDogX3Byb3BzJHZpZXdCb3gsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJjb21wb25lbnRcIiwgXCJmb250U2l6ZVwiLCBcImh0bWxDb2xvclwiLCBcInRpdGxlQWNjZXNzXCIsIFwidmlld0JveFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgY29sb3IgIT09ICdpbmhlcml0JyAmJiBjbGFzc2VzW1wiY29sb3JcIi5jb25jYXQoY2FwaXRhbGl6ZShjb2xvcikpXSwgZm9udFNpemUgIT09ICdkZWZhdWx0JyAmJiBjbGFzc2VzW1wiZm9udFNpemVcIi5jb25jYXQoY2FwaXRhbGl6ZShmb250U2l6ZSkpXSksXG4gICAgZm9jdXNhYmxlOiBcImZhbHNlXCIsXG4gICAgdmlld0JveDogdmlld0JveCxcbiAgICBjb2xvcjogaHRtbENvbG9yLFxuICAgIFwiYXJpYS1oaWRkZW5cIjogdGl0bGVBY2Nlc3MgPyB1bmRlZmluZWQgOiB0cnVlLFxuICAgIHJvbGU6IHRpdGxlQWNjZXNzID8gJ2ltZycgOiB1bmRlZmluZWQsXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBjaGlsZHJlbiwgdGl0bGVBY2Nlc3MgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIG51bGwsIHRpdGxlQWNjZXNzKSA6IG51bGwpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTdmdJY29uLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIE5vZGUgcGFzc2VkIGludG8gdGhlIFNWRyBlbGVtZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKiBZb3UgY2FuIHVzZSB0aGUgYGh0bWxDb2xvcmAgcHJvcCB0byBhcHBseSBhIGNvbG9yIGF0dHJpYnV0ZSB0byB0aGUgU1ZHIGVsZW1lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsnYWN0aW9uJywgJ2Rpc2FibGVkJywgJ2Vycm9yJywgJ2luaGVyaXQnLCAncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBUaGUgZm9udFNpemUgYXBwbGllZCB0byB0aGUgaWNvbi4gRGVmYXVsdHMgdG8gMjRweCwgYnV0IGNhbiBiZSBjb25maWd1cmUgdG8gaW5oZXJpdCBmb250IHNpemUuXG4gICAqL1xuICBmb250U2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdpbmhlcml0JywgJ2xhcmdlJywgJ3NtYWxsJ10pLFxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGEgY29sb3IgYXR0cmlidXRlIHRvIHRoZSBTVkcgZWxlbWVudC5cbiAgICovXG4gIGh0bWxDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIHNoYXBlLXJlbmRlcmluZyBhdHRyaWJ1dGUuIFRoZSBiZWhhdmlvciBvZiB0aGUgZGlmZmVyZW50IG9wdGlvbnMgaXMgZGVzY3JpYmVkIG9uIHRoZVxuICAgKiBbTUROIFdlYiBEb2NzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL3NoYXBlLXJlbmRlcmluZykuXG4gICAqIElmIHlvdSBhcmUgaGF2aW5nIGlzc3VlcyB3aXRoIGJsdXJyeSBpY29ucyB5b3Ugc2hvdWxkIGludmVzdGlnYXRlIHRoaXMgcHJvcGVydHkuXG4gICAqL1xuICBzaGFwZVJlbmRlcmluZzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogUHJvdmlkZXMgYSBodW1hbi1yZWFkYWJsZSB0aXRsZSBmb3IgdGhlIGVsZW1lbnQgdGhhdCBjb250YWlucyBpdC5cbiAgICogaHR0cHM6Ly93d3cudzMub3JnL1RSL1NWRy1hY2Nlc3MvI0VxdWl2YWxlbnRcbiAgICovXG4gIHRpdGxlQWNjZXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBBbGxvd3MgeW91IHRvIHJlZGVmaW5lIHdoYXQgdGhlIGNvb3JkaW5hdGVzIHdpdGhvdXQgdW5pdHMgbWVhbiBpbnNpZGUgYW4gU1ZHIGVsZW1lbnQuXG4gICAqIEZvciBleGFtcGxlLCBpZiB0aGUgU1ZHIGVsZW1lbnQgaXMgNTAwICh3aWR0aCkgYnkgMjAwIChoZWlnaHQpLFxuICAgKiBhbmQgeW91IHBhc3Mgdmlld0JveD1cIjAgMCA1MCAyMFwiLFxuICAgKiB0aGlzIG1lYW5zIHRoYXQgdGhlIGNvb3JkaW5hdGVzIGluc2lkZSB0aGUgU1ZHIHdpbGwgZ28gZnJvbSB0aGUgdG9wIGxlZnQgY29ybmVyICgwLDApXG4gICAqIHRvIGJvdHRvbSByaWdodCAoNTAsMjApIGFuZCBlYWNoIHVuaXQgd2lsbCBiZSB3b3J0aCAxMHB4LlxuICAgKi9cbiAgdmlld0JveDogUHJvcFR5cGVzLnN0cmluZ1xufSA6IHZvaWQgMDtcblN2Z0ljb24ubXVpTmFtZSA9ICdTdmdJY29uJztcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlTdmdJY29uJ1xufSkoU3ZnSWNvbik7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU3ZnSWNvbic7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgcmVmVHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vSW5wdXQnO1xuaW1wb3J0IEZpbGxlZElucHV0IGZyb20gJy4uL0ZpbGxlZElucHV0JztcbmltcG9ydCBPdXRsaW5lZElucHV0IGZyb20gJy4uL091dGxpbmVkSW5wdXQnO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnLi4vSW5wdXRMYWJlbCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnLi4vRm9ybUNvbnRyb2wnO1xuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gJy4uL0Zvcm1IZWxwZXJUZXh0JztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vU2VsZWN0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbnZhciB2YXJpYW50Q29tcG9uZW50ID0ge1xuICBzdGFuZGFyZDogSW5wdXQsXG4gIGZpbGxlZDogRmlsbGVkSW5wdXQsXG4gIG91dGxpbmVkOiBPdXRsaW5lZElucHV0XG59O1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHt9XG59O1xuLyoqXG4gKiBUaGUgYFRleHRGaWVsZGAgaXMgYSBjb252ZW5pZW5jZSB3cmFwcGVyIGZvciB0aGUgbW9zdCBjb21tb24gY2FzZXMgKDgwJSkuXG4gKiBJdCBjYW5ub3QgYmUgYWxsIHRoaW5ncyB0byBhbGwgcGVvcGxlLCBvdGhlcndpc2UgdGhlIEFQSSB3b3VsZCBncm93IG91dCBvZiBjb250cm9sLlxuICpcbiAqICMjIEFkdmFuY2VkIENvbmZpZ3VyYXRpb25cbiAqXG4gKiBJdCdzIGltcG9ydGFudCB0byB1bmRlcnN0YW5kIHRoYXQgdGhlIHRleHQgZmllbGQgaXMgYSBzaW1wbGUgYWJzdHJhY3Rpb25cbiAqIG9uIHRvcCBvZiB0aGUgZm9sbG93aW5nIGNvbXBvbmVudHM6XG4gKlxuICogLSBbRm9ybUNvbnRyb2xdKC9hcGkvZm9ybS1jb250cm9sLylcbiAqIC0gW0lucHV0TGFiZWxdKC9hcGkvaW5wdXQtbGFiZWwvKVxuICogLSBbRmlsbGVkSW5wdXRdKC9hcGkvZmlsbGVkLWlucHV0LylcbiAqIC0gW091dGxpbmVkSW5wdXRdKC9hcGkvb3V0bGluZWQtaW5wdXQvKVxuICogLSBbSW5wdXRdKC9hcGkvaW5wdXQvKVxuICogLSBbRm9ybUhlbHBlclRleHRdKC9hcGkvZm9ybS1oZWxwZXItdGV4dC8pXG4gKlxuICogSWYgeW91IHdpc2ggdG8gYWx0ZXIgdGhlIHByb3BzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCwgeW91IGNhbiBkbyBzbyBhcyBmb2xsb3dzOlxuICpcbiAqIGBgYGpzeFxuICogY29uc3QgaW5wdXRQcm9wcyA9IHtcbiAqICAgc3RlcDogMzAwLFxuICogfTtcbiAqXG4gKiByZXR1cm4gPFRleHRGaWVsZCBpZD1cInRpbWVcIiB0eXBlPVwidGltZVwiIGlucHV0UHJvcHM9e2lucHV0UHJvcHN9IC8+O1xuICogYGBgXG4gKlxuICogRm9yIGFkdmFuY2VkIGNhc2VzLCBwbGVhc2UgbG9vayBhdCB0aGUgc291cmNlIG9mIFRleHRGaWVsZCBieSBjbGlja2luZyBvbiB0aGVcbiAqIFwiRWRpdCB0aGlzIHBhZ2VcIiBidXR0b24gYWJvdmUuIENvbnNpZGVyIGVpdGhlcjpcbiAqXG4gKiAtIHVzaW5nIHRoZSB1cHBlciBjYXNlIHByb3BzIGZvciBwYXNzaW5nIHZhbHVlcyBkaXJlY3RseSB0byB0aGUgY29tcG9uZW50c1xuICogLSB1c2luZyB0aGUgdW5kZXJseWluZyBjb21wb25lbnRzIGRpcmVjdGx5IGFzIHNob3duIGluIHRoZSBkZW1vc1xuICovXG5cbnZhciBUZXh0RmllbGQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUZXh0RmllbGQocHJvcHMsIHJlZikge1xuICB2YXIgYXV0b0NvbXBsZXRlID0gcHJvcHMuYXV0b0NvbXBsZXRlLFxuICAgICAgX3Byb3BzJGF1dG9Gb2N1cyA9IHByb3BzLmF1dG9Gb2N1cyxcbiAgICAgIGF1dG9Gb2N1cyA9IF9wcm9wcyRhdXRvRm9jdXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGF1dG9Gb2N1cyxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgY29sb3IgPSBfcHJvcHMkY29sb3IgPT09IHZvaWQgMCA/ICdwcmltYXJ5JyA6IF9wcm9wcyRjb2xvcixcbiAgICAgIGRlZmF1bHRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzYWJsZWQgPSBfcHJvcHMkZGlzYWJsZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVkLFxuICAgICAgX3Byb3BzJGVycm9yID0gcHJvcHMuZXJyb3IsXG4gICAgICBlcnJvciA9IF9wcm9wcyRlcnJvciA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZXJyb3IsXG4gICAgICBGb3JtSGVscGVyVGV4dFByb3BzID0gcHJvcHMuRm9ybUhlbHBlclRleHRQcm9wcyxcbiAgICAgIF9wcm9wcyRmdWxsV2lkdGggPSBwcm9wcy5mdWxsV2lkdGgsXG4gICAgICBmdWxsV2lkdGggPSBfcHJvcHMkZnVsbFdpZHRoID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRmdWxsV2lkdGgsXG4gICAgICBoZWxwZXJUZXh0ID0gcHJvcHMuaGVscGVyVGV4dCxcbiAgICAgIGhpZGRlbkxhYmVsID0gcHJvcHMuaGlkZGVuTGFiZWwsXG4gICAgICBpZCA9IHByb3BzLmlkLFxuICAgICAgSW5wdXRMYWJlbFByb3BzID0gcHJvcHMuSW5wdXRMYWJlbFByb3BzLFxuICAgICAgaW5wdXRQcm9wcyA9IHByb3BzLmlucHV0UHJvcHMsXG4gICAgICBJbnB1dFByb3BzID0gcHJvcHMuSW5wdXRQcm9wcyxcbiAgICAgIGlucHV0UmVmID0gcHJvcHMuaW5wdXRSZWYsXG4gICAgICBsYWJlbCA9IHByb3BzLmxhYmVsLFxuICAgICAgX3Byb3BzJG11bHRpbGluZSA9IHByb3BzLm11bHRpbGluZSxcbiAgICAgIG11bHRpbGluZSA9IF9wcm9wcyRtdWx0aWxpbmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJG11bHRpbGluZSxcbiAgICAgIG5hbWUgPSBwcm9wcy5uYW1lLFxuICAgICAgb25CbHVyID0gcHJvcHMub25CbHVyLFxuICAgICAgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIG9uRm9jdXMgPSBwcm9wcy5vbkZvY3VzLFxuICAgICAgcGxhY2Vob2xkZXIgPSBwcm9wcy5wbGFjZWhvbGRlcixcbiAgICAgIF9wcm9wcyRyZXF1aXJlZCA9IHByb3BzLnJlcXVpcmVkLFxuICAgICAgcmVxdWlyZWQgPSBfcHJvcHMkcmVxdWlyZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHJlcXVpcmVkLFxuICAgICAgcm93cyA9IHByb3BzLnJvd3MsXG4gICAgICByb3dzTWF4ID0gcHJvcHMucm93c01heCxcbiAgICAgIF9wcm9wcyRzZWxlY3QgPSBwcm9wcy5zZWxlY3QsXG4gICAgICBzZWxlY3QgPSBfcHJvcHMkc2VsZWN0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRzZWxlY3QsXG4gICAgICBTZWxlY3RQcm9wcyA9IHByb3BzLlNlbGVjdFByb3BzLFxuICAgICAgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnc3RhbmRhcmQnIDogX3Byb3BzJHZhcmlhbnQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYXV0b0NvbXBsZXRlXCIsIFwiYXV0b0ZvY3VzXCIsIFwiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJkZWZhdWx0VmFsdWVcIiwgXCJkaXNhYmxlZFwiLCBcImVycm9yXCIsIFwiRm9ybUhlbHBlclRleHRQcm9wc1wiLCBcImZ1bGxXaWR0aFwiLCBcImhlbHBlclRleHRcIiwgXCJoaWRkZW5MYWJlbFwiLCBcImlkXCIsIFwiSW5wdXRMYWJlbFByb3BzXCIsIFwiaW5wdXRQcm9wc1wiLCBcIklucHV0UHJvcHNcIiwgXCJpbnB1dFJlZlwiLCBcImxhYmVsXCIsIFwibXVsdGlsaW5lXCIsIFwibmFtZVwiLCBcIm9uQmx1clwiLCBcIm9uQ2hhbmdlXCIsIFwib25Gb2N1c1wiLCBcInBsYWNlaG9sZGVyXCIsIFwicmVxdWlyZWRcIiwgXCJyb3dzXCIsIFwicm93c01heFwiLCBcInNlbGVjdFwiLCBcIlNlbGVjdFByb3BzXCIsIFwidHlwZVwiLCBcInZhbHVlXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoc2VsZWN0ICYmICFjaGlsZHJlbikge1xuICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IGBjaGlsZHJlbmAgbXVzdCBiZSBwYXNzZWQgd2hlbiB1c2luZyB0aGUgYFRleHRGaWVsZGAgY29tcG9uZW50IHdpdGggYHNlbGVjdGAuJyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIElucHV0TW9yZSA9IHt9O1xuXG4gIGlmICh2YXJpYW50ID09PSAnb3V0bGluZWQnKSB7XG4gICAgaWYgKElucHV0TGFiZWxQcm9wcyAmJiB0eXBlb2YgSW5wdXRMYWJlbFByb3BzLnNocmluayAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIElucHV0TW9yZS5ub3RjaGVkID0gSW5wdXRMYWJlbFByb3BzLnNocmluaztcbiAgICB9XG5cbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIHZhciBfSW5wdXRMYWJlbFByb3BzJHJlcXU7XG5cbiAgICAgIHZhciBkaXNwbGF5UmVxdWlyZWQgPSAoX0lucHV0TGFiZWxQcm9wcyRyZXF1ID0gSW5wdXRMYWJlbFByb3BzID09PSBudWxsIHx8IElucHV0TGFiZWxQcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogSW5wdXRMYWJlbFByb3BzLnJlcXVpcmVkKSAhPT0gbnVsbCAmJiBfSW5wdXRMYWJlbFByb3BzJHJlcXUgIT09IHZvaWQgMCA/IF9JbnB1dExhYmVsUHJvcHMkcmVxdSA6IHJlcXVpcmVkO1xuICAgICAgSW5wdXRNb3JlLmxhYmVsID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGxhYmVsLCBkaXNwbGF5UmVxdWlyZWQgJiYgXCJcXHhBMCpcIik7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNlbGVjdCkge1xuICAgIC8vIHVuc2V0IGRlZmF1bHRzIGZyb20gdGV4dGJveCBpbnB1dHNcbiAgICBpZiAoIVNlbGVjdFByb3BzIHx8ICFTZWxlY3RQcm9wcy5uYXRpdmUpIHtcbiAgICAgIElucHV0TW9yZS5pZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBJbnB1dE1vcmVbJ2FyaWEtZGVzY3JpYmVkYnknXSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHZhciBoZWxwZXJUZXh0SWQgPSBoZWxwZXJUZXh0ICYmIGlkID8gXCJcIi5jb25jYXQoaWQsIFwiLWhlbHBlci10ZXh0XCIpIDogdW5kZWZpbmVkO1xuICB2YXIgaW5wdXRMYWJlbElkID0gbGFiZWwgJiYgaWQgPyBcIlwiLmNvbmNhdChpZCwgXCItbGFiZWxcIikgOiB1bmRlZmluZWQ7XG4gIHZhciBJbnB1dENvbXBvbmVudCA9IHZhcmlhbnRDb21wb25lbnRbdmFyaWFudF07XG4gIHZhciBJbnB1dEVsZW1lbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIFwiYXJpYS1kZXNjcmliZWRieVwiOiBoZWxwZXJUZXh0SWQsXG4gICAgYXV0b0NvbXBsZXRlOiBhdXRvQ29tcGxldGUsXG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgZnVsbFdpZHRoOiBmdWxsV2lkdGgsXG4gICAgbXVsdGlsaW5lOiBtdWx0aWxpbmUsXG4gICAgbmFtZTogbmFtZSxcbiAgICByb3dzOiByb3dzLFxuICAgIHJvd3NNYXg6IHJvd3NNYXgsXG4gICAgdHlwZTogdHlwZSxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgaWQ6IGlkLFxuICAgIGlucHV0UmVmOiBpbnB1dFJlZixcbiAgICBvbkJsdXI6IG9uQmx1cixcbiAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgb25Gb2N1czogb25Gb2N1cyxcbiAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgaW5wdXRQcm9wczogaW5wdXRQcm9wc1xuICB9LCBJbnB1dE1vcmUsIElucHV0UHJvcHMpKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Db250cm9sLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKSxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgZXJyb3I6IGVycm9yLFxuICAgIGZ1bGxXaWR0aDogZnVsbFdpZHRoLFxuICAgIGhpZGRlbkxhYmVsOiBoaWRkZW5MYWJlbCxcbiAgICByZWY6IHJlZixcbiAgICByZXF1aXJlZDogcmVxdWlyZWQsXG4gICAgY29sb3I6IGNvbG9yLFxuICAgIHZhcmlhbnQ6IHZhcmlhbnRcbiAgfSwgb3RoZXIpLCBsYWJlbCAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dExhYmVsLCBfZXh0ZW5kcyh7XG4gICAgaHRtbEZvcjogaWQsXG4gICAgaWQ6IGlucHV0TGFiZWxJZFxuICB9LCBJbnB1dExhYmVsUHJvcHMpLCBsYWJlbCksIHNlbGVjdCA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdCwgX2V4dGVuZHMoe1xuICAgIFwiYXJpYS1kZXNjcmliZWRieVwiOiBoZWxwZXJUZXh0SWQsXG4gICAgaWQ6IGlkLFxuICAgIGxhYmVsSWQ6IGlucHV0TGFiZWxJZCxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgaW5wdXQ6IElucHV0RWxlbWVudFxuICB9LCBTZWxlY3RQcm9wcyksIGNoaWxkcmVuKSA6IElucHV0RWxlbWVudCwgaGVscGVyVGV4dCAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtSGVscGVyVGV4dCwgX2V4dGVuZHMoe1xuICAgIGlkOiBoZWxwZXJUZXh0SWRcbiAgfSwgRm9ybUhlbHBlclRleHRQcm9wcyksIGhlbHBlclRleHQpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVGV4dEZpZWxkLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoaXMgcHJvcCBoZWxwcyB1c2VycyB0byBmaWxsIGZvcm1zIGZhc3RlciwgZXNwZWNpYWxseSBvbiBtb2JpbGUgZGV2aWNlcy5cbiAgICogVGhlIG5hbWUgY2FuIGJlIGNvbmZ1c2luZywgYXMgaXQncyBtb3JlIGxpa2UgYW4gYXV0b2ZpbGwuXG4gICAqIFlvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCBpdCBbZm9sbG93aW5nIHRoZSBzcGVjaWZpY2F0aW9uXShodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3JtLWNvbnRyb2wtaW5mcmFzdHJ1Y3R1cmUuaHRtbCNhdXRvZmlsbCkuXG4gICAqL1xuICBhdXRvQ29tcGxldGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGBpbnB1dGAgZWxlbWVudCB3aWxsIGJlIGZvY3VzZWQgZHVyaW5nIHRoZSBmaXJzdCBtb3VudC5cbiAgICovXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgYGlucHV0YCBlbGVtZW50IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsIHdpbGwgYmUgZGlzcGxheWVkIGluIGFuIGVycm9yIHN0YXRlLlxuICAgKi9cbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYEZvcm1IZWxwZXJUZXh0YF0oL2FwaS9mb3JtLWhlbHBlci10ZXh0LykgZWxlbWVudC5cbiAgICovXG4gIEZvcm1IZWxwZXJUZXh0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgdGFrZSB1cCB0aGUgZnVsbCB3aWR0aCBvZiBpdHMgY29udGFpbmVyLlxuICAgKi9cbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGhlbHBlciB0ZXh0IGNvbnRlbnQuXG4gICAqL1xuICBoZWxwZXJUZXh0OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgaGlkZGVuTGFiZWw6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICogVXNlIHRoaXMgcHJvcCB0byBtYWtlIGBsYWJlbGAgYW5kIGBoZWxwZXJUZXh0YCBhY2Nlc3NpYmxlIGZvciBzY3JlZW4gcmVhZGVycy5cbiAgICovXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYElucHV0TGFiZWxgXSgvYXBpL2lucHV0LWxhYmVsLykgZWxlbWVudC5cbiAgICovXG4gIElucHV0TGFiZWxQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogW0F0dHJpYnV0ZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNBdHRyaWJ1dGVzKSBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBJbnB1dCBlbGVtZW50LlxuICAgKiBJdCB3aWxsIGJlIGEgW2BGaWxsZWRJbnB1dGBdKC9hcGkvZmlsbGVkLWlucHV0LyksXG4gICAqIFtgT3V0bGluZWRJbnB1dGBdKC9hcGkvb3V0bGluZWQtaW5wdXQvKSBvciBbYElucHV0YF0oL2FwaS9pbnB1dC8pXG4gICAqIGNvbXBvbmVudCBkZXBlbmRpbmcgb24gdGhlIGB2YXJpYW50YCBwcm9wIHZhbHVlLlxuICAgKi9cbiAgSW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUGFzcyBhIHJlZiB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRSZWY6IHJlZlR5cGUsXG5cbiAgLyoqXG4gICAqIFRoZSBsYWJlbCBjb250ZW50LlxuICAgKi9cbiAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBJZiBgZGVuc2VgIG9yIGBub3JtYWxgLCB3aWxsIGFkanVzdCB2ZXJ0aWNhbCBzcGFjaW5nIG9mIHRoaXMgYW5kIGNvbnRhaW5lZCBjb21wb25lbnRzLlxuICAgKi9cbiAgbWFyZ2luOiBQcm9wVHlwZXMub25lT2YoWydkZW5zZScsICdub25lJywgJ25vcm1hbCddKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBhIHRleHRhcmVhIGVsZW1lbnQgd2lsbCBiZSByZW5kZXJlZCBpbnN0ZWFkIG9mIGFuIGlucHV0LlxuICAgKi9cbiAgbXVsdGlsaW5lOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTmFtZSBhdHRyaWJ1dGUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHZhbHVlIGlzIGNoYW5nZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogWW91IGNhbiBwdWxsIG91dCB0aGUgbmV3IHZhbHVlIGJ5IGFjY2Vzc2luZyBgZXZlbnQudGFyZ2V0LnZhbHVlYCAoc3RyaW5nKS5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBzaG9ydCBoaW50IGRpc3BsYXllZCBpbiB0aGUgaW5wdXQgYmVmb3JlIHRoZSB1c2VyIGVudGVycyBhIHZhbHVlLlxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsIGlzIGRpc3BsYXllZCBhcyByZXF1aXJlZCBhbmQgdGhlIGBpbnB1dGAgZWxlbWVudGAgd2lsbCBiZSByZXF1aXJlZC5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzTWF4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIFJlbmRlciBhIFtgU2VsZWN0YF0oL2FwaS9zZWxlY3QvKSBlbGVtZW50IHdoaWxlIHBhc3NpbmcgdGhlIElucHV0IGVsZW1lbnQgdG8gYFNlbGVjdGAgYXMgYGlucHV0YCBwYXJhbWV0ZXIuXG4gICAqIElmIHRoaXMgb3B0aW9uIGlzIHNldCB5b3UgbXVzdCBwYXNzIHRoZSBvcHRpb25zIG9mIHRoZSBzZWxlY3QgYXMgY2hpbGRyZW4uXG4gICAqL1xuICBzZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYFNlbGVjdGBdKC9hcGkvc2VsZWN0LykgZWxlbWVudC5cbiAgICovXG4gIFNlbGVjdFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgdGV4dCBmaWVsZC5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ21lZGl1bScsICdzbWFsbCddKSxcblxuICAvKipcbiAgICogVHlwZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LiBJdCBzaG91bGQgYmUgW2EgdmFsaWQgSFRNTDUgaW5wdXQgdHlwZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I0Zvcm1fJTNDaW5wdXQlM0VfdHlwZXMpLlxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQsIHJlcXVpcmVkIGZvciBhIGNvbnRyb2xsZWQgY29tcG9uZW50LlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2ZpbGxlZCcsICdvdXRsaW5lZCcsICdzdGFuZGFyZCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlUZXh0RmllbGQnXG59KShUZXh0RmllbGQpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1RleHRGaWVsZCc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi91dGlscy9kZWJvdW5jZSc7XG5pbXBvcnQgdXNlRm9ya1JlZiBmcm9tICcuLi91dGlscy91c2VGb3JrUmVmJztcblxuZnVuY3Rpb24gZ2V0U3R5bGVWYWx1ZShjb21wdXRlZFN0eWxlLCBwcm9wZXJ0eSkge1xuICByZXR1cm4gcGFyc2VJbnQoY29tcHV0ZWRTdHlsZVtwcm9wZXJ0eV0sIDEwKSB8fCAwO1xufVxuXG52YXIgdXNlRW5oYW5jZWRFZmZlY3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFJlYWN0LnVzZUxheW91dEVmZmVjdCA6IFJlYWN0LnVzZUVmZmVjdDtcbnZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBzaGFkb3cgdGV4dGFyZWEgZWxlbWVudC4gKi9cbiAgc2hhZG93OiB7XG4gICAgLy8gVmlzaWJpbGl0eSBuZWVkZWQgdG8gaGlkZSB0aGUgZXh0cmEgdGV4dCBhcmVhIG9uIGlQYWRzXG4gICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgLy8gUmVtb3ZlIGZyb20gdGhlIGNvbnRlbnQgZmxvd1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIC8vIElnbm9yZSB0aGUgc2Nyb2xsYmFyIHdpZHRoXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGhlaWdodDogMCxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICAvLyBDcmVhdGUgYSBuZXcgbGF5ZXIsIGluY3JlYXNlIHRoZSBpc29sYXRpb24gb2YgdGhlIGNvbXB1dGVkIHZhbHVlc1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVooMCknXG4gIH1cbn07XG52YXIgVGV4dGFyZWFBdXRvc2l6ZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRleHRhcmVhQXV0b3NpemUocHJvcHMsIHJlZikge1xuICB2YXIgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIHJvd3MgPSBwcm9wcy5yb3dzLFxuICAgICAgcm93c01heCA9IHByb3BzLnJvd3NNYXgsXG4gICAgICBfcHJvcHMkcm93c01pbiA9IHByb3BzLnJvd3NNaW4sXG4gICAgICByb3dzTWluUHJvcCA9IF9wcm9wcyRyb3dzTWluID09PSB2b2lkIDAgPyAxIDogX3Byb3BzJHJvd3NNaW4sXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJvbkNoYW5nZVwiLCBcInJvd3NcIiwgXCJyb3dzTWF4XCIsIFwicm93c01pblwiLCBcInN0eWxlXCIsIFwidmFsdWVcIl0pO1xuXG4gIHZhciByb3dzTWluID0gcm93cyB8fCByb3dzTWluUHJvcDtcblxuICB2YXIgX1JlYWN0JHVzZVJlZiA9IFJlYWN0LnVzZVJlZih2YWx1ZSAhPSBudWxsKSxcbiAgICAgIGlzQ29udHJvbGxlZCA9IF9SZWFjdCR1c2VSZWYuY3VycmVudDtcblxuICB2YXIgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciBoYW5kbGVSZWYgPSB1c2VGb3JrUmVmKHJlZiwgaW5wdXRSZWYpO1xuICB2YXIgc2hhZG93UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgcmVuZGVycyA9IFJlYWN0LnVzZVJlZigwKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoe30pLFxuICAgICAgc3RhdGUgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRTdGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgc3luY0hlaWdodCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW5wdXQgPSBpbnB1dFJlZi5jdXJyZW50O1xuICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoaW5wdXQpO1xuICAgIHZhciBpbnB1dFNoYWxsb3cgPSBzaGFkb3dSZWYuY3VycmVudDtcbiAgICBpbnB1dFNoYWxsb3cuc3R5bGUud2lkdGggPSBjb21wdXRlZFN0eWxlLndpZHRoO1xuICAgIGlucHV0U2hhbGxvdy52YWx1ZSA9IGlucHV0LnZhbHVlIHx8IHByb3BzLnBsYWNlaG9sZGVyIHx8ICd4JztcblxuICAgIGlmIChpbnB1dFNoYWxsb3cudmFsdWUuc2xpY2UoLTEpID09PSAnXFxuJykge1xuICAgICAgLy8gQ2VydGFpbiBmb250cyB3aGljaCBvdmVyZmxvdyB0aGUgbGluZSBoZWlnaHQgd2lsbCBjYXVzZSB0aGUgdGV4dGFyZWFcbiAgICAgIC8vIHRvIHJlcG9ydCBhIGRpZmZlcmVudCBzY3JvbGxIZWlnaHQgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGxhc3QgbGluZVxuICAgICAgLy8gaXMgZW1wdHkuIE1ha2UgaXQgbm9uLWVtcHR5IHRvIGF2b2lkIHRoaXMgaXNzdWUuXG4gICAgICBpbnB1dFNoYWxsb3cudmFsdWUgKz0gJyAnO1xuICAgIH1cblxuICAgIHZhciBib3hTaXppbmcgPSBjb21wdXRlZFN0eWxlWydib3gtc2l6aW5nJ107XG4gICAgdmFyIHBhZGRpbmcgPSBnZXRTdHlsZVZhbHVlKGNvbXB1dGVkU3R5bGUsICdwYWRkaW5nLWJvdHRvbScpICsgZ2V0U3R5bGVWYWx1ZShjb21wdXRlZFN0eWxlLCAncGFkZGluZy10b3AnKTtcbiAgICB2YXIgYm9yZGVyID0gZ2V0U3R5bGVWYWx1ZShjb21wdXRlZFN0eWxlLCAnYm9yZGVyLWJvdHRvbS13aWR0aCcpICsgZ2V0U3R5bGVWYWx1ZShjb21wdXRlZFN0eWxlLCAnYm9yZGVyLXRvcC13aWR0aCcpOyAvLyBUaGUgaGVpZ2h0IG9mIHRoZSBpbm5lciBjb250ZW50XG5cbiAgICB2YXIgaW5uZXJIZWlnaHQgPSBpbnB1dFNoYWxsb3cuc2Nyb2xsSGVpZ2h0IC0gcGFkZGluZzsgLy8gTWVhc3VyZSBoZWlnaHQgb2YgYSB0ZXh0YXJlYSB3aXRoIGEgc2luZ2xlIHJvd1xuXG4gICAgaW5wdXRTaGFsbG93LnZhbHVlID0gJ3gnO1xuICAgIHZhciBzaW5nbGVSb3dIZWlnaHQgPSBpbnB1dFNoYWxsb3cuc2Nyb2xsSGVpZ2h0IC0gcGFkZGluZzsgLy8gVGhlIGhlaWdodCBvZiB0aGUgb3V0ZXIgY29udGVudFxuXG4gICAgdmFyIG91dGVySGVpZ2h0ID0gaW5uZXJIZWlnaHQ7XG5cbiAgICBpZiAocm93c01pbikge1xuICAgICAgb3V0ZXJIZWlnaHQgPSBNYXRoLm1heChOdW1iZXIocm93c01pbikgKiBzaW5nbGVSb3dIZWlnaHQsIG91dGVySGVpZ2h0KTtcbiAgICB9XG5cbiAgICBpZiAocm93c01heCkge1xuICAgICAgb3V0ZXJIZWlnaHQgPSBNYXRoLm1pbihOdW1iZXIocm93c01heCkgKiBzaW5nbGVSb3dIZWlnaHQsIG91dGVySGVpZ2h0KTtcbiAgICB9XG5cbiAgICBvdXRlckhlaWdodCA9IE1hdGgubWF4KG91dGVySGVpZ2h0LCBzaW5nbGVSb3dIZWlnaHQpOyAvLyBUYWtlIHRoZSBib3ggc2l6aW5nIGludG8gYWNjb3VudCBmb3IgYXBwbHlpbmcgdGhpcyB2YWx1ZSBhcyBhIHN0eWxlLlxuXG4gICAgdmFyIG91dGVySGVpZ2h0U3R5bGUgPSBvdXRlckhlaWdodCArIChib3hTaXppbmcgPT09ICdib3JkZXItYm94JyA/IHBhZGRpbmcgKyBib3JkZXIgOiAwKTtcbiAgICB2YXIgb3ZlcmZsb3cgPSBNYXRoLmFicyhvdXRlckhlaWdodCAtIGlubmVySGVpZ2h0KSA8PSAxO1xuICAgIHNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgIC8vIE5lZWQgYSBsYXJnZSBlbm91Z2ggZGlmZmVyZW5jZSB0byB1cGRhdGUgdGhlIGhlaWdodC5cbiAgICAgIC8vIFRoaXMgcHJldmVudHMgaW5maW5pdGUgcmVuZGVyaW5nIGxvb3AuXG4gICAgICBpZiAocmVuZGVycy5jdXJyZW50IDwgMjAgJiYgKG91dGVySGVpZ2h0U3R5bGUgPiAwICYmIE1hdGguYWJzKChwcmV2U3RhdGUub3V0ZXJIZWlnaHRTdHlsZSB8fCAwKSAtIG91dGVySGVpZ2h0U3R5bGUpID4gMSB8fCBwcmV2U3RhdGUub3ZlcmZsb3cgIT09IG92ZXJmbG93KSkge1xuICAgICAgICByZW5kZXJzLmN1cnJlbnQgKz0gMTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvdmVyZmxvdzogb3ZlcmZsb3csXG4gICAgICAgICAgb3V0ZXJIZWlnaHRTdHlsZTogb3V0ZXJIZWlnaHRTdHlsZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAocmVuZGVycy5jdXJyZW50ID09PSAyMCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogVG9vIG1hbnkgcmUtcmVuZGVycy4gVGhlIGxheW91dCBpcyB1bnN0YWJsZS4nLCAnVGV4dGFyZWFBdXRvc2l6ZSBsaW1pdHMgdGhlIG51bWJlciBvZiByZW5kZXJzIHRvIHByZXZlbnQgYW4gaW5maW5pdGUgbG9vcC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICB9KTtcbiAgfSwgW3Jvd3NNYXgsIHJvd3NNaW4sIHByb3BzLnBsYWNlaG9sZGVyXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZVJlc2l6ZSA9IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlbmRlcnMuY3VycmVudCA9IDA7XG4gICAgICBzeW5jSGVpZ2h0KCk7XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbmRsZVJlc2l6ZS5jbGVhcigpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfTtcbiAgfSwgW3N5bmNIZWlnaHRdKTtcbiAgdXNlRW5oYW5jZWRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHN5bmNIZWlnaHQoKTtcbiAgfSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmVuZGVycy5jdXJyZW50ID0gMDtcbiAgfSwgW3ZhbHVlXSk7XG5cbiAgdmFyIGhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHJlbmRlcnMuY3VycmVudCA9IDA7XG5cbiAgICBpZiAoIWlzQ29udHJvbGxlZCkge1xuICAgICAgc3luY0hlaWdodCgpO1xuICAgIH1cblxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgX2V4dGVuZHMoe1xuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgIHJlZjogaGFuZGxlUmVmIC8vIEFwcGx5IHRoZSByb3dzIHByb3AgdG8gZ2V0IGEgXCJjb3JyZWN0XCIgZmlyc3QgU1NSIHBhaW50XG4gICAgLFxuICAgIHJvd3M6IHJvd3NNaW4sXG4gICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgIGhlaWdodDogc3RhdGUub3V0ZXJIZWlnaHRTdHlsZSxcbiAgICAgIC8vIE5lZWQgYSBsYXJnZSBlbm91Z2ggZGlmZmVyZW5jZSB0byBhbGxvdyBzY3JvbGxpbmcuXG4gICAgICAvLyBUaGlzIHByZXZlbnRzIGluZmluaXRlIHJlbmRlcmluZyBsb29wLlxuICAgICAgb3ZlcmZsb3c6IHN0YXRlLm92ZXJmbG93ID8gJ2hpZGRlbicgOiBudWxsXG4gICAgfSwgc3R5bGUpXG4gIH0sIG90aGVyKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwge1xuICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSxcbiAgICByZWFkT25seTogdHJ1ZSxcbiAgICByZWY6IHNoYWRvd1JlZixcbiAgICB0YWJJbmRleDogLTEsXG4gICAgc3R5bGU6IF9leHRlbmRzKHt9LCBzdHlsZXMuc2hhZG93LCBzdHlsZSlcbiAgfSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUZXh0YXJlYUF1dG9zaXplLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVXNlIGByb3dzTWluYCBpbnN0ZWFkLiBUaGUgcHJvcCB3aWxsIGJlIHJlbW92ZWQgaW4gdjUuXG4gICAqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICByb3dzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheS5cbiAgICovXG4gIHJvd3NNYXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogTWluaW11bSBudW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5LlxuICAgKi9cbiAgcm93c01pbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLCBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYUF1dG9zaXplOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1RleHRhcmVhQXV0b3NpemUnOyIsIi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuLCBqc3gtYTExeS9uby1ub25pbnRlcmFjdGl2ZS10YWJpbmRleCwgY2FtZWxjYXNlICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBvd25lckRvY3VtZW50IGZyb20gJy4uL3V0aWxzL293bmVyRG9jdW1lbnQnO1xuaW1wb3J0IHVzZUZvcmtSZWYgZnJvbSAnLi4vdXRpbHMvdXNlRm9ya1JlZic7XG5pbXBvcnQgeyBleGFjdFByb3AgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuLyoqXG4gKiBVdGlsaXR5IGNvbXBvbmVudCB0aGF0IGxvY2tzIGZvY3VzIGluc2lkZSB0aGUgY29tcG9uZW50LlxuICovXG5cbmZ1bmN0aW9uIFVuc3RhYmxlX1RyYXBGb2N1cyhwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIF9wcm9wcyRkaXNhYmxlQXV0b0ZvYyA9IHByb3BzLmRpc2FibGVBdXRvRm9jdXMsXG4gICAgICBkaXNhYmxlQXV0b0ZvY3VzID0gX3Byb3BzJGRpc2FibGVBdXRvRm9jID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlQXV0b0ZvYyxcbiAgICAgIF9wcm9wcyRkaXNhYmxlRW5mb3JjZSA9IHByb3BzLmRpc2FibGVFbmZvcmNlRm9jdXMsXG4gICAgICBkaXNhYmxlRW5mb3JjZUZvY3VzID0gX3Byb3BzJGRpc2FibGVFbmZvcmNlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlRW5mb3JjZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlUmVzdG9yZSA9IHByb3BzLmRpc2FibGVSZXN0b3JlRm9jdXMsXG4gICAgICBkaXNhYmxlUmVzdG9yZUZvY3VzID0gX3Byb3BzJGRpc2FibGVSZXN0b3JlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlUmVzdG9yZSxcbiAgICAgIGdldERvYyA9IHByb3BzLmdldERvYyxcbiAgICAgIGlzRW5hYmxlZCA9IHByb3BzLmlzRW5hYmxlZCxcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuO1xuICB2YXIgaWdub3JlTmV4dEVuZm9yY2VGb2N1cyA9IFJlYWN0LnVzZVJlZigpO1xuICB2YXIgc2VudGluZWxTdGFydCA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIHNlbnRpbmVsRW5kID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgbm9kZVRvUmVzdG9yZSA9IFJlYWN0LnVzZVJlZigpO1xuICB2YXIgcm9vdFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTsgLy8gY2FuIGJlIHJlbW92ZWQgb25jZSB3ZSBkcm9wIHN1cHBvcnQgZm9yIG5vbiByZWYgZm9yd2FyZGluZyBjbGFzcyBjb21wb25lbnRzXG5cbiAgdmFyIGhhbmRsZU93blJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIC8vICNTdHJpY3RNb2RlIHJlYWR5XG4gICAgcm9vdFJlZi5jdXJyZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUoaW5zdGFuY2UpO1xuICB9LCBbXSk7XG4gIHZhciBoYW5kbGVSZWYgPSB1c2VGb3JrUmVmKGNoaWxkcmVuLnJlZiwgaGFuZGxlT3duUmVmKTtcbiAgdmFyIHByZXZPcGVuUmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcHJldk9wZW5SZWYuY3VycmVudCA9IG9wZW47XG4gIH0sIFtvcGVuXSk7XG5cbiAgaWYgKCFwcmV2T3BlblJlZi5jdXJyZW50ICYmIG9wZW4gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBXQVJOSU5HOiBQb3RlbnRpYWxseSB1bnNhZmUgaW4gY29uY3VycmVudCBtb2RlLlxuICAgIC8vIFRoZSB3YXkgdGhlIHJlYWQgb24gYG5vZGVUb1Jlc3RvcmVgIGlzIHNldHVwIGNvdWxkIG1ha2UgdGhpcyBhY3R1YWxseSBzYWZlLlxuICAgIC8vIFNheSB3ZSByZW5kZXIgYG9wZW49e2ZhbHNlfWAgLT4gYG9wZW49e3RydWV9YCBidXQgbmV2ZXIgY29tbWl0LlxuICAgIC8vIFdlIGhhdmUgbm93IHdyaXR0ZW4gYSBzdGF0ZSB0aGF0IHdhc24ndCBjb21taXR0ZWQuIEJ1dCBubyBjb21taXR0ZWQgZWZmZWN0XG4gICAgLy8gd2lsbCByZWFkIHRoaXMgd3JvbmcgdmFsdWUuIFdlIG9ubHkgcmVhZCBmcm9tIGBub2RlVG9SZXN0b3JlYCBpbiBlZmZlY3RzXG4gICAgLy8gdGhhdCB3ZXJlIGNvbW1pdHRlZCBvbiBgb3Blbj17dHJ1ZX1gXG4gICAgLy8gV0FSTklORzogUHJldmVudHMgdGhlIGluc3RhbmNlIGZyb20gYmVpbmcgZ2FyYmFnZSBjb2xsZWN0ZWQuIFNob3VsZCBvbmx5XG4gICAgLy8gaG9sZCBhIHdlYWsgcmVmLlxuICAgIG5vZGVUb1Jlc3RvcmUuY3VycmVudCA9IGdldERvYygpLmFjdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghb3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkb2MgPSBvd25lckRvY3VtZW50KHJvb3RSZWYuY3VycmVudCk7IC8vIFdlIG1pZ2h0IHJlbmRlciBhbiBlbXB0eSBjaGlsZC5cblxuICAgIGlmICghZGlzYWJsZUF1dG9Gb2N1cyAmJiByb290UmVmLmN1cnJlbnQgJiYgIXJvb3RSZWYuY3VycmVudC5jb250YWlucyhkb2MuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIGlmICghcm9vdFJlZi5jdXJyZW50Lmhhc0F0dHJpYnV0ZSgndGFiSW5kZXgnKSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogVGhlIG1vZGFsIGNvbnRlbnQgbm9kZSBkb2VzIG5vdCBhY2NlcHQgZm9jdXMuJywgJ0ZvciB0aGUgYmVuZWZpdCBvZiBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLCAnICsgJ3RoZSB0YWJJbmRleCBvZiB0aGUgbm9kZSBpcyBiZWluZyBzZXQgdG8gXCItMVwiLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJvb3RSZWYuY3VycmVudC5zZXRBdHRyaWJ1dGUoJ3RhYkluZGV4JywgLTEpO1xuICAgICAgfVxuXG4gICAgICByb290UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICB2YXIgY29udGFpbiA9IGZ1bmN0aW9uIGNvbnRhaW4oKSB7XG4gICAgICB2YXIgcm9vdEVsZW1lbnQgPSByb290UmVmLmN1cnJlbnQ7IC8vIENsZWFudXAgZnVuY3Rpb25zIGFyZSBleGVjdXRlZCBsYXppbHkgaW4gUmVhY3QgMTcuXG4gICAgICAvLyBDb250YWluIGNhbiBiZSBjYWxsZWQgYmV0d2VlbiB0aGUgY29tcG9uZW50IGJlaW5nIHVubW91bnRlZCBhbmQgaXRzIGNsZWFudXAgZnVuY3Rpb24gYmVpbmcgcnVuLlxuXG4gICAgICBpZiAocm9vdEVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWRvYy5oYXNGb2N1cygpIHx8IGRpc2FibGVFbmZvcmNlRm9jdXMgfHwgIWlzRW5hYmxlZCgpIHx8IGlnbm9yZU5leHRFbmZvcmNlRm9jdXMuY3VycmVudCkge1xuICAgICAgICBpZ25vcmVOZXh0RW5mb3JjZUZvY3VzLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocm9vdFJlZi5jdXJyZW50ICYmICFyb290UmVmLmN1cnJlbnQuY29udGFpbnMoZG9jLmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIHJvb3RSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgbG9vcEZvY3VzID0gZnVuY3Rpb24gbG9vcEZvY3VzKGV2ZW50KSB7XG4gICAgICAvLyA5ID0gVGFiXG4gICAgICBpZiAoZGlzYWJsZUVuZm9yY2VGb2N1cyB8fCAhaXNFbmFibGVkKCkgfHwgZXZlbnQua2V5Q29kZSAhPT0gOSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIE1ha2Ugc3VyZSB0aGUgbmV4dCB0YWIgc3RhcnRzIGZyb20gdGhlIHJpZ2h0IHBsYWNlLlxuXG5cbiAgICAgIGlmIChkb2MuYWN0aXZlRWxlbWVudCA9PT0gcm9vdFJlZi5jdXJyZW50KSB7XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gaWdub3JlIHRoZSBuZXh0IGNvbnRhaW4gYXNcbiAgICAgICAgLy8gaXQgd2lsbCB0cnkgdG8gbW92ZSB0aGUgZm9jdXMgYmFjayB0byB0aGUgcm9vdFJlZiBlbGVtZW50LlxuICAgICAgICBpZ25vcmVOZXh0RW5mb3JjZUZvY3VzLmN1cnJlbnQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgIHNlbnRpbmVsRW5kLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZW50aW5lbFN0YXJ0LmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBjb250YWluLCB0cnVlKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGxvb3BGb2N1cywgdHJ1ZSk7IC8vIFdpdGggRWRnZSwgU2FmYXJpIGFuZCBGaXJlZm94LCBubyBmb2N1cyByZWxhdGVkIGV2ZW50cyBhcmUgZmlyZWQgd2hlbiB0aGUgZm9jdXNlZCBhcmVhIHN0b3BzIGJlaW5nIGEgZm9jdXNlZCBhcmVhXG4gICAgLy8gZS5nLiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NTk1NjEuXG4gICAgLy9cbiAgICAvLyBUaGUgd2hhdHdnIHNwZWMgZGVmaW5lcyBob3cgdGhlIGJyb3dzZXIgc2hvdWxkIGJlaGF2ZSBidXQgZG9lcyBub3QgZXhwbGljaXRseSBtZW50aW9uIGFueSBldmVudHM6XG4gICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNmb2N1cy1maXh1cC1ydWxlLlxuXG4gICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgY29udGFpbigpO1xuICAgIH0sIDUwKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBjb250YWluLCB0cnVlKTtcbiAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbG9vcEZvY3VzLCB0cnVlKTsgLy8gcmVzdG9yZUxhc3RGb2N1cygpXG5cbiAgICAgIGlmICghZGlzYWJsZVJlc3RvcmVGb2N1cykge1xuICAgICAgICAvLyBJbiBJRSAxMSBpdCBpcyBwb3NzaWJsZSBmb3IgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCB0byBiZSBudWxsIHJlc3VsdGluZ1xuICAgICAgICAvLyBpbiBub2RlVG9SZXN0b3JlLmN1cnJlbnQgYmVpbmcgbnVsbC5cbiAgICAgICAgLy8gTm90IGFsbCBlbGVtZW50cyBpbiBJRSAxMSBoYXZlIGEgZm9jdXMgbWV0aG9kLlxuICAgICAgICAvLyBPbmNlIElFIDExIHN1cHBvcnQgaXMgZHJvcHBlZCB0aGUgZm9jdXMoKSBjYWxsIGNhbiBiZSB1bmNvbmRpdGlvbmFsLlxuICAgICAgICBpZiAobm9kZVRvUmVzdG9yZS5jdXJyZW50ICYmIG5vZGVUb1Jlc3RvcmUuY3VycmVudC5mb2N1cykge1xuICAgICAgICAgIG5vZGVUb1Jlc3RvcmUuY3VycmVudC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZVRvUmVzdG9yZS5jdXJyZW50ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbZGlzYWJsZUF1dG9Gb2N1cywgZGlzYWJsZUVuZm9yY2VGb2N1cywgZGlzYWJsZVJlc3RvcmVGb2N1cywgaXNFbmFibGVkLCBvcGVuXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIHRhYkluZGV4OiAwLFxuICAgIHJlZjogc2VudGluZWxTdGFydCxcbiAgICBcImRhdGEtdGVzdFwiOiBcInNlbnRpbmVsU3RhcnRcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgIHJlZjogaGFuZGxlUmVmXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgdGFiSW5kZXg6IDAsXG4gICAgcmVmOiBzZW50aW5lbEVuZCxcbiAgICBcImRhdGEtdGVzdFwiOiBcInNlbnRpbmVsRW5kXCJcbiAgfSkpO1xufVxuXG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVbnN0YWJsZV9UcmFwRm9jdXMucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQSBzaW5nbGUgY2hpbGQgY29udGVudCBlbGVtZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0cmFwIGZvY3VzIHdpbGwgbm90IGF1dG9tYXRpY2FsbHkgc2hpZnQgZm9jdXMgdG8gaXRzZWxmIHdoZW4gaXQgb3BlbnMsIGFuZFxuICAgKiByZXBsYWNlIGl0IHRvIHRoZSBsYXN0IGZvY3VzZWQgZWxlbWVudCB3aGVuIGl0IGNsb3Nlcy5cbiAgICogVGhpcyBhbHNvIHdvcmtzIGNvcnJlY3RseSB3aXRoIGFueSB0cmFwIGZvY3VzIGNoaWxkcmVuIHRoYXQgaGF2ZSB0aGUgYGRpc2FibGVBdXRvRm9jdXNgIHByb3AuXG4gICAqXG4gICAqIEdlbmVyYWxseSB0aGlzIHNob3VsZCBuZXZlciBiZSBzZXQgdG8gYHRydWVgIGFzIGl0IG1ha2VzIHRoZSB0cmFwIGZvY3VzIGxlc3NcbiAgICogYWNjZXNzaWJsZSB0byBhc3Npc3RpdmUgdGVjaG5vbG9naWVzLCBsaWtlIHNjcmVlbiByZWFkZXJzLlxuICAgKi9cbiAgZGlzYWJsZUF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHRyYXAgZm9jdXMgd2lsbCBub3QgcHJldmVudCBmb2N1cyBmcm9tIGxlYXZpbmcgdGhlIHRyYXAgZm9jdXMgd2hpbGUgb3Blbi5cbiAgICpcbiAgICogR2VuZXJhbGx5IHRoaXMgc2hvdWxkIG5ldmVyIGJlIHNldCB0byBgdHJ1ZWAgYXMgaXQgbWFrZXMgdGhlIHRyYXAgZm9jdXMgbGVzc1xuICAgKiBhY2Nlc3NpYmxlIHRvIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMsIGxpa2Ugc2NyZWVuIHJlYWRlcnMuXG4gICAqL1xuICBkaXNhYmxlRW5mb3JjZUZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgdHJhcCBmb2N1cyB3aWxsIG5vdCByZXN0b3JlIGZvY3VzIHRvIHByZXZpb3VzbHkgZm9jdXNlZCBlbGVtZW50IG9uY2VcbiAgICogdHJhcCBmb2N1cyBpcyBoaWRkZW4uXG4gICAqL1xuICBkaXNhYmxlUmVzdG9yZUZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBkb2N1bWVudCB0byBjb25zaWRlci5cbiAgICogV2UgdXNlIGl0IHRvIGltcGxlbWVudCB0aGUgcmVzdG9yZSBmb2N1cyBiZXR3ZWVuIGRpZmZlcmVudCBicm93c2VyIGRvY3VtZW50cy5cbiAgICovXG4gIGdldERvYzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogRG8gd2Ugc3RpbGwgd2FudCB0byBlbmZvcmNlIHRoZSBmb2N1cz9cbiAgICogVGhpcyBwcm9wIGhlbHBzIG5lc3RpbmcgVHJhcEZvY3VzIGVsZW1lbnRzLlxuICAgKi9cbiAgaXNFbmFibGVkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGZvY3VzIHdpbGwgYmUgbG9ja2VkLlxuICAgKi9cbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZFxufSA6IHZvaWQgMDtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIFVuc3RhYmxlX1RyYXBGb2N1c1sncHJvcFR5cGVzJyArICcnXSA9IGV4YWN0UHJvcChVbnN0YWJsZV9UcmFwRm9jdXMucHJvcFR5cGVzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVW5zdGFibGVfVHJhcEZvY3VzOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1Vuc3RhYmxlX1RyYXBGb2N1cyc7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNNyAxMGw1IDUgNS01elwiXG59KSwgJ0Fycm93RHJvcERvd24nKTsiLCJleHBvcnQgdmFyIHJlZmxvdyA9IGZ1bmN0aW9uIHJlZmxvdyhub2RlKSB7XG4gIHJldHVybiBub2RlLnNjcm9sbFRvcDtcbn07XG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNpdGlvblByb3BzKHByb3BzLCBvcHRpb25zKSB7XG4gIHZhciB0aW1lb3V0ID0gcHJvcHMudGltZW91dCxcbiAgICAgIF9wcm9wcyRzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgc3R5bGUgPSBfcHJvcHMkc3R5bGUgPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJHN0eWxlO1xuICByZXR1cm4ge1xuICAgIGR1cmF0aW9uOiBzdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gfHwgdHlwZW9mIHRpbWVvdXQgPT09ICdudW1iZXInID8gdGltZW91dCA6IHRpbWVvdXRbb3B0aW9ucy5tb2RlXSB8fCAwLFxuICAgIGRlbGF5OiBzdHlsZS50cmFuc2l0aW9uRGVsYXlcbiAgfTtcbn0iLCIvKipcbiAqIFNhZmUgY2hhaW5lZCBmdW5jdGlvblxuICpcbiAqIFdpbGwgb25seSBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gaWYgbmVlZGVkLFxuICogb3RoZXJ3aXNlIHdpbGwgcGFzcyBiYWNrIGV4aXN0aW5nIGZ1bmN0aW9ucyBvciBudWxsLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmN0aW9ucyB0byBjaGFpblxuICogQHJldHVybnMge2Z1bmN0aW9ufG51bGx9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNoYWluZWRGdW5jdGlvbigpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmNzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmNzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBmdW5jKSB7XG4gICAgaWYgKGZ1bmMgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBJbnZhbGlkIEFyZ3VtZW50IFR5cGUsIG11c3Qgb25seSBwcm92aWRlIGZ1bmN0aW9ucywgdW5kZWZpbmVkLCBvciBudWxsLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBjaGFpbmVkRnVuY3Rpb24oKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBhY2MuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICgpIHt9KTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuLi9TdmdJY29uJztcbi8qKlxuICogUHJpdmF0ZSBtb2R1bGUgcmVzZXJ2ZWQgZm9yIEBtYXRlcmlhbC11aS94IHBhY2thZ2VzLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN2Z0ljb24ocGF0aCwgZGlzcGxheU5hbWUpIHtcbiAgdmFyIENvbXBvbmVudCA9IGZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFN2Z0ljb24sIF9leHRlbmRzKHtcbiAgICAgIHJlZjogcmVmXG4gICAgfSwgcHJvcHMpLCBwYXRoKTtcbiAgfTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIE5lZWQgdG8gc2V0IGBkaXNwbGF5TmFtZWAgb24gdGhlIGlubmVyIGNvbXBvbmVudCBmb3IgUmVhY3QubWVtby5cbiAgICAvLyBSZWFjdCBwcmlvciB0byAxNi4xNCBpZ25vcmVzIGBkaXNwbGF5TmFtZWAgb24gdGhlIHdyYXBwZXIuXG4gICAgQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gXCJcIi5jb25jYXQoZGlzcGxheU5hbWUsIFwiSWNvblwiKTtcbiAgfVxuXG4gIENvbXBvbmVudC5tdWlOYW1lID0gU3ZnSWNvbi5tdWlOYW1lO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0Lm1lbW8oIC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKENvbXBvbmVudCkpO1xufSIsIi8vIENvcnJlc3BvbmRzIHRvIDEwIGZyYW1lcyBhdCA2MCBIei5cbi8vIEEgZmV3IGJ5dGVzIHBheWxvYWQgb3ZlcmhlYWQgd2hlbiBsb2Rhc2gvZGVib3VuY2UgaXMgfjMga0IgYW5kIGRlYm91bmNlIH4zMDAgQi5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMpIHtcbiAgdmFyIHdhaXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE2NjtcbiAgdmFyIHRpbWVvdXQ7XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC10aGlzXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24gbGF0ZXIoKSB7XG4gICAgICBmdW5jLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICB9XG5cbiAgZGVib3VuY2VkLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgfTtcblxuICByZXR1cm4gZGVib3VuY2VkO1xufSIsIi8vIEEgY2hhbmdlIG9mIHRoZSBicm93c2VyIHpvb20gY2hhbmdlIHRoZSBzY3JvbGxiYXIgc2l6ZS5cbi8vIENyZWRpdCBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi8zZmZlM2E1ZDgyZjZmNTYxYjgyZmY3OGQ4MmIzMmE3ZDE0YWVkNTU4L2pzL3NyYy9tb2RhbC5qcyNMNTEyLUw1MTlcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNjcm9sbGJhclNpemUoKSB7XG4gIHZhciBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2Nyb2xsRGl2LnN0eWxlLndpZHRoID0gJzk5cHgnO1xuICBzY3JvbGxEaXYuc3R5bGUuaGVpZ2h0ID0gJzk5cHgnO1xuICBzY3JvbGxEaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBzY3JvbGxEaXYuc3R5bGUudG9wID0gJy05OTk5cHgnO1xuICBzY3JvbGxEaXYuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuICB2YXIgc2Nyb2xsYmFyU2l6ZSA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuICByZXR1cm4gc2Nyb2xsYmFyU2l6ZTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc011aUVsZW1lbnQoZWxlbWVudCwgbXVpTmFtZXMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChlbGVtZW50KSAmJiBtdWlOYW1lcy5pbmRleE9mKGVsZW1lbnQudHlwZS5tdWlOYW1lKSAhPT0gLTE7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3duZXJEb2N1bWVudChub2RlKSB7XG4gIHJldHVybiBub2RlICYmIG5vZGUub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudDtcbn0iLCJpbXBvcnQgb3duZXJEb2N1bWVudCBmcm9tICcuL293bmVyRG9jdW1lbnQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3duZXJXaW5kb3cobm9kZSkge1xuICB2YXIgZG9jID0gb3duZXJEb2N1bWVudChub2RlKTtcbiAgcmV0dXJuIGRvYy5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG59IiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3MsIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ29udHJvbGxlZChfcmVmKSB7XG4gIHZhciBjb250cm9sbGVkID0gX3JlZi5jb250cm9sbGVkLFxuICAgICAgZGVmYXVsdFByb3AgPSBfcmVmLmRlZmF1bHQsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgX3JlZiRzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBzdGF0ZSA9IF9yZWYkc3RhdGUgPT09IHZvaWQgMCA/ICd2YWx1ZScgOiBfcmVmJHN0YXRlO1xuXG4gIHZhciBfUmVhY3QkdXNlUmVmID0gUmVhY3QudXNlUmVmKGNvbnRyb2xsZWQgIT09IHVuZGVmaW5lZCksXG4gICAgICBpc0NvbnRyb2xsZWQgPSBfUmVhY3QkdXNlUmVmLmN1cnJlbnQ7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRQcm9wKSxcbiAgICAgIHZhbHVlU3RhdGUgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRWYWx1ZSA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgdmFsdWUgPSBpc0NvbnRyb2xsZWQgPyBjb250cm9sbGVkIDogdmFsdWVTdGF0ZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaXNDb250cm9sbGVkICE9PSAoY29udHJvbGxlZCAhPT0gdW5kZWZpbmVkKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBBIGNvbXBvbmVudCBpcyBjaGFuZ2luZyB0aGUgXCIuY29uY2F0KGlzQ29udHJvbGxlZCA/ICcnIDogJ3VuJywgXCJjb250cm9sbGVkIFwiKS5jb25jYXQoc3RhdGUsIFwiIHN0YXRlIG9mIFwiKS5jb25jYXQobmFtZSwgXCIgdG8gYmUgXCIpLmNvbmNhdChpc0NvbnRyb2xsZWQgPyAndW4nIDogJycsIFwiY29udHJvbGxlZC5cIiksICdFbGVtZW50cyBzaG91bGQgbm90IHN3aXRjaCBmcm9tIHVuY29udHJvbGxlZCB0byBjb250cm9sbGVkIChvciB2aWNlIHZlcnNhKS4nLCBcIkRlY2lkZSBiZXR3ZWVuIHVzaW5nIGEgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgXCIuY29uY2F0KG5hbWUsIFwiIFwiKSArICdlbGVtZW50IGZvciB0aGUgbGlmZXRpbWUgb2YgdGhlIGNvbXBvbmVudC4nLCBcIlRoZSBuYXR1cmUgb2YgdGhlIHN0YXRlIGlzIGRldGVybWluZWQgZHVyaW5nIHRoZSBmaXJzdCByZW5kZXIsIGl0J3MgY29uc2lkZXJlZCBjb250cm9sbGVkIGlmIHRoZSB2YWx1ZSBpcyBub3QgYHVuZGVmaW5lZGAuXCIsICdNb3JlIGluZm86IGh0dHBzOi8vZmIubWUvcmVhY3QtY29udHJvbGxlZC1jb21wb25lbnRzJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH0sIFtjb250cm9sbGVkXSk7XG5cbiAgICB2YXIgX1JlYWN0JHVzZVJlZjIgPSBSZWFjdC51c2VSZWYoZGVmYXVsdFByb3ApLFxuICAgICAgICBkZWZhdWx0VmFsdWUgPSBfUmVhY3QkdXNlUmVmMi5jdXJyZW50O1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghaXNDb250cm9sbGVkICYmIGRlZmF1bHRWYWx1ZSAhPT0gZGVmYXVsdFByb3ApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogQSBjb21wb25lbnQgaXMgY2hhbmdpbmcgdGhlIGRlZmF1bHQgXCIuY29uY2F0KHN0YXRlLCBcIiBzdGF0ZSBvZiBhbiB1bmNvbnRyb2xsZWQgXCIpLmNvbmNhdChuYW1lLCBcIiBhZnRlciBiZWluZyBpbml0aWFsaXplZC4gXCIpICsgXCJUbyBzdXBwcmVzcyB0aGlzIHdhcm5pbmcgb3B0IHRvIHVzZSBhIGNvbnRyb2xsZWQgXCIuY29uY2F0KG5hbWUsIFwiLlwiKV0uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH0sIFtKU09OLnN0cmluZ2lmeShkZWZhdWx0UHJvcCldKTtcbiAgfVxuXG4gIHZhciBzZXRWYWx1ZUlmVW5jb250cm9sbGVkID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgaWYgKCFpc0NvbnRyb2xsZWQpIHtcbiAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIFt2YWx1ZSwgc2V0VmFsdWVJZlVuY29udHJvbGxlZF07XG59IiwiaW1wb3J0IEFkbWluSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0FkbWluSGVhZGVyJztcclxuaW1wb3J0IEFkbWluIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYXV0aC9BZG1pbic7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCB7IGxpc3RNZXNzYWdlQnlJZCB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvbWVzc2FnZUFjdGlvbnMnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdG1pbldpZHRoOiAyNzUsXHJcblx0fSxcclxuXHRidWxsZXQ6IHtcclxuXHRcdGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG5cdFx0bWFyZ2luOiAnMCAycHgnLFxyXG5cdFx0dHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXHJcblx0fSxcclxuXHR0aXRsZToge1xyXG5cdFx0Zm9udFNpemU6IDE0LFxyXG5cdH0sXHJcblx0cG9zOiB7XHJcblx0XHRtYXJnaW5Cb3R0b206IDEyLFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuY29uc3QgTWVzc2FnZUlkID0gKHsgbWVzc2FnZSB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEFkbWluSGVhZGVyPlxyXG5cdFx0XHRcdDxBZG1pbj5cclxuXHRcdFx0XHRcdHsvKiBGaWwgZCdhcmlhbmUgKi99XHJcblx0XHRcdFx0XHQ8aDIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+XHJcblx0XHRcdFx0XHRcdENvbnN1bHRhdGlvbiBkdSBtZXNzYWdlIGRlIHttZXNzYWdlLm5vbX1cclxuXHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHRcdDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHRcdFx0PENhcmRDb250ZW50PlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g1JyBjb21wb25lbnQ9J2g1Jz5cclxuXHRcdFx0XHRcdFx0XHRcdEVudm95w6kgcGFyIHttZXNzYWdlLm5vbX1cclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHlcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPSd0ZXh0U2Vjb25kYXJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0Z3V0dGVyQm90dG9tPlxyXG5cdFx0XHRcdFx0XHRcdFx0RW52b3nDqSBsZXsnICd9XHJcblx0XHRcdFx0XHRcdFx0XHR7ZGF5anMobWVzc2FnZS5jcmVhdGVkQXQpLmZvcm1hdChcclxuXHRcdFx0XHRcdFx0XHRcdFx0J0REL01NL1lZWVkgw6AgSEg6bW0nXHJcblx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHlcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3N9XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ndGV4dFNlY29uZGFyeSc+XHJcblx0XHRcdFx0XHRcdFx0XHRDb29yZG9ubsOpZXMgOiB7bWVzc2FnZS5tYWlsfSAvIDBcclxuXHRcdFx0XHRcdFx0XHRcdHtgJHttZXNzYWdlLnRlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3Vic3RyaW5nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0MVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfSAke21lc3NhZ2UudGVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5zdWJzdHJpbmcoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0MSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQzXHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9ICR7bWVzc2FnZS50ZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnN1YnN0cmluZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDVcclxuXHRcdFx0XHRcdFx0XHRcdFx0KX0gJHttZXNzYWdlLnRlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3Vic3RyaW5nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0N1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfSAke21lc3NhZ2UudGVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5zdWJzdHJpbmcoNywgOSl9YH1cclxuXHRcdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD0nYm9keTInIGNvbXBvbmVudD0ncCc+XHJcblx0XHRcdFx0XHRcdFx0XHRNZXNzYWdlIDpcclxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0e21lc3NhZ2UubXNnfVxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0PC9DYXJkQ29udGVudD5cclxuXHRcdFx0XHRcdFx0PENhcmRBY3Rpb25zPlxyXG5cdFx0XHRcdFx0XHRcdDxmb3JtXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cclxuXHRcdFx0XHRcdFx0XHRcdG5vVmFsaWRhdGVcclxuXHRcdFx0XHRcdFx0XHRcdGF1dG9Db21wbGV0ZT0nb2ZmJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0RmllbGRcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9J3N0YW5kYXJkLWJhc2ljJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD0nU3RhbmRhcmQnXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD0nZmlsbGVkLWJhc2ljJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD0nRmlsbGVkJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdmaWxsZWQnXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRleHRGaWVsZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD0nb3V0bGluZWQtYmFzaWMnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPSdPdXRsaW5lZCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0nb3V0bGluZWQnXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHNpemU9J3NtYWxsJz5MZWFybiBNb3JlPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDwvQ2FyZEFjdGlvbnM+XHJcblx0XHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdFx0PC9BZG1pbj5cclxuXHRcdFx0PC9BZG1pbkhlYWRlcj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHRjb25zdCByZXMxID0gYXdhaXQgbGlzdE1lc3NhZ2VCeUlkKGNvbnRleHQucGFyYW1zLmlkKTtcclxuXHRjb25zdCBtZXNzYWdlID0gYXdhaXQgcmVzMTtcclxuXHRjb25zb2xlLmxvZygnbWVzc2FnZScsIG1lc3NhZ2UpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0bWVzc2FnZSxcclxuXHRcdH0sXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUlkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9