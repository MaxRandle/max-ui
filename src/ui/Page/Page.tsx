import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const PageStyles = tv({
  base: "min-h-svh",
});

type PageVariants = VariantProps<typeof PageStyles>;

export type PageProps = JSX.IntrinsicElements["main"] & PageVariants;

export const Page = forwardRef<HTMLElement, PageProps>(
  ({ className, ...props }, ref) => {
    return <main ref={ref} className={PageStyles({ className })} {...props} />;
  }
);

Page.displayName = "Page";
