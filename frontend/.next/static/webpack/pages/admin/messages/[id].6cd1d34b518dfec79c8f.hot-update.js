webpackHotUpdate_N_E("pages/admin/messages/[id]",{

/***/ "./node_modules/@material-ui/lab/esm/Alert/Alert.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/Alert/Alert.js ***!
  \**********************************************************/
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _internal_svg_icons_SuccessOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../internal/svg-icons/SuccessOutlined */ "./node_modules/@material-ui/lab/esm/internal/svg-icons/SuccessOutlined.js");
/* harmony import */ var _internal_svg_icons_ReportProblemOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../internal/svg-icons/ReportProblemOutlined */ "./node_modules/@material-ui/lab/esm/internal/svg-icons/ReportProblemOutlined.js");
/* harmony import */ var _internal_svg_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../internal/svg-icons/ErrorOutline */ "./node_modules/@material-ui/lab/esm/internal/svg-icons/ErrorOutline.js");
/* harmony import */ var _internal_svg_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../internal/svg-icons/InfoOutlined */ "./node_modules/@material-ui/lab/esm/internal/svg-icons/InfoOutlined.js");
/* harmony import */ var _internal_svg_icons_Close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../internal/svg-icons/Close */ "./node_modules/@material-ui/lab/esm/internal/svg-icons/Close.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");














var styles = function styles(theme) {
  var getColor = theme.palette.type === 'light' ? _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["darken"] : _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["lighten"];
  var getBackgroundColor = theme.palette.type === 'light' ? _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["lighten"] : _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["darken"];
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.typography.body2, {
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'transparent',
      display: 'flex',
      padding: '6px 16px'
    }),

    /* Styles applied to the root element if `variant="standard"` and `color="success"`. */
    standardSuccess: {
      color: getColor(theme.palette.success.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.success.main, 0.9),
      '& $icon': {
        color: theme.palette.success.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="info"`. */
    standardInfo: {
      color: getColor(theme.palette.info.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.info.main, 0.9),
      '& $icon': {
        color: theme.palette.info.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="warning"`. */
    standardWarning: {
      color: getColor(theme.palette.warning.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.warning.main, 0.9),
      '& $icon': {
        color: theme.palette.warning.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="error"`. */
    standardError: {
      color: getColor(theme.palette.error.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.error.main, 0.9),
      '& $icon': {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="success"`. */
    outlinedSuccess: {
      color: getColor(theme.palette.success.main, 0.6),
      border: "1px solid ".concat(theme.palette.success.main),
      '& $icon': {
        color: theme.palette.success.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="info"`. */
    outlinedInfo: {
      color: getColor(theme.palette.info.main, 0.6),
      border: "1px solid ".concat(theme.palette.info.main),
      '& $icon': {
        color: theme.palette.info.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="warning"`. */
    outlinedWarning: {
      color: getColor(theme.palette.warning.main, 0.6),
      border: "1px solid ".concat(theme.palette.warning.main),
      '& $icon': {
        color: theme.palette.warning.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="error"`. */
    outlinedError: {
      color: getColor(theme.palette.error.main, 0.6),
      border: "1px solid ".concat(theme.palette.error.main),
      '& $icon': {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the root element if `variant="filled"` and `color="success"`. */
    filledSuccess: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.success.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="info"`. */
    filledInfo: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.info.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="warning"`. */
    filledWarning: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.warning.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="error"`. */
    filledError: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.error.main
    },

    /* Styles applied to the icon wrapper element. */
    icon: {
      marginRight: 12,
      padding: '7px 0',
      display: 'flex',
      fontSize: 22,
      opacity: 0.9
    },

    /* Styles applied to the message wrapper element. */
    message: {
      padding: '8px 0'
    },

    /* Styles applied to the action wrapper element if `action` is provided. */
    action: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: 16,
      marginRight: -8
    }
  };
};
var defaultIconMapping = {
  success: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_svg_icons_SuccessOutlined__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fontSize: "inherit"
  }),
  warning: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_svg_icons_ReportProblemOutlined__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fontSize: "inherit"
  }),
  error: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_svg_icons_ErrorOutline__WEBPACK_IMPORTED_MODULE_9__["default"], {
    fontSize: "inherit"
  }),
  info: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_svg_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_10__["default"], {
    fontSize: "inherit"
  })
};

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_svg_icons_Close__WEBPACK_IMPORTED_MODULE_11__["default"], {
  fontSize: "small"
});

