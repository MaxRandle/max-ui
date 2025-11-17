import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const AvatarGroupStyles = tv({
  base: "group/avatar-group flex",
  variants: {},
});

type AvatarGroupVariants = VariantProps<typeof AvatarGroupStyles>;

export type AvatarGroupProps = JSX.IntrinsicElements["div"] &
  AvatarGroupVariants;

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={AvatarGroupStyles({ className })} {...props} />
    );
  }
);

AvatarGroup.displayName = "AvatarGroup";
