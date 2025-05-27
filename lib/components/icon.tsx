import clsx from "clsx";
import type { FC, ImgHTMLAttributes, SVGProps } from "react";
import ChevronRight from "../svgs/chevron-right.svg?react";
import ChevronLeft from "../svgs/chevron-left.svg?react";
import ChevronUp from "../svgs/chevron-up.svg?react";
import ChevronDown from "../svgs/chevron-down.svg?react";

export type IconOptions =
  | "chevron-right"
  | "chevron-up"
  | "chevron-left"
  | "chevron-down";

interface IconProps extends ImgHTMLAttributes<SVGElement> {
  icon: IconOptions;
  size?: "sm" | "md" | "xl";
  color?: "default" | "button" | "success" | "error" | "primary" | "secondary";
}

const iconMap: Map<IconOptions, FC<SVGProps<SVGSVGElement>>> = new Map([
  ["chevron-right", ChevronRight],
  ["chevron-left", ChevronLeft],
  ["chevron-up", ChevronUp],
  ["chevron-down", ChevronDown],
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
