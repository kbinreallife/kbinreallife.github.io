import React from "react";
import { render } from "@testing-library/react";
import Section from "./Section";
import "@testing-library/jest-dom";

describe("Section component", () => {
  it("renders title and children", () => {
    const { getByRole, getByText } = render(
      <Section title="Test Title">
        <p>Test Content</p>
      </Section>
    );
    expect(getByRole("heading", { name: "Test Title" })).toBeInTheDocument();
    expect(getByText("Test Content")).toBeInTheDocument();
  });
});