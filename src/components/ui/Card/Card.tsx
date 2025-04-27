import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  testId?: string;
}

export function Card({ children, className, testId, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className,
      )}
      data-testid={testId}
      {...props}
    >
      {children}
    </div>
  );
}
