import React from "react";
import { render } from "../tests";
import Select from "./Select";
var options = ["Mens", "Womens", "Kids"].map(function (option) {
  return {
    label: option.toLowerCase(),
    value: option
  };
});
test("basic snapshot test", function () {
  var _render = render(React.createElement(Select, {
    options: options
  })),
      asFragment = _render.asFragment;

  expect(asFragment()).toMatchSnapshot();
});