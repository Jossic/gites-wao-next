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
  disablePadding: false,
  label: '#ID'
}, {
  id: 'Nom',
  numeric: false,
  disablePadding: false,
  label: 'nom'
}, {
  id: 'Mai',
  numeric: false,
  disablePadding: false,
  label: 'mail'
}, {
  id: 'Tel',
  numeric: true,
  disablePadding: false,
  label: 'tel'
}, {
  id: 'msg',
  numeric: false,
  disablePadding: false,
  label: 'msg'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0TWVzc2FnZXMuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwicGFwZXIiLCJtYXJnaW5Cb3R0b20iLCJzcGFjaW5nIiwidGFibGUiLCJtaW5XaWR0aCIsInZpc3VhbGx5SGlkZGVuIiwiYm9yZGVyIiwiY2xpcCIsImhlaWdodCIsIm1hcmdpbiIsIm92ZXJmbG93IiwicGFkZGluZyIsInBvc2l0aW9uIiwidG9wIiwiZGVzY2VuZGluZ0NvbXBhcmF0b3IiLCJhIiwiYiIsIm9yZGVyQnkiLCJnZXRDb21wYXJhdG9yIiwib3JkZXIiLCJzdGFibGVTb3J0IiwiYXJyYXkiLCJjb21wYXJhdG9yIiwic3RhYmlsaXplZFRoaXMiLCJtYXAiLCJlbCIsImluZGV4Iiwic29ydCIsImhlYWRDZWxscyIsImlkIiwibnVtZXJpYyIsImRpc2FibGVQYWRkaW5nIiwibGFiZWwiLCJFbmhhbmNlZFRhYmxlSGVhZCIsInByb3BzIiwiY2xhc3NlcyIsIm9uU2VsZWN0QWxsQ2xpY2siLCJudW1TZWxlY3RlZCIsInJvd0NvdW50Iiwib25SZXF1ZXN0U29ydCIsImNyZWF0ZVNvcnRIYW5kbGVyIiwicHJvcGVydHkiLCJldmVudCIsImhlYWRDZWxsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImZ1bmMiLCJvbmVPZiIsInN0cmluZyIsInVzZVRvb2xiYXJTdHlsZXMiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImhpZ2hsaWdodCIsInBhbGV0dGUiLCJ0eXBlIiwiY29sb3IiLCJzZWNvbmRhcnkiLCJtYWluIiwiYmFja2dyb3VuZENvbG9yIiwibGlnaHRlbiIsImxpZ2h0IiwidGV4dCIsInByaW1hcnkiLCJkYXJrIiwidGl0bGUiLCJmbGV4IiwiRW5oYW5jZWRUYWJsZVRvb2xiYXIiLCJjbHN4IiwiTGlzdE1lc3NhZ2VzIiwibWVzc2FnZXMiLCJuZXdNZXNzYWdlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZXRPcmRlciIsInNldE9yZGVyQnkiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwicGFnZSIsInNldFBhZ2UiLCJkZW5zZSIsInNldERlbnNlIiwicm93c1BlclBhZ2UiLCJzZXRSb3dzUGVyUGFnZSIsImhhbmRsZVJlcXVlc3RTb3J0IiwiaXNBc2MiLCJoYW5kbGVTZWxlY3RBbGxDbGljayIsInRhcmdldCIsImNoZWNrZWQiLCJuZXdTZWxlY3RlZHMiLCJuIiwibmFtZSIsImhhbmRsZUNsaWNrIiwic2VsZWN0ZWRJbmRleCIsImluZGV4T2YiLCJuZXdTZWxlY3RlZCIsImNvbmNhdCIsInNsaWNlIiwibGVuZ3RoIiwiaGFuZGxlQ2hhbmdlUGFnZSIsIm5ld1BhZ2UiLCJoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSIsInBhcnNlSW50IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2VEZW5zZSIsImlzU2VsZWN0ZWQiLCJlbXB0eVJvd3MiLCJNYXRoIiwibWluIiwidG9rZW4iLCJnZXRDb29raWUiLCJsb2FkaW5nIiwiZXJyb3IiLCJzdWNjZXNzIiwibWVzc2FnZSIsInZhbHVlcyIsInNldHZhbHVlcyIsImRlbGV0ZU1lc3NhZ2UiLCJyZW1vdmVNZXNzYWdlIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlQ29uZmlybSIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJtc2dlIiwiaXNJdGVtU2VsZWN0ZWQiLCJfaWQiLCJsYWJlbElkIiwibm9tIiwibWFpbCIsInRlbCIsIm1zZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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UDtBQU1DLGdCQUFZLEVBQUVxQixnQkFOZjtBQU9DLHVCQUFtQixFQUFFRSx1QkFQdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJGRCxDQURELEVBZ0dDLE1BQUMsMkVBQUQ7QUFDQyxXQUFPLEVBQ04sTUFBQyxpRUFBRDtBQUFRLGFBQU8sRUFBRXJCLEtBQWpCO0FBQXdCLGNBQVEsRUFBRXdCLGlCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkY7QUFJQyxTQUFLLEVBQUMsaUJBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhHRCxDQU5ELENBREQ7QUFnSEEsQ0ExTkQ7O0lBQU1uQyxZO1VBQ1c1RSxTOzs7TUFEWDRFLFk7QUE0TlNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL21lc3NhZ2VzLjExNDczMzhkNmFjMDBhZjNhZDYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBUYWJsZSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgQWxlcnQsIFNwaW5uZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgcmVtb3ZlTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvbWVzc2FnZUFjdGlvbnMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgbGlnaHRlbiwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XHJcbmltcG9ydCBUYWJsZVBhZ2luYXRpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVQYWdpbmF0aW9uJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcclxuaW1wb3J0IFRhYmxlU29ydExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlU29ydExhYmVsJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N3aXRjaCc7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EZWxldGUnO1xyXG5pbXBvcnQgRmlsdGVyTGlzdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZpbHRlckxpc3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHR9LFxyXG5cdHBhcGVyOiB7XHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0bWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdH0sXHJcblx0dGFibGU6IHtcclxuXHRcdG1pbldpZHRoOiA3NTAsXHJcblx0fSxcclxuXHR2aXN1YWxseUhpZGRlbjoge1xyXG5cdFx0Ym9yZGVyOiAwLFxyXG5cdFx0Y2xpcDogJ3JlY3QoMCAwIDAgMCknLFxyXG5cdFx0aGVpZ2h0OiAxLFxyXG5cdFx0bWFyZ2luOiAtMSxcclxuXHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcclxuXHRcdHBhZGRpbmc6IDAsXHJcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuXHRcdHRvcDogMjAsXHJcblx0XHR3aWR0aDogMSxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBkZXNjZW5kaW5nQ29tcGFyYXRvcihhLCBiLCBvcmRlckJ5KSB7XHJcblx0aWYgKGJbb3JkZXJCeV0gPCBhW29yZGVyQnldKSB7XHJcblx0XHRyZXR1cm4gLTE7XHJcblx0fVxyXG5cdGlmIChiW29yZGVyQnldID4gYVtvcmRlckJ5XSkge1xyXG5cdFx0cmV0dXJuIDE7XHJcblx0fVxyXG5cdHJldHVybiAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb21wYXJhdG9yKG9yZGVyLCBvcmRlckJ5KSB7XHJcblx0cmV0dXJuIG9yZGVyID09PSAnZGVzYydcclxuXHRcdD8gKGEsIGIpID0+IGRlc2NlbmRpbmdDb21wYXJhdG9yKGEsIGIsIG9yZGVyQnkpXHJcblx0XHQ6IChhLCBiKSA9PiAtZGVzY2VuZGluZ0NvbXBhcmF0b3IoYSwgYiwgb3JkZXJCeSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YWJsZVNvcnQoYXJyYXksIGNvbXBhcmF0b3IpIHtcclxuXHRjb25zdCBzdGFiaWxpemVkVGhpcyA9IGFycmF5Lm1hcCgoZWwsIGluZGV4KSA9PiBbZWwsIGluZGV4XSk7XHJcblx0c3RhYmlsaXplZFRoaXMuc29ydCgoYSwgYikgPT4ge1xyXG5cdFx0Y29uc3Qgb3JkZXIgPSBjb21wYXJhdG9yKGFbMF0sIGJbMF0pO1xyXG5cdFx0aWYgKG9yZGVyICE9PSAwKSByZXR1cm4gb3JkZXI7XHJcblx0XHRyZXR1cm4gYVsxXSAtIGJbMV07XHJcblx0fSk7XHJcblx0cmV0dXJuIHN0YWJpbGl6ZWRUaGlzLm1hcCgoZWwpID0+IGVsWzBdKTtcclxufVxyXG5cclxuY29uc3QgaGVhZENlbGxzID0gW1xyXG5cdHsgaWQ6ICcjSUQnLCBudW1lcmljOiB0cnVlLCBkaXNhYmxlUGFkZGluZzogZmFsc2UsIGxhYmVsOiAnI0lEJyB9LFxyXG5cdHsgaWQ6ICdOb20nLCBudW1lcmljOiBmYWxzZSwgZGlzYWJsZVBhZGRpbmc6IGZhbHNlLCBsYWJlbDogJ25vbScgfSxcclxuXHR7IGlkOiAnTWFpJywgbnVtZXJpYzogZmFsc2UsIGRpc2FibGVQYWRkaW5nOiBmYWxzZSwgbGFiZWw6ICdtYWlsJyB9LFxyXG5cdHsgaWQ6ICdUZWwnLCBudW1lcmljOiB0cnVlLCBkaXNhYmxlUGFkZGluZzogZmFsc2UsIGxhYmVsOiAndGVsJyB9LFxyXG5cdHsgaWQ6ICdtc2cnLCBudW1lcmljOiBmYWxzZSwgZGlzYWJsZVBhZGRpbmc6IGZhbHNlLCBsYWJlbDogJ21zZycgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIEVuaGFuY2VkVGFibGVIZWFkKHByb3BzKSB7XHJcblx0Y29uc3Qge1xyXG5cdFx0Y2xhc3NlcyxcclxuXHRcdG9uU2VsZWN0QWxsQ2xpY2ssXHJcblx0XHRvcmRlcixcclxuXHRcdG9yZGVyQnksXHJcblx0XHRudW1TZWxlY3RlZCxcclxuXHRcdHJvd0NvdW50LFxyXG5cdFx0b25SZXF1ZXN0U29ydCxcclxuXHR9ID0gcHJvcHM7XHJcblx0Y29uc3QgY3JlYXRlU29ydEhhbmRsZXIgPSAocHJvcGVydHkpID0+IChldmVudCkgPT4ge1xyXG5cdFx0b25SZXF1ZXN0U29ydChldmVudCwgcHJvcGVydHkpO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8VGFibGVIZWFkPlxyXG5cdFx0XHQ8VGFibGVSb3c+XHJcblx0XHRcdFx0PFRhYmxlQ2VsbCBwYWRkaW5nPSdjaGVja2JveCc+XHJcblx0XHRcdFx0XHQ8Q2hlY2tib3hcclxuXHRcdFx0XHRcdFx0aW5kZXRlcm1pbmF0ZT17XHJcblx0XHRcdFx0XHRcdFx0bnVtU2VsZWN0ZWQgPiAwICYmIG51bVNlbGVjdGVkIDwgcm93Q291bnRcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRjaGVja2VkPXtyb3dDb3VudCA+IDAgJiYgbnVtU2VsZWN0ZWQgPT09IHJvd0NvdW50fVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17b25TZWxlY3RBbGxDbGlja31cclxuXHRcdFx0XHRcdFx0aW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbCc6ICdzZWxlY3QgYWxsIGRlc3NlcnRzJyB9fVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHR7aGVhZENlbGxzLm1hcCgoaGVhZENlbGwpID0+IChcclxuXHRcdFx0XHRcdDxUYWJsZUNlbGxcclxuXHRcdFx0XHRcdFx0a2V5PXtoZWFkQ2VsbC5pZH1cclxuXHRcdFx0XHRcdFx0YWxpZ249e2hlYWRDZWxsLm51bWVyaWMgPyAncmlnaHQnIDogJ2xlZnQnfVxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nPXtoZWFkQ2VsbC5kaXNhYmxlUGFkZGluZyA/ICdub25lJyA6ICdkZWZhdWx0J31cclxuXHRcdFx0XHRcdFx0c29ydERpcmVjdGlvbj17b3JkZXJCeSA9PT0gaGVhZENlbGwuaWQgPyBvcmRlciA6IGZhbHNlfT5cclxuXHRcdFx0XHRcdFx0PFRhYmxlU29ydExhYmVsXHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlPXtvcmRlckJ5ID09PSBoZWFkQ2VsbC5pZH1cclxuXHRcdFx0XHRcdFx0XHRkaXJlY3Rpb249e29yZGVyQnkgPT09IGhlYWRDZWxsLmlkID8gb3JkZXIgOiAnYXNjJ31cclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtjcmVhdGVTb3J0SGFuZGxlcihoZWFkQ2VsbC5pZCl9PlxyXG5cdFx0XHRcdFx0XHRcdHtoZWFkQ2VsbC5sYWJlbH1cclxuXHRcdFx0XHRcdFx0XHR7b3JkZXJCeSA9PT0gaGVhZENlbGwuaWQgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudmlzdWFsbHlIaWRkZW59PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7b3JkZXIgPT09ICdkZXNjJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD8gJ3NvcnRlZCBkZXNjZW5kaW5nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDogJ3NvcnRlZCBhc2NlbmRpbmcnfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdCkgOiBudWxsfVxyXG5cdFx0XHRcdFx0XHQ8L1RhYmxlU29ydExhYmVsPlxyXG5cdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvVGFibGVSb3c+XHJcblx0XHQ8L1RhYmxlSGVhZD5cclxuXHQpO1xyXG59XHJcblxyXG5FbmhhbmNlZFRhYmxlSGVhZC5wcm9wVHlwZXMgPSB7XHJcblx0Y2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG5cdG51bVNlbGVjdGVkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcblx0b25SZXF1ZXN0U29ydDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuXHRvblNlbGVjdEFsbENsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG5cdG9yZGVyOiBQcm9wVHlwZXMub25lT2YoWydhc2MnLCAnZGVzYyddKS5pc1JlcXVpcmVkLFxyXG5cdG9yZGVyQnk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuXHRyb3dDb3VudDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuY29uc3QgdXNlVG9vbGJhclN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0cGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG5cdH0sXHJcblx0aGlnaGxpZ2h0OlxyXG5cdFx0dGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnXHJcblx0XHRcdD8ge1xyXG5cdFx0XHRcdFx0Y29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGxpZ2h0ZW4oXHJcblx0XHRcdFx0XHRcdHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmxpZ2h0LFxyXG5cdFx0XHRcdFx0XHQwLjg1XHJcblx0XHRcdFx0XHQpLFxyXG5cdFx0XHQgIH1cclxuXHRcdFx0OiB7XHJcblx0XHRcdFx0XHRjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmssXHJcblx0XHRcdCAgfSxcclxuXHR0aXRsZToge1xyXG5cdFx0ZmxleDogJzEgMSAxMDAlJyxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5jb25zdCBFbmhhbmNlZFRhYmxlVG9vbGJhciA9IChwcm9wcykgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VUb29sYmFyU3R5bGVzKCk7XHJcblx0Y29uc3QgeyBudW1TZWxlY3RlZCB9ID0gcHJvcHM7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8VG9vbGJhclxyXG5cdFx0XHRjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5yb290LCB7XHJcblx0XHRcdFx0W2NsYXNzZXMuaGlnaGxpZ2h0XTogbnVtU2VsZWN0ZWQgPiAwLFxyXG5cdFx0XHR9KX0+XHJcblx0XHRcdHtudW1TZWxlY3RlZCA+IDAgPyAoXHJcblx0XHRcdFx0PFR5cG9ncmFwaHlcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cclxuXHRcdFx0XHRcdGNvbG9yPSdpbmhlcml0J1xyXG5cdFx0XHRcdFx0dmFyaWFudD0nc3VidGl0bGUxJ1xyXG5cdFx0XHRcdFx0Y29tcG9uZW50PSdkaXYnPlxyXG5cdFx0XHRcdFx0e251bVNlbGVjdGVkfSBzZWxlY3RlZFxyXG5cdFx0XHRcdDwvVHlwb2dyYXBoeT5cclxuXHRcdFx0KSA6IChcclxuXHRcdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxyXG5cdFx0XHRcdFx0dmFyaWFudD0naDYnXHJcblx0XHRcdFx0XHRpZD0ndGFibGVUaXRsZSdcclxuXHRcdFx0XHRcdGNvbXBvbmVudD0nZGl2Jz5cclxuXHRcdFx0XHRcdE1lc3NhZ2VzXHJcblx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHQpfVxyXG5cclxuXHRcdFx0e251bVNlbGVjdGVkID4gMCA/IChcclxuXHRcdFx0XHQ8VG9vbHRpcCB0aXRsZT0nRGVsZXRlJz5cclxuXHRcdFx0XHRcdDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9J2RlbGV0ZSc+XHJcblx0XHRcdFx0XHRcdDxEZWxldGVJY29uIC8+XHJcblx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblx0XHRcdFx0PC9Ub29sdGlwPlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDxUb29sdGlwIHRpdGxlPSdGaWx0ZXIgbGlzdCc+XHJcblx0XHRcdFx0XHQ8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPSdmaWx0ZXIgbGlzdCc+XHJcblx0XHRcdFx0XHRcdDxGaWx0ZXJMaXN0SWNvbiAvPlxyXG5cdFx0XHRcdFx0PC9JY29uQnV0dG9uPlxyXG5cdFx0XHRcdDwvVG9vbHRpcD5cclxuXHRcdFx0KX1cclxuXHRcdDwvVG9vbGJhcj5cclxuXHQpO1xyXG59O1xyXG5cclxuRW5oYW5jZWRUYWJsZVRvb2xiYXIucHJvcFR5cGVzID0ge1xyXG5cdG51bVNlbGVjdGVkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5jb25zdCBMaXN0TWVzc2FnZXMgPSAoeyBtZXNzYWdlcywgbmV3TWVzc2FnZXMgfSkgPT4ge1xyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHRjb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IFJlYWN0LnVzZVN0YXRlKCdhc2MnKTtcclxuXHRjb25zdCBbb3JkZXJCeSwgc2V0T3JkZXJCeV0gPSBSZWFjdC51c2VTdGF0ZSgnY2Fsb3JpZXMnKTtcclxuXHRjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuXHRjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHRjb25zdCBbZGVuc2UsIHNldERlbnNlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbcm93c1BlclBhZ2UsIHNldFJvd3NQZXJQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDUpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVSZXF1ZXN0U29ydCA9IChldmVudCwgcHJvcGVydHkpID0+IHtcclxuXHRcdGNvbnN0IGlzQXNjID0gb3JkZXJCeSA9PT0gcHJvcGVydHkgJiYgb3JkZXIgPT09ICdhc2MnO1xyXG5cdFx0c2V0T3JkZXIoaXNBc2MgPyAnZGVzYycgOiAnYXNjJyk7XHJcblx0XHRzZXRPcmRlckJ5KHByb3BlcnR5KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVTZWxlY3RBbGxDbGljayA9IChldmVudCkgPT4ge1xyXG5cdFx0aWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XHJcblx0XHRcdGNvbnN0IG5ld1NlbGVjdGVkcyA9IG1lc3NhZ2VzLm1hcCgobikgPT4gbi5uYW1lKTtcclxuXHRcdFx0c2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWRzKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0c2V0U2VsZWN0ZWQoW10pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50LCBuYW1lKSA9PiB7XHJcblx0XHRjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0ZWQuaW5kZXhPZihuYW1lKTtcclxuXHRcdGxldCBuZXdTZWxlY3RlZCA9IFtdO1xyXG5cclxuXHRcdGlmIChzZWxlY3RlZEluZGV4ID09PSAtMSkge1xyXG5cdFx0XHRuZXdTZWxlY3RlZCA9IG5ld1NlbGVjdGVkLmNvbmNhdChzZWxlY3RlZCwgbmFtZSk7XHJcblx0XHR9IGVsc2UgaWYgKHNlbGVjdGVkSW5kZXggPT09IDApIHtcclxuXHRcdFx0bmV3U2VsZWN0ZWQgPSBuZXdTZWxlY3RlZC5jb25jYXQoc2VsZWN0ZWQuc2xpY2UoMSkpO1xyXG5cdFx0fSBlbHNlIGlmIChzZWxlY3RlZEluZGV4ID09PSBzZWxlY3RlZC5sZW5ndGggLSAxKSB7XHJcblx0XHRcdG5ld1NlbGVjdGVkID0gbmV3U2VsZWN0ZWQuY29uY2F0KHNlbGVjdGVkLnNsaWNlKDAsIC0xKSk7XHJcblx0XHR9IGVsc2UgaWYgKHNlbGVjdGVkSW5kZXggPiAwKSB7XHJcblx0XHRcdG5ld1NlbGVjdGVkID0gbmV3U2VsZWN0ZWQuY29uY2F0KFxyXG5cdFx0XHRcdHNlbGVjdGVkLnNsaWNlKDAsIHNlbGVjdGVkSW5kZXgpLFxyXG5cdFx0XHRcdHNlbGVjdGVkLnNsaWNlKHNlbGVjdGVkSW5kZXggKyAxKVxyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2VQYWdlID0gKGV2ZW50LCBuZXdQYWdlKSA9PiB7XHJcblx0XHRzZXRQYWdlKG5ld1BhZ2UpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRzZXRSb3dzUGVyUGFnZShwYXJzZUludChldmVudC50YXJnZXQudmFsdWUsIDEwKSk7XHJcblx0XHRzZXRQYWdlKDApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZURlbnNlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRzZXREZW5zZShldmVudC50YXJnZXQuY2hlY2tlZCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaXNTZWxlY3RlZCA9IChuYW1lKSA9PiBzZWxlY3RlZC5pbmRleE9mKG5hbWUpICE9PSAtMTtcclxuXHJcblx0Y29uc3QgZW1wdHlSb3dzID1cclxuXHRcdHJvd3NQZXJQYWdlIC1cclxuXHRcdE1hdGgubWluKHJvd3NQZXJQYWdlLCBtZXNzYWdlcy5sZW5ndGggLSBwYWdlICogcm93c1BlclBhZ2UpO1xyXG5cclxuXHRjb25zdCB0b2tlbiA9IGdldENvb2tpZSgndG9rZW4nKTtcclxuXHJcblx0Y29uc3QgW3ZhbHVlcywgc2V0dmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuXHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0ZXJyb3I6ICcnLFxyXG5cdFx0c3VjY2VzczogJycsXHJcblx0XHRtZXNzYWdlOiAnJyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgeyBsb2FkaW5nLCBzdWNjZXNzLCBlcnJvciwgbWVzc2FnZSB9ID0gdmFsdWVzO1xyXG5cclxuXHRjb25zdCBkZWxldGVNZXNzYWdlID0gKGlkKSA9PiB7XHJcblx0XHRzZXR2YWx1ZXMoeyAuLi52YWx1ZXMsIGxvYWRpbmc6IHRydWUgfSk7XHJcblx0XHRyZW1vdmVNZXNzYWdlKGlkLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZGF0YSB2YXV0JywgZGF0YSk7XHJcblx0XHRcdGlmIChkYXRhLmVycm9yKSB7XHJcblx0XHRcdFx0c2V0dmFsdWVzKHtcclxuXHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0ZXJyb3I6IHRydWUsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmYWxzZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXR2YWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0XHRlcnJvcjogJycsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiB0cnVlLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogZGF0YS50ZXh0LFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkZWxldGVDb25maXJtID0gKGlkKSA9PiB7XHJcblx0XHRsZXQgYW5zd2VyID0gd2luZG93LmNvbmZpcm0oXHJcblx0XHRcdGBTdXBwcmVzc2lvbiBkdSBtZXNzYWdlICR7aWR9LCDDqnRlcy12b3VzIHPDu3IgP2BcclxuXHRcdCk7XHJcblx0XHRpZiAoYW5zd2VyKSB7XHJcblx0XHRcdGRlbGV0ZU1lc3NhZ2UoaWQpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7bG9hZGluZyAmJiA8U3Bpbm5lciAvPn1cclxuXHRcdFx0e3N1Y2Nlc3MgJiYgPEFsZXJ0IGNvbG9yPSdzdWNjZXNzJz57bWVzc2FnZX08L0FsZXJ0Pn1cclxuXHRcdFx0e2Vycm9yICYmIDxBbGVydCBjb2xvcj0nZGFuZ2VyJz5VbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZTwvQWxlcnQ+fVxyXG5cdFx0XHQ8cCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5Wb3VzIGF2ZXoge25ld01lc3NhZ2VzfSBub24gbHVzICE8L3A+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuXHRcdFx0XHQ8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cclxuXHRcdFx0XHRcdDxFbmhhbmNlZFRhYmxlVG9vbGJhciBudW1TZWxlY3RlZD17c2VsZWN0ZWQubGVuZ3RofSAvPlxyXG5cdFx0XHRcdFx0PFRhYmxlQ29udGFpbmVyPlxyXG5cdFx0XHRcdFx0XHQ8VGFibGVcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGFibGV9XHJcblx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbGxlZGJ5PSd0YWJsZVRpdGxlJ1xyXG5cdFx0XHRcdFx0XHRcdHNpemU9e2RlbnNlID8gJ3NtYWxsJyA6ICdtZWRpdW0nfVxyXG5cdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9J2VuaGFuY2VkIHRhYmxlJz5cclxuXHRcdFx0XHRcdFx0XHQ8RW5oYW5jZWRUYWJsZUhlYWRcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzZXM9e2NsYXNzZXN9XHJcblx0XHRcdFx0XHRcdFx0XHRudW1TZWxlY3RlZD17c2VsZWN0ZWQubGVuZ3RofVxyXG5cdFx0XHRcdFx0XHRcdFx0b3JkZXI9e29yZGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0b3JkZXJCeT17b3JkZXJCeX1cclxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0QWxsQ2xpY2s9e2hhbmRsZVNlbGVjdEFsbENsaWNrfVxyXG5cdFx0XHRcdFx0XHRcdFx0b25SZXF1ZXN0U29ydD17aGFuZGxlUmVxdWVzdFNvcnR9XHJcblx0XHRcdFx0XHRcdFx0XHRyb3dDb3VudD17bWVzc2FnZXMubGVuZ3RofVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PFRhYmxlQm9keT5cclxuXHRcdFx0XHRcdFx0XHRcdHtzdGFibGVTb3J0KFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Z2V0Q29tcGFyYXRvcihvcmRlciwgb3JkZXJCeSlcclxuXHRcdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnNsaWNlKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhZ2UgKiByb3dzUGVyUGFnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYWdlICogcm93c1BlclBhZ2UgKyByb3dzUGVyUGFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5tYXAoKG1zZ2UsIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgaXNJdGVtU2VsZWN0ZWQgPSBpc1NlbGVjdGVkKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bXNnZS5faWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGxhYmVsSWQgPSBgZW5oYW5jZWQtdGFibGUtY2hlY2tib3gtJHtpbmRleH1gO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlUm93XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhvdmVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVDbGljayhldmVudCwgbXNnZS5faWQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cm9sZT0nY2hlY2tib3gnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtY2hlY2tlZD17aXNJdGVtU2VsZWN0ZWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhYkluZGV4PXstMX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXttc2dlLl9pZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWQ9e2lzSXRlbVNlbGVjdGVkfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbCBwYWRkaW5nPSdjaGVja2JveCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXtpc0l0ZW1TZWxlY3RlZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlucHV0UHJvcHM9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2FyaWEtbGFiZWxsZWRieSc6IGxhYmVsSWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29tcG9uZW50PSd0aCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD17bGFiZWxJZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzY29wZT0ncm93J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhZGRpbmc9J25vbmUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHttc2dlLl9pZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGwgYWxpZ249J3JpZ2h0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bXNnZS5ub219XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsIGFsaWduPSdyaWdodCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e21zZ2UubWFpbH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGwgYWxpZ249J3JpZ2h0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bXNnZS50ZWx9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsIGFsaWduPSdyaWdodCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e21zZ2UubXNnfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVSb3c+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRcdFx0XHR7ZW1wdHlSb3dzID4gMCAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZVJvd1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdChkZW5zZSA/IDMzIDogNTMpICogZW1wdHlSb3dzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGwgY29sU3Bhbj17Nn0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZVJvdz5cclxuXHRcdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdFx0PC9UYWJsZUJvZHk+XHJcblx0XHRcdFx0XHRcdDwvVGFibGU+XHJcblx0XHRcdFx0XHQ8L1RhYmxlQ29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PFRhYmxlUGFnaW5hdGlvblxyXG5cdFx0XHRcdFx0XHRyb3dzUGVyUGFnZU9wdGlvbnM9e1s1LCAxMCwgMjVdfVxyXG5cdFx0XHRcdFx0XHRjb21wb25lbnQ9J2RpdidcclxuXHRcdFx0XHRcdFx0Y291bnQ9e21lc3NhZ2VzLmxlbmd0aH1cclxuXHRcdFx0XHRcdFx0cm93c1BlclBhZ2U9e3Jvd3NQZXJQYWdlfVxyXG5cdFx0XHRcdFx0XHRwYWdlPXtwYWdlfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZVBhZ2U9e2hhbmRsZUNoYW5nZVBhZ2V9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlUm93c1BlclBhZ2U9e2hhbmRsZUNoYW5nZVJvd3NQZXJQYWdlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L1BhcGVyPlxyXG5cdFx0XHRcdDxGb3JtQ29udHJvbExhYmVsXHJcblx0XHRcdFx0XHRjb250cm9sPXtcclxuXHRcdFx0XHRcdFx0PFN3aXRjaCBjaGVja2VkPXtkZW5zZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZURlbnNlfSAvPlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bGFiZWw9J0FmZmljaGFnZSBwZXRpdCdcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0TWVzc2FnZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=