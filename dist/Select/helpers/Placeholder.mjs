import _extends from "@babel/runtime/helpers/esm/extends";
import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
/**
 * @name Placeholder
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */

export default function Placeholder(props) {
  var selectProps = props.selectProps,
      _props$innerProps = props.innerProps,
      innerProps = _props$innerProps === void 0 ? {} : _props$innerProps,
      children = props.children;
  return React.createElement(Typography, _extends({
    color: "textSecondary",
    className: selectProps.classes.placeholder
  }, innerProps), children);
}
Placeholder.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,

  /**
   * props passed to the wrapping element for the group.
   */
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired
};