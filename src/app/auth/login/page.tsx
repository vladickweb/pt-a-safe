"use client";

import { LoginForm } from "@/components/forms/LoginForm";
import { useLogin } from "@/hooks/useLogin";

export default function LoginPage() {
  const { login, error } = useLogin();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <LoginForm onSubmit={login} externalError={error ?? undefined} />
      </div>
    </div>
  );
}
