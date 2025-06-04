import Image from "next/image";
import ArrowTopRightIcon from "@/components/ui/ArrowTopRightIcon";
import AvatarsGroup from "./AvatarsGroup";
import Link from "next/link";

const avatars = [
  "https://i.pravatar.cc/40?img=10",
  "https://i.pravatar.cc/40?img=8",
  "https://i.pravatar.cc/40?img=9",
];

export default function ListeningReleasedCard() {
  return (
    <div className="relative bg-white rounded-3xl p-4 flex items-center min-w-[320px] min-h-[140px] overflow-hidden">
      {/* Left content */}
      <div className="flex-1 flex flex-col justify-between h-full z-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-white text-gray-600/80 text-[11px] px-2 py-0.5 rounded-full flex items-center gap-1 border-2 border-gray-200">
            <span className="">❤️‍🔥</span> Popular
          </span>
        </div>
        <div className="font-light text-gray-900 text-base leading-tight mb-2 max-w-32">
          Listening Has Been Released
        </div>
        <AvatarsGroup variant="centered" avatars={avatars} size={12} />
      </div>
      <div className="absolute top-0 right-0 h-full w-1/2 z-0 flex items-center justify-end">
        <div className="relative h-full w-full flex items-center justify-end">
          <Image
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=512&q=80"
            alt="Listening Product"
            fill
            className="object-cover object-right"
            style={{ right: "-10%", minWidth: 180 }}
          />
        </div>
      </div>
      <div className="absolute top-2 right-2 z-20">
        <Link href="/">
          <ArrowTopRightIcon variant="secondary" />
        </Link>
      </div>
      <div
        className="absolute bottom-3 right-4 rounded-full px-2 py-0.5 flex items-center gap-1 text-gray-900 text-xs z-20"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.02)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <span className="text-yellow-400">★</span>
        <span className="font-bold">4.7</span>
      </div>
    </div>
  );
}
