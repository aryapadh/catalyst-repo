import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "react";
import PropTypes from "prop-types";
/**
 * @name Input
 * @param {Function } inputRef Input reference
 * @param {Object} props Component props
 * @returns {React.Component} A React Component
 */

export default function Input(_ref) {
  var inputRef = _ref.inputRef,
      props = _objectWithoutProperties(_ref, ["inputRef"]);

  return React.createElement("div", _extends({
    ref: inputRef
  }, props));
}
Input.propTypes = {
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
    current: PropTypes.any.isRequired
  })])
};