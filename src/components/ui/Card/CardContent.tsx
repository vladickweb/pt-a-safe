import { cn } from "@/lib/utils";

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  testId?: string;
}

export const CardContent = ({
  children,
  className,
  testId,
  ...props
}: CardContentProps) => {
  return (
    <div className={cn("p-6 pt-0", className)} {...props} data-testid={testId}>
      {children}
    </div>
  );
};
