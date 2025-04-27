"use client";

import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  testId?: string;
}

export function LoadingSpinner({ testId }: LoadingSpinnerProps) {
  return (
    <div
      className="flex h-screen w-full items-center justify-center"
      data-testid={testId}
    >
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}
