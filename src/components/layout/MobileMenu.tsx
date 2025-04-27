"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useCallback } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/auth/login" });
  };

  const delayedClose = useCallback(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 500);

    return () => clearTimeout(timeout);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="fixed inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm"
        onClick={delayedClose}
      />
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-gray-100 dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Menu
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/dashboard"
                  className={cn(
                    "block px-4 py-2 rounded-md text-sm font-medium transition-colors",
                    "hover:bg-gray-200 dark:hover:bg-gray-800",
                    pathname === "/dashboard"
                      ? "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      : "text-gray-700 dark:text-gray-300",
                  )}
                  onClick={delayedClose}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/users"
                  className={cn(
                    "block px-4 py-2 rounded-md text-sm font-medium transition-colors",
                    "hover:bg-gray-200 dark:hover:bg-gray-800",
                    pathname === "/users"
                      ? "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                      : "text-gray-700 dark:text-gray-300",
                  )}
                  onClick={delayedClose}
                >
                  Users
                </Link>
              </li>
              <li>
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
