import AvatarsGroup from "@/components/ui/AvatarsGroup";

const avatars = [
  "https://i.pravatar.cc/40?img=10",
  "https://i.pravatar.cc/40?img=8",
  "https://i.pravatar.cc/40?img=9",
];

export default function DownloadsCard() {
  return (
    <div className="relative bg-white rounded-3xl px-6 py-4 flex flex-col items-center min-w-[170px] min-h-[180px]">
      <div className="flex justify-center mb-2 z-10">
        <AvatarsGroup avatars={avatars} variant="overlap" size={12} />
      </div>
      <div
        className="relative flex flex-col items-center justify-center w-24 h-24 rounded-full text-white -mt-6 z-0"
        style={{
          background: "linear-gradient(to bottom, #2563eb 0%, #60a5fa 100%)",
        }}
      >
        <div className="text-2xl font-light">5m+</div>
        <div className="text-xs font-extralight opacity-80">Downloads</div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-2 py-2 flex items-center gap-1 text-gray-900 text-xs w-28">
        <span className="text-lime-200 text-sm">★</span>
        <span>4.6 reviews</span>
      </div>
    </div>
  );
}
