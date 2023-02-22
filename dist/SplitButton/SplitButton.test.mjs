import _regeneratorRuntime from "@babel/runtime/regenerator";
import "regenerator-runtime/runtime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import React from "react";
import { fireEvent, render, waitForElement } from "../tests/index.js";
import SplitButton from "./SplitButton";
var options = [{
  label: "Add tags to products"
}, {
  label: "Remove tags from products",
  isDestructive: true
}, {
  label: "Remove all tags",
  isDisabled: true,
  isDestructive: true
}];
test("basic snapshot - only default props", function () {
  var _render = render(React.createElement(SplitButton, {
    options: options
  })),
      asFragment = _render.asFragment;

  expect(asFragment()).toMatchSnapshot();
});
test("set initial selected option to destructive option snapshot", function () {
  var _render2 = render(React.createElement(SplitButton, {
    initialSelectedOption: 1,
    options: options
  })),
      asFragment = _render2.asFragment,
      getByTestId = _render2.getByTestId;

  expect(getByTestId("splitButton-action-button")).toHaveTextContent("Remove tags from products");
  expect(asFragment()).toMatchSnapshot();
});
test("select destructive option",
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_regeneratorRuntime.mark(function _callee() {
  var _render3, asFragment, getByTestId, getByText, removeButton;

  return _regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _render3 = render(React.createElement(SplitButton, {
            options: options
          })), asFragment = _render3.asFragment, getByTestId = _render3.getByTestId, getByText = _render3.getByText;
          fireEvent.click(getByTestId("splitButton-dropdown-button"));
          _context.next = 4;
          return waitForElement(function () {
            return getByText("Remove tags from products");
          });

        case 4:
          removeButton = _context.sent;
          fireEvent.click(removeButton);
          expect(getByTestId("splitButton-action-button")).toHaveTextContent("Remove tags from products");
          expect(asFragment()).toMatchSnapshot();

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));