var Alert = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Alert(props, ref) {
  var action = props.action,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$closeText = props.closeText,
      closeText = _props$closeText === void 0 ? 'Close' : _props$closeText,
      color = props.color,
      icon = props.icon,
      _props$iconMapping = props.iconMapping,
      iconMapping = _props$iconMapping === void 0 ? defaultIconMapping : _props$iconMapping,
      onClose = props.onClose,
      _props$role = props.role,
      role = _props$role === void 0 ? 'alert' : _props$role,
      _props$severity = props.severity,
      severity = _props$severity === void 0 ? 'success' : _props$severity,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["action", "children", "classes", "className", "closeText", "color", "icon", "iconMapping", "onClose", "role", "severity", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    role: role,
    square: true,
    elevation: 0,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes["".concat(variant).concat(Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_13__["capitalize"])(color || severity))], className),
    ref: ref
  }, other), icon !== false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: classes.icon
  }, icon || iconMapping[severity] || defaultIconMapping[severity]) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: classes.message
  }, children), action != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: classes.action
  }, action) : null, action == null && onClose ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: classes.action
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    size: "small",
    "aria-label": closeText,
    title: closeText,
    color: "inherit",
    onClick: onClose
  }, _ref)) : null);
});
 true ? Alert.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

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
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  closeText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The main color for the alert. Unless provided, the value is taken from the `severity` prop.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['error', 'info', 'success', 'warning']),

  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * The component maps the `severity` prop to a range of different icons,
   * for instance success to `<SuccessOutlined>`.
   * If you wish to change this mapping, you can provide your own.
   * Alternatively, you can use the `icon` prop to override the icon displayed.
   */
  iconMapping: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
    info: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
    success: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
    warning: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
  }),

  /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   *
   * @param {object} event The event source of the callback.
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The ARIA role attribute of the element.
   */
  role: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The severity of the alert. This defines the color and icon used.
   */
  severity: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['error', 'info', 'success', 'warning']),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['filled', 'outlined', 'standard'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles, {
  name: 'MuiAlert'
})(Alert));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/Alert/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/Alert/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert */ "./node_modules/@material-ui/lab/esm/Alert/Alert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Alert__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/Close.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/internal/svg-icons/Close.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close'));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/ErrorOutline.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/internal/svg-icons/ErrorOutline.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), 'ErrorOutline'));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/InfoOutlined.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/internal/svg-icons/InfoOutlined.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), 'InfoOutlined'));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/ReportProblemOutlined.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/internal/svg-icons/ReportProblemOutlined.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), 'ReportProblemOutlined'));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/SuccessOutlined.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/internal/svg-icons/SuccessOutlined.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), 'SuccessOutlined'));

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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/layout/AdminHeader */ "./components/layout/AdminHeader.js");
/* harmony import */ var _components_auth_Admin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/auth/Admin */ "./components/auth/Admin.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _actions_messageActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../actions/messageActions */ "./actions/messageActions.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/TextareaAutosize */ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js");
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_Backspace__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Backspace */ "./node_modules/@material-ui/icons/Backspace.js");
/* harmony import */ var _material_ui_icons_Backspace__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Backspace__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");





var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\pages\\admin\\messages\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
























function Alert(props) {
  return __jsx(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_25__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({
    elevation: 6,
    variant: "filled"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }));
}

_c = Alert;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (darkTheme) {
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
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_18__["getCookie"])('token');

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_22__["useForm"])(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    open: false,
    loading: false,
    success: '',
    error: '',
    text: ''
  }),
      values = _useState[0],
      setValues = _useState[1];

  var success = values.success,
      loading = values.loading,
      error = values.error,
      text = values.text; //Envoyer la réponse
  //UseEffect mettant vu à true au chargement de la page
  //Afficher la réponse en dessous du message

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    Object(_actions_messageActions__WEBPACK_IMPORTED_MODULE_8__["setVu"])(router.query.id, token);
  }, []);

  var handleClose = function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setValues(_objectSpread(_objectSpread({}, values), {}, {
      open: false
    }));
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setValues(_objectSpread(_objectSpread({}, values), {}, {
                loading: true
              }));
              console.log('data vaut =>', data);
              Object(_actions_messageActions__WEBPACK_IMPORTED_MODULE_8__["addResponse"])(data, router.query.id, token).then(function (result) {
                console.log('result vaut =>', result);

                if (result.error) {
                  console.log('une grosse erreur');
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    error: result.error
                  }));
                } else {
                  setValues(_objectSpread(_objectSpread({}, values), {}, {
                    success: true,
                    loading: false,
                    open: true,
                    message: result.text
                  }));
                  setTimeout(function () {
                    Router.push('/admin/messages');
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_components_layout_AdminHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 4
    }
  }, __jsx(_components_auth_Admin__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }
  }, __jsx("h2", {
    style: {
      color: 'white'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 6
    }
  }, "Consultation du message de ", message.nom), __jsx(next_link__WEBPACK_IMPORTED_MODULE_21___default.a, {
    href: "/admin/messages",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 6
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Backspace__WEBPACK_IMPORTED_MODULE_20___default.a, {
    fontSize: "large",
    style: {
      "float": 'right',
      position: 'relative'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 8
    }
  }))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 6
    }
  }), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "h5",
    component: "h5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 8
    }
  }, "Envoy\xE9 par ", message.nom), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: classes.title,
    color: "textSecondary",
    gutterBottom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 8
    }
  }, "le", ' ', dayjs__WEBPACK_IMPORTED_MODULE_7___default()(message.createdAt).format('DD/MM/YYYY à HH:mm')), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: classes.pos,
    color: "textSecondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 8
    }
  }, "Coordonn\xE9es :", ' ', __jsx("a", {
    href: "mailto:".concat(message.mail),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, message.mail), ' ', "/ 0", "".concat(message.tel.toString().substring(0, 1), " ").concat(message.tel.toString().substring(1, 3), " ").concat(message.tel.toString().substring(3, 5), " ").concat(message.tel.toString().substring(5, 7), " ").concat(message.tel.toString().substring(7, 9))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "body2",
    component: "p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 8
    }
  }, "Message :", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 9
    }
  }), message.msg)), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__["default"], {
    component: "form",
    className: classes.rootPaper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 8
    }
  }, __jsx("form", {
    className: classes.rootPaper,
    onSubmit: handleSubmit(onSubmit),
    autoComplete: "off",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_17__["default"], {
    style: {
      width: '100%'
    },
    "aria-label": "reponse",
    name: "reponse",
    placeholder: "R\xE9ponse",
    rowsMin: 6,
    inputRef: register,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 10
    }
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: classes.divider,
    orientation: "vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 10
    }
  }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
    type: "submit",
    color: "primary",
    className: classes.iconButton,
    "aria-label": "Envoyer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 10
    }
  }, __jsx(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 11
    }
  })))))), success && __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_24__["default"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 7
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 8
    }
  }, text)), loading && __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_23__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 18
    }
  }), error && __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_24__["default"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 7
    }
  }, __jsx(Alert, {
    onClose: handleClose,
    severity: "error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 8
    }
  }, error)))));
};

