import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`relative bg-white/60 backdrop-blur-md rounded-3xl h-full transition-transform duration-300 ease-out hover:shadow-md cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
}
