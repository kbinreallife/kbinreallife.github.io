import React from "react";
import { render } from "@testing-library/react";
import { ErrorBoundary } from "./ErrorBoundary";
import "@testing-library/jest-dom";

function ProblemChild() {
  throw new Error("Test error");
}

describe("ErrorBoundary", () => {
  it("renders fallback UI when child throws", () => {
    const { getByText } = render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );
    expect(getByText("Something went wrong.")).toBeInTheDocument();
  });

  it("renders children when no error", () => {
    const { getByText } = render(
      <ErrorBoundary>
        <div>All good!</div>
      </ErrorBoundary>
    );
    expect(getByText("All good!")).toBeInTheDocument();
  });
});