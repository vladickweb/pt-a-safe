"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "../Button/Button";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  testId?: string;
}

export function ThemeToggle({ testId }: ThemeToggleProps) {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground"
      aria-label={isDarkMode ? "Change to light mode" : "Change to dark mode"}
      data-testid={testId}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5" data-testid={`${testId}-sun`} />
      ) : (
        <Moon className="h-5 w-5" data-testid={`${testId}-moon`} />
      )}
    </Button>
  );
}
