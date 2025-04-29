import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider, useTheme } from "./ThemeContext";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("ThemeProvider", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("renders children", () => {
    render(
      <ThemeProvider>
        <div data-testid="test-child">Test</div>
      </ThemeProvider>,
    );
    expect(screen.getByTestId("test-child")).toBeInTheDocument();
  });

  it("provides theme context and toggles theme", () => {
    const TestComponent = () => {
      const { isDarkMode, toggleTheme } = useTheme();
      return (
        <div>
          <div data-testid="is-dark-mode">{isDarkMode.toString()}</div>
          <button onClick={toggleTheme} data-testid="toggle-theme">
            Toggle
          </button>
        </div>
      );
    };

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("is-dark-mode")).toHaveTextContent("false");

    fireEvent.click(screen.getByTestId("toggle-theme"));
    expect(screen.getByTestId("is-dark-mode")).toHaveTextContent("true");

    fireEvent.click(screen.getByTestId("toggle-theme"));
    expect(screen.getByTestId("is-dark-mode")).toHaveTextContent("false");
  });

  it("throws error if useTheme is called outside ThemeProvider", () => {
    const TestComponent = () => {
      useTheme();
      return null;
    };

    expect(() => render(<TestComponent />)).toThrow(
      "useTheme must be used within a ThemeProvider",
    );
  });
});
