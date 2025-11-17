import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const InputStyles = tv({
  base: [
    "focus:ring-primary",
    "border appearance-none px-4 py-3 rounded-lg w-full",
    "placeholder-base-700 dark:placeholder-base-600",

    // base classes
    "text-base-900 bg-base-100 border-base-400",
    "dark:text-base-400 dark:bg-base-1200 dark:border-base-1000",

    // invalid classes
    "invalid:focus:ring-danger",
    "invalid:text-danger-900 invalid:bg-danger-100 invalid:border-danger-400",
    "dark:invalid:text-danger-400 dark:invalid:bg-danger-1200 dark:invalid:border-danger-1000",

    // disabled classes
    "disabled:opacity-60 disabled:pointer-events-none",

    "disabled:text-black disabled:bg-base-400 disabled:border-base-400",
    "disabled:dark:text-white disabled:dark:bg-base-1000 disabled:dark:border-base-1000",

    // group classes
    "group-[&]/input-group:focus:relative",
    "group-[&]/input-group:rounded-none",
    "group-[&]/input-group:first:ml-0",
    "group-[&]/input-group:-ml-[1px]",
    "group-[&]/input-group:first:rounded-l-lg",
    "group-[&]/input-group:last:rounded-r-lg",
  ],
});

type InputVariants = VariantProps<typeof InputStyles>;

export type InputProps = JSX.IntrinsicElements["input"] & InputVariants;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input ref={ref} className={InputStyles({ className })} {...props} />
    );
  }
);

Input.displayName = "Input";
