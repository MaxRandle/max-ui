import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const InputAdornmentStyles = tv({
  base: [
    "border rounded-lg px-4 py-3",
    "text-base-900 bg-base-100 border-base-400",
    "dark:text-base-400 dark:bg-base-1200 dark:border-base-1000",

    // group classes
    "group-[&]/input-group:rounded-none",
    "group-[&]/input-group:first:ml-0",
    "group-[&]/input-group:-ml-[1px]",
    "group-[&]/input-group:first:rounded-l-lg",
    "group-[&]/input-group:last:rounded-r-lg",
  ],
});

type InputAdornmentVariants = VariantProps<typeof InputAdornmentStyles>;

export type InputAdornmentProps = JSX.IntrinsicElements["div"] &
  InputAdornmentVariants;

export const InputAdornment = forwardRef<HTMLDivElement, InputAdornmentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={InputAdornmentStyles({ className })}
        {...props}
      />
    );
  }
);

InputAdornment.displayName = "InputAdornment";
