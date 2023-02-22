import React from "react";
import { render, fireEvent } from "../tests/";
import Button from "../Button";
import ConfirmDialog from "./ConfirmDialog";
import useConfirmDialog from "./helpers/useConfirmDialog";
test("basic snapshot - with opening the dialog", function () {
  /* eslint-disable function-paren-newline */
  var _render = render(React.createElement(ConfirmDialog, {
    title: "Are you sure?",
    message: "Are you sure you want to do that?"
  }, function (_ref) {
    var openDialog = _ref.openDialog;
    return React.createElement(Button, {
      color: "primary",
      onClick: openDialog,
      variant: "contained"
    }, "Open Confirm Dialog");
  })),
      asFragment = _render.asFragment,
      getByText = _render.getByText,
      getByRole = _render.getByRole;

  fireEvent.click(getByText("Open Confirm Dialog"));
  expect(getByRole("dialog")).toBeInTheDocument();
  expect(getByRole("dialog")).toHaveTextContent("Are you sure you want to do that?");
  expect(getByRole("dialog")).toHaveTextContent("Are you sure?");
  expect(getByRole("dialog")).toHaveTextContent("OK");
  expect(getByRole("dialog")).toHaveTextContent("Cancel");
  expect(getByRole("dialog")).toMatchSnapshot();
  expect(asFragment()).toMatchSnapshot();
});
test("basic snapshot - with opening the dialog using the useConfirmDialog hook", function () {
  // eslint-disable-next-line require-jsdoc
  function TestComponent() {
    var _useConfirmDialog = useConfirmDialog({
      title: "Are you sure?",
      message: "Are you sure you want to do that?"
    }),
        openDialog = _useConfirmDialog.openDialog,
        ConfirmDialogComponent = _useConfirmDialog.ConfirmDialog;

    return React.createElement(React.Fragment, null, React.createElement(Button, {
      color: "primary",
      onClick: openDialog,
      variant: "contained"
    }, "Open Confirm Dialog"), React.createElement(ConfirmDialogComponent, null));
  }

  var _render2 = render(React.createElement(TestComponent, null)),
      asFragment = _render2.asFragment,
      getByText = _render2.getByText,
      getByRole = _render2.getByRole;

  fireEvent.click(getByText("Open Confirm Dialog"));
  expect(getByRole("dialog")).toBeInTheDocument();
  expect(getByRole("dialog")).toHaveTextContent("Are you sure you want to do that?");
  expect(getByRole("dialog")).toHaveTextContent("Are you sure?");
  expect(getByRole("dialog")).toHaveTextContent("OK");
  expect(getByRole("dialog")).toHaveTextContent("Cancel");
  expect(getByRole("dialog")).toMatchSnapshot();
  expect(asFragment()).toMatchSnapshot();
});
test("basic snapshot - with opening the dialog using the useConfirmDialog hook with more content", function () {
  // eslint-disable-next-line require-jsdoc, react/no-multi-comp
  function TestComponent() {
    var _useConfirmDialog2 = useConfirmDialog({
      title: "Are you sure?",
      content: React.createElement("span", null, "More content"),
      message: "Are you sure you want to do that?"
    }),
        openDialog = _useConfirmDialog2.openDialog,
        ConfirmDialogComponent = _useConfirmDialog2.ConfirmDialog;

    return React.createElement(React.Fragment, null, React.createElement(Button, {
      color: "primary",
      onClick: openDialog,
      variant: "contained"
    }, "Open Confirm Dialog"), React.createElement(ConfirmDialogComponent, null));
  }

  var _render3 = render(React.createElement(TestComponent, null)),
      asFragment = _render3.asFragment,
      getByText = _render3.getByText,
      getByRole = _render3.getByRole;

  fireEvent.click(getByText("Open Confirm Dialog"));
  expect(getByRole("dialog")).toBeInTheDocument();
  expect(getByRole("dialog")).toHaveTextContent("Are you sure you want to do that?");
  expect(getByRole("dialog")).toHaveTextContent("More content");
  expect(getByRole("dialog")).toHaveTextContent("Are you sure?");
  expect(getByRole("dialog")).toHaveTextContent("OK");
  expect(getByRole("dialog")).toHaveTextContent("Cancel");
  expect(getByRole("dialog")).toMatchSnapshot();
  expect(asFragment()).toMatchSnapshot();
});