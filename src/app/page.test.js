import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SectionToggleProvider } from "../context/SectionToggleContext";
import Home from "./page";

describe("Home page section toggling", () => {
  it("shows About section when About button is clicked", () => {
    const { getByText } = render(
      <SectionToggleProvider>
        <Home />
      </SectionToggleProvider>
    );
    fireEvent.click(getByText("About"));
    expect(getByText("About Me")).toBeInTheDocument();
  });

  it("shows Projects section when Projects button is clicked", () => {
    const { getByText } = render(
      <SectionToggleProvider>
        <Home />
      </SectionToggleProvider>
    );
    fireEvent.click(getByText("Projects"));
    expect(getByText("Projects and Skills")).toBeInTheDocument();
  });

  it("shows Contact section when Contact button is clicked", () => {
    const { getByText, getByRole } = render(
      <SectionToggleProvider>
        <Home />
      </SectionToggleProvider>
    );
    fireEvent.click(getByText("Contact"));
    expect(getByRole("heading", { name: "Contact" })).toBeInTheDocument();
  });
});