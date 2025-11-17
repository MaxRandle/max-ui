import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const TypographyStyles = tv({
  base: "text-base",
  variants: {
    /**
     * @summary specifies the color of the text
     * @default "weak"
     */
    palette: {
      inherit: "",
      base: "text-black dark:text-white",
      weak: "text-base-900 dark:text-base-400",
      weaker: "text-base-800 dark:text-base-500",
      primary: "text-primary-800 dark:text-primary-500",
    },
    /**
     * @summary specifies the size of the text
     * @default "body"
     */
    level: {
      subheading: "text-lg sm:text-xl",
      body: "text-base sm:text-lg",
      caption: "text-sm sm:text-base",
    },
  },
  defaultVariants: {
    palette: "weak",
    level: "body",
  },
});

type TypographyVariants = VariantProps<typeof TypographyStyles>;

export type TypographyProps = JSX.IntrinsicElements["p"] & TypographyVariants;

export const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ palette, level, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={TypographyStyles({ palette, level, className })}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";
