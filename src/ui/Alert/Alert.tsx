import { forwardRef, JSX } from "react";
import { tv, type VariantProps } from "tailwind-variants";

import {
  BsXOctagon,
  BsExclamationTriangle,
  BsInfoCircle,
  BsCheckSquare,
} from "react-icons/bs";

const AlertStyles = tv({
  base: "rounded-lg border-2 p-4 flex flex-col gap-2",
  variants: {
    status: {
      success: [
        "text-success-800 border-success-600 bg-success-200",
        "dark:text-success-300 dark:border-success-600 dark:bg-success-1200",
      ],
      info: [
        "text-info-800 border-info-600 bg-info-200",
        "dark:text-info-300 dark:border-info-600 dark:bg-info-1200",
      ],
      warning: [
        "text-warning-800 border-warning-600 bg-warning-200",
        "dark:text-warning-300 dark:border-warning-600 dark:bg-warning-1200",
      ],
      danger: [
        "text-danger-800 border-danger-600 bg-danger-200",
        "dark:text-danger-300 dark:border-danger-600 dark:bg-danger-1200",
      ],
    },
  },
});

type AlertVariants = VariantProps<typeof AlertStyles>;

export type AlertProps = JSX.IntrinsicElements["div"] &
  Omit<AlertVariants, "status"> &
  Required<Pick<AlertVariants, "status">> & {
    title: React.ReactNode;
  };

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, children, title, status, ...props }, ref) => {
    const Icon =
      status === "danger"
        ? BsXOctagon
        : status === "warning"
          ? BsExclamationTriangle
          : status === "info"
            ? BsInfoCircle
            : BsCheckSquare;

    return (
      <div ref={ref} className={AlertStyles({ status, className })} {...props}>
        <div className="flex items-center gap-3">
          <p>
            <Icon size={24} />
          </p>
          <p className="text-lg">{title}</p>
        </div>
        <div>{children}</div>
      </div>
    );
  }
);

Alert.displayName = "Alert";
