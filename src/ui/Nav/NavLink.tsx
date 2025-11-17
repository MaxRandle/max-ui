import React, { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import NextLink from "next/link";

const NavLinkStyles = tv({
  base: [
    "focus-visible:ring-active border border-transparent",
    "rounded-lg p-2 text-lg sm:text-xl leading-loose",
    "text-base-500 hover:text-white",
  ],
  variants: {
    /**
     * @summary boolean indicating whether the NavLink is active
     */
    isActive: {
      true: "text-white",
      false: "",
    },
  },
});

type NavLinkVariants = VariantProps<typeof NavLinkStyles>;

export type NavLinkProps = React.ComponentPropsWithoutRef<typeof NextLink> &
  NavLinkVariants;

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, isActive, ...props }, ref) => {
    return (
      <NextLink
        ref={ref}
        className={NavLinkStyles({ isActive, className })}
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";
