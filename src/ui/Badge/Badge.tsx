import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const BadgeStyles = tv({
  base: [
    "rounded-full h-6 text-sm px-3 inline-flex items-center justify-center border",
    "bg-primary-300 text-primary-800 border-primary-400",
    "dark:bg-primary-1000 dark:text-primary-400 dark:border-primary-900",
  ],
  variants: {},
});

type BadgeVariants = VariantProps<typeof BadgeStyles>;

export type BadgeProps = JSX.IntrinsicElements["span"] & BadgeVariants;

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, ...props }, ref) => {
    return <span ref={ref} className={BadgeStyles({ className })} {...props} />;
  }
);

Badge.displayName = "Badge";
