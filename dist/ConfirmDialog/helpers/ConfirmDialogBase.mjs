import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "../../DialogTitle";
/**
 * @name ConfirmDialogBase
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */

var ConfirmDialogBase = React.forwardRef(function ConfirmDialogBase(props, ref) {
  var cancelActionText = props.cancelActionText,
      children = props.children,
      confirmActionText = props.confirmActionText,
      isOpen = props.isOpen,
      onClose = props.onClose,
      message = props.message,
      onConfirm = props.onConfirm,
      title = props.title,
      otherProps = _objectWithoutProperties(props, ["cancelActionText", "children", "confirmActionText", "isOpen", "onClose", "message", "onConfirm", "title"]);

  return React.createElement(Dialog, _extends({
    "aria-labelledby": "confirm-action-dialog-title",
    maxWidth: "sm",
    fullWidth: true,
    onClose: onClose,
    open: isOpen,
    ref: ref
  }, otherProps), React.createElement(DialogTitle, {
    id: "confirm-action-dialog-title"
  }, title), message && React.createElement(DialogContent, null, React.createElement(DialogContentText, null, message)), children && React.createElement(DialogContent, null, children), React.createElement(DialogActions, null, React.createElement(Button, {
    onClick: onClose,
    color: "primary",
    variant: "outlined"
  }, cancelActionText), React.createElement(Button, {
    onClick: onConfirm,
    color: "primary",
    variant: "contained"
  }, confirmActionText)));
});
ConfirmDialogBase.propTypes = {
  /**
   * Cancel button text
   */
  cancelActionText: PropTypes.string,

  /**
   * Child elements of the dialog
   */
  children: PropTypes.element,

  /**
   * Text for confirm button
   */
  confirmActionText: PropTypes.string,

  /**
   * Dialog open/close state
   */
  isOpen: PropTypes.bool,

  /**
   * Message body. May be a string or a React component.
   */
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Close callback
   */
  onClose: PropTypes.func,

  /**
   * Confirmation callback
   */
  onConfirm: PropTypes.func,

  /**
   * Dialog title
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
ConfirmDialogBase.defaultProps = {
  cancelActionText: "Cancel",
  confirmActionText: "OK",
  onClose: function onClose() {},
  onConfirm: function onConfirm() {}
};
export default ConfirmDialogBase;