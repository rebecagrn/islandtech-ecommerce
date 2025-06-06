import AvatarsGroup from "@/components/ui/AvatarsGroup";
import Card from "@/components/ui/Card";

const avatars = [
  "https://i.pravatar.cc/40?img=10",
  "https://i.pravatar.cc/40?img=8",
  "https://i.pravatar.cc/40?img=9",
];

export default function DownloadsCard() {
  return (
    <Card className="w-full px-3 py-3 md:px-6 md:py-4 flex flex-col items-center relative">
      <div className="flex justify-center mb-2 z-10">
        <AvatarsGroup avatars={avatars} variant="overlap" size={12} />
      </div>
      <div className="flex flex-col items-center w-full">
        <div
          className="relative flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full text-white -mt-5 md:-mt-6 z-0"
          style={{
            background: "linear-gradient(to bottom, #003366 0%, #60a5fa 100%)",
          }}
        >
          <div className="text-lg md:text-2xl font-light">5m+</div>
          <div className="text-[10px] md:text-xs font-extralight opacity-80">
            Downloads
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="mt-2 md:mt-0 md:absolute md:bottom-3 md:left-1/2 md:-translate-x-1/2 bg-white rounded-full w-24 md:w-28 px-1.5 md:px-2 py-1 md:py-1.5 flex items-center gap-1 text-gray-900 text-[11px] md:text-xs shadow-sm">
            <span className="text-lime-200 text-xs md:text-sm">★</span>
            <span>4.6 reviews</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
