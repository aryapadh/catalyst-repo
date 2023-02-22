import "core-js/modules/es7.object.get-own-property-descriptors";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.keys";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from "react";
import PropTypes from "prop-types";
import { render } from "@testing-library/react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { SnackbarProvider } from "notistack";
import defaultTheme from "../theme/defaultTheme";
/**
 * Component that wraps components with mock providers during testing.
 * @return {Component} - Component wrapped with mock providers
 */

var TestProviders = function TestProviders(_ref) {
  var children = _ref.children;
  return React.createElement(MuiThemeProvider, {
    theme: defaultTheme
  }, React.createElement(SnackbarProvider, null, children));
};

TestProviders.propTypes = {
  /** React Component */
  children: PropTypes.element.isRequired
};
/**
 * Custom test renderer that wraps all components with the appropriate mock providers.
 * @param {Component} component - React component to render.
 * @param {Object} options - Options.
 * @return {Object} - @see {@link https://testing-library.com/docs/react-testing-library/api#render-result|react-testing-library}
 */

var renderWithProviders = function renderWithProviders(component, options) {
  return render(component, _objectSpread({
    wrapper: TestProviders
  }, options));
};

export * from "@testing-library/react";
export { renderWithProviders as render };