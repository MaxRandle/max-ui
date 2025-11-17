import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const FigureStyles = tv({
  base: "relative overflow-hidden rounded-lg",
});

type FigureVariants = VariantProps<typeof FigureStyles>;

type ImagePropOverrides = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  "src" | "alt" | "width" | "height"
>;

export type FigureProps = JSX.IntrinsicElements["figure"] &
  FigureVariants & {
    src: string;
    alt: string;
    width: number;
    height: number;
    /**
     * @summary Marks the image as high priority; maps to loading="eager" internally
     */
    priority?: boolean;
    imageClassName?: string;
    imageProps?: ImagePropOverrides;
  };

export const Figure = forwardRef<HTMLElement, FigureProps>(
  (
    {
      className,
      src,
      alt,
      width,
      height,
      priority,
      imageClassName,
      imageProps,
      ...figureProps
    },
    ref
  ) => {
    const { loading, ...restImageProps } = imageProps ?? {};
    const resolvedLoading = priority ? "eager" : loading;
    const composedImageClassName = [
      "absolute left-0 top-0 h-full w-full object-cover",
      imageClassName,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <figure ref={ref} className={FigureStyles({ className })} {...figureProps}>
        <img
          className={composedImageClassName}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={resolvedLoading}
          {...restImageProps}
        />
      </figure>
    );
  }
);

Figure.displayName = "Figure";
