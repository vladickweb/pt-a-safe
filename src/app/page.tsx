"use client";

import { Button } from "@/components/ui/Button/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle/ThemeToggle";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 text-center">
      <ThemeToggle testId="theme-toggle" />
      <h2 className="text-5xl font-bold">Hi there!</h2>
      <h1 className="text-3xl font-bold">Welcome to my A-SAFE project</h1>
      <Button
        variant="outline"
        onClick={() => router.push("/auth/login")}
        data-testid="go-to-login-button"
      >
        Go to login
      </Button>
    </div>
  );
}
