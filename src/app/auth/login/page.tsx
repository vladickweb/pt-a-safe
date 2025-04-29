"use client";

import { LoginForm } from "@/components/forms/LoginForm";
import { useLogin } from "@/hooks/useLogin";

export default function LoginPage() {
  const { login, error } = useLogin();
  const testId = "login-page";

  return (
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
  );
}
