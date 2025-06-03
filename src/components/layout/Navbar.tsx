"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/Logo";
import { UserButton } from "@clerk/nextjs";
import { BellIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Desafios", href: "/challenges" },
  { name: "Perfil do Jogador", href: "/profile" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-3 md:px-0">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Logo />
          </div>
          {/* Desktop nav */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium",
                  pathname === item.href
                    ? "border-letsplay-red text-black"
                    : "border-transparent text-black hover:border-gray-300 hover:text-gray-700"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center">
              <Button variant="ghost" size="icon">
                <BellIcon className="w-4 h-4" />
              </Button>
            </div>
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
          {/* Mobile hamburger */}
          <div className="sm:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile fullscreen menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
          <Button
            variant="outline"
            className="rounded-full absolute top-4 right-4"
            size="icon"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </Button>
          <div className="flex flex-col gap-8 items-center mt-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-2xl font-bold",
                  pathname === item.href
                    ? "text-letsplay-red"
                    : "text-gray-800 hover:text-letsplay-red"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex gap-4 mt-8">
              <Button variant="ghost" size="icon">
                <BellIcon className="w-6 h-6" />
              </Button>
              <UserButton afterSignOutUrl="/sign-in" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
