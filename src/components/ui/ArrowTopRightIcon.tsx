import { cn } from "@/lib/utils";
import React from "react";

interface ArrowTopRightIconProps {
  className?: string;
  variant?: "default" | "secondary";
}

export default function ArrowTopRightIcon({
  className = "w-5 h-5",
  variant = "default",
}: ArrowTopRightIconProps) {
  const isSecondary = variant === "secondary";
  const bgClass = isSecondary
    ? "bg-white text-black hover:bg-black group"
    : "bg-black text-white hover:bg-lime-200 hover:text-black group";

  return (
    <div
      className={cn(
        "rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lime-200",
        bgClass
      )}
      tabIndex={0}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className={cn(
          className,
          isSecondary
            ? "stroke-black group-hover:stroke-lime-200"
            : "stroke-white group-hover:stroke-black"
        )}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </div>
  );
}
