import "core-js/modules/es7.object.get-own-property-descriptors";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import useConfirmDialog from "./helpers/useConfirmDialog";
/**
 * @name ConfirmDialog
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */

var ConfirmDialog = React.forwardRef(function ConfirmDialog(props, ref) {
  var children = props.children,
      otherProps = _objectWithoutProperties(props, ["children"]);

  var _useConfirmDialog = useConfirmDialog(_objectSpread({}, otherProps)),
      isOpen = _useConfirmDialog.isOpen,
      openDialog = _useConfirmDialog.openDialog,
      closeDialog = _useConfirmDialog.closeDialog,
      ConfirmDialogComponent = _useConfirmDialog.ConfirmDialog;

  return React.createElement(Fragment, null, children({
    closeDialog: closeDialog,
    isOpen: isOpen,
    openDialog: openDialog
  }), React.createElement(ConfirmDialogComponent, {
    ref: ref
  }));
});
ConfirmDialog.propTypes = {
  /**
   * Cancel button text
   */
  cancelActionText: PropTypes.string,

  /**
   * Render prop `{({ closeDialog, isOpen, openDialog }) => ()}`
   */
  children: PropTypes.func,

  /**
   * Text for confirm button
   */
  confirmActionText: PropTypes.string,

  /**
   * Child elements of the dialog. Use if this for rendering a custom components in the dialog.
  */
  content: PropTypes.element,

  /**
   * Dialog open/close state
   */
  isOpen: PropTypes.bool,

  /**
   * Message body. May be a string or a React component. Use if your message is mostly text.
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
ConfirmDialog.defaultProps = {
  cancelActionText: "Cancel",
  confirmActionText: "OK",
  onClose: function onClose() {},
  onConfirm: function onConfirm() {}
};
export default ConfirmDialog;