import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import NextLink from "next/link";

const LinkStyles = tv({
  base: ["text-primary-700 dark:text-primary-500", "font-bold tracking-wide"],
});

type LinkVariants = VariantProps<typeof LinkStyles>;

export type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink> &
  LinkVariants;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, ...props }, ref) => {
    return (
      <NextLink ref={ref} className={LinkStyles({ className })} {...props} />
    );
  }
);

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
