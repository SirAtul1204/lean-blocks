import clsx from "clsx";

interface LoadingProps {
  size?: "xs" | "sm";
  variant?: "primary" | "secondary";
}

export function Loading({ size = "sm", variant }: LoadingProps) {
  const sizeStyle = clsx(
    size === "xs" && "w-1 h-1",
    size === "sm" && "w-3 h-3"
  );

  return (
    <div className={clsx("flex gap-1")}>
      <div
        className={clsx(
          sizeStyle,
          variant === "primary" && "bg-primary",
          variant === "secondary" && "bg-secondary",
          " rounded-full  animate-bounce"
        )}
      ></div>
      <div
        className={clsx(
          sizeStyle,
          variant === "primary" && "bg-primary",
          variant === "secondary" && "bg-secondary",
          "rounded-full  animate-bounce-2"
        )}
      ></div>
      <div
        className={clsx(
          sizeStyle,
          variant === "primary" && "bg-primary",
          variant === "secondary" && "bg-secondary",
          " rounded-full  animate-bounce-3"
        )}
      ></div>
    </div>
  );
}
