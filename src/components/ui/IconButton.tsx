import { ReactNode } from "react";
import Link from "next/link";

interface IconButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  ariaLabel?: string;
}

export default function IconButton({
  children,
  onClick,
  href,
  className = "",
  ariaLabel,
}: IconButtonProps) {
  const baseClass =
    "flex items-center gap-2 bg-white p-3 rounded-full justify-center h-12 w-12";
  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClass} ${className}`}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClass} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
