import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  const testId = "button";

  it("renders with default props", () => {
    render(<Button data-testid={testId}>Click me</Button>);
    const button = screen.getByTestId(testId);
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click me");
    expect(button).toHaveAttribute("type", "submit");
  });

  it("renders with isLoading true", () => {
    render(
      <Button data-testid={testId} isLoading>
        Click me
      </Button>,
    );
    expect(screen.getByTestId(`${testId}-loading-spinner`)).toBeInTheDocument();
  });

  it("disables the button when isLoading is true", () => {
    render(
      <Button data-testid={testId} isLoading>
        Click me
      </Button>,
    );
    const button = screen.getByTestId(testId) as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(
      <Button data-testid={testId} onClick={handleClick}>
        Click me
      </Button>,
    );
    fireEvent.click(screen.getByTestId(testId));
    expect(handleClick).toBeCalledTimes(1);
  });
});
