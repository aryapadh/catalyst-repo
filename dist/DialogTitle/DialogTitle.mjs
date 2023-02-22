import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "react";
import PropTypes from "prop-types";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
/**
 * @name DialogTitle
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */

var DialogTitle = React.forwardRef(function DialogTitle(props, ref) {
  var children = props.children,
      other = _objectWithoutProperties(props, ["children"]);

  return React.createElement(MuiDialogTitle, _extends({
    disableTypography: true,
    ref: ref
  }, other), React.createElement(Typography, {
    component: "h2",
    variant: "h4"
  }, children));
});
DialogTitle.propTypes = {
  /**
   * Children
   */
  children: PropTypes.node
};
export default DialogTitle;