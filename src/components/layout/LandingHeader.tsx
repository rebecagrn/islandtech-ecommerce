"use client";
import { useState } from "react";
import Image from "next/image";
import { Logo } from "@/components/layout/Logo";
import SearchBar from "@/components/shared/SearchBar";
import ShoppingBagIcon from "@/components/ui/icons/ShoppingBagIcon";
import HeartIcon from "@/components/ui/icons/HeartIcon";
import IconButton from "@/components/shared/IconButton";
import SearchIcon from "@/components/ui/icons/SearchIcon";
import { useAppStore } from "@/store/appStore";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function LandingHeader() {
  const [showSearch, setShowSearch] = useState(false);
  const cartQuantity = useAppStore((state) => state.getCartQuantity());
  const isMobile = useIsMobile();

  return (
    <header
      className={`${
        isMobile ? "sticky" : " "
      } top-4 z-50 flex items-center justify-between p-2 bg-white/60 backdrop-blur-md rounded-full w-full gap-2 shadow-sm`}
    >
      <Logo />
      <div className="flex-1 hidden md:flex justify-start">
        <SearchBar />
      </div>

      {showSearch && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center md:hidden">
          <div className="bg-white rounded-full mt-4 w-[90vw] max-w-md p-2 flex">
            <SearchBar />
            <button
              className="ml-4 text-gray-500"
              onClick={() => setShowSearch(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        <div className="md:hidden">
          <IconButton
            ariaLabel="Search"
            onClick={() => setShowSearch((s) => !s)}
          >
            <SearchIcon />
          </IconButton>
        </div>
        <IconButton href="/cart" aria-label="Cart" className="relative">
          <ShoppingBagIcon className="text-gray-900" />
          {cartQuantity > 0 && (
            <span className="absolute -top-1 -right-1 text-xs bg-gray-900 text-white rounded-full w-5 h-5 flex items-center justify-center">
              {cartQuantity}
            </span>
          )}
        </IconButton>
        <IconButton ariaLabel="Favorites">
          <HeartIcon />
        </IconButton>
        <div className="hidden md:flex items-center gap-3 bg-white p-1 rounded-full">
          <span className="font-normal text-gray-900 text-xs ml-2">
            Ryman Alex
          </span>
          <span className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 border-2 border-gray-200">
            <Image
              src="https://i.pravatar.cc/40?img=20"
              alt="User avatar"
              width={50}
              height={50}
              className="w-full h-full object-cover"
            />
          </span>
        </div>
      </div>
    </header>
  );
}
