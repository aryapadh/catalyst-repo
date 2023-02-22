import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Box, ButtonGroup, ListItemText, Menu, MenuItem, MenuList } from "@material-ui/core";
import MenuDownIcon from "mdi-material-ui/MenuDown";
import Button from "../Button";
/**
 * @name Button
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */

var SplitButton = React.forwardRef(function SplitButton(props, ref) {
  var children = props.children,
      colorProp = props.color,
      initialSelectedOption = props.initialSelectedOption,
      onClick = props.onClick,
      options = props.options,
      otherProps = _objectWithoutProperties(props, ["children", "color", "initialSelectedOption", "onClick", "options"]);

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var anchorRef = ref || React.useRef();

  var _React$useState3 = React.useState(initialSelectedOption),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      selectedIndex = _React$useState4[0],
      setSelectedIndex = _React$useState4[1];

  var selectedOption = options[selectedIndex];
  var color = selectedOption.isDestructive ? "error" : colorProp;
  /**
   * Handle option click
   * @returns {undefined}
   */

  function handleClick() {
    onClick && onClick(selectedOption, selectedIndex);
  }
  /**
   * Handle menu item click
   * @param {SyntheticEvent} event Event object
   * @param {Number} index Menu item index
   * @returns {undefined}
   */


  function handleMenuItemClick(event, index) {
    setSelectedIndex(index);
    setOpen(false);
  }
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


  function handleClose() {
    setOpen(false);
  }

  return React.createElement(Fragment, null, React.createElement(ButtonGroup, {
    variant: "contained",
    ref: anchorRef
  }, React.createElement(Button, _extends({
    color: color,
    "data-testid": "splitButton-action-button",
    onClick: handleClick
  }, otherProps), selectedOption.label), React.createElement(Button, {
    color: color,
    "data-testid": "splitButton-dropdown-button",
    variant: "contained",
    size: "small",
    "aria-owns": open ? "menu-list-grow" : undefined,
    "aria-haspopup": "true",
    onClick: handleToggle
  }, React.createElement(MenuDownIcon, null))), React.createElement(Menu, {
    open: open,
    anchorEl: anchorRef.current,
    transition: true,
    keepMounted: true,
    onClose: handleClose // variant="menu"
    ,
    anchorOrigin: {
      horizontal: "center",
      vertical: "top"
    },
    transformOrigin: {
      horizontal: "center",
      vertical: "top"
    }
  }, React.createElement(MenuList, {
    disablePadding: true
  }, options.map(function (_ref, index) {
    var label = _ref.label,
        details = _ref.details,
        isDisabled = _ref.isDisabled;
    return React.createElement(MenuItem, {
      key: label,
      disabled: isDisabled,
      selected: index === selectedIndex,
      onClick: function onClick(event) {
        return handleMenuItemClick(event, index);
      }
    }, React.createElement(Box, {
      maxWidth: 320,
      whiteSpace: "normal"
    }, React.createElement(ListItemText, {
      primary: label,
      secondary: details
    })));
  }))));
});
SplitButton.defaultProps = {
  color: "primary",
  initialSelectedOption: 0
};
SplitButton.propTypes = {
  /**
   * The content of the Button
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,

  /**
   * Options: `default` | `inherit` | `primary` | `secondary` | `error`
   */
  color: PropTypes.string,

  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  // eslint-disable-line

  /**
   * Initial selected option index
   */
  initialSelectedOption: PropTypes.number,

  /**
   * If `true`, the CircularProgress will be displayed and the button will be disabled.
   */
  isWaiting: PropTypes.bool,

  /**
   * onClick callback
   */
  onClick: PropTypes.func,

  /**
   * Menu options
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    details: PropTypes.string,
    isDestructive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    label: PropTypes.string.isRequired
  }))
};
export default SplitButton;