_s(MessageId, "NqdtYeacxPCVmdQH3M9SdhVC1YQ=", false, function () {
  return [useStyles, react_hook_form__WEBPACK_IMPORTED_MODULE_22__["useForm"]];
});

_c2 = MessageId;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = Object(next_router__WEBPACK_IMPORTED_MODULE_19__["withRouter"])(MessageId));

var _c, _c2, _c3;

$RefreshReg$(_c, "Alert");
$RefreshReg$(_c2, "MessageId");
$RefreshReg$(_c3, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL0FsZXJ0L0FsZXJ0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vQWxlcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9pbnRlcm5hbC9zdmctaWNvbnMvQ2xvc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9pbnRlcm5hbC9zdmctaWNvbnMvRXJyb3JPdXRsaW5lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vaW50ZXJuYWwvc3ZnLWljb25zL0luZm9PdXRsaW5lZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL2ludGVybmFsL3N2Zy1pY29ucy9SZXBvcnRQcm9ibGVtT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9pbnRlcm5hbC9zdmctaWNvbnMvU3VjY2Vzc091dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi9tZXNzYWdlcy8uanMiXSwibmFtZXMiOlsiQWxlcnQiLCJwcm9wcyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJkYXJrVGhlbWUiLCJyb290IiwibWluV2lkdGgiLCJyb290UGFwZXIiLCJwYWRkaW5nIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImJ1bGxldCIsIm1hcmdpbiIsInRyYW5zZm9ybSIsInRpdGxlIiwiZm9udFNpemUiLCJwb3MiLCJtYXJnaW5Cb3R0b20iLCJpY29uQnV0dG9uIiwiaW5wdXQiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsImZsZXgiLCJkaXZpZGVyIiwiaGVpZ2h0IiwiTWVzc2FnZUlkIiwibWVzc2FnZSIsInJvdXRlciIsImNsYXNzZXMiLCJ0b2tlbiIsImdldENvb2tpZSIsInVzZUZvcm0iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsInVzZVN0YXRlIiwib3BlbiIsImxvYWRpbmciLCJzdWNjZXNzIiwiZXJyb3IiLCJ0ZXh0IiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlRWZmZWN0Iiwic2V0VnUiLCJxdWVyeSIsImlkIiwiaGFuZGxlQ2xvc2UiLCJldmVudCIsInJlYXNvbiIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJhZGRSZXNwb25zZSIsInRoZW4iLCJyZXN1bHQiLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwicHVzaCIsImNvbG9yIiwibm9tIiwicG9zaXRpb24iLCJkYXlqcyIsImNyZWF0ZWRBdCIsImZvcm1hdCIsIm1haWwiLCJ0ZWwiLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsIm1zZyIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEY7QUFDaEM7QUFDM0I7QUFDSTtBQUNYO0FBQytDO0FBQzNCO0FBQzRCO0FBQ1k7QUFDbEI7QUFDQTtBQUNkO0FBQ0U7QUFDRDtBQUM5QztBQUNQLGtEQUFrRCwrREFBTSxHQUFHLGdFQUFPO0FBQ2xFLDREQUE0RCxnRUFBTyxHQUFHLCtEQUFNO0FBQzVFO0FBQ0E7QUFDQSxVQUFVLGtGQUFRLEdBQUc7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtB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QUFBQTtBQUFBO0FBQUEsS0FJQyxNQUFDLEtBQUQ7QUFBTyxXQUFPLEVBQUVBLFdBQWhCO0FBQTZCLFlBQVEsRUFBQyxPQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VSLEtBREYsQ0FKRCxDQTlHRixDQURELENBREQsQ0FERDtBQThIQSxDQWxMRDs7R0FBTWIsUztVQUNXekIsUyxFQUVtQitCLHdEOzs7TUFIOUJOLFM7O0FBK0xTLHFFQUFBNkMsK0RBQVUsQ0FBQzdDLFNBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vbWVzc2FnZXMvW2lkXS42Y2QxZDM0YjUxOGRmZWM3OWM4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcywgbGlnaHRlbiwgZGFya2VuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgU3VjY2Vzc091dGxpbmVkSWNvbiBmcm9tICcuLi9pbnRlcm5hbC9zdmctaWNvbnMvU3VjY2Vzc091dGxpbmVkJztcbmltcG9ydCBSZXBvcnRQcm9ibGVtT3V0bGluZWRJY29uIGZyb20gJy4uL2ludGVybmFsL3N2Zy1pY29ucy9SZXBvcnRQcm9ibGVtT3V0bGluZWQnO1xuaW1wb3J0IEVycm9yT3V0bGluZUljb24gZnJvbSAnLi4vaW50ZXJuYWwvc3ZnLWljb25zL0Vycm9yT3V0bGluZSc7XG5pbXBvcnQgSW5mb091dGxpbmVkSWNvbiBmcm9tICcuLi9pbnRlcm5hbC9zdmctaWNvbnMvSW5mb091dGxpbmVkJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnLi4vaW50ZXJuYWwvc3ZnLWljb25zL0Nsb3NlJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3V0aWxzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHZhciBnZXRDb2xvciA9IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IGRhcmtlbiA6IGxpZ2h0ZW47XG4gIHZhciBnZXRCYWNrZ3JvdW5kQ29sb3IgPSB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyBsaWdodGVuIDogZGFya2VuO1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDogX2V4dGVuZHMoe30sIHRoZW1lLnR5cG9ncmFwaHkuYm9keTIsIHtcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUuc2hhcGUuYm9yZGVyUmFkaXVzLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgcGFkZGluZzogJzZweCAxNnB4J1xuICAgIH0pLFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cInN0YW5kYXJkXCJgIGFuZCBgY29sb3I9XCJzdWNjZXNzXCJgLiAqL1xuICAgIHN0YW5kYXJkU3VjY2Vzczoge1xuICAgICAgY29sb3I6IGdldENvbG9yKHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluLCAwLjYpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBnZXRCYWNrZ3JvdW5kQ29sb3IodGhlbWUucGFsZXR0ZS5zdWNjZXNzLm1haW4sIDAuOSksXG4gICAgICAnJiAkaWNvbic6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJzdGFuZGFyZFwiYCBhbmQgYGNvbG9yPVwiaW5mb1wiYC4gKi9cbiAgICBzdGFuZGFyZEluZm86IHtcbiAgICAgIGNvbG9yOiBnZXRDb2xvcih0aGVtZS5wYWxldHRlLmluZm8ubWFpbiwgMC42KSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogZ2V0QmFja2dyb3VuZENvbG9yKHRoZW1lLnBhbGV0dGUuaW5mby5tYWluLCAwLjkpLFxuICAgICAgJyYgJGljb24nOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmluZm8ubWFpblxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwic3RhbmRhcmRcImAgYW5kIGBjb2xvcj1cIndhcm5pbmdcImAuICovXG4gICAgc3RhbmRhcmRXYXJuaW5nOiB7XG4gICAgICBjb2xvcjogZ2V0Q29sb3IodGhlbWUucGFsZXR0ZS53YXJuaW5nLm1haW4sIDAuNiksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdldEJhY2tncm91bmRDb2xvcih0aGVtZS5wYWxldHRlLndhcm5pbmcubWFpbiwgMC45KSxcbiAgICAgICcmICRpY29uJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS53YXJuaW5nLm1haW5cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cInN0YW5kYXJkXCJgIGFuZCBgY29sb3I9XCJlcnJvclwiYC4gKi9cbiAgICBzdGFuZGFyZEVycm9yOiB7XG4gICAgICBjb2xvcjogZ2V0Q29sb3IodGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLCAwLjYpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBnZXRCYWNrZ3JvdW5kQ29sb3IodGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLCAwLjkpLFxuICAgICAgJyYgJGljb24nOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW5cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cIm91dGxpbmVkXCJgIGFuZCBgY29sb3I9XCJzdWNjZXNzXCJgLiAqL1xuICAgIG91dGxpbmVkU3VjY2Vzczoge1xuICAgICAgY29sb3I6IGdldENvbG9yKHRoZW1lLnBhbGV0dGUuc3VjY2Vzcy5tYWluLCAwLjYpLFxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5zdWNjZXNzLm1haW4pLFxuICAgICAgJyYgJGljb24nOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnN1Y2Nlc3MubWFpblxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwib3V0bGluZWRcImAgYW5kIGBjb2xvcj1cImluZm9cImAuICovXG4gICAgb3V0bGluZWRJbmZvOiB7XG4gICAgICBjb2xvcjogZ2V0Q29sb3IodGhlbWUucGFsZXR0ZS5pbmZvLm1haW4sIDAuNiksXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLmluZm8ubWFpbiksXG4gICAgICAnJiAkaWNvbic6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuaW5mby5tYWluXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJvdXRsaW5lZFwiYCBhbmQgYGNvbG9yPVwid2FybmluZ1wiYC4gKi9cbiAgICBvdXRsaW5lZFdhcm5pbmc6IHtcbiAgICAgIGNvbG9yOiBnZXRDb2xvcih0aGVtZS5wYWxldHRlLndhcm5pbmcubWFpbiwgMC42KSxcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUud2FybmluZy5tYWluKSxcbiAgICAgICcmICRpY29uJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS53YXJuaW5nLm1haW5cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cIm91dGxpbmVkXCJgIGFuZCBgY29sb3I9XCJlcnJvclwiYC4gKi9cbiAgICBvdXRsaW5lZEVycm9yOiB7XG4gICAgICBjb2xvcjogZ2V0Q29sb3IodGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLCAwLjYpLFxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5lcnJvci5tYWluKSxcbiAgICAgICcmICRpY29uJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJmaWxsZWRcImAgYW5kIGBjb2xvcj1cInN1Y2Nlc3NcImAuICovXG4gICAgZmlsbGVkU3VjY2Vzczoge1xuICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zdWNjZXNzLm1haW5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImZpbGxlZFwiYCBhbmQgYGNvbG9yPVwiaW5mb1wiYC4gKi9cbiAgICBmaWxsZWRJbmZvOiB7XG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmluZm8ubWFpblxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwiZmlsbGVkXCJgIGFuZCBgY29sb3I9XCJ3YXJuaW5nXCJgLiAqL1xuICAgIGZpbGxlZFdhcm5pbmc6IHtcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUud2FybmluZy5tYWluXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJmaWxsZWRcImAgYW5kIGBjb2xvcj1cImVycm9yXCJgLiAqL1xuICAgIGZpbGxlZEVycm9yOiB7XG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGljb24gd3JhcHBlciBlbGVtZW50LiAqL1xuICAgIGljb246IHtcbiAgICAgIG1hcmdpblJpZ2h0OiAxMixcbiAgICAgIHBhZGRpbmc6ICc3cHggMCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmb250U2l6ZTogMjIsXG4gICAgICBvcGFjaXR5OiAwLjlcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIG1lc3NhZ2Ugd3JhcHBlciBlbGVtZW50LiAqL1xuICAgIG1lc3NhZ2U6IHtcbiAgICAgIHBhZGRpbmc6ICc4cHggMCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGFjdGlvbiB3cmFwcGVyIGVsZW1lbnQgaWYgYGFjdGlvbmAgaXMgcHJvdmlkZWQuICovXG4gICAgYWN0aW9uOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgIHBhZGRpbmdMZWZ0OiAxNixcbiAgICAgIG1hcmdpblJpZ2h0OiAtOFxuICAgIH1cbiAgfTtcbn07XG52YXIgZGVmYXVsdEljb25NYXBwaW5nID0ge1xuICBzdWNjZXNzOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTdWNjZXNzT3V0bGluZWRJY29uLCB7XG4gICAgZm9udFNpemU6IFwiaW5oZXJpdFwiXG4gIH0pLFxuICB3YXJuaW5nOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZXBvcnRQcm9ibGVtT3V0bGluZWRJY29uLCB7XG4gICAgZm9udFNpemU6IFwiaW5oZXJpdFwiXG4gIH0pLFxuICBlcnJvcjogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRXJyb3JPdXRsaW5lSWNvbiwge1xuICAgIGZvbnRTaXplOiBcImluaGVyaXRcIlxuICB9KSxcbiAgaW5mbzogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5mb091dGxpbmVkSWNvbiwge1xuICAgIGZvbnRTaXplOiBcImluaGVyaXRcIlxuICB9KVxufTtcblxudmFyIF9yZWYgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDbG9zZUljb24sIHtcbiAgZm9udFNpemU6IFwic21hbGxcIlxufSk7XG5cbnZhciBBbGVydCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEFsZXJ0KHByb3BzLCByZWYpIHtcbiAgdmFyIGFjdGlvbiA9IHByb3BzLmFjdGlvbixcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjbG9zZVRleHQgPSBwcm9wcy5jbG9zZVRleHQsXG4gICAgICBjbG9zZVRleHQgPSBfcHJvcHMkY2xvc2VUZXh0ID09PSB2b2lkIDAgPyAnQ2xvc2UnIDogX3Byb3BzJGNsb3NlVGV4dCxcbiAgICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBpY29uID0gcHJvcHMuaWNvbixcbiAgICAgIF9wcm9wcyRpY29uTWFwcGluZyA9IHByb3BzLmljb25NYXBwaW5nLFxuICAgICAgaWNvbk1hcHBpbmcgPSBfcHJvcHMkaWNvbk1hcHBpbmcgPT09IHZvaWQgMCA/IGRlZmF1bHRJY29uTWFwcGluZyA6IF9wcm9wcyRpY29uTWFwcGluZyxcbiAgICAgIG9uQ2xvc2UgPSBwcm9wcy5vbkNsb3NlLFxuICAgICAgX3Byb3BzJHJvbGUgPSBwcm9wcy5yb2xlLFxuICAgICAgcm9sZSA9IF9wcm9wcyRyb2xlID09PSB2b2lkIDAgPyAnYWxlcnQnIDogX3Byb3BzJHJvbGUsXG4gICAgICBfcHJvcHMkc2V2ZXJpdHkgPSBwcm9wcy5zZXZlcml0eSxcbiAgICAgIHNldmVyaXR5ID0gX3Byb3BzJHNldmVyaXR5ID09PSB2b2lkIDAgPyAnc3VjY2VzcycgOiBfcHJvcHMkc2V2ZXJpdHksXG4gICAgICBfcHJvcHMkdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICB2YXJpYW50ID0gX3Byb3BzJHZhcmlhbnQgPT09IHZvaWQgMCA/ICdzdGFuZGFyZCcgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhY3Rpb25cIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjbG9zZVRleHRcIiwgXCJjb2xvclwiLCBcImljb25cIiwgXCJpY29uTWFwcGluZ1wiLCBcIm9uQ2xvc2VcIiwgXCJyb2xlXCIsIFwic2V2ZXJpdHlcIiwgXCJ2YXJpYW50XCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUGFwZXIsIF9leHRlbmRzKHtcbiAgICByb2xlOiByb2xlLFxuICAgIHNxdWFyZTogdHJ1ZSxcbiAgICBlbGV2YXRpb246IDAsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3Nlc1tcIlwiLmNvbmNhdCh2YXJpYW50KS5jb25jYXQoY2FwaXRhbGl6ZShjb2xvciB8fCBzZXZlcml0eSkpXSwgY2xhc3NOYW1lKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlciksIGljb24gIT09IGZhbHNlID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5pY29uXG4gIH0sIGljb24gfHwgaWNvbk1hcHBpbmdbc2V2ZXJpdHldIHx8IGRlZmF1bHRJY29uTWFwcGluZ1tzZXZlcml0eV0pIDogbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5tZXNzYWdlXG4gIH0sIGNoaWxkcmVuKSwgYWN0aW9uICE9IG51bGwgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLmFjdGlvblxuICB9LCBhY3Rpb24pIDogbnVsbCwgYWN0aW9uID09IG51bGwgJiYgb25DbG9zZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMuYWN0aW9uXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEljb25CdXR0b24sIHtcbiAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgXCJhcmlhLWxhYmVsXCI6IGNsb3NlVGV4dCxcbiAgICB0aXRsZTogY2xvc2VUZXh0LFxuICAgIGNvbG9yOiBcImluaGVyaXRcIixcbiAgICBvbkNsaWNrOiBvbkNsb3NlXG4gIH0sIF9yZWYpKSA6IG51bGwpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBBbGVydC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgYWN0aW9uIHRvIGRpc3BsYXkuIEl0IHJlbmRlcnMgYWZ0ZXIgdGhlIG1lc3NhZ2UsIGF0IHRoZSBlbmQgb2YgdGhlIGFsZXJ0LlxuICAgKi9cbiAgYWN0aW9uOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGxhYmVsIGZvciB0aGUgKmNsb3NlIHBvcHVwKiBpY29uIGJ1dHRvbi5cbiAgICpcbiAgICogRm9yIGxvY2FsaXphdGlvbiBwdXJwb3NlcywgeW91IGNhbiB1c2UgdGhlIHByb3ZpZGVkIFt0cmFuc2xhdGlvbnNdKC9ndWlkZXMvbG9jYWxpemF0aW9uLykuXG4gICAqL1xuICBjbG9zZVRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBtYWluIGNvbG9yIGZvciB0aGUgYWxlcnQuIFVubGVzcyBwcm92aWRlZCwgdGhlIHZhbHVlIGlzIHRha2VuIGZyb20gdGhlIGBzZXZlcml0eWAgcHJvcC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydlcnJvcicsICdpbmZvJywgJ3N1Y2Nlc3MnLCAnd2FybmluZyddKSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGljb24gZGlzcGxheWVkIGJlZm9yZSB0aGUgY2hpbGRyZW4uXG4gICAqIFVubGVzcyBwcm92aWRlZCwgdGhlIGljb24gaXMgbWFwcGVkIHRvIHRoZSB2YWx1ZSBvZiB0aGUgYHNldmVyaXR5YCBwcm9wLlxuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgbWFwcyB0aGUgYHNldmVyaXR5YCBwcm9wIHRvIGEgcmFuZ2Ugb2YgZGlmZmVyZW50IGljb25zLFxuICAgKiBmb3IgaW5zdGFuY2Ugc3VjY2VzcyB0byBgPFN1Y2Nlc3NPdXRsaW5lZD5gLlxuICAgKiBJZiB5b3Ugd2lzaCB0byBjaGFuZ2UgdGhpcyBtYXBwaW5nLCB5b3UgY2FuIHByb3ZpZGUgeW91ciBvd24uXG4gICAqIEFsdGVybmF0aXZlbHksIHlvdSBjYW4gdXNlIHRoZSBgaWNvbmAgcHJvcCB0byBvdmVycmlkZSB0aGUgaWNvbiBkaXNwbGF5ZWQuXG4gICAqL1xuICBpY29uTWFwcGluZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBlcnJvcjogUHJvcFR5cGVzLm5vZGUsXG4gICAgaW5mbzogUHJvcFR5cGVzLm5vZGUsXG4gICAgc3VjY2VzczogUHJvcFR5cGVzLm5vZGUsXG4gICAgd2FybmluZzogUHJvcFR5cGVzLm5vZGVcbiAgfSksXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCByZXF1ZXN0cyB0byBiZSBjbG9zZWQuXG4gICAqIFdoZW4gcHJvdmlkZWQgYW5kIG5vIGBhY3Rpb25gIHByb3AgaXMgc2V0LCBhIGNsb3NlIGljb24gYnV0dG9uIGlzIGRpc3BsYXllZCB0aGF0IHRyaWdnZXJzIHRoZSBjYWxsYmFjayB3aGVuIGNsaWNrZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICovXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgQVJJQSByb2xlIGF0dHJpYnV0ZSBvZiB0aGUgZWxlbWVudC5cbiAgICovXG4gIHJvbGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBzZXZlcml0eSBvZiB0aGUgYWxlcnQuIFRoaXMgZGVmaW5lcyB0aGUgY29sb3IgYW5kIGljb24gdXNlZC5cbiAgICovXG4gIHNldmVyaXR5OiBQcm9wVHlwZXMub25lT2YoWydlcnJvcicsICdpbmZvJywgJ3N1Y2Nlc3MnLCAnd2FybmluZyddKSxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZmlsbGVkJywgJ291dGxpbmVkJywgJ3N0YW5kYXJkJ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUFsZXJ0J1xufSkoQWxlcnQpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0FsZXJ0JzsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXRpbHMnO1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE5IDYuNDFMMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnpcIlxufSksICdDbG9zZScpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91dGlscyc7XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTEgMTVoMnYyaC0yem0wLThoMnY2aC0yem0uOTktNUM2LjQ3IDIgMiA2LjQ4IDIgMTJzNC40NyAxMCA5Ljk5IDEwQzE3LjUyIDIyIDIyIDE3LjUyIDIyIDEyUzE3LjUyIDIgMTEuOTkgMnpNMTIgMjBjLTQuNDIgMC04LTMuNTgtOC04czMuNTgtOCA4LTggOCAzLjU4IDggOC0zLjU4IDgtOCA4elwiXG59KSwgJ0Vycm9yT3V0bGluZScpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91dGlscyc7XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTEsOUgxM1Y3SDExTTEyLDIwQzcuNTksMjAgNCwxNi40MSA0LDEyQzQsNy41OSA3LjU5LDQgMTIsNEMxNi40MSw0IDIwLDcuNTkgMjAsIDEyQzIwLDE2LjQxIDE2LjQxLDIwIDEyLDIwTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwgMTAgMCAwLDAgMTIsMk0xMSwxN0gxM1YxMUgxMVYxN1pcIlxufSksICdJbmZvT3V0bGluZWQnKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXRpbHMnO1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEyIDUuOTlMMTkuNTMgMTlINC40N0wxMiA1Ljk5TTEyIDJMMSAyMWgyMkwxMiAyem0xIDE0aC0ydjJoMnYtMnptMC02aC0ydjRoMnYtNHpcIlxufSksICdSZXBvcnRQcm9ibGVtT3V0bGluZWQnKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdmdJY29uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXRpbHMnO1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTIwLDEyQTgsOCAwIDAsMSAxMiwyMEE4LDggMCAwLDEgNCwxMkE4LDggMCAwLDEgMTIsNEMxMi43Niw0IDEzLjUsNC4xMSAxNC4yLCA0LjMxTDE1Ljc3LDIuNzRDMTQuNjEsMi4yNiAxMy4zNCwyIDEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsIDAgMjIsMTJNNy45MSwxMC4wOEw2LjUsMTEuNUwxMSwxNkwyMSw2TDE5LjU5LDQuNThMMTEsMTMuMTdMNy45MSwxMC4wOFpcIlxufSksICdTdWNjZXNzT3V0bGluZWQnKTsiLCJpbXBvcnQgQWRtaW5IZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvQWRtaW5IZWFkZXInO1xyXG5pbXBvcnQgQWRtaW4gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9hdXRoL0FkbWluJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IHtcclxuXHRhZGRSZXNwb25zZSxcclxuXHRsaXN0TWVzc2FnZUJ5SWQsXHJcblx0c2V0VnUsXHJcbn0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9tZXNzYWdlQWN0aW9ucyc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IFNlbmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZW5kJztcclxuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dGFyZWFBdXRvc2l6ZSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvYXV0aEFjdGlvbnMnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQmFja3NwYWNlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQmFja3NwYWNlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xyXG5pbXBvcnQgTXVpQWxlcnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCc7XHJcblxyXG5mdW5jdGlvbiBBbGVydChwcm9wcykge1xyXG5cdHJldHVybiA8TXVpQWxlcnQgZWxldmF0aW9uPXs2fSB2YXJpYW50PSdmaWxsZWQnIHsuLi5wcm9wc30gLz47XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKGRhcmtUaGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHRtaW5XaWR0aDogMjc1LFxyXG5cdH0sXHJcblx0cm9vdFBhcGVyOiB7XHJcblx0XHRwYWRkaW5nOiAnNnB4IDRweCcsXHJcblx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjMjEyNTI5JyxcclxuXHR9LFxyXG5cdGJ1bGxldDoge1xyXG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcblx0XHRtYXJnaW46ICcwIDJweCcsXHJcblx0XHR0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyxcclxuXHR9LFxyXG5cdHRpdGxlOiB7XHJcblx0XHRmb250U2l6ZTogMTQsXHJcblx0fSxcclxuXHRwb3M6IHtcclxuXHRcdG1hcmdpbkJvdHRvbTogMTIsXHJcblx0fSxcclxuXHRpY29uQnV0dG9uOiB7XHJcblx0XHRwYWRkaW5nOiAxMCxcclxuXHR9LFxyXG5cdGlucHV0OiB7XHJcblx0XHRtYXJnaW5MZWZ0OiBkYXJrVGhlbWUuc3BhY2luZygxKSxcclxuXHRcdGZsZXg6IDEsXHJcblx0fSxcclxuXHRkaXZpZGVyOiB7XHJcblx0XHRoZWlnaHQ6IDI4LFxyXG5cdFx0bWFyZ2luOiA0LFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IE1lc3NhZ2VJZCA9ICh7IG1lc3NhZ2UsIHJvdXRlciB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cdGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSgpO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0b3BlbjogZmFsc2UsXHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdFx0dGV4dDogJycsXHJcblx0fSk7XHJcblx0Y29uc3QgeyBzdWNjZXNzLCBsb2FkaW5nLCBlcnJvciwgdGV4dCB9ID0gdmFsdWVzO1xyXG5cdC8vRW52b3llciBsYSByw6lwb25zZVxyXG5cdC8vVXNlRWZmZWN0IG1ldHRhbnQgdnUgw6AgdHJ1ZSBhdSBjaGFyZ2VtZW50IGRlIGxhIHBhZ2VcclxuXHQvL0FmZmljaGVyIGxhIHLDqXBvbnNlIGVuIGRlc3NvdXMgZHUgbWVzc2FnZVxyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0VnUocm91dGVyLnF1ZXJ5LmlkLCB0b2tlbik7XHJcblx0fSwgW10pO1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbG9zZSA9IChldmVudCwgcmVhc29uKSA9PiB7XHJcblx0XHRpZiAocmVhc29uID09PSAnY2xpY2thd2F5Jykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0VmFsdWVzKHsgLi4udmFsdWVzLCBvcGVuOiBmYWxzZSB9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblx0XHRjb25zb2xlLmxvZygnZGF0YSB2YXV0ID0+JywgZGF0YSk7XHJcblx0XHRhZGRSZXNwb25zZShkYXRhLCByb3V0ZXIucXVlcnkuaWQsIHRva2VuKS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3Jlc3VsdCB2YXV0ID0+JywgcmVzdWx0KTtcclxuXHRcdFx0aWYgKHJlc3VsdC5lcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd1bmUgZ3Jvc3NlIGVycmV1cicpO1xyXG5cdFx0XHRcdHNldFZhbHVlcyh7IC4uLnZhbHVlcywgZXJyb3I6IHJlc3VsdC5lcnJvciB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRWYWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0b3BlbjogdHJ1ZSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IHJlc3VsdC50ZXh0LFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Um91dGVyLnB1c2goJy9hZG1pbi9tZXNzYWdlcycpO1xyXG5cdFx0XHRcdH0sIDMwMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEFkbWluSGVhZGVyPlxyXG5cdFx0XHRcdDxBZG1pbj5cclxuXHRcdFx0XHRcdHsvKiBGaWwgZCdhcmlhbmUgKi99XHJcblx0XHRcdFx0XHQ8aDIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+XHJcblx0XHRcdFx0XHRcdENvbnN1bHRhdGlvbiBkdSBtZXNzYWdlIGRlIHttZXNzYWdlLm5vbX1cclxuXHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0XHQ8TGluayBocmVmPScvYWRtaW4vbWVzc2FnZXMnPlxyXG5cdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0XHQ8QmFja3NwYWNlSWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udFNpemU9J2xhcmdlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PGhyIC8+XHJcblx0XHRcdFx0XHQ8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblx0XHRcdFx0XHRcdDxDYXJkQ29udGVudD5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PSdoNScgY29tcG9uZW50PSdoNSc+XHJcblx0XHRcdFx0XHRcdFx0XHRFbnZvecOpIHBhciB7bWVzc2FnZS5ub219XHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ndGV4dFNlY29uZGFyeSdcclxuXHRcdFx0XHRcdFx0XHRcdGd1dHRlckJvdHRvbT5cclxuXHRcdFx0XHRcdFx0XHRcdGxleycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdHtkYXlqcyhtZXNzYWdlLmNyZWF0ZWRBdCkuZm9ybWF0KFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnREQvTU0vWVlZWSDDoCBISDptbSdcclxuXHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnBvc31cclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yPSd0ZXh0U2Vjb25kYXJ5Jz5cclxuXHRcdFx0XHRcdFx0XHRcdENvb3Jkb25uw6llcyA6eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9e2BtYWlsdG86JHttZXNzYWdlLm1haWx9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHttZXNzYWdlLm1haWx9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+eycgJ31cclxuXHRcdFx0XHRcdFx0XHRcdC8gMFxyXG5cdFx0XHRcdFx0XHRcdFx0e2Ake21lc3NhZ2UudGVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5zdWJzdHJpbmcoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0MCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQxXHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9ICR7bWVzc2FnZS50ZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnN1YnN0cmluZyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQxLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDNcclxuXHRcdFx0XHRcdFx0XHRcdFx0KX0gJHttZXNzYWdlLnRlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQudG9TdHJpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuc3Vic3RyaW5nKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0NVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpfSAke21lc3NhZ2UudGVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50b1N0cmluZygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5zdWJzdHJpbmcoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0NSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ3XHJcblx0XHRcdFx0XHRcdFx0XHRcdCl9ICR7bWVzc2FnZS50ZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnRvU3RyaW5nKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnN1YnN0cmluZyg3LCA5KX1gfVxyXG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MicgY29tcG9uZW50PSdwJz5cclxuXHRcdFx0XHRcdFx0XHRcdE1lc3NhZ2UgOlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHR7bWVzc2FnZS5tc2d9XHJcblx0XHRcdFx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHRcdFx0XHQ8L0NhcmRDb250ZW50PlxyXG5cdFx0XHRcdFx0XHQ8Q2FyZENvbnRlbnQ+XHJcblx0XHRcdFx0XHRcdFx0PFBhcGVyXHJcblx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnQ9J2Zvcm0nXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMucm9vdFBhcGVyfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxmb3JtXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290UGFwZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9J29mZic+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0YXJlYUF1dG9zaXplXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J3JlcG9uc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0ncmVwb25zZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nUsOpcG9uc2UnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cm93c01pbj17Nn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFJlZj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxEaXZpZGVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmRpdmlkZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3JpZW50YXRpb249J3ZlcnRpY2FsJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3N1Ym1pdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ncHJpbWFyeSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkJ1dHRvbn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdFbnZveWVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8U2VuZEljb24gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9JY29uQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxyXG5cdFx0XHRcdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0XHRcdDwvQ2FyZENvbnRlbnQ+XHJcblx0XHRcdFx0XHQ8L0NhcmQ+XHJcblx0XHRcdFx0XHR7c3VjY2VzcyAmJiAoXHJcblx0XHRcdFx0XHRcdDxTbmFja2JhclxyXG5cdFx0XHRcdFx0XHRcdG9wZW49e29wZW59XHJcblx0XHRcdFx0XHRcdFx0YXV0b0hpZGVEdXJhdGlvbj17NjAwMH1cclxuXHRcdFx0XHRcdFx0XHRvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XHJcblx0XHRcdFx0XHRcdFx0PEFsZXJ0IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfSBzZXZlcml0eT0nc3VjY2Vzcyc+XHJcblx0XHRcdFx0XHRcdFx0XHR7dGV4dH1cclxuXHRcdFx0XHRcdFx0XHQ8L0FsZXJ0PlxyXG5cdFx0XHRcdFx0XHQ8L1NuYWNrYmFyPlxyXG5cdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdHtsb2FkaW5nICYmIDxDaXJjdWxhclByb2dyZXNzIC8+fVxyXG5cdFx0XHRcdFx0e2Vycm9yICYmIChcclxuXHRcdFx0XHRcdFx0PFNuYWNrYmFyXHJcblx0XHRcdFx0XHRcdFx0b3Blbj17b3Blbn1cclxuXHRcdFx0XHRcdFx0XHRhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cclxuXHRcdFx0XHRcdFx0XHQ8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9IHNldmVyaXR5PSdlcnJvcic+XHJcblx0XHRcdFx0XHRcdFx0XHR7ZXJyb3J9XHJcblx0XHRcdFx0XHRcdFx0PC9BbGVydD5cclxuXHRcdFx0XHRcdFx0PC9TbmFja2Jhcj5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9BZG1pbj5cclxuXHRcdFx0PC9BZG1pbkhlYWRlcj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHRjb25zdCByZXMxID0gYXdhaXQgbGlzdE1lc3NhZ2VCeUlkKGNvbnRleHQucGFyYW1zLmlkKTtcclxuXHRjb25zdCBtZXNzYWdlID0gYXdhaXQgcmVzMTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdG1lc3NhZ2UsXHJcblx0XHR9LFxyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoTWVzc2FnZUlkKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==