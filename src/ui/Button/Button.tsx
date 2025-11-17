import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import NextLink from "next/link";

const ButtonStyles = tv({
  base: [
    "font-semibold tracking-wider border rounded-full shadow-sm inline-flex items-center justify-center gap-4",

    "group-[&]/button-group:px-4",
    "group-[&]/button-group:rounded-none",
    "group-[&]/button-group:shadow-none",
    "group-[&]/button-group:first:rounded-l-full",
    "group-[&]/button-group:last:rounded-r-full",
    "group-[&]/button-group:first:pl-5",
    "group-[&]/button-group:last:pr-5",
    "group-[&]/button-group:hover:relative",
    "group-[&]/button-group:focus-visible:relative",
  ],
  variants: {
    /**
     * @summary specifies the background and text colors
     * @default "primary"
     */
    intent: {
      primary: [
        "focus-visible:ring-primary-solid",

        "text-white",
        "bg-primary-800 hover:bg-primary-700",
        "border-primary-800 hover:border-primary-700",
      ],
      secondary: [
        "focus-visible:ring-primary",

        "text-base-900",
        "bg-base-100 border-base-400",
        "hover:bg-base-200 hover:border-base-500",
        "dark:text-base-300",
        "dark:bg-base-1200 dark:border-base-1000",
        "dark:hover:bg-base-1100 dark:hover:border-base-800",
      ],
      destructive: [
        "focus-visible:ring-danger-solid",

        "text-white",
        "bg-danger-800 hover:bg-danger-700",
        "border-danger-800 hover:border-danger-700",
      ],
    },
    /**
     * @summary specifies size of the button
     * @default "md"
     */
    size: {
      md: "h-10 px-5 text-md",
      lg: "h-14 px-8 text-lg",
    },
    disabled: {
      true: [
        "opacity-60 pointer-events-none",
        "text-base-black bg-base-400 border-base-400",
        "dark:text-white dark:bg-base-1000 dark:border-base-1000",
      ],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
  },
});

type ButtonVariants = VariantProps<typeof ButtonStyles>;

export type ButtonProps = JSX.IntrinsicElements["button"] & ButtonVariants;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={ButtonStyles({ intent, size, disabled, className })}
        disabled={disabled}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export type ButtonStyleLinkProps = React.ComponentPropsWithoutRef<
  typeof NextLink
> &
  ButtonVariants;

export const ButtonStyleLink = forwardRef<
  React.ComponentRef<typeof NextLink>,
  ButtonStyleLinkProps
>(({ className, intent, size, disabled, ...props }, ref) => {
  return (
    <NextLink
      ref={ref}
      className={ButtonStyles({ intent, size, disabled, className })}
      {...props}
    />
  );
});

ButtonStyleLink.displayName = "ButtonStyleLink";
