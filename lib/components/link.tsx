import clsx from "clsx";
import { cloneElement, isValidElement, type AnchorHTMLAttributes } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
  variant?: "primary" | "secondary";
  wrapper?: React.ReactElement;
}

export function Link({
  children,
  variant = "primary",
  wrapper,
  className,
  ...props
}: LinkProps) {
  const styledChildren = (
    <span
      className={clsx(
        variant === "primary" && "text-primary",
        variant === "secondary" && "text-secondary",
        "hover:underline cursor-pointer opacity-90 hover:opacity-100 active:opacity-90",
        className
      )}
    >
      {children}
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
