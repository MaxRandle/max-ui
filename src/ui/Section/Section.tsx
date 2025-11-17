import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const SectionStyles = tv({
  base: "",
  variants: {
    /**
     * @summary determines the vertical separation between two adjacent sections
     * @default "md"
     */
    spacing: {
      md: "my-20 sm:my-36 py-20 sm:py-36",
      lg: "my-32 sm:my-60 py-32 sm:py-60",
    },
    /**
     * @summary specifies the background color
     * @default "transparent"
     */
    palette: {
      transparent: ["py-0 sm:py-0"],
      surface: ["my-0 sm:my-0", "bg-base-300 dark:bg-base-1200"],
      primary: ["my-0 sm:my-0", "bg-primary-900 dark:bg-primary-1100", "dark"],
      base: ["my-0 sm:my-0", "bg-white dark:bg-black"],
    },
  },
  defaultVariants: {
    palette: "transparent",
    spacing: "md",
  },
});

type SectionVariants = VariantProps<typeof SectionStyles>;

export type SectionProps = JSX.IntrinsicElements["section"] & SectionVariants;

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, palette, spacing, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={SectionStyles({ spacing, palette, className })}
        {...props}
      />
    );
  }
);

Section.displayName = "Section";
