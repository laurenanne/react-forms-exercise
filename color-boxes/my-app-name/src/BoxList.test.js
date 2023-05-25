import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import BoxList from "./BoxList";

it("renders without crashing", function() {
  render(<BoxList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", function() {
  const { getByLabelText, queryByText } = render(<BoxList />);

  expect(queryByText("X")).not.toBeInTheDocument();

  const widthInput = getByLabelText("Width");
  const heightInput = getByLabelText("Height");
  const colorInput = getByLabelText("Background Color");
  const submitBox = queryByText("Add");

  fireEvent.change(widthInput, { target: { value: "100" } });
  fireEvent.change(heightInput, { target: { value: "100" } });
  fireEvent.change(colorInput, { target: { value: "red" } });
  fireEvent.click(submitBox);

  expect(queryByText("X")).toBeInTheDocument();
});
