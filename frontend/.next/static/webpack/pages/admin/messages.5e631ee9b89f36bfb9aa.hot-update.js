webpackHotUpdate_N_E("pages/admin/messages",{

/***/ "./components/admin/lists/ListMessages.js":
/*!************************************************!*\
  !*** ./components/admin/lists/ListMessages.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_authActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/authActions */ "./actions/authActions.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _actions_messageActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../actions/messageActions */ "./actions/messageActions.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "./node_modules/@material-ui/core/esm/TablePagination/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TableSortLabel */ "./node_modules/@material-ui/core/esm/TableSortLabel/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/icons/FilterList */ "./node_modules/@material-ui/icons/FilterList.js");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_27__);



var _jsxFileName = "C:\\Users\\jossi\\Dropbox\\JOSSIC\\6-development\\Devs\\gites-wao\\frontend\\components\\admin\\lists\\ListMessages.js",
    _this2 = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import { Table } from 'reactstrap';


























var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '100%'
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2)
    },
    table: {
      minWidth: 750
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1
    }
  };
});

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? function (a, b) {
    return descendingComparator(a, b, orderBy);
  } : function (a, b) {
    return -descendingComparator(a, b, orderBy);
  };
}

function stableSort(array, comparator) {
  var stabilizedThis = array.map(function (el, index) {
    return [el, index];
  });
  stabilizedThis.sort(function (a, b) {
    var order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(function (el) {
    return el[0];
  });
}

var headCells = [{
  id: '#ID',
  numeric: true,
  disablePadding: true,
  label: '#ID'
}, {
  id: 'Nom',
  numeric: false,
  disablePadding: false,
  label: 'Nom'
}, {
  id: 'Mai',
  numeric: false,
  disablePadding: false,
  label: 'Mai'
}, {
  id: 'Tel',
  numeric: true,
  disablePadding: false,
  label: 'Tel'
}, {
  id: 'Message',
  numeric: false,
  disablePadding: false,
  label: 'Message'
}];

function EnhancedTableHead(props) {
  var _this = this;

  var classes = props.classes,
      onSelectAllClick = props.onSelectAllClick,
      order = props.order,
      orderBy = props.orderBy,
      numSelected = props.numSelected,
      rowCount = props.rowCount,
      onRequestSort = props.onRequestSort;

  var createSortHandler = function createSortHandler(property) {
    return function (event) {
      onRequestSort(event, property);
    };
  };

  return __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__["default"], {
    padding: "checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_20__["default"], {
    indeterminate: numSelected > 0 && numSelected < rowCount,
    checked: rowCount > 0 && numSelected === rowCount,
    onChange: onSelectAllClick,
    inputProps: {
      'aria-label': 'select all desserts'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 6
    }
  })), headCells.map(function (headCell) {
    return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: headCell.id,
      align: headCell.numeric ? 'right' : 'left',
      padding: headCell.disablePadding ? 'none' : 'default',
      sortDirection: orderBy === headCell.id ? order : false,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 6
      }
    }, __jsx(_material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_16__["default"], {
      active: orderBy === headCell.id,
      direction: orderBy === headCell.id ? order : 'asc',
      onClick: createSortHandler(headCell.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 7
      }
    }, headCell.label, orderBy === headCell.id ? __jsx("span", {
      className: classes.visuallyHidden,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }
    }, order === 'desc' ? 'sorted descending' : 'sorted ascending') : null));
  })));
}

_c = EnhancedTableHead;
EnhancedTableHead.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_27___default.a.object.isRequired,
  numSelected: prop_types__WEBPACK_IMPORTED_MODULE_27___default.a.number.isRequired,
  onRequestSort: prop_types__WEBPACK_IMPORTED_MODULE_27___default.a.func.isRequired,
  onSelectAllClick: prop_types__WEBPACK_IMPORTED_MODULE_27___default.a.func.isRequired,
  order: prop_types__WEBPACK_IMPORTED_MODULE_27___default.a.oneOf(['asc', 'desc']).isRequired,
  orderBy: prop_types__WEBPACK_IMPORTED_MODULE_27___default.a.string.isRequired,
  rowCount: prop_types__WEBPACK_IMPORTED_MODULE_27___default.a.number.isRequired
};
var useToolbarStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1)
    },
    highlight: theme.palette.type === 'light' ? {
      color: theme.palette.secondary.main,
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["lighten"])(theme.palette.secondary.light, 0.85)
    } : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.dark
    },
    title: {
      flex: '1 1 100%'
    }
  };
});

var EnhancedTableToolbar = function EnhancedTableToolbar(props) {
  _s();

  var classes = useToolbarStyles();
  var numSelected = props.numSelected;
  return __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.root, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.highlight, numSelected > 0)),
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 3
    }
  }, numSelected > 0 ? __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_18__["default"], {
    className: classes.title,
    color: "inherit",
    variant: "subtitle1",
    component: "div",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 5
    }
  }, numSelected, " selected") : __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_18__["default"], {
    className: classes.title,
    variant: "h6",
    id: "tableTitle",
    component: "div",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 5
    }
  }, "Messages"), numSelected > 0 ? __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"], {
    title: "Delete",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_21__["default"], {
    "aria-label": "delete",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 6
    }
  }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_25___default.a, {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 7
    }
  }))) : __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"], {
    title: "Filter list",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_21__["default"], {
    "aria-label": "filter list",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 6
    }
  }, __jsx(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_26___default.a, {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }
  }))));
};

