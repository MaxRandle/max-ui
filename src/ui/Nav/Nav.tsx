import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const NavStyles = tv({
  base: "dark bg-base-1100 py-4 dark:bg-base-1200",
});

type NavVariants = VariantProps<typeof NavStyles>;

export type NavProps = JSX.IntrinsicElements["nav"] & NavVariants;

export const Nav = forwardRef<HTMLElement, NavProps>(
  ({ className, ...props }, ref) => {
    return <nav ref={ref} className={NavStyles({ className })} {...props} />;
  }
);

Nav.displayName = "Nav";
