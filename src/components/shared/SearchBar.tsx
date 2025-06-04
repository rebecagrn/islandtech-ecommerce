"use client";
import { useState, useEffect } from "react";
import { debounce } from "lodash";

interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({
  placeholder = "Search products...",
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearch = debounce((query: string) => {
    console.log(query);
  }, 300);

  useEffect(() => {
    debouncedSearch(searchQuery);
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchQuery, debouncedSearch]);

  return (
    <div className="relative w-full max-w-xs">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-6 py-3 rounded-full border-none bg-white text-gray-900 placeholder-black focus:outline-none focus:ring-2 focus:ring-black text-sm"
      />
      <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-black hover:bg-gray-900 text-white rounded-full p-2 transition">
        <span className="sr-only">Search</span>
        <svg
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </button>
    </div>
  );
}
