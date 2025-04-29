import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import { LoginForm } from "./index";

describe("LoginForm", () => {
  const mockOnSubmit = jest.fn();
  const testId = "login-form";

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  it("renders the login form with all required fields", () => {
    render(<LoginForm onSubmit={mockOnSubmit} testId={testId} />);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-email-input`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-password-input`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-submit-button`)).toBeInTheDocument();
  });

  it("displays external error message when provided", () => {
    const errorMessage = "Invalid credentials";
    render(
      <LoginForm
        onSubmit={mockOnSubmit}
        externalError={errorMessage}
        testId={testId}
      />,
    );

    expect(screen.getByTestId(`${testId}-external-error`)).toHaveTextContent(
      errorMessage,
    );
  });

  it("validates email format and shows error message", async () => {
    render(<LoginForm onSubmit={mockOnSubmit} testId={testId} />);

    const emailInput = screen.getByTestId(`${testId}-email-input`);

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "invalid-email" } });
      fireEvent.blur(emailInput);
    });

    await waitFor(() => {
      expect(screen.getByTestId(`${testId}-email-error`)).toHaveTextContent(
        /email/i,
      );
    });
  });

  it("validates password and shows error message", async () => {
    render(<LoginForm onSubmit={mockOnSubmit} testId={testId} />);

    const passwordInput = screen.getByTestId(`${testId}-password-input`);

    await act(async () => {
      fireEvent.change(passwordInput, { target: { value: "123" } });
      fireEvent.blur(passwordInput);
    });

    await waitFor(() => {
      expect(screen.getByTestId(`${testId}-password-error`)).toHaveTextContent(
        /password/i,
      );
    });
  });

  it("submits form with valid data", async () => {
    render(<LoginForm onSubmit={mockOnSubmit} testId={testId} />);

    const emailInput = screen.getByTestId(`${testId}-email-input`);
    const passwordInput = screen.getByTestId(`${testId}-password-input`);
    const submitButton = screen.getByTestId(`${testId}-submit-button`);

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "test@example.com" } });
      fireEvent.change(passwordInput, { target: { value: "password123" } });
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "password123",
      });
    });
  });

  it("disables submit button while submitting", async () => {
    let resolveSubmit: () => void;
    const submitPromise = new Promise<void>((resolve) => {
      resolveSubmit = resolve;
    });

    mockOnSubmit.mockImplementation(() => submitPromise);

    render(<LoginForm onSubmit={mockOnSubmit} testId={testId} />);

    const emailInput = screen.getByTestId(`${testId}-email-input`);
    const passwordInput = screen.getByTestId(`${testId}-password-input`);
    const submitButton = screen.getByTestId(`${testId}-submit-button`);

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "test@example.com" } });
      fireEvent.change(passwordInput, { target: { value: "password123" } });
      fireEvent.click(submitButton);
    });

    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });

    await act(async () => {
      resolveSubmit();
    });

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
    });
  });

  it("uses custom testIds when provided", () => {
    render(
      <LoginForm
        onSubmit={mockOnSubmit}
        externalError="Test error"
        testId={"custom-form"}
      />,
    );

    expect(screen.getByTestId("custom-form")).toBeInTheDocument();
    expect(screen.getByTestId("custom-form-email-input")).toBeInTheDocument();
    expect(
      screen.getByTestId("custom-form-password-input"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("custom-form-submit-button")).toBeInTheDocument();
    expect(
      screen.getByTestId("custom-form-external-error"),
    ).toBeInTheDocument();
  });
});
