import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CardTitle } from "./CardTitle";

describe("CardTitle", () => {
  const testId = "card-title";

  it("renders children correctly", () => {
    render(<CardTitle testId={testId}>Title Content</CardTitle>);
    const title = screen.getByTestId(testId);
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Title Content");
  });

  it("applies additional className", () => {
    render(
      <CardTitle testId={testId} className="custom-title">
        Title Content
      </CardTitle>,
    );
    const title = screen.getByTestId(testId);
    expect(title.className).toContain("custom-title");
  });
});
