import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react";
import { useLogin } from "./useLogin";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

describe("useLogin", () => {
  it("logs in successfully and redirects", async () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });
    (signIn as jest.Mock).mockResolvedValueOnce({ error: null });

    const { result } = renderHook(() => useLogin());

    await act(async () => {
      await result.current.login({
        email: "test@example.com",
        password: "password",
      });
    });

    expect(signIn).toHaveBeenCalledWith("credentials", {
      email: "test@example.com",
      password: "password",
      redirect: false,
    });

    expect(push).toHaveBeenCalledWith("/dashboard");
    expect(result.current.error).toBeNull();
  });

  it("sets error on failed login", async () => {
    (signIn as jest.Mock).mockResolvedValueOnce({
      error: "Invalid credentials",
    });

    const { result } = renderHook(() => useLogin());

    await act(async () => {
      await result.current.login({
        email: "wrong@example.com",
        password: "wrong",
      });
    });

    expect(result.current.error).toBe("Invalid credentials");
  });
});
