"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export function useLogin() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const login = async (values: { email: string; password: string }) => {
    setError(null);
    const result = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid credentials");
      return;
    }

    router.push("/dashboard");
  };

  return {
    login,
    error,
  };
}
