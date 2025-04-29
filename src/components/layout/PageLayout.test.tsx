import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { PageLayout } from "./PageLayout";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { ThemeProvider } from "@/contexts/ThemeContext";

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

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

describe("PageLayout", () => {
  beforeEach(() => {
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: "loading",
    });
    (usePathname as jest.Mock).mockReturnValue("/dashboard");
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
    });
  });

  it("renders LoadingSpinner when status is loading", () => {
    render(
      <ThemeProvider>
        <PageLayout>
          <div>Test Content</div>
        </PageLayout>
      </ThemeProvider>,
    );

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("renders LoadingSpinner when status is unauthenticated", () => {
    (useSession as jest.Mock).mockReturnValue({
      data: null,
      status: "unauthenticated",
    });

    render(
      <ThemeProvider>
        <PageLayout>
          <div>Test Content</div>
        </PageLayout>
      </ThemeProvider>,
    );

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("renders children when status is authenticated", () => {
    (useSession as jest.Mock).mockReturnValue({
      data: {
        user: {
          email: "test@example.com",
        },
      },
      status: "authenticated",
    });

    render(
      <ThemeProvider>
        <PageLayout>
          <div data-testid="test-content">Test Content</div>
        </PageLayout>
      </ThemeProvider>,
    );

    expect(screen.getByTestId("test-content")).toBeInTheDocument();
  });
});
