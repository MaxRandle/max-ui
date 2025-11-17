import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import {
  type PolymorphicComponentProps,
  type PolymorphicComponentPropsWithRef,
  type PolymorphicForwardRefComponent,
  type PolymorphicRef,
} from "../../types/polymorphic";

const LinkStyles = tv({
  base: ["text-primary-700 dark:text-primary-500", "font-bold tracking-wide"],
});

type LinkVariants = VariantProps<typeof LinkStyles>;

type LinkProps<C extends React.ElementType = "a"> = PolymorphicComponentProps<
  C,
  LinkVariants
>;

type LinkComponent = PolymorphicForwardRefComponent<
  "a",
  LinkVariants
>;

export const Link = forwardRef(function Link<
  C extends React.ElementType = "a"
>({ className, component, ...props }: PolymorphicComponentPropsWithRef<C, LinkVariants>, ref: React.ForwardedRef<unknown>) {
  const Component = component ?? "a";

  return (
    <Component
      ref={ref as PolymorphicRef<C>}
      className={LinkStyles({ className })}
      {...props}
    />
  );
}) as LinkComponent;

Link.displayName = "Link";

export type ExternalLinkProps = JSX.IntrinsicElements["a"] & LinkVariants;

export const ExternalLink = forwardRef<HTMLAnchorElement, ExternalLinkProps>(
  ({ className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        className={LinkStyles({ className })}
        {...props}
      />
    );
  }
);

ExternalLink.displayName = "ExternalLink";

export type LinkStyleButtonProps = JSX.IntrinsicElements["button"];

export const LinkStyleButton = forwardRef<
  HTMLButtonElement,
  LinkStyleButtonProps
>(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={LinkStyles({
        className: `focus:ring-active rounded-md ${className}`,
      })}
      {...props}
    />
  );
});

LinkStyleButton.displayName = "LinkStyleButton";
