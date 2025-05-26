import clsx from "clsx";
import type { FC, ImgHTMLAttributes, SVGProps } from "react";
import ChevronRight from "../svgs/chevron-right.svg?react";

export type IconOptions = "chevron-right";

interface IconProps extends ImgHTMLAttributes<SVGElement> {
  icon: IconOptions;
  size?: "sm" | "md" | "xl";
  color?: "default" | "button" | "success" | "error" | "primary" | "secondary";
}

const iconMap: Map<IconOptions, FC<SVGProps<SVGSVGElement>>> = new Map([
  ["chevron-right", ChevronRight],
]);

export function Icon({
  icon,
  size = "sm",
  color = "default",
  ...props
}: IconProps) {
  const IconComponent = iconMap.get(icon)!;

  return (
    <IconComponent
      className={clsx(
        size === "sm" && "w-6 h-6",
        size === "md" && "w-8 h-8",
        size === "xl" && "w-10 h-10",
        color === "default" && "text-primary-text",
        color === "button" && "text-btn-primary-text",
        color === "success" && "text-success",
        color === "error" && "text-error",
        color === "primary" && "text-primary",
        color === "secondary" && "text-secondary"
      )}
      {...props}
    />
  );
}
