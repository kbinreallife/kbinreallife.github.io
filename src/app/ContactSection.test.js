import React from "react";
import { render } from "@testing-library/react";
import ContactSection from "./ContactSection";
import "@testing-library/jest-dom";

describe("ContactSection component", () => {
  it("renders all contact links", () => {
    const { getByText } = render(<ContactSection />);
    expect(getByText("LinkedIn")).toBeInTheDocument();
    expect(getByText("Bluesky")).toBeInTheDocument();
    expect(getByText("Discord")).toBeInTheDocument();
    expect(getByText("hackmud discord")).toBeInTheDocument();
  });
});