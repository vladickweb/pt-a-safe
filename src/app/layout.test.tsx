import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RootLayout from "./layout";

jest.mock("./providers", () => ({
  Providers: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

jest.mock("@/contexts/ThemeContext", () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("RootLayout", () => {
  it("renders children inside Providers and ThemeProvider", () => {
    render(
      <RootLayout>
        <div data-testid="child">Hello World</div>
      </RootLayout>,
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });
});
