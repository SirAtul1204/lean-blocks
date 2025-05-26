import clsx from "clsx";
import { cloneElement, isValidElement, type AnchorHTMLAttributes } from "react";

interface TabProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
  wrapper?: React.ReactElement;
  active?: boolean;
}

export function Tab({ children, wrapper, active, ...props }: TabProps) {
  const styledChildren = (
    <span
      className={clsx(
        "text-primary-text py-2 px-6 border-b-2 cursor-pointer hover:bg-surface transition-all active:opacity-90",
        active ? "border-primary " : "border-border"
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
