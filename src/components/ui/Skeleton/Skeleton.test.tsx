import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Skeleton } from "./Skeleton";

describe("Skeleton", () => {
  const testId = "skeleton";

  it("renders the skeleton", () => {
    render(<Skeleton testId={testId} />);
    const skeleton = screen.getByTestId(testId);
    expect(skeleton).toBeInTheDocument();
  });

  it("applies additional className", () => {
    render(<Skeleton testId={testId} className="extra-class" />);
    const skeleton = screen.getByTestId(testId);
    expect(skeleton.className).toContain("extra-class");
  });
});
