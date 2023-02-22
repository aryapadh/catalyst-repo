import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Box, ListItemText, Menu, MenuItem, makeStyles } from "@material-ui/core";
import ChevronDownIcon from "mdi-material-ui/ChevronDown";
import Button from "../Button";
import ConfirmDialog from "../ConfirmDialog";
var useStyles = makeStyles(function (theme) {
  return {
    button: {
      paddingRight: theme.spacing(1.5)
    }
  };
});
/**
 * @name ActionMenu
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */

var ActionMenu = React.forwardRef(function ActionMenu(props, ref) {
  var children = props.children,
      onSelect = props.onSelect,
      options = props.options,
      otherProps = _objectWithoutProperties(props, ["children", "onSelect", "options"]);

  var classes = useStyles();

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var anchorRef = ref || React.useRef(null);
  /**
   * Handle menu item click
   * @param {SyntheticEvent} event Event object
   * @param {Number} index Menu item index
   * @returns {undefined}
   */

  function handleMenuItemClick(_ref) {
    var event = _ref.event,
        index = _ref.index,
        onClick = _ref.onClick;
    var selectedOption = options[index];
    onSelect && onSelect(selectedOption, index);
    onClick && onClick(event);
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


  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  return React.createElement(Fragment, null, React.createElement(Button, _extends({
    "aria-controls": "action-menu",
    "aria-haspopup": "true",
    className: classes.button,
    onClick: handleToggle,
    ref: anchorRef
  }, otherProps), children, React.createElement(Box, {
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
    key: "default-label",
    disabled: true
  }, React.createElement(Box, {
    maxWidth: 320,
    whiteSpace: "normal"
  }, React.createElement(ListItemText, {
    primary: children
  }))), options.map(function (option, index) {
    var label = option.label,
        details = option.details,
        isDisabled = option.isDisabled,
        cancelActionText = option.cancelActionText,
        confirmActionText = option.confirmActionText,
        confirmTitle = option.confirmTitle,
        confirmMessage = option.confirmMessage,
        onClick = option.onClick;

    var callback = function callback(event) {
      return handleMenuItemClick({
        event: event,
        index: index,
        onClick: onClick
      });
    };

    if (confirmTitle || confirmMessage) {
      return React.createElement(ConfirmDialog, {
        key: "dialog-".concat(index),
        cancelActionText: cancelActionText,
        confirmActionText: confirmActionText,
        title: confirmTitle,
        message: confirmMessage,
        onConfirm: callback
      }, function (_ref2) {
        var openDialog = _ref2.openDialog;
        return React.createElement(MenuItem, {
          key: index,
          disabled: isDisabled,
          onClick: openDialog
        }, React.createElement(Box, {
          maxWidth: 320,
          whiteSpace: "normal"
        }, React.createElement(ListItemText, {
          primary: label,
          secondary: details
        })));
      });
    }

    return React.createElement(MenuItem, {
      key: index,
      disabled: isDisabled,
      onClick: callback
    }, React.createElement(Box, {
      maxWidth: 320,
      whiteSpace: "normal"
    }, React.createElement(ListItemText, {
      primary: label,
      secondary: details
    })));
  })));
});
ActionMenu.defaultProps = {
  color: "primary",
  variant: "outlined"
};
ActionMenu.propTypes = {
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
   * If `true`, the CircularProgress will be displayed and the button will be disabled.
   */
  isWaiting: PropTypes.bool,

  /**
   * Called when an option is selected. Can be use simultaneously with option onClick callbacks.
   */
  onSelect: PropTypes.func,

  /**
   * Menu options
   */
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
};
export default ActionMenu;