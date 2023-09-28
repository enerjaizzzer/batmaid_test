import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("renders header component", () => {
  render(<Header text={"Test"} />);
  const linkElement = screen.getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});