_s(EnhancedTableToolbar, "3YobLOlq21lAjJ1iCLt9G1iGJSo=", false, function () {
  return [useToolbarStyles];
});

_c2 = EnhancedTableToolbar;
EnhancedTableToolbar.propTypes = {
  numSelected: prop_types__WEBPACK_IMPORTED_MODULE_27___default.a.number.isRequired
};

var ListMessages = function ListMessages(_ref) {
  _s2();

  var messages = _ref.messages,
      newMessages = _ref.newMessages;
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState('asc'),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      order = _React$useState2[0],
      setOrder = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState('calories'),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      orderBy = _React$useState4[0],
      setOrderBy = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      selected = _React$useState6[0],
      setSelected = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      page = _React$useState8[0],
      setPage = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState9, 2),
      dense = _React$useState10[0],
      setDense = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(5),
      _React$useState12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState11, 2),
      rowsPerPage = _React$useState12[0],
      setRowsPerPage = _React$useState12[1];

  var handleRequestSort = function handleRequestSort(event, property) {
    var isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  var handleSelectAllClick = function handleSelectAllClick(event) {
    if (event.target.checked) {
      var newSelecteds = messages.map(function (n) {
        return n.name;
      });
      setSelected(newSelecteds);
      return;
    }

    setSelected([]);
  };

  var handleClick = function handleClick(event, name) {
    var selectedIndex = selected.indexOf(name);
    var newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  var handleChangePage = function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  var handleChangeDense = function handleChangeDense(event) {
    setDense(event.target.checked);
  };

  var isSelected = function isSelected(name) {
    return selected.indexOf(name) !== -1;
  };

  var emptyRows = rowsPerPage - Math.min(rowsPerPage, messages.length - page * rowsPerPage);
  var token = Object(_actions_authActions__WEBPACK_IMPORTED_MODULE_4__["getCookie"])('token');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    loading: false,
    error: '',
    success: '',
    message: ''
  }),
      values = _useState[0],
      setvalues = _useState[1];

  var loading = values.loading,
      success = values.success,
      error = values.error,
      message = values.message;

  var deleteMessage = function deleteMessage(id) {
    setvalues(_objectSpread(_objectSpread({}, values), {}, {
      loading: true
    }));
    Object(_actions_messageActions__WEBPACK_IMPORTED_MODULE_6__["removeMessage"])(id, token).then(function (data) {
      console.log('data vaut', data);

      if (data.error) {
        setvalues(_objectSpread(_objectSpread({}, values), {}, {
          loading: false,
          error: true,
          success: false
        }));
      } else {
        setvalues(_objectSpread(_objectSpread({}, values), {}, {
          loading: false,
          error: '',
          success: true,
          message: data.text
        }));
      }
    });
  };

  var deleteConfirm = function deleteConfirm(id) {
    var answer = window.confirm("Suppression du message ".concat(id, ", \xEAtes-vous s\xFBr ?"));

    if (answer) {
      deleteMessage(id);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, loading && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 16
    }
  }), success && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
    color: "success",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 16
    }
  }, message), error && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
    color: "danger",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 14
    }
  }, "Une erreur est survenue"), __jsx("p", {
    style: {
      color: 'white'
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 4
    }
  }, "Vous avez ", newMessages, " non lus !"), __jsx("div", {
    className: classes.root,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_19__["default"], {
    className: classes.paper,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 5
    }
  }, __jsx(EnhancedTableToolbar, {
    numSelected: selected.length,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 6
    }
  }), __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.table,
    "aria-labelledby": "tableTitle",
    size: dense ? 'small' : 'medium',
    "aria-label": "enhanced table",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 7
    }
  }, __jsx(EnhancedTableHead, {
    classes: classes,
    numSelected: selected.length,
    order: order,
    orderBy: orderBy,
    onSelectAllClick: handleSelectAllClick,
    onRequestSort: handleRequestSort,
    rowCount: messages.length,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 8
    }
  }), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 8
    }
  }, stableSort(messages, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (msge, index) {
    var isItemSelected = isSelected(msge._id);
    var labelId = "enhanced-table-checkbox-".concat(index);
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_15__["default"], {
      hover: true,
      onClick: function onClick(event) {
        return handleClick(event, msge._id);
      },
      role: "checkbox",
      "aria-checked": isItemSelected,
      tabIndex: -1,
      key: msge._id,
      selected: isItemSelected,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 12
      }
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__["default"], {
      padding: "checkbox",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_20__["default"], {
      checked: isItemSelected,
      inputProps: {
        'aria-labelledby': labelId
      },
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 14
      }
    })), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__["default"], {
      component: "th",
      id: labelId,
      scope: "row",
      padding: "none",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 13
      }
    }, msge._id), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__["default"], {
      align: "right",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 13
      }
    }, msge.nom), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__["default"], {
      align: "right",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 13
      }
    }, msge.mail), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__["default"], {
      align: "right",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 13
      }
    }, msge.tel), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__["default"], {
      align: "right",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 13
      }
    }, msge.msg));
  }), emptyRows > 0 && __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_15__["default"], {
    style: {
      height: (dense ? 33 : 53) * emptyRows
    },
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 10
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__["default"], {
    colSpan: 6,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 11
    }
  }))))), __jsx(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_14__["default"], {
    rowsPerPageOptions: [5, 10, 25],
    component: "div",
    count: messages.length,
    rowsPerPage: rowsPerPage,
    page: page,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_23__["default"], {
    control: __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_24__["default"], {
      checked: dense,
      onChange: handleChangeDense,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 7
      }
    }),
    label: "Affichage petit",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 5
    }
  })));
};

