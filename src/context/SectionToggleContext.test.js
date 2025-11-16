import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SectionToggleProvider, useSectionToggle } from "./SectionToggleContext";

function TestComponent() {
  const { openSection, toggleSection } = useSectionToggle();
  return (
    <div>
      <button onClick={() => toggleSection("about")}>About</button>
      <span data-testid="open-section">{openSection}</span>
    </div>
  );
}

describe("SectionToggleProvider", () => {
  it("toggles section correctly", () => {
    const { getByText, getByTestId } = render(
      <SectionToggleProvider>
        <TestComponent />
      </SectionToggleProvider>
    );
    expect(getByTestId("open-section").textContent).toBe("");
    fireEvent.click(getByText("About"));
    expect(getByTestId("open-section").textContent).toBe("about");
    fireEvent.click(getByText("About"));
    expect(getByTestId("open-section").textContent).toBe("");
  });
});