import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className="min-h-screen lg:h-screen flex flex-col"
      style={{
        background: "linear-gradient(to top, #f9f7ec, #e6eced)",
      }}
    >
      <main className="flex-grow container mx-auto px-4 py-8 overflow-hidden">
        {children}
      </main>
    </div>
  );
}
