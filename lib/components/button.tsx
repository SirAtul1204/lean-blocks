import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";
import { Loading } from "./loading";
import { Icon, type IconOptions } from "./icon";

type BaseProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  variant?: "primary" | "secondary";
  isLoading?: boolean;
  disabled?: boolean;
  iconPosition?: "left" | "right";
  icon?: IconOptions;
};

type ButtonProps = BaseProps;

export function Button({
  variant = "primary",
  children,
  isLoading,
  disabled,
  className,
  icon,
  iconPosition = "right",
  ...props
}: ButtonProps) {
  const defaultStyles = "px-4 py-2 rounded flex items-center gap-2 ";
  const notDisabledStyles =
    "transition-all hover:-translate-y-1 hover:shadow-md active:shadow-sm active:-translate-y-0.5 opacity-90 hover:opacity-100 active:opacity-100";
  const primaryStyles = "bg-primary text-btn-primary-text cursor-pointer";
  const secondaryStyles = "bg-secondary text-btn-secondary-text cursor-pointer";
  const disabledStyles =
    "bg-btn-disabled-bg bg-btn-disabled-text cursor-not-allowed";

  return (
    <button
      className={clsx(
        defaultStyles,
        variant === "primary" && !disabled && primaryStyles,
        variant === "secondary" && !disabled && secondaryStyles,
        !disabled && notDisabledStyles,
        disabled && disabledStyles,
        className
      )}
      {...props}
    >
      {iconPosition === "left" && icon && <Icon icon={icon} color="button" />}
      {children}
      {iconPosition === "right" && icon && <Icon icon={icon} color="button" />}
      {isLoading && (
        <Loading
          size="xs"
          variant={
            !disabled
              ? variant === "primary"
                ? "secondary"
                : "primary"
              : "secondary"
          }
        />
      )}
    </button>
  );
}
