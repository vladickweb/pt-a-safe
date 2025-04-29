import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LoginPage from "./page";

jest.mock("@/hooks/useLogin", () => ({
  useLogin: () => ({
    login: jest.fn(),
    error: null,
  }),
}));

jest.mock("@/components/forms/LoginForm", () => ({
  LoginForm: ({ testId }: { testId: string }) => (
    <form data-testid={testId}>Mocked LoginForm</form>
  ),
}));

describe("LoginPage", () => {
  const testId = "login-page";

  it("renders login page structure", () => {
    render(<LoginPage testId={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-container`)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-title`)).toHaveTextContent("Login");
    expect(screen.getByTestId(`${testId}-form`)).toBeInTheDocument();
  });
});
