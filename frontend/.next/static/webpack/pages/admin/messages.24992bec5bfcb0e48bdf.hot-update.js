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
  numeric: false,
  disablePadding: true,
  label: '#ID'
}, {
  id: 'Nom',
  numeric: true,
  disablePadding: false,
  label: 'Nom'
}, {
  id: 'Mai',
  numeric: true,
  disablePadding: false,
  label: 'Mai'
}, {
  id: 'Tel',
  numeric: true,
  disablePadding: false,
  label: 'Tel'
}, {
  id: 'Message',
  numeric: true,
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
      var newSelecteds = rows.map(function (n) {
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
    var isItemSelected = isSelected(msge.name);
    var labelId = "enhanced-table-checkbox-".concat(index);
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_15__["default"], {
      hover: true,
      onClick: function onClick(event) {
        return handleClick(event, msge.name);
      },
      role: "checkbox",
      "aria-checked": isItemSelected,
      tabIndex: -1,
      key: msge.name,
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
        lineNumber: 381,
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
        lineNumber: 382,
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
        lineNumber: 389,
        columnNumber: 13
      }
    }, msge._id), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__["default"], {
      align: "right",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 13
      }
    }, msge.nom), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__["default"], {
      align: "right",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 13
      }
    }, msge.mail), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__["default"], {
      align: "right",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 13
      }
    }, msge.tel), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__["default"], {
      align: "right",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405,
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
      lineNumber: 412,
      columnNumber: 10
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__["default"], {
    colSpan: 6,
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
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
      lineNumber: 423,
      columnNumber: 6
    }
  })), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_23__["default"], {
    control: __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_24__["default"], {
      checked: dense,
      onChange: handleChangeDense,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 7
      }
    }),
    label: "Affichage petit",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0TWVzc2FnZXMuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwicGFwZXIiLCJtYXJnaW5Cb3R0b20iLCJzcGFjaW5nIiwidGFibGUiLCJtaW5XaWR0aCIsInZpc3VhbGx5SGlkZGVuIiwiYm9yZGVyIiwiY2xpcCIsImhlaWdodCIsIm1hcmdpbiIsIm92ZXJmbG93IiwicGFkZGluZyIsInBvc2l0aW9uIiwidG9wIiwiZGVzY2VuZGluZ0NvbXBhcmF0b3IiLCJhIiwiYiIsIm9yZGVyQnkiLCJnZXRDb21wYXJhdG9yIiwib3JkZXIiLCJzdGFibGVTb3J0IiwiYXJyYXkiLCJjb21wYXJhdG9yIiwic3RhYmlsaXplZFRoaXMiLCJtYXAiLCJlbCIsImluZGV4Iiwic29ydCIsImhlYWRDZWxscyIsImlkIiwibnVtZXJpYyIsImRpc2FibGVQYWRkaW5nIiwibGFiZWwiLCJFbmhhbmNlZFRhYmxlSGVhZCIsInByb3BzIiwiY2xhc3NlcyIsIm9uU2VsZWN0QWxsQ2xpY2siLCJudW1TZWxlY3RlZCIsInJvd0NvdW50Iiwib25SZXF1ZXN0U29ydCIsImNyZWF0ZVNvcnRIYW5kbGVyIiwicHJvcGVydHkiLCJldmVudCIsImhlYWRDZWxsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImZ1bmMiLCJvbmVPZiIsInN0cmluZyIsInVzZVRvb2xiYXJTdHlsZXMiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImhpZ2hsaWdodCIsInBhbGV0dGUiLCJ0eXBlIiwiY29sb3IiLCJzZWNvbmRhcnkiLCJtYWluIiwiYmFja2dyb3VuZENvbG9yIiwibGlnaHRlbiIsImxpZ2h0IiwidGV4dCIsInByaW1hcnkiLCJkYXJrIiwidGl0bGUiLCJmbGV4IiwiRW5oYW5jZWRUYWJsZVRvb2xiYXIiLCJjbHN4IiwiTGlzdE1lc3NhZ2VzIiwibWVzc2FnZXMiLCJuZXdNZXNzYWdlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZXRPcmRlciIsInNldE9yZGVyQnkiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwicGFnZSIsInNldFBhZ2UiLCJkZW5zZSIsInNldERlbnNlIiwicm93c1BlclBhZ2UiLCJzZXRSb3dzUGVyUGFnZSIsImhhbmRsZVJlcXVlc3RTb3J0IiwiaXNBc2MiLCJoYW5kbGVTZWxlY3RBbGxDbGljayIsInRhcmdldCIsImNoZWNrZWQiLCJuZXdTZWxlY3RlZHMiLCJyb3dzIiwibiIsIm5hbWUiLCJoYW5kbGVDbGljayIsInNlbGVjdGVkSW5kZXgiLCJpbmRleE9mIiwibmV3U2VsZWN0ZWQiLCJjb25jYXQiLCJzbGljZSIsImxlbmd0aCIsImhhbmRsZUNoYW5nZVBhZ2UiLCJuZXdQYWdlIiwiaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UiLCJwYXJzZUludCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlRGVuc2UiLCJpc1NlbGVjdGVkIiwiZW1wdHlSb3dzIiwiTWF0aCIsIm1pbiIsInRva2VuIiwiZ2V0Q29va2llIiwibG9hZGluZyIsImVycm9yIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJ2YWx1ZXMiLCJzZXR2YWx1ZXMiLCJkZWxldGVNZXNzYWdlIiwicmVtb3ZlTWVzc2FnZSIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZUNvbmZpcm0iLCJhbnN3ZXIiLCJ3aW5kb3ciLCJjb25maXJtIiwibXNnZSIsImlzSXRlbVNlbGVjdGVkIiwibGFiZWxJZCIsIl9pZCIsIm5vbSIsIm1haWwiLCJ0ZWwiLCJtc2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QyxRQUFJLEVBQUVKLElBTFA7QUFNQyxnQkFBWSxFQUFFc0IsZ0JBTmY7QUFPQyx1QkFBbUIsRUFBRUUsdUJBUHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4RkQsQ0FERCxFQW1HQyxNQUFDLDJFQUFEO0FBQ0MsV0FBTyxFQUNOLE1BQUMsaUVBQUQ7QUFBUSxhQUFPLEVBQUV0QixLQUFqQjtBQUF3QixjQUFRLEVBQUV5QixpQkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGO0FBSUMsU0FBSyxFQUFDLGlCQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuR0QsQ0FORCxDQUREO0FBbUhBLENBN05EOztJQUFNcEMsWTtVQUNXNUUsUzs7O01BRFg0RSxZO0FBK05TQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9tZXNzYWdlcy4yNDk5MmJlYzViZmNiMGU0OGJkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgVGFibGUgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vYWN0aW9ucy9hdXRoQWN0aW9ucyc7XHJcbmltcG9ydCB7IEFsZXJ0LCBTcGlubmVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcbmltcG9ydCB7IHJlbW92ZU1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL21lc3NhZ2VBY3Rpb25zJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB7IGxpZ2h0ZW4sIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVQYWdpbmF0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUGFnaW5hdGlvbic7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XHJcbmltcG9ydCBUYWJsZVNvcnRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVNvcnRMYWJlbCc7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcclxuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcclxuaW1wb3J0IEZpbHRlckxpc3RJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GaWx0ZXJMaXN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdHJvb3Q6IHtcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0fSxcclxuXHRwYXBlcjoge1xyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcclxuXHR9LFxyXG5cdHRhYmxlOiB7XHJcblx0XHRtaW5XaWR0aDogNzUwLFxyXG5cdH0sXHJcblx0dmlzdWFsbHlIaWRkZW46IHtcclxuXHRcdGJvcmRlcjogMCxcclxuXHRcdGNsaXA6ICdyZWN0KDAgMCAwIDApJyxcclxuXHRcdGhlaWdodDogMSxcclxuXHRcdG1hcmdpbjogLTEsXHJcblx0XHRvdmVyZmxvdzogJ2hpZGRlbicsXHJcblx0XHRwYWRkaW5nOiAwLFxyXG5cdFx0cG9zaXRpb246ICdhYnNvbHV0ZScsXHJcblx0XHR0b3A6IDIwLFxyXG5cdFx0d2lkdGg6IDEsXHJcblx0fSxcclxufSkpO1xyXG5cclxuZnVuY3Rpb24gZGVzY2VuZGluZ0NvbXBhcmF0b3IoYSwgYiwgb3JkZXJCeSkge1xyXG5cdGlmIChiW29yZGVyQnldIDwgYVtvcmRlckJ5XSkge1xyXG5cdFx0cmV0dXJuIC0xO1xyXG5cdH1cclxuXHRpZiAoYltvcmRlckJ5XSA+IGFbb3JkZXJCeV0pIHtcclxuXHRcdHJldHVybiAxO1xyXG5cdH1cclxuXHRyZXR1cm4gMDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29tcGFyYXRvcihvcmRlciwgb3JkZXJCeSkge1xyXG5cdHJldHVybiBvcmRlciA9PT0gJ2Rlc2MnXHJcblx0XHQ/IChhLCBiKSA9PiBkZXNjZW5kaW5nQ29tcGFyYXRvcihhLCBiLCBvcmRlckJ5KVxyXG5cdFx0OiAoYSwgYikgPT4gLWRlc2NlbmRpbmdDb21wYXJhdG9yKGEsIGIsIG9yZGVyQnkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFibGVTb3J0KGFycmF5LCBjb21wYXJhdG9yKSB7XHJcblx0Y29uc3Qgc3RhYmlsaXplZFRoaXMgPSBhcnJheS5tYXAoKGVsLCBpbmRleCkgPT4gW2VsLCBpbmRleF0pO1xyXG5cdHN0YWJpbGl6ZWRUaGlzLnNvcnQoKGEsIGIpID0+IHtcclxuXHRcdGNvbnN0IG9yZGVyID0gY29tcGFyYXRvcihhWzBdLCBiWzBdKTtcclxuXHRcdGlmIChvcmRlciAhPT0gMCkgcmV0dXJuIG9yZGVyO1xyXG5cdFx0cmV0dXJuIGFbMV0gLSBiWzFdO1xyXG5cdH0pO1xyXG5cdHJldHVybiBzdGFiaWxpemVkVGhpcy5tYXAoKGVsKSA9PiBlbFswXSk7XHJcbn1cclxuXHJcbmNvbnN0IGhlYWRDZWxscyA9IFtcclxuXHR7IGlkOiAnI0lEJywgbnVtZXJpYzogZmFsc2UsIGRpc2FibGVQYWRkaW5nOiB0cnVlLCBsYWJlbDogJyNJRCcgfSxcclxuXHR7IGlkOiAnTm9tJywgbnVtZXJpYzogdHJ1ZSwgZGlzYWJsZVBhZGRpbmc6IGZhbHNlLCBsYWJlbDogJ05vbScgfSxcclxuXHR7IGlkOiAnTWFpJywgbnVtZXJpYzogdHJ1ZSwgZGlzYWJsZVBhZGRpbmc6IGZhbHNlLCBsYWJlbDogJ01haScgfSxcclxuXHR7IGlkOiAnVGVsJywgbnVtZXJpYzogdHJ1ZSwgZGlzYWJsZVBhZGRpbmc6IGZhbHNlLCBsYWJlbDogJ1RlbCcgfSxcclxuXHR7IGlkOiAnTWVzc2FnZScsIG51bWVyaWM6IHRydWUsIGRpc2FibGVQYWRkaW5nOiBmYWxzZSwgbGFiZWw6ICdNZXNzYWdlJyB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gRW5oYW5jZWRUYWJsZUhlYWQocHJvcHMpIHtcclxuXHRjb25zdCB7XHJcblx0XHRjbGFzc2VzLFxyXG5cdFx0b25TZWxlY3RBbGxDbGljayxcclxuXHRcdG9yZGVyLFxyXG5cdFx0b3JkZXJCeSxcclxuXHRcdG51bVNlbGVjdGVkLFxyXG5cdFx0cm93Q291bnQsXHJcblx0XHRvblJlcXVlc3RTb3J0LFxyXG5cdH0gPSBwcm9wcztcclxuXHRjb25zdCBjcmVhdGVTb3J0SGFuZGxlciA9IChwcm9wZXJ0eSkgPT4gKGV2ZW50KSA9PiB7XHJcblx0XHRvblJlcXVlc3RTb3J0KGV2ZW50LCBwcm9wZXJ0eSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxUYWJsZUhlYWQ+XHJcblx0XHRcdDxUYWJsZVJvdz5cclxuXHRcdFx0XHQ8VGFibGVDZWxsIHBhZGRpbmc9J2NoZWNrYm94Jz5cclxuXHRcdFx0XHRcdDxDaGVja2JveFxyXG5cdFx0XHRcdFx0XHRpbmRldGVybWluYXRlPXtcclxuXHRcdFx0XHRcdFx0XHRudW1TZWxlY3RlZCA+IDAgJiYgbnVtU2VsZWN0ZWQgPCByb3dDb3VudFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Jvd0NvdW50ID4gMCAmJiBudW1TZWxlY3RlZCA9PT0gcm93Q291bnR9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtvblNlbGVjdEFsbENsaWNrfVxyXG5cdFx0XHRcdFx0XHRpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsJzogJ3NlbGVjdCBhbGwgZGVzc2VydHMnIH19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdHtoZWFkQ2VsbHMubWFwKChoZWFkQ2VsbCkgPT4gKFxyXG5cdFx0XHRcdFx0PFRhYmxlQ2VsbFxyXG5cdFx0XHRcdFx0XHRrZXk9e2hlYWRDZWxsLmlkfVxyXG5cdFx0XHRcdFx0XHRhbGlnbj17aGVhZENlbGwubnVtZXJpYyA/ICdyaWdodCcgOiAnbGVmdCd9XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc9e2hlYWRDZWxsLmRpc2FibGVQYWRkaW5nID8gJ25vbmUnIDogJ2RlZmF1bHQnfVxyXG5cdFx0XHRcdFx0XHRzb3J0RGlyZWN0aW9uPXtvcmRlckJ5ID09PSBoZWFkQ2VsbC5pZCA/IG9yZGVyIDogZmFsc2V9PlxyXG5cdFx0XHRcdFx0XHQ8VGFibGVTb3J0TGFiZWxcclxuXHRcdFx0XHRcdFx0XHRhY3RpdmU9e29yZGVyQnkgPT09IGhlYWRDZWxsLmlkfVxyXG5cdFx0XHRcdFx0XHRcdGRpcmVjdGlvbj17b3JkZXJCeSA9PT0gaGVhZENlbGwuaWQgPyBvcmRlciA6ICdhc2MnfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2NyZWF0ZVNvcnRIYW5kbGVyKGhlYWRDZWxsLmlkKX0+XHJcblx0XHRcdFx0XHRcdFx0e2hlYWRDZWxsLmxhYmVsfVxyXG5cdFx0XHRcdFx0XHRcdHtvcmRlckJ5ID09PSBoZWFkQ2VsbC5pZCA/IChcclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy52aXN1YWxseUhpZGRlbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtvcmRlciA9PT0gJ2Rlc2MnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PyAnc29ydGVkIGRlc2NlbmRpbmcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnc29ydGVkIGFzY2VuZGluZyd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XHJcblx0XHRcdFx0XHRcdDwvVGFibGVTb3J0TGFiZWw+XHJcblx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9UYWJsZVJvdz5cclxuXHRcdDwvVGFibGVIZWFkPlxyXG5cdCk7XHJcbn1cclxuXHJcbkVuaGFuY2VkVGFibGVIZWFkLnByb3BUeXBlcyA9IHtcclxuXHRjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcblx0bnVtU2VsZWN0ZWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuXHRvblJlcXVlc3RTb3J0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG5cdG9uU2VsZWN0QWxsQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcblx0b3JkZXI6IFByb3BUeXBlcy5vbmVPZihbJ2FzYycsICdkZXNjJ10pLmlzUmVxdWlyZWQsXHJcblx0b3JkZXJCeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdHJvd0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5jb25zdCB1c2VUb29sYmFyU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0cGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHRwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0fSxcclxuXHRoaWdobGlnaHQ6XHJcblx0XHR0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCdcclxuXHRcdFx0PyB7XHJcblx0XHRcdFx0XHRjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogbGlnaHRlbihcclxuXHRcdFx0XHRcdFx0dGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubGlnaHQsXHJcblx0XHRcdFx0XHRcdDAuODVcclxuXHRcdFx0XHRcdCksXHJcblx0XHRcdCAgfVxyXG5cdFx0XHQ6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayxcclxuXHRcdFx0ICB9LFxyXG5cdHRpdGxlOiB7XHJcblx0XHRmbGV4OiAnMSAxIDEwMCUnLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEVuaGFuY2VkVGFibGVUb29sYmFyID0gKHByb3BzKSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVRvb2xiYXJTdHlsZXMoKTtcclxuXHRjb25zdCB7IG51bVNlbGVjdGVkIH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxUb29sYmFyXHJcblx0XHRcdGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIHtcclxuXHRcdFx0XHRbY2xhc3Nlcy5oaWdobGlnaHRdOiBudW1TZWxlY3RlZCA+IDAsXHJcblx0XHRcdH0pfT5cclxuXHRcdFx0e251bVNlbGVjdGVkID4gMCA/IChcclxuXHRcdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxyXG5cdFx0XHRcdFx0Y29sb3I9J2luaGVyaXQnXHJcblx0XHRcdFx0XHR2YXJpYW50PSdzdWJ0aXRsZTEnXHJcblx0XHRcdFx0XHRjb21wb25lbnQ9J2Rpdic+XHJcblx0XHRcdFx0XHR7bnVtU2VsZWN0ZWR9IHNlbGVjdGVkXHJcblx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcblx0XHRcdFx0XHR2YXJpYW50PSdoNidcclxuXHRcdFx0XHRcdGlkPSd0YWJsZVRpdGxlJ1xyXG5cdFx0XHRcdFx0Y29tcG9uZW50PSdkaXYnPlxyXG5cdFx0XHRcdFx0TWVzc2FnZXNcclxuXHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdCl9XHJcblxyXG5cdFx0XHR7bnVtU2VsZWN0ZWQgPiAwID8gKFxyXG5cdFx0XHRcdDxUb29sdGlwIHRpdGxlPSdEZWxldGUnPlxyXG5cdFx0XHRcdFx0PEljb25CdXR0b24gYXJpYS1sYWJlbD0nZGVsZXRlJz5cclxuXHRcdFx0XHRcdFx0PERlbGV0ZUljb24gLz5cclxuXHRcdFx0XHRcdDwvSWNvbkJ1dHRvbj5cclxuXHRcdFx0XHQ8L1Rvb2x0aXA+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PFRvb2x0aXAgdGl0bGU9J0ZpbHRlciBsaXN0Jz5cclxuXHRcdFx0XHRcdDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9J2ZpbHRlciBsaXN0Jz5cclxuXHRcdFx0XHRcdFx0PEZpbHRlckxpc3RJY29uIC8+XHJcblx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblx0XHRcdFx0PC9Ub29sdGlwPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9Ub29sYmFyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5FbmhhbmNlZFRhYmxlVG9vbGJhci5wcm9wVHlwZXMgPSB7XHJcblx0bnVtU2VsZWN0ZWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmNvbnN0IExpc3RNZXNzYWdlcyA9ICh7IG1lc3NhZ2VzLCBuZXdNZXNzYWdlcyB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gUmVhY3QudXNlU3RhdGUoJ2FzYycpO1xyXG5cdGNvbnN0IFtvcmRlckJ5LCBzZXRPcmRlckJ5XSA9IFJlYWN0LnVzZVN0YXRlKCdjYWxvcmllcycpO1xyXG5cdGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IFtkZW5zZSwgc2V0RGVuc2VdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtyb3dzUGVyUGFnZSwgc2V0Um93c1BlclBhZ2VdID0gUmVhY3QudXNlU3RhdGUoNSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZVJlcXVlc3RTb3J0ID0gKGV2ZW50LCBwcm9wZXJ0eSkgPT4ge1xyXG5cdFx0Y29uc3QgaXNBc2MgPSBvcmRlckJ5ID09PSBwcm9wZXJ0eSAmJiBvcmRlciA9PT0gJ2FzYyc7XHJcblx0XHRzZXRPcmRlcihpc0FzYyA/ICdkZXNjJyA6ICdhc2MnKTtcclxuXHRcdHNldE9yZGVyQnkocHJvcGVydHkpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVNlbGVjdEFsbENsaWNrID0gKGV2ZW50KSA9PiB7XHJcblx0XHRpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcclxuXHRcdFx0Y29uc3QgbmV3U2VsZWN0ZWRzID0gcm93cy5tYXAoKG4pID0+IG4ubmFtZSk7XHJcblx0XHRcdHNldFNlbGVjdGVkKG5ld1NlbGVjdGVkcyk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHNldFNlbGVjdGVkKFtdKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbGljayA9IChldmVudCwgbmFtZSkgPT4ge1xyXG5cdFx0Y29uc3Qgc2VsZWN0ZWRJbmRleCA9IHNlbGVjdGVkLmluZGV4T2YobmFtZSk7XHJcblx0XHRsZXQgbmV3U2VsZWN0ZWQgPSBbXTtcclxuXHJcblx0XHRpZiAoc2VsZWN0ZWRJbmRleCA9PT0gLTEpIHtcclxuXHRcdFx0bmV3U2VsZWN0ZWQgPSBuZXdTZWxlY3RlZC5jb25jYXQoc2VsZWN0ZWQsIG5hbWUpO1xyXG5cdFx0fSBlbHNlIGlmIChzZWxlY3RlZEluZGV4ID09PSAwKSB7XHJcblx0XHRcdG5ld1NlbGVjdGVkID0gbmV3U2VsZWN0ZWQuY29uY2F0KHNlbGVjdGVkLnNsaWNlKDEpKTtcclxuXHRcdH0gZWxzZSBpZiAoc2VsZWN0ZWRJbmRleCA9PT0gc2VsZWN0ZWQubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRuZXdTZWxlY3RlZCA9IG5ld1NlbGVjdGVkLmNvbmNhdChzZWxlY3RlZC5zbGljZSgwLCAtMSkpO1xyXG5cdFx0fSBlbHNlIGlmIChzZWxlY3RlZEluZGV4ID4gMCkge1xyXG5cdFx0XHRuZXdTZWxlY3RlZCA9IG5ld1NlbGVjdGVkLmNvbmNhdChcclxuXHRcdFx0XHRzZWxlY3RlZC5zbGljZSgwLCBzZWxlY3RlZEluZGV4KSxcclxuXHRcdFx0XHRzZWxlY3RlZC5zbGljZShzZWxlY3RlZEluZGV4ICsgMSlcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHJcblx0XHRzZXRTZWxlY3RlZChuZXdTZWxlY3RlZCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlUGFnZSA9IChldmVudCwgbmV3UGFnZSkgPT4ge1xyXG5cdFx0c2V0UGFnZShuZXdQYWdlKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSA9IChldmVudCkgPT4ge1xyXG5cdFx0c2V0Um93c1BlclBhZ2UocGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCkpO1xyXG5cdFx0c2V0UGFnZSgwKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2VEZW5zZSA9IChldmVudCkgPT4ge1xyXG5cdFx0c2V0RGVuc2UoZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGlzU2VsZWN0ZWQgPSAobmFtZSkgPT4gc2VsZWN0ZWQuaW5kZXhPZihuYW1lKSAhPT0gLTE7XHJcblxyXG5cdGNvbnN0IGVtcHR5Um93cyA9XHJcblx0XHRyb3dzUGVyUGFnZSAtXHJcblx0XHRNYXRoLm1pbihyb3dzUGVyUGFnZSwgbWVzc2FnZXMubGVuZ3RoIC0gcGFnZSAqIHJvd3NQZXJQYWdlKTtcclxuXHJcblx0Y29uc3QgdG9rZW4gPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcblxyXG5cdGNvbnN0IFt2YWx1ZXMsIHNldHZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcblx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdGVycm9yOiAnJyxcclxuXHRcdHN1Y2Nlc3M6ICcnLFxyXG5cdFx0bWVzc2FnZTogJycsXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHsgbG9hZGluZywgc3VjY2VzcywgZXJyb3IsIG1lc3NhZ2UgfSA9IHZhbHVlcztcclxuXHJcblx0Y29uc3QgZGVsZXRlTWVzc2FnZSA9IChpZCkgPT4ge1xyXG5cdFx0c2V0dmFsdWVzKHsgLi4udmFsdWVzLCBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cdFx0cmVtb3ZlTWVzc2FnZShpZCwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2RhdGEgdmF1dCcsIGRhdGEpO1xyXG5cdFx0XHRpZiAoZGF0YS5lcnJvcikge1xyXG5cdFx0XHRcdHNldHZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdGVycm9yOiB0cnVlLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZmFsc2UsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0dmFsdWVzKHtcclxuXHRcdFx0XHRcdC4uLnZhbHVlcyxcclxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdFx0ZXJyb3I6ICcnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogdHJ1ZSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IGRhdGEudGV4dCxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGVsZXRlQ29uZmlybSA9IChpZCkgPT4ge1xyXG5cdFx0bGV0IGFuc3dlciA9IHdpbmRvdy5jb25maXJtKFxyXG5cdFx0XHRgU3VwcHJlc3Npb24gZHUgbWVzc2FnZSAke2lkfSwgw6p0ZXMtdm91cyBzw7tyID9gXHJcblx0XHQpO1xyXG5cdFx0aWYgKGFuc3dlcikge1xyXG5cdFx0XHRkZWxldGVNZXNzYWdlKGlkKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e2xvYWRpbmcgJiYgPFNwaW5uZXIgLz59XHJcblx0XHRcdHtzdWNjZXNzICYmIDxBbGVydCBjb2xvcj0nc3VjY2Vzcyc+e21lc3NhZ2V9PC9BbGVydD59XHJcblx0XHRcdHtlcnJvciAmJiA8QWxlcnQgY29sb3I9J2Rhbmdlcic+VW5lIGVycmV1ciBlc3Qgc3VydmVudWU8L0FsZXJ0Pn1cclxuXHRcdFx0PHAgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0+Vm91cyBhdmV6IHtuZXdNZXNzYWdlc30gbm9uIGx1cyAhPC9wPlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcblx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcblx0XHRcdFx0XHQ8RW5oYW5jZWRUYWJsZVRvb2xiYXIgbnVtU2VsZWN0ZWQ9e3NlbGVjdGVkLmxlbmd0aH0gLz5cclxuXHRcdFx0XHRcdDxUYWJsZUNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdFx0PFRhYmxlXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfVxyXG5cdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWxsZWRieT0ndGFibGVUaXRsZSdcclxuXHRcdFx0XHRcdFx0XHRzaXplPXtkZW5zZSA/ICdzbWFsbCcgOiAnbWVkaXVtJ31cclxuXHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsPSdlbmhhbmNlZCB0YWJsZSc+XHJcblx0XHRcdFx0XHRcdFx0PEVuaGFuY2VkVGFibGVIZWFkXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc2VzPXtjbGFzc2VzfVxyXG5cdFx0XHRcdFx0XHRcdFx0bnVtU2VsZWN0ZWQ9e3NlbGVjdGVkLmxlbmd0aH1cclxuXHRcdFx0XHRcdFx0XHRcdG9yZGVyPXtvcmRlcn1cclxuXHRcdFx0XHRcdFx0XHRcdG9yZGVyQnk9e29yZGVyQnl9XHJcblx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdEFsbENsaWNrPXtoYW5kbGVTZWxlY3RBbGxDbGlja31cclxuXHRcdFx0XHRcdFx0XHRcdG9uUmVxdWVzdFNvcnQ9e2hhbmRsZVJlcXVlc3RTb3J0fVxyXG5cdFx0XHRcdFx0XHRcdFx0cm93Q291bnQ9e21lc3NhZ2VzLmxlbmd0aH1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxUYWJsZUJvZHk+XHJcblx0XHRcdFx0XHRcdFx0XHR7c3RhYmxlU29ydChcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWVzc2FnZXMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGdldENvbXBhcmF0b3Iob3JkZXIsIG9yZGVyQnkpXHJcblx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5zbGljZShcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYWdlICogcm93c1BlclBhZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFnZSAqIHJvd3NQZXJQYWdlICsgcm93c1BlclBhZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQubWFwKChtc2dlLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IGlzSXRlbVNlbGVjdGVkID0gaXNTZWxlY3RlZChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1zZ2UubmFtZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgbGFiZWxJZCA9IGBlbmhhbmNlZC10YWJsZS1jaGVja2JveC0ke2luZGV4fWA7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVSb3dcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aG92ZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZUNsaWNrKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtc2dlLm5hbWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cm9sZT0nY2hlY2tib3gnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtY2hlY2tlZD17aXNJdGVtU2VsZWN0ZWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRhYkluZGV4PXstMX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXttc2dlLm5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkPXtpc0l0ZW1TZWxlY3RlZH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGwgcGFkZGluZz0nY2hlY2tib3gnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxDaGVja2JveFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17aXNJdGVtU2VsZWN0ZWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbnB1dFByb3BzPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdhcmlhLWxhYmVsbGVkYnknOiBsYWJlbElkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudD0ndGgnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2xhYmVsSWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2NvcGU9J3JvdydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYWRkaW5nPSdub25lJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bXNnZS5faWR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsIGFsaWduPSdyaWdodCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e21zZ2Uubm9tfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbCBhbGlnbj0ncmlnaHQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHttc2dlLm1haWx9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsIGFsaWduPSdyaWdodCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e21zZ2UudGVsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbCBhbGlnbj0ncmlnaHQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHttc2dlLm1zZ31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlUm93PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0e2VtcHR5Um93cyA+IDAgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVSb3dcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoZGVuc2UgPyAzMyA6IDUzKSAqIGVtcHR5Um93cyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsIGNvbFNwYW49ezZ9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVSb3c+XHJcblx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdDwvVGFibGVCb2R5PlxyXG5cdFx0XHRcdFx0XHQ8L1RhYmxlPlxyXG5cdFx0XHRcdFx0PC9UYWJsZUNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdDxUYWJsZVBhZ2luYXRpb25cclxuXHRcdFx0XHRcdFx0cm93c1BlclBhZ2VPcHRpb25zPXtbNSwgMTAsIDI1XX1cclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50PSdkaXYnXHJcblx0XHRcdFx0XHRcdGNvdW50PXttZXNzYWdlcy5sZW5ndGh9XHJcblx0XHRcdFx0XHRcdHJvd3NQZXJQYWdlPXtyb3dzUGVyUGFnZX1cclxuXHRcdFx0XHRcdFx0cGFnZT17cGFnZX1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2VQYWdlPXtoYW5kbGVDaGFuZ2VQYWdlfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZVJvd3NQZXJQYWdlPXtoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9QYXBlcj5cclxuXHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxyXG5cdFx0XHRcdFx0Y29udHJvbD17XHJcblx0XHRcdFx0XHRcdDxTd2l0Y2ggY2hlY2tlZD17ZGVuc2V9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VEZW5zZX0gLz5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGxhYmVsPSdBZmZpY2hhZ2UgcGV0aXQnXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdE1lc3NhZ2VzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9