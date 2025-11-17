import React, { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import {
  type PolymorphicComponentProps,
  type PolymorphicComponentPropsWithRef,
  type PolymorphicForwardRefComponent,
  type PolymorphicRef,
} from "../../types/polymorphic";

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

type NavLinkProps<C extends React.ElementType = "a"> =
  PolymorphicComponentPropsWithRef<C, NavLinkVariants>;

type NavLinkComponent = PolymorphicForwardRefComponent<
  "a",
  NavLinkVariants
>;

export const NavLink = forwardRef(function NavLink<
  C extends React.ElementType = "a"
>({ className, isActive, component, ...props }: NavLinkProps<C>, ref: React.ForwardedRef<unknown>) {
  const Component = component ?? "a";

  return (
    <Component
      ref={ref as PolymorphicRef<C>}
      className={NavLinkStyles({ isActive, className })}
      {...props}
    />
  );
}) as NavLinkComponent;

NavLink.displayName = "NavLink";
