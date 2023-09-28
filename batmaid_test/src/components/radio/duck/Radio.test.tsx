import React from "react";
import { render, screen } from "@testing-library/react";
import Radio from "../Radio";

describe("Radio component", () => {
  it("should be rendered", function () {
    render(
      <Radio
        record={[
          { name: "test1", value: "test1" },
          { name: "test2", value: "test2" },
          { name: "test3", value: "test3" },
        ]}
        checkedItem={""}
        onChange={() => {}}
      />,
    );

    const linkElement1 = screen.getByText(/test1/i);
    expect(linkElement1).toBeInTheDocument();

    const linkElement2 = screen.getByText(/test2/i);
    expect(linkElement2).toBeInTheDocument();
  });

  it("should be active", function () {
    render(
      <Radio
        record={[
          { name: "test1", value: "test1" },
          { name: "test2", value: "test2" },
          { name: "test3", value: "test3" },
        ]}
        checkedItem={"test2"}
        onChange={() => {}}
      />,
    );

    const linkElement1 = screen.getByText(/test2/i);
    expect(linkElement1).toHaveClass("active");
  });
});