_s2(ListMessages, "g4PF91hMn13LMB1x38aa8lVkkwY=", false, function () {
  return [useStyles];
});

_c3 = ListMessages;
/* harmony default export */ __webpack_exports__["default"] = (ListMessages);

var _c, _c2, _c3;

$RefreshReg$(_c, "EnhancedTableHead");
$RefreshReg$(_c2, "EnhancedTableToolbar");
$RefreshReg$(_c3, "ListMessages");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0TWVzc2FnZXMuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwicGFwZXIiLCJtYXJnaW5Cb3R0b20iLCJzcGFjaW5nIiwidGFibGUiLCJtaW5XaWR0aCIsInZpc3VhbGx5SGlkZGVuIiwiYm9yZGVyIiwiY2xpcCIsImhlaWdodCIsIm1hcmdpbiIsIm92ZXJmbG93IiwicGFkZGluZyIsInBvc2l0aW9uIiwidG9wIiwiZGVzY2VuZGluZ0NvbXBhcmF0b3IiLCJhIiwiYiIsIm9yZGVyQnkiLCJnZXRDb21wYXJhdG9yIiwib3JkZXIiLCJzdGFibGVTb3J0IiwiYXJyYXkiLCJjb21wYXJhdG9yIiwic3RhYmlsaXplZFRoaXMiLCJtYXAiLCJlbCIsImluZGV4Iiwic29ydCIsImhlYWRDZWxscyIsImlkIiwibnVtZXJpYyIsImRpc2FibGVQYWRkaW5nIiwibGFiZWwiLCJFbmhhbmNlZFRhYmxlSGVhZCIsInByb3BzIiwiY2xhc3NlcyIsIm9uU2VsZWN0QWxsQ2xpY2siLCJudW1TZWxlY3RlZCIsInJvd0NvdW50Iiwib25SZXF1ZXN0U29ydCIsImNyZWF0ZVNvcnRIYW5kbGVyIiwicHJvcGVydHkiLCJldmVudCIsImhlYWRDZWxsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImZ1bmMiLCJvbmVPZiIsInN0cmluZyIsInVzZVRvb2xiYXJTdHlsZXMiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImhpZ2hsaWdodCIsInBhbGV0dGUiLCJ0eXBlIiwiY29sb3IiLCJzZWNvbmRhcnkiLCJtYWluIiwiYmFja2dyb3VuZENvbG9yIiwibGlnaHRlbiIsImxpZ2h0IiwidGV4dCIsInByaW1hcnkiLCJkYXJrIiwidGl0bGUiLCJmbGV4IiwiRW5oYW5jZWRUYWJsZVRvb2xiYXIiLCJjbHN4IiwiTGlzdE1lc3NhZ2VzIiwibWVzc2FnZXMiLCJuZXdNZXNzYWdlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZXRPcmRlciIsInNldE9yZGVyQnkiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwicGFnZSIsInNldFBhZ2UiLCJkZW5zZSIsInNldERlbnNlIiwicm93c1BlclBhZ2UiLCJzZXRSb3dzUGVyUGFnZSIsImhhbmRsZVJlcXVlc3RTb3J0IiwiaXNBc2MiLCJoYW5kbGVTZWxlY3RBbGxDbGljayIsInRhcmdldCIsImNoZWNrZWQiLCJuZXdTZWxlY3RlZHMiLCJuIiwibmFtZSIsImhhbmRsZUNsaWNrIiwic2VsZWN0ZWRJbmRleCIsImluZGV4T2YiLCJuZXdTZWxlY3RlZCIsImNvbmNhdCIsInNsaWNlIiwibGVuZ3RoIiwiaGFuZGxlQ2hhbmdlUGFnZSIsIm5ld1BhZ2UiLCJoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSIsInBhcnNlSW50IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2VEZW5zZSIsImlzU2VsZWN0ZWQiLCJlbXB0eVJvd3MiLCJNYXRoIiwibWluIiwidG9rZW4iLCJnZXRDb29raWUiLCJsb2FkaW5nIiwiZXJyb3IiLCJzdWNjZXNzIiwibWVzc2FnZSIsInZhbHVlcyIsInNldHZhbHVlcyIsImRlbGV0ZU1lc3NhZ2UiLCJyZW1vdmVNZXNzYWdlIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlQ29uZmlybSIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJtc2dlIiwiaXNJdGVtU2VsZWN0ZWQiLCJfaWQiLCJsYWJlbElkIiwibm9tIiwibWFpbCIsInRlbCIsIm1zZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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TFA7QUFNQyxnQkFBWSxFQUFFcUIsZ0JBTmY7QUFPQyx1QkFBbUIsRUFBRUUsdUJBUHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyRkQsQ0FERCxFQWdHQyxNQUFDLDJFQUFEO0FBQ0MsV0FBTyxFQUNOLE1BQUMsaUVBQUQ7QUFBUSxhQUFPLEVBQUVyQixLQUFqQjtBQUF3QixjQUFRLEVBQUV3QixpQkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGO0FBSUMsU0FBSyxFQUFDLGlCQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoR0QsQ0FORCxDQUREO0FBZ0hBLENBMU5EOztJQUFNbkMsWTtVQUNXNUUsUzs7O01BRFg0RSxZO0FBNE5TQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9tZXNzYWdlcy41ZTYzMWVlOWI4OWYzNmJmYjlhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgVGFibGUgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IEFsZXJ0LCBTcGlubmVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IHJlbW92ZU1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL21lc3NhZ2VBY3Rpb25zJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB7IGxpZ2h0ZW4sIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVQYWdpbmF0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUGFnaW5hdGlvbic7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XHJcbmltcG9ydCBUYWJsZVNvcnRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVNvcnRMYWJlbCc7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcclxuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcclxuaW1wb3J0IEZpbHRlckxpc3RJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GaWx0ZXJMaXN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0fSxcclxuXHRwYXBlcjoge1xyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcclxuXHR9LFxyXG5cdHRhYmxlOiB7XHJcblx0XHRtaW5XaWR0aDogNzUwLFxyXG5cdH0sXHJcblx0dmlzdWFsbHlIaWRkZW46IHtcclxuXHRcdGJvcmRlcjogMCxcclxuXHRcdGNsaXA6ICdyZWN0KDAgMCAwIDApJyxcclxuXHRcdGhlaWdodDogMSxcclxuXHRcdG1hcmdpbjogLTEsXHJcblx0XHRvdmVyZmxvdzogJ2hpZGRlbicsXHJcblx0XHRwYWRkaW5nOiAwLFxyXG5cdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXHJcblx0XHR0b3A6IDIwLFxyXG5cdFx0d2lkdGg6IDEsXHJcblx0fSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gZGVzY2VuZGluZ0NvbXBhcmF0b3IoYSwgYiwgb3JkZXJCeSkge1xyXG5cdGlmIChiW29yZGVyQnldIDwgYVtvcmRlckJ5XSkge1xyXG5cdFx0cmV0dXJuIC0xO1xyXG5cdH1cclxuXHRpZiAoYltvcmRlckJ5XSA+IGFbb3JkZXJCeV0pIHtcclxuXHRcdHJldHVybiAxO1xyXG5cdH1cclxuXHRyZXR1cm4gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29tcGFyYXRvcihvcmRlciwgb3JkZXJCeSkge1xyXG5cdHJldHVybiBvcmRlciA9PT0gJ2Rlc2MnXHJcblx0XHQ/IChhLCBiKSA9PiBkZXNjZW5kaW5nQ29tcGFyYXRvcihhLCBiLCBvcmRlckJ5KVxyXG5cdFx0OiAoYSwgYikgPT4gLWRlc2NlbmRpbmdDb21wYXJhdG9yKGEsIGIsIG9yZGVyQnkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFibGVTb3J0KGFycmF5LCBjb21wYXJhdG9yKSB7XHJcblx0Y29uc3Qgc3RhYmlsaXplZFRoaXMgPSBhcnJheS5tYXAoKGVsLCBpbmRleCkgPT4gW2VsLCBpbmRleF0pO1xyXG5cdHN0YWJpbGl6ZWRUaGlzLnNvcnQoKGEsIGIpID0+IHtcclxuXHRcdGNvbnN0IG9yZGVyID0gY29tcGFyYXRvcihhWzBdLCBiWzBdKTtcclxuXHRcdGlmIChvcmRlciAhPT0gMCkgcmV0dXJuIG9yZGVyO1xyXG5cdFx0cmV0dXJuIGFbMV0gLSBiWzFdO1xyXG5cdH0pO1xyXG5cdHJldHVybiBzdGFiaWxpemVkVGhpcy5tYXAoKGVsKSA9PiBlbFswXSk7XHJcbn1cclxuXHJcbmNvbnN0IGhlYWRDZWxscyA9IFtcclxuXHR7IGlkOiAnI0lEJywgbnVtZXJpYzogdHJ1ZSwgZGlzYWJsZVBhZGRpbmc6IHRydWUsIGxhYmVsOiAnI0lEJyB9LFxyXG5cdHsgaWQ6ICdOb20nLCBudW1lcmljOiBmYWxzZSwgZGlzYWJsZVBhZGRpbmc6IGZhbHNlLCBsYWJlbDogJ05vbScgfSxcclxuXHR7IGlkOiAnTWFpJywgbnVtZXJpYzogZmFsc2UsIGRpc2FibGVQYWRkaW5nOiBmYWxzZSwgbGFiZWw6ICdNYWknIH0sXHJcblx0eyBpZDogJ1RlbCcsIG51bWVyaWM6IHRydWUsIGRpc2FibGVQYWRkaW5nOiBmYWxzZSwgbGFiZWw6ICdUZWwnIH0sXHJcblx0eyBpZDogJ01lc3NhZ2UnLCBudW1lcmljOiBmYWxzZSwgZGlzYWJsZVBhZGRpbmc6IGZhbHNlLCBsYWJlbDogJ01lc3NhZ2UnIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBFbmhhbmNlZFRhYmxlSGVhZChwcm9wcykge1xyXG5cdGNvbnN0IHtcclxuXHRcdGNsYXNzZXMsXHJcblx0XHRvblNlbGVjdEFsbENsaWNrLFxyXG5cdFx0b3JkZXIsXHJcblx0XHRvcmRlckJ5LFxyXG5cdFx0bnVtU2VsZWN0ZWQsXHJcblx0XHRyb3dDb3VudCxcclxuXHRcdG9uUmVxdWVzdFNvcnQsXHJcblx0fSA9IHByb3BzO1xyXG5cdGNvbnN0IGNyZWF0ZVNvcnRIYW5kbGVyID0gKHByb3BlcnR5KSA9PiAoZXZlbnQpID0+IHtcclxuXHRcdG9uUmVxdWVzdFNvcnQoZXZlbnQsIHByb3BlcnR5KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFRhYmxlSGVhZD5cclxuXHRcdFx0PFRhYmxlUm93PlxyXG5cdFx0XHRcdDxUYWJsZUNlbGwgcGFkZGluZz0nY2hlY2tib3gnPlxyXG5cdFx0XHRcdFx0PENoZWNrYm94XHJcblx0XHRcdFx0XHRcdGluZGV0ZXJtaW5hdGU9e1xyXG5cdFx0XHRcdFx0XHRcdG51bVNlbGVjdGVkID4gMCAmJiBudW1TZWxlY3RlZCA8IHJvd0NvdW50XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Y2hlY2tlZD17cm93Q291bnQgPiAwICYmIG51bVNlbGVjdGVkID09PSByb3dDb3VudH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e29uU2VsZWN0QWxsQ2xpY2t9XHJcblx0XHRcdFx0XHRcdGlucHV0UHJvcHM9e3sgJ2FyaWEtbGFiZWwnOiAnc2VsZWN0IGFsbCBkZXNzZXJ0cycgfX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0e2hlYWRDZWxscy5tYXAoKGhlYWRDZWxsKSA9PiAoXHJcblx0XHRcdFx0XHQ8VGFibGVDZWxsXHJcblx0XHRcdFx0XHRcdGtleT17aGVhZENlbGwuaWR9XHJcblx0XHRcdFx0XHRcdGFsaWduPXtoZWFkQ2VsbC5udW1lcmljID8gJ3JpZ2h0JyA6ICdsZWZ0J31cclxuXHRcdFx0XHRcdFx0cGFkZGluZz17aGVhZENlbGwuZGlzYWJsZVBhZGRpbmcgPyAnbm9uZScgOiAnZGVmYXVsdCd9XHJcblx0XHRcdFx0XHRcdHNvcnREaXJlY3Rpb249e29yZGVyQnkgPT09IGhlYWRDZWxsLmlkID8gb3JkZXIgOiBmYWxzZX0+XHJcblx0XHRcdFx0XHRcdDxUYWJsZVNvcnRMYWJlbFxyXG5cdFx0XHRcdFx0XHRcdGFjdGl2ZT17b3JkZXJCeSA9PT0gaGVhZENlbGwuaWR9XHJcblx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uPXtvcmRlckJ5ID09PSBoZWFkQ2VsbC5pZCA/IG9yZGVyIDogJ2FzYyd9XHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17Y3JlYXRlU29ydEhhbmRsZXIoaGVhZENlbGwuaWQpfT5cclxuXHRcdFx0XHRcdFx0XHR7aGVhZENlbGwubGFiZWx9XHJcblx0XHRcdFx0XHRcdFx0e29yZGVyQnkgPT09IGhlYWRDZWxsLmlkID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnZpc3VhbGx5SGlkZGVufT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e29yZGVyID09PSAnZGVzYydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ/ICdzb3J0ZWQgZGVzY2VuZGluZydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICdzb3J0ZWQgYXNjZW5kaW5nJ31cclxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQpIDogbnVsbH1cclxuXHRcdFx0XHRcdFx0PC9UYWJsZVNvcnRMYWJlbD5cclxuXHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L1RhYmxlUm93PlxyXG5cdFx0PC9UYWJsZUhlYWQ+XHJcblx0KTtcclxufVxyXG5cclxuRW5oYW5jZWRUYWJsZUhlYWQucHJvcFR5cGVzID0ge1xyXG5cdGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuXHRudW1TZWxlY3RlZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG5cdG9uUmVxdWVzdFNvcnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcblx0b25TZWxlY3RBbGxDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuXHRvcmRlcjogUHJvcFR5cGVzLm9uZU9mKFsnYXNjJywgJ2Rlc2MnXSkuaXNSZXF1aXJlZCxcclxuXHRvcmRlckJ5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcblx0cm93Q291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmNvbnN0IHVzZVRvb2xiYXJTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRyb290OiB7XHJcblx0XHRwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuXHR9LFxyXG5cdGhpZ2hsaWdodDpcclxuXHRcdHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0J1xyXG5cdFx0XHQ/IHtcclxuXHRcdFx0XHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBsaWdodGVuKFxyXG5cdFx0XHRcdFx0XHR0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5saWdodCxcclxuXHRcdFx0XHRcdFx0MC44NVxyXG5cdFx0XHRcdFx0KSxcclxuXHRcdFx0ICB9XHJcblx0XHRcdDoge1xyXG5cdFx0XHRcdFx0Y29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5kYXJrLFxyXG5cdFx0XHQgIH0sXHJcblx0dGl0bGU6IHtcclxuXHRcdGZsZXg6ICcxIDEgMTAwJScsXHJcblx0fSxcclxufSkpO1xyXG5cclxuY29uc3QgRW5oYW5jZWRUYWJsZVRvb2xiYXIgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlVG9vbGJhclN0eWxlcygpO1xyXG5cdGNvbnN0IHsgbnVtU2VsZWN0ZWQgfSA9IHByb3BzO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFRvb2xiYXJcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMucm9vdCwge1xyXG5cdFx0XHRcdFtjbGFzc2VzLmhpZ2hsaWdodF06IG51bVNlbGVjdGVkID4gMCxcclxuXHRcdFx0fSl9PlxyXG5cdFx0XHR7bnVtU2VsZWN0ZWQgPiAwID8gKFxyXG5cdFx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcblx0XHRcdFx0XHRjb2xvcj0naW5oZXJpdCdcclxuXHRcdFx0XHRcdHZhcmlhbnQ9J3N1YnRpdGxlMSdcclxuXHRcdFx0XHRcdGNvbXBvbmVudD0nZGl2Jz5cclxuXHRcdFx0XHRcdHtudW1TZWxlY3RlZH0gc2VsZWN0ZWRcclxuXHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PFR5cG9ncmFwaHlcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cclxuXHRcdFx0XHRcdHZhcmlhbnQ9J2g2J1xyXG5cdFx0XHRcdFx0aWQ9J3RhYmxlVGl0bGUnXHJcblx0XHRcdFx0XHRjb21wb25lbnQ9J2Rpdic+XHJcblx0XHRcdFx0XHRNZXNzYWdlc1xyXG5cdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0KX1cclxuXHJcblx0XHRcdHtudW1TZWxlY3RlZCA+IDAgPyAoXHJcblx0XHRcdFx0PFRvb2x0aXAgdGl0bGU9J0RlbGV0ZSc+XHJcblx0XHRcdFx0XHQ8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPSdkZWxldGUnPlxyXG5cdFx0XHRcdFx0XHQ8RGVsZXRlSWNvbiAvPlxyXG5cdFx0XHRcdFx0PC9JY29uQnV0dG9uPlxyXG5cdFx0XHRcdDwvVG9vbHRpcD5cclxuXHRcdFx0KSA6IChcclxuXHRcdFx0XHQ8VG9vbHRpcCB0aXRsZT0nRmlsdGVyIGxpc3QnPlxyXG5cdFx0XHRcdFx0PEljb25CdXR0b24gYXJpYS1sYWJlbD0nZmlsdGVyIGxpc3QnPlxyXG5cdFx0XHRcdFx0XHQ8RmlsdGVyTGlzdEljb24gLz5cclxuXHRcdFx0XHRcdDwvSWNvbkJ1dHRvbj5cclxuXHRcdFx0XHQ8L1Rvb2x0aXA+XHJcblx0XHRcdCl9XHJcblx0XHQ8L1Rvb2xiYXI+XHJcblx0KTtcclxufTtcclxuXHJcbkVuaGFuY2VkVGFibGVUb29sYmFyLnByb3BUeXBlcyA9IHtcclxuXHRudW1TZWxlY3RlZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuY29uc3QgTGlzdE1lc3NhZ2VzID0gKHsgbWVzc2FnZXMsIG5ld01lc3NhZ2VzIH0pID0+IHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblx0Y29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSBSZWFjdC51c2VTdGF0ZSgnYXNjJyk7XHJcblx0Y29uc3QgW29yZGVyQnksIHNldE9yZGVyQnldID0gUmVhY3QudXNlU3RhdGUoJ2NhbG9yaWVzJyk7XHJcblx0Y29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblx0Y29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblx0Y29uc3QgW2RlbnNlLCBzZXREZW5zZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW3Jvd3NQZXJQYWdlLCBzZXRSb3dzUGVyUGFnZV0gPSBSZWFjdC51c2VTdGF0ZSg1KTtcclxuXHJcblx0Y29uc3QgaGFuZGxlUmVxdWVzdFNvcnQgPSAoZXZlbnQsIHByb3BlcnR5KSA9PiB7XHJcblx0XHRjb25zdCBpc0FzYyA9IG9yZGVyQnkgPT09IHByb3BlcnR5ICYmIG9yZGVyID09PSAnYXNjJztcclxuXHRcdHNldE9yZGVyKGlzQXNjID8gJ2Rlc2MnIDogJ2FzYycpO1xyXG5cdFx0c2V0T3JkZXJCeShwcm9wZXJ0eSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlU2VsZWN0QWxsQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuXHRcdGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xyXG5cdFx0XHRjb25zdCBuZXdTZWxlY3RlZHMgPSBtZXNzYWdlcy5tYXAoKG4pID0+IG4ubmFtZSk7XHJcblx0XHRcdHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkcyk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHNldFNlbGVjdGVkKFtdKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbGljayA9IChldmVudCwgbmFtZSkgPT4ge1xyXG5cdFx0Y29uc3Qgc2VsZWN0ZWRJbmRleCA9IHNlbGVjdGVkLmluZGV4T2YobmFtZSk7XHJcblx0XHRsZXQgbmV3U2VsZWN0ZWQgPSBbXTtcclxuXHJcblx0XHRpZiAoc2VsZWN0ZWRJbmRleCA9PT0gLTEpIHtcclxuXHRcdFx0bmV3U2VsZWN0ZWQgPSBuZXdTZWxlY3RlZC5jb25jYXQoc2VsZWN0ZWQsIG5hbWUpO1xyXG5cdFx0fSBlbHNlIGlmIChzZWxlY3RlZEluZGV4ID09PSAwKSB7XHJcblx0XHRcdG5ld1NlbGVjdGVkID0gbmV3U2VsZWN0ZWQuY29uY2F0KHNlbGVjdGVkLnNsaWNlKDEpKTtcclxuXHRcdH0gZWxzZSBpZiAoc2VsZWN0ZWRJbmRleCA9PT0gc2VsZWN0ZWQubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRuZXdTZWxlY3RlZCA9IG5ld1NlbGVjdGVkLmNvbmNhdChzZWxlY3RlZC5zbGljZSgwLCAtMSkpO1xyXG5cdFx0fSBlbHNlIGlmIChzZWxlY3RlZEluZGV4ID4gMCkge1xyXG5cdFx0XHRuZXdTZWxlY3RlZCA9IG5ld1NlbGVjdGVkLmNvbmNhdChcclxuXHRcdFx0XHRzZWxlY3RlZC5zbGljZSgwLCBzZWxlY3RlZEluZGV4KSxcclxuXHRcdFx0XHRzZWxlY3RlZC5zbGljZShzZWxlY3RlZEluZGV4ICsgMSlcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHJcblx0XHRzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlUGFnZSA9IChldmVudCwgbmV3UGFnZSkgPT4ge1xyXG5cdFx0c2V0UGFnZShuZXdQYWdlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSA9IChldmVudCkgPT4ge1xyXG5cdFx0c2V0Um93c1BlclBhZ2UocGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCkpO1xyXG5cdFx0c2V0UGFnZSgwKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2VEZW5zZSA9IChldmVudCkgPT4ge1xyXG5cdFx0c2V0RGVuc2UoZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGlzU2VsZWN0ZWQgPSAobmFtZSkgPT4gc2VsZWN0ZWQuaW5kZXhPZihuYW1lKSAhPT0gLTE7XHJcblxyXG5cdGNvbnN0IGVtcHR5Um93cyA9XHJcblx0XHRyb3dzUGVyUGFnZSAtXHJcblx0XHRNYXRoLm1pbihyb3dzUGVyUGFnZSwgbWVzc2FnZXMubGVuZ3RoIC0gcGFnZSAqIHJvd3NQZXJQYWdlKTtcclxuXHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldHZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdGVycm9yOiAnJyxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0bWVzc2FnZTogJycsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHsgbG9hZGluZywgc3VjY2VzcywgZXJyb3IsIG1lc3NhZ2UgfSA9IHZhbHVlcztcclxuXHJcblx0Y29uc3QgZGVsZXRlTWVzc2FnZSA9IChpZCkgPT4ge1xyXG5cdFx0c2V0dmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0cmVtb3ZlTWVzc2FnZShpZCwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2RhdGEgdmF1dCcsIGRhdGEpO1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdHNldHZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdGVycm9yOiB0cnVlLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZmFsc2UsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0dmFsdWVzKHtcclxuXHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0ZXJyb3I6ICcnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IGRhdGEudGV4dCxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGVsZXRlQ29uZmlybSA9IChpZCkgPT4ge1xyXG5cdFx0bGV0IGFuc3dlciA9IHdpbmRvdy5jb25maXJtKFxyXG5cdFx0XHRgU3VwcHJlc3Npb24gZHUgbWVzc2FnZSAke2lkfSwgw6p0ZXMtdm91cyBzw7tyID9gXHJcblx0XHQpO1xyXG5cdFx0aWYgKGFuc3dlcikge1xyXG5cdFx0XHRkZWxldGVNZXNzYWdlKGlkKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2xvYWRpbmcgJiYgPFNwaW5uZXIgLz59XHJcblx0XHRcdHtzdWNjZXNzICYmIDxBbGVydCBjb2xvcj0nc3VjY2Vzcyc+e21lc3NhZ2V9PC9BbGVydD59XHJcblx0XHRcdHtlcnJvciAmJiA8QWxlcnQgY29sb3I9J2Rhbmdlcic+VW5lIGVycmV1ciBlc3Qgc3VydmVudWU8L0FsZXJ0Pn1cclxuXHRcdFx0PHAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+Vm91cyBhdmV6IHtuZXdNZXNzYWdlc30gbm9uIGx1cyAhPC9wPlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcblx0XHRcdFx0XHQ8RW5oYW5jZWRUYWJsZVRvb2xiYXIgbnVtU2VsZWN0ZWQ9e3NlbGVjdGVkLmxlbmd0aH0gLz5cclxuXHRcdFx0XHRcdDxUYWJsZUNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdFx0PFRhYmxlXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfVxyXG5cdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWxsZWRieT0ndGFibGVUaXRsZSdcclxuXHRcdFx0XHRcdFx0XHRzaXplPXtkZW5zZSA/ICdzbWFsbCcgOiAnbWVkaXVtJ31cclxuXHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdlbmhhbmNlZCB0YWJsZSc+XHJcblx0XHRcdFx0XHRcdFx0PEVuaGFuY2VkVGFibGVIZWFkXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc2VzPXtjbGFzc2VzfVxyXG5cdFx0XHRcdFx0XHRcdFx0bnVtU2VsZWN0ZWQ9e3NlbGVjdGVkLmxlbmd0aH1cclxuXHRcdFx0XHRcdFx0XHRcdG9yZGVyPXtvcmRlcn1cclxuXHRcdFx0XHRcdFx0XHRcdG9yZGVyQnk9e29yZGVyQnl9XHJcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdEFsbENsaWNrPXtoYW5kbGVTZWxlY3RBbGxDbGlja31cclxuXHRcdFx0XHRcdFx0XHRcdG9uUmVxdWVzdFNvcnQ9e2hhbmRsZVJlcXVlc3RTb3J0fVxyXG5cdFx0XHRcdFx0XHRcdFx0cm93Q291bnQ9e21lc3NhZ2VzLmxlbmd0aH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxUYWJsZUJvZHk+XHJcblx0XHRcdFx0XHRcdFx0XHR7c3RhYmxlU29ydChcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWVzc2FnZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdldENvbXBhcmF0b3Iob3JkZXIsIG9yZGVyQnkpXHJcblx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5zbGljZShcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYWdlICogcm93c1BlclBhZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFnZSAqIHJvd3NQZXJQYWdlICsgcm93c1BlclBhZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQubWFwKChtc2dlLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGlzSXRlbVNlbGVjdGVkID0gaXNTZWxlY3RlZChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1zZ2UuX2lkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBsYWJlbElkID0gYGVuaGFuY2VkLXRhYmxlLWNoZWNrYm94LSR7aW5kZXh9YDtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZVJvd1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRob3ZlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlQ2xpY2soZXZlbnQsIG1zZ2UuX2lkKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJvbGU9J2NoZWNrYm94J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWNoZWNrZWQ9e2lzSXRlbVNlbGVjdGVkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YWJJbmRleD17LTF9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17bXNnZS5faWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkPXtpc0l0ZW1TZWxlY3RlZH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGwgcGFkZGluZz0nY2hlY2tib3gnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxDaGVja2JveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17aXNJdGVtU2VsZWN0ZWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdhcmlhLWxhYmVsbGVkYnknOiBsYWJlbElkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudD0ndGgnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2xhYmVsSWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2NvcGU9J3JvdydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nPSdub25lJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bXNnZS5faWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsIGFsaWduPSdyaWdodCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e21zZ2Uubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbCBhbGlnbj0ncmlnaHQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHttc2dlLm1haWx9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsIGFsaWduPSdyaWdodCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e21zZ2UudGVsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbCBhbGlnbj0ncmlnaHQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHttc2dlLm1zZ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlUm93PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0e2VtcHR5Um93cyA+IDAgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVSb3dcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoZGVuc2UgPyAzMyA6IDUzKSAqIGVtcHR5Um93cyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsIGNvbFNwYW49ezZ9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVSb3c+XHJcblx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdDwvVGFibGVCb2R5PlxyXG5cdFx0XHRcdFx0XHQ8L1RhYmxlPlxyXG5cdFx0XHRcdFx0PC9UYWJsZUNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdDxUYWJsZVBhZ2luYXRpb25cclxuXHRcdFx0XHRcdFx0cm93c1BlclBhZ2VPcHRpb25zPXtbNSwgMTAsIDI1XX1cclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50PSdkaXYnXHJcblx0XHRcdFx0XHRcdGNvdW50PXttZXNzYWdlcy5sZW5ndGh9XHJcblx0XHRcdFx0XHRcdHJvd3NQZXJQYWdlPXtyb3dzUGVyUGFnZX1cclxuXHRcdFx0XHRcdFx0cGFnZT17cGFnZX1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2VQYWdlPXtoYW5kbGVDaGFuZ2VQYWdlfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZVJvd3NQZXJQYWdlPXtoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0Y29udHJvbD17XHJcblx0XHRcdFx0XHRcdDxTd2l0Y2ggY2hlY2tlZD17ZGVuc2V9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VEZW5zZX0gLz5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGxhYmVsPSdBZmZpY2hhZ2UgcGV0aXQnXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdE1lc3NhZ2VzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9