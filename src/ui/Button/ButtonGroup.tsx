import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const ButtonGroupStyles = tv({
  base: "group/button-group inline-flex -space-x-px rounded-full shadow-sm",
});

type ButtonGroupVariants = VariantProps<typeof ButtonGroupStyles>;

export type ButtonGroupProps = JSX.IntrinsicElements["div"] &
  ButtonGroupVariants;

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={ButtonGroupStyles({ className })} {...props} />
    );
  }
);

ButtonGroup.displayName = "ButtonGroup";
