import "core-js/modules/es7.object.get-own-property-descriptors";
import "core-js/modules/es6.object.keys";
import _extends from "@babel/runtime/helpers/esm/extends";
import "core-js/modules/es7.array.includes";
import "core-js/modules/es6.string.includes";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.string.iterator";
import "core-js/modules/es6.set";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { Fragment, useCallback } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Checkbox, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Box, Menu, MenuItem, Link, List, ListItem, ListItemText, Typography, RadioGroup, Radio, FormControlLabel, makeStyles } from "@material-ui/core";
import ChevronDownIcon from "mdi-material-ui/ChevronDown";
import Button from "../Button";
var useStyles = makeStyles(function (theme) {
  return {
    button: {
      whiteSpace: "nowrap",
      paddingRight: theme.spacing(1.5)
    },
    listItem: {
      paddingTop: 0,
      paddingBottom: 0
    },
    expansionPanel: {},
    expansionPanelDetails: {
      paddingLeft: theme.spacing(1.5)
    }
  };
});
var defaultLabels = {
  clear: "Clear",
  clearAll: "Clear all"
};
/**
 * @name DataTableFilter
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */

var DataTableFilter = React.forwardRef(function DataTableFilter(props, ref) {
  var children = props.children,
      isMulti = props.isMulti,
      onSelect = props.onSelect,
      options = props.options,
      container = props.container,
      labelsProp = props.labels,
      title = props.title,
      value = props.value,
      classNameProp = props.className,
      otherProps = _objectWithoutProperties(props, ["children", "isMulti", "onSelect", "options", "container", "labels", "title", "value", "className"]);

  var classes = useStyles();

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var anchorRef = ref || React.useRef(null);

  var labels = _objectSpread({}, defaultLabels, {}, labelsProp);
  /**
   * Toggle menu open
   * @returns {undefined}
   */


  function handleToggle() {
    setOpen(function (prevOpen) {
      return !prevOpen;
    });
  }
  /**
   * Handle menu close
   * @param {SyntheticEvent} event Event object
   * @returns {undefined}
   */


  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  var handleCheckboxChange = useCallback(function (event) {
    var values = Array.isArray(value) ? value : [];
    var controlValue = event.target.value;
    var selectedValues;

    if (event.target.checked === false) {
      var newValues = values.filter(function (item) {
        return item !== controlValue;
      });
      selectedValues = newValues.length > 0 ? newValues : null;
    } else {
      selectedValues = _toConsumableArray(new Set([event.target.value].concat(_toConsumableArray(values))));
    }

    onSelect(selectedValues);
  }, [onSelect]);
  var menuItems;

  if (isMulti) {
    menuItems = options.map(function (option, index) {
      var label = option.label,
          optionValue = option.value,
          isDisabled = option.isDisabled;
      return React.createElement(ListItem, {
        className: classes.listItem,
        key: index
      }, React.createElement(FormControlLabel, {
        onChange: handleCheckboxChange,
        value: optionValue,
        control: React.createElement(Checkbox, null),
        label: label,
        disabled: isDisabled,
        checked: Array.isArray(value) && value.includes(optionValue)
      }));
    });
  } else {
    menuItems = React.createElement(RadioGroup, {
      onChange: function onChange(event) {
        return onSelect(event.target.value);
      },
      value: value || "",
      "aria-label": title
    }, React.createElement(FormControlLabel, {
      style: {
        display: "none"
      },
      key: "noneSelected",
      control: React.createElement(Radio, null),
      value: ""
    }), options.map(function (option, index) {
      var label = option.label,
          optionValue = option.value,
          isDisabled = option.isDisabled;
      return React.createElement(ListItem, {
        className: classes.listItem,
        key: index
      }, React.createElement(FormControlLabel, {
        value: optionValue,
        control: React.createElement(Radio, null),
        label: label,
        disabled: isDisabled
      }));
    }));
  }

  if (container === "card") {
    return React.createElement(ExpansionPanel, {
      className: clsx(classes.expansionPanel, classNameProp)
    }, React.createElement(ExpansionPanelSummary, {
      expandIcon: React.createElement(ChevronDownIcon, null)
    }, React.createElement(Typography, null, title)), React.createElement(ExpansionPanelDetails, {
      className: classes.expansionPanelDetails
    }, React.createElement(Box, null, React.createElement(List, null, menuItems, React.createElement(ListItem, {
      key: "clear-button"
    }, React.createElement(Link, {
      component: "button",
      variant: "body2",
      onClick: function onClick() {
        return onSelect(null);
      }
    }, isMulti ? labels.clearAll : labels.clear))))));
  }

  return React.createElement(Fragment, null, React.createElement(Button, _extends({
    "aria-controls": "filter-menu",
    "aria-haspopup": "true",
    className: clsx(classes.button, classNameProp),
    onClick: handleToggle,
    ref: anchorRef,
    variant: "outlined"
  }, otherProps), title, React.createElement(Box, {
    display: "flex",
    paddingLeft: 1
  }, React.createElement(ChevronDownIcon, null))), React.createElement(Menu, {
    MenuListProps: {
      disablePadding: true
    },
    anchorEl: anchorRef.current,
    id: "action-menu",
    keepMounted: true,
    open: open,
    onClose: handleClose
  }, React.createElement(MenuItem, {
    className: classes.listItem,
    key: "default-label",
    disabled: true
  }, React.createElement(Box, {
    whiteSpace: "normal"
  }, React.createElement(ListItemText, {
    primary: title
  }))), menuItems, React.createElement(ListItem, {
    key: "clear-button"
  }, React.createElement(Link, {
    component: "button",
    variant: "body2",
    onClick: function onClick() {
      return onSelect(null);
    }
  }, labels.clear))));
});
DataTableFilter.defaultProps = {
  color: "primary",
  isMulti: false,
  labels: defaultLabels,
  onSelect: function onSelect() {},
  variant: "outlined"
};
DataTableFilter.propTypes = {
  /**
   * The content of the Button
   */
  children: PropTypes.node,

  /**
   * Class name to be applied to the root element
  */
  className: PropTypes.string,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * Options: `default` | `inherit` | `primary` | `secondary` | `error`
   */
  color: PropTypes.string,

  /**
   * Container type to display as
   */
  container: PropTypes.oneOf(["default", "card"]),

  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  // eslint-disable-line

  /**
   * If `true, the filter options can be multi-selected
   */
  isMulti: PropTypes.bool,

  /**
   * If `true`, the CircularProgress will be displayed and the button will be disabled.
   */
  isWaiting: PropTypes.bool,

  /**
   * Labels for various components
   */
  labels: PropTypes.shape({
    /**
     * Clear all for multi-select filters
     */
    clearAll: PropTypes.string,

    /**
     * Clear label for single select filters
     */
    clear: PropTypes.string
  }),

  /**
   * Called when an option is selected. Can be use simultaneously with option onClick callbacks.
   */
  onSelect: PropTypes.func,

  /**
   * Menu options
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Disable the option
     */
    isDisabled: PropTypes.bool,

    /**
     * Option label
     */
    label: PropTypes.string.isRequired,

    /**
     * Value for the item
     */
    value: PropTypes.any.isRequired
  })),

  /**
   * Title used for dropdown, card and aria labels for form controls
   */
  title: PropTypes.string,

  /**
   * Value to match with selected item(s)
   */
  value: PropTypes.any
};
export default DataTableFilter;