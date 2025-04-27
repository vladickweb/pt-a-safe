"use client";

import { ButtonHTMLAttributes, forwardRef, useMemo } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  "data-testid"?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      children,
      type = "submit",
      "data-testid": dataTestId,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-semibold leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

    const variants = useMemo(
      () => ({
        primary: `
          bg-primary text-white
          dark:bg-primary-dark dark:text-white
          hover:bg-primary-light
          dark:hover:bg-primary
          focus-visible:ring-primary-light
          dark:focus-visible:ring-primary-dark
        `,
        secondary: `
          bg-secondary text-white
          dark:bg-secondary-dark dark:text-white
          hover:bg-secondary-light
          dark:hover:bg-secondary
          focus-visible:ring-secondary-light
          dark:focus-visible:ring-secondary-dark
        `,
        outline: `
          border border-foreground text-foreground
          dark:border-foreground-dark dark:text-foreground-dark
          bg-transparent
          hover:bg-foreground/10
          dark:hover:bg-foreground-dark/10
          focus-visible:ring-foreground
          dark:focus-visible:ring-foreground-dark
        `,
        ghost: `
          bg-transparent text-foreground
          dark:text-foreground-dark
          hover:bg-foreground/10
          dark:hover:bg-foreground-dark/10
          focus-visible:ring-foreground
          dark:focus-visible:ring-foreground-dark
        `,
      }),
      [],
    );

    const sizes = useMemo(
      () => ({
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
      }),
      [],
    );

    return (
      <button
        ref={ref}
        {...props}
        type={type}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={isLoading || props.disabled}
        aria-busy={isLoading}
        data-testid={dataTestId}
      >
        {isLoading && (
          <div
            className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
            data-testid={
              dataTestId ? `${dataTestId}-loading-spinner` : undefined
            }
          />
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
