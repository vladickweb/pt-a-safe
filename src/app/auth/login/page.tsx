"use client";

import { LoginForm } from "@/components/forms/LoginForm";
import { useLogin } from "@/hooks/useLogin";

interface LoginPageProps {
  testId?: string;
}

export default function LoginPage({ testId }: LoginPageProps) {
  const { login, error } = useLogin();

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      data-testid={testId}
    >
      <div
        className="w-full max-w-sm"
        data-testid={testId ? `${testId}-container` : undefined}
      >
        <h1
          className="text-2xl font-bold text-center"
          data-testid={testId ? `${testId}-title` : undefined}
        >
          Login
        </h1>
        <LoginForm
          onSubmit={login}
          externalError={error ?? undefined}
          testId={testId ? `${testId}-form` : undefined}
        />
      </div>
    </div>
  );
}
