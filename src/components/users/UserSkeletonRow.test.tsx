import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { UserSkeletonRow } from "./UserSkeletonRow";

describe("UserSkeletonRow", () => {
  const testId = "user-skeleton-row";

  it("renders all skeleton columns", () => {
    render(<UserSkeletonRow testId={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-col-1`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-col-2`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-col-3`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-col-4`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-col-5`)).toBeInTheDocument();
  });
});
