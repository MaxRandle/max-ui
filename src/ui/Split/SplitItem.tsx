import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const SplitItemStyles = tv({
  base: "",
  variants: {
    side: {
      left: "sm:col-start-1",
      right: "sm:col-start-2",
    },
  },
});

type SplitItemVariants = VariantProps<typeof SplitItemStyles>;

export type SplitItemProps = JSX.IntrinsicElements["div"] &
  Required<SplitItemVariants>;

export const SplitItem = forwardRef<HTMLDivElement, SplitItemProps>(
  ({ className, side, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={SplitItemStyles({ side, className })}
        {...props}
      />
    );
  }
);

SplitItem.displayName = "SplitItem";
