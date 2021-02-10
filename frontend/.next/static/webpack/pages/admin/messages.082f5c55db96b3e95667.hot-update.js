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
  id: '_id',
  numeric: true,
  disablePadding: false,
  label: '#ID'
}, {
  id: 'nom',
  numeric: false,
  disablePadding: false,
  label: 'Nom'
}, {
  id: 'mail',
  numeric: false,
  disablePadding: false,
  label: 'Mail'
}, {
  id: 'tel',
  numeric: true,
  disablePadding: false,
  label: 'Tel'
}, {
  id: 'msg',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbi9saXN0cy9MaXN0TWVzc2FnZXMuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwicGFwZXIiLCJtYXJnaW5Cb3R0b20iLCJzcGFjaW5nIiwidGFibGUiLCJtaW5XaWR0aCIsInZpc3VhbGx5SGlkZGVuIiwiYm9yZGVyIiwiY2xpcCIsImhlaWdodCIsIm1hcmdpbiIsIm92ZXJmbG93IiwicGFkZGluZyIsInBvc2l0aW9uIiwidG9wIiwiZGVzY2VuZGluZ0NvbXBhcmF0b3IiLCJhIiwiYiIsIm9yZGVyQnkiLCJnZXRDb21wYXJhdG9yIiwib3JkZXIiLCJzdGFibGVTb3J0IiwiYXJyYXkiLCJjb21wYXJhdG9yIiwic3RhYmlsaXplZFRoaXMiLCJtYXAiLCJlbCIsImluZGV4Iiwic29ydCIsImhlYWRDZWxscyIsImlkIiwibnVtZXJpYyIsImRpc2FibGVQYWRkaW5nIiwibGFiZWwiLCJFbmhhbmNlZFRhYmxlSGVhZCIsInByb3BzIiwiY2xhc3NlcyIsIm9uU2VsZWN0QWxsQ2xpY2siLCJudW1TZWxlY3RlZCIsInJvd0NvdW50Iiwib25SZXF1ZXN0U29ydCIsImNyZWF0ZVNvcnRIYW5kbGVyIiwicHJvcGVydHkiLCJldmVudCIsImhlYWRDZWxsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImZ1bmMiLCJvbmVPZiIsInN0cmluZyIsInVzZVRvb2xiYXJTdHlsZXMiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImhpZ2hsaWdodCIsInBhbGV0dGUiLCJ0eXBlIiwiY29sb3IiLCJzZWNvbmRhcnkiLCJtYWluIiwiYmFja2dyb3VuZENvbG9yIiwibGlnaHRlbiIsImxpZ2h0IiwidGV4dCIsInByaW1hcnkiLCJkYXJrIiwidGl0bGUiLCJmbGV4IiwiRW5oYW5jZWRUYWJsZVRvb2xiYXIiLCJjbHN4IiwiTGlzdE1lc3NhZ2VzIiwibWVzc2FnZXMiLCJuZXdNZXNzYWdlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZXRPcmRlciIsInNldE9yZGVyQnkiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwicGFnZSIsInNldFBhZ2UiLCJkZW5zZSIsInNldERlbnNlIiwicm93c1BlclBhZ2UiLCJzZXRSb3dzUGVyUGFnZSIsImhhbmRsZVJlcXVlc3RTb3J0IiwiaXNBc2MiLCJoYW5kbGVTZWxlY3RBbGxDbGljayIsInRhcmdldCIsImNoZWNrZWQiLCJuZXdTZWxlY3RlZHMiLCJuIiwibmFtZSIsImhhbmRsZUNsaWNrIiwic2VsZWN0ZWRJbmRleCIsImluZGV4T2YiLCJuZXdTZWxlY3RlZCIsImNvbmNhdCIsInNsaWNlIiwibGVuZ3RoIiwiaGFuZGxlQ2hhbmdlUGFnZSIsIm5ld1BhZ2UiLCJoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSIsInBhcnNlSW50IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2VEZW5zZSIsImlzU2VsZWN0ZWQiLCJlbXB0eVJvd3MiLCJNYXRoIiwibWluIiwidG9rZW4iLCJnZXRDb29raWUiLCJsb2FkaW5nIiwiZXJyb3IiLCJzdWNjZXNzIiwibWVzc2FnZSIsInZhbHVlcyIsInNldHZhbHVlcyIsImRlbGV0ZU1lc3NhZ2UiLCJyZW1vdmVNZXNzYWdlIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlQ29uZmlybSIsImFuc3dlciIsIndpbmRvdyIsImNvbmZpcm0iLCJtc2dlIiwiaXNJdGVtU2VsZWN0ZWQiLCJfaWQiLCJsYWJlbElkIiwibm9tIiwibWFpbCIsInRlbCIsIm1zZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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UDtBQU1DLGdCQUFZLEVBQUVxQixnQkFOZjtBQU9DLHVCQUFtQixFQUFFRSx1QkFQdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJGRCxDQURELEVBZ0dDLE1BQUMsMkVBQUQ7QUFDQyxXQUFPLEVBQ04sTUFBQyxpRUFBRDtBQUFRLGFBQU8sRUFBRXJCLEtBQWpCO0FBQXdCLGNBQVEsRUFBRXdCLGlCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkY7QUFJQyxTQUFLLEVBQUMsaUJBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhHRCxDQU5ELENBREQ7QUFnSEEsQ0ExTkQ7O0lBQU1uQyxZO1VBQ1c1RSxTOzs7TUFEWDRFLFk7QUE0TlNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL21lc3NhZ2VzLjA4MmY1YzU1ZGI5NmIzZTk1NjY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBUYWJsZSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi9hY3Rpb25zL2F1dGhBY3Rpb25zJztcclxuaW1wb3J0IHsgQWxlcnQsIFNwaW5uZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgcmVtb3ZlTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMvbWVzc2FnZUFjdGlvbnMnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgbGlnaHRlbiwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZSc7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5JztcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXInO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZCc7XHJcbmltcG9ydCBUYWJsZVBhZ2luYXRpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVQYWdpbmF0aW9uJztcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcclxuaW1wb3J0IFRhYmxlU29ydExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlU29ydExhYmVsJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xyXG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N3aXRjaCc7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EZWxldGUnO1xyXG5pbXBvcnQgRmlsdGVyTGlzdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZpbHRlckxpc3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHR9LFxyXG5cdHBhcGVyOiB7XHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0bWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdH0sXHJcblx0dGFibGU6IHtcclxuXHRcdG1pbldpZHRoOiA3NTAsXHJcblx0fSxcclxuXHR2aXN1YWxseUhpZGRlbjoge1xyXG5cdFx0Ym9yZGVyOiAwLFxyXG5cdFx0Y2xpcDogJ3JlY3QoMCAwIDAgMCknLFxyXG5cdFx0aGVpZ2h0OiAxLFxyXG5cdFx0bWFyZ2luOiAtMSxcclxuXHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcclxuXHRcdHBhZGRpbmc6IDAsXHJcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuXHRcdHRvcDogMjAsXHJcblx0XHR3aWR0aDogMSxcclxuXHR9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBkZXNjZW5kaW5nQ29tcGFyYXRvcihhLCBiLCBvcmRlckJ5KSB7XHJcblx0aWYgKGJbb3JkZXJCeV0gPCBhW29yZGVyQnldKSB7XHJcblx0XHRyZXR1cm4gLTE7XHJcblx0fVxyXG5cdGlmIChiW29yZGVyQnldID4gYVtvcmRlckJ5XSkge1xyXG5cdFx0cmV0dXJuIDE7XHJcblx0fVxyXG5cdHJldHVybiAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb21wYXJhdG9yKG9yZGVyLCBvcmRlckJ5KSB7XHJcblx0cmV0dXJuIG9yZGVyID09PSAnZGVzYydcclxuXHRcdD8gKGEsIGIpID0+IGRlc2NlbmRpbmdDb21wYXJhdG9yKGEsIGIsIG9yZGVyQnkpXHJcblx0XHQ6IChhLCBiKSA9PiAtZGVzY2VuZGluZ0NvbXBhcmF0b3IoYSwgYiwgb3JkZXJCeSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YWJsZVNvcnQoYXJyYXksIGNvbXBhcmF0b3IpIHtcclxuXHRjb25zdCBzdGFiaWxpemVkVGhpcyA9IGFycmF5Lm1hcCgoZWwsIGluZGV4KSA9PiBbZWwsIGluZGV4XSk7XHJcblx0c3RhYmlsaXplZFRoaXMuc29ydCgoYSwgYikgPT4ge1xyXG5cdFx0Y29uc3Qgb3JkZXIgPSBjb21wYXJhdG9yKGFbMF0sIGJbMF0pO1xyXG5cdFx0aWYgKG9yZGVyICE9PSAwKSByZXR1cm4gb3JkZXI7XHJcblx0XHRyZXR1cm4gYVsxXSAtIGJbMV07XHJcblx0fSk7XHJcblx0cmV0dXJuIHN0YWJpbGl6ZWRUaGlzLm1hcCgoZWwpID0+IGVsWzBdKTtcclxufVxyXG5cclxuY29uc3QgaGVhZENlbGxzID0gW1xyXG5cdHsgaWQ6ICdfaWQnLCBudW1lcmljOiB0cnVlLCBkaXNhYmxlUGFkZGluZzogZmFsc2UsIGxhYmVsOiAnI0lEJyB9LFxyXG5cdHsgaWQ6ICdub20nLCBudW1lcmljOiBmYWxzZSwgZGlzYWJsZVBhZGRpbmc6IGZhbHNlLCBsYWJlbDogJ05vbScgfSxcclxuXHR7IGlkOiAnbWFpbCcsIG51bWVyaWM6IGZhbHNlLCBkaXNhYmxlUGFkZGluZzogZmFsc2UsIGxhYmVsOiAnTWFpbCcgfSxcclxuXHR7IGlkOiAndGVsJywgbnVtZXJpYzogdHJ1ZSwgZGlzYWJsZVBhZGRpbmc6IGZhbHNlLCBsYWJlbDogJ1RlbCcgfSxcclxuXHR7IGlkOiAnbXNnJywgbnVtZXJpYzogZmFsc2UsIGRpc2FibGVQYWRkaW5nOiBmYWxzZSwgbGFiZWw6ICdNZXNzYWdlJyB9LFxyXG5dO1xyXG5cclxuZnVuY3Rpb24gRW5oYW5jZWRUYWJsZUhlYWQocHJvcHMpIHtcclxuXHRjb25zdCB7XHJcblx0XHRjbGFzc2VzLFxyXG5cdFx0b25TZWxlY3RBbGxDbGljayxcclxuXHRcdG9yZGVyLFxyXG5cdFx0b3JkZXJCeSxcclxuXHRcdG51bVNlbGVjdGVkLFxyXG5cdFx0cm93Q291bnQsXHJcblx0XHRvblJlcXVlc3RTb3J0LFxyXG5cdH0gPSBwcm9wcztcclxuXHRjb25zdCBjcmVhdGVTb3J0SGFuZGxlciA9IChwcm9wZXJ0eSkgPT4gKGV2ZW50KSA9PiB7XHJcblx0XHRvblJlcXVlc3RTb3J0KGV2ZW50LCBwcm9wZXJ0eSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxUYWJsZUhlYWQ+XHJcblx0XHRcdDxUYWJsZVJvdz5cclxuXHRcdFx0XHQ8VGFibGVDZWxsIHBhZGRpbmc9J2NoZWNrYm94Jz5cclxuXHRcdFx0XHRcdDxDaGVja2JveFxyXG5cdFx0XHRcdFx0XHRpbmRldGVybWluYXRlPXtcclxuXHRcdFx0XHRcdFx0XHRudW1TZWxlY3RlZCA+IDAgJiYgbnVtU2VsZWN0ZWQgPCByb3dDb3VudFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGNoZWNrZWQ9e3Jvd0NvdW50ID4gMCAmJiBudW1TZWxlY3RlZCA9PT0gcm93Q291bnR9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtvblNlbGVjdEFsbENsaWNrfVxyXG5cdFx0XHRcdFx0XHRpbnB1dFByb3BzPXt7ICdhcmlhLWxhYmVsJzogJ3NlbGVjdCBhbGwgZGVzc2VydHMnIH19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdHtoZWFkQ2VsbHMubWFwKChoZWFkQ2VsbCkgPT4gKFxyXG5cdFx0XHRcdFx0PFRhYmxlQ2VsbFxyXG5cdFx0XHRcdFx0XHRrZXk9e2hlYWRDZWxsLmlkfVxyXG5cdFx0XHRcdFx0XHRhbGlnbj17aGVhZENlbGwubnVtZXJpYyA/ICdyaWdodCcgOiAnbGVmdCd9XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc9e2hlYWRDZWxsLmRpc2FibGVQYWRkaW5nID8gJ25vbmUnIDogJ2RlZmF1bHQnfVxyXG5cdFx0XHRcdFx0XHRzb3J0RGlyZWN0aW9uPXtvcmRlckJ5ID09PSBoZWFkQ2VsbC5pZCA/IG9yZGVyIDogZmFsc2V9PlxyXG5cdFx0XHRcdFx0XHQ8VGFibGVTb3J0TGFiZWxcclxuXHRcdFx0XHRcdFx0XHRhY3RpdmU9e29yZGVyQnkgPT09IGhlYWRDZWxsLmlkfVxyXG5cdFx0XHRcdFx0XHRcdGRpcmVjdGlvbj17b3JkZXJCeSA9PT0gaGVhZENlbGwuaWQgPyBvcmRlciA6ICdhc2MnfVxyXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2NyZWF0ZVNvcnRIYW5kbGVyKGhlYWRDZWxsLmlkKX0+XHJcblx0XHRcdFx0XHRcdFx0e2hlYWRDZWxsLmxhYmVsfVxyXG5cdFx0XHRcdFx0XHRcdHtvcmRlckJ5ID09PSBoZWFkQ2VsbC5pZCA/IChcclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy52aXN1YWxseUhpZGRlbn0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtvcmRlciA9PT0gJ2Rlc2MnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PyAnc29ydGVkIGRlc2NlbmRpbmcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnc29ydGVkIGFzY2VuZGluZyd9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0KSA6IG51bGx9XHJcblx0XHRcdFx0XHRcdDwvVGFibGVTb3J0TGFiZWw+XHJcblx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0PC9UYWJsZVJvdz5cclxuXHRcdDwvVGFibGVIZWFkPlxyXG5cdCk7XHJcbn1cclxuXHJcbkVuaGFuY2VkVGFibGVIZWFkLnByb3BUeXBlcyA9IHtcclxuXHRjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcblx0bnVtU2VsZWN0ZWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuXHRvblJlcXVlc3RTb3J0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG5cdG9uU2VsZWN0QWxsQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcblx0b3JkZXI6IFByb3BUeXBlcy5vbmVPZihbJ2FzYycsICdkZXNjJ10pLmlzUmVxdWlyZWQsXHJcblx0b3JkZXJCeTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG5cdHJvd0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5jb25zdCB1c2VUb29sYmFyU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0cm9vdDoge1xyXG5cdFx0cGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHRwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcblx0fSxcclxuXHRoaWdobGlnaHQ6XHJcblx0XHR0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCdcclxuXHRcdFx0PyB7XHJcblx0XHRcdFx0XHRjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogbGlnaHRlbihcclxuXHRcdFx0XHRcdFx0dGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubGlnaHQsXHJcblx0XHRcdFx0XHRcdDAuODVcclxuXHRcdFx0XHRcdCksXHJcblx0XHRcdCAgfVxyXG5cdFx0XHQ6IHtcclxuXHRcdFx0XHRcdGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayxcclxuXHRcdFx0ICB9LFxyXG5cdHRpdGxlOiB7XHJcblx0XHRmbGV4OiAnMSAxIDEwMCUnLFxyXG5cdH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEVuaGFuY2VkVGFibGVUb29sYmFyID0gKHByb3BzKSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVRvb2xiYXJTdHlsZXMoKTtcclxuXHRjb25zdCB7IG51bVNlbGVjdGVkIH0gPSBwcm9wcztcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxUb29sYmFyXHJcblx0XHRcdGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnJvb3QsIHtcclxuXHRcdFx0XHRbY2xhc3Nlcy5oaWdobGlnaHRdOiBudW1TZWxlY3RlZCA+IDAsXHJcblx0XHRcdH0pfT5cclxuXHRcdFx0e251bVNlbGVjdGVkID4gMCA/IChcclxuXHRcdFx0XHQ8VHlwb2dyYXBoeVxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxyXG5cdFx0XHRcdFx0Y29sb3I9J2luaGVyaXQnXHJcblx0XHRcdFx0XHR2YXJpYW50PSdzdWJ0aXRsZTEnXHJcblx0XHRcdFx0XHRjb21wb25lbnQ9J2Rpdic+XHJcblx0XHRcdFx0XHR7bnVtU2VsZWN0ZWR9IHNlbGVjdGVkXHJcblx0XHRcdFx0PC9UeXBvZ3JhcGh5PlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDxUeXBvZ3JhcGh5XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcblx0XHRcdFx0XHR2YXJpYW50PSdoNidcclxuXHRcdFx0XHRcdGlkPSd0YWJsZVRpdGxlJ1xyXG5cdFx0XHRcdFx0Y29tcG9uZW50PSdkaXYnPlxyXG5cdFx0XHRcdFx0TWVzc2FnZXNcclxuXHRcdFx0XHQ8L1R5cG9ncmFwaHk+XHJcblx0XHRcdCl9XHJcblxyXG5cdFx0XHR7bnVtU2VsZWN0ZWQgPiAwID8gKFxyXG5cdFx0XHRcdDxUb29sdGlwIHRpdGxlPSdEZWxldGUnPlxyXG5cdFx0XHRcdFx0PEljb25CdXR0b24gYXJpYS1sYWJlbD0nZGVsZXRlJz5cclxuXHRcdFx0XHRcdFx0PERlbGV0ZUljb24gLz5cclxuXHRcdFx0XHRcdDwvSWNvbkJ1dHRvbj5cclxuXHRcdFx0XHQ8L1Rvb2x0aXA+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PFRvb2x0aXAgdGl0bGU9J0ZpbHRlciBsaXN0Jz5cclxuXHRcdFx0XHRcdDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9J2ZpbHRlciBsaXN0Jz5cclxuXHRcdFx0XHRcdFx0PEZpbHRlckxpc3RJY29uIC8+XHJcblx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XHJcblx0XHRcdFx0PC9Ub29sdGlwPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC9Ub29sYmFyPlxyXG5cdCk7XHJcbn07XHJcblxyXG5FbmhhbmNlZFRhYmxlVG9vbGJhci5wcm9wVHlwZXMgPSB7XHJcblx0bnVtU2VsZWN0ZWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmNvbnN0IExpc3RNZXNzYWdlcyA9ICh7IG1lc3NhZ2VzLCBuZXdNZXNzYWdlcyB9KSA9PiB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cdGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gUmVhY3QudXNlU3RhdGUoJ2FzYycpO1xyXG5cdGNvbnN0IFtvcmRlckJ5LCBzZXRPcmRlckJ5XSA9IFJlYWN0LnVzZVN0YXRlKCdjYWxvcmllcycpO1xyXG5cdGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG5cdGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IFtkZW5zZSwgc2V0RGVuc2VdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtyb3dzUGVyUGFnZSwgc2V0Um93c1BlclBhZ2VdID0gUmVhY3QudXNlU3RhdGUoNSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZVJlcXVlc3RTb3J0ID0gKGV2ZW50LCBwcm9wZXJ0eSkgPT4ge1xyXG5cdFx0Y29uc3QgaXNBc2MgPSBvcmRlckJ5ID09PSBwcm9wZXJ0eSAmJiBvcmRlciA9PT0gJ2FzYyc7XHJcblx0XHRzZXRPcmRlcihpc0FzYyA/ICdkZXNjJyA6ICdhc2MnKTtcclxuXHRcdHNldE9yZGVyQnkocHJvcGVydHkpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVNlbGVjdEFsbENsaWNrID0gKGV2ZW50KSA9PiB7XHJcblx0XHRpZiAoZXZlbnQudGFyZ2V0LmNoZWNrZWQpIHtcclxuXHRcdFx0Y29uc3QgbmV3U2VsZWN0ZWRzID0gbWVzc2FnZXMubWFwKChuKSA9PiBuLm5hbWUpO1xyXG5cdFx0XHRzZXRTZWxlY3RlZChuZXdTZWxlY3RlZHMpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRzZXRTZWxlY3RlZChbXSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQsIG5hbWUpID0+IHtcclxuXHRcdGNvbnN0IHNlbGVjdGVkSW5kZXggPSBzZWxlY3RlZC5pbmRleE9mKG5hbWUpO1xyXG5cdFx0bGV0IG5ld1NlbGVjdGVkID0gW107XHJcblxyXG5cdFx0aWYgKHNlbGVjdGVkSW5kZXggPT09IC0xKSB7XHJcblx0XHRcdG5ld1NlbGVjdGVkID0gbmV3U2VsZWN0ZWQuY29uY2F0KHNlbGVjdGVkLCBuYW1lKTtcclxuXHRcdH0gZWxzZSBpZiAoc2VsZWN0ZWRJbmRleCA9PT0gMCkge1xyXG5cdFx0XHRuZXdTZWxlY3RlZCA9IG5ld1NlbGVjdGVkLmNvbmNhdChzZWxlY3RlZC5zbGljZSgxKSk7XHJcblx0XHR9IGVsc2UgaWYgKHNlbGVjdGVkSW5kZXggPT09IHNlbGVjdGVkLmxlbmd0aCAtIDEpIHtcclxuXHRcdFx0bmV3U2VsZWN0ZWQgPSBuZXdTZWxlY3RlZC5jb25jYXQoc2VsZWN0ZWQuc2xpY2UoMCwgLTEpKTtcclxuXHRcdH0gZWxzZSBpZiAoc2VsZWN0ZWRJbmRleCA+IDApIHtcclxuXHRcdFx0bmV3U2VsZWN0ZWQgPSBuZXdTZWxlY3RlZC5jb25jYXQoXHJcblx0XHRcdFx0c2VsZWN0ZWQuc2xpY2UoMCwgc2VsZWN0ZWRJbmRleCksXHJcblx0XHRcdFx0c2VsZWN0ZWQuc2xpY2Uoc2VsZWN0ZWRJbmRleCArIDEpXHJcblx0XHRcdCk7XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNoYW5nZVBhZ2UgPSAoZXZlbnQsIG5ld1BhZ2UpID0+IHtcclxuXHRcdHNldFBhZ2UobmV3UGFnZSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UgPSAoZXZlbnQpID0+IHtcclxuXHRcdHNldFJvd3NQZXJQYWdlKHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApKTtcclxuXHRcdHNldFBhZ2UoMCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlRGVuc2UgPSAoZXZlbnQpID0+IHtcclxuXHRcdHNldERlbnNlKGV2ZW50LnRhcmdldC5jaGVja2VkKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBpc1NlbGVjdGVkID0gKG5hbWUpID0+IHNlbGVjdGVkLmluZGV4T2YobmFtZSkgIT09IC0xO1xyXG5cclxuXHRjb25zdCBlbXB0eVJvd3MgPVxyXG5cdFx0cm93c1BlclBhZ2UgLVxyXG5cdFx0TWF0aC5taW4ocm93c1BlclBhZ2UsIG1lc3NhZ2VzLmxlbmd0aCAtIHBhZ2UgKiByb3dzUGVyUGFnZSk7XHJcblxyXG5cdGNvbnN0IHRva2VuID0gZ2V0Q29va2llKCd0b2tlbicpO1xyXG5cclxuXHRjb25zdCBbdmFsdWVzLCBzZXR2YWx1ZXNdID0gdXNlU3RhdGUoe1xyXG5cdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRlcnJvcjogJycsXHJcblx0XHRzdWNjZXNzOiAnJyxcclxuXHRcdG1lc3NhZ2U6ICcnLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCB7IGxvYWRpbmcsIHN1Y2Nlc3MsIGVycm9yLCBtZXNzYWdlIH0gPSB2YWx1ZXM7XHJcblxyXG5cdGNvbnN0IGRlbGV0ZU1lc3NhZ2UgPSAoaWQpID0+IHtcclxuXHRcdHNldHZhbHVlcyh7IC4uLnZhbHVlcywgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHRcdHJlbW92ZU1lc3NhZ2UoaWQsIHRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdkYXRhIHZhdXQnLCBkYXRhKTtcclxuXHRcdFx0aWYgKGRhdGEuZXJyb3IpIHtcclxuXHRcdFx0XHRzZXR2YWx1ZXMoe1xyXG5cdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2UsXHJcblx0XHRcdFx0XHRlcnJvcjogdHJ1ZSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZhbHNlLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNldHZhbHVlcyh7XHJcblx0XHRcdFx0XHQuLi52YWx1ZXMsXHJcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0XHRcdGVycm9yOiAnJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IHRydWUsXHJcblx0XHRcdFx0XHRtZXNzYWdlOiBkYXRhLnRleHQsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRlbGV0ZUNvbmZpcm0gPSAoaWQpID0+IHtcclxuXHRcdGxldCBhbnN3ZXIgPSB3aW5kb3cuY29uZmlybShcclxuXHRcdFx0YFN1cHByZXNzaW9uIGR1IG1lc3NhZ2UgJHtpZH0sIMOqdGVzLXZvdXMgc8O7ciA/YFxyXG5cdFx0KTtcclxuXHRcdGlmIChhbnN3ZXIpIHtcclxuXHRcdFx0ZGVsZXRlTWVzc2FnZShpZCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdHtsb2FkaW5nICYmIDxTcGlubmVyIC8+fVxyXG5cdFx0XHR7c3VjY2VzcyAmJiA8QWxlcnQgY29sb3I9J3N1Y2Nlc3MnPnttZXNzYWdlfTwvQWxlcnQ+fVxyXG5cdFx0XHR7ZXJyb3IgJiYgPEFsZXJ0IGNvbG9yPSdkYW5nZXInPlVuZSBlcnJldXIgZXN0IHN1cnZlbnVlPC9BbGVydD59XHJcblx0XHRcdDxwIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19PlZvdXMgYXZleiB7bmV3TWVzc2FnZXN9IG5vbiBsdXMgITwvcD5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG5cdFx0XHRcdDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG5cdFx0XHRcdFx0PEVuaGFuY2VkVGFibGVUb29sYmFyIG51bVNlbGVjdGVkPXtzZWxlY3RlZC5sZW5ndGh9IC8+XHJcblx0XHRcdFx0XHQ8VGFibGVDb250YWluZXI+XHJcblx0XHRcdFx0XHRcdDxUYWJsZVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX1cclxuXHRcdFx0XHRcdFx0XHRhcmlhLWxhYmVsbGVkYnk9J3RhYmxlVGl0bGUnXHJcblx0XHRcdFx0XHRcdFx0c2l6ZT17ZGVuc2UgPyAnc21hbGwnIDogJ21lZGl1bSd9XHJcblx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbD0nZW5oYW5jZWQgdGFibGUnPlxyXG5cdFx0XHRcdFx0XHRcdDxFbmhhbmNlZFRhYmxlSGVhZFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3Nlcz17Y2xhc3Nlc31cclxuXHRcdFx0XHRcdFx0XHRcdG51bVNlbGVjdGVkPXtzZWxlY3RlZC5sZW5ndGh9XHJcblx0XHRcdFx0XHRcdFx0XHRvcmRlcj17b3JkZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHRvcmRlckJ5PXtvcmRlckJ5fVxyXG5cdFx0XHRcdFx0XHRcdFx0b25TZWxlY3RBbGxDbGljaz17aGFuZGxlU2VsZWN0QWxsQ2xpY2t9XHJcblx0XHRcdFx0XHRcdFx0XHRvblJlcXVlc3RTb3J0PXtoYW5kbGVSZXF1ZXN0U29ydH1cclxuXHRcdFx0XHRcdFx0XHRcdHJvd0NvdW50PXttZXNzYWdlcy5sZW5ndGh9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8VGFibGVCb2R5PlxyXG5cdFx0XHRcdFx0XHRcdFx0e3N0YWJsZVNvcnQoXHJcblx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2VzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRnZXRDb21wYXJhdG9yKG9yZGVyLCBvcmRlckJ5KVxyXG5cdFx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuc2xpY2UoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGFnZSAqIHJvd3NQZXJQYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhZ2UgKiByb3dzUGVyUGFnZSArIHJvd3NQZXJQYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHRcdFx0Lm1hcCgobXNnZSwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBpc0l0ZW1TZWxlY3RlZCA9IGlzU2VsZWN0ZWQoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtc2dlLl9pZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3QgbGFiZWxJZCA9IGBlbmhhbmNlZC10YWJsZS1jaGVja2JveC0ke2luZGV4fWA7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVSb3dcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aG92ZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZUNsaWNrKGV2ZW50LCBtc2dlLl9pZClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyb2xlPSdjaGVja2JveCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1jaGVja2VkPXtpc0l0ZW1TZWxlY3RlZH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGFiSW5kZXg9ey0xfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e21zZ2UuX2lkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZD17aXNJdGVtU2VsZWN0ZWR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGFibGVDZWxsIHBhZGRpbmc9J2NoZWNrYm94Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q2hlY2tib3hcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e2lzSXRlbVNlbGVjdGVkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5wdXRQcm9wcz17e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnYXJpYS1sYWJlbGxlZGJ5JzogbGFiZWxJZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb21wb25lbnQ9J3RoJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPXtsYWJlbElkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNjb3BlPSdyb3cnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFkZGluZz0nbm9uZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e21zZ2UuX2lkfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbCBhbGlnbj0ncmlnaHQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHttc2dlLm5vbX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGwgYWxpZ249J3JpZ2h0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bXNnZS5tYWlsfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlQ2VsbD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbCBhbGlnbj0ncmlnaHQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHttc2dlLnRlbH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZUNlbGw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUYWJsZUNlbGwgYWxpZ249J3JpZ2h0Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bXNnZS5tc2d9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGFibGVDZWxsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UYWJsZVJvdz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0XHRcdHtlbXB0eVJvd3MgPiAwICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlUm93XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KGRlbnNlID8gMzMgOiA1MykgKiBlbXB0eVJvd3MsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRhYmxlQ2VsbCBjb2xTcGFuPXs2fSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1RhYmxlUm93PlxyXG5cdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHQ8L1RhYmxlQm9keT5cclxuXHRcdFx0XHRcdFx0PC9UYWJsZT5cclxuXHRcdFx0XHRcdDwvVGFibGVDb250YWluZXI+XHJcblx0XHRcdFx0XHQ8VGFibGVQYWdpbmF0aW9uXHJcblx0XHRcdFx0XHRcdHJvd3NQZXJQYWdlT3B0aW9ucz17WzUsIDEwLCAyNV19XHJcblx0XHRcdFx0XHRcdGNvbXBvbmVudD0nZGl2J1xyXG5cdFx0XHRcdFx0XHRjb3VudD17bWVzc2FnZXMubGVuZ3RofVxyXG5cdFx0XHRcdFx0XHRyb3dzUGVyUGFnZT17cm93c1BlclBhZ2V9XHJcblx0XHRcdFx0XHRcdHBhZ2U9e3BhZ2V9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlUGFnZT17aGFuZGxlQ2hhbmdlUGFnZX1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2VSb3dzUGVyUGFnZT17aGFuZGxlQ2hhbmdlUm93c1BlclBhZ2V9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvUGFwZXI+XHJcblx0XHRcdFx0PEZvcm1Db250cm9sTGFiZWxcclxuXHRcdFx0XHRcdGNvbnRyb2w9e1xyXG5cdFx0XHRcdFx0XHQ8U3dpdGNoIGNoZWNrZWQ9e2RlbnNlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlRGVuc2V9IC8+XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRsYWJlbD0nQWZmaWNoYWdlIHBldGl0J1xyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RNZXNzYWdlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==