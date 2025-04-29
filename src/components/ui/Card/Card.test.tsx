import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
  const testId = "card";

  it("renders children correctly", () => {
    render(<Card testId={testId}>Card Content</Card>);
    const card = screen.getByTestId(testId);
    expect(card).toBeInTheDocument();
    expect(card).toHaveTextContent("Card Content");
  });

  it("applies additional className", () => {
    render(
      <Card testId={testId} className="custom-class">
        Card Content
      </Card>,
    );
    const card = screen.getByTestId(testId);
    expect(card.className).toContain("custom-class");
  });
});
