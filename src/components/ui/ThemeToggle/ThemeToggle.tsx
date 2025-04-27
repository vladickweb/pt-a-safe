"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "../Button/Button";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground"
      aria-label={isDarkMode ? "Change to light mode" : "Change to dark mode"}
    >
      {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}
