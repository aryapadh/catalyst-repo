import "core-js/modules/es7.object.get-own-property-descriptors";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.number.constructor";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { AppBar, ButtonGroup, Box, Drawer, IconButton, Table, TableBody, TableCell, TableHead, TextField, TableRow, Toolbar, Typography, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import ChevronLeftIcon from "mdi-material-ui/ChevronLeft";
import ChevronRightIcon from "mdi-material-ui/ChevronRight";
import CloseIcon from "mdi-material-ui/Close";
import Button from "../Button";
import Select from "../Select";
import ActionMenu from "../ActionMenu";
import DataTableFilterChipBar from "./helpers/DataTableFilterChipBar";
var useStyles = makeStyles(function (theme) {
  return {
    pagination: {
      paddingTop: theme.spacing(2)
    },
    tableBody: {},
    tableRowOdd: {
      backgroundColor: theme.palette.colors.black02
    },
    tableHead: _objectSpread({}, theme.typography.h5, {
      fontWeight: theme.typography.fontWeightSemiBold,
      padding: theme.spacing(0.5, 2)
    }),
    tableCell: _objectSpread({}, theme.typography.body2),
    textField: {
      marginTop: 0,
      marginBottom: 0
    },
    tableRowClickable: {
      cursor: "pointer"
    },
    tableRowHover: {
      "&:hover": {
        backgroundColor: theme.palette.colors.black05
      }
    },
    tableRowSelected: {
      "backgroundColor": theme.palette.colors.coolGrey100,
      "&:hover": {
        backgroundColor: theme.palette.colors.coolGreyHoverSelected
      }
    },
    tableWrapper: {
      overflowX: "auto"
    }
  };
});
export var defaultLabels = {
  allFilters: "All filters",
  allFiltersDrawerTitle: "All filters",
  clearAllFilters: "Clear all",
  clearFilter: "Clear",
  globalFilterPlaceholder: "Filter",
  loading: "Loading...",
  next: "Next",
  page: "Page",
  pageOf: function pageOf(_ref) {
    var count = _ref.count;
    return "of ".concat(count);
  },
  pageSizeSelect: function pageSizeSelect(_ref2) {
    var count = _ref2.count;
    return "".concat(count, " rows");
  },
  previous: "Previous"
};
/**
 * @name DataTable
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */

