import { Button } from "@/components/ui/Button";
import { signOut, useSession } from "next-auth/react";
import React, { useCallback } from "react";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  const { data: session } = useSession();

  const handleLogout = useCallback(async () => {
    await signOut({ redirect: false, callbackUrl: "/auth/login" });
  }, []);

  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold">{title}</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-foreground/80">
              {session?.user?.email}
            </span>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="text-sm"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
