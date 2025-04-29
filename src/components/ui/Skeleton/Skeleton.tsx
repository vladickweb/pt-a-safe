import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  testId?: string;
}

export function Skeleton({ className, testId }: SkeletonProps) {
  return <div className={cn("skeleton", className)} data-testid={testId} />;
}
