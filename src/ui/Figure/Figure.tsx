import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import NextImage, { ImageProps as NextImageProps } from "next/image";

const FigureStyles = tv({
  base: "relative overflow-hidden rounded-lg",
});

type FigureVariants = VariantProps<typeof FigureStyles>;

export type FigureProps = JSX.IntrinsicElements["figure"] &
  FigureVariants &
  Pick<NextImageProps, "src" | "alt" | "priority"> &
  Required<Pick<NextImageProps, "width" | "height">>;

export const Figure = forwardRef<HTMLElement, FigureProps>(
  ({ className, src, alt, width, height, priority, ...props }, ref) => {
    return (
      <figure ref={ref} className={FigureStyles({ className })} {...props}>
        <NextImage
          className="absolute left-0 top-0 h-full w-full object-cover"
          src={src}
          alt={alt}
          priority={priority}
          width={width}
          height={height}
        />
      </figure>
    );
  }
);

Figure.displayName = "Figure";
