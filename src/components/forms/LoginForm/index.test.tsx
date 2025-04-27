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
  const defaultTestIds = {
    form: "login-form",
    emailInput: "email-input",
    emailError: "email-error",
    passwordInput: "password-input",
    passwordError: "password-error",
    submitButton: "submit-button",
    externalError: "external-error",
  };

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  it("renders the login form with all required fields", () => {
    render(<LoginForm onSubmit={mockOnSubmit} />);

    expect(screen.getByTestId(defaultTestIds.form)).toBeInTheDocument();
    expect(screen.getByTestId(defaultTestIds.emailInput)).toBeInTheDocument();
    expect(
      screen.getByTestId(defaultTestIds.passwordInput),
    ).toBeInTheDocument();
    expect(screen.getByTestId(defaultTestIds.submitButton)).toBeInTheDocument();
  });

  it("displays external error message when provided", () => {
    const errorMessage = "Invalid credentials";
    render(<LoginForm onSubmit={mockOnSubmit} externalError={errorMessage} />);

    expect(screen.getByTestId(defaultTestIds.externalError)).toHaveTextContent(
      errorMessage,
    );
  });

  it("validates email format and shows error message", async () => {
    render(<LoginForm onSubmit={mockOnSubmit} />);

    const emailInput = screen.getByTestId(defaultTestIds.emailInput);

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "invalid-email" } });
      fireEvent.blur(emailInput);
    });

    await waitFor(() => {
      expect(screen.getByTestId(defaultTestIds.emailError)).toHaveTextContent(
        /email/i,
      );
    });
  });

  it("validates password and shows error message", async () => {
    render(<LoginForm onSubmit={mockOnSubmit} />);

    const passwordInput = screen.getByTestId(defaultTestIds.passwordInput);

    await act(async () => {
      fireEvent.change(passwordInput, { target: { value: "123" } });
      fireEvent.blur(passwordInput);
    });

    await waitFor(() => {
      expect(
        screen.getByTestId(defaultTestIds.passwordError),
      ).toHaveTextContent(/password/i);
    });
  });

  it("submits form with valid data", async () => {
    render(<LoginForm onSubmit={mockOnSubmit} />);

    const emailInput = screen.getByTestId(defaultTestIds.emailInput);
    const passwordInput = screen.getByTestId(defaultTestIds.passwordInput);
    const submitButton = screen.getByTestId(defaultTestIds.submitButton);

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

    render(<LoginForm onSubmit={mockOnSubmit} />);

    const emailInput = screen.getByTestId(defaultTestIds.emailInput);
    const passwordInput = screen.getByTestId(defaultTestIds.passwordInput);
    const submitButton = screen.getByTestId(defaultTestIds.submitButton);

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
    const customTestIds = {
      form: "custom-form",
      emailInput: "custom-email",
      emailError: "custom-email-error",
      passwordInput: "custom-password",
      passwordError: "custom-password-error",
      submitButton: "custom-submit",
      externalError: "custom-external-error",
    };

    render(
      <LoginForm
        onSubmit={mockOnSubmit}
        externalError="Test error"
        testIds={customTestIds}
      />,
    );

    expect(screen.getByTestId(customTestIds.form)).toBeInTheDocument();
    expect(screen.getByTestId(customTestIds.emailInput)).toBeInTheDocument();
    expect(screen.getByTestId(customTestIds.passwordInput)).toBeInTheDocument();
    expect(screen.getByTestId(customTestIds.submitButton)).toBeInTheDocument();
    expect(screen.getByTestId(customTestIds.externalError)).toBeInTheDocument();
  });
});
