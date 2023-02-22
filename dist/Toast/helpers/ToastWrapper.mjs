import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Paper, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "mdi-material-ui/Close";
var useStyles = makeStyles(function (theme) {
  return {
    close: {
      padding: theme.spacing(0.5),
      marginLeft: "auto",
      height: "100%"
    },
    messageWrapper: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    },
    title: {
      padding: theme.spacing(0.5, 0, 1, 0),
      fontWeight: theme.typography.fontWeightSemiBold
    },
    action: {
      marginLeft: "auto"
    },
    success: {
      fontSize: theme.typography.fontSize,
      backgroundColor: theme.palette.colors.forestGreenBackground,
      color: theme.palette.colors.forestGreen600,
      border: "".concat(theme.spacing(0.25), "px solid ").concat(theme.palette.colors.forestGreenBorder),
      padding: theme.spacing(1, 2),
      borderRadius: theme.shape.borderRadius,
      minWidth: 288,
      display: "flex"
    },
    error: {
      fontSize: theme.typography.fontSize,
      backgroundColor: theme.palette.colors.redBackground,
      color: theme.palette.colors.red600,
      border: "".concat(theme.spacing(0.25), "px solid ").concat(theme.palette.colors.redBorder),
      padding: theme.spacing(1, 2),
      borderRadius: theme.shape.borderRadius,
      minWidth: 288,
      display: "flex"
    },
    info: {
      fontSize: theme.typography.fontSize,
      backgroundColor: theme.palette.colors.reactionBlueBackground,
      color: theme.palette.colors.reactionBlue600,
      border: "".concat(theme.spacing(0.25), "px solid ").concat(theme.palette.colors.reactionBlueBorder),
      padding: theme.spacing(1, 2),
      borderRadius: theme.shape.borderRadius,
      minWidth: 288,
      display: "flex"
    },
    warning: {
      fontSize: theme.typography.fontSize,
      backgroundColor: theme.palette.colors.yellowBackground,
      color: theme.palette.colors.yellow600,
      border: "".concat(theme.spacing(0.25), "px solid ").concat(theme.palette.colors.yellowBorder),
      padding: theme.spacing(1, 2),
      borderRadius: theme.shape.borderRadius,
      minWidth: 288,
      display: "flex"
    }
  };
});
/**
 * @name ToastWrapper
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */

export default function ToastWrapper(props) {
  var className = props.className,
      message = props.message,
      variant = props.variant,
      title = props.title,
      onClose = props.onClose,
      otherProps = _objectWithoutProperties(props, ["className", "message", "variant", "title", "onClose"]);

  var classes = useStyles();
  return React.createElement(Paper, _extends({
    component: "div",
    role: "alertdialog",
    square: true,
    elevation: 6,
    className: clsx(classes[variant], className),
    "aria-describedby": "message-id"
  }, otherProps), React.createElement("div", {
    className: classes.messageWrapper
  }, title ? React.createElement(Typography, {
    variant: "h4",
    component: "div",
    className: classes.title
  }, title) : null, message), React.createElement(IconButton, {
    key: "close",
    "aria-label": "close",
    className: classes.close,
    onClick: onClose
  }, React.createElement(CloseIcon, null)));
}
ToastWrapper.propTypes = {
  action: PropTypes.node,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  title: PropTypes.string,
  variant: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired
};