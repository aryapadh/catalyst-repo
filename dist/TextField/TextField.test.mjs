import React from "react";
import { MenuItem } from "@material-ui/core";
import { render } from "../tests/index.js";
import TextField from "./TextField";
test("snapshot - singleline", function () {
  var _render = render(React.createElement(TextField, {
    value: "hello"
  })),
      asFragment = _render.asFragment;

  expect(asFragment()).toMatchSnapshot();
});
test("snapshot - singleline - disabled", function () {
  var _render2 = render(React.createElement(TextField, {
    value: "hello",
    disabled: true
  })),
      asFragment = _render2.asFragment;

  expect(asFragment()).toMatchSnapshot();
});
test("snapshot - singleline - error", function () {
  var _render3 = render(React.createElement(TextField, {
    value: "hello",
    error: true,
    helpText: "Help text"
  })),
      asFragment = _render3.asFragment;

  expect(asFragment()).toMatchSnapshot();
});
test("snapshot - multiline", function () {
  var _render4 = render(React.createElement(TextField, {
    value: "hello",
    multiline: true
  })),
      asFragment = _render4.asFragment;

  expect(asFragment()).toMatchSnapshot();
});
test("snapshot - multiline - expanded", function () {
  var _render5 = render(React.createElement(TextField, {
    value: "hello",
    multiline: true,
    rows: 4
  })),
      asFragment = _render5.asFragment;

  expect(asFragment()).toMatchSnapshot();
});
test("snapshot - multiline - disabled", function () {
  var _render6 = render(React.createElement(TextField, {
    value: "hello",
    multiline: true,
    disabled: true
  })),
      asFragment = _render6.asFragment;

  expect(asFragment()).toMatchSnapshot();
});
test("snapshot - multiline - error state", function () {
  var _render7 = render(React.createElement(TextField, {
    value: "hello",
    multiline: true,
    error: true,
    helpText: "Help text"
  })),
      asFragment = _render7.asFragment;

  expect(asFragment()).toMatchSnapshot();
});
test("snapshot - select", function () {
  var _render8 = render(React.createElement(TextField, {
    value: 1,
    select: true
  }, React.createElement(MenuItem, {
    value: 1
  }, "Option 1"), React.createElement(MenuItem, {
    value: 2
  }, "Option 2"), React.createElement(MenuItem, {
    value: 3
  }, "Option 3"))),
      asFragment = _render8.asFragment;

  expect(asFragment()).toMatchSnapshot();
});
test("snapshot - select - disabled", function () {
  var _render9 = render(React.createElement(TextField, {
    value: 1,
    select: true,
    disabled: true
  }, React.createElement(MenuItem, {
    value: 1
  }, "Option 1"), React.createElement(MenuItem, {
    value: 2
  }, "Option 2"), React.createElement(MenuItem, {
    value: 3
  }, "Option 3"))),
      asFragment = _render9.asFragment;

  expect(asFragment()).toMatchSnapshot();
});
test("snapshot - select - error state", function () {
  var _render10 = render(React.createElement(TextField, {
    value: 1,
    select: true,
    error: true
  }, React.createElement(MenuItem, {
    value: 1
  }, "Option 1"), React.createElement(MenuItem, {
    value: 2
  }, "Option 2"), React.createElement(MenuItem, {
    value: 3
  }, "Option 3"))),
      asFragment = _render10.asFragment;

  expect(asFragment()).toMatchSnapshot();
});