import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CardHeader } from "./CardHeader";

describe("CardHeader", () => {
  const testId = "card-header";

  it("renders children correctly", () => {
    render(<CardHeader testId={testId}>Header Content</CardHeader>);
    const header = screen.getByTestId(testId);
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Header Content");
  });

  it("applies additional className", () => {
    render(
      <CardHeader testId={testId} className="custom-header">
        Header Content
      </CardHeader>,
    );
    const header = screen.getByTestId(testId);
    expect(header.className).toContain("custom-header");
  });
});
