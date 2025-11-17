import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const SplitContainerStyles = tv({
  base: "flex w-full flex-col gap-6",
  variants: {
    breakpoint: {
      sm: "sm:gap-10 sm:grid sm:grid-cols-2 sm:grid-flow-dense sm:items-center sm:justify-center",
      md: "md:gap-10 md:grid md:grid-cols-2 md:grid-flow-dense md:items-center md:justify-center",
    },
  },
  defaultVariants: {
    breakpoint: "md",
  },
});

type SplitContainerVariants = VariantProps<typeof SplitContainerStyles>;

export type SplitContainerProps = JSX.IntrinsicElements["div"] &
  SplitContainerVariants;

export const SplitContainer = forwardRef<HTMLDivElement, SplitContainerProps>(
  ({ className, breakpoint, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={SplitContainerStyles({ breakpoint, className })}
        {...props}
      />
    );
  }
);

SplitContainer.displayName = "SplitContainer";
