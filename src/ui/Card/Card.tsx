import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import {
  type PolymorphicComponentProps,
  type PolymorphicComponentPropsWithRef,
  type PolymorphicForwardRefComponent,
  type PolymorphicRef,
} from "../../types/polymorphic";

const CardStyles = tv({
  base: "rounded-lg overflow-hidden",
  variants: {
    /**
     * @summary Specifies the background color of the card.
     * @default "surface"
     */
    palette: {
      base: [
        "border",
        "bg-base-100 border-base-300",
        "dark:bg-base-1300 dark:border-base-1000",
      ],
      surface: [
        "border",
        "bg-base-200 border-base-400",
        "dark:bg-base-1200 dark:border-base-1000",
      ],
      gradient: [
        "bg-gradient-rad-2",
        "from-primary-800 dark:from-primary-600 to-transparent",
      ],
    },
    /**
     * @summary Specifies the elevation of the card.
     * @default "low"
     */
    elevation: {
      flat: "",
      low: "shadow-md dark:shadow-glow-sm",
      high: "shadow-lg dark:shadow-glow-md",
    },
  },
  defaultVariants: {
    palette: "surface",
    elevation: "low",
  },
});

type CardVariants = VariantProps<typeof CardStyles>;

export type CardProps = JSX.IntrinsicElements["div"] & CardVariants;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, palette, elevation, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={CardStyles({ palette, elevation, className })}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

const CardLinkStyles = tv({
  extend: CardStyles,
  base: [
    "transition-colors",
    "focus:ring-active",
    "hover:bg-base-300 hover:border-base-500",
    "dark:hover:bg-base-1100 dark:hover:border-base-900",
  ],
});

type CardLinkProps<C extends React.ElementType = "a"> =
  PolymorphicComponentPropsWithRef<C, CardVariants>;

type CardLinkComponent = PolymorphicForwardRefComponent<
  "a",
  CardVariants
>;

export const CardLink = forwardRef(function CardLink<
  C extends React.ElementType = "a"
>(
  { className, palette, elevation, component, ...props }: CardLinkProps<C>,
  ref: React.ForwardedRef<unknown>
) {
  const Component = component ?? "a";

  return (
    <Component
      ref={ref as PolymorphicRef<C>}
      className={CardLinkStyles({ palette, elevation, className })}
      {...props}
    />
  );
}) as CardLinkComponent;

CardLink.displayName = "CardLink";
