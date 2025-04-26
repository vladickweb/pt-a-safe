"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 text-center">
      <h1 className="text-3xl font-bold">Welcome to my project</h1>
      <button
        onClick={() => router.push("/auth/login")}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded transition"
      >
        Go to Login
      </button>
    </div>
  );
}
