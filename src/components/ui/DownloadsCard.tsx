import AvatarsGroup from "@/components/ui/AvatarsGroup";
import Link from "next/link";
import Card from "@/components/ui/Card";

const avatars = [
  "https://i.pravatar.cc/40?img=10",
  "https://i.pravatar.cc/40?img=8",
  "https://i.pravatar.cc/40?img=9",
];

export default function DownloadsCard() {
  return (
    <Card className="px-6 py-4 flex flex-col items-center">
      <div className="flex justify-center mb-2 z-10">
        <AvatarsGroup avatars={avatars} variant="overlap" size={12} />
      </div>
      <div
        className="relative flex flex-col items-center justify-center w-24 h-24 rounded-full text-white -mt-6 z-0"
        style={{
          background: "linear-gradient(to bottom, #003366 0%, #60a5fa 100%)",
        }}
      >
        <div className="text-2xl font-light">5m+</div>
        <div className="text-xs font-extralight opacity-80">Downloads</div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-2 py-1.5 flex items-center gap-1 text-gray-900 text-xs w-28">
        <span className="text-lime-200 text-sm">★</span>
        <span>4.6 reviews</span>
      </div>
    </Card>
  );
}
