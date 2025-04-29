import { cn } from "@/lib/utils";

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  testId?: string;
}

export function CardTitle({
  children,
  className,
  testId,
  ...props
}: CardTitleProps) {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className,
      )}
      {...props}
      data-testid={testId}
    >
      {children}
    </h3>
  );
}
