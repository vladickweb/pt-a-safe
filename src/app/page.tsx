"use client";

import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 text-center">
      <h2 className="text-5xl font-bold">Hi there!</h2>
      <h1 className="text-3xl font-bold">Welcome to my dashboard project</h1>
      <Button variant="outline" onClick={() => router.push("/auth/login")}>
        Go to login
      </Button>
    </div>
  );
}
