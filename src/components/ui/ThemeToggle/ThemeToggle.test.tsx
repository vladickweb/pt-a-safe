import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "@/contexts/ThemeContext";

jest.mock("@/contexts/ThemeContext", () => ({
  useTheme: jest.fn(),
}));

describe("ThemeToggle", () => {
  const testId = "theme-toggle";

  it("renders moon icon when light mode is active", () => {
    (useTheme as jest.Mock).mockReturnValue({
      isDarkMode: false,
      toggleTheme: jest.fn(),
    });
    render(<ThemeToggle testId={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(`${testId}-moon`)).toBeInTheDocument();
  });

  it("calls toggleTheme on click", () => {
    const toggleTheme = jest.fn();
    (useTheme as jest.Mock).mockReturnValue({
      isDarkMode: false,
      toggleTheme,
    });
    render(<ThemeToggle testId={testId} />);
    fireEvent.click(screen.getByTestId(testId));
    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });
});
