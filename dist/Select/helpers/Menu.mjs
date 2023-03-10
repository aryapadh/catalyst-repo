import _extends from "@babel/runtime/helpers/esm/extends";
import React from "react";
import PropTypes from "prop-types";
import { Paper } from "@material-ui/core";
/**
 * @name Menu
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */

export default function Menu(props) {
  return React.createElement(Paper, _extends({
    elevation: 2,
    className: props.selectProps.classes.paper
  }, props.innerProps), props.children);
}
Menu.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.element.isRequired,

  /**
   * Props to be passed to the menu wrapper.
   */
  innerProps: PropTypes.object.isRequired,
  selectProps: PropTypes.object.isRequired
};