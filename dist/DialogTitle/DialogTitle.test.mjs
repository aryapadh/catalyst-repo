import React from "react";
import { render } from "../tests/index.js";
import DialogTitle from "./DialogTitle";
test("basic snapshot - only default props", function () {
  var _render = render(React.createElement(DialogTitle, null, "Archive 24 products?")),
      asFragment = _render.asFragment;

  expect(asFragment()).toMatchSnapshot();
});