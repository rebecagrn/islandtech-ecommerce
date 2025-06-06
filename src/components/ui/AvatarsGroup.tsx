import Image from "next/image";
import { avatars as defaultAvatars } from "@/data/data";

interface AvatarsGroupProps {
  avatars: string[];
  size?: number;
  variant?: "overlap" | "centered";
}

export default function AvatarsGroup({
  avatars = defaultAvatars,
  size = 10,
  variant = "overlap",
}: AvatarsGroupProps) {
  if (variant === "centered") {
    return (
      <div
        className={`relative flex items-center justify-center mb-2 z-10 h-${size} w-28`}
      >
        <span
          className={`absolute left-2 bottom-0 w-${size} h-${size} rounded-full border-2 border-white overflow-hidden`}
        >
          <Image
            src={avatars[0]}
            alt="Avatar 1"
            width={size * 4}
            height={size * 4}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </span>
        <span
          className={`absolute left-1/2 -translate-x-1/2 w-${size} h-${size} rounded-full border-2 border-white overflow-hidden z-20`}
        >
          <Image
            src={avatars[1]}
            alt="Avatar 2"
            width={size * 4}
            height={size * 4}
            className="object-cover w-full h-full z-[99]"
            loading="lazy"
          />
        </span>
        <span
          className={`absolute right-2 bottom-0 w-${size} h-${size} rounded-full border-2 border-white overflow-hidden`}
        >
          <Image
            src={avatars[2]}
            alt="Avatar 3"
            width={size * 4}
            height={size * 4}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </span>
      </div>
    );
  }
  // Overlap variant
  return (
    <div className="relative overflow-visible min-w-[100px]">
      <div className="flex -space-x-4 overflow-visible">
        {avatars.map((src, idx) => (
          <span
            key={src}
            className={`w-${size} h-${size} rounded-full border-2 border-white overflow-hidden -ml-2 first:ml-0`}
          >
            <Image
              src={src}
              alt={`Avatar ${idx + 1}`}
              width={size * 4}
              height={size * 4}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
