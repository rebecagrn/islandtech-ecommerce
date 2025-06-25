import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col max-w-4xl lg:max-w-5xl xl:max-w-7xl mx-auto">
      <main className="flex-grow container mx-auto px-4 pt-8">{children}</main>
    </div>
  );
}
