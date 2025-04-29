import { cn } from "@/lib/utils";

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  testId?: string;
}

export function CardHeader({
  children,
  className,
  testId,
  ...props
}: CardHeaderProps) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
      data-testid={testId}
    >
      {children}
    </div>
  );
}
