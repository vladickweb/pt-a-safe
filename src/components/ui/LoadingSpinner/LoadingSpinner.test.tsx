import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { LoadingSpinner } from "./LoadingSpinner";

describe("LoadingSpinner", () => {
  const testId = "loading-spinner";

  it("renders the loading spinner", () => {
    render(<LoadingSpinner testId={testId} />);
    const spinner = screen.getByTestId(testId);
    expect(spinner).toBeInTheDocument();
  });
});
