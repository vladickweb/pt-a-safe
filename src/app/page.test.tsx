import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./page";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/contexts/ThemeContext", () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  useTheme: () => ({
    isDarkMode: false,
    toggleTheme: jest.fn(),
  }),
}));

describe("Home", () => {
  it("renders welcome messages and button", () => {
    render(<Home />);
    expect(screen.getByText("Hi there!")).toBeInTheDocument();
    expect(
      screen.getByText("Welcome to my A-SAFE project"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("go-to-login-button")).toBeInTheDocument();
  });

  it("navigates to login page when button is clicked", () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });
    render(<Home />);
    fireEvent.click(screen.getByTestId("go-to-login-button"));
    expect(push).toHaveBeenCalledWith("/auth/login");
  });
});
