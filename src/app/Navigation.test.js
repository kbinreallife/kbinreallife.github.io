import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navigation from "./Navigation";
import "@testing-library/jest-dom";

const sections = [
  { key: "about", label: "About" },
  { key: "projects", label: "Projects" },
  { key: "contact", label: "Contact" },
];

describe("Navigation component", () => {
  it("renders all navigation buttons", () => {
    const { getByText } = render(
      <Navigation sections={sections} openSection={null} onToggle={() => () => {}} />
    );
    sections.forEach(({ label }) => {
      expect(getByText(label)).toBeInTheDocument();
    });
  });

  it("calls onToggle when a button is clicked", () => {
    const mockToggle = jest.fn(() => () => {});
    const { getByText } = render(
      <Navigation sections={sections} openSection={null} onToggle={mockToggle} />
    );
    fireEvent.click(getByText("Projects"));
    expect(mockToggle).toHaveBeenCalledWith("projects");
  });
});