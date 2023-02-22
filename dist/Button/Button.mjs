import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "react";
import PropTypes from "prop-types";
import { CircularProgress, Button as MuiButton, makeStyles } from "@material-ui/core";
var useStyles = makeStyles(function (theme) {
  return {
    buttonProgress: {
      marginLeft: theme.spacing()
    },
    containedPrimary: {
      "color": theme.palette.primary.contrastText,
      "backgroundColor": theme.palette.colors.red,
      "&:hover": {
        "backgroundColor": theme.palette.colors.redHover,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: theme.palette.colors.redHover
        }
      }
    },
    outlinedPrimary: {
      "color": theme.palette.colors.red,
      "border": "1px solid ".concat(theme.palette.colors.red),
      "&:hover": {
        "border": "1px solid ".concat(theme.palette.colors.redBorder),
        "backgroundColor": theme.palette.colors.redBackground,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  };
});
/**
 * @name Button
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */

var Button = React.forwardRef(function Button(props, ref) {
  var children = props.children,
      color = props.color,
      disabled = props.disabled,
      isWaiting = props.isWaiting,
      otherProps = _objectWithoutProperties(props, ["children", "color", "disabled", "isWaiting"]);

  var classes = useStyles();

  if (color === "error") {
    return React.createElement(MuiButton, _extends({
      classes: {
        containedPrimary: classes.containedPrimary,
        outlinedPrimary: classes.outlinedPrimary
      },
      color: "primary",
      disabled: disabled || isWaiting,
      ref: ref
    }, otherProps), children, isWaiting && React.createElement(CircularProgress, {
      size: 16,
      className: classes.buttonProgress
    }));
  }

  return React.createElement(MuiButton, _extends({
    color: color,
    disabled: disabled || isWaiting,
    ref: ref
  }, otherProps), children, isWaiting && React.createElement(CircularProgress, {
    size: 16,
    className: classes.buttonProgress
  }));
});
Button.propTypes = {
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
   * onClick callback
   */
  onClick: PropTypes.func
};
export default Button;