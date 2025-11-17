import React, { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import NextImage, { ImageProps as NextImageProps } from "next/image";

const AvatarStyles = tv({
  base: [
    "text-primary-800 bg-primary-300 ring-base-200",
    "dark:text-primary-500 dark:bg-base-1000 dark:ring-base-1200",
    "relative shrink-0 overflow-hidden inline-block rounded-full",
    "group-[&]/avatar-group:first:ml-0",
  ],
  variants: {
    size: {
      sm: [
        "text-lg w-12 h-12",
        "group-[&]/avatar-group:-ml-2",
        "group-[&]/avatar-group:ring-4",
        "group-[&]/avatar-container:mr-3",
      ],
      md: [
        "text-xl w-16 h-16",
        "group-[&]/avatar-group:-ml-4",
        "group-[&]/avatar-group:ring-4",
        "group-[&]/avatar-container:mr-4",
      ],
      lg: [
        "text-2xl w-20 h-20",
        "group-[&]/avatar-group:-ml-5",
        "group-[&]/avatar-group:ring-4",
        "group-[&]/avatar-container:mr-4",
      ],
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type AvatarVariants = VariantProps<typeof AvatarStyles>;

export type AvatarProps = Omit<JSX.IntrinsicElements["div"], "children"> &
  AvatarVariants & {
    /**
     * @summary text to be rendered in place of an image
     */
    fallback: string;
  } & Partial<Pick<NextImageProps, "src" | "priority">>;

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, fallback, className, size, priority, ...props }, ref) => {
    const imageSize = (size === "sm" ? 48 : size === "md" ? 64 : 80) * 2; // double for resolution

    return (
      <div ref={ref} className={AvatarStyles({ size, className })} {...props}>
        {src ? (
          <NextImage
            className="aspect-square h-full w-full"
            src={src}
            alt={fallback}
            width={imageSize}
            height={imageSize}
            priority={priority}
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center rounded-full">
            {fallback}
          </span>
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";