var DataTable = React.forwardRef(function DataTable(props, ref) {
  var pageSizes = props.pageSizes,
      isFilterable = props.isFilterable,
      actionMenuProps = props.actionMenuProps,
      FilterDrawerComponent = props.FilterDrawerComponent,
      FilterDrawerButtonComponent = props.FilterDrawerButtonComponent,
      ToolbarComponent = props.ToolbarComponent,
      PaginationComponent = props.PaginationComponent,
      labelsProp = props.labels,
      setShowAdditionalFilters = props.setShowAdditionalFilters,
      shouldShowAdditionalFilters = props.shouldShowAdditionalFilters,
      onRowClick = props.onRowClick,
      onRemoveFilter = props.onRemoveFilter,
      onRemoveManualFilter = props.onRemoveManualFilter,
      isLoading = props.isLoading,
      getTableProps = props.getTableProps,
      flatColumns = props.flatColumns,
      headerGroups = props.headerGroups,
      page = props.page,
      prepareRow = props.prepareRow,
      canPreviousPage = props.canPreviousPage,
      canNextPage = props.canNextPage,
      pageOptions = props.pageOptions,
      pageCount = props.pageCount,
      gotoPage = props.gotoPage,
      nextPage = props.nextPage,
      previousPage = props.previousPage,
      debounceSetGlobalFilter = props.debounceSetGlobalFilter,
      setPageSize = props.setPageSize,
      _props$state = props.state,
      pageIndex = _props$state.pageIndex,
      pageSize = _props$state.pageSize,
      filters = _props$state.filters,
      manualFilters = _props$state.manualFilters;
  var classes = useStyles();
  var theme = useTheme();
  var isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  var isTablet = useMediaQuery(theme.breakpoints.down("md"));
  var shouldShowStandardToolbar = actionMenuProps || isFilterable;
  var activeFilters = flatColumns.filter(function (_ref3) {
    var canFilter = _ref3.canFilter;
    return canFilter;
  });
  var activeFilterCount = activeFilters.length; // Merge labels from props with the default labels

  var labels = useMemo(function () {
    return _objectSpread({}, defaultLabels, {}, labelsProp);
  }, [labelsProp]); // Callback designed to stop event propagation on cells.
  // This is important for cells like the checkbox cell, as clicking the
  // checkbox would also trigger the row click.

  var handleCellClick = useCallback(function (isClickDisabled) {
    return function (event) {
      if (isClickDisabled) {
        event.stopPropagation();
      }
    };
  }, []); // Callback for closing the filter drawer

  var handleCloseDrawer = useCallback(function () {
    return setShowAdditionalFilters(false);
  }, []); // Determine how many filter buttons to show

  var maxFilterButtons = 3;
  var hasMoreFilters = false;

  if (isMobile) {
    maxFilterButtons = 0;
  } else if (isTablet) {
    maxFilterButtons = 1;
  }

  var filterDrawerComponents;

  if (activeFilterCount > maxFilterButtons) {
    // If we have more filters, then generate the components
    // for the filter drawer
    filterDrawerComponents = activeFilters.map(function (column, index) {
      return column.render("Filter", {
        container: "card",
        key: index,
        labels: {
          clear: labels.clearFilter,
          clearAll: labels.clearAllFilters
        }
      });
    }); // Display the "All filters" button

    hasMoreFilters = true;
  } // Render loading rows


  var loadingRows;

  if (isLoading) {
    loadingRows = [];
    /* eslint-disable no-loop-func */

    for (var index = 0; index < pageSize; index += 1) {
      loadingRows.push(React.createElement(TableRow, {
        className: clsx(_defineProperty({}, classes.tableRowOdd, (index + 1) % 2 !== 0)),
        key: "loading-".concat(index)
      }, flatColumns.map(function (column, cellIndex) {
        if (column.show === false) return null;
        return React.createElement(TableCell, {
          classes: {
            root: classes.tableCell
          },
          key: "cell-".concat(cellIndex),
          padding: column.id === "selection" ? "checkbox" : undefined
        }, column.id === "selection" ? React.createElement(Box, {
          paddingLeft: "12px",
          paddingTop: "13px",
          paddingBottom: "12px"
        }, React.createElement(Skeleton, {
          variant: "rect",
          width: 8 * 2 + 2
        })) : React.createElement(Skeleton, {
          variant: "text"
        }));
      })));
      /* eslint-enable no-loop-func */
    }
  }

  var extraRows = [];

  if (page.length < pageSize && !isLoading) {
    /* eslint-disable no-loop-func */
    for (var _index = page.length; _index < pageSize; _index += 1) {
      extraRows.push(React.createElement(TableRow, {
        className: clsx(_defineProperty({}, classes.tableRowOdd, (_index + 1) % 2 !== 0)),
        key: "empty-".concat(_index)
      }, flatColumns.map(function (column, cellIndex) {
        if (column.show === false) return null;
        return React.createElement(TableCell, {
          classes: {
            root: classes.tableCell
          },
          key: "cell-".concat(cellIndex),
          padding: column.id === "selection" ? "checkbox" : undefined
        }, "\xA0");
      })));
      /* eslint-enable no-loop-func */
    }
  }

  return React.createElement(React.Fragment, null, ToolbarComponent(props) || shouldShowStandardToolbar && React.createElement(Toolbar, null, actionMenuProps && React.createElement(Box, {
    paddingRight: 2
  }, React.createElement(ActionMenu, _extends({
    children: "Actions"
  }, actionMenuProps))), isFilterable && React.createElement(React.Fragment, null, React.createElement(TextField, {
    className: classes.textField,
    fullWidth: true,
    margin: "dense",
    placeholder: labels.globalFilterPlaceholder,
    onChange: function onChange(event) {
      return debounceSetGlobalFilter(event.target.value);
    },
    variant: "outlined"
  }), React.createElement(Box, {
    paddingLeft: 2
  }, React.createElement(ButtonGroup, null, activeFilters.slice(0, maxFilterButtons).map(function (column, index) {
    return column.render("Filter", {
      key: index,
      labels: {
        clear: labels.clearFilter,
        clearAll: labels.clearAllFilters
      }
    });
  }), hasMoreFilters && (FilterDrawerButtonComponent({
    children: labels.allFilters
  }) || React.createElement(Button, {
    color: "primary",
    onClick: function onClick() {
      return setShowAdditionalFilters(!shouldShowAdditionalFilters);
    }
  }, labels.allFilters)), "}"), hasMoreFilters && (FilterDrawerComponent({
    title: labels.allFiltersDrawerTitle,
    children: filterDrawerComponents
  }) || React.createElement(Drawer, {
    anchor: "right",
    open: shouldShowAdditionalFilters,
    onClose: handleCloseDrawer
  }, React.createElement(AppBar, {
    position: "sticky"
  }, React.createElement(Toolbar, null, React.createElement(Box, {
    flex: 1,
    paddingLeft: 2
  }, React.createElement(Typography, {
    variant: "h3"
  }, labels.allFiltersDrawerTitle)), React.createElement(IconButton, {
    onClick: handleCloseDrawer
  }, React.createElement(CloseIcon, null)))), React.createElement(Box, {
    paddingTop: 1,
    marginLeft: "-1px",
    marginRight: "-1px"
  }, filterDrawerComponents)))))), React.createElement(DataTableFilterChipBar, {
    columns: flatColumns,
    filters: filters,
    manualFilters: manualFilters,
    labels: labels,
    onRemove: onRemoveFilter,
    onRemoveManualFilter: onRemoveManualFilter
  }), React.createElement("div", {
    className: classes.tableWrapper
  }, React.createElement(Table, _extends({
    ref: ref
  }, getTableProps()), React.createElement(TableHead, {
    className: classes.tableHead
  }, headerGroups.map(function (headerGroup) {
    return React.createElement(TableRow, headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column) {
      if (column.show === false) return null;
      return React.createElement(TableCell, _extends({
        padding: column.id === "selection" ? "checkbox" : "default",
        classes: {
          root: classes.tableHead
        }
      }, column.getHeaderProps()), column.render("Header"));
    }));
  })), React.createElement(TableBody, {
    className: classes.tableBody
  }, loadingRows, !isLoading && page.map(function (row, index) {
    var _clsx3;

    return prepareRow(row) || React.createElement(TableRow, _extends({
      onClick: onRowClick && onRowClick(row)
    }, row.getRowProps(), {
      className: clsx((_clsx3 = {}, _defineProperty(_clsx3, classes.tableRowHover, true), _defineProperty(_clsx3, classes.tableRowSelected, row.isSelected), _defineProperty(_clsx3, classes.tableRowOdd, !row.isSelected && (index + 1) % 2 !== 0), _defineProperty(_clsx3, classes.tableRowClickable, onRowClick), _clsx3))
    }), row.cells.map(function (cell) {
      var _cell$getCellProps = cell.getCellProps(),
          isClickDisabled = _cell$getCellProps.isClickDisabled,
          cellProps = _objectWithoutProperties(_cell$getCellProps, ["isClickDisabled"]);

      if (cell.column.show === false) return null;
      return React.createElement(TableCell, _extends({
        onClick: handleCellClick(isClickDisabled),
        classes: {
          root: classes.tableCell
        }
      }, cellProps), cell.render("Cell"));
    }));
  }), extraRows))), PaginationComponent(props) || React.createElement(Toolbar, null, React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    paddingRight: 2
  }, React.createElement(Typography, {
    component: "span",
    variant: "body2"
  }, labels.page), React.createElement(Box, {
    maxWidth: 80,
    paddingLeft: 1,
    paddingRight: 1
  }, React.createElement(TextField, {
    className: classes.textField,
    margin: "dense",
    variant: "outlined",
    type: "number",
    size: "small",
    min: 1,
    max: pageOptions.length,
    value: pageIndex + 1,
    onChange: function onChange(event) {
      var pageNumber = Number(event.target.value);
      pageNumber = pageNumber > 0 ? pageNumber - 1 : 0;
      gotoPage(pageNumber);
    }
  })), React.createElement(Typography, {
    component: "span",
    variant: "body2"
  }, labels.pageOf({
    count: pageCount
  }))), React.createElement(Box, {
    flex: 1,
    maxWidth: 120
  }, React.createElement(Select, {
    value: {
      label: labels.pageSizeSelect({
        count: pageSize
      }),
      value: pageSize
    },
    onChange: function onChange(_ref4) {
      var value = _ref4.value;
      setPageSize(value);
    },
    options: pageSizes.map(function (value) {
      return {
        label: value,
        value: value
      };
    })
  })), React.createElement(Box, {
    flex: 1
  }), React.createElement(Button, {
    onClick: function onClick() {
      return previousPage();
    },
    disabled: !canPreviousPage
  }, React.createElement(ChevronLeftIcon, null), " ", labels.previous), React.createElement(Typography, {
    component: "span"
  }, " | "), React.createElement(Button, {
    onClick: function onClick() {
      return nextPage();
    },
    disabled: !canNextPage
  }, labels.next, " ", React.createElement(ChevronRightIcon, null))));
});
DataTable.propTypes = {
  /**
   * Component to replace the standard button for opening the filter drawer
   */
  FilterDrawerButtonComponent: PropTypes.func,

  /**
   * Component to replace the standard filter drawer
   */
  FilterDrawerComponent: PropTypes.func,

  /**
   * Replace the built-in pagination component with a custom component
   */
  PaginationComponent: PropTypes.elementType,

  /**
   * Replace the built-in toolbar component that contains the action menu and global filter controls
   * with a custom component.
   */
  ToolbarComponent: PropTypes.elementType,

  /**
   * Props applied to the built-in action menu. See ActionMenu component for available props.
   */
  actionMenuProps: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.shape({
      /**
       * Change the cancel button label in the confirm dialog
       */
      cancelActionText: PropTypes.string,

      /**
       * Change the label of the confirmation button in the confirm dialog
       */
      confirmActionText: PropTypes.string,

      /**
       * If supplied, the option will show a confirm dialog this message when selected.
       */
      confirmMessage: PropTypes.string,

      /**
       * If supplied, the option will show a confirm dialog this title when selected
       */
      confirmTitle: PropTypes.string,

      /**
       * Secondary option label
       */
      details: PropTypes.string,

      /**
       * Disable the option
       */
      isDisabled: PropTypes.bool,

      /**
       * Option label
       */
      label: PropTypes.string.isRequired,

      /**
       * If supplied, this function will be called in addition to onSelect
       */
      onClick: PropTypes.func
    }))
  }),

  /**
   * Can go to next page
  */
  canNextPage: PropTypes.bool,

  /**
   * Can go to previous page
  */
  canPreviousPage: PropTypes.bool,

  /**
   * The content of the Button
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * Column header data
   */
  columns: PropTypes.arrayOf(PropTypes.object),

  /**
   * Row data as an array of objects
   */
  data: PropTypes.arrayOf(PropTypes.object),

  /**
   * Set the global text filter on a delay
   */
  debounceSetGlobalFilter: PropTypes.func,

  /**
   * Flattened array of the original column data
   */
  flatColumns: PropTypes.arrayOf(PropTypes.object),

  /**
   * Get props for table
   */
  getTableProps: PropTypes.func,

  /**
   * Jump to a page
   */
  gotoPage: PropTypes.func,

  /**
   * Table headers
   */
  headerGroups: PropTypes.array,

  /**
   * Should show the table filters
   */
  isFilterable: PropTypes.bool,

  /**
   * Show loading indicator
   */
  isLoading: PropTypes.bool,

  /**
   * Is set to true if the table rows are selectable
   */
  isSelectable: PropTypes.bool,

  /**
   * Labels for various controls
   */
  labels: PropTypes.shape({
    /**
     * The "All filters" button in table toolbar
     */
    allFilters: PropTypes.string,

    /**
     * Drawer title for all filters
     */
    allFiltersDrawerTitle: PropTypes.string,

    /**
     * Label for clearing all filters
     */
    clearAllFilters: PropTypes.string,

    /**
     * Label for clearing a single filter
     */
    clearFilter: PropTypes.string,

    /**
     * Global filter text input label
     */
    globalFilterPlaceholder: PropTypes.string,

    /**
     * Loading message
     */
    loading: PropTypes.string,

    /**
     * Next button label
     */
    next: PropTypes.string,

    /**
     * Function to generate the total number of pages ({ count }) => \`of ${count}\`,
     */
    pageOf: PropTypes.func,

    /**
     * Function to generate the label in select dropdown ({ count }) => \`${count} rows`,
     */
    pageSizeSelect: PropTypes.func,

    /**
     * Previous button label
     */
    previous: PropTypes.string
  }),

  /**
   * Go to next page
   */
  nextPage: PropTypes.func,

  /**
   * Event triggered when global filter field has changed
   */
  onGlobalFilterChange: PropTypes.func,

  /**
   * Event triggered when a filter is removed with the `(key, multiSelectValueIfAvailable) => {}` signature.
   */
  onRemoveFilter: PropTypes.func,

  /**
   * Event triggered when a manual filter is removed with the `(key) => {}` signature.
   */
  onRemoveManualFilter: PropTypes.func,

  /**
   * Event triggered when a row is clicked
   */
  onRowClick: PropTypes.func,

  /**
   * Pages
   */
  page: PropTypes.array,

  /**
   * pageCount
   */
  pageCount: PropTypes.number,

  /**
   * Page options
   */
  pageOptions: PropTypes.array,

  /**
   * Row data as an array of objects
   */
  pageSizes: PropTypes.arrayOf(PropTypes.number),

  /**
   * Custom row renderer
   */
  prepareRow: PropTypes.func,

  /**
   * Go to previous page
   */
  previousPage: PropTypes.func,

  /**
   * Set the global text filter
   */
  setGlobalFilter: PropTypes.func,

  /**
   * Set the size of the pages
   */
  setPageSize: PropTypes.func,

  /**
   * Callback for setting the state shouldShowAdditionalFilters
   */
  setShowAdditionalFilters: PropTypes.func,

  /**
   * Show or hide the additional filters drawer
   */
  shouldShowAdditionalFilters: PropTypes.bool,

  /**
   * Table state
   */
  state: PropTypes.object
};
DataTable.defaultProps = {
  FilterDrawerButtonComponent: function FilterDrawerButtonComponent() {},
  FilterDrawerComponent: function FilterDrawerComponent() {},
  ToolbarComponent: function ToolbarComponent() {},
  PaginationComponent: function PaginationComponent() {},
  isFilterable: true,
  labels: defaultLabels,
  pageSizes: [10, 20, 30, 40, 50]
};
export default DataTable;