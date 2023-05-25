import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "./TodoList";

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", function () {
  const { getByLabelText, queryByText } = render(<TodoList />);

  expect(queryByText("X")).not.toBeInTheDocument();

  const textInput = getByLabelText("Text");
  const submitInput = queryByText("Add To Do");

  fireEvent.change(textInput, { target: { value: "This is my todo" } });
  fireEvent.click(submitInput);

  expect(queryByText("X")).toBeInTheDocument();
});
