import Image from "next/image";
import ArrowTopRightIcon from "@/components/ui/ArrowTopRightIcon";
import AvatarsGroup from "@/components/ui/AvatarsGroup";
import Link from "next/link";

const avatars = [
  "https://i.pravatar.cc/40?img=20",
  "https://i.pravatar.cc/40?img=21",
  "https://i.pravatar.cc/40?img=22",
];

export default function ListeningReleasedCard() {
  return (
    <div className="relative bg-white/60 rounded-3xl p-4 flex flex-row items-center h-full overflow-hidden gap-4">
      <div className="flex flex-col justify-between h-full z-10 flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-white text-gray-600/80 text-[11px] px-2 py-0.5 rounded-full flex items-center gap-1 border-2 border-gray-200">
            <span className="">❤️‍🔥</span> Popular
          </span>
        </div>
        <div className="font-normal text-gray-900 text-base leading-tight mb-2 max-w-32">
          Listening Has Been Released
        </div>
        <AvatarsGroup variant="overlap" avatars={avatars} size={12} />
      </div>
      <div className="relative flex items-center justify-end h-full min-w-[120px] max-w-[220px] flex-shrink-0">
        <Image
          src="/assets/images/vr-background.png"
          alt="Listening Product"
          width={160}
          height={120}
          className="object-cover rounded-2xl h-full w-auto max-h-[120px]"
        />
        <div className="absolute top-2 right-2 z-20">
          <Link href="/">
            <ArrowTopRightIcon variant="secondary" />
          </Link>
        </div>
        <div
          className="absolute bottom-3 right-4 rounded-full px-1.5 py-0.5 flex items-center gap-1 text-gray-900 text-xs z-20"
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
    </div>
  );
}
