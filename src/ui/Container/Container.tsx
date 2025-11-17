import { tv, type VariantProps } from "tailwind-variants";
import React, { JSX } from "react";

const ContainerStyles = tv({
  base: "mx-auto px-6 lg:px-10 w-full md:max-w-[48rem] lg:max-w-[64rem]",
  variants: {},
});

type ContainerVariants = VariantProps<typeof ContainerStyles>;

export type ContainerProps = JSX.IntrinsicElements["div"] & ContainerVariants;

export const Container = React.forwardRef<
  React.ComponentRef<"div">,
  ContainerProps
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={ContainerStyles({ className })} {...props} />
  );
});

Container.displayName = "Container";
