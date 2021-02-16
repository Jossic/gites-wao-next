webpackHotUpdate_N_E("pages/admin/reservation/[id]",{

/***/ "./node_modules/@material-ui/core/esm/AppBar/AppBar.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/AppBar/AppBar.js ***!
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
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");








var styles = function styles(theme) {
  var backgroundColorDefault = theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxSizing: 'border-box',
      // Prevent padding issue with the Modal and fixed positioned AppBar.
      zIndex: theme.zIndex.appBar,
      flexShrink: 0
    },

    /* Styles applied to the root element if `position="fixed"`. */
    positionFixed: {
      position: 'fixed',
      top: 0,
      left: 'auto',
      right: 0,
      '@media print': {
        // Prevent the app bar to be visible on each printed page.
        position: 'absolute'
      }
    },

    /* Styles applied to the root element if `position="absolute"`. */
    positionAbsolute: {
      position: 'absolute',
      top: 0,
      left: 'auto',
      right: 0
    },

    /* Styles applied to the root element if `position="sticky"`. */
    positionSticky: {
      // ⚠️ sticky is not supported by IE 11.
      position: 'sticky',
      top: 0,
      left: 'auto',
      right: 0
    },

    /* Styles applied to the root element if `position="static"`. */
    positionStatic: {
      position: 'static'
    },

    /* Styles applied to the root element if `position="relative"`. */
    positionRelative: {
      position: 'relative'
    },

    /* Styles applied to the root element if `color="default"`. */
    colorDefault: {
      backgroundColor: backgroundColorDefault,
      color: theme.palette.getContrastText(backgroundColorDefault)
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `color="transparent"`. */
    colorTransparent: {
      backgroundColor: 'transparent',
      color: 'inherit'
    }
  };
};
var AppBar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function AppBar(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$position = props.position,
      position = _props$position === void 0 ? 'fixed' : _props$position,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "color", "position"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    square: true,
    component: "header",
    elevation: 4,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes["position".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(position))], classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color))], className, position === 'fixed' && 'mui-fixed'),
    ref: ref
  }, other));
});
 true ? AppBar.propTypes = {
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
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['default', 'inherit', 'primary', 'secondary', 'transparent']),

  /**
   * The positioning type. The behavior of the different options is described
   * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   */
  position: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['absolute', 'fixed', 'relative', 'static', 'sticky'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiAppBar'
})(AppBar));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/AppBar/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/AppBar/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBar */ "./node_modules/@material-ui/core/esm/AppBar/AppBar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _AppBar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Box/Box.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Box/Box.js ***!
  \*******************************************************/
/*! exports provided: styleFunction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleFunction", function() { return styleFunction; });
/* harmony import */ var _material_ui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/system */ "./node_modules/@material-ui/system/esm/index.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@material-ui/core/esm/styles/styled.js");


var styleFunction = Object(_material_ui_system__WEBPACK_IMPORTED_MODULE_0__["css"])(Object(_material_ui_system__WEBPACK_IMPORTED_MODULE_0__["compose"])(_material_ui_system__WEBPACK_IMPORTED_MODULE_0__["borders"], _material_ui_system__WEBPACK_IMPORTED_MODULE_0__["display"], _material_ui_system__WEBPACK_IMPORTED_MODULE_0__["flexbox"], _material_ui_system__WEBPACK_IMPORTED_MODULE_0__["grid"], _material_ui_system__WEBPACK_IMPORTED_MODULE_0__["positions"], _material_ui_system__WEBPACK_IMPORTED_MODULE_0__["palette"], _material_ui_system__WEBPACK_IMPORTED_MODULE_0__["shadows"], _material_ui_system__WEBPACK_IMPORTED_MODULE_0__["sizing"], _material_ui_system__WEBPACK_IMPORTED_MODULE_0__["spacing"], _material_ui_system__WEBPACK_IMPORTED_MODULE_0__["typography"]));
/**
 * @ignore - do not document.
 */

var Box = Object(_styles_styled__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(styleFunction, {
  name: 'MuiBox'
});
/* harmony default export */ __webpack_exports__["default"] = (Box);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Box/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Box/index.js ***!
  \*********************************************************/
/*! exports provided: default, styleFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ "./node_modules/@material-ui/core/esm/Box/Box.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Box__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styleFunction", function() { return _Box__WEBPACK_IMPORTED_MODULE_0__["styleFunction"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js ***!
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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_useIsFocusVisible__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/useIsFocusVisible */ "./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js");
/* harmony import */ var _TouchRipple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TouchRipple */ "./node_modules/@material-ui/core/esm/ButtonBase/TouchRipple.js");












var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    '-moz-appearance': 'none',
    // Reset
    '-webkit-appearance': 'none',
    // Reset
    textDecoration: 'none',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.

    },
    '&$disabled': {
      pointerEvents: 'none',
      // Disable link interactions
      cursor: 'default'
    },
    '@media print': {
      colorAdjust: 'exact'
    }
  },

  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {},

  /* Pseudo-class applied to the root element if keyboard focused. */
  focusVisible: {}
};
/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */

var ButtonBase = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function ButtonBase(props, ref) {
  var action = props.action,
      buttonRefProp = props.buttonRef,
      _props$centerRipple = props.centerRipple,
      centerRipple = _props$centerRipple === void 0 ? false : _props$centerRipple,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableRipple = props.disableRipple,
      disableRipple = _props$disableRipple === void 0 ? false : _props$disableRipple,
      _props$disableTouchRi = props.disableTouchRipple,
      disableTouchRipple = _props$disableTouchRi === void 0 ? false : _props$disableTouchRi,
      _props$focusRipple = props.focusRipple,
      focusRipple = _props$focusRipple === void 0 ? false : _props$focusRipple,
      focusVisibleClassName = props.focusVisibleClassName,
      onBlur = props.onBlur,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onFocusVisible = props.onFocusVisible,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      onMouseDown = props.onMouseDown,
      onMouseLeave = props.onMouseLeave,
      onMouseUp = props.onMouseUp,
      onTouchEnd = props.onTouchEnd,
      onTouchMove = props.onTouchMove,
      onTouchStart = props.onTouchStart,
      onDragLeave = props.onDragLeave,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      TouchRippleProps = props.TouchRippleProps,
      _props$type = props.type,
      type = _props$type === void 0 ? 'button' : _props$type,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "onDragLeave", "tabIndex", "TouchRippleProps", "type"]);

  var buttonRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);

  function getButtonNode() {
    // #StrictMode ready
    return react_dom__WEBPACK_IMPORTED_MODULE_4__["findDOMNode"](buttonRef.current);
  }

  var rippleRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      focusVisible = _React$useState[0],
      setFocusVisible = _React$useState[1];

  if (disabled && focusVisible) {
    setFocusVisible(false);
  }

  var _useIsFocusVisible = Object(_utils_useIsFocusVisible__WEBPACK_IMPORTED_MODULE_10__["default"])(),
      isFocusVisible = _useIsFocusVisible.isFocusVisible,
      onBlurVisible = _useIsFocusVisible.onBlurVisible,
      focusVisibleRef = _useIsFocusVisible.ref;

  react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"](action, function () {
    return {
      focusVisible: function focusVisible() {
        setFocusVisible(true);
        buttonRef.current.focus();
      }
    };
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (focusVisible && focusRipple && !disableRipple) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible]);

  function useRippleHandler(rippleAction, eventCallback) {
    var skipRippleAction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : disableTouchRipple;
    return Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(function (event) {
      if (eventCallback) {
        eventCallback(event);
      }

      var ignore = skipRippleAction;

      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }

      return true;
    });
  }

  var handleMouseDown = useRippleHandler('start', onMouseDown);
  var handleDragLeave = useRippleHandler('stop', onDragLeave);
  var handleMouseUp = useRippleHandler('stop', onMouseUp);
  var handleMouseLeave = useRippleHandler('stop', function (event) {
    if (focusVisible) {
      event.preventDefault();
    }

    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  var handleTouchStart = useRippleHandler('start', onTouchStart);
  var handleTouchEnd = useRippleHandler('stop', onTouchEnd);
  var handleTouchMove = useRippleHandler('stop', onTouchMove);
  var handleBlur = useRippleHandler('stop', function (event) {
    if (focusVisible) {
      onBlurVisible(event);
      setFocusVisible(false);
    }

    if (onBlur) {
      onBlur(event);
    }
  }, false);
  var handleFocus = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(function (event) {
    // Fix for https://github.com/facebook/react/issues/7769
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }

    if (isFocusVisible(event)) {
      setFocusVisible(true);

      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }

    if (onFocus) {
      onFocus(event);
    }
  });

  var isNonNativeButton = function isNonNativeButton() {
    var button = getButtonNode();
    return component && component !== 'button' && !(button.tagName === 'A' && button.href);
  };
  /**
   * IE 11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
   */


  var keydownRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](false);
  var handleKeyDown = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(function (event) {
    // Check if key is already down to avoid repeats being counted as multiple activations
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
      keydownRef.current = true;
      event.persist();
      rippleRef.current.stop(event, function () {
        rippleRef.current.start(event);
      });
    }

    if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    } // Keyboard accessibility for non interactive elements


    if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
      event.preventDefault();

      if (onClick) {
        onClick(event);
      }
    }
  });
  var handleKeyUp = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_8__["default"])(function (event) {
    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
    if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      event.persist();
      rippleRef.current.stop(event, function () {
        rippleRef.current.pulsate(event);
      });
    }

    if (onKeyUp) {
      onKeyUp(event);
    } // Keyboard accessibility for non interactive elements


    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
      onClick(event);
    }
  });
  var ComponentProp = component;

  if (ComponentProp === 'button' && other.href) {
    ComponentProp = 'a';
  }

  var buttonProps = {};

  if (ComponentProp === 'button') {
    buttonProps.type = type;
    buttonProps.disabled = disabled;
  } else {
    if (ComponentProp !== 'a' || !other.href) {
      buttonProps.role = 'button';
    }

    buttonProps['aria-disabled'] = disabled;
  }

  var handleUserRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__["default"])(buttonRefProp, ref);
  var handleOwnRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__["default"])(focusVisibleRef, buttonRef);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__["default"])(handleUserRef, handleOwnRef);

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      mountedState = _React$useState2[0],
      setMountedState = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    setMountedState(true);
  }, []);
  var enableTouchRipple = mountedState && !disableRipple && !disabled;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
      if (enableTouchRipple && !rippleRef.current) {
        console.error(['Material-UI: The `component` prop provided to ButtonBase is invalid.', 'Please make sure the children prop is rendered in this custom component.'].join('\n'));
      }
    }, [enableTouchRipple]);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](ComponentProp, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className, focusVisible && [classes.focusVisible, focusVisibleClassName], disabled && classes.disabled),
    onBlur: handleBlur,
    onClick: onClick,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex
  }, buttonProps, other), children, enableTouchRipple ?
  /*#__PURE__*/

  /* TouchRipple is only needed client-side, x2 boost on the server. */
  react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_TouchRipple__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: rippleRef,
    center: centerRipple
  }, TouchRippleProps)) : null);
});
 true ? ButtonBase.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__["refType"],

  /**
   * @ignore
   *
   * Use that prop to pass a ref to the native button component.
   * @deprecated Use `ref` instead.
   */
  buttonRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__["refType"],

  /**
   * If `true`, the ripples will be centered.
   * They won't start at the cursor interaction position.
   */
  centerRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

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
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__["elementTypeAcceptingRef"],

  /**
   * If `true`, the base button will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `focusVisibleClassName`.
   */
  disableRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the touch ripple effect will be disabled.
   */
  disableTouchRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the base button will have a keyboard focus ripple.
   */
  focusRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * This prop can help a person know which element has the keyboard focus.
   * The class name will be applied when the element gain the focus through a keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/master/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * @ignore
   */
  href: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onDragLeave: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onKeyUp: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onMouseUp: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onTouchEnd: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onTouchMove: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onTouchStart: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['button', 'reset', 'submit']), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__["default"])(styles, {
  name: 'MuiButtonBase'
})(ButtonBase));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/Ripple.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ButtonBase/Ripple.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");




var useEnhancedEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"];
/**
 * @ignore - internal component.
 */

function Ripple(props) {
  var classes = props.classes,
      _props$pulsate = props.pulsate,
      pulsate = _props$pulsate === void 0 ? false : _props$pulsate,
      rippleX = props.rippleX,
      rippleY = props.rippleY,
      rippleSize = props.rippleSize,
      inProp = props.in,
      _props$onExited = props.onExited,
      onExited = _props$onExited === void 0 ? function () {} : _props$onExited,
      timeout = props.timeout;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false),
      leaving = _React$useState[0],
      setLeaving = _React$useState[1];

  var rippleClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  var rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  var childClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  var handleExited = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_3__["default"])(onExited); // Ripple is used for user feedback (e.g. click or press) so we want to apply styles with the highest priority

  useEnhancedEffect(function () {
    if (!inProp) {
      // react-transition-group#onExit
      setLeaving(true); // react-transition-group#onExited

      var timeoutId = setTimeout(handleExited, timeout);
      return function () {
        clearTimeout(timeoutId);
      };
    }

    return undefined;
  }, [handleExited, inProp, timeout]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: rippleClassName,
    style: rippleStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: childClassName
  }));
}

 true ? Ripple.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,

  /**
   * @ignore - injected from TransitionGroup
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Diameter of the ripple.
   */
  rippleSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Horizontal position of the ripple center.
   */
  rippleX: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Vertical position of the ripple center.
   */
  rippleY: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * exit delay
   */
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Ripple);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/TouchRipple.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ButtonBase/TouchRipple.js ***!
  \**********************************************************************/
/*! exports provided: DELAY_RIPPLE, styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELAY_RIPPLE", function() { return DELAY_RIPPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Ripple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Ripple */ "./node_modules/@material-ui/core/esm/ButtonBase/Ripple.js");









var DURATION = 550;
var DELAY_RIPPLE = 80;
var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      overflow: 'hidden',
      pointerEvents: 'none',
      position: 'absolute',
      zIndex: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: 'inherit'
    },

    /* Styles applied to the internal `Ripple` components `ripple` class. */
    ripple: {
      opacity: 0,
      position: 'absolute'
    },

    /* Styles applied to the internal `Ripple` components `rippleVisible` class. */
    rippleVisible: {
      opacity: 0.3,
      transform: 'scale(1)',
      animation: "$enter ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },

    /* Styles applied to the internal `Ripple` components `ripplePulsate` class. */
    ripplePulsate: {
      animationDuration: "".concat(theme.transitions.duration.shorter, "ms")
    },

    /* Styles applied to the internal `Ripple` components `child` class. */
    child: {
      opacity: 1,
      display: 'block',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: 'currentColor'
    },

    /* Styles applied to the internal `Ripple` components `childLeaving` class. */
    childLeaving: {
      opacity: 0,
      animation: "$exit ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },

    /* Styles applied to the internal `Ripple` components `childPulsate` class. */
    childPulsate: {
      position: 'absolute',
      left: 0,
      top: 0,
      animation: "$pulsate 2500ms ".concat(theme.transitions.easing.easeInOut, " 200ms infinite")
    },
    '@keyframes enter': {
      '0%': {
        transform: 'scale(0)',
        opacity: 0.1
      },
      '100%': {
        transform: 'scale(1)',
        opacity: 0.3
      }
    },
    '@keyframes exit': {
      '0%': {
        opacity: 1
      },
      '100%': {
        opacity: 0
      }
    },
    '@keyframes pulsate': {
      '0%': {
        transform: 'scale(1)'
      },
      '50%': {
        transform: 'scale(0.92)'
      },
      '100%': {
        transform: 'scale(1)'
      }
    }
  };
};
/**
 * @ignore - internal component.
 *
 * TODO v5: Make private
 */

var TouchRipple = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function TouchRipple(props, ref) {
  var _props$center = props.center,
      centerProp = _props$center === void 0 ? false : _props$center,
      classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["center", "classes", "className"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"]([]),
      ripples = _React$useState[0],
      setRipples = _React$useState[1];

  var nextKey = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](0);
  var rippleCallback = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]); // Used to filter out mouse emulated events on mobile.

  var ignoringMouseDown = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](false); // We use a timer in order to only show the ripples for touch "click" like events.
  // We don't want to display the ripple for touch scroll events.

  var startTimer = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null); // This is the hook called once the previous timeout is ready.

  var startTimerCommit = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  var container = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    return function () {
      clearTimeout(startTimer.current);
    };
  }, []);
  var startCommit = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function (params) {
    var pulsate = params.pulsate,
        rippleX = params.rippleX,
        rippleY = params.rippleY,
        rippleSize = params.rippleSize,
        cb = params.cb;
    setRipples(function (oldRipples) {
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(oldRipples), [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_Ripple__WEBPACK_IMPORTED_MODULE_8__["default"], {
        key: nextKey.current,
        classes: classes,
        timeout: DURATION,
        pulsate: pulsate,
        rippleX: rippleX,
        rippleY: rippleY,
        rippleSize: rippleSize
      })]);
    });
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  var start = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function () {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var cb = arguments.length > 2 ? arguments[2] : undefined;
    var _options$pulsate = options.pulsate,
        pulsate = _options$pulsate === void 0 ? false : _options$pulsate,
        _options$center = options.center,
        center = _options$center === void 0 ? centerProp || options.pulsate : _options$center,
        _options$fakeElement = options.fakeElement,
        fakeElement = _options$fakeElement === void 0 ? false : _options$fakeElement;

    if (event.type === 'mousedown' && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }

    if (event.type === 'touchstart') {
      ignoringMouseDown.current = true;
    }

    var element = fakeElement ? null : container.current;
    var rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    }; // Get the size of the ripple

    var rippleX;
    var rippleY;
    var rippleSize;

    if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      var _ref = event.touches ? event.touches[0] : event,
          clientX = _ref.clientX,
          clientY = _ref.clientY;

      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }

    if (center) {
      rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3); // For some reason the animation is broken on Mobile Chrome if the size if even.

      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
    } // Touche devices


    if (event.touches) {
      // check that this isn't another touchstart due to multitouch
      // otherwise we will only clear a single timer when unmounting while two
      // are running
      if (startTimerCommit.current === null) {
        // Prepare the ripple effect.
        startTimerCommit.current = function () {
          startCommit({
            pulsate: pulsate,
            rippleX: rippleX,
            rippleY: rippleY,
            rippleSize: rippleSize,
            cb: cb
          });
        }; // Delay the execution of the ripple effect.


        startTimer.current = setTimeout(function () {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
      }
    } else {
      startCommit({
        pulsate: pulsate,
        rippleX: rippleX,
        rippleY: rippleY,
        rippleSize: rippleSize,
        cb: cb
      });
    }
  }, [centerProp, startCommit]);
  var pulsate = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function () {
    start({}, {
      pulsate: true
    });
  }, [start]);
  var stop = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function (event, cb) {
    clearTimeout(startTimer.current); // The touch interaction occurs too quickly.
    // We still want to show ripple effect.

    if (event.type === 'touchend' && startTimerCommit.current) {
      event.persist();
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.current = setTimeout(function () {
        stop(event, cb);
      });
      return;
    }

    startTimerCommit.current = null;
    setRipples(function (oldRipples) {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }

      return oldRipples;
    });
    rippleCallback.current = cb;
  }, []);
  react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"](ref, function () {
    return {
      pulsate: pulsate,
      start: start,
      stop: stop
    };
  }, [pulsate, start, stop]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.root, className),
    ref: container
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_transition_group__WEBPACK_IMPORTED_MODULE_5__["TransitionGroup"], {
    component: null,
    exit: true
  }, ripples));
});
 true ? TouchRipple.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  flip: false,
  name: 'MuiTouchRipple'
})( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["memo"](TouchRipple)));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ButtonBase/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ButtonBase/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ButtonBase__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Paper/Paper.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Paper/Paper.js ***!
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");







var styles = function styles(theme) {
  var elevations = {};
  theme.shadows.forEach(function (shadow, index) {
    elevations["elevation".concat(index)] = {
      boxShadow: shadow
    };
  });
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    /* Styles applied to the root element. */
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      transition: theme.transitions.create('box-shadow')
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      border: "1px solid ".concat(theme.palette.divider)
    }
  }, elevations);
};
var Paper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Paper(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$square = props.square,
      square = _props$square === void 0 ? false : _props$square,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 1 : _props$elevation,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'elevation' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["classes", "className", "component", "square", "elevation", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, variant === 'outlined' ? classes.outlined : classes["elevation".concat(elevation)], !square && classes.rounded),
    ref: ref
  }, other));
});
 true ? Paper.propTypes = {
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
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   */
  elevation: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, function (props) {
    var classes = props.classes,
        elevation = props.elevation; // in case `withStyles` fails to inject we don't need this warning

    if (classes === undefined) {
      return null;
    }

    if (elevation != null && classes["elevation".concat(elevation)] === undefined) {
      return new Error("Material-UI: This elevation `".concat(elevation, "` is not implemented."));
    }

    return null;
  }),

  /**
   * If `true`, rounded corners are disabled.
   */
  square: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['elevation', 'outlined'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiPaper'
})(Paper));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Paper/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Paper/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Paper__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "./node_modules/@material-ui/core/esm/Tab/Tab.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tab/Tab.js ***!
  \*******************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _utils_unsupportedProp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/unsupportedProp */ "./node_modules/@material-ui/core/esm/utils/unsupportedProp.js");










var styles = function styles(theme) {
  var _extends2;

  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.typography.button, (_extends2 = {
      maxWidth: 264,
      minWidth: 72,
      position: 'relative',
      boxSizing: 'border-box',
      minHeight: 48,
      flexShrink: 0,
      padding: '6px 12px'
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_extends2, theme.breakpoints.up('sm'), {
      padding: '6px 24px'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_extends2, "overflow", 'hidden'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_extends2, "whiteSpace", 'normal'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_extends2, "textAlign", 'center'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_extends2, theme.breakpoints.up('sm'), {
      minWidth: 160
    }), _extends2)),

    /* Styles applied to the root element if both `icon` and `label` are provided. */
    labelIcon: {
      minHeight: 72,
      paddingTop: 9,
      '& $wrapper > *:first-child': {
        marginBottom: 6
      }
    },

    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="inherit"`. */
    textColorInherit: {
      color: 'inherit',
      opacity: 0.7,
      '&$selected': {
        opacity: 1
      },
      '&$disabled': {
        opacity: 0.5
      }
    },

    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="primary"`. */
    textColorPrimary: {
      color: theme.palette.text.secondary,
      '&$selected': {
        color: theme.palette.primary.main
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    },

    /* Styles applied to the root element if the parent [`Tabs`](/api/tabs/) has `textColor="secondary"`. */
    textColorSecondary: {
      color: theme.palette.text.secondary,
      '&$selected': {
        color: theme.palette.secondary.main
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    },

    /* Pseudo-class applied to the root element if `selected={true}` (controlled by the Tabs component). */
    selected: {},

    /* Pseudo-class applied to the root element if `disabled={true}` (controlled by the Tabs component). */
    disabled: {},

    /* Styles applied to the root element if `fullWidth={true}` (controlled by the Tabs component). */
    fullWidth: {
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 0,
      maxWidth: 'none'
    },

    /* Styles applied to the root element if `wrapped={true}`. */
    wrapped: {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 1.5
    },

    /* Styles applied to the `icon` and `label`'s wrapper element. */
    wrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flexDirection: 'column'
    }
  };
};
var Tab = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Tab(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      fullWidth = props.fullWidth,
      icon = props.icon,
      indicator = props.indicator,
      label = props.label,
      onChange = props.onChange,
      onClick = props.onClick,
      onFocus = props.onFocus,
      selected = props.selected,
      selectionFollowsFocus = props.selectionFollowsFocus,
      _props$textColor = props.textColor,
      textColor = _props$textColor === void 0 ? 'inherit' : _props$textColor,
      value = props.value,
      _props$wrapped = props.wrapped,
      wrapped = _props$wrapped === void 0 ? false : _props$wrapped,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["classes", "className", "disabled", "disableFocusRipple", "fullWidth", "icon", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped"]);

  var handleClick = function handleClick(event) {
    if (onChange) {
      onChange(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleFocus = function handleFocus(event) {
    if (selectionFollowsFocus && !selected && onChange) {
      onChange(event, value);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_ButtonBase__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    focusRipple: !disableFocusRipple,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, classes["textColor".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__["default"])(textColor))], className, disabled && classes.disabled, selected && classes.selected, label && icon && classes.labelIcon, fullWidth && classes.fullWidth, wrapped && classes.wrapped),
    ref: ref,
    role: "tab",
    "aria-selected": selected,
    disabled: disabled,
    onClick: handleClick,
    onFocus: handleFocus,
    tabIndex: selected ? 0 : -1
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", {
    className: classes.wrapper
  }, icon, label), indicator);
});
 true ? Tab.propTypes = {
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: _utils_unsupportedProp__WEBPACK_IMPORTED_MODULE_9__["default"],

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * If `true`, the tab will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   */
  disableFocusRipple: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The icon element.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * @ignore
   * For server-side rendering consideration, we let the selected tab
   * render the indicator.
   */
  indicator: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * The label element.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * @ignore
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
  selected: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  selectionFollowsFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  textColor: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['secondary', 'primary', 'inherit']),

  /**
   * You can provide your own value. Otherwise, we fallback to the child position index.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * Tab labels appear in a single row.
   * They can use a second line if needed.
   */
  wrapped: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiTab'
})(Tab));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tab/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tab/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tab */ "./node_modules/@material-ui/core/esm/Tab/Tab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Tab__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TabScrollButton/TabScrollButton.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TabScrollButton/TabScrollButton.js ***!
  \*******************************************************************************/
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
/* harmony import */ var _internal_svg_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/svg-icons/KeyboardArrowLeft */ "./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowLeft.js");
/* harmony import */ var _internal_svg_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/svg-icons/KeyboardArrowRight */ "./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowRight.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");



/* eslint-disable jsx-a11y/aria-role */







var styles = {
  /* Styles applied to the root element. */
  root: {
    width: 40,
    flexShrink: 0,
    opacity: 0.8,
    '&$disabled': {
      opacity: 0
    }
  },

  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {
    width: '100%',
    height: 40,
    '& svg': {
      transform: 'rotate(90deg)'
    }
  },

  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {}
};

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_svg_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5__["default"], {
  fontSize: "small"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_svg_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6__["default"], {
  fontSize: "small"
});

var TabScrollButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TabScrollButton(props, ref) {
  var classes = props.classes,
      classNameProp = props.className,
      direction = props.direction,
      orientation = props.orientation,
      disabled = props.disabled,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "direction", "orientation", "disabled"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ButtonBase__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    component: "div",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classNameProp, disabled && classes.disabled, orientation === 'vertical' && classes.vertical),
    ref: ref,
    role: null,
    tabIndex: null
  }, other), direction === 'left' ? _ref : _ref2);
});
 true ? TabScrollButton.propTypes = {
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
   * Which direction should the button indicate?
   */
  direction: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'right']).isRequired,

  /**
   * If `true`, the element will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The tabs orientation (layout flow direction).
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['horizontal', 'vertical']).isRequired
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiTabScrollButton'
})(TabScrollButton));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TabScrollButton/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TabScrollButton/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabScrollButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TabScrollButton */ "./node_modules/@material-ui/core/esm/TabScrollButton/TabScrollButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TabScrollButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tabs/ScrollbarSize.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tabs/ScrollbarSize.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollbarSize; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");





var styles = {
  width: 99,
  height: 99,
  position: 'absolute',
  top: -9999,
  overflow: 'scroll'
};
/**
 * @ignore - internal component.
 * The component originates from https://github.com/STORIS/react-scrollbar-size.
 * It has been moved into the core in order to minimize the bundle size.
 */

function ScrollbarSize(props) {
  var onChange = props.onChange,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["onChange"]);

  var scrollbarHeight = react__WEBPACK_IMPORTED_MODULE_2__["useRef"]();
  var nodeRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);

  var setMeasurements = function setMeasurements() {
    scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
  };

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    var handleResize = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
      var prevHeight = scrollbarHeight.current;
      setMeasurements();

      if (prevHeight !== scrollbarHeight.current) {
        onChange(scrollbarHeight.current);
      }
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [onChange]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    setMeasurements();
    onChange(scrollbarHeight.current);
  }, [onChange]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    style: styles,
    ref: nodeRef
  }, other));
}
 true ? ScrollbarSize.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
} : undefined;

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tabs/TabIndicator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tabs/TabIndicator.js ***!
  \*****************************************************************/
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
    root: {
      position: 'absolute',
      height: 2,
      bottom: 0,
      width: '100%',
      transition: theme.transitions.create()
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.main
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main
    },
    vertical: {
      height: '100%',
      width: 2,
      right: 0
    }
  };
};
/**
 * @ignore - internal component.
 */

var TabIndicator = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TabIndicator(props, ref) {
  var classes = props.classes,
      className = props.className,
      color = props.color,
      orientation = props.orientation,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "color", "orientation"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color))], className, orientation === 'vertical' && classes.vertical),
    ref: ref
  }, other));
});
 true ? TabIndicator.propTypes = {
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
   * @ignore
   * The color of the tab indicator.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']).isRequired,

  /**
   * The tabs orientation (layout flow direction).
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['horizontal', 'vertical']).isRequired
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'PrivateTabIndicator'
})(TabIndicator));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tabs/Tabs.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tabs/Tabs.js ***!
  \*********************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");
/* harmony import */ var _utils_ownerWindow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/ownerWindow */ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js");
/* harmony import */ var _utils_scrollLeft__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/scrollLeft */ "./node_modules/@material-ui/core/esm/utils/scrollLeft.js");
/* harmony import */ var _internal_animate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../internal/animate */ "./node_modules/@material-ui/core/esm/internal/animate.js");
/* harmony import */ var _ScrollbarSize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ScrollbarSize */ "./node_modules/@material-ui/core/esm/Tabs/ScrollbarSize.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _TabIndicator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TabIndicator */ "./node_modules/@material-ui/core/esm/Tabs/TabIndicator.js");
/* harmony import */ var _TabScrollButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../TabScrollButton */ "./node_modules/@material-ui/core/esm/TabScrollButton/index.js");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");


















var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      overflow: 'hidden',
      minHeight: 48,
      WebkitOverflowScrolling: 'touch',
      // Add iOS momentum scrolling.
      display: 'flex'
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      flexDirection: 'column'
    },

    /* Styles applied to the flex container element. */
    flexContainer: {
      display: 'flex'
    },

    /* Styles applied to the flex container element if `orientation="vertical"`. */
    flexContainerVertical: {
      flexDirection: 'column'
    },

    /* Styles applied to the flex container element if `centered={true}` & `!variant="scrollable"`. */
    centered: {
      justifyContent: 'center'
    },

    /* Styles applied to the tablist element. */
    scroller: {
      position: 'relative',
      display: 'inline-block',
      flex: '1 1 auto',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the tablist element if `!variant="scrollable"`. */
    fixed: {
      overflowX: 'hidden',
      width: '100%'
    },

    /* Styles applied to the tablist element if `variant="scrollable"`. */
    scrollable: {
      overflowX: 'scroll',
      // Hide dimensionless scrollbar on MacOS
      scrollbarWidth: 'none',
      // Firefox
      '&::-webkit-scrollbar': {
        display: 'none' // Safari + Chrome

      }
    },

    /* Styles applied to the `ScrollButtonComponent` component. */
    scrollButtons: {},

    /* Styles applied to the `ScrollButtonComponent` component if `scrollButtons="auto"` or scrollButtons="desktop"`. */
    scrollButtonsDesktop: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.breakpoints.down('xs'), {
      display: 'none'
    }),

    /* Styles applied to the `TabIndicator` component. */
    indicator: {}
  };
};
var Tabs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Tabs(props, ref) {
  var ariaLabel = props['aria-label'],
      ariaLabelledBy = props['aria-labelledby'],
      action = props.action,
      _props$centered = props.centered,
      centered = _props$centered === void 0 ? false : _props$centered,
      childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$indicatorColor = props.indicatorColor,
      indicatorColor = _props$indicatorColor === void 0 ? 'secondary' : _props$indicatorColor,
      onChange = props.onChange,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      _props$ScrollButtonCo = props.ScrollButtonComponent,
      ScrollButtonComponent = _props$ScrollButtonCo === void 0 ? _TabScrollButton__WEBPACK_IMPORTED_MODULE_15__["default"] : _props$ScrollButtonCo,
      _props$scrollButtons = props.scrollButtons,
      scrollButtons = _props$scrollButtons === void 0 ? 'auto' : _props$scrollButtons,
      selectionFollowsFocus = props.selectionFollowsFocus,
      _props$TabIndicatorPr = props.TabIndicatorProps,
      TabIndicatorProps = _props$TabIndicatorPr === void 0 ? {} : _props$TabIndicatorPr,
      TabScrollButtonProps = props.TabScrollButtonProps,
      _props$textColor = props.textColor,
      textColor = _props$textColor === void 0 ? 'inherit' : _props$textColor,
      value = props.value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["aria-label", "aria-labelledby", "action", "centered", "children", "classes", "className", "component", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant"]);

  var theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_17__["default"])();
  var scrollable = variant === 'scrollable';
  var isRtl = theme.direction === 'rtl';
  var vertical = orientation === 'vertical';
  var scrollStart = vertical ? 'scrollTop' : 'scrollLeft';
  var start = vertical ? 'top' : 'left';
  var end = vertical ? 'bottom' : 'right';
  var clientSize = vertical ? 'clientHeight' : 'clientWidth';
  var size = vertical ? 'height' : 'width';

  if (true) {
    if (centered && scrollable) {
      console.error('Material-UI: You can not use the `centered={true}` and `variant="scrollable"` properties ' + 'at the same time on a `Tabs` component.');
    }
  }

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"](false),
      mounted = _React$useState[0],
      setMounted = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_3__["useState"]({}),
      indicatorStyle = _React$useState2[0],
      setIndicatorStyle = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__["useState"]({
    start: false,
    end: false
  }),
      displayScroll = _React$useState3[0],
      setDisplayScroll = _React$useState3[1];

  var _React$useState4 = react__WEBPACK_IMPORTED_MODULE_3__["useState"]({
    overflow: 'hidden',
    marginBottom: null
  }),
      scrollerStyle = _React$useState4[0],
      setScrollerStyle = _React$useState4[1];

  var valueToIndex = new Map();
  var tabsRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  var tabListRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);

  var getTabsMeta = function getTabsMeta() {
    var tabsNode = tabsRef.current;
    var tabsMeta;

    if (tabsNode) {
      var rect = tabsNode.getBoundingClientRect(); // create a new object with ClientRect class props + scrollLeft

      tabsMeta = {
        clientWidth: tabsNode.clientWidth,
        scrollLeft: tabsNode.scrollLeft,
        scrollTop: tabsNode.scrollTop,
        scrollLeftNormalized: Object(_utils_scrollLeft__WEBPACK_IMPORTED_MODULE_10__["getNormalizedScrollLeft"])(tabsNode, theme.direction),
        scrollWidth: tabsNode.scrollWidth,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right
      };
    }

    var tabMeta;

    if (tabsNode && value !== false) {
      var _children = tabListRef.current.children;

      if (_children.length > 0) {
        var tab = _children[valueToIndex.get(value)];

        if (true) {
          if (!tab) {
            console.error(["Material-UI: The value provided to the Tabs component is invalid.", "None of the Tabs' children match with `".concat(value, "`."), valueToIndex.keys ? "You can provide one of the following values: ".concat(Array.from(valueToIndex.keys()).join(', '), ".") : null].join('\n'));
          }
        }

        tabMeta = tab ? tab.getBoundingClientRect() : null;
      }
    }

    return {
      tabsMeta: tabsMeta,
      tabMeta: tabMeta
    };
  };

  var updateIndicatorState = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_16__["default"])(function () {
    var _newIndicatorStyle;

    var _getTabsMeta = getTabsMeta(),
        tabsMeta = _getTabsMeta.tabsMeta,
        tabMeta = _getTabsMeta.tabMeta;

    var startValue = 0;

    if (tabMeta && tabsMeta) {
      if (vertical) {
        startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
      } else {
        var correction = isRtl ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth : tabsMeta.scrollLeft;
        startValue = tabMeta.left - tabsMeta.left + correction;
      }
    }

    var newIndicatorStyle = (_newIndicatorStyle = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_newIndicatorStyle, start, startValue), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_newIndicatorStyle, size, tabMeta ? tabMeta[size] : 0), _newIndicatorStyle);

    if (isNaN(indicatorStyle[start]) || isNaN(indicatorStyle[size])) {
      setIndicatorStyle(newIndicatorStyle);
    } else {
      var dStart = Math.abs(indicatorStyle[start] - newIndicatorStyle[start]);
      var dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);

      if (dStart >= 1 || dSize >= 1) {
        setIndicatorStyle(newIndicatorStyle);
      }
    }
  });

  var scroll = function scroll(scrollValue) {
    Object(_internal_animate__WEBPACK_IMPORTED_MODULE_11__["default"])(scrollStart, tabsRef.current, scrollValue);
  };

  var moveTabsScroll = function moveTabsScroll(delta) {
    var scrollValue = tabsRef.current[scrollStart];

    if (vertical) {
      scrollValue += delta;
    } else {
      scrollValue += delta * (isRtl ? -1 : 1); // Fix for Edge

      scrollValue *= isRtl && Object(_utils_scrollLeft__WEBPACK_IMPORTED_MODULE_10__["detectScrollType"])() === 'reverse' ? -1 : 1;
    }

    scroll(scrollValue);
  };

  var handleStartScrollClick = function handleStartScrollClick() {
    moveTabsScroll(-tabsRef.current[clientSize]);
  };

  var handleEndScrollClick = function handleEndScrollClick() {
    moveTabsScroll(tabsRef.current[clientSize]);
  };

  var handleScrollbarSizeChange = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function (scrollbarHeight) {
    setScrollerStyle({
      overflow: null,
      marginBottom: -scrollbarHeight
    });
  }, []);

  var getConditionalElements = function getConditionalElements() {
    var conditionalElements = {};
    conditionalElements.scrollbarSizeListener = scrollable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_ScrollbarSize__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: classes.scrollable,
      onChange: handleScrollbarSizeChange
    }) : null;
    var scrollButtonsActive = displayScroll.start || displayScroll.end;
    var showScrollButtons = scrollable && (scrollButtons === 'auto' && scrollButtonsActive || scrollButtons === 'desktop' || scrollButtons === 'on');
    conditionalElements.scrollButtonStart = showScrollButtons ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](ScrollButtonComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      orientation: orientation,
      direction: isRtl ? 'right' : 'left',
      onClick: handleStartScrollClick,
      disabled: !displayScroll.start,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.scrollButtons, scrollButtons !== 'on' && classes.scrollButtonsDesktop)
    }, TabScrollButtonProps)) : null;
    conditionalElements.scrollButtonEnd = showScrollButtons ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](ScrollButtonComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      orientation: orientation,
      direction: isRtl ? 'left' : 'right',
      onClick: handleEndScrollClick,
      disabled: !displayScroll.end,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.scrollButtons, scrollButtons !== 'on' && classes.scrollButtonsDesktop)
    }, TabScrollButtonProps)) : null;
    return conditionalElements;
  };

  var scrollSelectedIntoView = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_16__["default"])(function () {
    var _getTabsMeta2 = getTabsMeta(),
        tabsMeta = _getTabsMeta2.tabsMeta,
        tabMeta = _getTabsMeta2.tabMeta;

    if (!tabMeta || !tabsMeta) {
      return;
    }

    if (tabMeta[start] < tabsMeta[start]) {
      // left side of button is out of view
      var nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
      scroll(nextScrollStart);
    } else if (tabMeta[end] > tabsMeta[end]) {
      // right side of button is out of view
      var _nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);

      scroll(_nextScrollStart);
    }
  });
  var updateScrollButtonState = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_16__["default"])(function () {
    if (scrollable && scrollButtons !== 'off') {
      var _tabsRef$current = tabsRef.current,
          scrollTop = _tabsRef$current.scrollTop,
          scrollHeight = _tabsRef$current.scrollHeight,
          clientHeight = _tabsRef$current.clientHeight,
          scrollWidth = _tabsRef$current.scrollWidth,
          clientWidth = _tabsRef$current.clientWidth;
      var showStartScroll;
      var showEndScroll;

      if (vertical) {
        showStartScroll = scrollTop > 1;
        showEndScroll = scrollTop < scrollHeight - clientHeight - 1;
      } else {
        var scrollLeft = Object(_utils_scrollLeft__WEBPACK_IMPORTED_MODULE_10__["getNormalizedScrollLeft"])(tabsRef.current, theme.direction); // use 1 for the potential rounding error with browser zooms.

        showStartScroll = isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
        showEndScroll = !isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
      }

      if (showStartScroll !== displayScroll.start || showEndScroll !== displayScroll.end) {
        setDisplayScroll({
          start: showStartScroll,
          end: showEndScroll
        });
      }
    }
  });
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    var handleResize = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
      updateIndicatorState();
      updateScrollButtonState();
    });
    var win = Object(_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_9__["default"])(tabsRef.current);
    win.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      win.removeEventListener('resize', handleResize);
    };
  }, [updateIndicatorState, updateScrollButtonState]);
  var handleTabsScroll = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_8__["default"])(function () {
    updateScrollButtonState();
  }));
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    return function () {
      handleTabsScroll.clear();
    };
  }, [handleTabsScroll]);
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    setMounted(true);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    updateIndicatorState();
    updateScrollButtonState();
  });
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    scrollSelectedIntoView();
  }, [scrollSelectedIntoView, indicatorStyle]);
  react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"](action, function () {
    return {
      updateIndicator: updateIndicatorState,
      updateScrollButtons: updateScrollButtonState
    };
  }, [updateIndicatorState, updateScrollButtonState]);
  var indicator = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_TabIndicator__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.indicator,
    orientation: orientation,
    color: indicatorColor
  }, TabIndicatorProps, {
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, indicatorStyle, TabIndicatorProps.style)
  }));
  var childIndex = 0;
  var children = react__WEBPACK_IMPORTED_MODULE_3__["Children"].map(childrenProp, function (child) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["isValidElement"](child)) {
      return null;
    }

    if (true) {
      if (Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isFragment"])(child)) {
        console.error(["Material-UI: The Tabs component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    var childValue = child.props.value === undefined ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    var selected = childValue === value;
    childIndex += 1;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"](child, {
      fullWidth: variant === 'fullWidth',
      indicator: selected && !mounted && indicator,
      selected: selected,
      selectionFollowsFocus: selectionFollowsFocus,
      onChange: onChange,
      textColor: textColor,
      value: childValue
    });
  });

  var handleKeyDown = function handleKeyDown(event) {
    var target = event.target; // Keyboard navigation assumes that [role="tab"] are siblings
    // though we might warn in the future about nested, interactive elements
    // as a a11y violation

    var role = target.getAttribute('role');

    if (role !== 'tab') {
      return;
    }

    var newFocusTarget = null;
    var previousItemKey = orientation !== "vertical" ? 'ArrowLeft' : 'ArrowUp';
    var nextItemKey = orientation !== "vertical" ? 'ArrowRight' : 'ArrowDown';

    if (orientation !== "vertical" && theme.direction === 'rtl') {
      // swap previousItemKey with nextItemKey
      previousItemKey = 'ArrowRight';
      nextItemKey = 'ArrowLeft';
    }

    switch (event.key) {
      case previousItemKey:
        newFocusTarget = target.previousElementSibling || tabListRef.current.lastChild;
        break;

      case nextItemKey:
        newFocusTarget = target.nextElementSibling || tabListRef.current.firstChild;
        break;

      case 'Home':
        newFocusTarget = tabListRef.current.firstChild;
        break;

      case 'End':
        newFocusTarget = tabListRef.current.lastChild;
        break;

      default:
        break;
    }

    if (newFocusTarget !== null) {
      newFocusTarget.focus();
      event.preventDefault();
    }
  };

  var conditionalElements = getConditionalElements();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.root, className, vertical && classes.vertical),
    ref: ref
  }, other), conditionalElements.scrollButtonStart, conditionalElements.scrollbarSizeListener, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.scroller, scrollable ? classes.scrollable : classes.fixed),
    style: scrollerStyle,
    ref: tabsRef,
    onScroll: handleTabsScroll
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.flexContainer, vertical && classes.flexContainerVertical, centered && !scrollable && classes.centered),
    onKeyDown: handleKeyDown,
    ref: tabListRef,
    role: "tablist"
  }, children), mounted && indicator), conditionalElements.scrollButtonEnd);
});
 true ? Tabs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It supports two actions: `updateIndicator()` and `updateScrollButtons()`
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: _material_ui_utils__WEBPACK_IMPORTED_MODULE_7__["refType"],

  /**
   * The label for the Tabs as a string.
   */
  'aria-label': prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * An id or list of ids separated by a space that label the Tabs.
   */
  'aria-labelledby': prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * If `true`, the tabs will be centered.
   * This property is intended for large views.
   */
  centered: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * Determines the color of the indicator.
   */
  indicatorColor: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['primary', 'secondary']),

  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback
   * @param {any} value We default to the index of the child (number)
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * The tabs orientation (layout flow direction).
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['horizontal', 'vertical']),

  /**
   * The component used to render the scroll buttons.
   */
  ScrollButtonComponent: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.elementType,

  /**
   * Determine behavior of scroll buttons when tabs are set to scroll:
   *
   * - `auto` will only present them when not all the items are visible.
   * - `desktop` will only present them on medium and larger viewports.
   * - `on` will always present them.
   * - `off` will never present them.
   */
  scrollButtons: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['auto', 'desktop', 'off', 'on']),

  /**
   * If `true` the selected tab changes on focus. Otherwise it only
   * changes on activation.
   */
  selectionFollowsFocus: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * Props applied to the tab indicator element.
   */
  TabIndicatorProps: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * Props applied to the [`TabScrollButton`](/api/tab-scroll-button/) element.
   */
  TabScrollButtonProps: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * Determines the color of the `Tab`.
   */
  textColor: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['inherit', 'primary', 'secondary']),

  /**
   * The value of the currently selected `Tab`.
   * If you don't want any selected `Tab`, you can set this property to `false`.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,

  /**
   * Determines additional display behavior of the tabs:
   *
   *  - `scrollable` will invoke scrolling properties and allow for horizontally
   *  scrolling (or swiping) of the tab bar.
   *  -`fullWidth` will make the tabs grow to use all the available space,
   *  which should be used for small views, like on mobile.
   *  - `standard` will render the default state.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['fullWidth', 'scrollable', 'standard'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_13__["default"])(styles, {
  name: 'MuiTabs'
})(Tabs));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tabs/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tabs/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs */ "./node_modules/@material-ui/core/esm/Tabs/Tabs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Tabs__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Typography/Typography.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Typography/Typography.js ***!
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
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      margin: 0
    },

    /* Styles applied to the root element if `variant="body2"`. */
    body2: theme.typography.body2,

    /* Styles applied to the root element if `variant="body1"`. */
    body1: theme.typography.body1,

    /* Styles applied to the root element if `variant="caption"`. */
    caption: theme.typography.caption,

    /* Styles applied to the root element if `variant="button"`. */
    button: theme.typography.button,

    /* Styles applied to the root element if `variant="h1"`. */
    h1: theme.typography.h1,

    /* Styles applied to the root element if `variant="h2"`. */
    h2: theme.typography.h2,

    /* Styles applied to the root element if `variant="h3"`. */
    h3: theme.typography.h3,

    /* Styles applied to the root element if `variant="h4"`. */
    h4: theme.typography.h4,

    /* Styles applied to the root element if `variant="h5"`. */
    h5: theme.typography.h5,

    /* Styles applied to the root element if `variant="h6"`. */
    h6: theme.typography.h6,

    /* Styles applied to the root element if `variant="subtitle1"`. */
    subtitle1: theme.typography.subtitle1,

    /* Styles applied to the root element if `variant="subtitle2"`. */
    subtitle2: theme.typography.subtitle2,

    /* Styles applied to the root element if `variant="overline"`. */
    overline: theme.typography.overline,

    /* Styles applied to the root element if `variant="srOnly"`. Only accessible to screen readers. */
    srOnly: {
      position: 'absolute',
      height: 1,
      width: 1,
      overflow: 'hidden'
    },

    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {
      textAlign: 'left'
    },

    /* Styles applied to the root element if `align="center"`. */
    alignCenter: {
      textAlign: 'center'
    },

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: 'right'
    },

    /* Styles applied to the root element if `align="justify"`. */
    alignJustify: {
      textAlign: 'justify'
    },

    /* Styles applied to the root element if `nowrap={true}`. */
    noWrap: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the root element if `gutterBottom={true}`. */
    gutterBottom: {
      marginBottom: '0.35em'
    },

    /* Styles applied to the root element if `paragraph={true}`. */
    paragraph: {
      marginBottom: 16
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `color="textPrimary"`. */
    colorTextPrimary: {
      color: theme.palette.text.primary
    },

    /* Styles applied to the root element if `color="textSecondary"`. */
    colorTextSecondary: {
      color: theme.palette.text.secondary
    },

    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      color: theme.palette.error.main
    },

    /* Styles applied to the root element if `display="inline"`. */
    displayInline: {
      display: 'inline'
    },

    /* Styles applied to the root element if `display="block"`. */
    displayBlock: {
      display: 'block'
    }
  };
};
var defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p'
};
var Typography = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Typography(props, ref) {
  var _props$align = props.align,
      align = _props$align === void 0 ? 'inherit' : _props$align,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'initial' : _props$color,
      component = props.component,
      _props$display = props.display,
      display = _props$display === void 0 ? 'initial' : _props$display,
      _props$gutterBottom = props.gutterBottom,
      gutterBottom = _props$gutterBottom === void 0 ? false : _props$gutterBottom,
      _props$noWrap = props.noWrap,
      noWrap = _props$noWrap === void 0 ? false : _props$noWrap,
      _props$paragraph = props.paragraph,
      paragraph = _props$paragraph === void 0 ? false : _props$paragraph,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'body1' : _props$variant,
      _props$variantMapping = props.variantMapping,
      variantMapping = _props$variantMapping === void 0 ? defaultVariantMapping : _props$variantMapping,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]);

  var Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, variant !== 'inherit' && classes[variant], color !== 'initial' && classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color))], noWrap && classes.noWrap, gutterBottom && classes.gutterBottom, paragraph && classes.paragraph, align !== 'inherit' && classes["align".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(align))], display !== 'initial' && classes["display".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(display))]),
    ref: ref
  }, other));
});
 true ? Typography.propTypes = {
  /**
   * Set the text-align on the component.
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['inherit', 'left', 'center', 'right', 'justify']),

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
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * Overrides the behavior of the `variantMapping` prop.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * Controls the display type
   */
  display: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['initial', 'block', 'inline']),

  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   */
  noWrap: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Applies the theme typography styles.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline', 'srOnly', 'inherit']),

  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   */
  variantMapping: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiTypography'
})(Typography));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Typography/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Typography/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Typography__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/animate.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/animate.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return animate; });
function easeInOutSin(time) {
  return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
}

function animate(property, element, to) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var cb = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
  var _options$ease = options.ease,
      ease = _options$ease === void 0 ? easeInOutSin : _options$ease,
      _options$duration = options.duration,
      duration = _options$duration === void 0 ? 300 : _options$duration;
  var start = null;
  var from = element[property];
  var cancelled = false;

  var cancel = function cancel() {
    cancelled = true;
  };

  var step = function step(timestamp) {
    if (cancelled) {
      cb(new Error('Animation cancelled'));
      return;
    }

    if (start === null) {
      start = timestamp;
    }

    var time = Math.min(1, (timestamp - start) / duration);
    element[property] = ease(time) * (to - from) + from;

    if (time >= 1) {
      requestAnimationFrame(function () {
        cb(null);
      });
      return;
    }

    requestAnimationFrame(step);
  };

  if (from === to) {
    cb(new Error('Element already at target position'));
    return cancel;
  }

  requestAnimationFrame(step);
  return cancel;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowLeft.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowLeft.js ***!
  \************************************************************************************/
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
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), 'KeyboardArrowLeft'));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowRight.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/KeyboardArrowRight.js ***!
  \*************************************************************************************/
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
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), 'KeyboardArrowRight'));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/capitalize.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/capitalize.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return capitalize; });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word a the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error( true ? "Material-UI: capitalize(string) expects a string argument." : undefined);
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
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

/***/ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deprecatedPropType; });
function deprecatedPropType(validator, reason) {
  if (false) {}

  return function (props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (typeof props[propName] !== 'undefined') {
      return new Error("The ".concat(location, " `").concat(propFullNameSafe, "` of ") + "`".concat(componentNameSafe, "` is deprecated. ").concat(reason));
    }

    return null;
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/index.js ***!
  \***********************************************************/
/*! exports provided: capitalize, createChainedFunction, createSvgIcon, debounce, deprecatedPropType, isMuiElement, ownerDocument, ownerWindow, requirePropFactory, setRef, unsupportedProp, useControlled, useEventCallback, useForkRef, unstable_useId, useIsFocusVisible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return _capitalize__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _createChainedFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createChainedFunction */ "./node_modules/@material-ui/core/esm/utils/createChainedFunction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createChainedFunction", function() { return _createChainedFunction__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _createSvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSvgIcon", function() { return _createSvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _debounce__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _deprecatedPropType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deprecatedPropType */ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deprecatedPropType", function() { return _deprecatedPropType__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _isMuiElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isMuiElement */ "./node_modules/@material-ui/core/esm/utils/isMuiElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMuiElement", function() { return _isMuiElement__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ownerDocument", function() { return _ownerDocument__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _ownerWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ownerWindow */ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ownerWindow", function() { return _ownerWindow__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _requirePropFactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./requirePropFactory */ "./node_modules/@material-ui/core/esm/utils/requirePropFactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requirePropFactory", function() { return _requirePropFactory__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _setRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRef", function() { return _setRef__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _unsupportedProp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./unsupportedProp */ "./node_modules/@material-ui/core/esm/utils/unsupportedProp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsupportedProp", function() { return _unsupportedProp__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _useControlled__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useControlled */ "./node_modules/@material-ui/core/esm/utils/useControlled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useControlled", function() { return _useControlled__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _useEventCallback__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEventCallback", function() { return _useEventCallback__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _useForkRef__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useForkRef", function() { return _useForkRef__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _unstable_useId__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./unstable_useId */ "./node_modules/@material-ui/core/esm/utils/unstable_useId.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_useId", function() { return _unstable_useId__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _useIsFocusVisible__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./useIsFocusVisible */ "./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsFocusVisible", function() { return _useIsFocusVisible__WEBPACK_IMPORTED_MODULE_15__["default"]; });














 // eslint-disable-next-line camelcase




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

/***/ "./node_modules/@material-ui/core/esm/utils/requirePropFactory.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/requirePropFactory.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return requirePropFactory; });
function requirePropFactory(componentNameInError) {
  if (false) {}

  var requireProp = function requireProp(requiredProp) {
    return function (props, propName, componentName, location, propFullName) {
      var propFullNameSafe = propFullName || propName;

      if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
        return new Error("The prop `".concat(propFullNameSafe, "` of ") + "`".concat(componentNameInError, "` must be used on `").concat(requiredProp, "`."));
      }

      return null;
    };
  };

  return requireProp;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/scrollLeft.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/scrollLeft.js ***!
  \****************************************************************/
/*! exports provided: detectScrollType, getNormalizedScrollLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectScrollType", function() { return detectScrollType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNormalizedScrollLeft", function() { return getNormalizedScrollLeft; });
// Source from https://github.com/alitaheri/normalize-scroll-left
var cachedType;
/**
 * Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
 *
 * Types of scrollLeft, assuming scrollWidth=100 and direction is rtl.
 *
 * Type             | <- Most Left | Most Right -> | Initial
 * ---------------- | ------------ | ------------- | -------
 * default          | 0            | 100           | 100
 * negative (spec*) | -100         | 0             | 0
 * reverse          | 100          | 0             | 0
 *
 * Edge 85: default
 * Safari 14: negative
 * Chrome 85: negative
 * Firefox 81: negative
 * IE 11: reverse
 *
 * spec* https://drafts.csswg.org/cssom-view/#dom-window-scroll
 */

function detectScrollType() {
  if (cachedType) {
    return cachedType;
  }

  var dummy = document.createElement('div');
  var container = document.createElement('div');
  container.style.width = '10px';
  container.style.height = '1px';
  dummy.appendChild(container);
  dummy.dir = 'rtl';
  dummy.style.fontSize = '14px';
  dummy.style.width = '4px';
  dummy.style.height = '1px';
  dummy.style.position = 'absolute';
  dummy.style.top = '-1000px';
  dummy.style.overflow = 'scroll';
  document.body.appendChild(dummy);
  cachedType = 'reverse';

  if (dummy.scrollLeft > 0) {
    cachedType = 'default';
  } else {
    dummy.scrollLeft = 1;

    if (dummy.scrollLeft === 0) {
      cachedType = 'negative';
    }
  }

  document.body.removeChild(dummy);
  return cachedType;
} // Based on https://stackoverflow.com/a/24394376

function getNormalizedScrollLeft(element, direction) {
  var scrollLeft = element.scrollLeft; // Perform the calculations only when direction is rtl to avoid messing up the ltr bahavior

  if (direction !== 'rtl') {
    return scrollLeft;
  }

  var type = detectScrollType();

  switch (type) {
    case 'negative':
      return element.scrollWidth - element.clientWidth + scrollLeft;

    case 'reverse':
      return element.scrollWidth - element.clientWidth - scrollLeft;

    default:
      return scrollLeft;
  }
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/setRef.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/setRef.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setRef; });
// TODO v5: consider to make it private
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/unstable_useId.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/unstable_useId.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useId; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Private module reserved for @material-ui/x packages.
 */

function useId(idOverride) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](idOverride),
      defaultId = _React$useState[0],
      setDefaultId = _React$useState[1];

  var id = idOverride || defaultId;
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the random value for client-side rendering only.
      // We can't use it server-side.
      setDefaultId("mui-".concat(Math.round(Math.random() * 1e5)));
    }
  }, [defaultId]);
  return id;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/unsupportedProp.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/unsupportedProp.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return unsupportedProp; });
function unsupportedProp(props, propName, componentName, location, propFullName) {
  if (false) {}

  var propFullNameSafe = propFullName || propName;

  if (typeof props[propName] !== 'undefined') {
    return new Error("The prop `".concat(propFullNameSafe, "` is not supported. Please remove it."));
  }

  return null;
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

/***/ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/useEventCallback.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useEventCallback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];
/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 *
 * @param {function} fn
 */

function useEventCallback(fn) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](fn);
  useEnhancedEffect(function () {
    ref.current = fn;
  });
  return react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function () {
    return (0, ref.current).apply(void 0, arguments);
  }, []);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/useForkRef.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/useForkRef.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useForkRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");


function useForkRef(refA, refB) {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior
   */
  return react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    if (refA == null && refB == null) {
      return null;
    }

    return function (refValue) {
      Object(_setRef__WEBPACK_IMPORTED_MODULE_1__["default"])(refA, refValue);
      Object(_setRef__WEBPACK_IMPORTED_MODULE_1__["default"])(refB, refValue);
    };
  }, [refA, refB]);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js ***!
  \***********************************************************************/
/*! exports provided: teardown, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teardown", function() { return teardown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useIsFocusVisible; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
// based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js


var hadKeyboardEvent = true;
var hadFocusVisibleRecently = false;
var hadFocusVisibleRecentlyTimeout = null;
var inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  'datetime-local': true
};
/**
 * Computes whether the given element should automatically trigger the
 * `focus-visible` class being added, i.e. whether it should always match
 * `:focus-visible` when focused.
 * @param {Element} node
 * @return {boolean}
 */

function focusTriggersKeyboardModality(node) {
  var type = node.type,
      tagName = node.tagName;

  if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }

  if (tagName === 'TEXTAREA' && !node.readOnly) {
    return true;
  }

  if (node.isContentEditable) {
    return true;
  }

  return false;
}
/**
 * Keep track of our keyboard modality state with `hadKeyboardEvent`.
 * If the most recent user interaction was via the keyboard;
 * and the key press did not include a meta, alt/option, or control key;
 * then the modality is keyboard. Otherwise, the modality is not keyboard.
 * @param {KeyboardEvent} event
 */


function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }

  hadKeyboardEvent = true;
}
/**
 * If at any point a user clicks with a pointing device, ensure that we change
 * the modality away from keyboard.
 * This avoids the situation where a user presses a key on an already focused
 * element, and then clicks on a different element, focusing it with a
 * pointing device, while we still think we're in keyboard modality.
 */


function handlePointerDown() {
  hadKeyboardEvent = false;
}

function handleVisibilityChange() {
  if (this.visibilityState === 'hidden') {
    // If the tab becomes active again, the browser will handle calling focus
    // on the element (Safari actually calls it twice).
    // If this tab change caused a blur on an element with focus-visible,
    // re-apply the class when the user switches back to the tab.
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}

function prepare(doc) {
  doc.addEventListener('keydown', handleKeyDown, true);
  doc.addEventListener('mousedown', handlePointerDown, true);
  doc.addEventListener('pointerdown', handlePointerDown, true);
  doc.addEventListener('touchstart', handlePointerDown, true);
  doc.addEventListener('visibilitychange', handleVisibilityChange, true);
}

function teardown(doc) {
  doc.removeEventListener('keydown', handleKeyDown, true);
  doc.removeEventListener('mousedown', handlePointerDown, true);
  doc.removeEventListener('pointerdown', handlePointerDown, true);
  doc.removeEventListener('touchstart', handlePointerDown, true);
  doc.removeEventListener('visibilitychange', handleVisibilityChange, true);
}

function isFocusVisible(event) {
  var target = event.target;

  try {
    return target.matches(':focus-visible');
  } catch (error) {} // browsers not implementing :focus-visible will throw a SyntaxError
  // we use our own heuristic for those browsers
  // rethrow might be better if it's not the expected error but do we really
  // want to crash if focus-visible malfunctioned?
  // no need for validFocusTarget check. the user does that by attaching it to
  // focusable events only


  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
/**
 * Should be called if a blur event is fired on a focus-visible element
 */


function handleBlurVisible() {
  // To detect a tab/window switch, we look for a blur event followed
  // rapidly by a visibility change.
  // If we don't see a visibility change within 100ms, it's probably a
  // regular focus change.
  hadFocusVisibleRecently = true;
  window.clearTimeout(hadFocusVisibleRecentlyTimeout);
  hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
    hadFocusVisibleRecently = false;
  }, 100);
}

function useIsFocusVisible() {
  var ref = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (instance) {
    var node = react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"](instance);

    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"](isFocusVisible);
  }

  return {
    isFocusVisible: isFocusVisible,
    onBlurVisible: handleBlurVisible,
    ref: ref
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/icons/Favorite.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/icons/Favorite.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
}), 'Favorite');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Help.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Help.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
}), 'Help');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/PersonPin.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/icons/PersonPin.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
}), 'PersonPin');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Phone.js":
/*!**************************************************!*\
  !*** ./node_modules/@material-ui/icons/Phone.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
}), 'Phone');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/ShoppingBasket.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/icons/ShoppingBasket.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
}), 'ShoppingBasket');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/ThumbDown.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/icons/ThumbDown.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"
}), 'ThumbDown');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/ThumbUp.js":
/*!****************************************************!*\
  !*** ./node_modules/@material-ui/icons/ThumbUp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"
}), 'ThumbUp');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/utils/createSvgIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/icons/utils/createSvgIcon.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _utils.createSvgIcon;
  }
});

var _utils = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");

/***/ }),

/***/ "./node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addClass; });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!Object(_hasClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasClass; });
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeClass; });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    ;
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/CSSTransition.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__["default"])(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__["default"])(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["classNames"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Transition__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Transition__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__["classNamesShape"],

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
}) : undefined;
/* harmony default export */ __webpack_exports__["default"] = (CSSTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/ReplaceTransition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/ReplaceTransition.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");






/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;
    var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);

    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in"]);

    var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroup__WEBPACK_IMPORTED_MODULE_5__["default"], props, inProp ? react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

ReplaceTransition.propTypes =  true ? {
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  children: function children(props, propName) {
    if (react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (ReplaceTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/SwitchTransition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/SwitchTransition.js ***!
  \*********************************************************************/
/*! exports provided: modes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modes", function() { return modes; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");


var _leaveRenders, _enterRenders;






function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(oldChildren) && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */


var modes = {
  out: 'out-in',
  in: 'in-out'
};

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
  var current = _ref.current,
      changeState = _ref.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"], null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true
  })];
}, _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child.
 *
 * **Note**: If you want the animation to happen simultaneously
 * (that is, to have the old child removed and a new child inserted **at the same time**),
 * you should use
 * [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group)
 * instead.
 *
 * ```jsx
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <CSSTransition
 *        key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade'
 *      >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </CSSTransition>
 *    </SwitchTransition>
 *  );
 * }
 * ```
 *
 * ```css
 * .fade-enter{
 *    opacity: 0;
 * }
 * .fade-exit{
 *    opacity: 1;
 * }
 * .fade-enter-active{
 *    opacity: 1;
 * }
 * .fade-exit-active{
 *    opacity: 0;
 * }
 * .fade-enter-active,
 * .fade-exit-active{
 *    transition: opacity 500ms;
 * }
 * ```
 */

var SwitchTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"],
      current: null
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }

    if (state.status === _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"] && props.mode === modes.in) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]
      };
    }

    return {
      current: react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(props.children, {
        in: true
      })
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        mode = _this$props.mode,
        _this$state = this.state,
        status = _this$state.status,
        current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status
    };
    var component;

    switch (status) {
      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]:
        component = enterRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]:
        component = leaveRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"]:
        component = current;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

SwitchTransition.propTypes =  true ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired])
} : undefined;
SwitchTransition.defaultProps = {
  mode: modes.out
};
/* harmony default export */ __webpack_exports__["default"] = (SwitchTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/Transition.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/Transition.js ***!
  \***************************************************************/
/*! exports provided: UNMOUNTED, EXITED, ENTERING, ENTERED, EXITING, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNMOUNTED", function() { return UNMOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITED", function() { return EXITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERING", function() { return ENTERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERED", function() { return ENTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITING", function() { return EXITING; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(children), childProps))
    );
  };

  return Transition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"];
Transition.propTypes =  true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    current: typeof Element === 'undefined' ? prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(Element)
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__["timeoutsShape"];
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
} : undefined; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ __webpack_exports__["default"] = (Transition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroup.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroup.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/esm/utils/ChildMapping.js");









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getInitialChildMapping"])(nextProps, handleExited) : Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getNextChildMapping"])(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getChildMapping"])(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
      value: contextValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
} : undefined;
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (TransitionGroup);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/react-transition-group/esm/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/config.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  disabled: false
});

/***/ }),

/***/ "./node_modules/react-transition-group/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/index.js ***!
  \**********************************************************/
/*! exports provided: CSSTransition, ReplaceTransition, SwitchTransition, TransitionGroup, Transition, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSTransition", function() { return _CSSTransition__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/esm/ReplaceTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaceTransition", function() { return _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchTransition */ "./node_modules/react-transition-group/esm/SwitchTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchTransition", function() { return _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionGroup", function() { return _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return _Transition__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _config__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/ChildMapping.js ***!
  \***********************************************************************/
/*! exports provided: getChildMapping, mergeChildMappings, getInitialChildMapping, getNextChildMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildMapping", function() { return getChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeChildMappings", function() { return mergeChildMappings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialChildMapping", function() { return getInitialChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextChildMapping", function() { return getNextChildMapping; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        in: false
      });
    } else if (hasNext && hasPrev && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/PropTypes.js ***!
  \********************************************************************/
/*! exports provided: timeoutsShape, classNamesShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutsShape", function() { return timeoutsShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNamesShape", function() { return classNamesShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  appear: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
}).isRequired]) : undefined;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
})]) : undefined;

/***/ }),

/***/ "./pages/admin/reservation/[id].js":
/*!*****************************************!*\
  !*** ./pages/admin/reservation/[id].js ***!
  \*****************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/layout/AdminHeader */ "./components/layout/AdminHeader.js");
/* harmony import */ var _components_auth_Admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/auth/Admin */ "./components/auth/Admin.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Phone */ "./node_modules/@material-ui/icons/Phone.js");
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_PersonPin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/PersonPin */ "./node_modules/@material-ui/icons/PersonPin.js");
/* harmony import */ var _material_ui_icons_PersonPin__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PersonPin__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Help */ "./node_modules/@material-ui/icons/Help.js");
/* harmony import */ var _material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Help__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/ShoppingBasket */ "./node_modules/@material-ui/icons/ShoppingBasket.js");
/* harmony import */ var _material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingBasket__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_ThumbDown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/ThumbDown */ "./node_modules/@material-ui/icons/ThumbDown.js");
/* harmony import */ var _material_ui_icons_ThumbDown__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ThumbDown__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_ThumbUp__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/ThumbUp */ "./node_modules/@material-ui/icons/ThumbUp.js");
/* harmony import */ var _material_ui_icons_ThumbUp__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ThumbUp__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\admin\\reservation\\[id].js",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


















var ReservationId = function ReservationId(_ref) {
  var reservation = _ref.reservation,
      router = _ref.router,
      children = _ref.children,
      value = _ref.value,
      index = _ref.index,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["reservation", "router", "children", "value", "index"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }
  }, __jsx(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("h2", {
    style: {
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 6
    }
  }, "Consultation de la r\xE9servation #"), __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    role: "tabpanel",
    hidden: value !== index,
    id: "scrollable-prevent-tabpanel-".concat(index),
    "aria-labelledby": "scrollable-prevent-tab-".concat(index)
  }, other, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 6
    }
  }), value === index && __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_19__["default"], {
    p: 3,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, children))))));
};

_c = ReservationId;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(ReservationId));

var _c, _c2;

$RefreshReg$(_c, "ReservationId");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9BcHBCYXIvQXBwQmFyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0FwcEJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Cb3gvQm94LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0JveC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9CdXR0b25CYXNlL0J1dHRvbkJhc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vQnV0dG9uQmFzZS9SaXBwbGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vQnV0dG9uQmFzZS9Ub3VjaFJpcHBsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9CdXR0b25CYXNlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1BhcGVyL1BhcGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1BhcGVyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1N2Z0ljb24vU3ZnSWNvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9TdmdJY29uL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1RhYi9UYWIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVGFiL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1RhYlNjcm9sbEJ1dHRvbi9UYWJTY3JvbGxCdXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVGFiU2Nyb2xsQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1RhYnMvU2Nyb2xsYmFyU2l6ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UYWJzL1RhYkluZGljYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UYWJzL1RhYnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVGFicy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9UeXBvZ3JhcGh5L1R5cG9ncmFwaHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVHlwb2dyYXBoeS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9pbnRlcm5hbC9hbmltYXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2ludGVybmFsL3N2Zy1pY29ucy9LZXlib2FyZEFycm93TGVmdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9pbnRlcm5hbC9zdmctaWNvbnMvS2V5Ym9hcmRBcnJvd1JpZ2h0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL2NhcGl0YWxpemUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL2NyZWF0ZVN2Z0ljb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvZGVwcmVjYXRlZFByb3BUeXBlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL2lzTXVpRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy9vd25lckRvY3VtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL293bmVyV2luZG93LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL3JlcXVpcmVQcm9wRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy9zY3JvbGxMZWZ0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL3NldFJlZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy91bnN0YWJsZV91c2VJZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy91bnN1cHBvcnRlZFByb3AuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvdXNlQ29udHJvbGxlZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy91c2VFdmVudENhbGxiYWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL3VzZUZvcmtSZWYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvdXNlSXNGb2N1c1Zpc2libGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvSGVscC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9QZXJzb25QaW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvUGhvbmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvU2hvcHBpbmdCYXNrZXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvVGh1bWJEb3duLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL1RodW1iVXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvdXRpbHMvY3JlYXRlU3ZnSWNvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9hZGRDbGFzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9oYXNDbGFzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RvbS1oZWxwZXJzL2VzbS9yZW1vdmVDbGFzcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL0NTU1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9SZXBsYWNlVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL1N3aXRjaFRyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2VzbS9UcmFuc2l0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vVHJhbnNpdGlvbkdyb3VwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vVHJhbnNpdGlvbkdyb3VwQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvZXNtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vdXRpbHMvQ2hpbGRNYXBwaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC9lc20vdXRpbHMvUHJvcFR5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi9yZXNlcnZhdGlvbi8uanMiXSwibmFtZXMiOlsiUmVzZXJ2YXRpb25JZCIsInJlc2VydmF0aW9uIiwicm91dGVyIiwiY2hpbGRyZW4iLCJ2YWx1ZSIsImluZGV4Iiwib3RoZXIiLCJjb2xvciIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEQ7QUFDZ0M7QUFDM0Q7QUFDSTtBQUNYO0FBQ3NCO0FBQ0Q7QUFDaEI7QUFDdEI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNB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VUFBTSxFQUFFSCxLQUFLLEtBQUtDLEtBRm5CO0FBR0MsTUFBRSx3Q0FBaUNBLEtBQWpDLENBSEg7QUFJQyx3REFBMkNBLEtBQTNDO0FBSkQsS0FLS0MsS0FMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTUVGLEtBQUssS0FBS0MsS0FBVixJQUNBLE1BQUMsOERBQUQ7QUFBSyxLQUFDLEVBQUUsQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFGLFFBQWIsQ0FERCxDQVBGLENBTkQsQ0FERCxDQURELENBREQ7QUFnREEsQ0F4REQ7O0tBQU1ILGE7O0FBc0VTLHFFQUFBUSw4REFBVSxDQUFDUixhQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3Jlc2VydmF0aW9uL1tpZF0uNjBkMDk3NGQwOTc4OTVjMzg0MzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJy4uL3V0aWxzL2NhcGl0YWxpemUnO1xuaW1wb3J0IFBhcGVyIGZyb20gJy4uL1BhcGVyJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHZhciBiYWNrZ3JvdW5kQ29sb3JEZWZhdWx0ID0gdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF0gOiB0aGVtZS5wYWxldHRlLmdyZXlbOTAwXTtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgLy8gUHJldmVudCBwYWRkaW5nIGlzc3VlIHdpdGggdGhlIE1vZGFsIGFuZCBmaXhlZCBwb3NpdGlvbmVkIEFwcEJhci5cbiAgICAgIHpJbmRleDogdGhlbWUuekluZGV4LmFwcEJhcixcbiAgICAgIGZsZXhTaHJpbms6IDBcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgcG9zaXRpb249XCJmaXhlZFwiYC4gKi9cbiAgICBwb3NpdGlvbkZpeGVkOiB7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6ICdhdXRvJyxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgJ0BtZWRpYSBwcmludCc6IHtcbiAgICAgICAgLy8gUHJldmVudCB0aGUgYXBwIGJhciB0byBiZSB2aXNpYmxlIG9uIGVhY2ggcHJpbnRlZCBwYWdlLlxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBwb3NpdGlvbj1cImFic29sdXRlXCJgLiAqL1xuICAgIHBvc2l0aW9uQWJzb2x1dGU6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogJ2F1dG8nLFxuICAgICAgcmlnaHQ6IDBcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgcG9zaXRpb249XCJzdGlja3lcImAuICovXG4gICAgcG9zaXRpb25TdGlja3k6IHtcbiAgICAgIC8vIOKaoO+4jyBzdGlja3kgaXMgbm90IHN1cHBvcnRlZCBieSBJRSAxMS5cbiAgICAgIHBvc2l0aW9uOiAnc3RpY2t5JyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6ICdhdXRvJyxcbiAgICAgIHJpZ2h0OiAwXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHBvc2l0aW9uPVwic3RhdGljXCJgLiAqL1xuICAgIHBvc2l0aW9uU3RhdGljOiB7XG4gICAgICBwb3NpdGlvbjogJ3N0YXRpYydcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgcG9zaXRpb249XCJyZWxhdGl2ZVwiYC4gKi9cbiAgICBwb3NpdGlvblJlbGF0aXZlOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cImRlZmF1bHRcImAuICovXG4gICAgY29sb3JEZWZhdWx0OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvckRlZmF1bHQsXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5nZXRDb250cmFzdFRleHQoYmFja2dyb3VuZENvbG9yRGVmYXVsdClcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJwcmltYXJ5XCJgLiAqL1xuICAgIGNvbG9yUHJpbWFyeToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuY29udHJhc3RUZXh0XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwic2Vjb25kYXJ5XCJgLiAqL1xuICAgIGNvbG9yU2Vjb25kYXJ5OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuY29udHJhc3RUZXh0XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwiaW5oZXJpdFwiYC4gKi9cbiAgICBjb2xvckluaGVyaXQ6IHtcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJ0cmFuc3BhcmVudFwiYC4gKi9cbiAgICBjb2xvclRyYW5zcGFyZW50OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBjb2xvcjogJ2luaGVyaXQnXG4gICAgfVxuICB9O1xufTtcbnZhciBBcHBCYXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBBcHBCYXIocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGNvbG9yID0gX3Byb3BzJGNvbG9yID09PSB2b2lkIDAgPyAncHJpbWFyeScgOiBfcHJvcHMkY29sb3IsXG4gICAgICBfcHJvcHMkcG9zaXRpb24gPSBwcm9wcy5wb3NpdGlvbixcbiAgICAgIHBvc2l0aW9uID0gX3Byb3BzJHBvc2l0aW9uID09PSB2b2lkIDAgPyAnZml4ZWQnIDogX3Byb3BzJHBvc2l0aW9uLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb2xvclwiLCBcInBvc2l0aW9uXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUGFwZXIsIF9leHRlbmRzKHtcbiAgICBzcXVhcmU6IHRydWUsXG4gICAgY29tcG9uZW50OiBcImhlYWRlclwiLFxuICAgIGVsZXZhdGlvbjogNCxcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc2VzW1wicG9zaXRpb25cIi5jb25jYXQoY2FwaXRhbGl6ZShwb3NpdGlvbikpXSwgY2xhc3Nlc1tcImNvbG9yXCIuY29uY2F0KGNhcGl0YWxpemUoY29sb3IpKV0sIGNsYXNzTmFtZSwgcG9zaXRpb24gPT09ICdmaXhlZCcgJiYgJ211aS1maXhlZCcpLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IEFwcEJhci5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnaW5oZXJpdCcsICdwcmltYXJ5JywgJ3NlY29uZGFyeScsICd0cmFuc3BhcmVudCddKSxcblxuICAvKipcbiAgICogVGhlIHBvc2l0aW9uaW5nIHR5cGUuIFRoZSBiZWhhdmlvciBvZiB0aGUgZGlmZmVyZW50IG9wdGlvbnMgaXMgZGVzY3JpYmVkXG4gICAqIFtpbiB0aGUgTUROIHdlYiBkb2NzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0xlYXJuL0NTUy9DU1NfbGF5b3V0L1Bvc2l0aW9uaW5nKS5cbiAgICogTm90ZTogYHN0aWNreWAgaXMgbm90IHVuaXZlcnNhbGx5IHN1cHBvcnRlZCBhbmQgd2lsbCBmYWxsIGJhY2sgdG8gYHN0YXRpY2Agd2hlbiB1bmF2YWlsYWJsZS5cbiAgICovXG4gIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoWydhYnNvbHV0ZScsICdmaXhlZCcsICdyZWxhdGl2ZScsICdzdGF0aWMnLCAnc3RpY2t5J10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUFwcEJhcidcbn0pKEFwcEJhcik7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQXBwQmFyJzsiLCJpbXBvcnQgeyBib3JkZXJzLCBjb21wb3NlLCBkaXNwbGF5LCBmbGV4Ym94LCBncmlkLCBwYWxldHRlLCBwb3NpdGlvbnMsIHNoYWRvd3MsIHNpemluZywgc3BhY2luZywgdHlwb2dyYXBoeSwgY3NzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N5c3RlbSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJy4uL3N0eWxlcy9zdHlsZWQnO1xuZXhwb3J0IHZhciBzdHlsZUZ1bmN0aW9uID0gY3NzKGNvbXBvc2UoYm9yZGVycywgZGlzcGxheSwgZmxleGJveCwgZ3JpZCwgcG9zaXRpb25zLCBwYWxldHRlLCBzaGFkb3dzLCBzaXppbmcsIHNwYWNpbmcsIHR5cG9ncmFwaHkpKTtcbi8qKlxuICogQGlnbm9yZSAtIGRvIG5vdCBkb2N1bWVudC5cbiAqL1xuXG52YXIgQm94ID0gc3R5bGVkKCdkaXYnKShzdHlsZUZ1bmN0aW9uLCB7XG4gIG5hbWU6ICdNdWlCb3gnXG59KTtcbmV4cG9ydCBkZWZhdWx0IEJveDsiLCJleHBvcnQgeyBkZWZhdWx0LCBzdHlsZUZ1bmN0aW9uIH0gZnJvbSAnLi9Cb3gnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBlbGVtZW50VHlwZUFjY2VwdGluZ1JlZiwgcmVmVHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgdXNlRm9ya1JlZiBmcm9tICcuLi91dGlscy91c2VGb3JrUmVmJztcbmltcG9ydCB1c2VFdmVudENhbGxiYWNrIGZyb20gJy4uL3V0aWxzL3VzZUV2ZW50Q2FsbGJhY2snO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHVzZUlzRm9jdXNWaXNpYmxlIGZyb20gJy4uL3V0aWxzL3VzZUlzRm9jdXNWaXNpYmxlJztcbmltcG9ydCBUb3VjaFJpcHBsZSBmcm9tICcuL1RvdWNoUmlwcGxlJztcbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIC8vIFJlc2V0IGRlZmF1bHQgdmFsdWVcbiAgICAvLyBXZSBkaXNhYmxlIHRoZSBmb2N1cyByaW5nIGZvciBtb3VzZSwgdG91Y2ggYW5kIGtleWJvYXJkIHVzZXJzLlxuICAgIG91dGxpbmU6IDAsXG4gICAgYm9yZGVyOiAwLFxuICAgIG1hcmdpbjogMCxcbiAgICAvLyBSZW1vdmUgdGhlIG1hcmdpbiBpbiBTYWZhcmlcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICAvLyBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gRmlyZWZveFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAnLW1vei1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgIC8vIFJlc2V0XG4gICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICAvLyBSZXNldFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgLy8gU28gd2UgdGFrZSBwcmVjZWRlbnQgb3ZlciB0aGUgc3R5bGUgb2YgYSBuYXRpdmUgPGEgLz4gZWxlbWVudC5cbiAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICcmOjotbW96LWZvY3VzLWlubmVyJzoge1xuICAgICAgYm9yZGVyU3R5bGU6ICdub25lJyAvLyBSZW1vdmUgRmlyZWZveCBkb3R0ZWQgb3V0bGluZS5cblxuICAgIH0sXG4gICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAvLyBEaXNhYmxlIGxpbmsgaW50ZXJhY3Rpb25zXG4gICAgICBjdXJzb3I6ICdkZWZhdWx0J1xuICAgIH0sXG4gICAgJ0BtZWRpYSBwcmludCc6IHtcbiAgICAgIGNvbG9yQWRqdXN0OiAnZXhhY3QnXG4gICAgfVxuICB9LFxuXG4gIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVkPXt0cnVlfWAuICovXG4gIGRpc2FibGVkOiB7fSxcblxuICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGtleWJvYXJkIGZvY3VzZWQuICovXG4gIGZvY3VzVmlzaWJsZToge31cbn07XG4vKipcbiAqIGBCdXR0b25CYXNlYCBjb250YWlucyBhcyBmZXcgc3R5bGVzIGFzIHBvc3NpYmxlLlxuICogSXQgYWltcyB0byBiZSBhIHNpbXBsZSBidWlsZGluZyBibG9jayBmb3IgY3JlYXRpbmcgYSBidXR0b24uXG4gKiBJdCBjb250YWlucyBhIGxvYWQgb2Ygc3R5bGUgcmVzZXQgYW5kIHNvbWUgZm9jdXMvcmlwcGxlIGxvZ2ljLlxuICovXG5cbnZhciBCdXR0b25CYXNlID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gQnV0dG9uQmFzZShwcm9wcywgcmVmKSB7XG4gIHZhciBhY3Rpb24gPSBwcm9wcy5hY3Rpb24sXG4gICAgICBidXR0b25SZWZQcm9wID0gcHJvcHMuYnV0dG9uUmVmLFxuICAgICAgX3Byb3BzJGNlbnRlclJpcHBsZSA9IHByb3BzLmNlbnRlclJpcHBsZSxcbiAgICAgIGNlbnRlclJpcHBsZSA9IF9wcm9wcyRjZW50ZXJSaXBwbGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGNlbnRlclJpcHBsZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBjb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAnYnV0dG9uJyA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBfcHJvcHMkZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkID0gX3Byb3BzJGRpc2FibGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlZCxcbiAgICAgIF9wcm9wcyRkaXNhYmxlUmlwcGxlID0gcHJvcHMuZGlzYWJsZVJpcHBsZSxcbiAgICAgIGRpc2FibGVSaXBwbGUgPSBfcHJvcHMkZGlzYWJsZVJpcHBsZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVJpcHBsZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlVG91Y2hSaSA9IHByb3BzLmRpc2FibGVUb3VjaFJpcHBsZSxcbiAgICAgIGRpc2FibGVUb3VjaFJpcHBsZSA9IF9wcm9wcyRkaXNhYmxlVG91Y2hSaSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVRvdWNoUmksXG4gICAgICBfcHJvcHMkZm9jdXNSaXBwbGUgPSBwcm9wcy5mb2N1c1JpcHBsZSxcbiAgICAgIGZvY3VzUmlwcGxlID0gX3Byb3BzJGZvY3VzUmlwcGxlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRmb2N1c1JpcHBsZSxcbiAgICAgIGZvY3VzVmlzaWJsZUNsYXNzTmFtZSA9IHByb3BzLmZvY3VzVmlzaWJsZUNsYXNzTmFtZSxcbiAgICAgIG9uQmx1ciA9IHByb3BzLm9uQmx1cixcbiAgICAgIG9uQ2xpY2sgPSBwcm9wcy5vbkNsaWNrLFxuICAgICAgb25Gb2N1cyA9IHByb3BzLm9uRm9jdXMsXG4gICAgICBvbkZvY3VzVmlzaWJsZSA9IHByb3BzLm9uRm9jdXNWaXNpYmxlLFxuICAgICAgb25LZXlEb3duID0gcHJvcHMub25LZXlEb3duLFxuICAgICAgb25LZXlVcCA9IHByb3BzLm9uS2V5VXAsXG4gICAgICBvbk1vdXNlRG93biA9IHByb3BzLm9uTW91c2VEb3duLFxuICAgICAgb25Nb3VzZUxlYXZlID0gcHJvcHMub25Nb3VzZUxlYXZlLFxuICAgICAgb25Nb3VzZVVwID0gcHJvcHMub25Nb3VzZVVwLFxuICAgICAgb25Ub3VjaEVuZCA9IHByb3BzLm9uVG91Y2hFbmQsXG4gICAgICBvblRvdWNoTW92ZSA9IHByb3BzLm9uVG91Y2hNb3ZlLFxuICAgICAgb25Ub3VjaFN0YXJ0ID0gcHJvcHMub25Ub3VjaFN0YXJ0LFxuICAgICAgb25EcmFnTGVhdmUgPSBwcm9wcy5vbkRyYWdMZWF2ZSxcbiAgICAgIF9wcm9wcyR0YWJJbmRleCA9IHByb3BzLnRhYkluZGV4LFxuICAgICAgdGFiSW5kZXggPSBfcHJvcHMkdGFiSW5kZXggPT09IHZvaWQgMCA/IDAgOiBfcHJvcHMkdGFiSW5kZXgsXG4gICAgICBUb3VjaFJpcHBsZVByb3BzID0gcHJvcHMuVG91Y2hSaXBwbGVQcm9wcyxcbiAgICAgIF9wcm9wcyR0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgIHR5cGUgPSBfcHJvcHMkdHlwZSA9PT0gdm9pZCAwID8gJ2J1dHRvbicgOiBfcHJvcHMkdHlwZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhY3Rpb25cIiwgXCJidXR0b25SZWZcIiwgXCJjZW50ZXJSaXBwbGVcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb21wb25lbnRcIiwgXCJkaXNhYmxlZFwiLCBcImRpc2FibGVSaXBwbGVcIiwgXCJkaXNhYmxlVG91Y2hSaXBwbGVcIiwgXCJmb2N1c1JpcHBsZVwiLCBcImZvY3VzVmlzaWJsZUNsYXNzTmFtZVwiLCBcIm9uQmx1clwiLCBcIm9uQ2xpY2tcIiwgXCJvbkZvY3VzXCIsIFwib25Gb2N1c1Zpc2libGVcIiwgXCJvbktleURvd25cIiwgXCJvbktleVVwXCIsIFwib25Nb3VzZURvd25cIiwgXCJvbk1vdXNlTGVhdmVcIiwgXCJvbk1vdXNlVXBcIiwgXCJvblRvdWNoRW5kXCIsIFwib25Ub3VjaE1vdmVcIiwgXCJvblRvdWNoU3RhcnRcIiwgXCJvbkRyYWdMZWF2ZVwiLCBcInRhYkluZGV4XCIsIFwiVG91Y2hSaXBwbGVQcm9wc1wiLCBcInR5cGVcIl0pO1xuXG4gIHZhciBidXR0b25SZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgZnVuY3Rpb24gZ2V0QnV0dG9uTm9kZSgpIHtcbiAgICAvLyAjU3RyaWN0TW9kZSByZWFkeVxuICAgIHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZShidXR0b25SZWYuY3VycmVudCk7XG4gIH1cblxuICB2YXIgcmlwcGxlUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksXG4gICAgICBmb2N1c1Zpc2libGUgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRGb2N1c1Zpc2libGUgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgaWYgKGRpc2FibGVkICYmIGZvY3VzVmlzaWJsZSkge1xuICAgIHNldEZvY3VzVmlzaWJsZShmYWxzZSk7XG4gIH1cblxuICB2YXIgX3VzZUlzRm9jdXNWaXNpYmxlID0gdXNlSXNGb2N1c1Zpc2libGUoKSxcbiAgICAgIGlzRm9jdXNWaXNpYmxlID0gX3VzZUlzRm9jdXNWaXNpYmxlLmlzRm9jdXNWaXNpYmxlLFxuICAgICAgb25CbHVyVmlzaWJsZSA9IF91c2VJc0ZvY3VzVmlzaWJsZS5vbkJsdXJWaXNpYmxlLFxuICAgICAgZm9jdXNWaXNpYmxlUmVmID0gX3VzZUlzRm9jdXNWaXNpYmxlLnJlZjtcblxuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKGFjdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmb2N1c1Zpc2libGU6IGZ1bmN0aW9uIGZvY3VzVmlzaWJsZSgpIHtcbiAgICAgICAgc2V0Rm9jdXNWaXNpYmxlKHRydWUpO1xuICAgICAgICBidXR0b25SZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZm9jdXNWaXNpYmxlICYmIGZvY3VzUmlwcGxlICYmICFkaXNhYmxlUmlwcGxlKSB7XG4gICAgICByaXBwbGVSZWYuY3VycmVudC5wdWxzYXRlKCk7XG4gICAgfVxuICB9LCBbZGlzYWJsZVJpcHBsZSwgZm9jdXNSaXBwbGUsIGZvY3VzVmlzaWJsZV0pO1xuXG4gIGZ1bmN0aW9uIHVzZVJpcHBsZUhhbmRsZXIocmlwcGxlQWN0aW9uLCBldmVudENhbGxiYWNrKSB7XG4gICAgdmFyIHNraXBSaXBwbGVBY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGRpc2FibGVUb3VjaFJpcHBsZTtcbiAgICByZXR1cm4gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudENhbGxiYWNrKSB7XG4gICAgICAgIGV2ZW50Q2FsbGJhY2soZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICB2YXIgaWdub3JlID0gc2tpcFJpcHBsZUFjdGlvbjtcblxuICAgICAgaWYgKCFpZ25vcmUgJiYgcmlwcGxlUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgcmlwcGxlUmVmLmN1cnJlbnRbcmlwcGxlQWN0aW9uXShldmVudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGhhbmRsZU1vdXNlRG93biA9IHVzZVJpcHBsZUhhbmRsZXIoJ3N0YXJ0Jywgb25Nb3VzZURvd24pO1xuICB2YXIgaGFuZGxlRHJhZ0xlYXZlID0gdXNlUmlwcGxlSGFuZGxlcignc3RvcCcsIG9uRHJhZ0xlYXZlKTtcbiAgdmFyIGhhbmRsZU1vdXNlVXAgPSB1c2VSaXBwbGVIYW5kbGVyKCdzdG9wJywgb25Nb3VzZVVwKTtcbiAgdmFyIGhhbmRsZU1vdXNlTGVhdmUgPSB1c2VSaXBwbGVIYW5kbGVyKCdzdG9wJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGZvY3VzVmlzaWJsZSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAob25Nb3VzZUxlYXZlKSB7XG4gICAgICBvbk1vdXNlTGVhdmUoZXZlbnQpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBoYW5kbGVUb3VjaFN0YXJ0ID0gdXNlUmlwcGxlSGFuZGxlcignc3RhcnQnLCBvblRvdWNoU3RhcnQpO1xuICB2YXIgaGFuZGxlVG91Y2hFbmQgPSB1c2VSaXBwbGVIYW5kbGVyKCdzdG9wJywgb25Ub3VjaEVuZCk7XG4gIHZhciBoYW5kbGVUb3VjaE1vdmUgPSB1c2VSaXBwbGVIYW5kbGVyKCdzdG9wJywgb25Ub3VjaE1vdmUpO1xuICB2YXIgaGFuZGxlQmx1ciA9IHVzZVJpcHBsZUhhbmRsZXIoJ3N0b3AnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZm9jdXNWaXNpYmxlKSB7XG4gICAgICBvbkJsdXJWaXNpYmxlKGV2ZW50KTtcbiAgICAgIHNldEZvY3VzVmlzaWJsZShmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKG9uQmx1cikge1xuICAgICAgb25CbHVyKGV2ZW50KTtcbiAgICB9XG4gIH0sIGZhbHNlKTtcbiAgdmFyIGhhbmRsZUZvY3VzID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBGaXggZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvNzc2OVxuICAgIGlmICghYnV0dG9uUmVmLmN1cnJlbnQpIHtcbiAgICAgIGJ1dHRvblJlZi5jdXJyZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICB9XG5cbiAgICBpZiAoaXNGb2N1c1Zpc2libGUoZXZlbnQpKSB7XG4gICAgICBzZXRGb2N1c1Zpc2libGUodHJ1ZSk7XG5cbiAgICAgIGlmIChvbkZvY3VzVmlzaWJsZSkge1xuICAgICAgICBvbkZvY3VzVmlzaWJsZShldmVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9uRm9jdXMpIHtcbiAgICAgIG9uRm9jdXMoZXZlbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGlzTm9uTmF0aXZlQnV0dG9uID0gZnVuY3Rpb24gaXNOb25OYXRpdmVCdXR0b24oKSB7XG4gICAgdmFyIGJ1dHRvbiA9IGdldEJ1dHRvbk5vZGUoKTtcbiAgICByZXR1cm4gY29tcG9uZW50ICYmIGNvbXBvbmVudCAhPT0gJ2J1dHRvbicgJiYgIShidXR0b24udGFnTmFtZSA9PT0gJ0EnICYmIGJ1dHRvbi5ocmVmKTtcbiAgfTtcbiAgLyoqXG4gICAqIElFIDExIHNoaW0gZm9yIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9LZXlib2FyZEV2ZW50L3JlcGVhdFxuICAgKi9cblxuXG4gIHZhciBrZXlkb3duUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgdmFyIGhhbmRsZUtleURvd24gPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIENoZWNrIGlmIGtleSBpcyBhbHJlYWR5IGRvd24gdG8gYXZvaWQgcmVwZWF0cyBiZWluZyBjb3VudGVkIGFzIG11bHRpcGxlIGFjdGl2YXRpb25zXG4gICAgaWYgKGZvY3VzUmlwcGxlICYmICFrZXlkb3duUmVmLmN1cnJlbnQgJiYgZm9jdXNWaXNpYmxlICYmIHJpcHBsZVJlZi5jdXJyZW50ICYmIGV2ZW50LmtleSA9PT0gJyAnKSB7XG4gICAgICBrZXlkb3duUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgZXZlbnQucGVyc2lzdCgpO1xuICAgICAgcmlwcGxlUmVmLmN1cnJlbnQuc3RvcChldmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByaXBwbGVSZWYuY3VycmVudC5zdGFydChldmVudCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBldmVudC5jdXJyZW50VGFyZ2V0ICYmIGlzTm9uTmF0aXZlQnV0dG9uKCkgJiYgZXZlbnQua2V5ID09PSAnICcpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKG9uS2V5RG93bikge1xuICAgICAgb25LZXlEb3duKGV2ZW50KTtcbiAgICB9IC8vIEtleWJvYXJkIGFjY2Vzc2liaWxpdHkgZm9yIG5vbiBpbnRlcmFjdGl2ZSBlbGVtZW50c1xuXG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBldmVudC5jdXJyZW50VGFyZ2V0ICYmIGlzTm9uTmF0aXZlQnV0dG9uKCkgJiYgZXZlbnQua2V5ID09PSAnRW50ZXInICYmICFkaXNhYmxlZCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgICAgb25DbGljayhldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgdmFyIGhhbmRsZUtleVVwID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBjYWxsaW5nIHByZXZlbnREZWZhdWx0IGluIGtleVVwIG9uIGEgPGJ1dHRvbj4gd2lsbCBub3QgZGlzcGF0Y2ggYSBjbGljayBldmVudCBpZiBTcGFjZSBpcyBwcmVzc2VkXG4gICAgLy8gaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL2J1dHRvbi1rZXl1cC1wcmV2ZW50ZGVmYXVsdC1kbjdmMFxuICAgIGlmIChmb2N1c1JpcHBsZSAmJiBldmVudC5rZXkgPT09ICcgJyAmJiByaXBwbGVSZWYuY3VycmVudCAmJiBmb2N1c1Zpc2libGUgJiYgIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIGtleWRvd25SZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgZXZlbnQucGVyc2lzdCgpO1xuICAgICAgcmlwcGxlUmVmLmN1cnJlbnQuc3RvcChldmVudCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByaXBwbGVSZWYuY3VycmVudC5wdWxzYXRlKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChvbktleVVwKSB7XG4gICAgICBvbktleVVwKGV2ZW50KTtcbiAgICB9IC8vIEtleWJvYXJkIGFjY2Vzc2liaWxpdHkgZm9yIG5vbiBpbnRlcmFjdGl2ZSBlbGVtZW50c1xuXG5cbiAgICBpZiAob25DbGljayAmJiBldmVudC50YXJnZXQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQgJiYgaXNOb25OYXRpdmVCdXR0b24oKSAmJiBldmVudC5rZXkgPT09ICcgJyAmJiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgb25DbGljayhldmVudCk7XG4gICAgfVxuICB9KTtcbiAgdmFyIENvbXBvbmVudFByb3AgPSBjb21wb25lbnQ7XG5cbiAgaWYgKENvbXBvbmVudFByb3AgPT09ICdidXR0b24nICYmIG90aGVyLmhyZWYpIHtcbiAgICBDb21wb25lbnRQcm9wID0gJ2EnO1xuICB9XG5cbiAgdmFyIGJ1dHRvblByb3BzID0ge307XG5cbiAgaWYgKENvbXBvbmVudFByb3AgPT09ICdidXR0b24nKSB7XG4gICAgYnV0dG9uUHJvcHMudHlwZSA9IHR5cGU7XG4gICAgYnV0dG9uUHJvcHMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfSBlbHNlIHtcbiAgICBpZiAoQ29tcG9uZW50UHJvcCAhPT0gJ2EnIHx8ICFvdGhlci5ocmVmKSB7XG4gICAgICBidXR0b25Qcm9wcy5yb2xlID0gJ2J1dHRvbic7XG4gICAgfVxuXG4gICAgYnV0dG9uUHJvcHNbJ2FyaWEtZGlzYWJsZWQnXSA9IGRpc2FibGVkO1xuICB9XG5cbiAgdmFyIGhhbmRsZVVzZXJSZWYgPSB1c2VGb3JrUmVmKGJ1dHRvblJlZlByb3AsIHJlZik7XG4gIHZhciBoYW5kbGVPd25SZWYgPSB1c2VGb3JrUmVmKGZvY3VzVmlzaWJsZVJlZiwgYnV0dG9uUmVmKTtcbiAgdmFyIGhhbmRsZVJlZiA9IHVzZUZvcmtSZWYoaGFuZGxlVXNlclJlZiwgaGFuZGxlT3duUmVmKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMiA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIG1vdW50ZWRTdGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRNb3VudGVkU3RhdGUgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgc2V0TW91bnRlZFN0YXRlKHRydWUpO1xuICB9LCBbXSk7XG4gIHZhciBlbmFibGVUb3VjaFJpcHBsZSA9IG1vdW50ZWRTdGF0ZSAmJiAhZGlzYWJsZVJpcHBsZSAmJiAhZGlzYWJsZWQ7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGVuYWJsZVRvdWNoUmlwcGxlICYmICFyaXBwbGVSZWYuY3VycmVudCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IFRoZSBgY29tcG9uZW50YCBwcm9wIHByb3ZpZGVkIHRvIEJ1dHRvbkJhc2UgaXMgaW52YWxpZC4nLCAnUGxlYXNlIG1ha2Ugc3VyZSB0aGUgY2hpbGRyZW4gcHJvcCBpcyByZW5kZXJlZCBpbiB0aGlzIGN1c3RvbSBjb21wb25lbnQuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH0sIFtlbmFibGVUb3VjaFJpcHBsZV0pO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudFByb3AsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIGZvY3VzVmlzaWJsZSAmJiBbY2xhc3Nlcy5mb2N1c1Zpc2libGUsIGZvY3VzVmlzaWJsZUNsYXNzTmFtZV0sIGRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQpLFxuICAgIG9uQmx1cjogaGFuZGxlQmx1cixcbiAgICBvbkNsaWNrOiBvbkNsaWNrLFxuICAgIG9uRm9jdXM6IGhhbmRsZUZvY3VzLFxuICAgIG9uS2V5RG93bjogaGFuZGxlS2V5RG93bixcbiAgICBvbktleVVwOiBoYW5kbGVLZXlVcCxcbiAgICBvbk1vdXNlRG93bjogaGFuZGxlTW91c2VEb3duLFxuICAgIG9uTW91c2VMZWF2ZTogaGFuZGxlTW91c2VMZWF2ZSxcbiAgICBvbk1vdXNlVXA6IGhhbmRsZU1vdXNlVXAsXG4gICAgb25EcmFnTGVhdmU6IGhhbmRsZURyYWdMZWF2ZSxcbiAgICBvblRvdWNoRW5kOiBoYW5kbGVUb3VjaEVuZCxcbiAgICBvblRvdWNoTW92ZTogaGFuZGxlVG91Y2hNb3ZlLFxuICAgIG9uVG91Y2hTdGFydDogaGFuZGxlVG91Y2hTdGFydCxcbiAgICByZWY6IGhhbmRsZVJlZixcbiAgICB0YWJJbmRleDogZGlzYWJsZWQgPyAtMSA6IHRhYkluZGV4XG4gIH0sIGJ1dHRvblByb3BzLCBvdGhlciksIGNoaWxkcmVuLCBlbmFibGVUb3VjaFJpcHBsZSA/XG4gIC8qI19fUFVSRV9fKi9cblxuICAvKiBUb3VjaFJpcHBsZSBpcyBvbmx5IG5lZWRlZCBjbGllbnQtc2lkZSwgeDIgYm9vc3Qgb24gdGhlIHNlcnZlci4gKi9cbiAgUmVhY3QuY3JlYXRlRWxlbWVudChUb3VjaFJpcHBsZSwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmlwcGxlUmVmLFxuICAgIGNlbnRlcjogY2VudGVyUmlwcGxlXG4gIH0sIFRvdWNoUmlwcGxlUHJvcHMpKSA6IG51bGwpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBCdXR0b25CYXNlLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIEEgcmVmIGZvciBpbXBlcmF0aXZlIGFjdGlvbnMuXG4gICAqIEl0IGN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIGBmb2N1c1Zpc2libGUoKWAgYWN0aW9uLlxuICAgKi9cbiAgYWN0aW9uOiByZWZUeXBlLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqXG4gICAqIFVzZSB0aGF0IHByb3AgdG8gcGFzcyBhIHJlZiB0byB0aGUgbmF0aXZlIGJ1dHRvbiBjb21wb25lbnQuXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgcmVmYCBpbnN0ZWFkLlxuICAgKi9cbiAgYnV0dG9uUmVmOiByZWZUeXBlLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSByaXBwbGVzIHdpbGwgYmUgY2VudGVyZWQuXG4gICAqIFRoZXkgd29uJ3Qgc3RhcnQgYXQgdGhlIGN1cnNvciBpbnRlcmFjdGlvbiBwb3NpdGlvbi5cbiAgICovXG4gIGNlbnRlclJpcHBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IGVsZW1lbnRUeXBlQWNjZXB0aW5nUmVmLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBiYXNlIGJ1dHRvbiB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSByaXBwbGUgZWZmZWN0IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqXG4gICAqIOKaoO+4jyBXaXRob3V0IGEgcmlwcGxlIHRoZXJlIGlzIG5vIHN0eWxpbmcgZm9yIDpmb2N1cy12aXNpYmxlIGJ5IGRlZmF1bHQuIEJlIHN1cmVcbiAgICogdG8gaGlnaGxpZ2h0IHRoZSBlbGVtZW50IGJ5IGFwcGx5aW5nIHNlcGFyYXRlIHN0eWxlcyB3aXRoIHRoZSBgZm9jdXNWaXNpYmxlQ2xhc3NOYW1lYC5cbiAgICovXG4gIGRpc2FibGVSaXBwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0b3VjaCByaXBwbGUgZWZmZWN0IHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlVG91Y2hSaXBwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBiYXNlIGJ1dHRvbiB3aWxsIGhhdmUgYSBrZXlib2FyZCBmb2N1cyByaXBwbGUuXG4gICAqL1xuICBmb2N1c1JpcHBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoaXMgcHJvcCBjYW4gaGVscCBhIHBlcnNvbiBrbm93IHdoaWNoIGVsZW1lbnQgaGFzIHRoZSBrZXlib2FyZCBmb2N1cy5cbiAgICogVGhlIGNsYXNzIG5hbWUgd2lsbCBiZSBhcHBsaWVkIHdoZW4gdGhlIGVsZW1lbnQgZ2FpbiB0aGUgZm9jdXMgdGhyb3VnaCBhIGtleWJvYXJkIGludGVyYWN0aW9uLlxuICAgKiBJdCdzIGEgcG9seWZpbGwgZm9yIHRoZSBbQ1NTIDpmb2N1cy12aXNpYmxlIHNlbGVjdG9yXShodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvc2VsZWN0b3JzLTQvI3RoZS1mb2N1cy12aXNpYmxlLXBzZXVkbykuXG4gICAqIFRoZSByYXRpb25hbGUgZm9yIHVzaW5nIHRoaXMgZmVhdHVyZSBbaXMgZXhwbGFpbmVkIGhlcmVdKGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL2ZvY3VzLXZpc2libGUvYmxvYi9tYXN0ZXIvZXhwbGFpbmVyLm1kKS5cbiAgICogQSBbcG9seWZpbGwgY2FuIGJlIHVzZWRdKGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL2ZvY3VzLXZpc2libGUpIHRvIGFwcGx5IGEgYGZvY3VzLXZpc2libGVgIGNsYXNzIHRvIG90aGVyIGNvbXBvbmVudHNcbiAgICogaWYgbmVlZGVkLlxuICAgKi9cbiAgZm9jdXNWaXNpYmxlQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25EcmFnTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzIGZvY3VzZWQgd2l0aCBhIGtleWJvYXJkLlxuICAgKiBXZSB0cmlnZ2VyIGEgYG9uRm9jdXNgIGNhbGxiYWNrIHRvby5cbiAgICovXG4gIG9uRm9jdXNWaXNpYmxlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25LZXlVcDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uTW91c2VEb3duOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Nb3VzZVVwOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Ub3VjaEVuZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uVG91Y2hNb3ZlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25Ub3VjaFN0YXJ0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdGFiSW5kZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgYFRvdWNoUmlwcGxlYCBlbGVtZW50LlxuICAgKi9cbiAgVG91Y2hSaXBwbGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFsnYnV0dG9uJywgJ3Jlc2V0JywgJ3N1Ym1pdCddKSwgUHJvcFR5cGVzLnN0cmluZ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUJ1dHRvbkJhc2UnXG59KShCdXR0b25CYXNlKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgdXNlRXZlbnRDYWxsYmFjayBmcm9tICcuLi91dGlscy91c2VFdmVudENhbGxiYWNrJztcbnZhciB1c2VFbmhhbmNlZEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gUmVhY3QudXNlRWZmZWN0IDogUmVhY3QudXNlTGF5b3V0RWZmZWN0O1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbmZ1bmN0aW9uIFJpcHBsZShwcm9wcykge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBfcHJvcHMkcHVsc2F0ZSA9IHByb3BzLnB1bHNhdGUsXG4gICAgICBwdWxzYXRlID0gX3Byb3BzJHB1bHNhdGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHB1bHNhdGUsXG4gICAgICByaXBwbGVYID0gcHJvcHMucmlwcGxlWCxcbiAgICAgIHJpcHBsZVkgPSBwcm9wcy5yaXBwbGVZLFxuICAgICAgcmlwcGxlU2l6ZSA9IHByb3BzLnJpcHBsZVNpemUsXG4gICAgICBpblByb3AgPSBwcm9wcy5pbixcbiAgICAgIF9wcm9wcyRvbkV4aXRlZCA9IHByb3BzLm9uRXhpdGVkLFxuICAgICAgb25FeGl0ZWQgPSBfcHJvcHMkb25FeGl0ZWQgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICgpIHt9IDogX3Byb3BzJG9uRXhpdGVkLFxuICAgICAgdGltZW91dCA9IHByb3BzLnRpbWVvdXQ7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIGxlYXZpbmcgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRMZWF2aW5nID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciByaXBwbGVDbGFzc05hbWUgPSBjbHN4KGNsYXNzZXMucmlwcGxlLCBjbGFzc2VzLnJpcHBsZVZpc2libGUsIHB1bHNhdGUgJiYgY2xhc3Nlcy5yaXBwbGVQdWxzYXRlKTtcbiAgdmFyIHJpcHBsZVN0eWxlcyA9IHtcbiAgICB3aWR0aDogcmlwcGxlU2l6ZSxcbiAgICBoZWlnaHQ6IHJpcHBsZVNpemUsXG4gICAgdG9wOiAtKHJpcHBsZVNpemUgLyAyKSArIHJpcHBsZVksXG4gICAgbGVmdDogLShyaXBwbGVTaXplIC8gMikgKyByaXBwbGVYXG4gIH07XG4gIHZhciBjaGlsZENsYXNzTmFtZSA9IGNsc3goY2xhc3Nlcy5jaGlsZCwgbGVhdmluZyAmJiBjbGFzc2VzLmNoaWxkTGVhdmluZywgcHVsc2F0ZSAmJiBjbGFzc2VzLmNoaWxkUHVsc2F0ZSk7XG4gIHZhciBoYW5kbGVFeGl0ZWQgPSB1c2VFdmVudENhbGxiYWNrKG9uRXhpdGVkKTsgLy8gUmlwcGxlIGlzIHVzZWQgZm9yIHVzZXIgZmVlZGJhY2sgKGUuZy4gY2xpY2sgb3IgcHJlc3MpIHNvIHdlIHdhbnQgdG8gYXBwbHkgc3R5bGVzIHdpdGggdGhlIGhpZ2hlc3QgcHJpb3JpdHlcblxuICB1c2VFbmhhbmNlZEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFpblByb3ApIHtcbiAgICAgIC8vIHJlYWN0LXRyYW5zaXRpb24tZ3JvdXAjb25FeGl0XG4gICAgICBzZXRMZWF2aW5nKHRydWUpOyAvLyByZWFjdC10cmFuc2l0aW9uLWdyb3VwI29uRXhpdGVkXG5cbiAgICAgIHZhciB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGhhbmRsZUV4aXRlZCwgdGltZW91dCk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSwgW2hhbmRsZUV4aXRlZCwgaW5Qcm9wLCB0aW1lb3V0XSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogcmlwcGxlQ2xhc3NOYW1lLFxuICAgIHN0eWxlOiByaXBwbGVTdHlsZXNcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IGNoaWxkQ2xhc3NOYW1lXG4gIH0pKTtcbn1cblxucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gUmlwcGxlLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlIC0gaW5qZWN0ZWQgZnJvbSBUcmFuc2l0aW9uR3JvdXBcbiAgICovXG4gIGluOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQGlnbm9yZSAtIGluamVjdGVkIGZyb20gVHJhbnNpdGlvbkdyb3VwXG4gICAqL1xuICBvbkV4aXRlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHJpcHBsZSBwdWxzYXRlcywgdHlwaWNhbGx5IGluZGljYXRpbmcgdGhlIGtleWJvYXJkIGZvY3VzIHN0YXRlIG9mIGFuIGVsZW1lbnQuXG4gICAqL1xuICBwdWxzYXRlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRGlhbWV0ZXIgb2YgdGhlIHJpcHBsZS5cbiAgICovXG4gIHJpcHBsZVNpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIEhvcml6b250YWwgcG9zaXRpb24gb2YgdGhlIHJpcHBsZSBjZW50ZXIuXG4gICAqL1xuICByaXBwbGVYOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBWZXJ0aWNhbCBwb3NpdGlvbiBvZiB0aGUgcmlwcGxlIGNlbnRlci5cbiAgICovXG4gIHJpcHBsZVk6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIGV4aXQgZGVsYXlcbiAgICovXG4gIHRpbWVvdXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IFJpcHBsZTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFRyYW5zaXRpb25Hcm91cCB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgUmlwcGxlIGZyb20gJy4vUmlwcGxlJztcbnZhciBEVVJBVElPTiA9IDU1MDtcbmV4cG9ydCB2YXIgREVMQVlfUklQUExFID0gODA7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB6SW5kZXg6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3JkZXJSYWRpdXM6ICdpbmhlcml0J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaW50ZXJuYWwgYFJpcHBsZWAgY29tcG9uZW50cyBgcmlwcGxlYCBjbGFzcy4gKi9cbiAgICByaXBwbGU6IHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaW50ZXJuYWwgYFJpcHBsZWAgY29tcG9uZW50cyBgcmlwcGxlVmlzaWJsZWAgY2xhc3MuICovXG4gICAgcmlwcGxlVmlzaWJsZToge1xuICAgICAgb3BhY2l0eTogMC4zLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAgICAgYW5pbWF0aW9uOiBcIiRlbnRlciBcIi5jb25jYXQoRFVSQVRJT04sIFwibXMgXCIpLmNvbmNhdCh0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZUluT3V0KVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaW50ZXJuYWwgYFJpcHBsZWAgY29tcG9uZW50cyBgcmlwcGxlUHVsc2F0ZWAgY2xhc3MuICovXG4gICAgcmlwcGxlUHVsc2F0ZToge1xuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IFwiXCIuY29uY2F0KHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXIsIFwibXNcIilcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIGBSaXBwbGVgIGNvbXBvbmVudHMgYGNoaWxkYCBjbGFzcy4gKi9cbiAgICBjaGlsZDoge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnY3VycmVudENvbG9yJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaW50ZXJuYWwgYFJpcHBsZWAgY29tcG9uZW50cyBgY2hpbGRMZWF2aW5nYCBjbGFzcy4gKi9cbiAgICBjaGlsZExlYXZpbmc6IHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBhbmltYXRpb246IFwiJGV4aXQgXCIuY29uY2F0KERVUkFUSU9OLCBcIm1zIFwiKS5jb25jYXQodGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VJbk91dClcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIGBSaXBwbGVgIGNvbXBvbmVudHMgYGNoaWxkUHVsc2F0ZWAgY2xhc3MuICovXG4gICAgY2hpbGRQdWxzYXRlOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0b3A6IDAsXG4gICAgICBhbmltYXRpb246IFwiJHB1bHNhdGUgMjUwMG1zIFwiLmNvbmNhdCh0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZUluT3V0LCBcIiAyMDBtcyBpbmZpbml0ZVwiKVxuICAgIH0sXG4gICAgJ0BrZXlmcmFtZXMgZW50ZXInOiB7XG4gICAgICAnMCUnOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJyxcbiAgICAgICAgb3BhY2l0eTogMC4xXG4gICAgICB9LFxuICAgICAgJzEwMCUnOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcbiAgICAgICAgb3BhY2l0eTogMC4zXG4gICAgICB9XG4gICAgfSxcbiAgICAnQGtleWZyYW1lcyBleGl0Jzoge1xuICAgICAgJzAlJzoge1xuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9LFxuICAgICAgJzEwMCUnOiB7XG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH1cbiAgICB9LFxuICAgICdAa2V5ZnJhbWVzIHB1bHNhdGUnOiB7XG4gICAgICAnMCUnOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICAgICAgfSxcbiAgICAgICc1MCUnOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOTIpJ1xuICAgICAgfSxcbiAgICAgICcxMDAlJzoge1xuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICpcbiAqIFRPRE8gdjU6IE1ha2UgcHJpdmF0ZVxuICovXG5cbnZhciBUb3VjaFJpcHBsZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRvdWNoUmlwcGxlKHByb3BzLCByZWYpIHtcbiAgdmFyIF9wcm9wcyRjZW50ZXIgPSBwcm9wcy5jZW50ZXIsXG4gICAgICBjZW50ZXJQcm9wID0gX3Byb3BzJGNlbnRlciA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkY2VudGVyLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2VudGVyXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKFtdKSxcbiAgICAgIHJpcHBsZXMgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRSaXBwbGVzID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBuZXh0S2V5ID0gUmVhY3QudXNlUmVmKDApO1xuICB2YXIgcmlwcGxlQ2FsbGJhY2sgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHJpcHBsZUNhbGxiYWNrLmN1cnJlbnQpIHtcbiAgICAgIHJpcHBsZUNhbGxiYWNrLmN1cnJlbnQoKTtcbiAgICAgIHJpcHBsZUNhbGxiYWNrLmN1cnJlbnQgPSBudWxsO1xuICAgIH1cbiAgfSwgW3JpcHBsZXNdKTsgLy8gVXNlZCB0byBmaWx0ZXIgb3V0IG1vdXNlIGVtdWxhdGVkIGV2ZW50cyBvbiBtb2JpbGUuXG5cbiAgdmFyIGlnbm9yaW5nTW91c2VEb3duID0gUmVhY3QudXNlUmVmKGZhbHNlKTsgLy8gV2UgdXNlIGEgdGltZXIgaW4gb3JkZXIgdG8gb25seSBzaG93IHRoZSByaXBwbGVzIGZvciB0b3VjaCBcImNsaWNrXCIgbGlrZSBldmVudHMuXG4gIC8vIFdlIGRvbid0IHdhbnQgdG8gZGlzcGxheSB0aGUgcmlwcGxlIGZvciB0b3VjaCBzY3JvbGwgZXZlbnRzLlxuXG4gIHZhciBzdGFydFRpbWVyID0gUmVhY3QudXNlUmVmKG51bGwpOyAvLyBUaGlzIGlzIHRoZSBob29rIGNhbGxlZCBvbmNlIHRoZSBwcmV2aW91cyB0aW1lb3V0IGlzIHJlYWR5LlxuXG4gIHZhciBzdGFydFRpbWVyQ29tbWl0ID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgY29udGFpbmVyID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjbGVhclRpbWVvdXQoc3RhcnRUaW1lci5jdXJyZW50KTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHZhciBzdGFydENvbW1pdCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICB2YXIgcHVsc2F0ZSA9IHBhcmFtcy5wdWxzYXRlLFxuICAgICAgICByaXBwbGVYID0gcGFyYW1zLnJpcHBsZVgsXG4gICAgICAgIHJpcHBsZVkgPSBwYXJhbXMucmlwcGxlWSxcbiAgICAgICAgcmlwcGxlU2l6ZSA9IHBhcmFtcy5yaXBwbGVTaXplLFxuICAgICAgICBjYiA9IHBhcmFtcy5jYjtcbiAgICBzZXRSaXBwbGVzKGZ1bmN0aW9uIChvbGRSaXBwbGVzKSB7XG4gICAgICByZXR1cm4gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShvbGRSaXBwbGVzKSwgWy8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJpcHBsZSwge1xuICAgICAgICBrZXk6IG5leHRLZXkuY3VycmVudCxcbiAgICAgICAgY2xhc3NlczogY2xhc3NlcyxcbiAgICAgICAgdGltZW91dDogRFVSQVRJT04sXG4gICAgICAgIHB1bHNhdGU6IHB1bHNhdGUsXG4gICAgICAgIHJpcHBsZVg6IHJpcHBsZVgsXG4gICAgICAgIHJpcHBsZVk6IHJpcHBsZVksXG4gICAgICAgIHJpcHBsZVNpemU6IHJpcHBsZVNpemVcbiAgICAgIH0pXSk7XG4gICAgfSk7XG4gICAgbmV4dEtleS5jdXJyZW50ICs9IDE7XG4gICAgcmlwcGxlQ2FsbGJhY2suY3VycmVudCA9IGNiO1xuICB9LCBbY2xhc3Nlc10pO1xuICB2YXIgc3RhcnQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV2ZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIGNiID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gICAgdmFyIF9vcHRpb25zJHB1bHNhdGUgPSBvcHRpb25zLnB1bHNhdGUsXG4gICAgICAgIHB1bHNhdGUgPSBfb3B0aW9ucyRwdWxzYXRlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJHB1bHNhdGUsXG4gICAgICAgIF9vcHRpb25zJGNlbnRlciA9IG9wdGlvbnMuY2VudGVyLFxuICAgICAgICBjZW50ZXIgPSBfb3B0aW9ucyRjZW50ZXIgPT09IHZvaWQgMCA/IGNlbnRlclByb3AgfHwgb3B0aW9ucy5wdWxzYXRlIDogX29wdGlvbnMkY2VudGVyLFxuICAgICAgICBfb3B0aW9ucyRmYWtlRWxlbWVudCA9IG9wdGlvbnMuZmFrZUVsZW1lbnQsXG4gICAgICAgIGZha2VFbGVtZW50ID0gX29wdGlvbnMkZmFrZUVsZW1lbnQgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkZmFrZUVsZW1lbnQ7XG5cbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgaWdub3JpbmdNb3VzZURvd24uY3VycmVudCkge1xuICAgICAgaWdub3JpbmdNb3VzZURvd24uY3VycmVudCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgIGlnbm9yaW5nTW91c2VEb3duLmN1cnJlbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0gZmFrZUVsZW1lbnQgPyBudWxsIDogY29udGFpbmVyLmN1cnJlbnQ7XG4gICAgdmFyIHJlY3QgPSBlbGVtZW50ID8gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogMFxuICAgIH07IC8vIEdldCB0aGUgc2l6ZSBvZiB0aGUgcmlwcGxlXG5cbiAgICB2YXIgcmlwcGxlWDtcbiAgICB2YXIgcmlwcGxlWTtcbiAgICB2YXIgcmlwcGxlU2l6ZTtcblxuICAgIGlmIChjZW50ZXIgfHwgZXZlbnQuY2xpZW50WCA9PT0gMCAmJiBldmVudC5jbGllbnRZID09PSAwIHx8ICFldmVudC5jbGllbnRYICYmICFldmVudC50b3VjaGVzKSB7XG4gICAgICByaXBwbGVYID0gTWF0aC5yb3VuZChyZWN0LndpZHRoIC8gMik7XG4gICAgICByaXBwbGVZID0gTWF0aC5yb3VuZChyZWN0LmhlaWdodCAvIDIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX3JlZiA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdIDogZXZlbnQsXG4gICAgICAgICAgY2xpZW50WCA9IF9yZWYuY2xpZW50WCxcbiAgICAgICAgICBjbGllbnRZID0gX3JlZi5jbGllbnRZO1xuXG4gICAgICByaXBwbGVYID0gTWF0aC5yb3VuZChjbGllbnRYIC0gcmVjdC5sZWZ0KTtcbiAgICAgIHJpcHBsZVkgPSBNYXRoLnJvdW5kKGNsaWVudFkgLSByZWN0LnRvcCk7XG4gICAgfVxuXG4gICAgaWYgKGNlbnRlcikge1xuICAgICAgcmlwcGxlU2l6ZSA9IE1hdGguc3FydCgoMiAqIE1hdGgucG93KHJlY3Qud2lkdGgsIDIpICsgTWF0aC5wb3cocmVjdC5oZWlnaHQsIDIpKSAvIDMpOyAvLyBGb3Igc29tZSByZWFzb24gdGhlIGFuaW1hdGlvbiBpcyBicm9rZW4gb24gTW9iaWxlIENocm9tZSBpZiB0aGUgc2l6ZSBpZiBldmVuLlxuXG4gICAgICBpZiAocmlwcGxlU2l6ZSAlIDIgPT09IDApIHtcbiAgICAgICAgcmlwcGxlU2l6ZSArPSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc2l6ZVggPSBNYXRoLm1heChNYXRoLmFicygoZWxlbWVudCA/IGVsZW1lbnQuY2xpZW50V2lkdGggOiAwKSAtIHJpcHBsZVgpLCByaXBwbGVYKSAqIDIgKyAyO1xuICAgICAgdmFyIHNpemVZID0gTWF0aC5tYXgoTWF0aC5hYnMoKGVsZW1lbnQgPyBlbGVtZW50LmNsaWVudEhlaWdodCA6IDApIC0gcmlwcGxlWSksIHJpcHBsZVkpICogMiArIDI7XG4gICAgICByaXBwbGVTaXplID0gTWF0aC5zcXJ0KE1hdGgucG93KHNpemVYLCAyKSArIE1hdGgucG93KHNpemVZLCAyKSk7XG4gICAgfSAvLyBUb3VjaGUgZGV2aWNlc1xuXG5cbiAgICBpZiAoZXZlbnQudG91Y2hlcykge1xuICAgICAgLy8gY2hlY2sgdGhhdCB0aGlzIGlzbid0IGFub3RoZXIgdG91Y2hzdGFydCBkdWUgdG8gbXVsdGl0b3VjaFxuICAgICAgLy8gb3RoZXJ3aXNlIHdlIHdpbGwgb25seSBjbGVhciBhIHNpbmdsZSB0aW1lciB3aGVuIHVubW91bnRpbmcgd2hpbGUgdHdvXG4gICAgICAvLyBhcmUgcnVubmluZ1xuICAgICAgaWYgKHN0YXJ0VGltZXJDb21taXQuY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgICAvLyBQcmVwYXJlIHRoZSByaXBwbGUgZWZmZWN0LlxuICAgICAgICBzdGFydFRpbWVyQ29tbWl0LmN1cnJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc3RhcnRDb21taXQoe1xuICAgICAgICAgICAgcHVsc2F0ZTogcHVsc2F0ZSxcbiAgICAgICAgICAgIHJpcHBsZVg6IHJpcHBsZVgsXG4gICAgICAgICAgICByaXBwbGVZOiByaXBwbGVZLFxuICAgICAgICAgICAgcmlwcGxlU2l6ZTogcmlwcGxlU2l6ZSxcbiAgICAgICAgICAgIGNiOiBjYlxuICAgICAgICAgIH0pO1xuICAgICAgICB9OyAvLyBEZWxheSB0aGUgZXhlY3V0aW9uIG9mIHRoZSByaXBwbGUgZWZmZWN0LlxuXG5cbiAgICAgICAgc3RhcnRUaW1lci5jdXJyZW50ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHN0YXJ0VGltZXJDb21taXQuY3VycmVudCkge1xuICAgICAgICAgICAgc3RhcnRUaW1lckNvbW1pdC5jdXJyZW50KCk7XG4gICAgICAgICAgICBzdGFydFRpbWVyQ29tbWl0LmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgREVMQVlfUklQUExFKTsgLy8gV2UgaGF2ZSB0byBtYWtlIGEgdHJhZGVvZmYgd2l0aCB0aGlzIHZhbHVlLlxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydENvbW1pdCh7XG4gICAgICAgIHB1bHNhdGU6IHB1bHNhdGUsXG4gICAgICAgIHJpcHBsZVg6IHJpcHBsZVgsXG4gICAgICAgIHJpcHBsZVk6IHJpcHBsZVksXG4gICAgICAgIHJpcHBsZVNpemU6IHJpcHBsZVNpemUsXG4gICAgICAgIGNiOiBjYlxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbY2VudGVyUHJvcCwgc3RhcnRDb21taXRdKTtcbiAgdmFyIHB1bHNhdGUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgc3RhcnQoe30sIHtcbiAgICAgIHB1bHNhdGU6IHRydWVcbiAgICB9KTtcbiAgfSwgW3N0YXJ0XSk7XG4gIHZhciBzdG9wID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGV2ZW50LCBjYikge1xuICAgIGNsZWFyVGltZW91dChzdGFydFRpbWVyLmN1cnJlbnQpOyAvLyBUaGUgdG91Y2ggaW50ZXJhY3Rpb24gb2NjdXJzIHRvbyBxdWlja2x5LlxuICAgIC8vIFdlIHN0aWxsIHdhbnQgdG8gc2hvdyByaXBwbGUgZWZmZWN0LlxuXG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaGVuZCcgJiYgc3RhcnRUaW1lckNvbW1pdC5jdXJyZW50KSB7XG4gICAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgICBzdGFydFRpbWVyQ29tbWl0LmN1cnJlbnQoKTtcbiAgICAgIHN0YXJ0VGltZXJDb21taXQuY3VycmVudCA9IG51bGw7XG4gICAgICBzdGFydFRpbWVyLmN1cnJlbnQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3RvcChldmVudCwgY2IpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RhcnRUaW1lckNvbW1pdC5jdXJyZW50ID0gbnVsbDtcbiAgICBzZXRSaXBwbGVzKGZ1bmN0aW9uIChvbGRSaXBwbGVzKSB7XG4gICAgICBpZiAob2xkUmlwcGxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBvbGRSaXBwbGVzLnNsaWNlKDEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2xkUmlwcGxlcztcbiAgICB9KTtcbiAgICByaXBwbGVDYWxsYmFjay5jdXJyZW50ID0gY2I7XG4gIH0sIFtdKTtcbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHVsc2F0ZTogcHVsc2F0ZSxcbiAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgIHN0b3A6IHN0b3BcbiAgICB9O1xuICB9LCBbcHVsc2F0ZSwgc3RhcnQsIHN0b3BdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKSxcbiAgICByZWY6IGNvbnRhaW5lclxuICB9LCBvdGhlciksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Hcm91cCwge1xuICAgIGNvbXBvbmVudDogbnVsbCxcbiAgICBleGl0OiB0cnVlXG4gIH0sIHJpcHBsZXMpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVG91Y2hSaXBwbGUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgcmlwcGxlIHN0YXJ0cyBhdCB0aGUgY2VudGVyIG9mIHRoZSBjb21wb25lbnRcbiAgICogcmF0aGVyIHRoYW4gYXQgdGhlIHBvaW50IG9mIGludGVyYWN0aW9uLlxuICAgKi9cbiAgY2VudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIGZsaXA6IGZhbHNlLFxuICBuYW1lOiAnTXVpVG91Y2hSaXBwbGUnXG59KSggLyojX19QVVJFX18qL1JlYWN0Lm1lbW8oVG91Y2hSaXBwbGUpKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9CdXR0b25CYXNlJzsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyBjaGFpblByb3BUeXBlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICB2YXIgZWxldmF0aW9ucyA9IHt9O1xuICB0aGVtZS5zaGFkb3dzLmZvckVhY2goZnVuY3Rpb24gKHNoYWRvdywgaW5kZXgpIHtcbiAgICBlbGV2YXRpb25zW1wiZWxldmF0aW9uXCIuY29uY2F0KGluZGV4KV0gPSB7XG4gICAgICBib3hTaGFkb3c6IHNoYWRvd1xuICAgIH07XG4gIH0pO1xuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ2JveC1zaGFkb3cnKVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBzcXVhcmU9e2ZhbHNlfWAuICovXG4gICAgcm91bmRlZDoge1xuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXNcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cIm91dGxpbmVkXCJgLiAqL1xuICAgIG91dGxpbmVkOiB7XG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLmRpdmlkZXIpXG4gICAgfVxuICB9LCBlbGV2YXRpb25zKTtcbn07XG52YXIgUGFwZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBQYXBlcihwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBDb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAnZGl2JyA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBfcHJvcHMkc3F1YXJlID0gcHJvcHMuc3F1YXJlLFxuICAgICAgc3F1YXJlID0gX3Byb3BzJHNxdWFyZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkc3F1YXJlLFxuICAgICAgX3Byb3BzJGVsZXZhdGlvbiA9IHByb3BzLmVsZXZhdGlvbixcbiAgICAgIGVsZXZhdGlvbiA9IF9wcm9wcyRlbGV2YXRpb24gPT09IHZvaWQgMCA/IDEgOiBfcHJvcHMkZWxldmF0aW9uLFxuICAgICAgX3Byb3BzJHZhcmlhbnQgPSBwcm9wcy52YXJpYW50LFxuICAgICAgdmFyaWFudCA9IF9wcm9wcyR2YXJpYW50ID09PSB2b2lkIDAgPyAnZWxldmF0aW9uJyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb21wb25lbnRcIiwgXCJzcXVhcmVcIiwgXCJlbGV2YXRpb25cIiwgXCJ2YXJpYW50XCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lLCB2YXJpYW50ID09PSAnb3V0bGluZWQnID8gY2xhc3Nlcy5vdXRsaW5lZCA6IGNsYXNzZXNbXCJlbGV2YXRpb25cIi5jb25jYXQoZWxldmF0aW9uKV0sICFzcXVhcmUgJiYgY2xhc3Nlcy5yb3VuZGVkKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBQYXBlci5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFNoYWRvdyBkZXB0aCwgY29ycmVzcG9uZHMgdG8gYGRwYCBpbiB0aGUgc3BlYy5cbiAgICogSXQgYWNjZXB0cyB2YWx1ZXMgYmV0d2VlbiAwIGFuZCAyNCBpbmNsdXNpdmUuXG4gICAqL1xuICBlbGV2YXRpb246IGNoYWluUHJvcFR5cGVzKFByb3BUeXBlcy5udW1iZXIsIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgICAgZWxldmF0aW9uID0gcHJvcHMuZWxldmF0aW9uOyAvLyBpbiBjYXNlIGB3aXRoU3R5bGVzYCBmYWlscyB0byBpbmplY3Qgd2UgZG9uJ3QgbmVlZCB0aGlzIHdhcm5pbmdcblxuICAgIGlmIChjbGFzc2VzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChlbGV2YXRpb24gIT0gbnVsbCAmJiBjbGFzc2VzW1wiZWxldmF0aW9uXCIuY29uY2F0KGVsZXZhdGlvbildID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJNYXRlcmlhbC1VSTogVGhpcyBlbGV2YXRpb24gYFwiLmNvbmNhdChlbGV2YXRpb24sIFwiYCBpcyBub3QgaW1wbGVtZW50ZWQuXCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgcm91bmRlZCBjb3JuZXJzIGFyZSBkaXNhYmxlZC5cbiAgICovXG4gIHNxdWFyZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2VsZXZhdGlvbicsICdvdXRsaW5lZCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlQYXBlcidcbn0pKFBhcGVyKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9QYXBlcic7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgd2lkdGg6ICcxZW0nLFxuICAgICAgaGVpZ2h0OiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgyNCksXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ2ZpbGwnLCB7XG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVyXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cInByaW1hcnlcImAuICovXG4gICAgY29sb3JQcmltYXJ5OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJzZWNvbmRhcnlcImAuICovXG4gICAgY29sb3JTZWNvbmRhcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwiYWN0aW9uXCJgLiAqL1xuICAgIGNvbG9yQWN0aW9uOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5hY3Rpb24uYWN0aXZlXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwiZXJyb3JcImAuICovXG4gICAgY29sb3JFcnJvcjoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpblxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cImRpc2FibGVkXCJgLiAqL1xuICAgIGNvbG9yRGlzYWJsZWQ6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5kaXNhYmxlZFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmb250U2l6ZT1cImluaGVyaXRcImAuICovXG4gICAgZm9udFNpemVJbmhlcml0OiB7XG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGZvbnRTaXplPVwic21hbGxcImAuICovXG4gICAgZm9udFNpemVTbWFsbDoge1xuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgyMClcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZm9udFNpemU9XCJsYXJnZVwiYC4gKi9cbiAgICBmb250U2l6ZUxhcmdlOiB7XG4gICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDM1KVxuICAgIH1cbiAgfTtcbn07XG52YXIgU3ZnSWNvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFN2Z0ljb24ocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBjb2xvciA9IF9wcm9wcyRjb2xvciA9PT0gdm9pZCAwID8gJ2luaGVyaXQnIDogX3Byb3BzJGNvbG9yLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdzdmcnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRmb250U2l6ZSA9IHByb3BzLmZvbnRTaXplLFxuICAgICAgZm9udFNpemUgPSBfcHJvcHMkZm9udFNpemUgPT09IHZvaWQgMCA/ICdkZWZhdWx0JyA6IF9wcm9wcyRmb250U2l6ZSxcbiAgICAgIGh0bWxDb2xvciA9IHByb3BzLmh0bWxDb2xvcixcbiAgICAgIHRpdGxlQWNjZXNzID0gcHJvcHMudGl0bGVBY2Nlc3MsXG4gICAgICBfcHJvcHMkdmlld0JveCA9IHByb3BzLnZpZXdCb3gsXG4gICAgICB2aWV3Qm94ID0gX3Byb3BzJHZpZXdCb3ggPT09IHZvaWQgMCA/ICcwIDAgMjQgMjQnIDogX3Byb3BzJHZpZXdCb3gsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJjb21wb25lbnRcIiwgXCJmb250U2l6ZVwiLCBcImh0bWxDb2xvclwiLCBcInRpdGxlQWNjZXNzXCIsIFwidmlld0JveFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgY29sb3IgIT09ICdpbmhlcml0JyAmJiBjbGFzc2VzW1wiY29sb3JcIi5jb25jYXQoY2FwaXRhbGl6ZShjb2xvcikpXSwgZm9udFNpemUgIT09ICdkZWZhdWx0JyAmJiBjbGFzc2VzW1wiZm9udFNpemVcIi5jb25jYXQoY2FwaXRhbGl6ZShmb250U2l6ZSkpXSksXG4gICAgZm9jdXNhYmxlOiBcImZhbHNlXCIsXG4gICAgdmlld0JveDogdmlld0JveCxcbiAgICBjb2xvcjogaHRtbENvbG9yLFxuICAgIFwiYXJpYS1oaWRkZW5cIjogdGl0bGVBY2Nlc3MgPyB1bmRlZmluZWQgOiB0cnVlLFxuICAgIHJvbGU6IHRpdGxlQWNjZXNzID8gJ2ltZycgOiB1bmRlZmluZWQsXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBjaGlsZHJlbiwgdGl0bGVBY2Nlc3MgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIG51bGwsIHRpdGxlQWNjZXNzKSA6IG51bGwpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTdmdJY29uLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIE5vZGUgcGFzc2VkIGludG8gdGhlIFNWRyBlbGVtZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKiBZb3UgY2FuIHVzZSB0aGUgYGh0bWxDb2xvcmAgcHJvcCB0byBhcHBseSBhIGNvbG9yIGF0dHJpYnV0ZSB0byB0aGUgU1ZHIGVsZW1lbnQuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsnYWN0aW9uJywgJ2Rpc2FibGVkJywgJ2Vycm9yJywgJ2luaGVyaXQnLCAncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBUaGUgZm9udFNpemUgYXBwbGllZCB0byB0aGUgaWNvbi4gRGVmYXVsdHMgdG8gMjRweCwgYnV0IGNhbiBiZSBjb25maWd1cmUgdG8gaW5oZXJpdCBmb250IHNpemUuXG4gICAqL1xuICBmb250U2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdpbmhlcml0JywgJ2xhcmdlJywgJ3NtYWxsJ10pLFxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGEgY29sb3IgYXR0cmlidXRlIHRvIHRoZSBTVkcgZWxlbWVudC5cbiAgICovXG4gIGh0bWxDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIHNoYXBlLXJlbmRlcmluZyBhdHRyaWJ1dGUuIFRoZSBiZWhhdmlvciBvZiB0aGUgZGlmZmVyZW50IG9wdGlvbnMgaXMgZGVzY3JpYmVkIG9uIHRoZVxuICAgKiBbTUROIFdlYiBEb2NzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvQXR0cmlidXRlL3NoYXBlLXJlbmRlcmluZykuXG4gICAqIElmIHlvdSBhcmUgaGF2aW5nIGlzc3VlcyB3aXRoIGJsdXJyeSBpY29ucyB5b3Ugc2hvdWxkIGludmVzdGlnYXRlIHRoaXMgcHJvcGVydHkuXG4gICAqL1xuICBzaGFwZVJlbmRlcmluZzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogUHJvdmlkZXMgYSBodW1hbi1yZWFkYWJsZSB0aXRsZSBmb3IgdGhlIGVsZW1lbnQgdGhhdCBjb250YWlucyBpdC5cbiAgICogaHR0cHM6Ly93d3cudzMub3JnL1RSL1NWRy1hY2Nlc3MvI0VxdWl2YWxlbnRcbiAgICovXG4gIHRpdGxlQWNjZXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBBbGxvd3MgeW91IHRvIHJlZGVmaW5lIHdoYXQgdGhlIGNvb3JkaW5hdGVzIHdpdGhvdXQgdW5pdHMgbWVhbiBpbnNpZGUgYW4gU1ZHIGVsZW1lbnQuXG4gICAqIEZvciBleGFtcGxlLCBpZiB0aGUgU1ZHIGVsZW1lbnQgaXMgNTAwICh3aWR0aCkgYnkgMjAwIChoZWlnaHQpLFxuICAgKiBhbmQgeW91IHBhc3Mgdmlld0JveD1cIjAgMCA1MCAyMFwiLFxuICAgKiB0aGlzIG1lYW5zIHRoYXQgdGhlIGNvb3JkaW5hdGVzIGluc2lkZSB0aGUgU1ZHIHdpbGwgZ28gZnJvbSB0aGUgdG9wIGxlZnQgY29ybmVyICgwLDApXG4gICAqIHRvIGJvdHRvbSByaWdodCAoNTAsMjApIGFuZCBlYWNoIHVuaXQgd2lsbCBiZSB3b3J0aCAxMHB4LlxuICAgKi9cbiAgdmlld0JveDogUHJvcFR5cGVzLnN0cmluZ1xufSA6IHZvaWQgMDtcblN2Z0ljb24ubXVpTmFtZSA9ICdTdmdJY29uJztcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlTdmdJY29uJ1xufSkoU3ZnSWNvbik7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU3ZnSWNvbic7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gJy4uL0J1dHRvbkJhc2UnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5pbXBvcnQgdW5zdXBwb3J0ZWRQcm9wIGZyb20gJy4uL3V0aWxzL3Vuc3VwcG9ydGVkUHJvcCc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICB2YXIgX2V4dGVuZHMyO1xuXG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiBfZXh0ZW5kcyh7fSwgdGhlbWUudHlwb2dyYXBoeS5idXR0b24sIChfZXh0ZW5kczIgPSB7XG4gICAgICBtYXhXaWR0aDogMjY0LFxuICAgICAgbWluV2lkdGg6IDcyLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1pbkhlaWdodDogNDgsXG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgcGFkZGluZzogJzZweCAxMnB4J1xuICAgIH0sIF9kZWZpbmVQcm9wZXJ0eShfZXh0ZW5kczIsIHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpLCB7XG4gICAgICBwYWRkaW5nOiAnNnB4IDI0cHgnXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfZXh0ZW5kczIsIFwib3ZlcmZsb3dcIiwgJ2hpZGRlbicpLCBfZGVmaW5lUHJvcGVydHkoX2V4dGVuZHMyLCBcIndoaXRlU3BhY2VcIiwgJ25vcm1hbCcpLCBfZGVmaW5lUHJvcGVydHkoX2V4dGVuZHMyLCBcInRleHRBbGlnblwiLCAnY2VudGVyJyksIF9kZWZpbmVQcm9wZXJ0eShfZXh0ZW5kczIsIHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpLCB7XG4gICAgICBtaW5XaWR0aDogMTYwXG4gICAgfSksIF9leHRlbmRzMikpLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBib3RoIGBpY29uYCBhbmQgYGxhYmVsYCBhcmUgcHJvdmlkZWQuICovXG4gICAgbGFiZWxJY29uOiB7XG4gICAgICBtaW5IZWlnaHQ6IDcyLFxuICAgICAgcGFkZGluZ1RvcDogOSxcbiAgICAgICcmICR3cmFwcGVyID4gKjpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiA2XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIHBhcmVudCBbYFRhYnNgXSgvYXBpL3RhYnMvKSBoYXMgYHRleHRDb2xvcj1cImluaGVyaXRcImAuICovXG4gICAgdGV4dENvbG9ySW5oZXJpdDoge1xuICAgICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICAgIG9wYWNpdHk6IDAuNyxcbiAgICAgICcmJHNlbGVjdGVkJzoge1xuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIG9wYWNpdHk6IDAuNVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBwYXJlbnQgW2BUYWJzYF0oL2FwaS90YWJzLykgaGFzIGB0ZXh0Q29sb3I9XCJwcmltYXJ5XCJgLiAqL1xuICAgIHRleHRDb2xvclByaW1hcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgJyYkc2VsZWN0ZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LmRpc2FibGVkXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIHBhcmVudCBbYFRhYnNgXSgvYXBpL3RhYnMvKSBoYXMgYHRleHRDb2xvcj1cInNlY29uZGFyeVwiYC4gKi9cbiAgICB0ZXh0Q29sb3JTZWNvbmRhcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgJyYkc2VsZWN0ZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuZGlzYWJsZWRcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc2VsZWN0ZWQ9e3RydWV9YCAoY29udHJvbGxlZCBieSB0aGUgVGFicyBjb21wb25lbnQpLiAqL1xuICAgIHNlbGVjdGVkOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVkPXt0cnVlfWAgKGNvbnRyb2xsZWQgYnkgdGhlIFRhYnMgY29tcG9uZW50KS4gKi9cbiAgICBkaXNhYmxlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmdWxsV2lkdGg9e3RydWV9YCAoY29udHJvbGxlZCBieSB0aGUgVGFicyBjb21wb25lbnQpLiAqL1xuICAgIGZ1bGxXaWR0aDoge1xuICAgICAgZmxleFNocmluazogMSxcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgZmxleEJhc2lzOiAwLFxuICAgICAgbWF4V2lkdGg6ICdub25lJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB3cmFwcGVkPXt0cnVlfWAuICovXG4gICAgd3JhcHBlZDoge1xuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxMiksXG4gICAgICBsaW5lSGVpZ2h0OiAxLjVcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpY29uYCBhbmQgYGxhYmVsYCdzIHdyYXBwZXIgZWxlbWVudC4gKi9cbiAgICB3cmFwcGVyOiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcbiAgICB9XG4gIH07XG59O1xudmFyIFRhYiA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRhYihwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzYWJsZWQgPSBfcHJvcHMkZGlzYWJsZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVkLFxuICAgICAgX3Byb3BzJGRpc2FibGVGb2N1c1JpID0gcHJvcHMuZGlzYWJsZUZvY3VzUmlwcGxlLFxuICAgICAgZGlzYWJsZUZvY3VzUmlwcGxlID0gX3Byb3BzJGRpc2FibGVGb2N1c1JpID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlRm9jdXNSaSxcbiAgICAgIGZ1bGxXaWR0aCA9IHByb3BzLmZ1bGxXaWR0aCxcbiAgICAgIGljb24gPSBwcm9wcy5pY29uLFxuICAgICAgaW5kaWNhdG9yID0gcHJvcHMuaW5kaWNhdG9yLFxuICAgICAgbGFiZWwgPSBwcm9wcy5sYWJlbCxcbiAgICAgIG9uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2UsXG4gICAgICBvbkNsaWNrID0gcHJvcHMub25DbGljayxcbiAgICAgIG9uRm9jdXMgPSBwcm9wcy5vbkZvY3VzLFxuICAgICAgc2VsZWN0ZWQgPSBwcm9wcy5zZWxlY3RlZCxcbiAgICAgIHNlbGVjdGlvbkZvbGxvd3NGb2N1cyA9IHByb3BzLnNlbGVjdGlvbkZvbGxvd3NGb2N1cyxcbiAgICAgIF9wcm9wcyR0ZXh0Q29sb3IgPSBwcm9wcy50ZXh0Q29sb3IsXG4gICAgICB0ZXh0Q29sb3IgPSBfcHJvcHMkdGV4dENvbG9yID09PSB2b2lkIDAgPyAnaW5oZXJpdCcgOiBfcHJvcHMkdGV4dENvbG9yLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIF9wcm9wcyR3cmFwcGVkID0gcHJvcHMud3JhcHBlZCxcbiAgICAgIHdyYXBwZWQgPSBfcHJvcHMkd3JhcHBlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkd3JhcHBlZCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlRm9jdXNSaXBwbGVcIiwgXCJmdWxsV2lkdGhcIiwgXCJpY29uXCIsIFwiaW5kaWNhdG9yXCIsIFwibGFiZWxcIiwgXCJvbkNoYW5nZVwiLCBcIm9uQ2xpY2tcIiwgXCJvbkZvY3VzXCIsIFwic2VsZWN0ZWRcIiwgXCJzZWxlY3Rpb25Gb2xsb3dzRm9jdXNcIiwgXCJ0ZXh0Q29sb3JcIiwgXCJ2YWx1ZVwiLCBcIndyYXBwZWRcIl0pO1xuXG4gIHZhciBoYW5kbGVDbGljayA9IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZShldmVudCwgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICBvbkNsaWNrKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZUZvY3VzID0gZnVuY3Rpb24gaGFuZGxlRm9jdXMoZXZlbnQpIHtcbiAgICBpZiAoc2VsZWN0aW9uRm9sbG93c0ZvY3VzICYmICFzZWxlY3RlZCAmJiBvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UoZXZlbnQsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAob25Gb2N1cykge1xuICAgICAgb25Gb2N1cyhldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b25CYXNlLCBfZXh0ZW5kcyh7XG4gICAgZm9jdXNSaXBwbGU6ICFkaXNhYmxlRm9jdXNSaXBwbGUsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3Nlc1tcInRleHRDb2xvclwiLmNvbmNhdChjYXBpdGFsaXplKHRleHRDb2xvcikpXSwgY2xhc3NOYW1lLCBkaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkLCBzZWxlY3RlZCAmJiBjbGFzc2VzLnNlbGVjdGVkLCBsYWJlbCAmJiBpY29uICYmIGNsYXNzZXMubGFiZWxJY29uLCBmdWxsV2lkdGggJiYgY2xhc3Nlcy5mdWxsV2lkdGgsIHdyYXBwZWQgJiYgY2xhc3Nlcy53cmFwcGVkKSxcbiAgICByZWY6IHJlZixcbiAgICByb2xlOiBcInRhYlwiLFxuICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBzZWxlY3RlZCxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgb25Gb2N1czogaGFuZGxlRm9jdXMsXG4gICAgdGFiSW5kZXg6IHNlbGVjdGVkID8gMCA6IC0xXG4gIH0sIG90aGVyKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMud3JhcHBlclxuICB9LCBpY29uLCBsYWJlbCksIGluZGljYXRvcik7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRhYi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGlzIHByb3AgaXNuJ3Qgc3VwcG9ydGVkLlxuICAgKiBVc2UgdGhlIGBjb21wb25lbnRgIHByb3AgaWYgeW91IG5lZWQgdG8gY2hhbmdlIHRoZSBjaGlsZHJlbiBzdHJ1Y3R1cmUuXG4gICAqL1xuICBjaGlsZHJlbjogdW5zdXBwb3J0ZWRQcm9wLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0YWIgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgIGtleWJvYXJkIGZvY3VzIHJpcHBsZSB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZUZvY3VzUmlwcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgcmlwcGxlIGVmZmVjdCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZVJpcHBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIGVsZW1lbnQuXG4gICAqL1xuICBpY29uOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBGb3Igc2VydmVyLXNpZGUgcmVuZGVyaW5nIGNvbnNpZGVyYXRpb24sIHdlIGxldCB0aGUgc2VsZWN0ZWQgdGFiXG4gICAqIHJlbmRlciB0aGUgaW5kaWNhdG9yLlxuICAgKi9cbiAgaW5kaWNhdG9yOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIGxhYmVsIGVsZW1lbnQuXG4gICAqL1xuICBsYWJlbDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHNlbGVjdGlvbkZvbGxvd3NGb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHRleHRDb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsnc2Vjb25kYXJ5JywgJ3ByaW1hcnknLCAnaW5oZXJpdCddKSxcblxuICAvKipcbiAgICogWW91IGNhbiBwcm92aWRlIHlvdXIgb3duIHZhbHVlLiBPdGhlcndpc2UsIHdlIGZhbGxiYWNrIHRvIHRoZSBjaGlsZCBwb3NpdGlvbiBpbmRleC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBUYWIgbGFiZWxzIGFwcGVhciBpbiBhIHNpbmdsZSByb3cuXG4gICAqIFRoZXkgY2FuIHVzZSBhIHNlY29uZCBsaW5lIGlmIG5lZWRlZC5cbiAgICovXG4gIHdyYXBwZWQ6IFByb3BUeXBlcy5ib29sXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVRhYidcbn0pKFRhYik7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVGFiJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FyaWEtcm9sZSAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IEtleWJvYXJkQXJyb3dMZWZ0IGZyb20gJy4uL2ludGVybmFsL3N2Zy1pY29ucy9LZXlib2FyZEFycm93TGVmdCc7XG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1JpZ2h0IGZyb20gJy4uL2ludGVybmFsL3N2Zy1pY29ucy9LZXlib2FyZEFycm93UmlnaHQnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSAnLi4vQnV0dG9uQmFzZSc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcm9vdDoge1xuICAgIHdpZHRoOiA0MCxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIG9wYWNpdHk6IDAuOCxcbiAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9XG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiYC4gKi9cbiAgdmVydGljYWw6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogNDAsXG4gICAgJyYgc3ZnJzoge1xuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDkwZGVnKSdcbiAgICB9XG4gIH0sXG5cbiAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZWQ9e3RydWV9YC4gKi9cbiAgZGlzYWJsZWQ6IHt9XG59O1xuXG52YXIgX3JlZiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEtleWJvYXJkQXJyb3dMZWZ0LCB7XG4gIGZvbnRTaXplOiBcInNtYWxsXCJcbn0pO1xuXG52YXIgX3JlZjIgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChLZXlib2FyZEFycm93UmlnaHQsIHtcbiAgZm9udFNpemU6IFwic21hbGxcIlxufSk7XG5cbnZhciBUYWJTY3JvbGxCdXR0b24gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUYWJTY3JvbGxCdXR0b24ocHJvcHMsIHJlZikge1xuICB2YXIgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWVQcm9wID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgZGlyZWN0aW9uID0gcHJvcHMuZGlyZWN0aW9uLFxuICAgICAgb3JpZW50YXRpb24gPSBwcm9wcy5vcmllbnRhdGlvbixcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImRpcmVjdGlvblwiLCBcIm9yaWVudGF0aW9uXCIsIFwiZGlzYWJsZWRcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b25CYXNlLCBfZXh0ZW5kcyh7XG4gICAgY29tcG9uZW50OiBcImRpdlwiLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZVByb3AsIGRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQsIG9yaWVudGF0aW9uID09PSAndmVydGljYWwnICYmIGNsYXNzZXMudmVydGljYWwpLFxuICAgIHJlZjogcmVmLFxuICAgIHJvbGU6IG51bGwsXG4gICAgdGFiSW5kZXg6IG51bGxcbiAgfSwgb3RoZXIpLCBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IF9yZWYgOiBfcmVmMik7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRhYlNjcm9sbEJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogV2hpY2ggZGlyZWN0aW9uIHNob3VsZCB0aGUgYnV0dG9uIGluZGljYXRlP1xuICAgKi9cbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0J10pLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGVsZW1lbnQgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIHRhYnMgb3JpZW50YXRpb24gKGxheW91dCBmbG93IGRpcmVjdGlvbikuXG4gICAqL1xuICBvcmllbnRhdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddKS5pc1JlcXVpcmVkXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVRhYlNjcm9sbEJ1dHRvbidcbn0pKFRhYlNjcm9sbEJ1dHRvbik7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVGFiU2Nyb2xsQnV0dG9uJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uL3V0aWxzL2RlYm91bmNlJztcbnZhciBzdHlsZXMgPSB7XG4gIHdpZHRoOiA5OSxcbiAgaGVpZ2h0OiA5OSxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHRvcDogLTk5OTksXG4gIG92ZXJmbG93OiAnc2Nyb2xsJ1xufTtcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqIFRoZSBjb21wb25lbnQgb3JpZ2luYXRlcyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9TVE9SSVMvcmVhY3Qtc2Nyb2xsYmFyLXNpemUuXG4gKiBJdCBoYXMgYmVlbiBtb3ZlZCBpbnRvIHRoZSBjb3JlIGluIG9yZGVyIHRvIG1pbmltaXplIHRoZSBidW5kbGUgc2l6ZS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxiYXJTaXplKHByb3BzKSB7XG4gIHZhciBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcIm9uQ2hhbmdlXCJdKTtcblxuICB2YXIgc2Nyb2xsYmFySGVpZ2h0ID0gUmVhY3QudXNlUmVmKCk7XG4gIHZhciBub2RlUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIHZhciBzZXRNZWFzdXJlbWVudHMgPSBmdW5jdGlvbiBzZXRNZWFzdXJlbWVudHMoKSB7XG4gICAgc2Nyb2xsYmFySGVpZ2h0LmN1cnJlbnQgPSBub2RlUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0IC0gbm9kZVJlZi5jdXJyZW50LmNsaWVudEhlaWdodDtcbiAgfTtcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVSZXNpemUgPSBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcHJldkhlaWdodCA9IHNjcm9sbGJhckhlaWdodC5jdXJyZW50O1xuICAgICAgc2V0TWVhc3VyZW1lbnRzKCk7XG5cbiAgICAgIGlmIChwcmV2SGVpZ2h0ICE9PSBzY3JvbGxiYXJIZWlnaHQuY3VycmVudCkge1xuICAgICAgICBvbkNoYW5nZShzY3JvbGxiYXJIZWlnaHQuY3VycmVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbmRsZVJlc2l6ZS5jbGVhcigpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfTtcbiAgfSwgW29uQ2hhbmdlXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgc2V0TWVhc3VyZW1lbnRzKCk7XG4gICAgb25DaGFuZ2Uoc2Nyb2xsYmFySGVpZ2h0LmN1cnJlbnQpO1xuICB9LCBbb25DaGFuZ2VdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBzdHlsZTogc3R5bGVzLFxuICAgIHJlZjogbm9kZVJlZlxuICB9LCBvdGhlcikpO1xufVxucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gU2Nyb2xsYmFyU2l6ZS5wcm9wVHlwZXMgPSB7XG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59IDogdm9pZCAwOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJy4uL3V0aWxzL2NhcGl0YWxpemUnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGhlaWdodDogMixcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoKVxuICAgIH0sXG4gICAgY29sb3JQcmltYXJ5OiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gICAgfSxcbiAgICBjb2xvclNlY29uZGFyeToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgfSxcbiAgICB2ZXJ0aWNhbDoge1xuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICB3aWR0aDogMixcbiAgICAgIHJpZ2h0OiAwXG4gICAgfVxuICB9O1xufTtcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG52YXIgVGFiSW5kaWNhdG9yID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVGFiSW5kaWNhdG9yKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIG9yaWVudGF0aW9uID0gcHJvcHMub3JpZW50YXRpb24sXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbG9yXCIsIFwib3JpZW50YXRpb25cIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzZXNbXCJjb2xvclwiLmNvbmNhdChjYXBpdGFsaXplKGNvbG9yKSldLCBjbGFzc05hbWUsIG9yaWVudGF0aW9uID09PSAndmVydGljYWwnICYmIGNsYXNzZXMudmVydGljYWwpLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFRhYkluZGljYXRvci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgdGFiIGluZGljYXRvci5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgdGFicyBvcmllbnRhdGlvbiAobGF5b3V0IGZsb3cgZGlyZWN0aW9uKS5cbiAgICovXG4gIG9yaWVudGF0aW9uOiBQcm9wVHlwZXMub25lT2YoWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ10pLmlzUmVxdWlyZWRcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnUHJpdmF0ZVRhYkluZGljYXRvcidcbn0pKFRhYkluZGljYXRvcik7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzRnJhZ21lbnQgfSBmcm9tICdyZWFjdC1pcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyByZWZUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi91dGlscy9kZWJvdW5jZSc7XG5pbXBvcnQgb3duZXJXaW5kb3cgZnJvbSAnLi4vdXRpbHMvb3duZXJXaW5kb3cnO1xuaW1wb3J0IHsgZ2V0Tm9ybWFsaXplZFNjcm9sbExlZnQsIGRldGVjdFNjcm9sbFR5cGUgfSBmcm9tICcuLi91dGlscy9zY3JvbGxMZWZ0JztcbmltcG9ydCBhbmltYXRlIGZyb20gJy4uL2ludGVybmFsL2FuaW1hdGUnO1xuaW1wb3J0IFNjcm9sbGJhclNpemUgZnJvbSAnLi9TY3JvbGxiYXJTaXplJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBUYWJJbmRpY2F0b3IgZnJvbSAnLi9UYWJJbmRpY2F0b3InO1xuaW1wb3J0IFRhYlNjcm9sbEJ1dHRvbiBmcm9tICcuLi9UYWJTY3JvbGxCdXR0b24nO1xuaW1wb3J0IHVzZUV2ZW50Q2FsbGJhY2sgZnJvbSAnLi4vdXRpbHMvdXNlRXZlbnRDYWxsYmFjayc7XG5pbXBvcnQgdXNlVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3VzZVRoZW1lJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBtaW5IZWlnaHQ6IDQ4LFxuICAgICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCcsXG4gICAgICAvLyBBZGQgaU9TIG1vbWVudHVtIHNjcm9sbGluZy5cbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJgLiAqL1xuICAgIHZlcnRpY2FsOiB7XG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgZmxleCBjb250YWluZXIgZWxlbWVudC4gKi9cbiAgICBmbGV4Q29udGFpbmVyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGZsZXggY29udGFpbmVyIGVsZW1lbnQgaWYgYG9yaWVudGF0aW9uPVwidmVydGljYWxcImAuICovXG4gICAgZmxleENvbnRhaW5lclZlcnRpY2FsOiB7XG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgZmxleCBjb250YWluZXIgZWxlbWVudCBpZiBgY2VudGVyZWQ9e3RydWV9YCAmIGAhdmFyaWFudD1cInNjcm9sbGFibGVcImAuICovXG4gICAgY2VudGVyZWQ6IHtcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgdGFibGlzdCBlbGVtZW50LiAqL1xuICAgIHNjcm9sbGVyOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmxleDogJzEgMSBhdXRvJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSB0YWJsaXN0IGVsZW1lbnQgaWYgYCF2YXJpYW50PVwic2Nyb2xsYWJsZVwiYFxiXGJcYi4gKi9cbiAgICBmaXhlZDoge1xuICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHRhYmxpc3QgZWxlbWVudCBpZiBgdmFyaWFudD1cInNjcm9sbGFibGVcImAuICovXG4gICAgc2Nyb2xsYWJsZToge1xuICAgICAgb3ZlcmZsb3dYOiAnc2Nyb2xsJyxcbiAgICAgIC8vIEhpZGUgZGltZW5zaW9ubGVzcyBzY3JvbGxiYXIgb24gTWFjT1NcbiAgICAgIHNjcm9sbGJhcldpZHRoOiAnbm9uZScsXG4gICAgICAvLyBGaXJlZm94XG4gICAgICAnJjo6LXdlYmtpdC1zY3JvbGxiYXInOiB7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJyAvLyBTYWZhcmkgKyBDaHJvbWVcblxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFNjcm9sbEJ1dHRvbkNvbXBvbmVudGAgY29tcG9uZW50LiAqL1xuICAgIHNjcm9sbEJ1dHRvbnM6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBTY3JvbGxCdXR0b25Db21wb25lbnRgIGNvbXBvbmVudCBpZiBgc2Nyb2xsQnV0dG9ucz1cImF1dG9cImAgb3Igc2Nyb2xsQnV0dG9ucz1cImRlc2t0b3BcImAuICovXG4gICAgc2Nyb2xsQnV0dG9uc0Rlc2t0b3A6IF9kZWZpbmVQcm9wZXJ0eSh7fSwgdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKSwge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfSksXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYFRhYkluZGljYXRvcmAgY29tcG9uZW50LiAqL1xuICAgIGluZGljYXRvcjoge31cbiAgfTtcbn07XG52YXIgVGFicyA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRhYnMocHJvcHMsIHJlZikge1xuICB2YXIgYXJpYUxhYmVsID0gcHJvcHNbJ2FyaWEtbGFiZWwnXSxcbiAgICAgIGFyaWFMYWJlbGxlZEJ5ID0gcHJvcHNbJ2FyaWEtbGFiZWxsZWRieSddLFxuICAgICAgYWN0aW9uID0gcHJvcHMuYWN0aW9uLFxuICAgICAgX3Byb3BzJGNlbnRlcmVkID0gcHJvcHMuY2VudGVyZWQsXG4gICAgICBjZW50ZXJlZCA9IF9wcm9wcyRjZW50ZXJlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkY2VudGVyZWQsXG4gICAgICBjaGlsZHJlblByb3AgPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdkaXYnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRpbmRpY2F0b3JDb2xvciA9IHByb3BzLmluZGljYXRvckNvbG9yLFxuICAgICAgaW5kaWNhdG9yQ29sb3IgPSBfcHJvcHMkaW5kaWNhdG9yQ29sb3IgPT09IHZvaWQgMCA/ICdzZWNvbmRhcnknIDogX3Byb3BzJGluZGljYXRvckNvbG9yLFxuICAgICAgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIF9wcm9wcyRvcmllbnRhdGlvbiA9IHByb3BzLm9yaWVudGF0aW9uLFxuICAgICAgb3JpZW50YXRpb24gPSBfcHJvcHMkb3JpZW50YXRpb24gPT09IHZvaWQgMCA/ICdob3Jpem9udGFsJyA6IF9wcm9wcyRvcmllbnRhdGlvbixcbiAgICAgIF9wcm9wcyRTY3JvbGxCdXR0b25DbyA9IHByb3BzLlNjcm9sbEJ1dHRvbkNvbXBvbmVudCxcbiAgICAgIFNjcm9sbEJ1dHRvbkNvbXBvbmVudCA9IF9wcm9wcyRTY3JvbGxCdXR0b25DbyA9PT0gdm9pZCAwID8gVGFiU2Nyb2xsQnV0dG9uIDogX3Byb3BzJFNjcm9sbEJ1dHRvbkNvLFxuICAgICAgX3Byb3BzJHNjcm9sbEJ1dHRvbnMgPSBwcm9wcy5zY3JvbGxCdXR0b25zLFxuICAgICAgc2Nyb2xsQnV0dG9ucyA9IF9wcm9wcyRzY3JvbGxCdXR0b25zID09PSB2b2lkIDAgPyAnYXV0bycgOiBfcHJvcHMkc2Nyb2xsQnV0dG9ucyxcbiAgICAgIHNlbGVjdGlvbkZvbGxvd3NGb2N1cyA9IHByb3BzLnNlbGVjdGlvbkZvbGxvd3NGb2N1cyxcbiAgICAgIF9wcm9wcyRUYWJJbmRpY2F0b3JQciA9IHByb3BzLlRhYkluZGljYXRvclByb3BzLFxuICAgICAgVGFiSW5kaWNhdG9yUHJvcHMgPSBfcHJvcHMkVGFiSW5kaWNhdG9yUHIgPT09IHZvaWQgMCA/IHt9IDogX3Byb3BzJFRhYkluZGljYXRvclByLFxuICAgICAgVGFiU2Nyb2xsQnV0dG9uUHJvcHMgPSBwcm9wcy5UYWJTY3JvbGxCdXR0b25Qcm9wcyxcbiAgICAgIF9wcm9wcyR0ZXh0Q29sb3IgPSBwcm9wcy50ZXh0Q29sb3IsXG4gICAgICB0ZXh0Q29sb3IgPSBfcHJvcHMkdGV4dENvbG9yID09PSB2b2lkIDAgPyAnaW5oZXJpdCcgOiBfcHJvcHMkdGV4dENvbG9yLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ3N0YW5kYXJkJyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImFyaWEtbGFiZWxcIiwgXCJhcmlhLWxhYmVsbGVkYnlcIiwgXCJhY3Rpb25cIiwgXCJjZW50ZXJlZFwiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbXBvbmVudFwiLCBcImluZGljYXRvckNvbG9yXCIsIFwib25DaGFuZ2VcIiwgXCJvcmllbnRhdGlvblwiLCBcIlNjcm9sbEJ1dHRvbkNvbXBvbmVudFwiLCBcInNjcm9sbEJ1dHRvbnNcIiwgXCJzZWxlY3Rpb25Gb2xsb3dzRm9jdXNcIiwgXCJUYWJJbmRpY2F0b3JQcm9wc1wiLCBcIlRhYlNjcm9sbEJ1dHRvblByb3BzXCIsIFwidGV4dENvbG9yXCIsIFwidmFsdWVcIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICB2YXIgc2Nyb2xsYWJsZSA9IHZhcmlhbnQgPT09ICdzY3JvbGxhYmxlJztcbiAgdmFyIGlzUnRsID0gdGhlbWUuZGlyZWN0aW9uID09PSAncnRsJztcbiAgdmFyIHZlcnRpY2FsID0gb3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCc7XG4gIHZhciBzY3JvbGxTdGFydCA9IHZlcnRpY2FsID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCc7XG4gIHZhciBzdGFydCA9IHZlcnRpY2FsID8gJ3RvcCcgOiAnbGVmdCc7XG4gIHZhciBlbmQgPSB2ZXJ0aWNhbCA/ICdib3R0b20nIDogJ3JpZ2h0JztcbiAgdmFyIGNsaWVudFNpemUgPSB2ZXJ0aWNhbCA/ICdjbGllbnRIZWlnaHQnIDogJ2NsaWVudFdpZHRoJztcbiAgdmFyIHNpemUgPSB2ZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChjZW50ZXJlZCAmJiBzY3JvbGxhYmxlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNYXRlcmlhbC1VSTogWW91IGNhbiBub3QgdXNlIHRoZSBgY2VudGVyZWQ9e3RydWV9YCBhbmQgYHZhcmlhbnQ9XCJzY3JvbGxhYmxlXCJgIHByb3BlcnRpZXMgJyArICdhdCB0aGUgc2FtZSB0aW1lIG9uIGEgYFRhYnNgIGNvbXBvbmVudC4nKTtcbiAgICB9XG4gIH1cblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpLFxuICAgICAgbW91bnRlZCA9IF9SZWFjdCR1c2VTdGF0ZVswXSxcbiAgICAgIHNldE1vdW50ZWQgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTIgPSBSZWFjdC51c2VTdGF0ZSh7fSksXG4gICAgICBpbmRpY2F0b3JTdHlsZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRJbmRpY2F0b3JTdHlsZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTMgPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgc3RhcnQ6IGZhbHNlLFxuICAgIGVuZDogZmFsc2VcbiAgfSksXG4gICAgICBkaXNwbGF5U2Nyb2xsID0gX1JlYWN0JHVzZVN0YXRlM1swXSxcbiAgICAgIHNldERpc3BsYXlTY3JvbGwgPSBfUmVhY3QkdXNlU3RhdGUzWzFdO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGU0ID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBtYXJnaW5Cb3R0b206IG51bGxcbiAgfSksXG4gICAgICBzY3JvbGxlclN0eWxlID0gX1JlYWN0JHVzZVN0YXRlNFswXSxcbiAgICAgIHNldFNjcm9sbGVyU3R5bGUgPSBfUmVhY3QkdXNlU3RhdGU0WzFdO1xuXG4gIHZhciB2YWx1ZVRvSW5kZXggPSBuZXcgTWFwKCk7XG4gIHZhciB0YWJzUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgdGFiTGlzdFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICB2YXIgZ2V0VGFic01ldGEgPSBmdW5jdGlvbiBnZXRUYWJzTWV0YSgpIHtcbiAgICB2YXIgdGFic05vZGUgPSB0YWJzUmVmLmN1cnJlbnQ7XG4gICAgdmFyIHRhYnNNZXRhO1xuXG4gICAgaWYgKHRhYnNOb2RlKSB7XG4gICAgICB2YXIgcmVjdCA9IHRhYnNOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyAvLyBjcmVhdGUgYSBuZXcgb2JqZWN0IHdpdGggQ2xpZW50UmVjdCBjbGFzcyBwcm9wcyArIHNjcm9sbExlZnRcblxuICAgICAgdGFic01ldGEgPSB7XG4gICAgICAgIGNsaWVudFdpZHRoOiB0YWJzTm9kZS5jbGllbnRXaWR0aCxcbiAgICAgICAgc2Nyb2xsTGVmdDogdGFic05vZGUuc2Nyb2xsTGVmdCxcbiAgICAgICAgc2Nyb2xsVG9wOiB0YWJzTm9kZS5zY3JvbGxUb3AsXG4gICAgICAgIHNjcm9sbExlZnROb3JtYWxpemVkOiBnZXROb3JtYWxpemVkU2Nyb2xsTGVmdCh0YWJzTm9kZSwgdGhlbWUuZGlyZWN0aW9uKSxcbiAgICAgICAgc2Nyb2xsV2lkdGg6IHRhYnNOb2RlLnNjcm9sbFdpZHRoLFxuICAgICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgICBib3R0b206IHJlY3QuYm90dG9tLFxuICAgICAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgICAgIHJpZ2h0OiByZWN0LnJpZ2h0XG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciB0YWJNZXRhO1xuXG4gICAgaWYgKHRhYnNOb2RlICYmIHZhbHVlICE9PSBmYWxzZSkge1xuICAgICAgdmFyIF9jaGlsZHJlbiA9IHRhYkxpc3RSZWYuY3VycmVudC5jaGlsZHJlbjtcblxuICAgICAgaWYgKF9jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciB0YWIgPSBfY2hpbGRyZW5bdmFsdWVUb0luZGV4LmdldCh2YWx1ZSldO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgaWYgKCF0YWIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoW1wiTWF0ZXJpYWwtVUk6IFRoZSB2YWx1ZSBwcm92aWRlZCB0byB0aGUgVGFicyBjb21wb25lbnQgaXMgaW52YWxpZC5cIiwgXCJOb25lIG9mIHRoZSBUYWJzJyBjaGlsZHJlbiBtYXRjaCB3aXRoIGBcIi5jb25jYXQodmFsdWUsIFwiYC5cIiksIHZhbHVlVG9JbmRleC5rZXlzID8gXCJZb3UgY2FuIHByb3ZpZGUgb25lIG9mIHRoZSBmb2xsb3dpbmcgdmFsdWVzOiBcIi5jb25jYXQoQXJyYXkuZnJvbSh2YWx1ZVRvSW5kZXgua2V5cygpKS5qb2luKCcsICcpLCBcIi5cIikgOiBudWxsXS5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGFiTWV0YSA9IHRhYiA/IHRhYi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRhYnNNZXRhOiB0YWJzTWV0YSxcbiAgICAgIHRhYk1ldGE6IHRhYk1ldGFcbiAgICB9O1xuICB9O1xuXG4gIHZhciB1cGRhdGVJbmRpY2F0b3JTdGF0ZSA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBfbmV3SW5kaWNhdG9yU3R5bGU7XG5cbiAgICB2YXIgX2dldFRhYnNNZXRhID0gZ2V0VGFic01ldGEoKSxcbiAgICAgICAgdGFic01ldGEgPSBfZ2V0VGFic01ldGEudGFic01ldGEsXG4gICAgICAgIHRhYk1ldGEgPSBfZ2V0VGFic01ldGEudGFiTWV0YTtcblxuICAgIHZhciBzdGFydFZhbHVlID0gMDtcblxuICAgIGlmICh0YWJNZXRhICYmIHRhYnNNZXRhKSB7XG4gICAgICBpZiAodmVydGljYWwpIHtcbiAgICAgICAgc3RhcnRWYWx1ZSA9IHRhYk1ldGEudG9wIC0gdGFic01ldGEudG9wICsgdGFic01ldGEuc2Nyb2xsVG9wO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNvcnJlY3Rpb24gPSBpc1J0bCA/IHRhYnNNZXRhLnNjcm9sbExlZnROb3JtYWxpemVkICsgdGFic01ldGEuY2xpZW50V2lkdGggLSB0YWJzTWV0YS5zY3JvbGxXaWR0aCA6IHRhYnNNZXRhLnNjcm9sbExlZnQ7XG4gICAgICAgIHN0YXJ0VmFsdWUgPSB0YWJNZXRhLmxlZnQgLSB0YWJzTWV0YS5sZWZ0ICsgY29ycmVjdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbmV3SW5kaWNhdG9yU3R5bGUgPSAoX25ld0luZGljYXRvclN0eWxlID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfbmV3SW5kaWNhdG9yU3R5bGUsIHN0YXJ0LCBzdGFydFZhbHVlKSwgX2RlZmluZVByb3BlcnR5KF9uZXdJbmRpY2F0b3JTdHlsZSwgc2l6ZSwgdGFiTWV0YSA/IHRhYk1ldGFbc2l6ZV0gOiAwKSwgX25ld0luZGljYXRvclN0eWxlKTtcblxuICAgIGlmIChpc05hTihpbmRpY2F0b3JTdHlsZVtzdGFydF0pIHx8IGlzTmFOKGluZGljYXRvclN0eWxlW3NpemVdKSkge1xuICAgICAgc2V0SW5kaWNhdG9yU3R5bGUobmV3SW5kaWNhdG9yU3R5bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZFN0YXJ0ID0gTWF0aC5hYnMoaW5kaWNhdG9yU3R5bGVbc3RhcnRdIC0gbmV3SW5kaWNhdG9yU3R5bGVbc3RhcnRdKTtcbiAgICAgIHZhciBkU2l6ZSA9IE1hdGguYWJzKGluZGljYXRvclN0eWxlW3NpemVdIC0gbmV3SW5kaWNhdG9yU3R5bGVbc2l6ZV0pO1xuXG4gICAgICBpZiAoZFN0YXJ0ID49IDEgfHwgZFNpemUgPj0gMSkge1xuICAgICAgICBzZXRJbmRpY2F0b3JTdHlsZShuZXdJbmRpY2F0b3JTdHlsZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB2YXIgc2Nyb2xsID0gZnVuY3Rpb24gc2Nyb2xsKHNjcm9sbFZhbHVlKSB7XG4gICAgYW5pbWF0ZShzY3JvbGxTdGFydCwgdGFic1JlZi5jdXJyZW50LCBzY3JvbGxWYWx1ZSk7XG4gIH07XG5cbiAgdmFyIG1vdmVUYWJzU2Nyb2xsID0gZnVuY3Rpb24gbW92ZVRhYnNTY3JvbGwoZGVsdGEpIHtcbiAgICB2YXIgc2Nyb2xsVmFsdWUgPSB0YWJzUmVmLmN1cnJlbnRbc2Nyb2xsU3RhcnRdO1xuXG4gICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICBzY3JvbGxWYWx1ZSArPSBkZWx0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Nyb2xsVmFsdWUgKz0gZGVsdGEgKiAoaXNSdGwgPyAtMSA6IDEpOyAvLyBGaXggZm9yIEVkZ2VcblxuICAgICAgc2Nyb2xsVmFsdWUgKj0gaXNSdGwgJiYgZGV0ZWN0U2Nyb2xsVHlwZSgpID09PSAncmV2ZXJzZScgPyAtMSA6IDE7XG4gICAgfVxuXG4gICAgc2Nyb2xsKHNjcm9sbFZhbHVlKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlU3RhcnRTY3JvbGxDbGljayA9IGZ1bmN0aW9uIGhhbmRsZVN0YXJ0U2Nyb2xsQ2xpY2soKSB7XG4gICAgbW92ZVRhYnNTY3JvbGwoLXRhYnNSZWYuY3VycmVudFtjbGllbnRTaXplXSk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUVuZFNjcm9sbENsaWNrID0gZnVuY3Rpb24gaGFuZGxlRW5kU2Nyb2xsQ2xpY2soKSB7XG4gICAgbW92ZVRhYnNTY3JvbGwodGFic1JlZi5jdXJyZW50W2NsaWVudFNpemVdKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlU2Nyb2xsYmFyU2l6ZUNoYW5nZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uIChzY3JvbGxiYXJIZWlnaHQpIHtcbiAgICBzZXRTY3JvbGxlclN0eWxlKHtcbiAgICAgIG92ZXJmbG93OiBudWxsLFxuICAgICAgbWFyZ2luQm90dG9tOiAtc2Nyb2xsYmFySGVpZ2h0XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICB2YXIgZ2V0Q29uZGl0aW9uYWxFbGVtZW50cyA9IGZ1bmN0aW9uIGdldENvbmRpdGlvbmFsRWxlbWVudHMoKSB7XG4gICAgdmFyIGNvbmRpdGlvbmFsRWxlbWVudHMgPSB7fTtcbiAgICBjb25kaXRpb25hbEVsZW1lbnRzLnNjcm9sbGJhclNpemVMaXN0ZW5lciA9IHNjcm9sbGFibGUgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTY3JvbGxiYXJTaXplLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXMuc2Nyb2xsYWJsZSxcbiAgICAgIG9uQ2hhbmdlOiBoYW5kbGVTY3JvbGxiYXJTaXplQ2hhbmdlXG4gICAgfSkgOiBudWxsO1xuICAgIHZhciBzY3JvbGxCdXR0b25zQWN0aXZlID0gZGlzcGxheVNjcm9sbC5zdGFydCB8fCBkaXNwbGF5U2Nyb2xsLmVuZDtcbiAgICB2YXIgc2hvd1Njcm9sbEJ1dHRvbnMgPSBzY3JvbGxhYmxlICYmIChzY3JvbGxCdXR0b25zID09PSAnYXV0bycgJiYgc2Nyb2xsQnV0dG9uc0FjdGl2ZSB8fCBzY3JvbGxCdXR0b25zID09PSAnZGVza3RvcCcgfHwgc2Nyb2xsQnV0dG9ucyA9PT0gJ29uJyk7XG4gICAgY29uZGl0aW9uYWxFbGVtZW50cy5zY3JvbGxCdXR0b25TdGFydCA9IHNob3dTY3JvbGxCdXR0b25zID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU2Nyb2xsQnV0dG9uQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgICBvcmllbnRhdGlvbjogb3JpZW50YXRpb24sXG4gICAgICBkaXJlY3Rpb246IGlzUnRsID8gJ3JpZ2h0JyA6ICdsZWZ0JyxcbiAgICAgIG9uQ2xpY2s6IGhhbmRsZVN0YXJ0U2Nyb2xsQ2xpY2ssXG4gICAgICBkaXNhYmxlZDogIWRpc3BsYXlTY3JvbGwuc3RhcnQsXG4gICAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5zY3JvbGxCdXR0b25zLCBzY3JvbGxCdXR0b25zICE9PSAnb24nICYmIGNsYXNzZXMuc2Nyb2xsQnV0dG9uc0Rlc2t0b3ApXG4gICAgfSwgVGFiU2Nyb2xsQnV0dG9uUHJvcHMpKSA6IG51bGw7XG4gICAgY29uZGl0aW9uYWxFbGVtZW50cy5zY3JvbGxCdXR0b25FbmQgPSBzaG93U2Nyb2xsQnV0dG9ucyA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNjcm9sbEJ1dHRvbkNvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgb3JpZW50YXRpb246IG9yaWVudGF0aW9uLFxuICAgICAgZGlyZWN0aW9uOiBpc1J0bCA/ICdsZWZ0JyA6ICdyaWdodCcsXG4gICAgICBvbkNsaWNrOiBoYW5kbGVFbmRTY3JvbGxDbGljayxcbiAgICAgIGRpc2FibGVkOiAhZGlzcGxheVNjcm9sbC5lbmQsXG4gICAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5zY3JvbGxCdXR0b25zLCBzY3JvbGxCdXR0b25zICE9PSAnb24nICYmIGNsYXNzZXMuc2Nyb2xsQnV0dG9uc0Rlc2t0b3ApXG4gICAgfSwgVGFiU2Nyb2xsQnV0dG9uUHJvcHMpKSA6IG51bGw7XG4gICAgcmV0dXJuIGNvbmRpdGlvbmFsRWxlbWVudHM7XG4gIH07XG5cbiAgdmFyIHNjcm9sbFNlbGVjdGVkSW50b1ZpZXcgPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2dldFRhYnNNZXRhMiA9IGdldFRhYnNNZXRhKCksXG4gICAgICAgIHRhYnNNZXRhID0gX2dldFRhYnNNZXRhMi50YWJzTWV0YSxcbiAgICAgICAgdGFiTWV0YSA9IF9nZXRUYWJzTWV0YTIudGFiTWV0YTtcblxuICAgIGlmICghdGFiTWV0YSB8fCAhdGFic01ldGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGFiTWV0YVtzdGFydF0gPCB0YWJzTWV0YVtzdGFydF0pIHtcbiAgICAgIC8vIGxlZnQgc2lkZSBvZiBidXR0b24gaXMgb3V0IG9mIHZpZXdcbiAgICAgIHZhciBuZXh0U2Nyb2xsU3RhcnQgPSB0YWJzTWV0YVtzY3JvbGxTdGFydF0gKyAodGFiTWV0YVtzdGFydF0gLSB0YWJzTWV0YVtzdGFydF0pO1xuICAgICAgc2Nyb2xsKG5leHRTY3JvbGxTdGFydCk7XG4gICAgfSBlbHNlIGlmICh0YWJNZXRhW2VuZF0gPiB0YWJzTWV0YVtlbmRdKSB7XG4gICAgICAvLyByaWdodCBzaWRlIG9mIGJ1dHRvbiBpcyBvdXQgb2Ygdmlld1xuICAgICAgdmFyIF9uZXh0U2Nyb2xsU3RhcnQgPSB0YWJzTWV0YVtzY3JvbGxTdGFydF0gKyAodGFiTWV0YVtlbmRdIC0gdGFic01ldGFbZW5kXSk7XG5cbiAgICAgIHNjcm9sbChfbmV4dFNjcm9sbFN0YXJ0KTtcbiAgICB9XG4gIH0pO1xuICB2YXIgdXBkYXRlU2Nyb2xsQnV0dG9uU3RhdGUgPSB1c2VFdmVudENhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2Nyb2xsYWJsZSAmJiBzY3JvbGxCdXR0b25zICE9PSAnb2ZmJykge1xuICAgICAgdmFyIF90YWJzUmVmJGN1cnJlbnQgPSB0YWJzUmVmLmN1cnJlbnQsXG4gICAgICAgICAgc2Nyb2xsVG9wID0gX3RhYnNSZWYkY3VycmVudC5zY3JvbGxUb3AsXG4gICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gX3RhYnNSZWYkY3VycmVudC5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gX3RhYnNSZWYkY3VycmVudC5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgc2Nyb2xsV2lkdGggPSBfdGFic1JlZiRjdXJyZW50LnNjcm9sbFdpZHRoLFxuICAgICAgICAgIGNsaWVudFdpZHRoID0gX3RhYnNSZWYkY3VycmVudC5jbGllbnRXaWR0aDtcbiAgICAgIHZhciBzaG93U3RhcnRTY3JvbGw7XG4gICAgICB2YXIgc2hvd0VuZFNjcm9sbDtcblxuICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgIHNob3dTdGFydFNjcm9sbCA9IHNjcm9sbFRvcCA+IDE7XG4gICAgICAgIHNob3dFbmRTY3JvbGwgPSBzY3JvbGxUb3AgPCBzY3JvbGxIZWlnaHQgLSBjbGllbnRIZWlnaHQgLSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNjcm9sbExlZnQgPSBnZXROb3JtYWxpemVkU2Nyb2xsTGVmdCh0YWJzUmVmLmN1cnJlbnQsIHRoZW1lLmRpcmVjdGlvbik7IC8vIHVzZSAxIGZvciB0aGUgcG90ZW50aWFsIHJvdW5kaW5nIGVycm9yIHdpdGggYnJvd3NlciB6b29tcy5cblxuICAgICAgICBzaG93U3RhcnRTY3JvbGwgPSBpc1J0bCA/IHNjcm9sbExlZnQgPCBzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoIC0gMSA6IHNjcm9sbExlZnQgPiAxO1xuICAgICAgICBzaG93RW5kU2Nyb2xsID0gIWlzUnRsID8gc2Nyb2xsTGVmdCA8IHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGggLSAxIDogc2Nyb2xsTGVmdCA+IDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChzaG93U3RhcnRTY3JvbGwgIT09IGRpc3BsYXlTY3JvbGwuc3RhcnQgfHwgc2hvd0VuZFNjcm9sbCAhPT0gZGlzcGxheVNjcm9sbC5lbmQpIHtcbiAgICAgICAgc2V0RGlzcGxheVNjcm9sbCh7XG4gICAgICAgICAgc3RhcnQ6IHNob3dTdGFydFNjcm9sbCxcbiAgICAgICAgICBlbmQ6IHNob3dFbmRTY3JvbGxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlUmVzaXplID0gZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgdXBkYXRlSW5kaWNhdG9yU3RhdGUoKTtcbiAgICAgIHVwZGF0ZVNjcm9sbEJ1dHRvblN0YXRlKCk7XG4gICAgfSk7XG4gICAgdmFyIHdpbiA9IG93bmVyV2luZG93KHRhYnNSZWYuY3VycmVudCk7XG4gICAgd2luLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbmRsZVJlc2l6ZS5jbGVhcigpO1xuICAgICAgd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfTtcbiAgfSwgW3VwZGF0ZUluZGljYXRvclN0YXRlLCB1cGRhdGVTY3JvbGxCdXR0b25TdGF0ZV0pO1xuICB2YXIgaGFuZGxlVGFic1Njcm9sbCA9IFJlYWN0LnVzZUNhbGxiYWNrKGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICB1cGRhdGVTY3JvbGxCdXR0b25TdGF0ZSgpO1xuICB9KSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbmRsZVRhYnNTY3JvbGwuY2xlYXIoKTtcbiAgICB9O1xuICB9LCBbaGFuZGxlVGFic1Njcm9sbF0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHNldE1vdW50ZWQodHJ1ZSk7XG4gIH0sIFtdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB1cGRhdGVJbmRpY2F0b3JTdGF0ZSgpO1xuICAgIHVwZGF0ZVNjcm9sbEJ1dHRvblN0YXRlKCk7XG4gIH0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHNjcm9sbFNlbGVjdGVkSW50b1ZpZXcoKTtcbiAgfSwgW3Njcm9sbFNlbGVjdGVkSW50b1ZpZXcsIGluZGljYXRvclN0eWxlXSk7XG4gIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUoYWN0aW9uLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZUluZGljYXRvcjogdXBkYXRlSW5kaWNhdG9yU3RhdGUsXG4gICAgICB1cGRhdGVTY3JvbGxCdXR0b25zOiB1cGRhdGVTY3JvbGxCdXR0b25TdGF0ZVxuICAgIH07XG4gIH0sIFt1cGRhdGVJbmRpY2F0b3JTdGF0ZSwgdXBkYXRlU2Nyb2xsQnV0dG9uU3RhdGVdKTtcbiAgdmFyIGluZGljYXRvciA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRhYkluZGljYXRvciwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5pbmRpY2F0b3IsXG4gICAgb3JpZW50YXRpb246IG9yaWVudGF0aW9uLFxuICAgIGNvbG9yOiBpbmRpY2F0b3JDb2xvclxuICB9LCBUYWJJbmRpY2F0b3JQcm9wcywge1xuICAgIHN0eWxlOiBfZXh0ZW5kcyh7fSwgaW5kaWNhdG9yU3R5bGUsIFRhYkluZGljYXRvclByb3BzLnN0eWxlKVxuICB9KSk7XG4gIHZhciBjaGlsZEluZGV4ID0gMDtcbiAgdmFyIGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuUHJvcCwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKCEgLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChpc0ZyYWdtZW50KGNoaWxkKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgVGFicyBjb21wb25lbnQgZG9lc24ndCBhY2NlcHQgYSBGcmFnbWVudCBhcyBhIGNoaWxkLlwiLCAnQ29uc2lkZXIgcHJvdmlkaW5nIGFuIGFycmF5IGluc3RlYWQuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGlsZFZhbHVlID0gY2hpbGQucHJvcHMudmFsdWUgPT09IHVuZGVmaW5lZCA/IGNoaWxkSW5kZXggOiBjaGlsZC5wcm9wcy52YWx1ZTtcbiAgICB2YWx1ZVRvSW5kZXguc2V0KGNoaWxkVmFsdWUsIGNoaWxkSW5kZXgpO1xuICAgIHZhciBzZWxlY3RlZCA9IGNoaWxkVmFsdWUgPT09IHZhbHVlO1xuICAgIGNoaWxkSW5kZXggKz0gMTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgZnVsbFdpZHRoOiB2YXJpYW50ID09PSAnZnVsbFdpZHRoJyxcbiAgICAgIGluZGljYXRvcjogc2VsZWN0ZWQgJiYgIW1vdW50ZWQgJiYgaW5kaWNhdG9yLFxuICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkLFxuICAgICAgc2VsZWN0aW9uRm9sbG93c0ZvY3VzOiBzZWxlY3Rpb25Gb2xsb3dzRm9jdXMsXG4gICAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgICB0ZXh0Q29sb3I6IHRleHRDb2xvcixcbiAgICAgIHZhbHVlOiBjaGlsZFZhbHVlXG4gICAgfSk7XG4gIH0pO1xuXG4gIHZhciBoYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7IC8vIEtleWJvYXJkIG5hdmlnYXRpb24gYXNzdW1lcyB0aGF0IFtyb2xlPVwidGFiXCJdIGFyZSBzaWJsaW5nc1xuICAgIC8vIHRob3VnaCB3ZSBtaWdodCB3YXJuIGluIHRoZSBmdXR1cmUgYWJvdXQgbmVzdGVkLCBpbnRlcmFjdGl2ZSBlbGVtZW50c1xuICAgIC8vIGFzIGEgYTExeSB2aW9sYXRpb25cblxuICAgIHZhciByb2xlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgncm9sZScpO1xuXG4gICAgaWYgKHJvbGUgIT09ICd0YWInKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5ld0ZvY3VzVGFyZ2V0ID0gbnVsbDtcbiAgICB2YXIgcHJldmlvdXNJdGVtS2V5ID0gb3JpZW50YXRpb24gIT09IFwidmVydGljYWxcIiA/ICdBcnJvd0xlZnQnIDogJ0Fycm93VXAnO1xuICAgIHZhciBuZXh0SXRlbUtleSA9IG9yaWVudGF0aW9uICE9PSBcInZlcnRpY2FsXCIgPyAnQXJyb3dSaWdodCcgOiAnQXJyb3dEb3duJztcblxuICAgIGlmIChvcmllbnRhdGlvbiAhPT0gXCJ2ZXJ0aWNhbFwiICYmIHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgIC8vIHN3YXAgcHJldmlvdXNJdGVtS2V5IHdpdGggbmV4dEl0ZW1LZXlcbiAgICAgIHByZXZpb3VzSXRlbUtleSA9ICdBcnJvd1JpZ2h0JztcbiAgICAgIG5leHRJdGVtS2V5ID0gJ0Fycm93TGVmdCc7XG4gICAgfVxuXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgcHJldmlvdXNJdGVtS2V5OlxuICAgICAgICBuZXdGb2N1c1RhcmdldCA9IHRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nIHx8IHRhYkxpc3RSZWYuY3VycmVudC5sYXN0Q2hpbGQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIG5leHRJdGVtS2V5OlxuICAgICAgICBuZXdGb2N1c1RhcmdldCA9IHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcgfHwgdGFiTGlzdFJlZi5jdXJyZW50LmZpcnN0Q2hpbGQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgbmV3Rm9jdXNUYXJnZXQgPSB0YWJMaXN0UmVmLmN1cnJlbnQuZmlyc3RDaGlsZDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ0VuZCc6XG4gICAgICAgIG5ld0ZvY3VzVGFyZ2V0ID0gdGFiTGlzdFJlZi5jdXJyZW50Lmxhc3RDaGlsZDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChuZXdGb2N1c1RhcmdldCAhPT0gbnVsbCkge1xuICAgICAgbmV3Rm9jdXNUYXJnZXQuZm9jdXMoKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjb25kaXRpb25hbEVsZW1lbnRzID0gZ2V0Q29uZGl0aW9uYWxFbGVtZW50cygpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lLCB2ZXJ0aWNhbCAmJiBjbGFzc2VzLnZlcnRpY2FsKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlciksIGNvbmRpdGlvbmFsRWxlbWVudHMuc2Nyb2xsQnV0dG9uU3RhcnQsIGNvbmRpdGlvbmFsRWxlbWVudHMuc2Nyb2xsYmFyU2l6ZUxpc3RlbmVyLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMuc2Nyb2xsZXIsIHNjcm9sbGFibGUgPyBjbGFzc2VzLnNjcm9sbGFibGUgOiBjbGFzc2VzLmZpeGVkKSxcbiAgICBzdHlsZTogc2Nyb2xsZXJTdHlsZSxcbiAgICByZWY6IHRhYnNSZWYsXG4gICAgb25TY3JvbGw6IGhhbmRsZVRhYnNTY3JvbGxcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIFwiYXJpYS1sYWJlbFwiOiBhcmlhTGFiZWwsXG4gICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogYXJpYUxhYmVsbGVkQnksXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMuZmxleENvbnRhaW5lciwgdmVydGljYWwgJiYgY2xhc3Nlcy5mbGV4Q29udGFpbmVyVmVydGljYWwsIGNlbnRlcmVkICYmICFzY3JvbGxhYmxlICYmIGNsYXNzZXMuY2VudGVyZWQpLFxuICAgIG9uS2V5RG93bjogaGFuZGxlS2V5RG93bixcbiAgICByZWY6IHRhYkxpc3RSZWYsXG4gICAgcm9sZTogXCJ0YWJsaXN0XCJcbiAgfSwgY2hpbGRyZW4pLCBtb3VudGVkICYmIGluZGljYXRvciksIGNvbmRpdGlvbmFsRWxlbWVudHMuc2Nyb2xsQnV0dG9uRW5kKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVGFicy5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzLlxuICAgKiBUaGlzIGlzIHVzZWZ1bCB3aGVuIHlvdSB3YW50IHRvIHRyaWdnZXIgYW4gYWN0aW9uIHByb2dyYW1tYXRpY2FsbHkuXG4gICAqIEl0IHN1cHBvcnRzIHR3byBhY3Rpb25zOiBgdXBkYXRlSW5kaWNhdG9yKClgIGFuZCBgdXBkYXRlU2Nyb2xsQnV0dG9ucygpYFxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gYWN0aW9ucyBUaGlzIG9iamVjdCBjb250YWlucyBhbGwgcG9zc2libGUgYWN0aW9uc1xuICAgKiB0aGF0IGNhbiBiZSB0cmlnZ2VyZWQgcHJvZ3JhbW1hdGljYWxseS5cbiAgICovXG4gIGFjdGlvbjogcmVmVHlwZSxcblxuICAvKipcbiAgICogVGhlIGxhYmVsIGZvciB0aGUgVGFicyBhcyBhIHN0cmluZy5cbiAgICovXG4gICdhcmlhLWxhYmVsJzogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQW4gaWQgb3IgbGlzdCBvZiBpZHMgc2VwYXJhdGVkIGJ5IGEgc3BhY2UgdGhhdCBsYWJlbCB0aGUgVGFicy5cbiAgICovXG4gICdhcmlhLWxhYmVsbGVkYnknOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0YWJzIHdpbGwgYmUgY2VudGVyZWQuXG4gICAqIFRoaXMgcHJvcGVydHkgaXMgaW50ZW5kZWQgZm9yIGxhcmdlIHZpZXdzLlxuICAgKi9cbiAgY2VudGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgdGhlIGNvbG9yIG9mIHRoZSBpbmRpY2F0b3IuXG4gICAqL1xuICBpbmRpY2F0b3JDb2xvcjogUHJvcFR5cGVzLm9uZU9mKFsncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFja1xuICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgV2UgZGVmYXVsdCB0byB0aGUgaW5kZXggb2YgdGhlIGNoaWxkIChudW1iZXIpXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSB0YWJzIG9yaWVudGF0aW9uIChsYXlvdXQgZmxvdyBkaXJlY3Rpb24pLlxuICAgKi9cbiAgb3JpZW50YXRpb246IFByb3BUeXBlcy5vbmVPZihbJ2hvcml6b250YWwnLCAndmVydGljYWwnXSksXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCB0byByZW5kZXIgdGhlIHNjcm9sbCBidXR0b25zLlxuICAgKi9cbiAgU2Nyb2xsQnV0dG9uQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIERldGVybWluZSBiZWhhdmlvciBvZiBzY3JvbGwgYnV0dG9ucyB3aGVuIHRhYnMgYXJlIHNldCB0byBzY3JvbGw6XG4gICAqXG4gICAqIC0gYGF1dG9gIHdpbGwgb25seSBwcmVzZW50IHRoZW0gd2hlbiBub3QgYWxsIHRoZSBpdGVtcyBhcmUgdmlzaWJsZS5cbiAgICogLSBgZGVza3RvcGAgd2lsbCBvbmx5IHByZXNlbnQgdGhlbSBvbiBtZWRpdW0gYW5kIGxhcmdlciB2aWV3cG9ydHMuXG4gICAqIC0gYG9uYCB3aWxsIGFsd2F5cyBwcmVzZW50IHRoZW0uXG4gICAqIC0gYG9mZmAgd2lsbCBuZXZlciBwcmVzZW50IHRoZW0uXG4gICAqL1xuICBzY3JvbGxCdXR0b25zOiBQcm9wVHlwZXMub25lT2YoWydhdXRvJywgJ2Rlc2t0b3AnLCAnb2ZmJywgJ29uJ10pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAgdGhlIHNlbGVjdGVkIHRhYiBjaGFuZ2VzIG9uIGZvY3VzLiBPdGhlcndpc2UgaXQgb25seVxuICAgKiBjaGFuZ2VzIG9uIGFjdGl2YXRpb24uXG4gICAqL1xuICBzZWxlY3Rpb25Gb2xsb3dzRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSB0YWIgaW5kaWNhdG9yIGVsZW1lbnQuXG4gICAqL1xuICBUYWJJbmRpY2F0b3JQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgW2BUYWJTY3JvbGxCdXR0b25gXSgvYXBpL3RhYi1zY3JvbGwtYnV0dG9uLykgZWxlbWVudC5cbiAgICovXG4gIFRhYlNjcm9sbEJ1dHRvblByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHRoZSBjb2xvciBvZiB0aGUgYFRhYmAuXG4gICAqL1xuICB0ZXh0Q29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2luaGVyaXQnLCAncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGBUYWJgLlxuICAgKiBJZiB5b3UgZG9uJ3Qgd2FudCBhbnkgc2VsZWN0ZWQgYFRhYmAsIHlvdSBjYW4gc2V0IHRoaXMgcHJvcGVydHkgdG8gYGZhbHNlYC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGFkZGl0aW9uYWwgZGlzcGxheSBiZWhhdmlvciBvZiB0aGUgdGFiczpcbiAgICpcbiAgICogIC0gYHNjcm9sbGFibGVgIHdpbGwgaW52b2tlIHNjcm9sbGluZyBwcm9wZXJ0aWVzIGFuZCBhbGxvdyBmb3IgaG9yaXpvbnRhbGx5XG4gICAqICBzY3JvbGxpbmcgKG9yIHN3aXBpbmcpIG9mIHRoZSB0YWIgYmFyLlxuICAgKiAgLWBmdWxsV2lkdGhgIHdpbGwgbWFrZSB0aGUgdGFicyBncm93IHRvIHVzZSBhbGwgdGhlIGF2YWlsYWJsZSBzcGFjZSxcbiAgICogIHdoaWNoIHNob3VsZCBiZSB1c2VkIGZvciBzbWFsbCB2aWV3cywgbGlrZSBvbiBtb2JpbGUuXG4gICAqICAtIGBzdGFuZGFyZGAgd2lsbCByZW5kZXIgdGhlIGRlZmF1bHQgc3RhdGUuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydmdWxsV2lkdGgnLCAnc2Nyb2xsYWJsZScsICdzdGFuZGFyZCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlUYWJzJ1xufSkoVGFicyk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVGFicyc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnLi4vdXRpbHMvY2FwaXRhbGl6ZSc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgbWFyZ2luOiAwXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJib2R5MlwiYC4gKi9cbiAgICBib2R5MjogdGhlbWUudHlwb2dyYXBoeS5ib2R5MixcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJib2R5MVwiYC4gKi9cbiAgICBib2R5MTogdGhlbWUudHlwb2dyYXBoeS5ib2R5MSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJjYXB0aW9uXCJgLiAqL1xuICAgIGNhcHRpb246IHRoZW1lLnR5cG9ncmFwaHkuY2FwdGlvbixcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJidXR0b25cImAuICovXG4gICAgYnV0dG9uOiB0aGVtZS50eXBvZ3JhcGh5LmJ1dHRvbixcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJoMVwiYC4gKi9cbiAgICBoMTogdGhlbWUudHlwb2dyYXBoeS5oMSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJoMlwiYC4gKi9cbiAgICBoMjogdGhlbWUudHlwb2dyYXBoeS5oMixcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJoM1wiYC4gKi9cbiAgICBoMzogdGhlbWUudHlwb2dyYXBoeS5oMyxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJoNFwiYC4gKi9cbiAgICBoNDogdGhlbWUudHlwb2dyYXBoeS5oNCxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJoNVwiYC4gKi9cbiAgICBoNTogdGhlbWUudHlwb2dyYXBoeS5oNSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJoNlwiYC4gKi9cbiAgICBoNjogdGhlbWUudHlwb2dyYXBoeS5oNixcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJzdWJ0aXRsZTFcImAuICovXG4gICAgc3VidGl0bGUxOiB0aGVtZS50eXBvZ3JhcGh5LnN1YnRpdGxlMSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJzdWJ0aXRsZTJcImAuICovXG4gICAgc3VidGl0bGUyOiB0aGVtZS50eXBvZ3JhcGh5LnN1YnRpdGxlMixcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJvdmVybGluZVwiYC4gKi9cbiAgICBvdmVybGluZTogdGhlbWUudHlwb2dyYXBoeS5vdmVybGluZSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJzck9ubHlcImAuIE9ubHkgYWNjZXNzaWJsZSB0byBzY3JlZW4gcmVhZGVycy4gKi9cbiAgICBzck9ubHk6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgaGVpZ2h0OiAxLFxuICAgICAgd2lkdGg6IDEsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWxpZ249XCJsZWZ0XCJgLiAqL1xuICAgIGFsaWduTGVmdDoge1xuICAgICAgdGV4dEFsaWduOiAnbGVmdCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWxpZ249XCJjZW50ZXJcImAuICovXG4gICAgYWxpZ25DZW50ZXI6IHtcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWxpZ249XCJyaWdodFwiYC4gKi9cbiAgICBhbGlnblJpZ2h0OiB7XG4gICAgICB0ZXh0QWxpZ246ICdyaWdodCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWxpZ249XCJqdXN0aWZ5XCJgLiAqL1xuICAgIGFsaWduSnVzdGlmeToge1xuICAgICAgdGV4dEFsaWduOiAnanVzdGlmeSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgbm93cmFwPXt0cnVlfWAuICovXG4gICAgbm9XcmFwOiB7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBndXR0ZXJCb3R0b209e3RydWV9YC4gKi9cbiAgICBndXR0ZXJCb3R0b206IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogJzAuMzVlbSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgcGFyYWdyYXBoPXt0cnVlfWAuICovXG4gICAgcGFyYWdyYXBoOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IDE2XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwiaW5oZXJpdFwiYC4gKi9cbiAgICBjb2xvckluaGVyaXQ6IHtcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJwcmltYXJ5XCJgLiAqL1xuICAgIGNvbG9yUHJpbWFyeToge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwic2Vjb25kYXJ5XCJgLiAqL1xuICAgIGNvbG9yU2Vjb25kYXJ5OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cInRleHRQcmltYXJ5XCJgLiAqL1xuICAgIGNvbG9yVGV4dFByaW1hcnk6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cInRleHRTZWNvbmRhcnlcImAuICovXG4gICAgY29sb3JUZXh0U2Vjb25kYXJ5OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cImVycm9yXCJgLiAqL1xuICAgIGNvbG9yRXJyb3I6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzcGxheT1cImlubGluZVwiYC4gKi9cbiAgICBkaXNwbGF5SW5saW5lOiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNwbGF5PVwiYmxvY2tcImAuICovXG4gICAgZGlzcGxheUJsb2NrOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfVxuICB9O1xufTtcbnZhciBkZWZhdWx0VmFyaWFudE1hcHBpbmcgPSB7XG4gIGgxOiAnaDEnLFxuICBoMjogJ2gyJyxcbiAgaDM6ICdoMycsXG4gIGg0OiAnaDQnLFxuICBoNTogJ2g1JyxcbiAgaDY6ICdoNicsXG4gIHN1YnRpdGxlMTogJ2g2JyxcbiAgc3VidGl0bGUyOiAnaDYnLFxuICBib2R5MTogJ3AnLFxuICBib2R5MjogJ3AnXG59O1xudmFyIFR5cG9ncmFwaHkgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBUeXBvZ3JhcGh5KHByb3BzLCByZWYpIHtcbiAgdmFyIF9wcm9wcyRhbGlnbiA9IHByb3BzLmFsaWduLFxuICAgICAgYWxpZ24gPSBfcHJvcHMkYWxpZ24gPT09IHZvaWQgMCA/ICdpbmhlcml0JyA6IF9wcm9wcyRhbGlnbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBjb2xvciA9IF9wcm9wcyRjb2xvciA9PT0gdm9pZCAwID8gJ2luaXRpYWwnIDogX3Byb3BzJGNvbG9yLFxuICAgICAgY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgX3Byb3BzJGRpc3BsYXkgPSBwcm9wcy5kaXNwbGF5LFxuICAgICAgZGlzcGxheSA9IF9wcm9wcyRkaXNwbGF5ID09PSB2b2lkIDAgPyAnaW5pdGlhbCcgOiBfcHJvcHMkZGlzcGxheSxcbiAgICAgIF9wcm9wcyRndXR0ZXJCb3R0b20gPSBwcm9wcy5ndXR0ZXJCb3R0b20sXG4gICAgICBndXR0ZXJCb3R0b20gPSBfcHJvcHMkZ3V0dGVyQm90dG9tID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRndXR0ZXJCb3R0b20sXG4gICAgICBfcHJvcHMkbm9XcmFwID0gcHJvcHMubm9XcmFwLFxuICAgICAgbm9XcmFwID0gX3Byb3BzJG5vV3JhcCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkbm9XcmFwLFxuICAgICAgX3Byb3BzJHBhcmFncmFwaCA9IHByb3BzLnBhcmFncmFwaCxcbiAgICAgIHBhcmFncmFwaCA9IF9wcm9wcyRwYXJhZ3JhcGggPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHBhcmFncmFwaCxcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ2JvZHkxJyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgX3Byb3BzJHZhcmlhbnRNYXBwaW5nID0gcHJvcHMudmFyaWFudE1hcHBpbmcsXG4gICAgICB2YXJpYW50TWFwcGluZyA9IF9wcm9wcyR2YXJpYW50TWFwcGluZyA9PT0gdm9pZCAwID8gZGVmYXVsdFZhcmlhbnRNYXBwaW5nIDogX3Byb3BzJHZhcmlhbnRNYXBwaW5nLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImFsaWduXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbG9yXCIsIFwiY29tcG9uZW50XCIsIFwiZGlzcGxheVwiLCBcImd1dHRlckJvdHRvbVwiLCBcIm5vV3JhcFwiLCBcInBhcmFncmFwaFwiLCBcInZhcmlhbnRcIiwgXCJ2YXJpYW50TWFwcGluZ1wiXSk7XG5cbiAgdmFyIENvbXBvbmVudCA9IGNvbXBvbmVudCB8fCAocGFyYWdyYXBoID8gJ3AnIDogdmFyaWFudE1hcHBpbmdbdmFyaWFudF0gfHwgZGVmYXVsdFZhcmlhbnRNYXBwaW5nW3ZhcmlhbnRdKSB8fCAnc3Bhbic7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIHZhcmlhbnQgIT09ICdpbmhlcml0JyAmJiBjbGFzc2VzW3ZhcmlhbnRdLCBjb2xvciAhPT0gJ2luaXRpYWwnICYmIGNsYXNzZXNbXCJjb2xvclwiLmNvbmNhdChjYXBpdGFsaXplKGNvbG9yKSldLCBub1dyYXAgJiYgY2xhc3Nlcy5ub1dyYXAsIGd1dHRlckJvdHRvbSAmJiBjbGFzc2VzLmd1dHRlckJvdHRvbSwgcGFyYWdyYXBoICYmIGNsYXNzZXMucGFyYWdyYXBoLCBhbGlnbiAhPT0gJ2luaGVyaXQnICYmIGNsYXNzZXNbXCJhbGlnblwiLmNvbmNhdChjYXBpdGFsaXplKGFsaWduKSldLCBkaXNwbGF5ICE9PSAnaW5pdGlhbCcgJiYgY2xhc3Nlc1tcImRpc3BsYXlcIi5jb25jYXQoY2FwaXRhbGl6ZShkaXNwbGF5KSldKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUeXBvZ3JhcGh5LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFNldCB0aGUgdGV4dC1hbGlnbiBvbiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2luaGVyaXQnLCAnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnLCAnanVzdGlmeSddKSxcblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2luaXRpYWwnLCAnaW5oZXJpdCcsICdwcmltYXJ5JywgJ3NlY29uZGFyeScsICd0ZXh0UHJpbWFyeScsICd0ZXh0U2Vjb25kYXJ5JywgJ2Vycm9yJ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqIE92ZXJyaWRlcyB0aGUgYmVoYXZpb3Igb2YgdGhlIGB2YXJpYW50TWFwcGluZ2AgcHJvcC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBDb250cm9scyB0aGUgZGlzcGxheSB0eXBlXG4gICAqL1xuICBkaXNwbGF5OiBQcm9wVHlwZXMub25lT2YoWydpbml0aWFsJywgJ2Jsb2NrJywgJ2lubGluZSddKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgdGV4dCB3aWxsIGhhdmUgYSBib3R0b20gbWFyZ2luLlxuICAgKi9cbiAgZ3V0dGVyQm90dG9tOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgdGV4dCB3aWxsIG5vdCB3cmFwLCBidXQgaW5zdGVhZCB3aWxsIHRydW5jYXRlIHdpdGggYSB0ZXh0IG92ZXJmbG93IGVsbGlwc2lzLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGV4dCBvdmVyZmxvdyBjYW4gb25seSBoYXBwZW4gd2l0aCBibG9jayBvciBpbmxpbmUtYmxvY2sgbGV2ZWwgZWxlbWVudHNcbiAgICogKHRoZSBlbGVtZW50IG5lZWRzIHRvIGhhdmUgYSB3aWR0aCBpbiBvcmRlciB0byBvdmVyZmxvdykuXG4gICAqL1xuICBub1dyYXA6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSB0ZXh0IHdpbGwgaGF2ZSBhIGJvdHRvbSBtYXJnaW4uXG4gICAqL1xuICBwYXJhZ3JhcGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIHRoZSB0aGVtZSB0eXBvZ3JhcGh5IHN0eWxlcy5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ3N1YnRpdGxlMScsICdzdWJ0aXRsZTInLCAnYm9keTEnLCAnYm9keTInLCAnY2FwdGlvbicsICdidXR0b24nLCAnb3ZlcmxpbmUnLCAnc3JPbmx5JywgJ2luaGVyaXQnXSksXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgbWFwcyB0aGUgdmFyaWFudCBwcm9wIHRvIGEgcmFuZ2Ugb2YgZGlmZmVyZW50IEhUTUwgZWxlbWVudCB0eXBlcy5cbiAgICogRm9yIGluc3RhbmNlLCBzdWJ0aXRsZTEgdG8gYDxoNj5gLlxuICAgKiBJZiB5b3Ugd2lzaCB0byBjaGFuZ2UgdGhhdCBtYXBwaW5nLCB5b3UgY2FuIHByb3ZpZGUgeW91ciBvd24uXG4gICAqIEFsdGVybmF0aXZlbHksIHlvdSBjYW4gdXNlIHRoZSBgY29tcG9uZW50YCBwcm9wLlxuICAgKi9cbiAgdmFyaWFudE1hcHBpbmc6IFByb3BUeXBlcy5vYmplY3Rcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpVHlwb2dyYXBoeSdcbn0pKFR5cG9ncmFwaHkpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1R5cG9ncmFwaHknOyIsImZ1bmN0aW9uIGVhc2VJbk91dFNpbih0aW1lKSB7XG4gIHJldHVybiAoMSArIE1hdGguc2luKE1hdGguUEkgKiB0aW1lIC0gTWF0aC5QSSAvIDIpKSAvIDI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFuaW1hdGUocHJvcGVydHksIGVsZW1lbnQsIHRvKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgdmFyIGNiID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgYXJndW1lbnRzWzRdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNF0gOiBmdW5jdGlvbiAoKSB7fTtcbiAgdmFyIF9vcHRpb25zJGVhc2UgPSBvcHRpb25zLmVhc2UsXG4gICAgICBlYXNlID0gX29wdGlvbnMkZWFzZSA9PT0gdm9pZCAwID8gZWFzZUluT3V0U2luIDogX29wdGlvbnMkZWFzZSxcbiAgICAgIF9vcHRpb25zJGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbixcbiAgICAgIGR1cmF0aW9uID0gX29wdGlvbnMkZHVyYXRpb24gPT09IHZvaWQgMCA/IDMwMCA6IF9vcHRpb25zJGR1cmF0aW9uO1xuICB2YXIgc3RhcnQgPSBudWxsO1xuICB2YXIgZnJvbSA9IGVsZW1lbnRbcHJvcGVydHldO1xuICB2YXIgY2FuY2VsbGVkID0gZmFsc2U7XG5cbiAgdmFyIGNhbmNlbCA9IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICB9O1xuXG4gIHZhciBzdGVwID0gZnVuY3Rpb24gc3RlcCh0aW1lc3RhbXApIHtcbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjYihuZXcgRXJyb3IoJ0FuaW1hdGlvbiBjYW5jZWxsZWQnKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID09PSBudWxsKSB7XG4gICAgICBzdGFydCA9IHRpbWVzdGFtcDtcbiAgICB9XG5cbiAgICB2YXIgdGltZSA9IE1hdGgubWluKDEsICh0aW1lc3RhbXAgLSBzdGFydCkgLyBkdXJhdGlvbik7XG4gICAgZWxlbWVudFtwcm9wZXJ0eV0gPSBlYXNlKHRpbWUpICogKHRvIC0gZnJvbSkgKyBmcm9tO1xuXG4gICAgaWYgKHRpbWUgPj0gMSkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2IobnVsbCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gIH07XG5cbiAgaWYgKGZyb20gPT09IHRvKSB7XG4gICAgY2IobmV3IEVycm9yKCdFbGVtZW50IGFscmVhZHkgYXQgdGFyZ2V0IHBvc2l0aW9uJykpO1xuICAgIHJldHVybiBjYW5jZWw7XG4gIH1cblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gIHJldHVybiBjYW5jZWw7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTUuNDEgMTYuMDlsLTQuNTgtNC41OSA0LjU4LTQuNTlMMTQgNS41bC02IDYgNiA2elwiXG59KSwgJ0tleWJvYXJkQXJyb3dMZWZ0Jyk7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNOC41OSAxNi4zNGw0LjU4LTQuNTktNC41OC00LjU5TDEwIDUuNzVsNiA2LTYgNnpcIlxufSksICdLZXlib2FyZEFycm93UmlnaHQnKTsiLCJpbXBvcnQgeyBmb3JtYXRNdWlFcnJvck1lc3NhZ2UgYXMgX2Zvcm1hdE11aUVycm9yTWVzc2FnZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIjtcbi8vIEl0IHNob3VsZCB0byBiZSBub3RlZCB0aGF0IHRoaXMgZnVuY3Rpb24gaXNuJ3QgZXF1aXZhbGVudCB0byBgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemVgLlxuLy9cbi8vIEEgc3RyaWN0IGNhcGl0YWxpemF0aW9uIHNob3VsZCB1cHBlcmNhc2UgdGhlIGZpcnN0IGxldHRlciBvZiBlYWNoIHdvcmQgYSB0aGUgc2VudGVuY2UuXG4vLyBXZSBvbmx5IGhhbmRsZSB0aGUgZmlyc3Qgd29yZC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBcIk1hdGVyaWFsLVVJOiBjYXBpdGFsaXplKHN0cmluZykgZXhwZWN0cyBhIHN0cmluZyBhcmd1bWVudC5cIiA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoNykpO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn0iLCIvKipcbiAqIFNhZmUgY2hhaW5lZCBmdW5jdGlvblxuICpcbiAqIFdpbGwgb25seSBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gaWYgbmVlZGVkLFxuICogb3RoZXJ3aXNlIHdpbGwgcGFzcyBiYWNrIGV4aXN0aW5nIGZ1bmN0aW9ucyBvciBudWxsLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmN0aW9ucyB0byBjaGFpblxuICogQHJldHVybnMge2Z1bmN0aW9ufG51bGx9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNoYWluZWRGdW5jdGlvbigpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmNzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmNzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBmdW5jKSB7XG4gICAgaWYgKGZ1bmMgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBJbnZhbGlkIEFyZ3VtZW50IFR5cGUsIG11c3Qgb25seSBwcm92aWRlIGZ1bmN0aW9ucywgdW5kZWZpbmVkLCBvciBudWxsLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBjaGFpbmVkRnVuY3Rpb24oKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBhY2MuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gIH0sIGZ1bmN0aW9uICgpIHt9KTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuLi9TdmdJY29uJztcbi8qKlxuICogUHJpdmF0ZSBtb2R1bGUgcmVzZXJ2ZWQgZm9yIEBtYXRlcmlhbC11aS94IHBhY2thZ2VzLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN2Z0ljb24ocGF0aCwgZGlzcGxheU5hbWUpIHtcbiAgdmFyIENvbXBvbmVudCA9IGZ1bmN0aW9uIENvbXBvbmVudChwcm9wcywgcmVmKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFN2Z0ljb24sIF9leHRlbmRzKHtcbiAgICAgIHJlZjogcmVmXG4gICAgfSwgcHJvcHMpLCBwYXRoKTtcbiAgfTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIE5lZWQgdG8gc2V0IGBkaXNwbGF5TmFtZWAgb24gdGhlIGlubmVyIGNvbXBvbmVudCBmb3IgUmVhY3QubWVtby5cbiAgICAvLyBSZWFjdCBwcmlvciB0byAxNi4xNCBpZ25vcmVzIGBkaXNwbGF5TmFtZWAgb24gdGhlIHdyYXBwZXIuXG4gICAgQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gXCJcIi5jb25jYXQoZGlzcGxheU5hbWUsIFwiSWNvblwiKTtcbiAgfVxuXG4gIENvbXBvbmVudC5tdWlOYW1lID0gU3ZnSWNvbi5tdWlOYW1lO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0Lm1lbW8oIC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKENvbXBvbmVudCkpO1xufSIsIi8vIENvcnJlc3BvbmRzIHRvIDEwIGZyYW1lcyBhdCA2MCBIei5cbi8vIEEgZmV3IGJ5dGVzIHBheWxvYWQgb3ZlcmhlYWQgd2hlbiBsb2Rhc2gvZGVib3VuY2UgaXMgfjMga0IgYW5kIGRlYm91bmNlIH4zMDAgQi5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMpIHtcbiAgdmFyIHdhaXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDE2NjtcbiAgdmFyIHRpbWVvdXQ7XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC10aGlzXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24gbGF0ZXIoKSB7XG4gICAgICBmdW5jLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICB9XG5cbiAgZGVib3VuY2VkLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgfTtcblxuICByZXR1cm4gZGVib3VuY2VkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlcHJlY2F0ZWRQcm9wVHlwZSh2YWxpZGF0b3IsIHJlYXNvbikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICB2YXIgY29tcG9uZW50TmFtZVNhZmUgPSBjb21wb25lbnROYW1lIHx8ICc8PGFub255bW91cz4+JztcbiAgICB2YXIgcHJvcEZ1bGxOYW1lU2FmZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgIGlmICh0eXBlb2YgcHJvcHNbcHJvcE5hbWVdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIlRoZSBcIi5jb25jYXQobG9jYXRpb24sIFwiIGBcIikuY29uY2F0KHByb3BGdWxsTmFtZVNhZmUsIFwiYCBvZiBcIikgKyBcImBcIi5jb25jYXQoY29tcG9uZW50TmFtZVNhZmUsIFwiYCBpcyBkZXByZWNhdGVkLiBcIikuY29uY2F0KHJlYXNvbikpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xufSIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2FwaXRhbGl6ZSB9IGZyb20gJy4vY2FwaXRhbGl6ZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZUNoYWluZWRGdW5jdGlvbiB9IGZyb20gJy4vY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3JlYXRlU3ZnSWNvbiB9IGZyb20gJy4vY3JlYXRlU3ZnSWNvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGRlYm91bmNlIH0gZnJvbSAnLi9kZWJvdW5jZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGRlcHJlY2F0ZWRQcm9wVHlwZSB9IGZyb20gJy4vZGVwcmVjYXRlZFByb3BUeXBlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaXNNdWlFbGVtZW50IH0gZnJvbSAnLi9pc011aUVsZW1lbnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBvd25lckRvY3VtZW50IH0gZnJvbSAnLi9vd25lckRvY3VtZW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgb3duZXJXaW5kb3cgfSBmcm9tICcuL293bmVyV2luZG93JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVxdWlyZVByb3BGYWN0b3J5IH0gZnJvbSAnLi9yZXF1aXJlUHJvcEZhY3RvcnknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBzZXRSZWYgfSBmcm9tICcuL3NldFJlZic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVuc3VwcG9ydGVkUHJvcCB9IGZyb20gJy4vdW5zdXBwb3J0ZWRQcm9wJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlQ29udHJvbGxlZCB9IGZyb20gJy4vdXNlQ29udHJvbGxlZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUV2ZW50Q2FsbGJhY2sgfSBmcm9tICcuL3VzZUV2ZW50Q2FsbGJhY2snO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VGb3JrUmVmIH0gZnJvbSAnLi91c2VGb3JrUmVmJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVuc3RhYmxlX3VzZUlkIH0gZnJvbSAnLi91bnN0YWJsZV91c2VJZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUlzRm9jdXNWaXNpYmxlIH0gZnJvbSAnLi91c2VJc0ZvY3VzVmlzaWJsZSc7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNNdWlFbGVtZW50KGVsZW1lbnQsIG11aU5hbWVzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoZWxlbWVudCkgJiYgbXVpTmFtZXMuaW5kZXhPZihlbGVtZW50LnR5cGUubXVpTmFtZSkgIT09IC0xO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG93bmVyRG9jdW1lbnQobm9kZSkge1xuICByZXR1cm4gbm9kZSAmJiBub2RlLm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQ7XG59IiwiaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnLi9vd25lckRvY3VtZW50JztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG93bmVyV2luZG93KG5vZGUpIHtcbiAgdmFyIGRvYyA9IG93bmVyRG9jdW1lbnQobm9kZSk7XG4gIHJldHVybiBkb2MuZGVmYXVsdFZpZXcgfHwgd2luZG93O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVQcm9wRmFjdG9yeShjb21wb25lbnROYW1lSW5FcnJvcikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICB9XG5cbiAgdmFyIHJlcXVpcmVQcm9wID0gZnVuY3Rpb24gcmVxdWlyZVByb3AocmVxdWlyZWRQcm9wKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wRnVsbE5hbWVTYWZlID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAodHlwZW9mIHByb3BzW3Byb3BOYW1lXSAhPT0gJ3VuZGVmaW5lZCcgJiYgIXByb3BzW3JlcXVpcmVkUHJvcF0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIlRoZSBwcm9wIGBcIi5jb25jYXQocHJvcEZ1bGxOYW1lU2FmZSwgXCJgIG9mIFwiKSArIFwiYFwiLmNvbmNhdChjb21wb25lbnROYW1lSW5FcnJvciwgXCJgIG11c3QgYmUgdXNlZCBvbiBgXCIpLmNvbmNhdChyZXF1aXJlZFByb3AsIFwiYC5cIikpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiByZXF1aXJlUHJvcDtcbn0iLCIvLyBTb3VyY2UgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYWxpdGFoZXJpL25vcm1hbGl6ZS1zY3JvbGwtbGVmdFxudmFyIGNhY2hlZFR5cGU7XG4vKipcbiAqIEJhc2VkIG9uIHRoZSBqcXVlcnkgcGx1Z2luIGh0dHBzOi8vZ2l0aHViLmNvbS9vdGhyZWUvanF1ZXJ5LnJ0bC1zY3JvbGwtdHlwZVxuICpcbiAqIFR5cGVzIG9mIHNjcm9sbExlZnQsIGFzc3VtaW5nIHNjcm9sbFdpZHRoPTEwMCBhbmQgZGlyZWN0aW9uIGlzIHJ0bC5cbiAqXG4gKiBUeXBlICAgICAgICAgICAgIHwgPC0gTW9zdCBMZWZ0IHwgTW9zdCBSaWdodCAtPiB8IEluaXRpYWxcbiAqIC0tLS0tLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLS0tIHwgLS0tLS0tLVxuICogZGVmYXVsdCAgICAgICAgICB8IDAgICAgICAgICAgICB8IDEwMCAgICAgICAgICAgfCAxMDBcbiAqIG5lZ2F0aXZlIChzcGVjKikgfCAtMTAwICAgICAgICAgfCAwICAgICAgICAgICAgIHwgMFxuICogcmV2ZXJzZSAgICAgICAgICB8IDEwMCAgICAgICAgICB8IDAgICAgICAgICAgICAgfCAwXG4gKlxuICogRWRnZSA4NTogZGVmYXVsdFxuICogU2FmYXJpIDE0OiBuZWdhdGl2ZVxuICogQ2hyb21lIDg1OiBuZWdhdGl2ZVxuICogRmlyZWZveCA4MTogbmVnYXRpdmVcbiAqIElFIDExOiByZXZlcnNlXG4gKlxuICogc3BlYyogaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzc29tLXZpZXcvI2RvbS13aW5kb3ctc2Nyb2xsXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdFNjcm9sbFR5cGUoKSB7XG4gIGlmIChjYWNoZWRUeXBlKSB7XG4gICAgcmV0dXJuIGNhY2hlZFR5cGU7XG4gIH1cblxuICB2YXIgZHVtbXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuc3R5bGUud2lkdGggPSAnMTBweCc7XG4gIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMXB4JztcbiAgZHVtbXkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgZHVtbXkuZGlyID0gJ3J0bCc7XG4gIGR1bW15LnN0eWxlLmZvbnRTaXplID0gJzE0cHgnO1xuICBkdW1teS5zdHlsZS53aWR0aCA9ICc0cHgnO1xuICBkdW1teS5zdHlsZS5oZWlnaHQgPSAnMXB4JztcbiAgZHVtbXkuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBkdW1teS5zdHlsZS50b3AgPSAnLTEwMDBweCc7XG4gIGR1bW15LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZHVtbXkpO1xuICBjYWNoZWRUeXBlID0gJ3JldmVyc2UnO1xuXG4gIGlmIChkdW1teS5zY3JvbGxMZWZ0ID4gMCkge1xuICAgIGNhY2hlZFR5cGUgPSAnZGVmYXVsdCc7XG4gIH0gZWxzZSB7XG4gICAgZHVtbXkuc2Nyb2xsTGVmdCA9IDE7XG5cbiAgICBpZiAoZHVtbXkuc2Nyb2xsTGVmdCA9PT0gMCkge1xuICAgICAgY2FjaGVkVHlwZSA9ICduZWdhdGl2ZSc7XG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkdW1teSk7XG4gIHJldHVybiBjYWNoZWRUeXBlO1xufSAvLyBCYXNlZCBvbiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjQzOTQzNzZcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRTY3JvbGxMZWZ0KGVsZW1lbnQsIGRpcmVjdGlvbikge1xuICB2YXIgc2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDsgLy8gUGVyZm9ybSB0aGUgY2FsY3VsYXRpb25zIG9ubHkgd2hlbiBkaXJlY3Rpb24gaXMgcnRsIHRvIGF2b2lkIG1lc3NpbmcgdXAgdGhlIGx0ciBiYWhhdmlvclxuXG4gIGlmIChkaXJlY3Rpb24gIT09ICdydGwnKSB7XG4gICAgcmV0dXJuIHNjcm9sbExlZnQ7XG4gIH1cblxuICB2YXIgdHlwZSA9IGRldGVjdFNjcm9sbFR5cGUoKTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICduZWdhdGl2ZSc6XG4gICAgICByZXR1cm4gZWxlbWVudC5zY3JvbGxXaWR0aCAtIGVsZW1lbnQuY2xpZW50V2lkdGggKyBzY3JvbGxMZWZ0O1xuXG4gICAgY2FzZSAncmV2ZXJzZSc6XG4gICAgICByZXR1cm4gZWxlbWVudC5zY3JvbGxXaWR0aCAtIGVsZW1lbnQuY2xpZW50V2lkdGggLSBzY3JvbGxMZWZ0O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzY3JvbGxMZWZ0O1xuICB9XG59IiwiLy8gVE9ETyB2NTogY29uc2lkZXIgdG8gbWFrZSBpdCBwcml2YXRlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRSZWYocmVmLCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJlZih2YWx1ZSk7XG4gIH0gZWxzZSBpZiAocmVmKSB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfVxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogUHJpdmF0ZSBtb2R1bGUgcmVzZXJ2ZWQgZm9yIEBtYXRlcmlhbC11aS94IHBhY2thZ2VzLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUlkKGlkT3ZlcnJpZGUpIHtcbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGlkT3ZlcnJpZGUpLFxuICAgICAgZGVmYXVsdElkID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0RGVmYXVsdElkID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBpZCA9IGlkT3ZlcnJpZGUgfHwgZGVmYXVsdElkO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChkZWZhdWx0SWQgPT0gbnVsbCkge1xuICAgICAgLy8gRmFsbGJhY2sgdG8gdGhpcyBkZWZhdWx0IGlkIHdoZW4gcG9zc2libGUuXG4gICAgICAvLyBVc2UgdGhlIHJhbmRvbSB2YWx1ZSBmb3IgY2xpZW50LXNpZGUgcmVuZGVyaW5nIG9ubHkuXG4gICAgICAvLyBXZSBjYW4ndCB1c2UgaXQgc2VydmVyLXNpZGUuXG4gICAgICBzZXREZWZhdWx0SWQoXCJtdWktXCIuY29uY2F0KE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDFlNSkpKTtcbiAgICB9XG4gIH0sIFtkZWZhdWx0SWRdKTtcbiAgcmV0dXJuIGlkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuc3VwcG9ydGVkUHJvcChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBwcm9wRnVsbE5hbWVTYWZlID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gIGlmICh0eXBlb2YgcHJvcHNbcHJvcE5hbWVdICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBuZXcgRXJyb3IoXCJUaGUgcHJvcCBgXCIuY29uY2F0KHByb3BGdWxsTmFtZVNhZmUsIFwiYCBpcyBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgcmVtb3ZlIGl0LlwiKSk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rcywgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDb250cm9sbGVkKF9yZWYpIHtcbiAgdmFyIGNvbnRyb2xsZWQgPSBfcmVmLmNvbnRyb2xsZWQsXG4gICAgICBkZWZhdWx0UHJvcCA9IF9yZWYuZGVmYXVsdCxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBfcmVmJHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIHN0YXRlID0gX3JlZiRzdGF0ZSA9PT0gdm9pZCAwID8gJ3ZhbHVlJyA6IF9yZWYkc3RhdGU7XG5cbiAgdmFyIF9SZWFjdCR1c2VSZWYgPSBSZWFjdC51c2VSZWYoY29udHJvbGxlZCAhPT0gdW5kZWZpbmVkKSxcbiAgICAgIGlzQ29udHJvbGxlZCA9IF9SZWFjdCR1c2VSZWYuY3VycmVudDtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZGVmYXVsdFByb3ApLFxuICAgICAgdmFsdWVTdGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZVswXSxcbiAgICAgIHNldFZhbHVlID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciB2YWx1ZSA9IGlzQ29udHJvbGxlZCA/IGNvbnRyb2xsZWQgOiB2YWx1ZVN0YXRlO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpc0NvbnRyb2xsZWQgIT09IChjb250cm9sbGVkICE9PSB1bmRlZmluZWQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoW1wiTWF0ZXJpYWwtVUk6IEEgY29tcG9uZW50IGlzIGNoYW5naW5nIHRoZSBcIi5jb25jYXQoaXNDb250cm9sbGVkID8gJycgOiAndW4nLCBcImNvbnRyb2xsZWQgXCIpLmNvbmNhdChzdGF0ZSwgXCIgc3RhdGUgb2YgXCIpLmNvbmNhdChuYW1lLCBcIiB0byBiZSBcIikuY29uY2F0KGlzQ29udHJvbGxlZCA/ICd1bicgOiAnJywgXCJjb250cm9sbGVkLlwiKSwgJ0VsZW1lbnRzIHNob3VsZCBub3Qgc3dpdGNoIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWQgKG9yIHZpY2UgdmVyc2EpLicsIFwiRGVjaWRlIGJldHdlZW4gdXNpbmcgYSBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCBcIi5jb25jYXQobmFtZSwgXCIgXCIpICsgJ2VsZW1lbnQgZm9yIHRoZSBsaWZldGltZSBvZiB0aGUgY29tcG9uZW50LicsIFwiVGhlIG5hdHVyZSBvZiB0aGUgc3RhdGUgaXMgZGV0ZXJtaW5lZCBkdXJpbmcgdGhlIGZpcnN0IHJlbmRlciwgaXQncyBjb25zaWRlcmVkIGNvbnRyb2xsZWQgaWYgdGhlIHZhbHVlIGlzIG5vdCBgdW5kZWZpbmVkYC5cIiwgJ01vcmUgaW5mbzogaHR0cHM6Ly9mYi5tZS9yZWFjdC1jb250cm9sbGVkLWNvbXBvbmVudHMnXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfSwgW2NvbnRyb2xsZWRdKTtcblxuICAgIHZhciBfUmVhY3QkdXNlUmVmMiA9IFJlYWN0LnVzZVJlZihkZWZhdWx0UHJvcCksXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9IF9SZWFjdCR1c2VSZWYyLmN1cnJlbnQ7XG5cbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFpc0NvbnRyb2xsZWQgJiYgZGVmYXVsdFZhbHVlICE9PSBkZWZhdWx0UHJvcCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBBIGNvbXBvbmVudCBpcyBjaGFuZ2luZyB0aGUgZGVmYXVsdCBcIi5jb25jYXQoc3RhdGUsIFwiIHN0YXRlIG9mIGFuIHVuY29udHJvbGxlZCBcIikuY29uY2F0KG5hbWUsIFwiIGFmdGVyIGJlaW5nIGluaXRpYWxpemVkLiBcIikgKyBcIlRvIHN1cHByZXNzIHRoaXMgd2FybmluZyBvcHQgdG8gdXNlIGEgY29udHJvbGxlZCBcIi5jb25jYXQobmFtZSwgXCIuXCIpXS5qb2luKCdcXG4nKSk7XG4gICAgICB9XG4gICAgfSwgW0pTT04uc3RyaW5naWZ5KGRlZmF1bHRQcm9wKV0pO1xuICB9XG5cbiAgdmFyIHNldFZhbHVlSWZVbmNvbnRyb2xsZWQgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICBpZiAoIWlzQ29udHJvbGxlZCkge1xuICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH1cbiAgfSwgW10pO1xuICByZXR1cm4gW3ZhbHVlLCBzZXRWYWx1ZUlmVW5jb250cm9sbGVkXTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG52YXIgdXNlRW5oYW5jZWRFZmZlY3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFJlYWN0LnVzZUxheW91dEVmZmVjdCA6IFJlYWN0LnVzZUVmZmVjdDtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xNDA5OSNpc3N1ZWNvbW1lbnQtNDQwMDEzODkyXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VFdmVudENhbGxiYWNrKGZuKSB7XG4gIHZhciByZWYgPSBSZWFjdC51c2VSZWYoZm4pO1xuICB1c2VFbmhhbmNlZEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmVmLmN1cnJlbnQgPSBmbjtcbiAgfSk7XG4gIHJldHVybiBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICgwLCByZWYuY3VycmVudCkuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICB9LCBbXSk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHNldFJlZiBmcm9tICcuL3NldFJlZic7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGb3JrUmVmKHJlZkEsIHJlZkIpIHtcbiAgLyoqXG4gICAqIFRoaXMgd2lsbCBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gaWYgdGhlIHJlZiBwcm9wcyBjaGFuZ2UgYW5kIGFyZSBkZWZpbmVkLlxuICAgKiBUaGlzIG1lYW5zIHJlYWN0IHdpbGwgY2FsbCB0aGUgb2xkIGZvcmtSZWYgd2l0aCBgbnVsbGAgYW5kIHRoZSBuZXcgZm9ya1JlZlxuICAgKiB3aXRoIHRoZSByZWYuIENsZWFudXAgbmF0dXJhbGx5IGVtZXJnZXMgZnJvbSB0aGlzIGJlaGF2aW9yXG4gICAqL1xuICByZXR1cm4gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHJlZkEgPT0gbnVsbCAmJiByZWZCID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAocmVmVmFsdWUpIHtcbiAgICAgIHNldFJlZihyZWZBLCByZWZWYWx1ZSk7XG4gICAgICBzZXRSZWYocmVmQiwgcmVmVmFsdWUpO1xuICAgIH07XG4gIH0sIFtyZWZBLCByZWZCXSk7XG59IiwiLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvZm9jdXMtdmlzaWJsZS9ibG9iL3Y0LjEuNS9zcmMvZm9jdXMtdmlzaWJsZS5qc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbnZhciBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbnZhciBoYWRGb2N1c1Zpc2libGVSZWNlbnRseSA9IGZhbHNlO1xudmFyIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5VGltZW91dCA9IG51bGw7XG52YXIgaW5wdXRUeXBlc1doaXRlbGlzdCA9IHtcbiAgdGV4dDogdHJ1ZSxcbiAgc2VhcmNoOiB0cnVlLFxuICB1cmw6IHRydWUsXG4gIHRlbDogdHJ1ZSxcbiAgZW1haWw6IHRydWUsXG4gIHBhc3N3b3JkOiB0cnVlLFxuICBudW1iZXI6IHRydWUsXG4gIGRhdGU6IHRydWUsXG4gIG1vbnRoOiB0cnVlLFxuICB3ZWVrOiB0cnVlLFxuICB0aW1lOiB0cnVlLFxuICBkYXRldGltZTogdHJ1ZSxcbiAgJ2RhdGV0aW1lLWxvY2FsJzogdHJ1ZVxufTtcbi8qKlxuICogQ29tcHV0ZXMgd2hldGhlciB0aGUgZ2l2ZW4gZWxlbWVudCBzaG91bGQgYXV0b21hdGljYWxseSB0cmlnZ2VyIHRoZVxuICogYGZvY3VzLXZpc2libGVgIGNsYXNzIGJlaW5nIGFkZGVkLCBpLmUuIHdoZXRoZXIgaXQgc2hvdWxkIGFsd2F5cyBtYXRjaFxuICogYDpmb2N1cy12aXNpYmxlYCB3aGVuIGZvY3VzZWQuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gZm9jdXNUcmlnZ2Vyc0tleWJvYXJkTW9kYWxpdHkobm9kZSkge1xuICB2YXIgdHlwZSA9IG5vZGUudHlwZSxcbiAgICAgIHRhZ05hbWUgPSBub2RlLnRhZ05hbWU7XG5cbiAgaWYgKHRhZ05hbWUgPT09ICdJTlBVVCcgJiYgaW5wdXRUeXBlc1doaXRlbGlzdFt0eXBlXSAmJiAhbm9kZS5yZWFkT25seSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHRhZ05hbWUgPT09ICdURVhUQVJFQScgJiYgIW5vZGUucmVhZE9ubHkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChub2RlLmlzQ29udGVudEVkaXRhYmxlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIEtlZXAgdHJhY2sgb2Ygb3VyIGtleWJvYXJkIG1vZGFsaXR5IHN0YXRlIHdpdGggYGhhZEtleWJvYXJkRXZlbnRgLlxuICogSWYgdGhlIG1vc3QgcmVjZW50IHVzZXIgaW50ZXJhY3Rpb24gd2FzIHZpYSB0aGUga2V5Ym9hcmQ7XG4gKiBhbmQgdGhlIGtleSBwcmVzcyBkaWQgbm90IGluY2x1ZGUgYSBtZXRhLCBhbHQvb3B0aW9uLCBvciBjb250cm9sIGtleTtcbiAqIHRoZW4gdGhlIG1vZGFsaXR5IGlzIGtleWJvYXJkLiBPdGhlcndpc2UsIHRoZSBtb2RhbGl0eSBpcyBub3Qga2V5Ym9hcmQuXG4gKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50XG4gKi9cblxuXG5mdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gIGlmIChldmVudC5tZXRhS2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaGFkS2V5Ym9hcmRFdmVudCA9IHRydWU7XG59XG4vKipcbiAqIElmIGF0IGFueSBwb2ludCBhIHVzZXIgY2xpY2tzIHdpdGggYSBwb2ludGluZyBkZXZpY2UsIGVuc3VyZSB0aGF0IHdlIGNoYW5nZVxuICogdGhlIG1vZGFsaXR5IGF3YXkgZnJvbSBrZXlib2FyZC5cbiAqIFRoaXMgYXZvaWRzIHRoZSBzaXR1YXRpb24gd2hlcmUgYSB1c2VyIHByZXNzZXMgYSBrZXkgb24gYW4gYWxyZWFkeSBmb2N1c2VkXG4gKiBlbGVtZW50LCBhbmQgdGhlbiBjbGlja3Mgb24gYSBkaWZmZXJlbnQgZWxlbWVudCwgZm9jdXNpbmcgaXQgd2l0aCBhXG4gKiBwb2ludGluZyBkZXZpY2UsIHdoaWxlIHdlIHN0aWxsIHRoaW5rIHdlJ3JlIGluIGtleWJvYXJkIG1vZGFsaXR5LlxuICovXG5cblxuZnVuY3Rpb24gaGFuZGxlUG9pbnRlckRvd24oKSB7XG4gIGhhZEtleWJvYXJkRXZlbnQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSgpIHtcbiAgaWYgKHRoaXMudmlzaWJpbGl0eVN0YXRlID09PSAnaGlkZGVuJykge1xuICAgIC8vIElmIHRoZSB0YWIgYmVjb21lcyBhY3RpdmUgYWdhaW4sIHRoZSBicm93c2VyIHdpbGwgaGFuZGxlIGNhbGxpbmcgZm9jdXNcbiAgICAvLyBvbiB0aGUgZWxlbWVudCAoU2FmYXJpIGFjdHVhbGx5IGNhbGxzIGl0IHR3aWNlKS5cbiAgICAvLyBJZiB0aGlzIHRhYiBjaGFuZ2UgY2F1c2VkIGEgYmx1ciBvbiBhbiBlbGVtZW50IHdpdGggZm9jdXMtdmlzaWJsZSxcbiAgICAvLyByZS1hcHBseSB0aGUgY2xhc3Mgd2hlbiB0aGUgdXNlciBzd2l0Y2hlcyBiYWNrIHRvIHRoZSB0YWIuXG4gICAgaWYgKGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5KSB7XG4gICAgICBoYWRLZXlib2FyZEV2ZW50ID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlcGFyZShkb2MpIHtcbiAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duLCB0cnVlKTtcbiAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZVBvaW50ZXJEb3duLCB0cnVlKTtcbiAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgaGFuZGxlUG9pbnRlckRvd24sIHRydWUpO1xuICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVBvaW50ZXJEb3duLCB0cnVlKTtcbiAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlLCB0cnVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlYXJkb3duKGRvYykge1xuICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24sIHRydWUpO1xuICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlUG9pbnRlckRvd24sIHRydWUpO1xuICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBoYW5kbGVQb2ludGVyRG93biwgdHJ1ZSk7XG4gIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlUG9pbnRlckRvd24sIHRydWUpO1xuICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UsIHRydWUpO1xufVxuXG5mdW5jdGlvbiBpc0ZvY3VzVmlzaWJsZShldmVudCkge1xuICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIHRhcmdldC5tYXRjaGVzKCc6Zm9jdXMtdmlzaWJsZScpO1xuICB9IGNhdGNoIChlcnJvcikge30gLy8gYnJvd3NlcnMgbm90IGltcGxlbWVudGluZyA6Zm9jdXMtdmlzaWJsZSB3aWxsIHRocm93IGEgU3ludGF4RXJyb3JcbiAgLy8gd2UgdXNlIG91ciBvd24gaGV1cmlzdGljIGZvciB0aG9zZSBicm93c2Vyc1xuICAvLyByZXRocm93IG1pZ2h0IGJlIGJldHRlciBpZiBpdCdzIG5vdCB0aGUgZXhwZWN0ZWQgZXJyb3IgYnV0IGRvIHdlIHJlYWxseVxuICAvLyB3YW50IHRvIGNyYXNoIGlmIGZvY3VzLXZpc2libGUgbWFsZnVuY3Rpb25lZD9cbiAgLy8gbm8gbmVlZCBmb3IgdmFsaWRGb2N1c1RhcmdldCBjaGVjay4gdGhlIHVzZXIgZG9lcyB0aGF0IGJ5IGF0dGFjaGluZyBpdCB0b1xuICAvLyBmb2N1c2FibGUgZXZlbnRzIG9ubHlcblxuXG4gIHJldHVybiBoYWRLZXlib2FyZEV2ZW50IHx8IGZvY3VzVHJpZ2dlcnNLZXlib2FyZE1vZGFsaXR5KHRhcmdldCk7XG59XG4vKipcbiAqIFNob3VsZCBiZSBjYWxsZWQgaWYgYSBibHVyIGV2ZW50IGlzIGZpcmVkIG9uIGEgZm9jdXMtdmlzaWJsZSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiBoYW5kbGVCbHVyVmlzaWJsZSgpIHtcbiAgLy8gVG8gZGV0ZWN0IGEgdGFiL3dpbmRvdyBzd2l0Y2gsIHdlIGxvb2sgZm9yIGEgYmx1ciBldmVudCBmb2xsb3dlZFxuICAvLyByYXBpZGx5IGJ5IGEgdmlzaWJpbGl0eSBjaGFuZ2UuXG4gIC8vIElmIHdlIGRvbid0IHNlZSBhIHZpc2liaWxpdHkgY2hhbmdlIHdpdGhpbiAxMDBtcywgaXQncyBwcm9iYWJseSBhXG4gIC8vIHJlZ3VsYXIgZm9jdXMgY2hhbmdlLlxuICBoYWRGb2N1c1Zpc2libGVSZWNlbnRseSA9IHRydWU7XG4gIHdpbmRvdy5jbGVhclRpbWVvdXQoaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0KTtcbiAgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHlUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5ID0gZmFsc2U7XG4gIH0sIDEwMCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUlzRm9jdXNWaXNpYmxlKCkge1xuICB2YXIgcmVmID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgdmFyIG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShpbnN0YW5jZSk7XG5cbiAgICBpZiAobm9kZSAhPSBudWxsKSB7XG4gICAgICBwcmVwYXJlKG5vZGUub3duZXJEb2N1bWVudCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKGlzRm9jdXNWaXNpYmxlKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaXNGb2N1c1Zpc2libGU6IGlzRm9jdXNWaXNpYmxlLFxuICAgIG9uQmx1clZpc2libGU6IGhhbmRsZUJsdXJWaXNpYmxlLFxuICAgIHJlZjogcmVmXG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEyIDIxLjM1bC0xLjQ1LTEuMzJDNS40IDE1LjM2IDIgMTIuMjggMiA4LjUgMiA1LjQyIDQuNDIgMyA3LjUgM2MxLjc0IDAgMy40MS44MSA0LjUgMi4wOUMxMy4wOSAzLjgxIDE0Ljc2IDMgMTYuNSAzIDE5LjU4IDMgMjIgNS40MiAyMiA4LjVjMCAzLjc4LTMuNCA2Ljg2LTguNTUgMTEuNTRMMTIgMjEuMzV6XCJcbn0pLCAnRmF2b3JpdGUnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTEgMTdoLTJ2LTJoMnYyem0yLjA3LTcuNzVsLS45LjkyQzEzLjQ1IDEyLjkgMTMgMTMuNSAxMyAxNWgtMnYtLjVjMC0xLjEuNDUtMi4xIDEuMTctMi44M2wxLjI0LTEuMjZjLjM3LS4zNi41OS0uODYuNTktMS40MSAwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJIOGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0YzAgLjg4LS4zNiAxLjY4LS45MyAyLjI1elwiXG59KSwgJ0hlbHAnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEyIDJjLTQuOTcgMC05IDQuMDMtOSA5IDAgNC4xNyAyLjg0IDcuNjcgNi42OSA4LjY5TDEyIDIybDIuMzEtMi4zMUMxOC4xNiAxOC42NyAyMSAxNS4xNyAyMSAxMWMwLTQuOTctNC4wMy05LTktOXptMCAyYzEuNjYgMCAzIDEuMzQgMyAzcy0xLjM0IDMtMyAzLTMtMS4zNC0zLTMgMS4zNC0zIDMtM3ptMCAxNC4zYy0yLjUgMC00LjcxLTEuMjgtNi0zLjIyLjAzLTEuOTkgNC0zLjA4IDYtMy4wOCAxLjk5IDAgNS45NyAxLjA5IDYgMy4wOC0xLjI5IDEuOTQtMy41IDMuMjItNiAzLjIyelwiXG59KSwgJ1BlcnNvblBpbicpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNNi42MiAxMC43OWMxLjQ0IDIuODMgMy43NiA1LjE0IDYuNTkgNi41OWwyLjItMi4yYy4yNy0uMjcuNjctLjM2IDEuMDItLjI0IDEuMTIuMzcgMi4zMy41NyAzLjU3LjU3LjU1IDAgMSAuNDUgMSAxVjIwYzAgLjU1LS40NSAxLTEgMS05LjM5IDAtMTctNy42MS0xNy0xNyAwLS41NS40NS0xIDEtMWgzLjVjLjU1IDAgMSAuNDUgMSAxIDAgMS4yNS4yIDIuNDUuNTcgMy41Ny4xMS4zNS4wMy43NC0uMjUgMS4wMmwtMi4yIDIuMnpcIlxufSksICdQaG9uZScpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTcuMjEgOWwtNC4zOC02LjU2Yy0uMTktLjI4LS41MS0uNDItLjgzLS40Mi0uMzIgMC0uNjQuMTQtLjgzLjQzTDYuNzkgOUgyYy0uNTUgMC0xIC40NS0xIDEgMCAuMDkuMDEuMTguMDQuMjdsMi41NCA5LjI3Yy4yMy44NCAxIDEuNDYgMS45MiAxLjQ2aDEzYy45MiAwIDEuNjktLjYyIDEuOTMtMS40NmwyLjU0LTkuMjdMMjMgMTBjMC0uNTUtLjQ1LTEtMS0xaC00Ljc5ek05IDlsMy00LjRMMTUgOUg5em0zIDhjLTEuMSAwLTItLjktMi0ycy45LTIgMi0yIDIgLjkgMiAyLS45IDItMiAyelwiXG59KSwgJ1Nob3BwaW5nQmFza2V0Jyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0xNSAzSDZjLS44MyAwLTEuNTQuNS0xLjg0IDEuMjJsLTMuMDIgNy4wNWMtLjA5LjIzLS4xNC40Ny0uMTQuNzN2MmMwIDEuMS45IDIgMiAyaDYuMzFsLS45NSA0LjU3LS4wMy4zMmMwIC40MS4xNy43OS40NCAxLjA2TDkuODMgMjNsNi41OS02LjU5Yy4zNi0uMzYuNTgtLjg2LjU4LTEuNDFWNWMwLTEuMS0uOS0yLTItMnptNCAwdjEyaDRWM2gtNHpcIlxufSksICdUaHVtYkRvd24nKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEgMjFoNFY5SDF2MTJ6bTIyLTExYzAtMS4xLS45LTItMi0yaC02LjMxbC45NS00LjU3LjAzLS4zMmMwLS40MS0uMTctLjc5LS40NC0xLjA2TDE0LjE3IDEgNy41OSA3LjU5QzcuMjIgNy45NSA3IDguNDUgNyA5djEwYzAgMS4xLjkgMiAyIDJoOWMuODMgMCAxLjU0LS41IDEuODQtMS4yMmwzLjAyLTcuMDVjLjA5LS4yMy4xNC0uNDcuMTQtLjczdi0yelwiXG59KSwgJ1RodW1iVXAnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWZhdWx0XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF91dGlscy5jcmVhdGVTdmdJY29uO1xuICB9XG59KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS91dGlsc1wiKTsiLCJpbXBvcnQgaGFzQ2xhc3MgZnJvbSAnLi9oYXNDbGFzcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtlbHNlIGlmICghaGFzQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSkgaWYgKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUgKyBcIiBcIiArIGNsYXNzTmFtZTtlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIChlbGVtZW50LmNsYXNzTmFtZSAmJiBlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8ICcnKSArIFwiIFwiICsgY2xhc3NOYW1lKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0KSByZXR1cm4gISFjbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgcmV0dXJuIChcIiBcIiArIChlbGVtZW50LmNsYXNzTmFtZS5iYXNlVmFsIHx8IGVsZW1lbnQuY2xhc3NOYW1lKSArIFwiIFwiKS5pbmRleE9mKFwiIFwiICsgY2xhc3NOYW1lICsgXCIgXCIpICE9PSAtMTtcbn0iLCJmdW5jdGlvbiByZXBsYWNlQ2xhc3NOYW1lKG9yaWdDbGFzcywgY2xhc3NUb1JlbW92ZSkge1xuICByZXR1cm4gb3JpZ0NsYXNzLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxzKVwiICsgY2xhc3NUb1JlbW92ZSArIFwiKD86XFxcXHN8JClcIiwgJ2cnKSwgJyQxJykucmVwbGFjZSgvXFxzKy9nLCAnICcpLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50LmNsYXNzTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICA7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSByZXBsYWNlQ2xhc3NOYW1lKGVsZW1lbnQuY2xhc3NOYW1lLCBjbGFzc05hbWUpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIHJlcGxhY2VDbGFzc05hbWUoZWxlbWVudC5jbGFzc05hbWUgJiYgZWxlbWVudC5jbGFzc05hbWUuYmFzZVZhbCB8fCAnJywgY2xhc3NOYW1lKSk7XG4gIH1cbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGFkZE9uZUNsYXNzIGZyb20gJ2RvbS1oZWxwZXJzL2FkZENsYXNzJztcbmltcG9ydCByZW1vdmVPbmVDbGFzcyBmcm9tICdkb20taGVscGVycy9yZW1vdmVDbGFzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAnLi9UcmFuc2l0aW9uJztcbmltcG9ydCB7IGNsYXNzTmFtZXNTaGFwZSB9IGZyb20gJy4vdXRpbHMvUHJvcFR5cGVzJztcblxudmFyIF9hZGRDbGFzcyA9IGZ1bmN0aW9uIGFkZENsYXNzKG5vZGUsIGNsYXNzZXMpIHtcbiAgcmV0dXJuIG5vZGUgJiYgY2xhc3NlcyAmJiBjbGFzc2VzLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBhZGRPbmVDbGFzcyhub2RlLCBjKTtcbiAgfSk7XG59O1xuXG52YXIgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiByZW1vdmVDbGFzcyhub2RlLCBjbGFzc2VzKSB7XG4gIHJldHVybiBub2RlICYmIGNsYXNzZXMgJiYgY2xhc3Nlcy5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gcmVtb3ZlT25lQ2xhc3Mobm9kZSwgYyk7XG4gIH0pO1xufTtcbi8qKlxuICogQSB0cmFuc2l0aW9uIGNvbXBvbmVudCBpbnNwaXJlZCBieSB0aGUgZXhjZWxsZW50XG4gKiBbbmctYW5pbWF0ZV0oaHR0cHM6Ly9kb2NzLmFuZ3VsYXJqcy5vcmcvYXBpL25nQW5pbWF0ZSkgbGlicmFyeSwgeW91IHNob3VsZFxuICogdXNlIGl0IGlmIHlvdSdyZSB1c2luZyBDU1MgdHJhbnNpdGlvbnMgb3IgYW5pbWF0aW9ucy4gSXQncyBidWlsdCB1cG9uIHRoZVxuICogW2BUcmFuc2l0aW9uYF0oaHR0cHM6Ly9yZWFjdGNvbW11bml0eS5vcmcvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC90cmFuc2l0aW9uKVxuICogY29tcG9uZW50LCBzbyBpdCBpbmhlcml0cyBhbGwgb2YgaXRzIHByb3BzLlxuICpcbiAqIGBDU1NUcmFuc2l0aW9uYCBhcHBsaWVzIGEgcGFpciBvZiBjbGFzcyBuYW1lcyBkdXJpbmcgdGhlIGBhcHBlYXJgLCBgZW50ZXJgLFxuICogYW5kIGBleGl0YCBzdGF0ZXMgb2YgdGhlIHRyYW5zaXRpb24uIFRoZSBmaXJzdCBjbGFzcyBpcyBhcHBsaWVkIGFuZCB0aGVuIGFcbiAqIHNlY29uZCBgKi1hY3RpdmVgIGNsYXNzIGluIG9yZGVyIHRvIGFjdGl2YXRlIHRoZSBDU1MgdHJhbnNpdGlvbi4gQWZ0ZXIgdGhlXG4gKiB0cmFuc2l0aW9uLCBtYXRjaGluZyBgKi1kb25lYCBjbGFzcyBuYW1lcyBhcmUgYXBwbGllZCB0byBwZXJzaXN0IHRoZVxuICogdHJhbnNpdGlvbiBzdGF0ZS5cbiAqXG4gKiBgYGBqc3hcbiAqIGZ1bmN0aW9uIEFwcCgpIHtcbiAqICAgY29uc3QgW2luUHJvcCwgc2V0SW5Qcm9wXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAqICAgcmV0dXJuIChcbiAqICAgICA8ZGl2PlxuICogICAgICAgPENTU1RyYW5zaXRpb24gaW49e2luUHJvcH0gdGltZW91dD17MjAwfSBjbGFzc05hbWVzPVwibXktbm9kZVwiPlxuICogICAgICAgICA8ZGl2PlxuICogICAgICAgICAgIHtcIkknbGwgcmVjZWl2ZSBteS1ub2RlLSogY2xhc3Nlc1wifVxuICogICAgICAgICA8L2Rpdj5cbiAqICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAqICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldEluUHJvcCh0cnVlKX0+XG4gKiAgICAgICAgIENsaWNrIHRvIEVudGVyXG4gKiAgICAgICA8L2J1dHRvbj5cbiAqICAgICA8L2Rpdj5cbiAqICAgKTtcbiAqIH1cbiAqIGBgYFxuICpcbiAqIFdoZW4gdGhlIGBpbmAgcHJvcCBpcyBzZXQgdG8gYHRydWVgLCB0aGUgY2hpbGQgY29tcG9uZW50IHdpbGwgZmlyc3QgcmVjZWl2ZVxuICogdGhlIGNsYXNzIGBleGFtcGxlLWVudGVyYCwgdGhlbiB0aGUgYGV4YW1wbGUtZW50ZXItYWN0aXZlYCB3aWxsIGJlIGFkZGVkIGluXG4gKiB0aGUgbmV4dCB0aWNrLiBgQ1NTVHJhbnNpdGlvbmAgW2ZvcmNlcyBhXG4gKiByZWZsb3ddKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvYmxvYi81MDA3MzAzZTcyOWE3NGJlNjZhMjFjM2UyMjA1ZTQ5MTY4MjE1MjRiL3NyYy9DU1NUcmFuc2l0aW9uLmpzI0wyMDgtTDIxNSlcbiAqIGJldHdlZW4gYmVmb3JlIGFkZGluZyB0aGUgYGV4YW1wbGUtZW50ZXItYWN0aXZlYC4gVGhpcyBpcyBhbiBpbXBvcnRhbnQgdHJpY2tcbiAqIGJlY2F1c2UgaXQgYWxsb3dzIHVzIHRvIHRyYW5zaXRpb24gYmV0d2VlbiBgZXhhbXBsZS1lbnRlcmAgYW5kXG4gKiBgZXhhbXBsZS1lbnRlci1hY3RpdmVgIGV2ZW4gdGhvdWdoIHRoZXkgd2VyZSBhZGRlZCBpbW1lZGlhdGVseSBvbmUgYWZ0ZXJcbiAqIGFub3RoZXIuIE1vc3Qgbm90YWJseSwgdGhpcyBpcyB3aGF0IG1ha2VzIGl0IHBvc3NpYmxlIGZvciB1cyB0byBhbmltYXRlXG4gKiBfYXBwZWFyYW5jZV8uXG4gKlxuICogYGBgY3NzXG4gKiAubXktbm9kZS1lbnRlciB7XG4gKiAgIG9wYWNpdHk6IDA7XG4gKiB9XG4gKiAubXktbm9kZS1lbnRlci1hY3RpdmUge1xuICogICBvcGFjaXR5OiAxO1xuICogICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xuICogfVxuICogLm15LW5vZGUtZXhpdCB7XG4gKiAgIG9wYWNpdHk6IDE7XG4gKiB9XG4gKiAubXktbm9kZS1leGl0LWFjdGl2ZSB7XG4gKiAgIG9wYWNpdHk6IDA7XG4gKiAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBgKi1hY3RpdmVgIGNsYXNzZXMgcmVwcmVzZW50IHdoaWNoIHN0eWxlcyB5b3Ugd2FudCB0byBhbmltYXRlICoqdG8qKiwgc28gaXQnc1xuICogaW1wb3J0YW50IHRvIGFkZCBgdHJhbnNpdGlvbmAgZGVjbGFyYXRpb24gb25seSB0byB0aGVtLCBvdGhlcndpc2UgdHJhbnNpdGlvbnNcbiAqIG1pZ2h0IG5vdCBiZWhhdmUgYXMgaW50ZW5kZWQhIFRoaXMgbWlnaHQgbm90IGJlIG9idmlvdXMgd2hlbiB0aGUgdHJhbnNpdGlvbnNcbiAqIGFyZSBzeW1tZXRyaWNhbCwgaS5lLiB3aGVuIGAqLWVudGVyLWFjdGl2ZWAgaXMgdGhlIHNhbWUgYXMgYCotZXhpdGAsIGxpa2UgaW5cbiAqIHRoZSBleGFtcGxlIGFib3ZlIChtaW51cyBgdHJhbnNpdGlvbmApLCBidXQgaXQgYmVjb21lcyBhcHBhcmVudCBpbiBtb3JlXG4gKiBjb21wbGV4IHRyYW5zaXRpb25zLlxuICpcbiAqICoqTm90ZSoqOiBJZiB5b3UncmUgdXNpbmcgdGhlXG4gKiBbYGFwcGVhcmBdKGh0dHA6Ly9yZWFjdGNvbW11bml0eS5vcmcvcmVhY3QtdHJhbnNpdGlvbi1ncm91cC90cmFuc2l0aW9uI1RyYW5zaXRpb24tcHJvcC1hcHBlYXIpXG4gKiBwcm9wLCBtYWtlIHN1cmUgdG8gZGVmaW5lIHN0eWxlcyBmb3IgYC5hcHBlYXItKmAgY2xhc3NlcyBhcyB3ZWxsLlxuICovXG5cblxudmFyIENTU1RyYW5zaXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoQ1NTVHJhbnNpdGlvbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ1NTVHJhbnNpdGlvbigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICBfdGhpcy5hcHBsaWVkQ2xhc3NlcyA9IHtcbiAgICAgIGFwcGVhcjoge30sXG4gICAgICBlbnRlcjoge30sXG4gICAgICBleGl0OiB7fVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkVudGVyID0gZnVuY3Rpb24gKG1heWJlTm9kZSwgbWF5YmVBcHBlYXJpbmcpIHtcbiAgICAgIHZhciBfdGhpcyRyZXNvbHZlQXJndW1lbnQgPSBfdGhpcy5yZXNvbHZlQXJndW1lbnRzKG1heWJlTm9kZSwgbWF5YmVBcHBlYXJpbmcpLFxuICAgICAgICAgIG5vZGUgPSBfdGhpcyRyZXNvbHZlQXJndW1lbnRbMF0sXG4gICAgICAgICAgYXBwZWFyaW5nID0gX3RoaXMkcmVzb2x2ZUFyZ3VtZW50WzFdO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdleGl0Jyk7XG5cbiAgICAgIF90aGlzLmFkZENsYXNzKG5vZGUsIGFwcGVhcmluZyA/ICdhcHBlYXInIDogJ2VudGVyJywgJ2Jhc2UnKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRW50ZXIpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FbnRlcihtYXliZU5vZGUsIG1heWJlQXBwZWFyaW5nKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FbnRlcmluZyA9IGZ1bmN0aW9uIChtYXliZU5vZGUsIG1heWJlQXBwZWFyaW5nKSB7XG4gICAgICB2YXIgX3RoaXMkcmVzb2x2ZUFyZ3VtZW50MiA9IF90aGlzLnJlc29sdmVBcmd1bWVudHMobWF5YmVOb2RlLCBtYXliZUFwcGVhcmluZyksXG4gICAgICAgICAgbm9kZSA9IF90aGlzJHJlc29sdmVBcmd1bWVudDJbMF0sXG4gICAgICAgICAgYXBwZWFyaW5nID0gX3RoaXMkcmVzb2x2ZUFyZ3VtZW50MlsxXTtcblxuICAgICAgdmFyIHR5cGUgPSBhcHBlYXJpbmcgPyAnYXBwZWFyJyA6ICdlbnRlcic7XG5cbiAgICAgIF90aGlzLmFkZENsYXNzKG5vZGUsIHR5cGUsICdhY3RpdmUnKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRW50ZXJpbmcpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FbnRlcmluZyhtYXliZU5vZGUsIG1heWJlQXBwZWFyaW5nKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25FbnRlcmVkID0gZnVuY3Rpb24gKG1heWJlTm9kZSwgbWF5YmVBcHBlYXJpbmcpIHtcbiAgICAgIHZhciBfdGhpcyRyZXNvbHZlQXJndW1lbnQzID0gX3RoaXMucmVzb2x2ZUFyZ3VtZW50cyhtYXliZU5vZGUsIG1heWJlQXBwZWFyaW5nKSxcbiAgICAgICAgICBub2RlID0gX3RoaXMkcmVzb2x2ZUFyZ3VtZW50M1swXSxcbiAgICAgICAgICBhcHBlYXJpbmcgPSBfdGhpcyRyZXNvbHZlQXJndW1lbnQzWzFdO1xuXG4gICAgICB2YXIgdHlwZSA9IGFwcGVhcmluZyA/ICdhcHBlYXInIDogJ2VudGVyJztcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCB0eXBlKTtcblxuICAgICAgX3RoaXMuYWRkQ2xhc3Mobm9kZSwgdHlwZSwgJ2RvbmUnKTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRW50ZXJlZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkVudGVyZWQobWF5YmVOb2RlLCBtYXliZUFwcGVhcmluZyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRXhpdCA9IGZ1bmN0aW9uIChtYXliZU5vZGUpIHtcbiAgICAgIHZhciBfdGhpcyRyZXNvbHZlQXJndW1lbnQ0ID0gX3RoaXMucmVzb2x2ZUFyZ3VtZW50cyhtYXliZU5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBfdGhpcyRyZXNvbHZlQXJndW1lbnQ0WzBdO1xuXG4gICAgICBfdGhpcy5yZW1vdmVDbGFzc2VzKG5vZGUsICdhcHBlYXInKTtcblxuICAgICAgX3RoaXMucmVtb3ZlQ2xhc3Nlcyhub2RlLCAnZW50ZXInKTtcblxuICAgICAgX3RoaXMuYWRkQ2xhc3Mobm9kZSwgJ2V4aXQnLCAnYmFzZScpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FeGl0KSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRXhpdChtYXliZU5vZGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkV4aXRpbmcgPSBmdW5jdGlvbiAobWF5YmVOb2RlKSB7XG4gICAgICB2YXIgX3RoaXMkcmVzb2x2ZUFyZ3VtZW50NSA9IF90aGlzLnJlc29sdmVBcmd1bWVudHMobWF5YmVOb2RlKSxcbiAgICAgICAgICBub2RlID0gX3RoaXMkcmVzb2x2ZUFyZ3VtZW50NVswXTtcblxuICAgICAgX3RoaXMuYWRkQ2xhc3Mobm9kZSwgJ2V4aXQnLCAnYWN0aXZlJyk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkV4aXRpbmcpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FeGl0aW5nKG1heWJlTm9kZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRXhpdGVkID0gZnVuY3Rpb24gKG1heWJlTm9kZSkge1xuICAgICAgdmFyIF90aGlzJHJlc29sdmVBcmd1bWVudDYgPSBfdGhpcy5yZXNvbHZlQXJndW1lbnRzKG1heWJlTm9kZSksXG4gICAgICAgICAgbm9kZSA9IF90aGlzJHJlc29sdmVBcmd1bWVudDZbMF07XG5cbiAgICAgIF90aGlzLnJlbW92ZUNsYXNzZXMobm9kZSwgJ2V4aXQnKTtcblxuICAgICAgX3RoaXMuYWRkQ2xhc3Mobm9kZSwgJ2V4aXQnLCAnZG9uZScpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25FeGl0ZWQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25FeGl0ZWQobWF5YmVOb2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMucmVzb2x2ZUFyZ3VtZW50cyA9IGZ1bmN0aW9uIChtYXliZU5vZGUsIG1heWJlQXBwZWFyaW5nKSB7XG4gICAgICByZXR1cm4gX3RoaXMucHJvcHMubm9kZVJlZiA/IFtfdGhpcy5wcm9wcy5ub2RlUmVmLmN1cnJlbnQsIG1heWJlTm9kZV0gLy8gaGVyZSBgbWF5YmVOb2RlYCBpcyBhY3R1YWxseSBgYXBwZWFyaW5nYFxuICAgICAgOiBbbWF5YmVOb2RlLCBtYXliZUFwcGVhcmluZ107XG4gICAgfTtcblxuICAgIF90aGlzLmdldENsYXNzTmFtZXMgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgdmFyIGNsYXNzTmFtZXMgPSBfdGhpcy5wcm9wcy5jbGFzc05hbWVzO1xuICAgICAgdmFyIGlzU3RyaW5nQ2xhc3NOYW1lcyA9IHR5cGVvZiBjbGFzc05hbWVzID09PSAnc3RyaW5nJztcbiAgICAgIHZhciBwcmVmaXggPSBpc1N0cmluZ0NsYXNzTmFtZXMgJiYgY2xhc3NOYW1lcyA/IGNsYXNzTmFtZXMgKyBcIi1cIiA6ICcnO1xuICAgICAgdmFyIGJhc2VDbGFzc05hbWUgPSBpc1N0cmluZ0NsYXNzTmFtZXMgPyBcIlwiICsgcHJlZml4ICsgdHlwZSA6IGNsYXNzTmFtZXNbdHlwZV07XG4gICAgICB2YXIgYWN0aXZlQ2xhc3NOYW1lID0gaXNTdHJpbmdDbGFzc05hbWVzID8gYmFzZUNsYXNzTmFtZSArIFwiLWFjdGl2ZVwiIDogY2xhc3NOYW1lc1t0eXBlICsgXCJBY3RpdmVcIl07XG4gICAgICB2YXIgZG9uZUNsYXNzTmFtZSA9IGlzU3RyaW5nQ2xhc3NOYW1lcyA/IGJhc2VDbGFzc05hbWUgKyBcIi1kb25lXCIgOiBjbGFzc05hbWVzW3R5cGUgKyBcIkRvbmVcIl07XG4gICAgICByZXR1cm4ge1xuICAgICAgICBiYXNlQ2xhc3NOYW1lOiBiYXNlQ2xhc3NOYW1lLFxuICAgICAgICBhY3RpdmVDbGFzc05hbWU6IGFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgICAgZG9uZUNsYXNzTmFtZTogZG9uZUNsYXNzTmFtZVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IENTU1RyYW5zaXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5hZGRDbGFzcyA9IGZ1bmN0aW9uIGFkZENsYXNzKG5vZGUsIHR5cGUsIHBoYXNlKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IHRoaXMuZ2V0Q2xhc3NOYW1lcyh0eXBlKVtwaGFzZSArIFwiQ2xhc3NOYW1lXCJdO1xuXG4gICAgdmFyIF90aGlzJGdldENsYXNzTmFtZXMgPSB0aGlzLmdldENsYXNzTmFtZXMoJ2VudGVyJyksXG4gICAgICAgIGRvbmVDbGFzc05hbWUgPSBfdGhpcyRnZXRDbGFzc05hbWVzLmRvbmVDbGFzc05hbWU7XG5cbiAgICBpZiAodHlwZSA9PT0gJ2FwcGVhcicgJiYgcGhhc2UgPT09ICdkb25lJyAmJiBkb25lQ2xhc3NOYW1lKSB7XG4gICAgICBjbGFzc05hbWUgKz0gXCIgXCIgKyBkb25lQ2xhc3NOYW1lO1xuICAgIH0gLy8gVGhpcyBpcyBmb3IgdG8gZm9yY2UgYSByZXBhaW50LFxuICAgIC8vIHdoaWNoIGlzIG5lY2Vzc2FyeSBpbiBvcmRlciB0byB0cmFuc2l0aW9uIHN0eWxlcyB3aGVuIGFkZGluZyBhIGNsYXNzIG5hbWUuXG5cblxuICAgIGlmIChwaGFzZSA9PT0gJ2FjdGl2ZScpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuICAgICAgbm9kZSAmJiBub2RlLnNjcm9sbFRvcDtcbiAgICB9XG5cbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICB0aGlzLmFwcGxpZWRDbGFzc2VzW3R5cGVdW3BoYXNlXSA9IGNsYXNzTmFtZTtcblxuICAgICAgX2FkZENsYXNzKG5vZGUsIGNsYXNzTmFtZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW1vdmVDbGFzc2VzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3Nlcyhub2RlLCB0eXBlKSB7XG4gICAgdmFyIF90aGlzJGFwcGxpZWRDbGFzc2VzJCA9IHRoaXMuYXBwbGllZENsYXNzZXNbdHlwZV0sXG4gICAgICAgIGJhc2VDbGFzc05hbWUgPSBfdGhpcyRhcHBsaWVkQ2xhc3NlcyQuYmFzZSxcbiAgICAgICAgYWN0aXZlQ2xhc3NOYW1lID0gX3RoaXMkYXBwbGllZENsYXNzZXMkLmFjdGl2ZSxcbiAgICAgICAgZG9uZUNsYXNzTmFtZSA9IF90aGlzJGFwcGxpZWRDbGFzc2VzJC5kb25lO1xuICAgIHRoaXMuYXBwbGllZENsYXNzZXNbdHlwZV0gPSB7fTtcblxuICAgIGlmIChiYXNlQ2xhc3NOYW1lKSB7XG4gICAgICByZW1vdmVDbGFzcyhub2RlLCBiYXNlQ2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlQ2xhc3NOYW1lKSB7XG4gICAgICByZW1vdmVDbGFzcyhub2RlLCBhY3RpdmVDbGFzc05hbWUpO1xuICAgIH1cblxuICAgIGlmIChkb25lQ2xhc3NOYW1lKSB7XG4gICAgICByZW1vdmVDbGFzcyhub2RlLCBkb25lQ2xhc3NOYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBfID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lcyxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiY2xhc3NOYW1lc1wiXSk7XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbiwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBvbkVudGVyOiB0aGlzLm9uRW50ZXIsXG4gICAgICBvbkVudGVyZWQ6IHRoaXMub25FbnRlcmVkLFxuICAgICAgb25FbnRlcmluZzogdGhpcy5vbkVudGVyaW5nLFxuICAgICAgb25FeGl0OiB0aGlzLm9uRXhpdCxcbiAgICAgIG9uRXhpdGluZzogdGhpcy5vbkV4aXRpbmcsXG4gICAgICBvbkV4aXRlZDogdGhpcy5vbkV4aXRlZFxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gQ1NTVHJhbnNpdGlvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuQ1NTVHJhbnNpdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZXM6ICcnXG59O1xuQ1NTVHJhbnNpdGlvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBfZXh0ZW5kcyh7fSwgVHJhbnNpdGlvbi5wcm9wVHlwZXMsIHtcbiAgLyoqXG4gICAqIFRoZSBhbmltYXRpb24gY2xhc3NOYW1lcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQgYXMgaXQgYXBwZWFycywgZW50ZXJzLFxuICAgKiBleGl0cyBvciBoYXMgZmluaXNoZWQgdGhlIHRyYW5zaXRpb24uIEEgc2luZ2xlIG5hbWUgY2FuIGJlIHByb3ZpZGVkLCB3aGljaFxuICAgKiB3aWxsIGJlIHN1ZmZpeGVkIGZvciBlYWNoIHN0YWdlLCBlLmcuIGBjbGFzc05hbWVzPVwiZmFkZVwiYCBhcHBsaWVzOlxuICAgKlxuICAgKiAtIGBmYWRlLWFwcGVhcmAsIGBmYWRlLWFwcGVhci1hY3RpdmVgLCBgZmFkZS1hcHBlYXItZG9uZWBcbiAgICogLSBgZmFkZS1lbnRlcmAsIGBmYWRlLWVudGVyLWFjdGl2ZWAsIGBmYWRlLWVudGVyLWRvbmVgXG4gICAqIC0gYGZhZGUtZXhpdGAsIGBmYWRlLWV4aXQtYWN0aXZlYCwgYGZhZGUtZXhpdC1kb25lYFxuICAgKlxuICAgKiBBIGZldyBkZXRhaWxzIHRvIG5vdGUgYWJvdXQgaG93IHRoZXNlIGNsYXNzZXMgYXJlIGFwcGxpZWQ6XG4gICAqXG4gICAqIDEuIFRoZXkgYXJlIF9qb2luZWRfIHdpdGggdGhlIG9uZXMgdGhhdCBhcmUgYWxyZWFkeSBkZWZpbmVkIG9uIHRoZSBjaGlsZFxuICAgKiAgICBjb21wb25lbnQsIHNvIGlmIHlvdSB3YW50IHRvIGFkZCBzb21lIGJhc2Ugc3R5bGVzLCB5b3UgY2FuIHVzZVxuICAgKiAgICBgY2xhc3NOYW1lYCB3aXRob3V0IHdvcnJ5aW5nIHRoYXQgaXQgd2lsbCBiZSBvdmVycmlkZGVuLlxuICAgKlxuICAgKiAyLiBJZiB0aGUgdHJhbnNpdGlvbiBjb21wb25lbnQgbW91bnRzIHdpdGggYGluPXtmYWxzZX1gLCBubyBjbGFzc2VzIGFyZVxuICAgKiAgICBhcHBsaWVkIHlldC4gWW91IG1pZ2h0IGJlIGV4cGVjdGluZyBgKi1leGl0LWRvbmVgLCBidXQgaWYgeW91IHRoaW5rXG4gICAqICAgIGFib3V0IGl0LCBhIGNvbXBvbmVudCBjYW5ub3QgZmluaXNoIGV4aXRpbmcgaWYgaXQgaGFzbid0IGVudGVyZWQgeWV0LlxuICAgKlxuICAgKiAyLiBgZmFkZS1hcHBlYXItZG9uZWAgYW5kIGBmYWRlLWVudGVyLWRvbmVgIHdpbGwgX2JvdGhfIGJlIGFwcGxpZWQuIFRoaXNcbiAgICogICAgYWxsb3dzIHlvdSB0byBkZWZpbmUgZGlmZmVyZW50IGJlaGF2aW9yIGZvciB3aGVuIGFwcGVhcmluZyBpcyBkb25lIGFuZFxuICAgKiAgICB3aGVuIHJlZ3VsYXIgZW50ZXJpbmcgaXMgZG9uZSwgdXNpbmcgc2VsZWN0b3JzIGxpa2VcbiAgICogICAgYC5mYWRlLWVudGVyLWRvbmU6bm90KC5mYWRlLWFwcGVhci1kb25lKWAuIEZvciBleGFtcGxlLCB5b3UgY291bGQgYXBwbHlcbiAgICogICAgYW4gZXBpYyBlbnRyYW5jZSBhbmltYXRpb24gd2hlbiBlbGVtZW50IGZpcnN0IGFwcGVhcnMgaW4gdGhlIERPTSB1c2luZ1xuICAgKiAgICBbQW5pbWF0ZS5jc3NdKGh0dHBzOi8vZGFuZWRlbi5naXRodWIuaW8vYW5pbWF0ZS5jc3MvKS4gT3RoZXJ3aXNlIHlvdSBjYW5cbiAgICogICAgc2ltcGx5IHVzZSBgZmFkZS1lbnRlci1kb25lYCBmb3IgZGVmaW5pbmcgYm90aCBjYXNlcy5cbiAgICpcbiAgICogRWFjaCBpbmRpdmlkdWFsIGNsYXNzTmFtZXMgY2FuIGFsc28gYmUgc3BlY2lmaWVkIGluZGVwZW5kZW50bHkgbGlrZTpcbiAgICpcbiAgICogYGBganNcbiAgICogY2xhc3NOYW1lcz17e1xuICAgKiAgYXBwZWFyOiAnbXktYXBwZWFyJyxcbiAgICogIGFwcGVhckFjdGl2ZTogJ215LWFjdGl2ZS1hcHBlYXInLFxuICAgKiAgYXBwZWFyRG9uZTogJ215LWRvbmUtYXBwZWFyJyxcbiAgICogIGVudGVyOiAnbXktZW50ZXInLFxuICAgKiAgZW50ZXJBY3RpdmU6ICdteS1hY3RpdmUtZW50ZXInLFxuICAgKiAgZW50ZXJEb25lOiAnbXktZG9uZS1lbnRlcicsXG4gICAqICBleGl0OiAnbXktZXhpdCcsXG4gICAqICBleGl0QWN0aXZlOiAnbXktYWN0aXZlLWV4aXQnLFxuICAgKiAgZXhpdERvbmU6ICdteS1kb25lLWV4aXQnLFxuICAgKiB9fVxuICAgKiBgYGBcbiAgICpcbiAgICogSWYgeW91IHdhbnQgdG8gc2V0IHRoZXNlIGNsYXNzZXMgdXNpbmcgQ1NTIE1vZHVsZXM6XG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMuY3NzJztcbiAgICogYGBgXG4gICAqXG4gICAqIHlvdSBtaWdodCB3YW50IHRvIHVzZSBjYW1lbENhc2UgaW4geW91ciBDU1MgZmlsZSwgdGhhdCB3YXkgY291bGQgc2ltcGx5XG4gICAqIHNwcmVhZCB0aGVtIGluc3RlYWQgb2YgbGlzdGluZyB0aGVtIG9uZSBieSBvbmU6XG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGNsYXNzTmFtZXM9e3sgLi4uc3R5bGVzIH19XG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nIHwge1xuICAgKiAgYXBwZWFyPzogc3RyaW5nLFxuICAgKiAgYXBwZWFyQWN0aXZlPzogc3RyaW5nLFxuICAgKiAgYXBwZWFyRG9uZT86IHN0cmluZyxcbiAgICogIGVudGVyPzogc3RyaW5nLFxuICAgKiAgZW50ZXJBY3RpdmU/OiBzdHJpbmcsXG4gICAqICBlbnRlckRvbmU/OiBzdHJpbmcsXG4gICAqICBleGl0Pzogc3RyaW5nLFxuICAgKiAgZXhpdEFjdGl2ZT86IHN0cmluZyxcbiAgICogIGV4aXREb25lPzogc3RyaW5nLFxuICAgKiB9fVxuICAgKi9cbiAgY2xhc3NOYW1lczogY2xhc3NOYW1lc1NoYXBlLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZW50ZXInIG9yICdhcHBlYXInIGNsYXNzIGlzXG4gICAqIGFwcGxpZWQuXG4gICAqXG4gICAqICoqTm90ZSoqOiB3aGVuIGBub2RlUmVmYCBwcm9wIGlzIHBhc3NlZCwgYG5vZGVgIGlzIG5vdCBwYXNzZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbClcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZW50ZXItYWN0aXZlJyBvclxuICAgKiAnYXBwZWFyLWFjdGl2ZScgY2xhc3MgaXMgYXBwbGllZC5cbiAgICpcbiAgICogKipOb3RlKio6IHdoZW4gYG5vZGVSZWZgIHByb3AgaXMgcGFzc2VkLCBgbm9kZWAgaXMgbm90IHBhc3NlZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdlbnRlcicgb3JcbiAgICogJ2FwcGVhcicgY2xhc3NlcyBhcmUgKipyZW1vdmVkKiogYW5kIHRoZSBgZG9uZWAgY2xhc3MgaXMgYWRkZWQgdG8gdGhlIERPTSBub2RlLlxuICAgKlxuICAgKiAqKk5vdGUqKjogd2hlbiBgbm9kZVJlZmAgcHJvcCBpcyBwYXNzZWQsIGBub2RlYCBpcyBub3QgcGFzc2VkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBIGA8VHJhbnNpdGlvbj5gIGNhbGxiYWNrIGZpcmVkIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSAnZXhpdCcgY2xhc3MgaXNcbiAgICogYXBwbGllZC5cbiAgICpcbiAgICogKipOb3RlKio6IHdoZW4gYG5vZGVSZWZgIHByb3AgaXMgcGFzc2VkLCBgbm9kZWAgaXMgbm90IHBhc3NlZFxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudClcbiAgICovXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdleGl0LWFjdGl2ZScgaXMgYXBwbGllZC5cbiAgICpcbiAgICogKipOb3RlKio6IHdoZW4gYG5vZGVSZWZgIHByb3AgaXMgcGFzc2VkLCBgbm9kZWAgaXMgbm90IHBhc3NlZFxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudClcbiAgICovXG4gIG9uRXhpdGluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEEgYDxUcmFuc2l0aW9uPmAgY2FsbGJhY2sgZmlyZWQgaW1tZWRpYXRlbHkgYWZ0ZXIgdGhlICdleGl0JyBjbGFzc2VzXG4gICAqIGFyZSAqKnJlbW92ZWQqKiBhbmQgdGhlIGBleGl0LWRvbmVgIGNsYXNzIGlzIGFkZGVkIHRvIHRoZSBET00gbm9kZS5cbiAgICpcbiAgICogKipOb3RlKio6IHdoZW4gYG5vZGVSZWZgIHByb3AgaXMgcGFzc2VkLCBgbm9kZWAgaXMgbm90IHBhc3NlZFxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudClcbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuY1xufSkgOiB7fTtcbmV4cG9ydCBkZWZhdWx0IENTU1RyYW5zaXRpb247IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgVHJhbnNpdGlvbkdyb3VwIGZyb20gJy4vVHJhbnNpdGlvbkdyb3VwJztcbi8qKlxuICogVGhlIGA8UmVwbGFjZVRyYW5zaXRpb24+YCBjb21wb25lbnQgaXMgYSBzcGVjaWFsaXplZCBgVHJhbnNpdGlvbmAgY29tcG9uZW50XG4gKiB0aGF0IGFuaW1hdGVzIGJldHdlZW4gdHdvIGNoaWxkcmVuLlxuICpcbiAqIGBgYGpzeFxuICogPFJlcGxhY2VUcmFuc2l0aW9uIGluPlxuICogICA8RmFkZT48ZGl2PkkgYXBwZWFyIGZpcnN0PC9kaXY+PC9GYWRlPlxuICogICA8RmFkZT48ZGl2PkkgcmVwbGFjZSB0aGUgYWJvdmU8L2Rpdj48L0ZhZGU+XG4gKiA8L1JlcGxhY2VUcmFuc2l0aW9uPlxuICogYGBgXG4gKi9cblxudmFyIFJlcGxhY2VUcmFuc2l0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFJlcGxhY2VUcmFuc2l0aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSZXBsYWNlVHJhbnNpdGlvbigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgX2FyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBfYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KF9hcmdzKSkgfHwgdGhpcztcblxuICAgIF90aGlzLmhhbmRsZUVudGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FbnRlcicsIDAsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVFbnRlcmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVMaWZlY3ljbGUoJ29uRW50ZXJpbmcnLCAwLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRW50ZXJlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgICBhcmdzW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpcy5oYW5kbGVMaWZlY3ljbGUoJ29uRW50ZXJlZCcsIDAsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVFeGl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW41KSwgX2tleTUgPSAwOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTVdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FeGl0JywgMSwgYXJncyk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUV4aXRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuNiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjYpLCBfa2V5NiA9IDA7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICAgICAgYXJnc1tfa2V5Nl0gPSBhcmd1bWVudHNbX2tleTZdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMuaGFuZGxlTGlmZWN5Y2xlKCdvbkV4aXRpbmcnLCAxLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlRXhpdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjcgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW43KSwgX2tleTcgPSAwOyBfa2V5NyA8IF9sZW43OyBfa2V5NysrKSB7XG4gICAgICAgIGFyZ3NbX2tleTddID0gYXJndW1lbnRzW19rZXk3XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZUxpZmVjeWNsZSgnb25FeGl0ZWQnLCAxLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFJlcGxhY2VUcmFuc2l0aW9uLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaGFuZGxlTGlmZWN5Y2xlID0gZnVuY3Rpb24gaGFuZGxlTGlmZWN5Y2xlKGhhbmRsZXIsIGlkeCwgb3JpZ2luYWxBcmdzKSB7XG4gICAgdmFyIF9jaGlsZCRwcm9wcztcblxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIGNoaWxkID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbilbaWR4XTtcbiAgICBpZiAoY2hpbGQucHJvcHNbaGFuZGxlcl0pIChfY2hpbGQkcHJvcHMgPSBjaGlsZC5wcm9wcylbaGFuZGxlcl0uYXBwbHkoX2NoaWxkJHByb3BzLCBvcmlnaW5hbEFyZ3MpO1xuXG4gICAgaWYgKHRoaXMucHJvcHNbaGFuZGxlcl0pIHtcbiAgICAgIHZhciBtYXliZU5vZGUgPSBjaGlsZC5wcm9wcy5ub2RlUmVmID8gdW5kZWZpbmVkIDogUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgICB0aGlzLnByb3BzW2hhbmRsZXJdKG1heWJlTm9kZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgaW5Qcm9wID0gX3RoaXMkcHJvcHMuaW4sXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiaW5cIl0pO1xuXG4gICAgdmFyIF9SZWFjdCRDaGlsZHJlbiR0b0FyciA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLFxuICAgICAgICBmaXJzdCA9IF9SZWFjdCRDaGlsZHJlbiR0b0FyclswXSxcbiAgICAgICAgc2Vjb25kID0gX1JlYWN0JENoaWxkcmVuJHRvQXJyWzFdO1xuXG4gICAgZGVsZXRlIHByb3BzLm9uRW50ZXI7XG4gICAgZGVsZXRlIHByb3BzLm9uRW50ZXJpbmc7XG4gICAgZGVsZXRlIHByb3BzLm9uRW50ZXJlZDtcbiAgICBkZWxldGUgcHJvcHMub25FeGl0O1xuICAgIGRlbGV0ZSBwcm9wcy5vbkV4aXRpbmc7XG4gICAgZGVsZXRlIHByb3BzLm9uRXhpdGVkO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uR3JvdXAsIHByb3BzLCBpblByb3AgPyBSZWFjdC5jbG9uZUVsZW1lbnQoZmlyc3QsIHtcbiAgICAgIGtleTogJ2ZpcnN0JyxcbiAgICAgIG9uRW50ZXI6IHRoaXMuaGFuZGxlRW50ZXIsXG4gICAgICBvbkVudGVyaW5nOiB0aGlzLmhhbmRsZUVudGVyaW5nLFxuICAgICAgb25FbnRlcmVkOiB0aGlzLmhhbmRsZUVudGVyZWRcbiAgICB9KSA6IFJlYWN0LmNsb25lRWxlbWVudChzZWNvbmQsIHtcbiAgICAgIGtleTogJ3NlY29uZCcsXG4gICAgICBvbkVudGVyOiB0aGlzLmhhbmRsZUV4aXQsXG4gICAgICBvbkVudGVyaW5nOiB0aGlzLmhhbmRsZUV4aXRpbmcsXG4gICAgICBvbkVudGVyZWQ6IHRoaXMuaGFuZGxlRXhpdGVkXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBSZXBsYWNlVHJhbnNpdGlvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuUmVwbGFjZVRyYW5zaXRpb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBpbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IGZ1bmN0aW9uIGNoaWxkcmVuKHByb3BzLCBwcm9wTmFtZSkge1xuICAgIGlmIChSZWFjdC5DaGlsZHJlbi5jb3VudChwcm9wc1twcm9wTmFtZV0pICE9PSAyKSByZXR1cm4gbmV3IEVycm9yKFwiXFxcIlwiICsgcHJvcE5hbWUgKyBcIlxcXCIgbXVzdCBiZSBleGFjdGx5IHR3byB0cmFuc2l0aW9uIGNvbXBvbmVudHMuXCIpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59IDoge307XG5leHBvcnQgZGVmYXVsdCBSZXBsYWNlVHJhbnNpdGlvbjsiLCJpbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcblxudmFyIF9sZWF2ZVJlbmRlcnMsIF9lbnRlclJlbmRlcnM7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRU5URVJFRCwgRU5URVJJTkcsIEVYSVRJTkcgfSBmcm9tICcuL1RyYW5zaXRpb24nO1xuaW1wb3J0IFRyYW5zaXRpb25Hcm91cENvbnRleHQgZnJvbSAnLi9UcmFuc2l0aW9uR3JvdXBDb250ZXh0JztcblxuZnVuY3Rpb24gYXJlQ2hpbGRyZW5EaWZmZXJlbnQob2xkQ2hpbGRyZW4sIG5ld0NoaWxkcmVuKSB7XG4gIGlmIChvbGRDaGlsZHJlbiA9PT0gbmV3Q2hpbGRyZW4pIHJldHVybiBmYWxzZTtcblxuICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQob2xkQ2hpbGRyZW4pICYmIFJlYWN0LmlzVmFsaWRFbGVtZW50KG5ld0NoaWxkcmVuKSAmJiBvbGRDaGlsZHJlbi5rZXkgIT0gbnVsbCAmJiBvbGRDaGlsZHJlbi5rZXkgPT09IG5ld0NoaWxkcmVuLmtleSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBFbnVtIG9mIG1vZGVzIGZvciBTd2l0Y2hUcmFuc2l0aW9uIGNvbXBvbmVudFxuICogQGVudW0geyBzdHJpbmcgfVxuICovXG5cblxuZXhwb3J0IHZhciBtb2RlcyA9IHtcbiAgb3V0OiAnb3V0LWluJyxcbiAgaW46ICdpbi1vdXQnXG59O1xuXG52YXIgY2FsbEhvb2sgPSBmdW5jdGlvbiBjYWxsSG9vayhlbGVtZW50LCBuYW1lLCBjYikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfZWxlbWVudCRwcm9wcztcblxuICAgIGVsZW1lbnQucHJvcHNbbmFtZV0gJiYgKF9lbGVtZW50JHByb3BzID0gZWxlbWVudC5wcm9wcylbbmFtZV0uYXBwbHkoX2VsZW1lbnQkcHJvcHMsIGFyZ3VtZW50cyk7XG4gICAgY2IoKTtcbiAgfTtcbn07XG5cbnZhciBsZWF2ZVJlbmRlcnMgPSAoX2xlYXZlUmVuZGVycyA9IHt9LCBfbGVhdmVSZW5kZXJzW21vZGVzLm91dF0gPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgY3VycmVudCA9IF9yZWYuY3VycmVudCxcbiAgICAgIGNoYW5nZVN0YXRlID0gX3JlZi5jaGFuZ2VTdGF0ZTtcbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjdXJyZW50LCB7XG4gICAgaW46IGZhbHNlLFxuICAgIG9uRXhpdGVkOiBjYWxsSG9vayhjdXJyZW50LCAnb25FeGl0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGFuZ2VTdGF0ZShFTlRFUklORywgbnVsbCk7XG4gICAgfSlcbiAgfSk7XG59LCBfbGVhdmVSZW5kZXJzW21vZGVzLmluXSA9IGZ1bmN0aW9uIChfcmVmMikge1xuICB2YXIgY3VycmVudCA9IF9yZWYyLmN1cnJlbnQsXG4gICAgICBjaGFuZ2VTdGF0ZSA9IF9yZWYyLmNoYW5nZVN0YXRlLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmMi5jaGlsZHJlbjtcbiAgcmV0dXJuIFtjdXJyZW50LCBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICBpbjogdHJ1ZSxcbiAgICBvbkVudGVyZWQ6IGNhbGxIb29rKGNoaWxkcmVuLCAnb25FbnRlcmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgY2hhbmdlU3RhdGUoRU5URVJJTkcpO1xuICAgIH0pXG4gIH0pXTtcbn0sIF9sZWF2ZVJlbmRlcnMpO1xudmFyIGVudGVyUmVuZGVycyA9IChfZW50ZXJSZW5kZXJzID0ge30sIF9lbnRlclJlbmRlcnNbbW9kZXMub3V0XSA9IGZ1bmN0aW9uIChfcmVmMykge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmMy5jaGlsZHJlbixcbiAgICAgIGNoYW5nZVN0YXRlID0gX3JlZjMuY2hhbmdlU3RhdGU7XG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICBpbjogdHJ1ZSxcbiAgICBvbkVudGVyZWQ6IGNhbGxIb29rKGNoaWxkcmVuLCAnb25FbnRlcmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgY2hhbmdlU3RhdGUoRU5URVJFRCwgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgIGluOiB0cnVlXG4gICAgICB9KSk7XG4gICAgfSlcbiAgfSk7XG59LCBfZW50ZXJSZW5kZXJzW21vZGVzLmluXSA9IGZ1bmN0aW9uIChfcmVmNCkge1xuICB2YXIgY3VycmVudCA9IF9yZWY0LmN1cnJlbnQsXG4gICAgICBjaGlsZHJlbiA9IF9yZWY0LmNoaWxkcmVuLFxuICAgICAgY2hhbmdlU3RhdGUgPSBfcmVmNC5jaGFuZ2VTdGF0ZTtcbiAgcmV0dXJuIFtSZWFjdC5jbG9uZUVsZW1lbnQoY3VycmVudCwge1xuICAgIGluOiBmYWxzZSxcbiAgICBvbkV4aXRlZDogY2FsbEhvb2soY3VycmVudCwgJ29uRXhpdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgY2hhbmdlU3RhdGUoRU5URVJFRCwgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgIGluOiB0cnVlXG4gICAgICB9KSk7XG4gICAgfSlcbiAgfSksIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgIGluOiB0cnVlXG4gIH0pXTtcbn0sIF9lbnRlclJlbmRlcnMpO1xuLyoqXG4gKiBBIHRyYW5zaXRpb24gY29tcG9uZW50IGluc3BpcmVkIGJ5IHRoZSBbdnVlIHRyYW5zaXRpb24gbW9kZXNdKGh0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL3RyYW5zaXRpb25zLmh0bWwjVHJhbnNpdGlvbi1Nb2RlcykuXG4gKiBZb3UgY2FuIHVzZSBpdCB3aGVuIHlvdSB3YW50IHRvIGNvbnRyb2wgdGhlIHJlbmRlciBiZXR3ZWVuIHN0YXRlIHRyYW5zaXRpb25zLlxuICogQmFzZWQgb24gdGhlIHNlbGVjdGVkIG1vZGUgYW5kIHRoZSBjaGlsZCdzIGtleSB3aGljaCBpcyB0aGUgYFRyYW5zaXRpb25gIG9yIGBDU1NUcmFuc2l0aW9uYCBjb21wb25lbnQsIHRoZSBgU3dpdGNoVHJhbnNpdGlvbmAgbWFrZXMgYSBjb25zaXN0ZW50IHRyYW5zaXRpb24gYmV0d2VlbiB0aGVtLlxuICpcbiAqIElmIHRoZSBgb3V0LWluYCBtb2RlIGlzIHNlbGVjdGVkLCB0aGUgYFN3aXRjaFRyYW5zaXRpb25gIHdhaXRzIHVudGlsIHRoZSBvbGQgY2hpbGQgbGVhdmVzIGFuZCB0aGVuIGluc2VydHMgYSBuZXcgY2hpbGQuXG4gKiBJZiB0aGUgYGluLW91dGAgbW9kZSBpcyBzZWxlY3RlZCwgdGhlIGBTd2l0Y2hUcmFuc2l0aW9uYCBpbnNlcnRzIGEgbmV3IGNoaWxkIGZpcnN0LCB3YWl0cyBmb3IgdGhlIG5ldyBjaGlsZCB0byBlbnRlciBhbmQgdGhlbiByZW1vdmVzIHRoZSBvbGQgY2hpbGQuXG4gKlxuICogKipOb3RlKio6IElmIHlvdSB3YW50IHRoZSBhbmltYXRpb24gdG8gaGFwcGVuIHNpbXVsdGFuZW91c2x5XG4gKiAodGhhdCBpcywgdG8gaGF2ZSB0aGUgb2xkIGNoaWxkIHJlbW92ZWQgYW5kIGEgbmV3IGNoaWxkIGluc2VydGVkICoqYXQgdGhlIHNhbWUgdGltZSoqKSxcbiAqIHlvdSBzaG91bGQgdXNlXG4gKiBbYFRyYW5zaXRpb25Hcm91cGBdKGh0dHBzOi8vcmVhY3Rjb21tdW5pdHkub3JnL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvdHJhbnNpdGlvbi1ncm91cClcbiAqIGluc3RlYWQuXG4gKlxuICogYGBganN4XG4gKiBmdW5jdGlvbiBBcHAoKSB7XG4gKiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gKiAgcmV0dXJuIChcbiAqICAgIDxTd2l0Y2hUcmFuc2l0aW9uPlxuICogICAgICA8Q1NTVHJhbnNpdGlvblxuICogICAgICAgIGtleT17c3RhdGUgPyBcIkdvb2RieWUsIHdvcmxkIVwiIDogXCJIZWxsbywgd29ybGQhXCJ9XG4gKiAgICAgICAgYWRkRW5kTGlzdGVuZXI9eyhub2RlLCBkb25lKSA9PiBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGRvbmUsIGZhbHNlKX1cbiAqICAgICAgICBjbGFzc05hbWVzPSdmYWRlJ1xuICogICAgICA+XG4gKiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTdGF0ZShzdGF0ZSA9PiAhc3RhdGUpfT5cbiAqICAgICAgICAgIHtzdGF0ZSA/IFwiR29vZGJ5ZSwgd29ybGQhXCIgOiBcIkhlbGxvLCB3b3JsZCFcIn1cbiAqICAgICAgICA8L2J1dHRvbj5cbiAqICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICogICAgPC9Td2l0Y2hUcmFuc2l0aW9uPlxuICogICk7XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBgYGBjc3NcbiAqIC5mYWRlLWVudGVye1xuICogICAgb3BhY2l0eTogMDtcbiAqIH1cbiAqIC5mYWRlLWV4aXR7XG4gKiAgICBvcGFjaXR5OiAxO1xuICogfVxuICogLmZhZGUtZW50ZXItYWN0aXZle1xuICogICAgb3BhY2l0eTogMTtcbiAqIH1cbiAqIC5mYWRlLWV4aXQtYWN0aXZle1xuICogICAgb3BhY2l0eTogMDtcbiAqIH1cbiAqIC5mYWRlLWVudGVyLWFjdGl2ZSxcbiAqIC5mYWRlLWV4aXQtYWN0aXZle1xuICogICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcztcbiAqIH1cbiAqIGBgYFxuICovXG5cbnZhciBTd2l0Y2hUcmFuc2l0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFN3aXRjaFRyYW5zaXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFN3aXRjaFRyYW5zaXRpb24oKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBzdGF0dXM6IEVOVEVSRUQsXG4gICAgICBjdXJyZW50OiBudWxsXG4gICAgfTtcbiAgICBfdGhpcy5hcHBlYXJlZCA9IGZhbHNlO1xuXG4gICAgX3RoaXMuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbiAoc3RhdHVzLCBjdXJyZW50KSB7XG4gICAgICBpZiAoY3VycmVudCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGN1cnJlbnQgPSBfdGhpcy5zdGF0ZS5jdXJyZW50O1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICBjdXJyZW50OiBjdXJyZW50XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN3aXRjaFRyYW5zaXRpb24ucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuYXBwZWFyZWQgPSB0cnVlO1xuICB9O1xuXG4gIFN3aXRjaFRyYW5zaXRpb24uZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIGlmIChwcm9wcy5jaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50OiBudWxsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5zdGF0dXMgPT09IEVOVEVSSU5HICYmIHByb3BzLm1vZGUgPT09IG1vZGVzLmluKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6IEVOVEVSSU5HXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5jdXJyZW50ICYmIGFyZUNoaWxkcmVuRGlmZmVyZW50KHN0YXRlLmN1cnJlbnQsIHByb3BzLmNoaWxkcmVuKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzOiBFWElUSU5HXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50OiBSZWFjdC5jbG9uZUVsZW1lbnQocHJvcHMuY2hpbGRyZW4sIHtcbiAgICAgICAgaW46IHRydWVcbiAgICAgIH0pXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIG1vZGUgPSBfdGhpcyRwcm9wcy5tb2RlLFxuICAgICAgICBfdGhpcyRzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgIHN0YXR1cyA9IF90aGlzJHN0YXRlLnN0YXR1cyxcbiAgICAgICAgY3VycmVudCA9IF90aGlzJHN0YXRlLmN1cnJlbnQ7XG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICBjdXJyZW50OiBjdXJyZW50LFxuICAgICAgY2hhbmdlU3RhdGU6IHRoaXMuY2hhbmdlU3RhdGUsXG4gICAgICBzdGF0dXM6IHN0YXR1c1xuICAgIH07XG4gICAgdmFyIGNvbXBvbmVudDtcblxuICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICBjYXNlIEVOVEVSSU5HOlxuICAgICAgICBjb21wb25lbnQgPSBlbnRlclJlbmRlcnNbbW9kZV0oZGF0YSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEVYSVRJTkc6XG4gICAgICAgIGNvbXBvbmVudCA9IGxlYXZlUmVuZGVyc1ttb2RlXShkYXRhKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRU5URVJFRDpcbiAgICAgICAgY29tcG9uZW50ID0gY3VycmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbkdyb3VwQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgaXNNb3VudGluZzogIXRoaXMuYXBwZWFyZWRcbiAgICAgIH1cbiAgICB9LCBjb21wb25lbnQpO1xuICB9O1xuXG4gIHJldHVybiBTd2l0Y2hUcmFuc2l0aW9uO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5Td2l0Y2hUcmFuc2l0aW9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIFRyYW5zaXRpb24gbW9kZXMuXG4gICAqIGBvdXQtaW5gOiBDdXJyZW50IGVsZW1lbnQgdHJhbnNpdGlvbnMgb3V0IGZpcnN0LCB0aGVuIHdoZW4gY29tcGxldGUsIHRoZSBuZXcgZWxlbWVudCB0cmFuc2l0aW9ucyBpbi5cbiAgICogYGluLW91dGA6IE5ldyBlbGVtZW50IHRyYW5zaXRpb25zIGluIGZpcnN0LCB0aGVuIHdoZW4gY29tcGxldGUsIHRoZSBjdXJyZW50IGVsZW1lbnQgdHJhbnNpdGlvbnMgb3V0LlxuICAgKlxuICAgKiBAdHlwZSB7J291dC1pbid8J2luLW91dCd9XG4gICAqL1xuICBtb2RlOiBQcm9wVHlwZXMub25lT2YoW21vZGVzLmluLCBtb2Rlcy5vdXRdKSxcblxuICAvKipcbiAgICogQW55IGBUcmFuc2l0aW9uYCBvciBgQ1NTVHJhbnNpdGlvbmAgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWRdKVxufSA6IHt9O1xuU3dpdGNoVHJhbnNpdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIG1vZGU6IG1vZGVzLm91dFxufTtcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaFRyYW5zaXRpb247IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IHRpbWVvdXRzU2hhcGUgfSBmcm9tICcuL3V0aWxzL1Byb3BUeXBlcyc7XG5pbXBvcnQgVHJhbnNpdGlvbkdyb3VwQ29udGV4dCBmcm9tICcuL1RyYW5zaXRpb25Hcm91cENvbnRleHQnO1xuZXhwb3J0IHZhciBVTk1PVU5URUQgPSAndW5tb3VudGVkJztcbmV4cG9ydCB2YXIgRVhJVEVEID0gJ2V4aXRlZCc7XG5leHBvcnQgdmFyIEVOVEVSSU5HID0gJ2VudGVyaW5nJztcbmV4cG9ydCB2YXIgRU5URVJFRCA9ICdlbnRlcmVkJztcbmV4cG9ydCB2YXIgRVhJVElORyA9ICdleGl0aW5nJztcbi8qKlxuICogVGhlIFRyYW5zaXRpb24gY29tcG9uZW50IGxldHMgeW91IGRlc2NyaWJlIGEgdHJhbnNpdGlvbiBmcm9tIG9uZSBjb21wb25lbnRcbiAqIHN0YXRlIHRvIGFub3RoZXIgX292ZXIgdGltZV8gd2l0aCBhIHNpbXBsZSBkZWNsYXJhdGl2ZSBBUEkuIE1vc3QgY29tbW9ubHlcbiAqIGl0J3MgdXNlZCB0byBhbmltYXRlIHRoZSBtb3VudGluZyBhbmQgdW5tb3VudGluZyBvZiBhIGNvbXBvbmVudCwgYnV0IGNhbiBhbHNvXG4gKiBiZSB1c2VkIHRvIGRlc2NyaWJlIGluLXBsYWNlIHRyYW5zaXRpb24gc3RhdGVzIGFzIHdlbGwuXG4gKlxuICogLS0tXG4gKlxuICogKipOb3RlKio6IGBUcmFuc2l0aW9uYCBpcyBhIHBsYXRmb3JtLWFnbm9zdGljIGJhc2UgY29tcG9uZW50LiBJZiB5b3UncmUgdXNpbmdcbiAqIHRyYW5zaXRpb25zIGluIENTUywgeW91J2xsIHByb2JhYmx5IHdhbnQgdG8gdXNlXG4gKiBbYENTU1RyYW5zaXRpb25gXShodHRwczovL3JlYWN0Y29tbXVuaXR5Lm9yZy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2Nzcy10cmFuc2l0aW9uKVxuICogaW5zdGVhZC4gSXQgaW5oZXJpdHMgYWxsIHRoZSBmZWF0dXJlcyBvZiBgVHJhbnNpdGlvbmAsIGJ1dCBjb250YWluc1xuICogYWRkaXRpb25hbCBmZWF0dXJlcyBuZWNlc3NhcnkgdG8gcGxheSBuaWNlIHdpdGggQ1NTIHRyYW5zaXRpb25zIChoZW5jZSB0aGVcbiAqIG5hbWUgb2YgdGhlIGNvbXBvbmVudCkuXG4gKlxuICogLS0tXG4gKlxuICogQnkgZGVmYXVsdCB0aGUgYFRyYW5zaXRpb25gIGNvbXBvbmVudCBkb2VzIG5vdCBhbHRlciB0aGUgYmVoYXZpb3Igb2YgdGhlXG4gKiBjb21wb25lbnQgaXQgcmVuZGVycywgaXQgb25seSB0cmFja3MgXCJlbnRlclwiIGFuZCBcImV4aXRcIiBzdGF0ZXMgZm9yIHRoZVxuICogY29tcG9uZW50cy4gSXQncyB1cCB0byB5b3UgdG8gZ2l2ZSBtZWFuaW5nIGFuZCBlZmZlY3QgdG8gdGhvc2Ugc3RhdGVzLiBGb3JcbiAqIGV4YW1wbGUgd2UgY2FuIGFkZCBzdHlsZXMgdG8gYSBjb21wb25lbnQgd2hlbiBpdCBlbnRlcnMgb3IgZXhpdHM6XG4gKlxuICogYGBganN4XG4gKiBpbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XG4gKlxuICogY29uc3QgZHVyYXRpb24gPSAzMDA7XG4gKlxuICogY29uc3QgZGVmYXVsdFN0eWxlID0ge1xuICogICB0cmFuc2l0aW9uOiBgb3BhY2l0eSAke2R1cmF0aW9ufW1zIGVhc2UtaW4tb3V0YCxcbiAqICAgb3BhY2l0eTogMCxcbiAqIH1cbiAqXG4gKiBjb25zdCB0cmFuc2l0aW9uU3R5bGVzID0ge1xuICogICBlbnRlcmluZzogeyBvcGFjaXR5OiAxIH0sXG4gKiAgIGVudGVyZWQ6ICB7IG9wYWNpdHk6IDEgfSxcbiAqICAgZXhpdGluZzogIHsgb3BhY2l0eTogMCB9LFxuICogICBleGl0ZWQ6ICB7IG9wYWNpdHk6IDAgfSxcbiAqIH07XG4gKlxuICogY29uc3QgRmFkZSA9ICh7IGluOiBpblByb3AgfSkgPT4gKFxuICogICA8VHJhbnNpdGlvbiBpbj17aW5Qcm9wfSB0aW1lb3V0PXtkdXJhdGlvbn0+XG4gKiAgICAge3N0YXRlID0+IChcbiAqICAgICAgIDxkaXYgc3R5bGU9e3tcbiAqICAgICAgICAgLi4uZGVmYXVsdFN0eWxlLFxuICogICAgICAgICAuLi50cmFuc2l0aW9uU3R5bGVzW3N0YXRlXVxuICogICAgICAgfX0+XG4gKiAgICAgICAgIEknbSBhIGZhZGUgVHJhbnNpdGlvbiFcbiAqICAgICAgIDwvZGl2PlxuICogICAgICl9XG4gKiAgIDwvVHJhbnNpdGlvbj5cbiAqICk7XG4gKiBgYGBcbiAqXG4gKiBUaGVyZSBhcmUgNCBtYWluIHN0YXRlcyBhIFRyYW5zaXRpb24gY2FuIGJlIGluOlxuICogIC0gYCdlbnRlcmluZydgXG4gKiAgLSBgJ2VudGVyZWQnYFxuICogIC0gYCdleGl0aW5nJ2BcbiAqICAtIGAnZXhpdGVkJ2BcbiAqXG4gKiBUcmFuc2l0aW9uIHN0YXRlIGlzIHRvZ2dsZWQgdmlhIHRoZSBgaW5gIHByb3AuIFdoZW4gYHRydWVgIHRoZSBjb21wb25lbnRcbiAqIGJlZ2lucyB0aGUgXCJFbnRlclwiIHN0YWdlLiBEdXJpbmcgdGhpcyBzdGFnZSwgdGhlIGNvbXBvbmVudCB3aWxsIHNoaWZ0IGZyb21cbiAqIGl0cyBjdXJyZW50IHRyYW5zaXRpb24gc3RhdGUsIHRvIGAnZW50ZXJpbmcnYCBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZVxuICogdHJhbnNpdGlvbiBhbmQgdGhlbiB0byB0aGUgYCdlbnRlcmVkJ2Agc3RhZ2Ugb25jZSBpdCdzIGNvbXBsZXRlLiBMZXQncyB0YWtlXG4gKiB0aGUgZm9sbG93aW5nIGV4YW1wbGUgKHdlJ2xsIHVzZSB0aGVcbiAqIFt1c2VTdGF0ZV0oaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2hvb2tzLXJlZmVyZW5jZS5odG1sI3VzZXN0YXRlKSBob29rKTpcbiAqXG4gKiBgYGBqc3hcbiAqIGZ1bmN0aW9uIEFwcCgpIHtcbiAqICAgY29uc3QgW2luUHJvcCwgc2V0SW5Qcm9wXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAqICAgcmV0dXJuIChcbiAqICAgICA8ZGl2PlxuICogICAgICAgPFRyYW5zaXRpb24gaW49e2luUHJvcH0gdGltZW91dD17NTAwfT5cbiAqICAgICAgICAge3N0YXRlID0+IChcbiAqICAgICAgICAgICAvLyAuLi5cbiAqICAgICAgICAgKX1cbiAqICAgICAgIDwvVHJhbnNpdGlvbj5cbiAqICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0SW5Qcm9wKHRydWUpfT5cbiAqICAgICAgICAgQ2xpY2sgdG8gRW50ZXJcbiAqICAgICAgIDwvYnV0dG9uPlxuICogICAgIDwvZGl2PlxuICogICApO1xuICogfVxuICogYGBgXG4gKlxuICogV2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQgdGhlIGNvbXBvbmVudCB3aWxsIHNoaWZ0IHRvIHRoZSBgJ2VudGVyaW5nJ2Agc3RhdGVcbiAqIGFuZCBzdGF5IHRoZXJlIGZvciA1MDBtcyAodGhlIHZhbHVlIG9mIGB0aW1lb3V0YCkgYmVmb3JlIGl0IGZpbmFsbHkgc3dpdGNoZXNcbiAqIHRvIGAnZW50ZXJlZCdgLlxuICpcbiAqIFdoZW4gYGluYCBpcyBgZmFsc2VgIHRoZSBzYW1lIHRoaW5nIGhhcHBlbnMgZXhjZXB0IHRoZSBzdGF0ZSBtb3ZlcyBmcm9tXG4gKiBgJ2V4aXRpbmcnYCB0byBgJ2V4aXRlZCdgLlxuICovXG5cbnZhciBUcmFuc2l0aW9uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFRyYW5zaXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRyYW5zaXRpb24ocHJvcHMsIGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkgfHwgdGhpcztcbiAgICB2YXIgcGFyZW50R3JvdXAgPSBjb250ZXh0OyAvLyBJbiB0aGUgY29udGV4dCBvZiBhIFRyYW5zaXRpb25Hcm91cCBhbGwgZW50ZXJzIGFyZSByZWFsbHkgYXBwZWFyc1xuXG4gICAgdmFyIGFwcGVhciA9IHBhcmVudEdyb3VwICYmICFwYXJlbnRHcm91cC5pc01vdW50aW5nID8gcHJvcHMuZW50ZXIgOiBwcm9wcy5hcHBlYXI7XG4gICAgdmFyIGluaXRpYWxTdGF0dXM7XG4gICAgX3RoaXMuYXBwZWFyU3RhdHVzID0gbnVsbDtcblxuICAgIGlmIChwcm9wcy5pbikge1xuICAgICAgaWYgKGFwcGVhcikge1xuICAgICAgICBpbml0aWFsU3RhdHVzID0gRVhJVEVEO1xuICAgICAgICBfdGhpcy5hcHBlYXJTdGF0dXMgPSBFTlRFUklORztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFTlRFUkVEO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocHJvcHMudW5tb3VudE9uRXhpdCB8fCBwcm9wcy5tb3VudE9uRW50ZXIpIHtcbiAgICAgICAgaW5pdGlhbFN0YXR1cyA9IFVOTU9VTlRFRDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxTdGF0dXMgPSBFWElURUQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBzdGF0dXM6IGluaXRpYWxTdGF0dXNcbiAgICB9O1xuICAgIF90aGlzLm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgVHJhbnNpdGlvbi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoX3JlZiwgcHJldlN0YXRlKSB7XG4gICAgdmFyIG5leHRJbiA9IF9yZWYuaW47XG5cbiAgICBpZiAobmV4dEluICYmIHByZXZTdGF0ZS5zdGF0dXMgPT09IFVOTU9VTlRFRCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzOiBFWElURURcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH0gLy8gZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUocHJldlByb3BzKSB7XG4gIC8vICAgbGV0IG5leHRTdGF0dXMgPSBudWxsXG4gIC8vICAgaWYgKHByZXZQcm9wcyAhPT0gdGhpcy5wcm9wcykge1xuICAvLyAgICAgY29uc3QgeyBzdGF0dXMgfSA9IHRoaXMuc3RhdGVcbiAgLy8gICAgIGlmICh0aGlzLnByb3BzLmluKSB7XG4gIC8vICAgICAgIGlmIChzdGF0dXMgIT09IEVOVEVSSU5HICYmIHN0YXR1cyAhPT0gRU5URVJFRCkge1xuICAvLyAgICAgICAgIG5leHRTdGF0dXMgPSBFTlRFUklOR1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICBpZiAoc3RhdHVzID09PSBFTlRFUklORyB8fCBzdGF0dXMgPT09IEVOVEVSRUQpIHtcbiAgLy8gICAgICAgICBuZXh0U3RhdHVzID0gRVhJVElOR1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyAgIHJldHVybiB7IG5leHRTdGF0dXMgfVxuICAvLyB9XG4gIDtcblxuICB2YXIgX3Byb3RvID0gVHJhbnNpdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0dXModHJ1ZSwgdGhpcy5hcHBlYXJTdGF0dXMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgdmFyIG5leHRTdGF0dXMgPSBudWxsO1xuXG4gICAgaWYgKHByZXZQcm9wcyAhPT0gdGhpcy5wcm9wcykge1xuICAgICAgdmFyIHN0YXR1cyA9IHRoaXMuc3RhdGUuc3RhdHVzO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5pbikge1xuICAgICAgICBpZiAoc3RhdHVzICE9PSBFTlRFUklORyAmJiBzdGF0dXMgIT09IEVOVEVSRUQpIHtcbiAgICAgICAgICBuZXh0U3RhdHVzID0gRU5URVJJTkc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IEVOVEVSSU5HIHx8IHN0YXR1cyA9PT0gRU5URVJFRCkge1xuICAgICAgICAgIG5leHRTdGF0dXMgPSBFWElUSU5HO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVTdGF0dXMoZmFsc2UsIG5leHRTdGF0dXMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2FuY2VsTmV4dENhbGxiYWNrKCk7XG4gIH07XG5cbiAgX3Byb3RvLmdldFRpbWVvdXRzID0gZnVuY3Rpb24gZ2V0VGltZW91dHMoKSB7XG4gICAgdmFyIHRpbWVvdXQgPSB0aGlzLnByb3BzLnRpbWVvdXQ7XG4gICAgdmFyIGV4aXQsIGVudGVyLCBhcHBlYXI7XG4gICAgZXhpdCA9IGVudGVyID0gYXBwZWFyID0gdGltZW91dDtcblxuICAgIGlmICh0aW1lb3V0ICE9IG51bGwgJiYgdHlwZW9mIHRpbWVvdXQgIT09ICdudW1iZXInKSB7XG4gICAgICBleGl0ID0gdGltZW91dC5leGl0O1xuICAgICAgZW50ZXIgPSB0aW1lb3V0LmVudGVyOyAvLyBUT0RPOiByZW1vdmUgZmFsbGJhY2sgZm9yIG5leHQgbWFqb3JcblxuICAgICAgYXBwZWFyID0gdGltZW91dC5hcHBlYXIgIT09IHVuZGVmaW5lZCA/IHRpbWVvdXQuYXBwZWFyIDogZW50ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGV4aXQ6IGV4aXQsXG4gICAgICBlbnRlcjogZW50ZXIsXG4gICAgICBhcHBlYXI6IGFwcGVhclxuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZVN0YXR1cyA9IGZ1bmN0aW9uIHVwZGF0ZVN0YXR1cyhtb3VudGluZywgbmV4dFN0YXR1cykge1xuICAgIGlmIChtb3VudGluZyA9PT0gdm9pZCAwKSB7XG4gICAgICBtb3VudGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChuZXh0U3RhdHVzICE9PSBudWxsKSB7XG4gICAgICAvLyBuZXh0U3RhdHVzIHdpbGwgYWx3YXlzIGJlIEVOVEVSSU5HIG9yIEVYSVRJTkcuXG4gICAgICB0aGlzLmNhbmNlbE5leHRDYWxsYmFjaygpO1xuXG4gICAgICBpZiAobmV4dFN0YXR1cyA9PT0gRU5URVJJTkcpIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtRW50ZXIobW91bnRpbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wZXJmb3JtRXhpdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy51bm1vdW50T25FeGl0ICYmIHRoaXMuc3RhdGUuc3RhdHVzID09PSBFWElURUQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdGF0dXM6IFVOTU9VTlRFRFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5wZXJmb3JtRW50ZXIgPSBmdW5jdGlvbiBwZXJmb3JtRW50ZXIobW91bnRpbmcpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBlbnRlciA9IHRoaXMucHJvcHMuZW50ZXI7XG4gICAgdmFyIGFwcGVhcmluZyA9IHRoaXMuY29udGV4dCA/IHRoaXMuY29udGV4dC5pc01vdW50aW5nIDogbW91bnRpbmc7XG5cbiAgICB2YXIgX3JlZjIgPSB0aGlzLnByb3BzLm5vZGVSZWYgPyBbYXBwZWFyaW5nXSA6IFtSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKSwgYXBwZWFyaW5nXSxcbiAgICAgICAgbWF5YmVOb2RlID0gX3JlZjJbMF0sXG4gICAgICAgIG1heWJlQXBwZWFyaW5nID0gX3JlZjJbMV07XG5cbiAgICB2YXIgdGltZW91dHMgPSB0aGlzLmdldFRpbWVvdXRzKCk7XG4gICAgdmFyIGVudGVyVGltZW91dCA9IGFwcGVhcmluZyA/IHRpbWVvdXRzLmFwcGVhciA6IHRpbWVvdXRzLmVudGVyOyAvLyBubyBlbnRlciBhbmltYXRpb24gc2tpcCByaWdodCB0byBFTlRFUkVEXG4gICAgLy8gaWYgd2UgYXJlIG1vdW50aW5nIGFuZCBydW5uaW5nIHRoaXMgaXQgbWVhbnMgYXBwZWFyIF9tdXN0XyBiZSBzZXRcblxuICAgIGlmICghbW91bnRpbmcgJiYgIWVudGVyIHx8IGNvbmZpZy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5zYWZlU2V0U3RhdGUoe1xuICAgICAgICBzdGF0dXM6IEVOVEVSRURcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnByb3BzLm9uRW50ZXJlZChtYXliZU5vZGUpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkVudGVyKG1heWJlTm9kZSwgbWF5YmVBcHBlYXJpbmcpO1xuICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgIHN0YXR1czogRU5URVJJTkdcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIucHJvcHMub25FbnRlcmluZyhtYXliZU5vZGUsIG1heWJlQXBwZWFyaW5nKTtcblxuICAgICAgX3RoaXMyLm9uVHJhbnNpdGlvbkVuZChlbnRlclRpbWVvdXQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLnNhZmVTZXRTdGF0ZSh7XG4gICAgICAgICAgc3RhdHVzOiBFTlRFUkVEXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIucHJvcHMub25FbnRlcmVkKG1heWJlTm9kZSwgbWF5YmVBcHBlYXJpbmcpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5wZXJmb3JtRXhpdCA9IGZ1bmN0aW9uIHBlcmZvcm1FeGl0KCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGV4aXQgPSB0aGlzLnByb3BzLmV4aXQ7XG4gICAgdmFyIHRpbWVvdXRzID0gdGhpcy5nZXRUaW1lb3V0cygpO1xuICAgIHZhciBtYXliZU5vZGUgPSB0aGlzLnByb3BzLm5vZGVSZWYgPyB1bmRlZmluZWQgOiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTsgLy8gbm8gZXhpdCBhbmltYXRpb24gc2tpcCByaWdodCB0byBFWElURURcblxuICAgIGlmICghZXhpdCB8fCBjb25maWcuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBFWElURURcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMzLnByb3BzLm9uRXhpdGVkKG1heWJlTm9kZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uRXhpdChtYXliZU5vZGUpO1xuICAgIHRoaXMuc2FmZVNldFN0YXRlKHtcbiAgICAgIHN0YXR1czogRVhJVElOR1xuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMy5wcm9wcy5vbkV4aXRpbmcobWF5YmVOb2RlKTtcblxuICAgICAgX3RoaXMzLm9uVHJhbnNpdGlvbkVuZCh0aW1lb3V0cy5leGl0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5zYWZlU2V0U3RhdGUoe1xuICAgICAgICAgIHN0YXR1czogRVhJVEVEXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczMucHJvcHMub25FeGl0ZWQobWF5YmVOb2RlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY2FuY2VsTmV4dENhbGxiYWNrID0gZnVuY3Rpb24gY2FuY2VsTmV4dENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLm5leHRDYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5uZXh0Q2FsbGJhY2suY2FuY2VsKCk7XG4gICAgICB0aGlzLm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zYWZlU2V0U3RhdGUgPSBmdW5jdGlvbiBzYWZlU2V0U3RhdGUobmV4dFN0YXRlLCBjYWxsYmFjaykge1xuICAgIC8vIFRoaXMgc2hvdWxkbid0IGJlIG5lY2Vzc2FyeSwgYnV0IHRoZXJlIGFyZSB3ZWlyZCByYWNlIGNvbmRpdGlvbnMgd2l0aFxuICAgIC8vIHNldFN0YXRlIGNhbGxiYWNrcyBhbmQgdW5tb3VudGluZyBpbiB0ZXN0aW5nLCBzbyBhbHdheXMgbWFrZSBzdXJlIHRoYXRcbiAgICAvLyB3ZSBjYW4gY2FuY2VsIGFueSBwZW5kaW5nIHNldFN0YXRlIGNhbGxiYWNrcyBhZnRlciB3ZSB1bm1vdW50LlxuICAgIGNhbGxiYWNrID0gdGhpcy5zZXROZXh0Q2FsbGJhY2soY2FsbGJhY2spO1xuICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgX3Byb3RvLnNldE5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIHNldE5leHRDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIGFjdGl2ZSA9IHRydWU7XG5cbiAgICB0aGlzLm5leHRDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXM0Lm5leHRDYWxsYmFjayA9IG51bGw7XG4gICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5uZXh0Q2FsbGJhY2suY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgYWN0aXZlID0gZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLm5leHRDYWxsYmFjaztcbiAgfTtcblxuICBfcHJvdG8ub25UcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKHRpbWVvdXQsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnNldE5leHRDYWxsYmFjayhoYW5kbGVyKTtcbiAgICB2YXIgbm9kZSA9IHRoaXMucHJvcHMubm9kZVJlZiA/IHRoaXMucHJvcHMubm9kZVJlZi5jdXJyZW50IDogUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgdmFyIGRvZXNOb3RIYXZlVGltZW91dE9yTGlzdGVuZXIgPSB0aW1lb3V0ID09IG51bGwgJiYgIXRoaXMucHJvcHMuYWRkRW5kTGlzdGVuZXI7XG5cbiAgICBpZiAoIW5vZGUgfHwgZG9lc05vdEhhdmVUaW1lb3V0T3JMaXN0ZW5lcikge1xuICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRDYWxsYmFjaywgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuYWRkRW5kTGlzdGVuZXIpIHtcbiAgICAgIHZhciBfcmVmMyA9IHRoaXMucHJvcHMubm9kZVJlZiA/IFt0aGlzLm5leHRDYWxsYmFja10gOiBbbm9kZSwgdGhpcy5uZXh0Q2FsbGJhY2tdLFxuICAgICAgICAgIG1heWJlTm9kZSA9IF9yZWYzWzBdLFxuICAgICAgICAgIG1heWJlTmV4dENhbGxiYWNrID0gX3JlZjNbMV07XG5cbiAgICAgIHRoaXMucHJvcHMuYWRkRW5kTGlzdGVuZXIobWF5YmVOb2RlLCBtYXliZU5leHRDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgaWYgKHRpbWVvdXQgIT0gbnVsbCkge1xuICAgICAgc2V0VGltZW91dCh0aGlzLm5leHRDYWxsYmFjaywgdGltZW91dCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHN0YXR1cyA9IHRoaXMuc3RhdGUuc3RhdHVzO1xuXG4gICAgaWYgKHN0YXR1cyA9PT0gVU5NT1VOVEVEKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBfaW4gPSBfdGhpcyRwcm9wcy5pbixcbiAgICAgICAgX21vdW50T25FbnRlciA9IF90aGlzJHByb3BzLm1vdW50T25FbnRlcixcbiAgICAgICAgX3VubW91bnRPbkV4aXQgPSBfdGhpcyRwcm9wcy51bm1vdW50T25FeGl0LFxuICAgICAgICBfYXBwZWFyID0gX3RoaXMkcHJvcHMuYXBwZWFyLFxuICAgICAgICBfZW50ZXIgPSBfdGhpcyRwcm9wcy5lbnRlcixcbiAgICAgICAgX2V4aXQgPSBfdGhpcyRwcm9wcy5leGl0LFxuICAgICAgICBfdGltZW91dCA9IF90aGlzJHByb3BzLnRpbWVvdXQsXG4gICAgICAgIF9hZGRFbmRMaXN0ZW5lciA9IF90aGlzJHByb3BzLmFkZEVuZExpc3RlbmVyLFxuICAgICAgICBfb25FbnRlciA9IF90aGlzJHByb3BzLm9uRW50ZXIsXG4gICAgICAgIF9vbkVudGVyaW5nID0gX3RoaXMkcHJvcHMub25FbnRlcmluZyxcbiAgICAgICAgX29uRW50ZXJlZCA9IF90aGlzJHByb3BzLm9uRW50ZXJlZCxcbiAgICAgICAgX29uRXhpdCA9IF90aGlzJHByb3BzLm9uRXhpdCxcbiAgICAgICAgX29uRXhpdGluZyA9IF90aGlzJHByb3BzLm9uRXhpdGluZyxcbiAgICAgICAgX29uRXhpdGVkID0gX3RoaXMkcHJvcHMub25FeGl0ZWQsXG4gICAgICAgIF9ub2RlUmVmID0gX3RoaXMkcHJvcHMubm9kZVJlZixcbiAgICAgICAgY2hpbGRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImluXCIsIFwibW91bnRPbkVudGVyXCIsIFwidW5tb3VudE9uRXhpdFwiLCBcImFwcGVhclwiLCBcImVudGVyXCIsIFwiZXhpdFwiLCBcInRpbWVvdXRcIiwgXCJhZGRFbmRMaXN0ZW5lclwiLCBcIm9uRW50ZXJcIiwgXCJvbkVudGVyaW5nXCIsIFwib25FbnRlcmVkXCIsIFwib25FeGl0XCIsIFwib25FeGl0aW5nXCIsIFwib25FeGl0ZWRcIiwgXCJub2RlUmVmXCJdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAvKiNfX1BVUkVfXyovXG4gICAgICAvLyBhbGxvd3MgZm9yIG5lc3RlZCBUcmFuc2l0aW9uc1xuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uR3JvdXBDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9LCB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBjaGlsZHJlbihzdGF0dXMsIGNoaWxkUHJvcHMpIDogUmVhY3QuY2xvbmVFbGVtZW50KFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pLCBjaGlsZFByb3BzKSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBUcmFuc2l0aW9uO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uLmNvbnRleHRUeXBlID0gVHJhbnNpdGlvbkdyb3VwQ29udGV4dDtcblRyYW5zaXRpb24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogQSBSZWFjdCByZWZlcmVuY2UgdG8gRE9NIGVsZW1lbnQgdGhhdCBuZWVkIHRvIHRyYW5zaXRpb246XG4gICAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81MTEyNzEzMC80NjcxOTMyXG4gICAqXG4gICAqICAgLSBXaGVuIGBub2RlUmVmYCBwcm9wIGlzIHVzZWQsIGBub2RlYCBpcyBub3QgcGFzc2VkIHRvIGNhbGxiYWNrIGZ1bmN0aW9uc1xuICAgKiAgICAgIChlLmcuIGBvbkVudGVyYCkgYmVjYXVzZSB1c2VyIGFscmVhZHkgaGFzIGRpcmVjdCBhY2Nlc3MgdG8gdGhlIG5vZGUuXG4gICAqICAgLSBXaGVuIGNoYW5naW5nIGBrZXlgIHByb3Agb2YgYFRyYW5zaXRpb25gIGluIGEgYFRyYW5zaXRpb25Hcm91cGAgYSBuZXdcbiAgICogICAgIGBub2RlUmVmYCBuZWVkIHRvIGJlIHByb3ZpZGVkIHRvIGBUcmFuc2l0aW9uYCB3aXRoIGNoYW5nZWQgYGtleWAgcHJvcFxuICAgKiAgICAgKHNlZVxuICAgKiAgICAgW3Rlc3QvQ1NTVHJhbnNpdGlvbi10ZXN0LmpzXShodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL2Jsb2IvMTM0MzVmODk3YjNhYjcxZjZlMTlkNzI0ZjE0NTU5NmY1OTEwNTgxYy90ZXN0L0NTU1RyYW5zaXRpb24tdGVzdC5qcyNMMzYyLUw0MzcpKS5cbiAgICovXG4gIG5vZGVSZWY6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgY3VycmVudDogdHlwZW9mIEVsZW1lbnQgPT09ICd1bmRlZmluZWQnID8gUHJvcFR5cGVzLmFueSA6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEVsZW1lbnQpXG4gIH0pLFxuXG4gIC8qKlxuICAgKiBBIGBmdW5jdGlvbmAgY2hpbGQgY2FuIGJlIHVzZWQgaW5zdGVhZCBvZiBhIFJlYWN0IGVsZW1lbnQuIFRoaXMgZnVuY3Rpb24gaXNcbiAgICogY2FsbGVkIHdpdGggdGhlIGN1cnJlbnQgdHJhbnNpdGlvbiBzdGF0dXMgKGAnZW50ZXJpbmcnYCwgYCdlbnRlcmVkJ2AsXG4gICAqIGAnZXhpdGluZydgLCBgJ2V4aXRlZCdgKSwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gYXBwbHkgY29udGV4dFxuICAgKiBzcGVjaWZpYyBwcm9wcyB0byBhIGNvbXBvbmVudC5cbiAgICpcbiAgICogYGBganN4XG4gICAqIDxUcmFuc2l0aW9uIGluPXt0aGlzLnN0YXRlLmlufSB0aW1lb3V0PXsxNTB9PlxuICAgKiAgIHtzdGF0ZSA9PiAoXG4gICAqICAgICA8TXlDb21wb25lbnQgY2xhc3NOYW1lPXtgZmFkZSBmYWRlLSR7c3RhdGV9YH0gLz5cbiAgICogICApfVxuICAgKiA8L1RyYW5zaXRpb24+XG4gICAqIGBgYFxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsIFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWRdKS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBjb21wb25lbnQ7IHRyaWdnZXJzIHRoZSBlbnRlciBvciBleGl0IHN0YXRlc1xuICAgKi9cbiAgaW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0IHRoZSBjaGlsZCBjb21wb25lbnQgaXMgbW91bnRlZCBpbW1lZGlhdGVseSBhbG9uZyB3aXRoXG4gICAqIHRoZSBwYXJlbnQgYFRyYW5zaXRpb25gIGNvbXBvbmVudC4gSWYgeW91IHdhbnQgdG8gXCJsYXp5IG1vdW50XCIgdGhlIGNvbXBvbmVudCBvbiB0aGVcbiAgICogZmlyc3QgYGluPXt0cnVlfWAgeW91IGNhbiBzZXQgYG1vdW50T25FbnRlcmAuIEFmdGVyIHRoZSBmaXJzdCBlbnRlciB0cmFuc2l0aW9uIHRoZSBjb21wb25lbnQgd2lsbCBzdGF5XG4gICAqIG1vdW50ZWQsIGV2ZW4gb24gXCJleGl0ZWRcIiwgdW5sZXNzIHlvdSBhbHNvIHNwZWNpZnkgYHVubW91bnRPbkV4aXRgLlxuICAgKi9cbiAgbW91bnRPbkVudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCB0aGUgY2hpbGQgY29tcG9uZW50IHN0YXlzIG1vdW50ZWQgYWZ0ZXIgaXQgcmVhY2hlcyB0aGUgYCdleGl0ZWQnYCBzdGF0ZS5cbiAgICogU2V0IGB1bm1vdW50T25FeGl0YCBpZiB5b3UnZCBwcmVmZXIgdG8gdW5tb3VudCB0aGUgY29tcG9uZW50IGFmdGVyIGl0IGZpbmlzaGVzIGV4aXRpbmcuXG4gICAqL1xuICB1bm1vdW50T25FeGl0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCB0aGUgY2hpbGQgY29tcG9uZW50IGRvZXMgbm90IHBlcmZvcm0gdGhlIGVudGVyIHRyYW5zaXRpb24gd2hlblxuICAgKiBpdCBmaXJzdCBtb3VudHMsIHJlZ2FyZGxlc3Mgb2YgdGhlIHZhbHVlIG9mIGBpbmAuIElmIHlvdSB3YW50IHRoaXNcbiAgICogYmVoYXZpb3IsIHNldCBib3RoIGBhcHBlYXJgIGFuZCBgaW5gIHRvIGB0cnVlYC5cbiAgICpcbiAgICogPiAqKk5vdGUqKjogdGhlcmUgYXJlIG5vIHNwZWNpYWwgYXBwZWFyIHN0YXRlcyBsaWtlIGBhcHBlYXJpbmdgL2BhcHBlYXJlZGAsIHRoaXMgcHJvcFxuICAgKiA+IG9ubHkgYWRkcyBhbiBhZGRpdGlvbmFsIGVudGVyIHRyYW5zaXRpb24uIEhvd2V2ZXIsIGluIHRoZVxuICAgKiA+IGA8Q1NTVHJhbnNpdGlvbj5gIGNvbXBvbmVudCB0aGF0IGZpcnN0IGVudGVyIHRyYW5zaXRpb24gZG9lcyByZXN1bHQgaW5cbiAgICogPiBhZGRpdGlvbmFsIGAuYXBwZWFyLSpgIGNsYXNzZXMsIHRoYXQgd2F5IHlvdSBjYW4gY2hvb3NlIHRvIHN0eWxlIGl0XG4gICAqID4gZGlmZmVyZW50bHkuXG4gICAqL1xuICBhcHBlYXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBlbnRlciB0cmFuc2l0aW9ucy5cbiAgICovXG4gIGVudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgZXhpdCB0cmFuc2l0aW9ucy5cbiAgICovXG4gIGV4aXQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgZHVyYXRpb24gb2YgdGhlIHRyYW5zaXRpb24sIGluIG1pbGxpc2Vjb25kcy5cbiAgICogUmVxdWlyZWQgdW5sZXNzIGBhZGRFbmRMaXN0ZW5lcmAgaXMgcHJvdmlkZWQuXG4gICAqXG4gICAqIFlvdSBtYXkgc3BlY2lmeSBhIHNpbmdsZSB0aW1lb3V0IGZvciBhbGwgdHJhbnNpdGlvbnM6XG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiB0aW1lb3V0PXs1MDB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBvciBpbmRpdmlkdWFsbHk6XG4gICAqXG4gICAqIGBgYGpzeFxuICAgKiB0aW1lb3V0PXt7XG4gICAqICBhcHBlYXI6IDUwMCxcbiAgICogIGVudGVyOiAzMDAsXG4gICAqICBleGl0OiA1MDAsXG4gICAqIH19XG4gICAqIGBgYFxuICAgKlxuICAgKiAtIGBhcHBlYXJgIGRlZmF1bHRzIHRvIHRoZSB2YWx1ZSBvZiBgZW50ZXJgXG4gICAqIC0gYGVudGVyYCBkZWZhdWx0cyB0byBgMGBcbiAgICogLSBgZXhpdGAgZGVmYXVsdHMgdG8gYDBgXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXIgfCB7IGVudGVyPzogbnVtYmVyLCBleGl0PzogbnVtYmVyLCBhcHBlYXI/OiBudW1iZXIgfX1cbiAgICovXG4gIHRpbWVvdXQ6IGZ1bmN0aW9uIHRpbWVvdXQocHJvcHMpIHtcbiAgICB2YXIgcHQgPSB0aW1lb3V0c1NoYXBlO1xuICAgIGlmICghcHJvcHMuYWRkRW5kTGlzdGVuZXIpIHB0ID0gcHQuaXNSZXF1aXJlZDtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBwdC5hcHBseSh2b2lkIDAsIFtwcm9wc10uY29uY2F0KGFyZ3MpKTtcbiAgfSxcblxuICAvKipcbiAgICogQWRkIGEgY3VzdG9tIHRyYW5zaXRpb24gZW5kIHRyaWdnZXIuIENhbGxlZCB3aXRoIHRoZSB0cmFuc2l0aW9uaW5nXG4gICAqIERPTSBub2RlIGFuZCBhIGBkb25lYCBjYWxsYmFjay4gQWxsb3dzIGZvciBtb3JlIGZpbmUgZ3JhaW5lZCB0cmFuc2l0aW9uIGVuZFxuICAgKiBsb2dpYy4gVGltZW91dHMgYXJlIHN0aWxsIHVzZWQgYXMgYSBmYWxsYmFjayBpZiBwcm92aWRlZC5cbiAgICpcbiAgICogKipOb3RlKio6IHdoZW4gYG5vZGVSZWZgIHByb3AgaXMgcGFzc2VkLCBgbm9kZWAgaXMgbm90IHBhc3NlZC5cbiAgICpcbiAgICogYGBganN4XG4gICAqIGFkZEVuZExpc3RlbmVyPXsobm9kZSwgZG9uZSkgPT4ge1xuICAgKiAgIC8vIHVzZSB0aGUgY3NzIHRyYW5zaXRpb25lbmQgZXZlbnQgdG8gbWFyayB0aGUgZmluaXNoIG9mIGEgdHJhbnNpdGlvblxuICAgKiAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGRvbmUsIGZhbHNlKTtcbiAgICogfX1cbiAgICogYGBgXG4gICAqL1xuICBhZGRFbmRMaXN0ZW5lcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgXCJlbnRlcmluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLiBBbiBleHRyYSBwYXJhbWV0ZXJcbiAgICogYGlzQXBwZWFyaW5nYCBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2UgaXMgb2NjdXJyaW5nIG9uIHRoZSBpbml0aWFsIG1vdW50XG4gICAqXG4gICAqICoqTm90ZSoqOiB3aGVuIGBub2RlUmVmYCBwcm9wIGlzIHBhc3NlZCwgYG5vZGVgIGlzIG5vdCBwYXNzZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50LCBpc0FwcGVhcmluZzogYm9vbCkgLT4gdm9pZFxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuIEFuIGV4dHJhIHBhcmFtZXRlclxuICAgKiBgaXNBcHBlYXJpbmdgIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZSBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnRcbiAgICpcbiAgICogKipOb3RlKio6IHdoZW4gYG5vZGVSZWZgIHByb3AgaXMgcGFzc2VkLCBgbm9kZWAgaXMgbm90IHBhc3NlZC5cbiAgICpcbiAgICogQHR5cGUgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKVxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGFmdGVyIHRoZSBcImVudGVyZWRcIiBzdGF0dXMgaXMgYXBwbGllZC4gQW4gZXh0cmEgcGFyYW1ldGVyXG4gICAqIGBpc0FwcGVhcmluZ2AgaXMgc3VwcGxpZWQgdG8gaW5kaWNhdGUgaWYgdGhlIGVudGVyIHN0YWdlIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudFxuICAgKlxuICAgKiAqKk5vdGUqKjogd2hlbiBgbm9kZVJlZmAgcHJvcCBpcyBwYXNzZWQsIGBub2RlYCBpcyBub3QgcGFzc2VkLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRcbiAgICovXG4gIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgXCJleGl0aW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqICoqTm90ZSoqOiB3aGVuIGBub2RlUmVmYCBwcm9wIGlzIHBhc3NlZCwgYG5vZGVgIGlzIG5vdCBwYXNzZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXG4gICAqL1xuICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJleGl0aW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAqXG4gICAqICoqTm90ZSoqOiB3aGVuIGBub2RlUmVmYCBwcm9wIGlzIHBhc3NlZCwgYG5vZGVgIGlzIG5vdCBwYXNzZWQuXG4gICAqXG4gICAqIEB0eXBlIEZ1bmN0aW9uKG5vZGU6IEh0bWxFbGVtZW50KSAtPiB2b2lkXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJleGl0ZWRcIiBzdGF0dXMgaXMgYXBwbGllZC5cbiAgICpcbiAgICogKipOb3RlKio6IHdoZW4gYG5vZGVSZWZgIHByb3AgaXMgcGFzc2VkLCBgbm9kZWAgaXMgbm90IHBhc3NlZFxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZFxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jXG59IDoge307IC8vIE5hbWUgdGhlIGZ1bmN0aW9uIHNvIGl0IGlzIGNsZWFyZXIgaW4gdGhlIGRvY3VtZW50YXRpb25cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cblRyYW5zaXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBpbjogZmFsc2UsXG4gIG1vdW50T25FbnRlcjogZmFsc2UsXG4gIHVubW91bnRPbkV4aXQ6IGZhbHNlLFxuICBhcHBlYXI6IGZhbHNlLFxuICBlbnRlcjogdHJ1ZSxcbiAgZXhpdDogdHJ1ZSxcbiAgb25FbnRlcjogbm9vcCxcbiAgb25FbnRlcmluZzogbm9vcCxcbiAgb25FbnRlcmVkOiBub29wLFxuICBvbkV4aXQ6IG5vb3AsXG4gIG9uRXhpdGluZzogbm9vcCxcbiAgb25FeGl0ZWQ6IG5vb3Bcbn07XG5UcmFuc2l0aW9uLlVOTU9VTlRFRCA9IFVOTU9VTlRFRDtcblRyYW5zaXRpb24uRVhJVEVEID0gRVhJVEVEO1xuVHJhbnNpdGlvbi5FTlRFUklORyA9IEVOVEVSSU5HO1xuVHJhbnNpdGlvbi5FTlRFUkVEID0gRU5URVJFRDtcblRyYW5zaXRpb24uRVhJVElORyA9IEVYSVRJTkc7XG5leHBvcnQgZGVmYXVsdCBUcmFuc2l0aW9uOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2VcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyYW5zaXRpb25Hcm91cENvbnRleHQgZnJvbSAnLi9UcmFuc2l0aW9uR3JvdXBDb250ZXh0JztcbmltcG9ydCB7IGdldENoaWxkTWFwcGluZywgZ2V0SW5pdGlhbENoaWxkTWFwcGluZywgZ2V0TmV4dENoaWxkTWFwcGluZyB9IGZyb20gJy4vdXRpbHMvQ2hpbGRNYXBwaW5nJztcblxudmFyIHZhbHVlcyA9IE9iamVjdC52YWx1ZXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gb2JqW2tdO1xuICB9KTtcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNvbXBvbmVudDogJ2RpdicsXG4gIGNoaWxkRmFjdG9yeTogZnVuY3Rpb24gY2hpbGRGYWN0b3J5KGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9XG59O1xuLyoqXG4gKiBUaGUgYDxUcmFuc2l0aW9uR3JvdXA+YCBjb21wb25lbnQgbWFuYWdlcyBhIHNldCBvZiB0cmFuc2l0aW9uIGNvbXBvbmVudHNcbiAqIChgPFRyYW5zaXRpb24+YCBhbmQgYDxDU1NUcmFuc2l0aW9uPmApIGluIGEgbGlzdC4gTGlrZSB3aXRoIHRoZSB0cmFuc2l0aW9uXG4gKiBjb21wb25lbnRzLCBgPFRyYW5zaXRpb25Hcm91cD5gIGlzIGEgc3RhdGUgbWFjaGluZSBmb3IgbWFuYWdpbmcgdGhlIG1vdW50aW5nXG4gKiBhbmQgdW5tb3VudGluZyBvZiBjb21wb25lbnRzIG92ZXIgdGltZS5cbiAqXG4gKiBDb25zaWRlciB0aGUgZXhhbXBsZSBiZWxvdy4gQXMgaXRlbXMgYXJlIHJlbW92ZWQgb3IgYWRkZWQgdG8gdGhlIFRvZG9MaXN0IHRoZVxuICogYGluYCBwcm9wIGlzIHRvZ2dsZWQgYXV0b21hdGljYWxseSBieSB0aGUgYDxUcmFuc2l0aW9uR3JvdXA+YC5cbiAqXG4gKiBOb3RlIHRoYXQgYDxUcmFuc2l0aW9uR3JvdXA+YCAgZG9lcyBub3QgZGVmaW5lIGFueSBhbmltYXRpb24gYmVoYXZpb3IhXG4gKiBFeGFjdGx5IF9ob3dfIGEgbGlzdCBpdGVtIGFuaW1hdGVzIGlzIHVwIHRvIHRoZSBpbmRpdmlkdWFsIHRyYW5zaXRpb25cbiAqIGNvbXBvbmVudC4gVGhpcyBtZWFucyB5b3UgY2FuIG1peCBhbmQgbWF0Y2ggYW5pbWF0aW9ucyBhY3Jvc3MgZGlmZmVyZW50IGxpc3RcbiAqIGl0ZW1zLlxuICovXG5cbnZhciBUcmFuc2l0aW9uR3JvdXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoVHJhbnNpdGlvbkdyb3VwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUcmFuc2l0aW9uR3JvdXAocHJvcHMsIGNvbnRleHQpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkgfHwgdGhpcztcblxuICAgIHZhciBoYW5kbGVFeGl0ZWQgPSBfdGhpcy5oYW5kbGVFeGl0ZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7IC8vIEluaXRpYWwgY2hpbGRyZW4gc2hvdWxkIGFsbCBiZSBlbnRlcmluZywgZGVwZW5kZW50IG9uIGFwcGVhclxuXG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbnRleHRWYWx1ZToge1xuICAgICAgICBpc01vdW50aW5nOiB0cnVlXG4gICAgICB9LFxuICAgICAgaGFuZGxlRXhpdGVkOiBoYW5kbGVFeGl0ZWQsXG4gICAgICBmaXJzdFJlbmRlcjogdHJ1ZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFRyYW5zaXRpb25Hcm91cC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvbnRleHRWYWx1ZToge1xuICAgICAgICBpc01vdW50aW5nOiBmYWxzZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuICB9O1xuXG4gIFRyYW5zaXRpb25Hcm91cC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBfcmVmKSB7XG4gICAgdmFyIHByZXZDaGlsZE1hcHBpbmcgPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgICBoYW5kbGVFeGl0ZWQgPSBfcmVmLmhhbmRsZUV4aXRlZCxcbiAgICAgICAgZmlyc3RSZW5kZXIgPSBfcmVmLmZpcnN0UmVuZGVyO1xuICAgIHJldHVybiB7XG4gICAgICBjaGlsZHJlbjogZmlyc3RSZW5kZXIgPyBnZXRJbml0aWFsQ2hpbGRNYXBwaW5nKG5leHRQcm9wcywgaGFuZGxlRXhpdGVkKSA6IGdldE5leHRDaGlsZE1hcHBpbmcobmV4dFByb3BzLCBwcmV2Q2hpbGRNYXBwaW5nLCBoYW5kbGVFeGl0ZWQpLFxuICAgICAgZmlyc3RSZW5kZXI6IGZhbHNlXG4gICAgfTtcbiAgfSAvLyBub2RlIGlzIGB1bmRlZmluZWRgIHdoZW4gdXNlciBwcm92aWRlZCBgbm9kZVJlZmAgcHJvcFxuICA7XG5cbiAgX3Byb3RvLmhhbmRsZUV4aXRlZCA9IGZ1bmN0aW9uIGhhbmRsZUV4aXRlZChjaGlsZCwgbm9kZSkge1xuICAgIHZhciBjdXJyZW50Q2hpbGRNYXBwaW5nID0gZ2V0Q2hpbGRNYXBwaW5nKHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgIGlmIChjaGlsZC5rZXkgaW4gY3VycmVudENoaWxkTWFwcGluZykgcmV0dXJuO1xuXG4gICAgaWYgKGNoaWxkLnByb3BzLm9uRXhpdGVkKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbkV4aXRlZChub2RlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tb3VudGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBfZXh0ZW5kcyh7fSwgc3RhdGUuY2hpbGRyZW4pO1xuXG4gICAgICAgIGRlbGV0ZSBjaGlsZHJlbltjaGlsZC5rZXldO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgQ29tcG9uZW50ID0gX3RoaXMkcHJvcHMuY29tcG9uZW50LFxuICAgICAgICBjaGlsZEZhY3RvcnkgPSBfdGhpcyRwcm9wcy5jaGlsZEZhY3RvcnksXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIFtcImNvbXBvbmVudFwiLCBcImNoaWxkRmFjdG9yeVwiXSk7XG5cbiAgICB2YXIgY29udGV4dFZhbHVlID0gdGhpcy5zdGF0ZS5jb250ZXh0VmFsdWU7XG4gICAgdmFyIGNoaWxkcmVuID0gdmFsdWVzKHRoaXMuc3RhdGUuY2hpbGRyZW4pLm1hcChjaGlsZEZhY3RvcnkpO1xuICAgIGRlbGV0ZSBwcm9wcy5hcHBlYXI7XG4gICAgZGVsZXRlIHByb3BzLmVudGVyO1xuICAgIGRlbGV0ZSBwcm9wcy5leGl0O1xuXG4gICAgaWYgKENvbXBvbmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Hcm91cENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IGNvbnRleHRWYWx1ZVxuICAgICAgfSwgY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uR3JvdXBDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogY29udGV4dFZhbHVlXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBwcm9wcywgY2hpbGRyZW4pKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNpdGlvbkdyb3VwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uR3JvdXAucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogYDxUcmFuc2l0aW9uR3JvdXA+YCByZW5kZXJzIGEgYDxkaXY+YCBieSBkZWZhdWx0LiBZb3UgY2FuIGNoYW5nZSB0aGlzXG4gICAqIGJlaGF2aW9yIGJ5IHByb3ZpZGluZyBhIGBjb21wb25lbnRgIHByb3AuXG4gICAqIElmIHlvdSB1c2UgUmVhY3QgdjE2KyBhbmQgd291bGQgbGlrZSB0byBhdm9pZCBhIHdyYXBwaW5nIGA8ZGl2PmAgZWxlbWVudFxuICAgKiB5b3UgY2FuIHBhc3MgaW4gYGNvbXBvbmVudD17bnVsbH1gLiBUaGlzIGlzIHVzZWZ1bCBpZiB0aGUgd3JhcHBpbmcgZGl2XG4gICAqIGJvcmtzIHlvdXIgY3NzIHN0eWxlcy5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzLmFueSxcblxuICAvKipcbiAgICogQSBzZXQgb2YgYDxUcmFuc2l0aW9uPmAgY29tcG9uZW50cywgdGhhdCBhcmUgdG9nZ2xlZCBgaW5gIGFuZCBvdXQgYXMgdGhleVxuICAgKiBsZWF2ZS4gdGhlIGA8VHJhbnNpdGlvbkdyb3VwPmAgd2lsbCBpbmplY3Qgc3BlY2lmaWMgdHJhbnNpdGlvbiBwcm9wcywgc29cbiAgICogcmVtZW1iZXIgdG8gc3ByZWFkIHRoZW0gdGhyb3VnaCBpZiB5b3UgYXJlIHdyYXBwaW5nIHRoZSBgPFRyYW5zaXRpb24+YCBhc1xuICAgKiB3aXRoIG91ciBgPEZhZGU+YCBleGFtcGxlLlxuICAgKlxuICAgKiBXaGlsZSB0aGlzIGNvbXBvbmVudCBpcyBtZWFudCBmb3IgbXVsdGlwbGUgYFRyYW5zaXRpb25gIG9yIGBDU1NUcmFuc2l0aW9uYFxuICAgKiBjaGlsZHJlbiwgc29tZXRpbWVzIHlvdSBtYXkgd2FudCB0byBoYXZlIGEgc2luZ2xlIHRyYW5zaXRpb24gY2hpbGQgd2l0aFxuICAgKiBjb250ZW50IHRoYXQgeW91IHdhbnQgdG8gYmUgdHJhbnNpdGlvbmVkIG91dCBhbmQgaW4gd2hlbiB5b3UgY2hhbmdlIGl0XG4gICAqIChlLmcuIHJvdXRlcywgaW1hZ2VzIGV0Yy4pIEluIHRoYXQgY2FzZSB5b3UgY2FuIGNoYW5nZSB0aGUgYGtleWAgcHJvcCBvZlxuICAgKiB0aGUgdHJhbnNpdGlvbiBjaGlsZCBhcyB5b3UgY2hhbmdlIGl0cyBjb250ZW50LCB0aGlzIHdpbGwgY2F1c2VcbiAgICogYFRyYW5zaXRpb25Hcm91cGAgdG8gdHJhbnNpdGlvbiB0aGUgY2hpbGQgb3V0IGFuZCBiYWNrIGluLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIHByb3AgdGhhdCBlbmFibGVzIG9yIGRpc2FibGVzIGFwcGVhciBhbmltYXRpb25zXG4gICAqIGZvciBhbGwgY2hpbGRyZW4uIE5vdGUgdGhhdCBzcGVjaWZ5aW5nIHRoaXMgd2lsbCBvdmVycmlkZSBhbnkgZGVmYXVsdHMgc2V0XG4gICAqIG9uIGluZGl2aWR1YWwgY2hpbGRyZW4gVHJhbnNpdGlvbnMuXG4gICAqL1xuICBhcHBlYXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBBIGNvbnZlbmllbmNlIHByb3AgdGhhdCBlbmFibGVzIG9yIGRpc2FibGVzIGVudGVyIGFuaW1hdGlvbnNcbiAgICogZm9yIGFsbCBjaGlsZHJlbi4gTm90ZSB0aGF0IHNwZWNpZnlpbmcgdGhpcyB3aWxsIG92ZXJyaWRlIGFueSBkZWZhdWx0cyBzZXRcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICovXG4gIGVudGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQSBjb252ZW5pZW5jZSBwcm9wIHRoYXQgZW5hYmxlcyBvciBkaXNhYmxlcyBleGl0IGFuaW1hdGlvbnNcbiAgICogZm9yIGFsbCBjaGlsZHJlbi4gTm90ZSB0aGF0IHNwZWNpZnlpbmcgdGhpcyB3aWxsIG92ZXJyaWRlIGFueSBkZWZhdWx0cyBzZXRcbiAgICogb24gaW5kaXZpZHVhbCBjaGlsZHJlbiBUcmFuc2l0aW9ucy5cbiAgICovXG4gIGV4aXQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBZb3UgbWF5IG5lZWQgdG8gYXBwbHkgcmVhY3RpdmUgdXBkYXRlcyB0byBhIGNoaWxkIGFzIGl0IGlzIGV4aXRpbmcuXG4gICAqIFRoaXMgaXMgZ2VuZXJhbGx5IGRvbmUgYnkgdXNpbmcgYGNsb25lRWxlbWVudGAgaG93ZXZlciBpbiB0aGUgY2FzZSBvZiBhbiBleGl0aW5nXG4gICAqIGNoaWxkIHRoZSBlbGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gcmVtb3ZlZCBhbmQgbm90IGFjY2Vzc2libGUgdG8gdGhlIGNvbnN1bWVyLlxuICAgKlxuICAgKiBJZiB5b3UgZG8gbmVlZCB0byB1cGRhdGUgYSBjaGlsZCBhcyBpdCBsZWF2ZXMgeW91IGNhbiBwcm92aWRlIGEgYGNoaWxkRmFjdG9yeWBcbiAgICogdG8gd3JhcCBldmVyeSBjaGlsZCwgZXZlbiB0aGUgb25lcyB0aGF0IGFyZSBsZWF2aW5nLlxuICAgKlxuICAgKiBAdHlwZSBGdW5jdGlvbihjaGlsZDogUmVhY3RFbGVtZW50KSAtPiBSZWFjdEVsZW1lbnRcbiAgICovXG4gIGNoaWxkRmFjdG9yeTogUHJvcFR5cGVzLmZ1bmNcbn0gOiB7fTtcblRyYW5zaXRpb25Hcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5leHBvcnQgZGVmYXVsdCBUcmFuc2l0aW9uR3JvdXA7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7IiwiZXhwb3J0IGRlZmF1bHQge1xuICBkaXNhYmxlZDogZmFsc2Vcbn07IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDU1NUcmFuc2l0aW9uIH0gZnJvbSAnLi9DU1NUcmFuc2l0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVwbGFjZVRyYW5zaXRpb24gfSBmcm9tICcuL1JlcGxhY2VUcmFuc2l0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3dpdGNoVHJhbnNpdGlvbiB9IGZyb20gJy4vU3dpdGNoVHJhbnNpdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRyYW5zaXRpb25Hcm91cCB9IGZyb20gJy4vVHJhbnNpdGlvbkdyb3VwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHJhbnNpdGlvbiB9IGZyb20gJy4vVHJhbnNpdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJzsiLCJpbXBvcnQgeyBDaGlsZHJlbiwgY2xvbmVFbGVtZW50LCBpc1ZhbGlkRWxlbWVudCB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogR2l2ZW4gYHRoaXMucHJvcHMuY2hpbGRyZW5gLCByZXR1cm4gYW4gb2JqZWN0IG1hcHBpbmcga2V5IHRvIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Kn0gY2hpbGRyZW4gYHRoaXMucHJvcHMuY2hpbGRyZW5gXG4gKiBAcmV0dXJuIHtvYmplY3R9IE1hcHBpbmcgb2Yga2V5IHRvIGNoaWxkXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENoaWxkTWFwcGluZyhjaGlsZHJlbiwgbWFwRm4pIHtcbiAgdmFyIG1hcHBlciA9IGZ1bmN0aW9uIG1hcHBlcihjaGlsZCkge1xuICAgIHJldHVybiBtYXBGbiAmJiBpc1ZhbGlkRWxlbWVudChjaGlsZCkgPyBtYXBGbihjaGlsZCkgOiBjaGlsZDtcbiAgfTtcblxuICB2YXIgcmVzdWx0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaWYgKGNoaWxkcmVuKSBDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGM7XG4gIH0pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgLy8gcnVuIHRoZSBtYXAgZnVuY3Rpb24gaGVyZSBpbnN0ZWFkIHNvIHRoYXQgdGhlIGtleSBpcyB0aGUgY29tcHV0ZWQgb25lXG4gICAgcmVzdWx0W2NoaWxkLmtleV0gPSBtYXBwZXIoY2hpbGQpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogV2hlbiB5b3UncmUgYWRkaW5nIG9yIHJlbW92aW5nIGNoaWxkcmVuIHNvbWUgbWF5IGJlIGFkZGVkIG9yIHJlbW92ZWQgaW4gdGhlXG4gKiBzYW1lIHJlbmRlciBwYXNzLiBXZSB3YW50IHRvIHNob3cgKmJvdGgqIHNpbmNlIHdlIHdhbnQgdG8gc2ltdWx0YW5lb3VzbHlcbiAqIGFuaW1hdGUgZWxlbWVudHMgaW4gYW5kIG91dC4gVGhpcyBmdW5jdGlvbiB0YWtlcyBhIHByZXZpb3VzIHNldCBvZiBrZXlzXG4gKiBhbmQgYSBuZXcgc2V0IG9mIGtleXMgYW5kIG1lcmdlcyB0aGVtIHdpdGggaXRzIGJlc3QgZ3Vlc3Mgb2YgdGhlIGNvcnJlY3RcbiAqIG9yZGVyaW5nLiBJbiB0aGUgZnV0dXJlIHdlIG1heSBleHBvc2Ugc29tZSBvZiB0aGUgdXRpbGl0aWVzIGluXG4gKiBSZWFjdE11bHRpQ2hpbGQgdG8gbWFrZSB0aGlzIGVhc3ksIGJ1dCBmb3Igbm93IFJlYWN0IGl0c2VsZiBkb2VzIG5vdFxuICogZGlyZWN0bHkgaGF2ZSB0aGlzIGNvbmNlcHQgb2YgdGhlIHVuaW9uIG9mIHByZXZDaGlsZHJlbiBhbmQgbmV4dENoaWxkcmVuXG4gKiBzbyB3ZSBpbXBsZW1lbnQgaXQgaGVyZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gcHJldiBwcmV2IGNoaWxkcmVuIGFzIHJldHVybmVkIGZyb21cbiAqIGBSZWFjdFRyYW5zaXRpb25DaGlsZE1hcHBpbmcuZ2V0Q2hpbGRNYXBwaW5nKClgLlxuICogQHBhcmFtIHtvYmplY3R9IG5leHQgbmV4dCBjaGlsZHJlbiBhcyByZXR1cm5lZCBmcm9tXG4gKiBgUmVhY3RUcmFuc2l0aW9uQ2hpbGRNYXBwaW5nLmdldENoaWxkTWFwcGluZygpYC5cbiAqIEByZXR1cm4ge29iamVjdH0gYSBrZXkgc2V0IHRoYXQgY29udGFpbnMgYWxsIGtleXMgaW4gYHByZXZgIGFuZCBhbGwga2V5c1xuICogaW4gYG5leHRgIGluIGEgcmVhc29uYWJsZSBvcmRlci5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDaGlsZE1hcHBpbmdzKHByZXYsIG5leHQpIHtcbiAgcHJldiA9IHByZXYgfHwge307XG4gIG5leHQgPSBuZXh0IHx8IHt9O1xuXG4gIGZ1bmN0aW9uIGdldFZhbHVlRm9yS2V5KGtleSkge1xuICAgIHJldHVybiBrZXkgaW4gbmV4dCA/IG5leHRba2V5XSA6IHByZXZba2V5XTtcbiAgfSAvLyBGb3IgZWFjaCBrZXkgb2YgYG5leHRgLCB0aGUgbGlzdCBvZiBrZXlzIHRvIGluc2VydCBiZWZvcmUgdGhhdCBrZXkgaW5cbiAgLy8gdGhlIGNvbWJpbmVkIGxpc3RcblxuXG4gIHZhciBuZXh0S2V5c1BlbmRpbmcgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgcGVuZGluZ0tleXMgPSBbXTtcblxuICBmb3IgKHZhciBwcmV2S2V5IGluIHByZXYpIHtcbiAgICBpZiAocHJldktleSBpbiBuZXh0KSB7XG4gICAgICBpZiAocGVuZGluZ0tleXMubGVuZ3RoKSB7XG4gICAgICAgIG5leHRLZXlzUGVuZGluZ1twcmV2S2V5XSA9IHBlbmRpbmdLZXlzO1xuICAgICAgICBwZW5kaW5nS2V5cyA9IFtdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwZW5kaW5nS2V5cy5wdXNoKHByZXZLZXkpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpO1xuICB2YXIgY2hpbGRNYXBwaW5nID0ge307XG5cbiAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0KSB7XG4gICAgaWYgKG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IG5leHRLZXlzUGVuZGluZ1tuZXh0S2V5XS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGVuZGluZ05leHRLZXkgPSBuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV07XG4gICAgICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5c1BlbmRpbmdbbmV4dEtleV1baV1dID0gZ2V0VmFsdWVGb3JLZXkocGVuZGluZ05leHRLZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoaWxkTWFwcGluZ1tuZXh0S2V5XSA9IGdldFZhbHVlRm9yS2V5KG5leHRLZXkpO1xuICB9IC8vIEZpbmFsbHksIGFkZCB0aGUga2V5cyB3aGljaCBkaWRuJ3QgYXBwZWFyIGJlZm9yZSBhbnkga2V5IGluIGBuZXh0YFxuXG5cbiAgZm9yIChpID0gMDsgaSA8IHBlbmRpbmdLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hpbGRNYXBwaW5nW3BlbmRpbmdLZXlzW2ldXSA9IGdldFZhbHVlRm9yS2V5KHBlbmRpbmdLZXlzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZE1hcHBpbmc7XG59XG5cbmZ1bmN0aW9uIGdldFByb3AoY2hpbGQsIHByb3AsIHByb3BzKSB7XG4gIHJldHVybiBwcm9wc1twcm9wXSAhPSBudWxsID8gcHJvcHNbcHJvcF0gOiBjaGlsZC5wcm9wc1twcm9wXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRpYWxDaGlsZE1hcHBpbmcocHJvcHMsIG9uRXhpdGVkKSB7XG4gIHJldHVybiBnZXRDaGlsZE1hcHBpbmcocHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgIG9uRXhpdGVkOiBvbkV4aXRlZC5iaW5kKG51bGwsIGNoaWxkKSxcbiAgICAgIGluOiB0cnVlLFxuICAgICAgYXBwZWFyOiBnZXRQcm9wKGNoaWxkLCAnYXBwZWFyJywgcHJvcHMpLFxuICAgICAgZW50ZXI6IGdldFByb3AoY2hpbGQsICdlbnRlcicsIHByb3BzKSxcbiAgICAgIGV4aXQ6IGdldFByb3AoY2hpbGQsICdleGl0JywgcHJvcHMpXG4gICAgfSk7XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRDaGlsZE1hcHBpbmcobmV4dFByb3BzLCBwcmV2Q2hpbGRNYXBwaW5nLCBvbkV4aXRlZCkge1xuICB2YXIgbmV4dENoaWxkTWFwcGluZyA9IGdldENoaWxkTWFwcGluZyhuZXh0UHJvcHMuY2hpbGRyZW4pO1xuICB2YXIgY2hpbGRyZW4gPSBtZXJnZUNoaWxkTWFwcGluZ3MocHJldkNoaWxkTWFwcGluZywgbmV4dENoaWxkTWFwcGluZyk7XG4gIE9iamVjdC5rZXlzKGNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltrZXldO1xuICAgIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSByZXR1cm47XG4gICAgdmFyIGhhc1ByZXYgPSAoa2V5IGluIHByZXZDaGlsZE1hcHBpbmcpO1xuICAgIHZhciBoYXNOZXh0ID0gKGtleSBpbiBuZXh0Q2hpbGRNYXBwaW5nKTtcbiAgICB2YXIgcHJldkNoaWxkID0gcHJldkNoaWxkTWFwcGluZ1trZXldO1xuICAgIHZhciBpc0xlYXZpbmcgPSBpc1ZhbGlkRWxlbWVudChwcmV2Q2hpbGQpICYmICFwcmV2Q2hpbGQucHJvcHMuaW47IC8vIGl0ZW0gaXMgbmV3IChlbnRlcmluZylcblxuICAgIGlmIChoYXNOZXh0ICYmICghaGFzUHJldiB8fCBpc0xlYXZpbmcpKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZW50ZXJpbmcnLCBrZXkpXG4gICAgICBjaGlsZHJlbltrZXldID0gY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIG9uRXhpdGVkOiBvbkV4aXRlZC5iaW5kKG51bGwsIGNoaWxkKSxcbiAgICAgICAgaW46IHRydWUsXG4gICAgICAgIGV4aXQ6IGdldFByb3AoY2hpbGQsICdleGl0JywgbmV4dFByb3BzKSxcbiAgICAgICAgZW50ZXI6IGdldFByb3AoY2hpbGQsICdlbnRlcicsIG5leHRQcm9wcylcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIWhhc05leHQgJiYgaGFzUHJldiAmJiAhaXNMZWF2aW5nKSB7XG4gICAgICAvLyBpdGVtIGlzIG9sZCAoZXhpdGluZylcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdsZWF2aW5nJywga2V5KVxuICAgICAgY2hpbGRyZW5ba2V5XSA9IGNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICBpbjogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaGFzTmV4dCAmJiBoYXNQcmV2ICYmIGlzVmFsaWRFbGVtZW50KHByZXZDaGlsZCkpIHtcbiAgICAgIC8vIGl0ZW0gaGFzbid0IGNoYW5nZWQgdHJhbnNpdGlvbiBzdGF0ZXNcbiAgICAgIC8vIGNvcHkgb3ZlciB0aGUgbGFzdCB0cmFuc2l0aW9uIHByb3BzO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3VuY2hhbmdlZCcsIGtleSlcbiAgICAgIGNoaWxkcmVuW2tleV0gPSBjbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgb25FeGl0ZWQ6IG9uRXhpdGVkLmJpbmQobnVsbCwgY2hpbGQpLFxuICAgICAgICBpbjogcHJldkNoaWxkLnByb3BzLmluLFxuICAgICAgICBleGl0OiBnZXRQcm9wKGNoaWxkLCAnZXhpdCcsIG5leHRQcm9wcyksXG4gICAgICAgIGVudGVyOiBnZXRQcm9wKGNoaWxkLCAnZW50ZXInLCBuZXh0UHJvcHMpXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY2hpbGRyZW47XG59IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmV4cG9ydCB2YXIgdGltZW91dHNTaGFwZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc2hhcGUoe1xuICBlbnRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgZXhpdDogUHJvcFR5cGVzLm51bWJlcixcbiAgYXBwZWFyOiBQcm9wVHlwZXMubnVtYmVyXG59KS5pc1JlcXVpcmVkXSkgOiBudWxsO1xuZXhwb3J0IHZhciBjbGFzc05hbWVzU2hhcGUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLnNoYXBlKHtcbiAgZW50ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV4aXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFjdGl2ZTogUHJvcFR5cGVzLnN0cmluZ1xufSksIFByb3BUeXBlcy5zaGFwZSh7XG4gIGVudGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlbnRlckRvbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVudGVyQWN0aXZlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBleGl0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBleGl0RG9uZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZXhpdEFjdGl2ZTogUHJvcFR5cGVzLnN0cmluZ1xufSldKSA6IG51bGw7IiwiaW1wb3J0IEFkbWluSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L0FkbWluSGVhZGVyJztcclxuaW1wb3J0IEFkbWluIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYXV0aC9BZG1pbic7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGxpc3RlT25lUmVzZXJ2YXRpb24gfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL3Jlc2VydmF0aW9uQWN0aW9ucyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBUYWJzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYnMnO1xyXG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYic7XHJcbmltcG9ydCBQaG9uZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Bob25lJztcclxuaW1wb3J0IEZhdm9yaXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGUnO1xyXG5pbXBvcnQgUGVyc29uUGluSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGVyc29uUGluJztcclxuaW1wb3J0IEhlbHBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9IZWxwJztcclxuaW1wb3J0IFNob3BwaW5nQmFza2V0IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TaG9wcGluZ0Jhc2tldCc7XHJcbmltcG9ydCBUaHVtYkRvd24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1RodW1iRG93bic7XHJcbmltcG9ydCBUaHVtYlVwIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UaHVtYlVwJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcclxuXHJcbmNvbnN0IFJlc2VydmF0aW9uSWQgPSAoe1xyXG5cdHJlc2VydmF0aW9uLFxyXG5cdHJvdXRlcixcclxuXHRjaGlsZHJlbixcclxuXHR2YWx1ZSxcclxuXHRpbmRleCxcclxuXHQuLi5vdGhlclxyXG59KSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxBZG1pbkhlYWRlcj5cclxuXHRcdFx0XHQ8QWRtaW4+XHJcblx0XHRcdFx0XHR7LyogRmlsIGQnYXJpYW5lICovfVxyXG5cdFx0XHRcdFx0PGgyIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PlxyXG5cdFx0XHRcdFx0XHRDb25zdWx0YXRpb24gZGUgbGEgcsOpc2VydmF0aW9uICNcclxuXHRcdFx0XHRcdDwvaDI+XHJcblxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRyb2xlPSd0YWJwYW5lbCdcclxuXHRcdFx0XHRcdFx0aGlkZGVuPXt2YWx1ZSAhPT0gaW5kZXh9XHJcblx0XHRcdFx0XHRcdGlkPXtgc2Nyb2xsYWJsZS1wcmV2ZW50LXRhYnBhbmVsLSR7aW5kZXh9YH1cclxuXHRcdFx0XHRcdFx0YXJpYS1sYWJlbGxlZGJ5PXtgc2Nyb2xsYWJsZS1wcmV2ZW50LXRhYi0ke2luZGV4fWB9XHJcblx0XHRcdFx0XHRcdHsuLi5vdGhlcn0+XHJcblx0XHRcdFx0XHRcdHt2YWx1ZSA9PT0gaW5kZXggJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDxCb3ggcD17M30+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeT57Y2hpbGRyZW59PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0ey8qIFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHtzdWNjZXNzICYmIChcclxuXHRcdFx0XHRcdFx0PFNuYWNrYmFyXHJcblx0XHRcdFx0XHRcdFx0b3Blbj17b3Blbn1cclxuXHRcdFx0XHRcdFx0XHRhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuXHRcdFx0XHRcdFx0XHQ8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9IHNldmVyaXR5PSdzdWNjZXNzJz5cclxuXHRcdFx0XHRcdFx0XHRcdHt0ZXh0fVxyXG5cdFx0XHRcdFx0XHRcdDwvQWxlcnQ+XHJcblx0XHRcdFx0XHRcdDwvU25hY2tiYXI+XHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0e2xvYWRpbmcgJiYgPENpcmN1bGFyUHJvZ3Jlc3MgLz59XHJcblx0XHRcdFx0XHR7ZXJyb3IgJiYgKFxyXG5cdFx0XHRcdFx0XHQ8U25hY2tiYXJcclxuXHRcdFx0XHRcdFx0XHRvcGVuPXtvcGVufVxyXG5cdFx0XHRcdFx0XHRcdGF1dG9IaWRlRHVyYXRpb249ezYwMDB9XHJcblx0XHRcdFx0XHRcdFx0b25DbG9zZT17aGFuZGxlQ2xvc2V9PlxyXG5cdFx0XHRcdFx0XHRcdDxBbGVydCBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gc2V2ZXJpdHk9J2Vycm9yJz5cclxuXHRcdFx0XHRcdFx0XHRcdHtlcnJvcn1cclxuXHRcdFx0XHRcdFx0XHQ8L0FsZXJ0PlxyXG5cdFx0XHRcdFx0XHQ8L1NuYWNrYmFyPlxyXG5cdFx0XHRcdFx0KX0gKi99XHJcblx0XHRcdFx0PC9BZG1pbj5cclxuXHRcdFx0PC9BZG1pbkhlYWRlcj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHRjb25zdCB0b2tlbiA9IGNvbnRleHQucmVxLmNvb2tpZXMudG9rZW47XHJcblx0Y29uc3QgcmVzMSA9IGF3YWl0IGxpc3RlT25lUmVzZXJ2YXRpb24oY29udGV4dC5wYXJhbXMuaWQsIHRva2VuKTtcclxuXHRjb25zdCByZXNlcnZhdGlvbiA9IGF3YWl0IHJlczE7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRyZXNlcnZhdGlvbixcclxuXHRcdH0sXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihSZXNlcnZhdGlvbklkKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==