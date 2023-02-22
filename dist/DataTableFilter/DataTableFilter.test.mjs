import React from "react";
import { render } from "../tests/index.js";
import DataTableFilter from "./DataTableFilter";
var options = [{
  label: "Created",
  value: "created"
}, {
  label: "Processing",
  value: "processing"
}, {
  label: "Canceled",
  isDisabled: "canceled"
}];
test("basic snapshot - only default props", function () {
  var _render = render(React.createElement(DataTableFilter, {
    options: options,
    title: "Filter"
  })),
      asFragment = _render.asFragment;

  expect(asFragment()).toMatchSnapshot();
});