import clsx from "clsx";
import { cloneElement, isValidElement, type AnchorHTMLAttributes } from "react";
import { Icon, type IconOptions } from "./icon";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
  variant?: "primary" | "secondary";
  wrapper?: React.ReactElement;
  icon?: IconOptions;
  iconPosition?: "right" | "left";
}

export function Link({
  children,
  variant = "primary",
  wrapper,
  className,
  icon,
  iconPosition = "right",
  ...props
}: LinkProps) {
  const styledChildren = (
    <span
      className={clsx(
        variant === "primary" && "text-primary",
        variant === "secondary" && "text-secondary",
        "hover:underline cursor-pointer opacity-90 hover:opacity-100 active:opacity-90 flex gap-2",
        className
      )}
    >
      {children}
      {iconPosition === "right" && icon && (
        <Icon
          icon={icon}
          size="sm"
          color={variant === "primary" ? "primary" : "secondary"}
        />
      )}
    </span>
  );

  if (wrapper && isValidElement(wrapper)) {
    return cloneElement(
      wrapper,
      { ...(wrapper.props || {}), ...(props || {}) },
      styledChildren
    );
  }

  return <a {...props}>{styledChildren}</a>;
}
