import React from "react";
import { render } from "../tests/index.js";
import Chip from "./Chip";
test("basic snapshot - only default props", function () {
  var _render = render(React.createElement(Chip, null)),
      asFragment = _render.asFragment;

  expect(asFragment()).toMatchSnapshot();
});
test("deletable chip snapshot", function () {
  var onDelete = function onDelete() {};

  var _render2 = render(React.createElement(Chip, {
    color: "primary",
    variant: "default",
    onDelete: onDelete
  })),
      asFragment = _render2.asFragment;

  expect(asFragment()).toMatchSnapshot();
});
test("deletable chip in small, secondary sizesnapshot", function () {
  var onDelete = function onDelete() {};

  var _render3 = render(React.createElement(Chip, {
    color: "secondary",
    variant: "default",
    onDelete: onDelete,
    size: "small"
  })),
      asFragment = _render3.asFragment;

  expect(asFragment()).toMatchSnapshot();
});
test("error chip snapshot", function () {
  var _render4 = render(React.createElement(Chip, {
    color: "error"
  })),
      asFragment = _render4.asFragment;

  expect(asFragment()).toMatchSnapshot();
});