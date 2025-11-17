import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const AvatarContainerStyles = tv({
  base: "flex items-center group/avatar-container",
  variants: {},
});

type AvatarContainerVariants = VariantProps<typeof AvatarContainerStyles>;

export type AvatarContainerProps = JSX.IntrinsicElements["div"] &
  AvatarContainerVariants;

export const AvatarContainer = forwardRef<HTMLDivElement, AvatarContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={AvatarContainerStyles({ className })}
        {...props}
      />
    );
  }
);

AvatarContainer.displayName = "AvatarContainer";
