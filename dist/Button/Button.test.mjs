import React from "react";
import { render } from "../tests/index.js";
import Button from "./Button";
test("basic snapshot - only default props", function () {
  var _render = render(React.createElement(Button, {
    className: "myBtn"
  }, "Submit")),
      asFragment = _render.asFragment;

  expect(asFragment()).toMatchSnapshot();
});
test("error button snapshot", function () {
  var _render2 = render(React.createElement(Button, {
    className: "myBtn",
    color: "error",
    variant: "contained"
  }, "Delete")),
      asFragment = _render2.asFragment;

  expect(asFragment()).toMatchSnapshot();
});
test("error button snapshot", function () {
  var _render3 = render(React.createElement(Button, {
    className: "myBtn",
    color: "error",
    variant: "outlined"
  }, "Delete")),
      asFragment = _render3.asFragment;

  expect(asFragment()).toMatchSnapshot();
});
test("isWaiting button snapshot", function () {
  var _render4 = render(React.createElement(Button, {
    className: "myBtn",
    isWaiting: true
  }, "Upload")),
      asFragment = _render4.asFragment,
      getByText = _render4.getByText;

  expect(getByText("Upload")).toBeDisabled();
  expect(asFragment()).toMatchSnapshot();
});