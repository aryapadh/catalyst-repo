import "core-js/modules/es7.object.get-own-property-descriptors";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import _extends from "@babel/runtime/helpers/esm/extends";
import "core-js/modules/es7.array.includes";
import "core-js/modules/es6.string.includes";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from "react";
import PropTypes from "prop-types";
import { Chip as MuiChip, makeStyles } from "@material-ui/core";
import clsx from "clsx";
var useStyles = makeStyles(function (theme) {
  return {
    success: {
      color: theme.palette.colors.coolGrey500,
      backgroundColor: theme.palette.colors.forestGreen100
    },
    info: {
      color: theme.palette.colors.coolGrey500,
      backgroundColor: theme.palette.colors.darkBlue100
    },
    danger: {
      color: theme.palette.colors.coolGrey500,
      backgroundColor: theme.palette.colors.red100
    },
    colorPrimaryError: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.colors.red
    },
    outlinedPrimaryError: {
      color: theme.palette.colors.red,
      border: "1px solid ".concat(theme.palette.colors.red)
    }
  };
});
/**
 * @name Chip
 * @param {Object} props Component props
 * @returns {React.Component} returns a React component
 */

var Chip = React.forwardRef(function Chip(props, ref) {
  var _clsx;

  var color = props.color,
      variant = props.variant,
      otherProps = _objectWithoutProperties(props, ["color", "variant"]);

  var classes = useStyles();
  var colorVariants = clsx((_clsx = {}, _defineProperty(_clsx, classes.success, color === "success"), _defineProperty(_clsx, classes.info, color === "info"), _defineProperty(_clsx, classes.danger, color === "danger"), _clsx));
  var errorClasses = {};
  var errorColorProp = {};

  if (color === "error") {
    errorClasses = {
      colorPrimary: clsx(_defineProperty({}, classes.colorPrimaryError, variant === "default")),
      outlinedPrimary: clsx(_defineProperty({}, classes.outlinedPrimaryError, variant === "outlined"))
    };
    errorColorProp = {
      color: "primary"
    };
  }

  var colorProp = {}; // Only add props accepted by MUI Chip

  if (["default", "primary", "secondary"].includes(color)) {
    colorProp = {
      color: color
    };
  }

  return React.createElement(MuiChip, _extends({}, colorProp, {
    classes: _objectSpread({}, errorClasses, {
      root: colorVariants
    }),
    variant: variant
  }, errorColorProp, {
    ref: ref // eslint-disable-next-line react/jsx-indent-props

  }, otherProps));
});
Chip.propTypes = {
  /**
   * CSS Classes
   */
  classes: PropTypes.object,

  /**
   * The color of the component
   */
  color: PropTypes.oneOf(["default", "primary", "secondary", "success", "info", "danger", "error"]),

  /**
   * The variant to use
   */
  variant: PropTypes.oneOf(["default", "outlined"])
};
Chip.defaultProps = {
  color: "primary",
  variant: "default"
};
export default Chip;