import Image from "next/image";
import { Logo } from "@/components/layout/Logo";
import SearchBar from "@/components/shared/SearchBar";
import HeartIcon from "@/components/ui/HeartIcon";

export default function LandingHeader() {
  return (
    <header className="flex items-center justify-between p-2 bg-white/60 rounded-full w-full gap-2">
      <Logo />
      <div className="flex-1 flex justify-start">
        <SearchBar />
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 bg-white p-3 rounded-full justify-center">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 6h15l-1.5 9h-13z" />
            <circle cx="9" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
          </svg>
        </button>
        <div className="flex items-center gap-2 bg-white p-2 rounded-full justify-center">
          <HeartIcon className="text-[#F44336]" />
        </div>
        <div className="flex items-center gap-3 bg-white p-1 rounded-full">
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
