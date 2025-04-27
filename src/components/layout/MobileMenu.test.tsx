import { render, screen, fireEvent } from "@testing-library/react";
import { MobileMenu } from "./MobileMenu";
import "@testing-library/jest-dom";

describe("MobileMenu", () => {
  const testId = "mobile-menu";

  it("does not render when isOpen is false", () => {
    render(<MobileMenu isOpen={false} onClose={jest.fn()} testId={testId} />);
    expect(screen.queryByTestId(testId)).not.toBeInTheDocument();
  });

  it("renders correctly when isOpen is true", () => {
    render(<MobileMenu isOpen={true} onClose={jest.fn()} testId={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-panel`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-title`)).toHaveTextContent("Menu");
    expect(screen.getByTestId(`${testId}-link-dashboard`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-link-users`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-logout-button`)).toBeInTheDocument();
  });

  it("calls onClose when clicking close button", () => {
    const onClose = jest.fn();
    render(<MobileMenu isOpen={true} onClose={onClose} testId={testId} />);
    fireEvent.click(screen.getByTestId(`${testId}-close-button`));
    expect(onClose).toBeCalledTimes(1);
  });

  it("does not call onClose immediately when clicking backdrop", () => {
    const onClose = jest.fn();
    render(<MobileMenu isOpen={true} onClose={onClose} testId={testId} />);
    fireEvent.click(screen.getByTestId(`${testId}-backdrop`));
    expect(onClose).not.toBeCalled();
  });
});
