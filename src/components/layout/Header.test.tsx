import "@testing-library/jest-dom";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Header } from "./Header";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
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
  signOut: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Header", () => {
  beforeEach(() => {
    (useSession as jest.Mock).mockReturnValue({
      data: {
        user: {
          email: "test@example.com",
        },
      },
      status: "authenticated",
    });
    (usePathname as jest.Mock).mockReturnValue("/dashboard");
    (signOut as jest.Mock).mockClear();
  });

  it("renders header with user email and navigation", () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>,
    );

    expect(screen.getByText("A-SAFE")).toBeInTheDocument();
    expect(screen.getByText("test@example.com")).toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Users")).toBeInTheDocument();
  });

  it("highlights active navigation link", () => {
    (usePathname as jest.Mock).mockReturnValue("/users");
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>,
    );

    const usersLink = screen.getByText("Users");
    expect(usersLink).toHaveClass("text-primary");
  });

  it("handles logout", async () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>,
    );

    const logoutButton = screen.getByText("Logout");
    await act(async () => {
      fireEvent.click(logoutButton);
    });

    expect(signOut).toHaveBeenCalledWith({
      callbackUrl: "/auth/login",
      redirect: false,
    });
  });

  it("shows mobile menu button on small screens", () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event("resize"));

    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>,
    );

    const menuButton = screen.getByLabelText("Open menu");
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveClass("lg:hidden");
  });

  it("hides desktop navigation on small screens", () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event("resize"));

    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>,
    );

    const desktopNav = screen.getByText("Dashboard").closest("nav");
    expect(desktopNav).toHaveClass("hidden");
    expect(desktopNav).toHaveClass("lg:flex");
  });
});
