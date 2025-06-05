import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen lg:h-screen flex flex-col bg-gray-100">
      <main className="flex-grow container mx-auto px-4 py-8 overflow-hidden">
        {children}
      </main>
    </div>
  );
}
