import Image from "next/image";
import { Logo } from "./Logo";
import SearchBar from "../shared/SearchBar";

export default function LandingHeader() {
  return (
    <header className="flex items-center justify-between p-2 bg-gray-50 rounded-full w-full gap-2">
      <Logo />
      {/* Search Bar */}
      <div className="flex-1 flex justify-start">
        <SearchBar />
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 bg-white p-3 rounded-full justify-center">
          <svg
            width="22"
            height="22"
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
        <div className="flex items-center gap-2 bg-white p-3 rounded-full justify-center">
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
        <div className="flex items-center gap-3 bg-white p-1 rounded-full">
          <span className="font-normal text-gray-900 text-xs ml-2">
            Ryman Alex
          </span>
          <span className="w-10 h-10 rounded-full overflow-hidden bg-gray-300 border-2 border-gray-200">
            {/* Placeholder avatar */}
            <Image
              src="https://i.pravatar.cc/40?img=7"
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
