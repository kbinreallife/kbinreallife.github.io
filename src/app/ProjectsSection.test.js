import React from "react";
import { render } from "@testing-library/react";
import ProjectsSection from "./ProjectsSection";
import "@testing-library/jest-dom";

describe("ProjectsSection component", () => {
  it("renders all project links", () => {
    const { getByText } = render(<ProjectsSection />);
    expect(getByText("My Badges and Certificates")).toBeInTheDocument();
    expect(getByText("Boilerplate project to make websites like this one")).toBeInTheDocument();
    expect(getByText("A Github Organization Activity Visualizer")).toBeInTheDocument();
    expect(getByText("The Organization I Work For")).toBeInTheDocument();
  });
});