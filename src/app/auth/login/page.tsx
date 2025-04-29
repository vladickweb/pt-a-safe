"use client";

import { LoginForm } from "@/components/forms/LoginForm";
import { ThemeToggle } from "@/components/ui/ThemeToggle/ThemeToggle";
import { useLogin } from "@/hooks/useLogin";

interface LoginPageProps {
  testId?: string;
}

export default function LoginPage({ testId = "login-page" }: LoginPageProps) {
  const { login, error } = useLogin();

  return (
    <>
      <div
        className="flex justify-center items-center min-h-screen"
        data-testid={testId}
      >
        <div className="w-full max-w-sm" data-testid={`${testId}-container`}>
          <h1
            className="text-2xl font-bold text-center"
            data-testid={`${testId}-title`}
          >
            Login
          </h1>
          <LoginForm
            onSubmit={login}
            externalError={error ?? undefined}
            testId={`${testId}-form`}
          />
        </div>
      </div>
    </>
  );
}
