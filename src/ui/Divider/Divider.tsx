import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const DividerStyles = tv({
  base: "border-base-300 dark:border-base-1000",
});

type DividerVariants = VariantProps<typeof DividerStyles>;

export type DividerProps = JSX.IntrinsicElements["hr"] & DividerVariants;

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className, ...props }, ref) => {
    return <hr ref={ref} className={DividerStyles({ className })} {...props} />;
  }
);

Divider.displayName = "Divider";
