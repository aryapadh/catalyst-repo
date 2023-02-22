import React from "react";
import { render } from "../tests/index.js";
import Toast from "./Toast";
test("basic snapshot - only default props", function () {
  var _render = render(React.createElement(Toast, {
    message: "Test message",
    open: true
  })),
      asFragment = _render.asFragment;

  expect(asFragment()).toMatchSnapshot();
});
test("basic snapshot - information variant", function () {
  var _render2 = render(React.createElement(Toast, {
    message: "Test message",
    variant: "info",
    open: true
  })),
      asFragment = _render2.asFragment;

  expect(asFragment()).toMatchSnapshot();
});
test("basic snapshot - success variant", function () {
  var _render3 = render(React.createElement(Toast, {
    message: "Test message",
    variant: "success",
    open: true
  })),
      asFragment = _render3.asFragment;

  expect(asFragment()).toMatchSnapshot();
});
test("basic snapshot - error variant", function () {
  var _render4 = render(React.createElement(Toast, {
    message: "Test message",
    variant: "error",
    open: true
  })),
      asFragment = _render4.asFragment;

  expect(asFragment()).toMatchSnapshot();
});
test("basic snapshot - warning variant", function () {
  var _render5 = render(React.createElement(Toast, {
    message: "Test message",
    variant: "warning",
    open: true
  })),
      asFragment = _render5.asFragment;

  expect(asFragment()).toMatchSnapshot();
});