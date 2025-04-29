import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CardContent } from "./CardContent";

describe("CardContent", () => {
  const testId = "card-content";

  it("renders children correctly", () => {
    render(<CardContent testId={testId}>Card Content Text</CardContent>);
    const content = screen.getByTestId(testId);
    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent("Card Content Text");
  });

  it("applies additional className", () => {
    render(
      <CardContent testId={testId} className="extra-class">
        Card Content Text
      </CardContent>,
    );
    const content = screen.getByTestId(testId);
    expect(content.className).toContain("extra-class");
  });
});
