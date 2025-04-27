"use client";

import { useState } from "react";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/Button/Button";
import { signOut, useSession } from "next-auth/react";
import { useCallback } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle/ThemeToggle";

export const Header = () => {
  const { data: session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleLogout = useCallback(async () => {
    await signOut({ redirect: false, callbackUrl: "/auth/login" });
  }, []);

  return (
    <header className="border-b" data-testid="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-lg font-semibold" data-testid="header-title">
              A-SAFE
            </h1>
            <nav
              className="hidden lg:flex items-center gap-4"
              data-testid="desktop-nav"
            >
              <Link
                href="/dashboard"
                className={cn(
                  "text-sm font-medium transition-colors",
                  "hover:text-primary",
                  pathname === "/dashboard" ? "text-primary" : "opacity-70",
                )}
              >
                Dashboard
              </Link>
              <Link
                href="/users"
                className={cn(
                  "text-sm font-medium transition-colors",
                  "hover:text-primary",
                  pathname === "/users" ? "text-primary" : "opacity-70",
                )}
              >
                Users
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-md hover:bg-accent hover:text-accent-foreground"
              aria-label="Open menu"
              data-testid="mobile-menu-button"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div
              className="hidden lg:flex items-center gap-4"
              data-testid="user-info"
            >
              <span className="text-sm" data-testid="user-email">
                {session?.user?.email}
              </span>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="text-sm"
                data-testid="logout-button"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};
