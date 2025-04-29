import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SkeletonCard } from "./SkeletonCard";

describe("SkeletonCard", () => {
  const testId = "skeleton-card";

  it("renders all skeleton parts", () => {
    render(<SkeletonCard testId={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-header`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-header-skeleton`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-content`)).toBeInTheDocument();
    expect(
      screen.getByTestId(`${testId}-content-skeletons`),
    ).toBeInTheDocument();
  });
});
