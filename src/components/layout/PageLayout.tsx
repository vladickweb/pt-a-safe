"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LoadingSpinner } from "../ui/LoadingSpinner/LoadingSpinner";
import { Header } from "./Header";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  if (status === "loading" || status === "unauthenticated") {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <div className="flex-1 w-full">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <main className="w-full">{children}</main>
        </div>
      </div>
    </div>
  );
}
